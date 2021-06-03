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
        legisDocDisplayPage.get(loadedData.legislation_dictionary.marginal_id_leg_1);
        browser.sleep(5000);
        legislationdictionary.urlLoad(params.valid_username, params.valid_password);
        browser.sleep(5000);
        browser.waitForAngular();
                
    });
        
	it('should click on the view all link',function(){

        legislationdictionary.clickViewAllLink();
        browser.waitForAngular();
        expect(legislationdictionary.displayViewAllLink()).toEqual(true);

    });
    
    it('should check whether delete is disabled or not', function () {
      
        legislationdictionary.clickViewAllLink();
        browser.waitForAngular();
        expect(legislationdictionary.isDeleteButtonDisabled()).toEqual(false); 
    });  
        
    
    it('should check whether delete is enabled or not', function () {
      
        legislationdictionary.clickViewAllLink()
        browser.waitForAngular();
        legislationdictionary.clickSelectedItem();
        expect(legislationdictionary.isDeleteButtonEnable()).toEqual(true);                            
    });
      
   it('should click on delete button', function () {
     
        legislationdictionary.clickViewAllLink();
        browser.waitForAngular();
        legislationdictionary.clickSelectedItem();
        legislationdictionary.clickDelete();
        expect(legislationdictionary.deleteDisplay()).toEqual(true);                            
    });                            
}); 