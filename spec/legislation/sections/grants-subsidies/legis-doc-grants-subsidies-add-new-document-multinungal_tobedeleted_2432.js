var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var grantSubsidiesSection = require('../../../../po/document/edition/legis/sections/grants-subsidies/grants-subsidies.po.js');
var grantsSubsidies= require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
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

    //TC03 - Grants and Subsidies - Add new document section - Multilingual
    
	it('Add new document section - Multilingual', function () {

		
        grantsSubsidies.addbutton();        
        grantsSubsidies.selectcode('LEG - Legislación');  
        browser.sleep(2000);
        grantsSubsidies.clickcalculate();
        grantsSubsidies.clickaddagain();
        grantSubsidiesSection.expandall();
        grantSubsidiesSection.clickDocumentType();
        grantSubsidiesSection.selectDocumentTypeFromComboBox(4);     
        expect(grantSubsidiesSection.subjectofgrant).toBeTruthy();           
        grantSubsidiesSection.addsubjectofgrant('Test');
        grantSubsidiesSection.addbeneficiaries('Test');
        grantSubsidiesSection.clickcreate();
          
    });
    });
    