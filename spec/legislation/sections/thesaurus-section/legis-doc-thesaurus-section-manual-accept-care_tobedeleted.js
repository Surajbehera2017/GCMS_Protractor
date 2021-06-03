var params = browser.params;
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');


// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var loaded=testData.legislation.sections.thesaurus_section;

describe('Thesaurus',function(){//('Thesaurusthesauruspage - Manual Accept Care', function () {

    beforeEach(function () {
       

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);    

    });

    it('Should able to accept analysis direcly clicking over the automatic analyst', function () {


        
        if(loaded.section_links.length >1){
           thesauruspage.clickViewAllLink();
                browser.waitForAngular();
               thesauruspage.ClickShowFilters();
                   thesauruspage.EnterValueinAnalystFeild(loaded.analyst_search_term);
                       expect(thesauruspage.HasCheckBox()).toEqual(true);
                  
        }
        
    });
 });