var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var loaded=testData.legislation.sections.thesaurus_section;

describe('Thesaurus',function(){//('should verify to order the Analyst list ', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password); 
                
    });

    afterEach(function () {
    });


    it('should click on the view all link',function(){
        
        
        if(loaded.length >1){
         thesauruspage.clickViewAllLink();
           //expect(thesauruspage.HasMenuItem('Analyst')).toEqual(true);
            browser.waitForAngular();  
       
        thesauruspage.clickUpOrderAnalyst();
            expect(thesauruspage.isVisibleUpOrderAnalyst()).toEqual(true);
      
		
        thesauruspage.clickDownOrderAnalyst();
            expect(thesauruspage.isVisibleDownOrderAnalyst()).toEqual(true);
       
        }
		
    });
    

});