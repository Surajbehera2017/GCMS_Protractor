var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var grantSubsidiesSection = require('../../../../po/document/edition/legis/sections/grants-subsidies/grants-subsidies.po.js');
var grantsSubsidies= require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var section;
var legisDocDisplayPage=new LegislationDocumentDisplayPage();
var legisDocEditPage = new LegislationDocumentEditionPage();
var loadedData = testData.legislation.sections.grants_subsidies;

describe('Grants and Subsidies', function () {

	beforeEach(function () {
        browser.ignoreSynchronization = false;
        legisDocDisplayPage.get(loadedData.marginal_id_new1);
        browser.waitForAngular();
		grantsSubsidies.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		
        }); 
    
    //TC01 - Grants and Subsidies - Copy a document document - Layout

	it('Copy a document document - Layout', function () {
        grantsSubsidies.copybutton();
        grantsSubsidies.clickcalculate();
        grantsSubsidies.clickcopyagain();
        browser.sleep(5000);
        grantSubsidiesSection.expandall();
        grantSubsidiesSection.clickDocumentType();
        grantSubsidiesSection.selectDocumentTypeFromComboBox(4);     
        expect(grantSubsidiesSection.subjectofgrant).toBeTruthy();

        grantSubsidiesSection.addsubjectofgrant('Test');
        grantSubsidiesSection.addbeneficiaries('Test');
           
        grantSubsidiesSection.addjurisdiction('Sevilla');    
        grantSubsidiesSection.addlegislativebody('Ayuntamiento de Sevilla');    
        grantSubsidiesSection.addstatutetype('Acta');     
        grantSubsidiesSection.addpubliction('BO. Aduanas');     
        grantSubsidiesSection.adddatenumberseries('15/03/1963 2008/1963');     
        grantSubsidiesSection.addpracticearea('Civil');     
        grantSubsidiesSection.clickcreate();  
          
            
    });
        
});