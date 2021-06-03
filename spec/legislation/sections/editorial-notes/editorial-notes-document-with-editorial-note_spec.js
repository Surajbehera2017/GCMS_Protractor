var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.editorial;
var editorialNotes =require('../../../../po/document/display/legis/sections/editorial-notes/editorial-notes-new.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2860';
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

	it('Editorial notes icon should be displayed in rigth panel Document Structure tab.'+jiraNumber, function () {
		
		
        browser.waitForAngular();
        editorialNotes.clickOnDocumentStructureTab();
        browser.sleep(5000);
        browser.waitForAngular();
        // browser.switchTo().frame('capaTextoPreview'); // give id of iframe
        // browser.ignoreSynchronization = true; 
        expect(global.isElementPresent(loadedData.EditorialNoteProperty)).toBe(true);
         global.clickOnElement(loadedData.EditorialNoteProperty);
         //browser.driver.manage().window().refresh();
         expect(editorialNotes.isEditorialNoteDisplayedInPopup()).toBe(true);
        // editorialNotes.clickClosePopUp(); 
       
	});	
	
});
