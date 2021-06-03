var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.editorial;
var editorialNotes = require('../../../../po/document/display/legis/sections/editorial-notes/editorial-notes-new.po.js');

var internalNoteText = 'This is the new INTERNAL note ' + new Date().toLocaleString();

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2862';
var testData = require('../../../../test-data/Jira_TestData/Editorial_Notes/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Editorial Notes', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		editorialNotes.urlLoad(params.valid_username, params.valid_password);

	});
		
	// xit('Create an internal note and save it', function () {

	// 	browser.waitForAngular();
	// 	editorialNotes.clickEditButton();
	// 	browser.waitForAngular();
	// 	//Expand editorial section
	// 	global.expandSectionInLeftPanel("Editorial Notes ");
	// 	browser.waitForAngular();
	// 	browser.sleep(2000);
	// 	//Write new Internal note
	// 	editorialNotes.writeInternalNoteEditBoxText(internalNoteText);
	// 	browser.waitForAngular();

	// 	//Save Edit Mode
	// 	editorialNotes.save();
	// 	browser.waitForAngular();
	// 	editorialNotes.acceptNoteChanges();
	// 	browser.waitForAngular();

	// 	//Expand editorial section
	// 	editorialNotes.expandSection();
	// 	browser.waitForAngular();
	// 	browser.sleep(2000);
	// 	expect(editorialNotes.isEditorialNoteDisplayed(2)).toEqual(internalNoteText);

	// });

	it('Edit an existing internal note and save it.'+jiraNumber, function () {

		browser.waitForAngular();
		editorialNotes.clickEditButton();
		global.expandSectionInLeftPanel(loadedData.section);
		browser.waitForAngular();
		//Expand editorial section
		browser.waitForAngular();
		browser.sleep(2000);
		//Write new Internal note
		
		editorialNotes.enterText(loadedData.noteproperty,internalNoteText);
		browser.waitForAngular();

		//Save Edit Mode
		editorialNotes.save();
		browser.waitForAngular();
		editorialNotes.acceptNoteChanges();
		browser.waitForAngular();

		// //Expand editorial section
		
		global.expandSectionInLeftPanel(loadedData.section);
		browser.waitForAngular();
		browser.sleep(2000);
		
		expect(global.gettingTextofelement(loadedData.noteproperty2,internalNoteText)).toEqual(true);

	});
	
});

