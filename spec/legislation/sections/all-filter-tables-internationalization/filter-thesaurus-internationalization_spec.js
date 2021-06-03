var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var legisDocDisplayPageObjects = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LoginPage = require('../../../../po/login.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var loadedData = testData.legislation.sections;

describe('Internationalization-Language', function () {
    
    beforeEach(function () {
        
        browser.ignoreSynchronization = false;
        legisDocDisplayPageObjects.get(loadedData.allfiltersInternationalization.marginal_id_relationship);
        browser.waitForAngular();
        thesauruspage.urlLoad(params.valid_username, params.valid_password);
        browser.waitForAngular();
     
    });


    //01 Filter Thesaurus-Internationalization
    it('should verify internationalization of thesaurus Section table',function(){
         
        thesauruspage.clickViewAllLink();
        browser.waitForAngular();
        thesauruspage.ClickShowFilters();
        thesauruspage.EnterValueinThesaurustermFeild(loadedData.thesaurus_section.thesaurus_search_term_invalid);
        browser.waitForAngular();
        expect(thesauruspage.getCountOfRows()).toEqual(0);
        thesauruspage.clickCloseButton();
        legisDocDisplayPageObjects.selectLanguage();
        browser.sleep(1000);
        expect(thesauruspage.getAddButtonCaption()).toEqual(loadedData.allfiltersInternationalization.addbuttontext);
        expect(thesauruspage.getImportButtonCaption()).toEqual(loadedData.allfiltersInternationalization.importbuttontext);
        
        });
});
                       