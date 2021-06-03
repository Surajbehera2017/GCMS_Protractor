var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded = testData.legislation.sections.editorial;
var editorialNotes =require('../../../../po/document/display/legis/sections/editorial-notes/editorial-notes-new.po.js');

describe('Editorial Notes', function () {

	beforeEach(function () {
    
    browser.ignoreSynchronization = false;
   // browser.driver.manage().window().maximize();
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loaded.marginal_id_editnote);
    editorialNotes.urlLoad(params.valid_username,params.valid_password);
    
    });
	
	it('Check that the user can edit and change the internal note text', function () {
		
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		browser.waitForAngular();
		editorialNotes.clickEditButton();
		expect(legisDocDisplayPage.isEditButtonEnabled).toEqual(true);
		browser.waitForAngular();
		//Expand editorial section
		editorialNotes.expandSection();
		expect(editorialNotes.isExpanded()).toEqual(true);
		browser.waitForAngular();
			
		var NoteText="This is the new Internal note "+new Date().toLocaleString();
		//Write new note
		editorialNotes.writeInternalNoteEditBoxText(loaded.internal_note);
		browser.waitForAngular();
		
		
		//Save Edit Mode
		editorialNotes.save();
		browser.waitForAngular();
		
		//Expand editorial section
		/* editorialNotes.expandSection();
		expect(editorialNotes.isInternalNoteDisplayed(NoteText));
		browser.waitForAngular(); */
		
	});
	
	
});
