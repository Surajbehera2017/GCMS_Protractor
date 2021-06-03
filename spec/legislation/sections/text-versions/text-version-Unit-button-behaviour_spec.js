    var params = browser.params;
    var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
    var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
    var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
    var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
    var jiraNum='GCMSQABANG-3018';
    var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');
    
    var testData = require('../../../../test-data/Jira_TestData/text-versions/'+ jiraNum + '.js');
    var loaded=testData[params.env][params.BU];
    
    describe('text-versions', function () {
    
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

	it('Unit button behaviour.'+jiraNum, function () {
     




        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(3000);

        
        globalpo.clickOnElement(loaded.refreshbutton);
        browser.sleep(6000);

        var elementpresent1=globalpo.isElementDisplayed(loaded.documenttext);
         expect(elementpresent1).toEqual(true);

        browser.switchTo().frame("capaTextoPreview");
       
        browser.ignoreSynchronization=true;
        browser.sleep(3000);
        textversionpage.hoverelement(loaded.cite_element);
        browser.sleep(1000);
          globalpo.clickOnElement(loaded.clickonbuld);
         browser.sleep(3000);

        
         

        browser.waitForAngular();
         var popup = textversionpage.isAddRelationshipDisplayed();
             if(popup = true)
                {
                    expect(popup).toEqual(true);
               }
        browser.switchTo().defaultContent();
         browser.sleep(4000);

         var elementpresent1=globalpo.isElementDisplayed(loaded.code);
         expect(elementpresent1).toEqual(true);
            
            var elementpresent1=globalpo.isElementDisplayed(loaded.year);
            expect(elementpresent1).toEqual(true);

            var elementpresent1=globalpo.isElementDisplayed(loaded.nfeild);
            expect(elementpresent1).toEqual(true);

            textversionpage.closeAddRelationShipPopup();
            browser.sleep(3000);
   
            collectiveAgreementSection.clickSaveExitEdit('Exit edition mode');
            browser.sleep(2000);
   
            globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
            browser.sleep(2000);

         

    
    });
    
});
    
    
    
    
    

    
