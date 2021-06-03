var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2392';
//var jiraNum1='GCMSQABANG-2552';
var testData = require('../../../../test-data/Jira_TestData/product-workbench/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

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
  
   //Method: 01- Layout
    it('should validate all the Layouts.'+jiraNum, function () {

        globalpo.expandSectionInLeftPanel(loaded.prodcollec);
        browser.sleep(2000);
        //to check the collections present
        var collecpresent=globalpo.isElementDisplayed(loaded.collecfilter);
        expect(collecpresent).toEqual(true);
        browser.sleep(1000);

        //to check the manual collections present
        var collecpresent=globalpo.isElementDisplayed(loaded.manualcollec);
        expect(collecpresent).toEqual(true);
        browser.sleep(1000);

        //to check the automation collections present
        var collecpresent=globalpo.isElementDisplayed(loaded.autocollec);
        expect(collecpresent).toEqual(true);
        browser.sleep(1000);

        //to check the products present
        var collecpresent=globalpo.isElementDisplayed(loaded.producfilter);
        expect(collecpresent).toEqual(true);
        browser.sleep(1000);
        
        //to check the viewall present
        var collecpresent=globalpo.isElementDisplayed(loaded.viewallfilter);
        expect(collecpresent).toEqual(true);
        browser.sleep(1000);
      
       
       });
    });
    












