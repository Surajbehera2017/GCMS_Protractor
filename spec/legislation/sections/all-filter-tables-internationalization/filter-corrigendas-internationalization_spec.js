var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var legisDocDisplayPageObjects = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LoginPage = require('../../../../po/login.po.js');
var corrigendas = require('../../../../po/document/display/legis/sections/corrigendas/corrigendas.po.js');
var loadedData = testData.legislation.sections;

describe('Internationalization-Language', function () {

    beforeEach(function () {
        
         browser.ignoreSynchronization = false;
         legisDocDisplayPageObjects.get(loadedData.allfiltersInternationalization.marginal_id_corrigendas_new);
         browser.waitForAngular();
         corrigendas.urlLoad(params.valid_username, params.valid_password);
         browser.waitForAngular();
     
    });

    //01 Filter Corrigenda+ Internationalization
    it('should verify internationalization of corrigendas Section table',function(){
        
        corrigendas.clickViewAllLink();
        corrigendas.clickShowAndHideFilter();
        corrigendas.EnterValueinMarginalFeild(testData.legislation.sections.corrigendas.search_term);
        expect(corrigendas.getCountOfRows()).toEqual(0);
        corrigendas.clickCloseButton();
        legisDocDisplayPageObjects.selectLanguage();
        browser.waitForAngular();
       // browser.executeScript('return document.querySelector(\'[ng-click="corrigendasSumCtrl.openCorrigendasDetailTable()"]>strong\').click();','').then(function(){
        //browser.waitForAngular();
        expect(corrigendas.getAddButtonCaption()).toEqual(testData.legislation.sections.allfiltersInternationalization.addbuttontext);
        //expect(corrigendas.getAllFiltersButtonCaption()).toEqual(testData.legislation.sections.allfiltersInternationalization.filtersbuttontext);
        });
    });

                  