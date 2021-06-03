var params = browser.params;
//i18n basic support
 var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
 var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
 var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
 var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
 var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber= 'GCMSQABANG-2323';
 var testData = require('../../../../test-data/Jira_TestData/Context Index/'+ jiraNumber + '.js');
 var loaded = testData[params.env][params.BU];


describe('Context Index', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		browser.sleep(3000);
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


	//01 - Add entries
	it('should add context index.' + jiraNumber, function () {

		 browser.sleep(1000);
		 globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
		 authorNotes.clickOnbuttonInsideSectionTable(loaded.btn);
		 browser.sleep(1000);
		 
		   browser.getAllWindowHandles().then(function(handles) {
			var newTabHandle = handles[1];
			var currenthandle = handles[0];
				browser.switchTo().window(newTabHandle).then(function () {
		
			    browser.sleep(2000);
			    browser.driver.manage().window().maximize();
				browser.sleep(2000);
				contextindexpage.selectContextIndexTypeFromDropdown(loaded.type);
				browser.sleep(4000);
				authorNotes.selectContextIndexHierarchy(loaded.hirarechy);
				browser.sleep(1000);
				authorNotes.selectValueFromContextIndexTerm(loaded.term1);
				browser.sleep(1000);
				authorNotes.selectValueFromContextIndexTerm(loaded.term2);
				browser.sleep(1000);
				contextindexpage.enterTextInInternalNote('sample text');
				browser.sleep(1000);
				globalfunction.clickOnButtonForGlobal(loaded.save);
				browser.close();
					
			});
			browser.switchTo().window(currenthandle); 
			browser.waitForAngular();
			contextindexpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
			browser.sleep(1000);
			contextindexpage.enterValueInSearchField('type',loaded.type);
			browser.sleep(1000);
			thesauruspage.selectNoOfRows('All');
			thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
			browser.sleep(1000);
			globalfunction.clickOnButtonForGlobal('Yes');
			browser.sleep(1000);
			globalfunction.clickOnNavigationOrCloseButton('close');

		});

});




});
