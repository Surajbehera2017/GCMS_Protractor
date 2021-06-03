var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.editorial;
var editorialNotes =require('../../../../po/document/display/legis/sections/editorial-notes/editorial-notes-new.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3434';
var testData = require('../../../../test-data/Jira_TestData/Editorial_Notes/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Editorial Notes', function () {

	beforeEach(function () {
    
    browser.ignoreSynchronization = false;
   // browser.driver.manage().window().maximize();
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    editorialNotes.urlLoad(params.valid_username,params.valid_password);
    
    });
	
  it('Validate Editorial notes Editorial Notes for Print and Digital products and internal notes.'+jiraNumber, function () {
		
	var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		//Expand editorial section & Validate content
		browser.waitForAngular();
		editorialNotes.expandSection();
		expect(editorialNotes.isExpanded()).toEqual(true);
		//Validate Print products Label in Editorial Notes
		expect(editorialNotes.isPrintProductsLabelDisplayed()).toEqual(true);
		//Validate Digital products Label in Editorial Notes
		expect(editorialNotes.isDigitalProductsLabelDisplayed()).toEqual(true);
		//Validate Internal notes Label in Editorial Notes
		expect(editorialNotes.isInternalNoteLabelDisplayed()).toEqual(true);
		//Validate view all links in all Labels in Editorial Notes
		expect(editorialNotes.isPrintProductViewAllLinkDisplayed()).toEqual(true);
		expect(editorialNotes.isDigitalProductViewAllLinkDisplayed()).toEqual(true);
		expect(editorialNotes.isInternalNoteViewAllLinkDisplayed()).toEqual(true);
		//Validate Editorial notes in Modal Window
		browser.waitForAngular();
		editorialNotes.clickPrintProductViewAllLink();
        expect(editorialNotes.isModalContentDisplayed()).toEqual(true);
		browser.waitForAngular();
		editorialNotes.closeModalContent();
		//expect(editorialNotes.isModalContentDisplayed()).toEqual(false);
		browser.waitForAngular();
		
		legisDocDisplayPage.get(loadedData.marginal_id_nodigitalproducts);
		editorialNotes.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	    //Expand editorial section
		editorialNotes.expandSection();
		expect(editorialNotes.isExpanded()).toEqual(true);

		//Validate Digital products Label in Editorial Notes
		expect(editorialNotes.isDigitalProductsLabelDisplayed()).toEqual(false);
		
		
		
	});

	
	
});
