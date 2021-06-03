var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2552';
var testData = require('../../../../test-data/Jira_TestData/product-workbench/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
//GCMSQABANG-2552
describe('Product Workbench', function () {

    beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);

    });

    afterEach(function () {//Close additional tab
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]);
            for (var i = 1; i < handles.length; i++) {
                browser.switchTo().window(handles[i]).then(function () {
                    browser.close();
                }, function (error) {
                   browser.switchTo().window(handles[0]);
                });
            }
            browser.switchTo().window(handles[0]);
        });
    });
  
   //Method: 02 - Delete the last collection in a page

    it('should delete the last collection in a page.'+jiraNum, function () {

        

    //    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    //    var productcollectionSection = legisDocDisplayPage.sections.productWorkbench;
        
    //     browser.waitForAngular();
    //     var legisDocEditionPage = new LegislationDocumentEditionPage();
    //     var productcollectionSection = legisDocEditionPage .sections.productWorkbench;
    //     productworkbench.expandSection();
    //     productcollectionSection.clickManual;
    //     browser.waitForAngular(); 
           
    //     var editCount =productcollectionSection.getCountofManual;
                
    //     if(productcollectionSection.isManualPaginationAvailable)
    //     {
    //         productcollectionSection.clickonLastPaginationButton;
    //         productcollectionSection.clickXbuttonLastPagination;
    //     }
    //     else
    //     {
    //     productcollectionSection.clickXbuttoninFirstPagination;
    //     }
    //     expect(editCount).not.toBe(productcollectionSection.getCountofManual);
               
    });
});
   












