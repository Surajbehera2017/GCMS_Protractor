var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded=testData.legislation.sections.thesaurus_section;

describe('Thesaurus',function(){//('should verify the thesaurus functionality Can be filter by complimentary info ', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password); 
    });

    afterEach(function () {
    });


    it('should show info in  the table while entering existing an existing complimentary info',function(){

        
        if(loaded.section_links.length >1){
           thesauruspage.clickViewAllLink();
                browser.waitForAngular();
               thesauruspage.ClickShowFilters();
                   thesauruspage.EnterValueinComplementaryFeild(loaded.complementary_info_term);
                        expect(thesauruspage.HasCheckBox()).toEqual(true);
           
        }
        
    });

    it('should not show info in  the table while entering existing an existing complimentary info',function(){

    
        if(loaded.section_links.length >1){
           thesauruspage.clickViewAllLink();
                browser.waitForAngular();
               thesauruspage.ClickShowFilters();
                   thesauruspage.EnterValueinComplementaryFeild('Invalid Name');
                        expect(thesauruspage.HasCheckBox()).toEqual(false);

            
        }
        
    });


});