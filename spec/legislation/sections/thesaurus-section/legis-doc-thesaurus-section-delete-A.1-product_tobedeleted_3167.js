var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var loaded=testData.legislation.sections.thesaurus;


describe('Thesaurus',function(){//('Thesaurus-section', function () {

	beforeAll(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id_2);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);     
   
        
	});
    
    afterAll(function() {
    browser.executeScript('window.sessionStorage.clear();'); //clear session
    browser.executeScript('window.localStorage.clear();');   //clear local storage
     });


	//DOES NOT DOES ANYTHING
    it('validate Complementary Info', function () {
        
        browser.waitForAngular();
        thesauruspage.getCount();
        
  });
    
  });
    
