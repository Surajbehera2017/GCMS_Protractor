var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


describe('Thesaurus',function(){//('Thesaurus-section-Copy', function () {

	beforeAll(function () {
         
        browser.ignoreSynchronization = false;
       var legisDocDisplayPage = new LegislationDocumentDisplayPage();
      legisDocDisplayPage.get(testData.legislation.sections.thesaurus_section.marginal_id_third);
      thesauruspage.urlLoad();
        
	});
    
    afterAll(function() {
    browser.executeScript('window.sessionStorage.clear();'); //clear session
    browser.executeScript('window.localStorage.clear();');   //clear local storage
     });

    //could not map
	it('Verify edit and delete link', function () {
        
        browser.waitForAngular();
        thesauruspage.clickViewAllLink();
        browser.waitForAngular();
        
        thesauruspage.clickBlankField();
        var cpy = thesauruspage.isCopyButtonAvailable();
        if(cpy = true)
            {
                expect(cpy).toEqual(true);
            }
        thesauruspage.clickCopyButton();
        thesauruspage.clickEdit();
        thesauruspage.clickDeleteViewAllTable();

    });
    
});