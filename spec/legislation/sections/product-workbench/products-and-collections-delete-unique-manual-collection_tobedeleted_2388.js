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
   
    
    
    //02 - Delete the last collection in a page
    
    it('should delete the unique manual collection',function () {
       //should delete the unique manual collections 
        var legisDocEditionPage = new LegislationDocumentEditionPage();
        var productcollectionSection = legisDocEditionPage.sections.productWorkbench;

        productworkbench.expandSection();
        productcollectionSection.collections.manual.deleteSingle;
        expect(productcollectionSection.collections.manual.hasItem(testData.legislation.sections.productcollection.collection_name)).toEqual(false);
        legisDocEditionPage.save;

        var legisDocdisplayPage = new LegislationDocumentDisplayPage();
        var productcollectionSection = legisDocdisplayPage.sections.productWorkbench;

        productworkbench.expandSection();
        expect(productcollectionSection.collections.manual.hasItem(testData.legislation.sections.productcollection.collection_name)).toEqual(false);
        var collectionscount = productcollectionSection.collections.quantity;
        expect(productcollectionSection.collections.quantity).toEqual(collectionscount);
        expect(productcollectionSection.collections.manual.quantity).toEqual(11);
        
    });
               
    afterEach(function () {
        var legisDocEditionPage = new LegislationDocumentEditionPage();
       legisDocEditionPage.get(testData.legislation.sections.productcollection.marginal_id);
        var productcollectionSection = legisDocEditionPage.sections.productWorkbench;

        productworkbench.expandSection();
        var collectionscount =productcollectionSection.collections.manual.quantity;
        productcollectionSection.collections.manual.add(testData.legislation.sections.productcollection.collection_name);
        expect(productcollectionSection.collections.manual.hasItem(testData.legislation.sections.productcollection.collection_name)).toEqual(true);
        legisDocEditionPage.save;
                    
        var legisDocdisplayPage = new LegislationDocumentDisplayPage();
        var productcollectionSection = legisDocdisplayPage.sections.productWorkbench;

        productworkbench.expandSection();
            expect(productcollectionSection.collections.manual.hasItem(testData.legislation.sections.productcollection.collection_name)).toEqual(true);
            //expect(productcollectionSection.collections.quantity).toEqual(collectionscount+1);
            expect(productcollectionSection.collections.manual.quantity).toEqual(12);
    });
});
           













