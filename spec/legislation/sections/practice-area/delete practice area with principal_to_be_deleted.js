var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//declaration of the page objects needed for thi spec
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var PracticeAreaEdition = require('../../../../po/document/edition/legis/sections/practice-area/practice-area.po.js');
var PracticeAreaDisplay = require('../../../../po/document/display/legis/sections/practice-area/practice-area.po.js');
var documentToLoad = testData.legislation.sections.practice_area;


describe('Practice Area', function () {

    beforeAll(function () {
        
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(documentToLoad.marginal_id_1);
        browser.waitForAngular();
		PracticeAreaEdition.urlLoad(params.valid_username,params.valid_password);                      
		browser.waitForAngular();
		   
    });

   	it('Delete the PracticeArea by clicking on cross button present at Principal checkbox', function () {
        
        
		expect(PracticeAreaDisplay.expandable.isExpanded()).toEqual(false);
		PracticeAreaDisplay.clickOnEditDocument();
		browser.waitForAngular();
		PracticeAreaEdition.expandable.expand();
		browser.sleep(1000);
		PracticeAreaEdition.clickAddAnotherPracticeArea();
		browser.sleep(3000);
		PracticeAreaEdition.clickPracticeAreaField();
		PracticeAreaEdition.entervalueforPracticeArea('Civil');
		browser.sleep(5000);
		PracticeAreaEdition.clickSelectedValue();
		browser.sleep(5000);
		LegislationDocumentEditionPage.save();
			
		browser.sleep(5000);
		PracticeAreaDisplay.clickOnEditDocument();
		browser.waitForAngular();
		PracticeAreaEdition.expandable.expand();
		browser.sleep(3000);
		PracticeAreaEdition.deleteFirstPractice();
		LegislationDocumentEditionPage.save();
	});
});