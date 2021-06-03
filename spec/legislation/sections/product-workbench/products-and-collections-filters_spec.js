var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2391';
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
  

    it('should validate all the filters.'+jiraNum, function () {

        globalpo.expandSectionInLeftPanel(loaded.prodcollec);
        browser.sleep(2000);
        //to click on the collections filter and check for pagination
        globalpo.clickOnElement(loaded.collecfilter);
        browser.sleep(1000);
        //to click on the collections and check for pagination
       var x= element(by.xpath("//span[@id='txtPWTotalCollectionsCounter']")).getText().then(function(text){
           console.log(text);
        
           if(Number(text)>50){
               console.log("entered if loop");
               var paginationpresent=globalpo.isElementPresent(loaded.pagination);
               expect(paginationpresent).toEqual(true);
              
           }
           else{
               console.log("Pagination is not present");
             
   
           }
        });

        //to click on the manual collection filter and check for pagination
        browser.sleep(1000);
        globalpo.clickOnElement(loaded.manualcollec);
        browser.sleep(1000);
        var a= element(by.xpath("//span[@id='txtPWTotalManualCollectionsCounter']")).getText().then(function(textof){
                   console.log(textof);
                
                   if(Number(textof)>10){
                       console.log("entered if loop");
                       var paginationpresent=globalpo.isElementPresent(loaded.pagination);
                       expect(paginationpresent).toEqual(true);
                      
                   }
                   else{
                       console.log("Pagination is not present");
                     
           
                   }
                });

         //to click on the automation collection filter and check for pagination
        browser.sleep(1000);
         globalpo.clickOnElement(loaded.autocollec);
         browser.sleep(1000);
        var b= element(by.xpath("//span[@id='txtPWTotalAutomaticCollectionsCounter']")).getText().then(function(textoff){
            console.log(textoff);
         
            if(Number(textoff)>50){
                console.log("entered if loop");
                var paginationpresent=globalpo.isElementPresent(loaded.pagination);
                expect(paginationpresent).toEqual(false);
               
            }
            else{
                console.log("Pagination is not present");
              
    
            }
         });
  //to click on the products filter and check for pagination
        browser.sleep(1000);
         globalpo.clickOnElement(loaded.producfilter);
         browser.sleep(1000);
        var c= element(by.xpath("//span[@id='txtPWProductsCounter']")).getText().then(function(texto){
            console.log(texto);
         
            if(Number(texto)>10){
                console.log("entered if loop");
                var paginationpresent=globalpo.isElementPresent(loaded.pagination);
                expect(paginationpresent).toEqual(true);
               
            }
            else{
                console.log("Pagination is not present");
              
    
            }
         });
       
    }); 
});
            
            
      









