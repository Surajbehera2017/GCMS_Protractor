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
     
   	it('add entry creation',function() {

    	legislationdictionary.clickViewAllLink();
		legislationdictionary.clickAdd();
		
		legislationdictionary.gettextViewAllLink().then(function (Text){
			var beforeDeleteText=Text;
			expect(legislationdictionary.isDisplayAdd()).toEqual(true);
			legislationdictionary.clickSelectedItemOnAddPage();
			legislationdictionary.clickunit();
			legislationdictionary.clickAddUnit();
            expect(legislationdictionary.isVisibleAddUnit()).toEqual(true);
						  
		});
								
		legislationdictionary.clickPlusIconOnAddPage();
		legislationdictionary.clicksave();
		legislationdictionary.clickOkDialogAddPage(); 
	    legislationdictionary.clickCloseLegDicTable();
                           
		legislationdictionary.gettextViewAllLink().then(function (Text){
			var afterDelete=Text;
			legislationdictionary.clickViewAllLink();
            expect(legislationdictionary.displayViewAllLink()).toEqual(true);
		                       						   
                           
			legislationdictionary.clickSelectedItem();
			browser.sleep(5000);
            expect(legislationdictionary.isDeleteButtonEnable()).toEqual(true);                                    }); 
		    legislationdictionary.clickDelete();
                
            browser.sleep(3000);
	   		legislationdictionary.clickOk();
		});    
});