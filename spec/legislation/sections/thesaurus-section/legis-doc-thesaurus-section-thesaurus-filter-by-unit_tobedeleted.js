var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded=testData.legislation.sections.thesaurus_section;

describe('Thesaurus',function(){//('should verify the thesaurus functionality Can be filter by unit ', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id_having_unit);
        thesauruspage.urlLoad(params.valid_username,params.valid_password); 

    });

    afterEach(function () {
    });


    it('should show the actual unit value in the the table while entering an existing unit',function(){

        
        if(loaded.section_links.length >1){
            thesauruspage.clickViewAllLink();
                browser.waitForAngular(); 
            thesauruspage.ClickShowFilters();
                thesauruspage.EnterValueinUnitFeild(loaded.unit);
                    expect(thesauruspage.HasCheckBox()).toEqual(true);
               
        }
        
    });

    it('should not show the actual unit value in the the table while entering a non existing unit',function(){

       browser.waitForAngular(); 
        
        if(loaded.section_links.length >1){
            thesauruspage.clickViewAllLink();
                browser.waitForAngular(); 
            thesauruspage.ClickShowFilters();
                thesauruspage.EnterValueinUnitFeild('invalid value');
                    expect(thesauruspage.HasCheckBox()).toEqual(false);

       
        }
        
    });

}); 