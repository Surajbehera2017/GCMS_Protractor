var params = browser.params;
//i18n basic support
 var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
 var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
 var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
 var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
 var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber= 'GCMSQABANG-3496'; 
 var testData = require('../../../../test-data/Jira_TestData/Context Index/'+ jiraNumber + '.js');
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

	//06 - Delete an entry associated to more than one unit
	it('Delete an entry associated to more than one unit context index table.' +jiraNumber, function () {
		
		browser.waitForAngular();
		globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.btn);
		browser.sleep(1000);
		
		  browser.getAllWindowHandles().then(function(handles) {
		   var newTabHandle = handles[1];
		   var currenthandle = handles[0];

		   browser.switchTo().window(newTabHandle).then(function () {
	   
			   browser.sleep(2000);
			   browser.driver.manage().window().maximize();
			   browser.sleep(2000);

			    thesauruspage.clickOnPlusButton();
				thesauruspage.enterUnitIDInPopup(loaded.unit);
				thesauruspage.clickOnComplementDropdown();
				thesauruspage.selectNumberFromComplement(loaded.number_1);
				browser.waitForAngular();
				contextindexpage.clickOnSaveInUnitPopup();
				browser.sleep(2000);
				
				thesauruspage.clickOnPlusButton();
				thesauruspage.enterUnitIDInPopup(loaded.unit);
				thesauruspage.clickOnComplementDropdown();
				thesauruspage.selectNumberFromComplement(loaded.number_2);
				browser.waitForAngular();
				contextindexpage.clickOnSaveInUnitPopup();
				 browser.sleep(2000);


			   contextindexpage.selectContextIndexTypeFromDropdown(loaded.type);
			   browser.sleep(4000);
			   authorNotes.selectContextIndexHierarchy(loaded.hirarechy);
			   browser.sleep(1000);
			   authorNotes.selectValueFromContextIndexTerm(loaded.term1);
			   browser.sleep(1000);
			   contextindexpage.enterTextInInternalNote('sample text');
			   browser.sleep(1000);
			   globalfunction.clickOnButtonForGlobal(loaded.save);
			   browser.close();
				   
		   });
		   browser.switchTo().window(currenthandle); 
		   //browser.ignoreSynchronization(false);
		   browser.sleep(1000);
		   browser.driver.navigate().refresh();
		   contextindexpage.ContextIndexTotal().then(function(totalCount){
		

			browser.sleep(5000);
			globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
			browser.sleep(1000);		
		   contextindexpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
		   browser.sleep(1000);
		   contextindexpage.enterValueInSearchField('term',loaded.term1);
		   browser.sleep(1000);
		   thesauruspage.selectNoOfRows('1');
		   thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
		   browser.sleep(1000);
		   globalfunction.clickOnButtonForGlobal('Yes');
		   browser.sleep(1000);

		   globalfunction.clickOnNavigationOrCloseButton('close');
		   browser.sleep(5000);
		   expect(contextindexpage.ContextIndexTotal()).toEqual(totalCount-1);
			});
			globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
			browser.sleep(1000);		
		   contextindexpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
		   browser.sleep(1000);
		   contextindexpage.enterValueInSearchField('term',loaded.term1);
		   browser.sleep(1000);
		   thesauruspage.selectNoOfRows('All');
		   thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
		   browser.sleep(1000);
		   globalfunction.clickOnButtonForGlobal('Yes');
		   browser.sleep(1000);

		   globalfunction.clickOnNavigationOrCloseButton('close');
		   browser.sleep(5000);	

	   });


	});

});








