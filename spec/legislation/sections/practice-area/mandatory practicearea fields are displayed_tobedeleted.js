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

    it('Verify mandatory details value presence', function () {

        expect(PracticeAreaDisplay.expandable.isExpanded()).toEqual(false);
		browser.waitForAngular();
        PracticeAreaDisplay.expandable.expand();
        browser.sleep(5000);
        expect(PracticeAreaDisplay.isPresentPrincipal()).toEqual(true);
        expect(PracticeAreaDisplay.practiceAreaText()).not.toBeNull();
    });
});