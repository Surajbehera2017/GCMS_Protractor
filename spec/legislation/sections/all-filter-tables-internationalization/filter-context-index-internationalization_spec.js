var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var legisDocDisplayPageObjects = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LoginPage = require('../../../../po/login.po.js');
var contextIndex = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var loadedData = testData.legislation.sections;

describe('Internationalization-Language', function () {
   
    beforeEach(function () {
        
         browser.ignoreSynchronization = false;
         
         legisDocDisplayPageObjects.get(loadedData.allfiltersInternationalization.marginal_id_contextindex);
         browser.waitForAngular();
         contextIndex.urlLoad(params.valid_username, params.valid_password);
         browser.waitForAngular();
     
    });

    //01 Filter Context Index + Internationalization
    it('should verify internationalization of context index Section table',function(){
        
        contextIndex.clickViewAllLink();
        contextIndex.clickShowFilters();
        contextIndex.EnterValueinContextIndextermFeild(loadedData.context_index.context_index_term_invalid);
        expect(contextIndex.getCountOfRows()).toEqual(0);
        browser.waitForAngular();
        contextIndex.closeViewAll();
        legisDocDisplayPageObjects.selectLanguage();
        browser.waitForAngular();
        expect(contextIndex.getAddButtonCaption()).toEqual(loadedData.allfiltersInternationalization.addbuttontext);
        expect(contextIndex.getImportButtonCaption()).toEqual(loadedData.allfiltersInternationalization.importbuttontext);
       // expect(contextIndex.getAllFiltersButtonCaption()).toEqual(loadedData.allfiltersInternationalization.filtersbuttontext);
        });
});
                       