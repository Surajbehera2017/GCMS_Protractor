var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded = testData.legislation.sections.editorial;
var editorialNotes = require('../../../../po/document/display/legis/sections/editorial-notes/editorial-notes-new.po.js');

describe('Editorial Notes', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		// browser.driver.manage().window().maximize();
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id_createnote);
		editorialNotes.urlLoad(params.valid_username, params.valid_password);

	});
	
	afterEach(function(){//Close additional tab
		browser.getAllWindowHandles().then(function(handles) {
			browser.switchTo().window(handles[0]);
			for(var i=1;i<handles.length;i++){
				browser.switchTo().window(handles[i]).then(function () {
					browser.close();
				},function(error){
					browser.switchTo().window(handles[0]);
				});
			}
			browser.switchTo().window(handles[0]);
		});
	});

	//This is duplicate of GCMSQABANG-2862
	it('Create a note and save it for each one', function () {

		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		browser.waitForAngular();
		editorialNotes.clickEditButton();
		expect(editorialNotes.isEditButtonEnabled()).toEqual(true);
		browser.waitForAngular();
		//Expand editorial section
		editorialNotes.expandSection();
		expect(editorialNotes.isExpanded()).toEqual(true);
		browser.waitForAngular();


		var internalNoteText = "This is the new INTERNAL note " + new Date().toLocaleString();
		//Write new Internal note
		editorialNotes.writeInternalNoteEditBoxText(internalNoteText);
		browser.waitForAngular();

		//Save Edit Mode
		editorialNotes.save();
		browser.waitForAngular();
		editorialNotes.acceptNoteChanges();
		browser.waitForAngular();

		//Expand editorial section
		editorialNotes.expandSection();
		expect(editorialNotes.isInternalNoteDisplayed(internalNoteText)).toEqual(true);

	// 	var printNoteText = "This is the new PRINT note " + new Date().toLocaleString();
	// 	//Click on the create note link
	// 	editorialNotes.clickOnCreateNoteLink(0);
		
	// 	//Add note for Print Product
	// 	browser.sleep(8000);
	// 	browser.getAllWindowHandles().then(function(handles) {
	// 		var newTabHandle = handles[1];
	// 		browser.switchTo().window(newTabHandle).then(function () {
	// 		browser.sleep(10000);
	// 		browser.switchTo().frame('ext-gen1133');
	// 		browser.ignoreSynchronization = true;
	// 		browser.sleep(3000);
	// 		 editorialNotes.writeXEditorTextBox(printNoteText);
	// 		 browser.sleep(3000);
	// 		 editorialNotes.clickXEditorSaveButton();
	// 		});

	// 		browser.switchTo().defaultContent();
	// 		browser.ignoreSynchronization = false;
	// 		browser.getAllWindowHandles().then(function (handles) {
	// 			browser.switchTo().window(handles[0]).then(function () { });
	// 		 });
	// 	});
	
	// 	//editorialNotes.isXEditorSaveButtonPresent();
	
	// 	var digitalNoteText = "This is the new DIGITAL note " + new Date().toLocaleString();
	// 	//Add note for Digital Product
	// 	editorialNotes.clickOnCreateNoteLink(1);
	// 	browser.waitForAngular();
	// 	browser.getAllWindowHandles().then(function (handles) {
	// 		var newTabHandle = handles[1];
	// 		browser.switchTo().window(newTabHandle).then(function () {
	// 			broswer.sleep(4000);
	// 			browser.switchTo().frame('ext-gen1133');
	// 			browser.ignoreSynchronization = true;
	// 			browser.sleep(1000);
	// 			editorialNotes.writeXEditorTextBox(digitalNoteText);
	// 			editorialNotes.clickXEditorSaveButton()

	// 		});
	// 	});

	// 	browser.getAllWindowHandles().then(function (handles) {
	// 		browser.switchTo().window(handles[0]).then(function () { });
	// 	});

		
	// 	expect(editorialNotes.isPrintNoteDisplayed(internalNoteText)).toEqual(true);
	// 	expect(editorialNotes.isDigitalNoteDisplayed(internalNoteText)).toEqual(true);
	// 	browser.waitForAngular();

	});

});

