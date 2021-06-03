var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.editorial;
var editorialNotes = require('../../../../po/document/display/legis/sections/editorial-notes/editorial-notes-new.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2863';
var testData = require('../../../../test-data/Jira_TestData/Editorial_Notes/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]
describe('Editorial Notes', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		// browser.driver.manage().window().maximize();
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		editorialNotes.urlLoad(params.valid_username, params.valid_password);

	});
	
	afterEach(function(){ //removing the added notes for clean up process for next time test run

		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);

		browser.waitForAngular();
		editorialNotes.clickEditButton();
		browser.waitForAngular();
		//Expand editorial section
		editorialNotes.expandSection();
		browser.waitForAngular();
				
		editorialNotes.clickOnElement(loadedData.editnote);
		browser.getAllWindowHandles().then(function(handles) {
			var newTabHandle = handles[1];
			browser.switchTo().window(newTabHandle).then(function () {
			browser.sleep(10000);
			browser.switchTo().frame(loadedData.frame);
			browser.ignoreSynchronization = true;
			browser.sleep(3000);
			rightpanelpage.selectAllAndDelete();
		
			});	
		});
		browser.getAllWindowHandles().then(function(handles) {
		var newTabHandle = handles[1];
		browser.switchTo().window(newTabHandle).then(function () {
		browser.sleep(3000);
		editorialNotes.clickXEditorSaveButton();
			 });
		});

	
		browser.getAllWindowHandles().then(function(handles) {
			var baseHandle = handles[0];
			browser.switchTo().window(baseHandle).then(function () {
			browser.sleep(3000);
			browser.ignoreSynchronization = false;
		 });
		});

	browser.sleep(1000);
	
	 //Save Edit Mode
	editorialNotes.save();
	browser.waitForAngular();
	editorialNotes.acceptNoteChanges();
	browser.waitForAngular();

 });


	it('Create an digital note and save it.'+jiraNumber, function () {

		var digitalNoteText = "This is the new DIGITAL note " + new Date().toLocaleString();
		browser.waitForAngular();
		editorialNotes.clickEditButton();
		browser.waitForAngular();
		//Expand editorial section
		global.expandSectionInLeftPanel(loadedData.section);
		
		browser.waitForAngular();
		
		//Add note for Digital Product
		//editorialNotes.clickOnElement(loadedData.createnote);
		global.clickOnElement(loadedData.createnote);
		browser.sleep(8000);
		browser.getAllWindowHandles().then(function(handles) {
			var newTabHandle = handles[1];
			browser.switchTo().window(newTabHandle).then(function () {
			browser.sleep(10000);
			browser.switchTo().frame(loadedData.frame);
			browser.ignoreSynchronization = true;
			browser.sleep(3000);
			 editorialNotes.writeXEditorTextBox(digitalNoteText);

			});	
		});
		browser.getAllWindowHandles().then(function(handles) {
			var newTabHandle = handles[1];
			browser.switchTo().window(newTabHandle).then(function () {
			browser.sleep(3000);
			editorialNotes.clickXEditorSaveButton();
		 });
		});

		browser.getAllWindowHandles().then(function(handles) {
			var baseHandle = handles[0];
			browser.switchTo().window(baseHandle).then(function () {
			browser.sleep(3000);
			browser.ignoreSynchronization = false;
		 });
		});
        

		browser.sleep(1000);
		 //Save Edit Mode
		editorialNotes.save();
		browser.waitForAngular();
		editorialNotes.acceptNoteChanges();
		browser.waitForAngular();

		//Expand editorial section
		global.expandSectionInLeftPanel(loadedData.section);
		browser.waitForAngular();
		browser.sleep(2000);
		 expect(global.gettingTextofelement(loadedData.verifytext,digitalNoteText)).toEqual(true);
	
	});
	
});

