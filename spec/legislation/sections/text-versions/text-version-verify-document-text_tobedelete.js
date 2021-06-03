var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


describe('Text-Version', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
      legisDocDisplayPage.get(testData.legislation.sections.text_version.marginal_id_new);
      textversionpage.urlLoad(params.valid_username,params.valid_password);
        
	});

	
  it('Verify Document Text', function () {
     
     browser.waitForAngular();
     textversionpage.clickDocumentText(); 
     var tab = textversionpage.isDocumentTextPresent();
      if(tab = true)
          {
              expect(tab).toEqual(true);
          }
      
     });
    
    it('Verify Green lamp button', function () {
     
     browser.waitForAngular();
     textversionpage.clickDocumentText();
     //textversionpage.clickBlankPageField();
     browser.sleep(8000);
     browser.switchTo().frame('capaTextoPreview');
     browser.ignoreSynchronization = true; 
     browser.sleep(3000);
     textversionpage.clickAnyLinkDocType();
     textversionpage.clickGreenLamp();
     browser.waitForAngular();
     var popup = textversionpage.isAddRelationshipDisplayed();
        if(popup = true)
            {
                expect(popup).toEqual(true);
            }
      
     });
    
    
});
    
    
    
    
    

    
