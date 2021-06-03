var params = browser.params;
//i18n basic support
 var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
 var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
 var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
 var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
 var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber1= 'GCMSQABANG-2689'; 
 var jiraNumber2= 'GCMSQABANG-3502'; 
 var testData = require('../../../../test-data/Jira_TestData/Context Index/'+ jiraNumber2 + '.js');
 var loaded = testData[params.env][params.BU];


describe('Context Index', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        contextindexpage.urlLoad(params.valid_username, params.valid_password);

    });

    afterEach(function () {//Close additional tab
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[0]);
            for (var i = 1; i < handles.length; i++) {
                browser.switchTo().window(handles[i]).then(function () {
                    browser.close();
                }, function (error) {
                    browser.switchTo().window(handles[0]);
                });
            }
            browser.switchTo().window(handles[0]);
        });
	});
		
	//02 - Edit entry - change entry from full document to a unit
	//02 - Edit entry - change unit

    it('should change entry from full document to a unit.' +jiraNumber1+'.'+jiraNumber2, function () {
		
		
	browser.waitForAngular();
    globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
    browser.sleep(1000);
    contextindexpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
    browser.sleep(1000);
    contextindexpage.enterValueInSearchField('term',loaded.termtoselect);
    browser.sleep(1000);
    contextindexpage.contextindexAction(loaded.edit_button);
    browser.sleep(1000);
    
      browser.getAllWindowHandles().then(function(handles) {
       var newTabHandle = handles[1];
       var currenthandle = handles[0];

       browser.switchTo().window(newTabHandle).then(function () {

		    browser.sleep(2000);
			contextindexpage.deleteUnitIncontextIndexPopUp('edit');
			browser.sleep(1000);
			thesauruspage.clickAndSearchAUnit(loaded.unit_name);
			browser.sleep(1000);
            globalfunction.clickOnButtonForGlobal(loaded.save);
            browser.sleep(1000);
            globalfunction.clickOnButtonForGlobal('Ok');
            browser.close();
                
       });
       browser.switchTo().window(currenthandle); 
       browser.waitForAngular();
       contextindexpage.contextindexAction('detail');
       browser.sleep(1000);
       var value3=contextindexpage.verifyInfoOfLensIcon(loaded.key3);
        expect(value3).toEqual(loaded.expectedvalue3);
        var todays_date = globalfunction.getDateAndVerify(loaded.path_date);
        expect(todays_date).toEqual(true);
       globalfunction.clickOnNavigationOrCloseButton('close');

   });

  });
});
