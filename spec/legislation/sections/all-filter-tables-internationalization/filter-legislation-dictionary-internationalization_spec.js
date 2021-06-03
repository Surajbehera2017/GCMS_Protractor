var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var legisDocDisplayPageObjects = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LoginPage = require('../../../../po/login.po.js');
var legislationdictionary = require('../../../../po/document/display/legis/sections/legislation-dictionary/legislation-dictionary.po.js');
var loadedData = testData.legislation.sections;

describe('Internationalization-Language', function () {
    
    beforeEach(function () {
        
         browser.ignoreSynchronization = false;
         legisDocDisplayPageObjects.get(loadedData.allfiltersInternationalization.marginal_id_legislationdictionary);
         browser.waitForAngular();
         legislationdictionary.urlLoad(params.valid_username, params.valid_password);
         browser.waitForAngular();
     
    });

    //01 Filter Legislation Dictionary + Internationalization
    it('should verify internationalization of legislation dictionary Section table',function(){
        
        legislationdictionary.clickViewAllLink();
        browser.waitForAngular();
        browser.sleep(4000);
        legislationdictionary.clickShowFilterButton();
        browser.waitForAngular();
        legislationdictionary.EnterValueinUnitFeild(testData.legislation.sections.legislation_dictionary.search_term);
        expect(legislationdictionary.getCountOfRows()).toEqual(0);
        legislationdictionary.clickCloseButton();
        legisDocDisplayPageObjects.selectLanguage();
        browser.sleep(1000);
        expect(legislationdictionary.getAddButtonCaption()).toEqual(testData.legislation.sections.allfiltersInternationalization.addbuttontext);
        });
});
                       