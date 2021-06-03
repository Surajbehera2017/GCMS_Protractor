
var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');

describe('Fix section', function () {

   
    beforeEach(function () {
        
          browser.ignoreSynchronization = false;       
          LegislationDocumentDisplayPage.get(12170616);
          browser.waitForAngular();
          LegislationDocumentDisplayPage.urlLoad(params.valid_username, params.valid_password);
          browser.sleep(5000);
          browser.waitForAngular();
      });
       

    /*
    This is covered in other spec - duplicate it block
    it('should verify the fix section feild', function () {
     
        expect(LegislationDocumentDisplayPage.marginal()).toEqual('RCL\\1997\\136');
        expect(LegislationDocumentDisplayPage.range()).toEqual('Real Decreto');
        expect(LegislationDocumentDisplayPage.docnum()).toEqual('3');
        expect(LegislationDocumentDisplayPage.abstract()).toEqual('Establece la obligatoriedad del cumplimiento de determinadas especificaciones técnicas en la adquisición de equipos y de sistemas compatibles para la gestión del tráfico aéreo');
    expect(LegislationDocumentDisplayPage.lawarea()).toEqual('Civil');

    });
    */

    it('should verify the packaging button functionality',function(){
        LegislationDocumentDisplayPage.clickExportButton();
            expect(LegislationDocumentDisplayPage.package()).toEqual(I18n.packaging.texts);
            LegislationDocumentDisplayPage.clickCancelDeleteExportButton();
                expect(LegislationDocumentDisplayPage.marginal()).toEqual('RCL\\1997\\136');
          
        });
    

});

