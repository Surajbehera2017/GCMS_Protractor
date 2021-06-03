var params = browser.params;
var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var legislationdictionary = require('../../../../po/document/display/legis/sections/legislation-dictionary/legislation-dictionary.po.js');
var loadedData = testdata.legislation.sections;

describe('Legislation Dictionary', function () {

	beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = LegislationDocumentDisplayPage;
        legisDocDisplayPage.get(loadedData.legislation_dictionary.marginal_id);
        browser.sleep(5000);
        legislationdictionary.urlLoad(params.valid_username, params.valid_password);
        browser.sleep(5000);
        browser.waitForAngular();
        
	});


    it('Should able to copy the entry with mandatory fields', function () {
        
        legislationdictionary.clicklegisDecallview();
        legislationdictionary.legisDeccopyButton();
        expect(legislationdictionary.hascopylegislationdictionary()).toEqual(true);
        legislationdictionary.clickkeywordsection();
        legislationdictionary.clickselectunit();   
        legislationdictionary.clickaddunit();  
        legislationdictionary.clickaddselectedunit(); 
        legislationdictionary.clicksave();
        browser.waitForAngular();
    });  
});
    


        
     