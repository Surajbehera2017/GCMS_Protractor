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
	
	it('check published in digital products and save if the editorial notes has text the system should show An error', function () {
		
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		editorialNotes.clickEditButton();
		editorialNotes.expandSection();
		expect(editorialNotes.isPrintProductEditLinkDisplayed()).toEqual(true);
		editorialNotes.clickPublishedInDigitalProductsCheckBox();
		editorialNotes.save();
		browser.waitForAngular();
		expect(editorialNotes.modalContentErrorMessage()).toContain(testData.legislation.sections.editorial.errorMsgOnSavePublishedInDigitalProducts);
		//editorialNotes.clickModalContentOKButton();
		browser.waitForAngular();
		    			
	});

});
