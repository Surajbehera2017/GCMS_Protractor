var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var PracticeAreaDisplay = require('../../../../po/document/display/legis/sections/practice-area/practice-area.po.js');
var documentToLoad = testData.legislation.sections.practice_area;


describe('Practice Area', function () {

    beforeAll(function () {
        
        browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(documentToLoad.marginal_id_1);
        browser.waitForAngular();
		PracticeAreaDisplay.urlLoad(params.valid_username,params.valid_password);                      
        browser.waitForAngular();
           
    });

    it('should expand the practice area section and check principal practice area appears first', function () {
     
        //expect(PracticeAreaDisplay.expandable.isExpanded()).toEqual(false);
		//PracticeAreaDisplay.clickOnEditDocument();
		//browser.waitForAngular();
        //PracticeAreaEdition.expandable.expand();
        
        PracticeAreaDisplay.expandable.expand(); 
		expect(PracticeAreaDisplay.expandable.isExpanded()).toEqual(true);
		var text=element(by.css('div.col-md-8.right-label.border-sides-detail-border-top.row-margin-clear span#textPrincipalValuePracticeAreaSection')).getText();
			expect(text).toEqual(testData.legislation.sections.practice_area.text);


});
});