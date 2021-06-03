var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
//var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var legisdisplay = require('../../../../po/document/display/legis/sections/fix-section/legis-doc-display.po.new.js');
var fix_Section =require('../../../../po/document/display/legis/sections/fix-section/fix-section.po.js');
var jiraNumber = 'GCMSQABANG-2709';
var testData = require('../../../../test-data/Jira_TestData/fix-section-and-general/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

describe('Fix section', function () {
    
       beforeEach(function () {
     
        browser.ignoreSynchronization = false;
       
        legisDocDisplayPage.get(loaded.marginal_id);
        fix_Section.urlLoad(params.valid_username,params.valid_password);
        browser.sleep(5000);
        browser.waitForAngular();
    
		
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


	it('user should receive error message pop up upon trying to delete from doc display.' + jiraNumber , function () {
	
		browser.waitForAngular();
		//clicking on delete
		rightpanelpage.clickOnbuttonInEditMode(loaded.delete);
		//accepting pop up
		globalfunction.clickOnButtonForGlobal(loaded.accept);
		//verify error pop up is displayed
		globalfunction.gettingTextofelement(loaded.xpath,loaded.msg);
		//confirm pop up 
		globalfunction.clickOnButtonForGlobal(loaded.ok);



		// expect(LegislationDocumentDisplayPage.marginal()).toEqual(testData.legislation.sections.fix_section_and_general.document_no);
		// LegislationDocumentDisplayPage.clickDeleteButton();
		// 	expect(LegislationDocumentDisplayPage.hasDeleteModal()).toBe(true);
		// 	LegislationDocumentDisplayPage.clickConfirmDeleteButton () ;
		// 		expect(LegislationDocumentDisplayPage.hasDeleteModal()).toBe(false);
		// 			expect(LegislationDocumentDisplayPage.title()).toEqual(I18n.legisDocDisplay.title);
		
                       
	});
});
