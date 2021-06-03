var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var productworkbench = require('../../../../po/document/display/legis/sections/product-workbench/product-workbench-new.po.js');
var LoginPage = require('../../../../po/login.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');


describe('Product Workbench', function () {

    beforeEach (function () {
        browser.ignoreSynchronization = false;
        var legisDocEditionPage = new LegislationDocumentEditionPage();
        legisDocEditionPage.get(testData.legislation.sections.productcollection.marginal_id);
        productworkbench.urlLoad(params.valid_username,params.valid_password);
    });
  
   //Method: 01 - Saving after adding the first collection
    it('should save after adding first collection', function () {
       
        browser.waitForAngular();
        var legisDocEditionPage = new LegislationDocumentEditionPage();
        var productcollectionSection = legisDocEditionPage .sections.productWorkbench;

        productworkbench.expandSection();
        var editCount = productcollectionSection.getCountofManual;
        productcollectionSection.clickonAddCollection;
        productcollectionSection.clickonNewCollections;
        browser.waitForAngular();
        //expect(editCount).not.toBe(productcollectionSection.getCountofManual);
        //expect(editCount).toBe(productcollectionSection.getCountofManual);
        browser.waitForAngular();
        legisDocEditionPage.clickSaveButton;
        legisDocEditionPage.clickSavePopup;
              
        });
    });
            
      












