var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-3020';
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
	
  it('popup window.' + jiraNum, function () {

    
       browser.waitForAngular();
       browser.sleep(2000);
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(3000);

        
        globalpo.clickOnElement(loaded.refreshbutton);
        browser.sleep(6000);

        
        browser.switchTo().frame("capaTextoPreview");
       
        browser.ignoreSynchronization=true;
        browser.sleep(3000);
        textversionpage.hoverelement(loaded.cite_element);
        browser.sleep(2000);
        console.log(loaded.clickonbuld);
         globalpo.clickOnElement(loaded.clickonbuld);
         browser.sleep(3000);

        //   browser.actions.mouseMove(loaded.cite_element).click(loaded.clickonbuld).perform();
        // //minimizing the popup
        // browser.waitForAngular();
         var popup = textversionpage.isAddRelationshipDisplayed();
             if(popup = true)
                {
                    expect(popup).toEqual(true);
               }
        browser.switchTo().defaultContent();
         browser.sleep(4000);

        globalpo.clickOnElement(loaded.minimize);
        browser.sleep(3000);
         

        //maximizing the popup
        browser.waitForAngular();
         var popup = textversionpage.isAddRelationshipDisplayed();
             if(popup = true)
                {
                    expect(popup).toEqual(true);
               }
         browser.switchTo().defaultContent();
         browser.sleep(4000);


         globalpo.clickOnElement(loaded.maximize);
         browser.sleep(3000);

         //textversionpage.maximizeAddRelationShipPopup();

         //closing the popup
         browser.waitForAngular();
         var maximize = textversionpage.isAddRelationshipDisplayed();
         expect(maximize).toEqual(true);


         textversionpage.closeAddRelationShipPopup();
         browser.sleep(3000);

         collectiveAgreementSection.clickSaveExitEdit('Exit edition mode');
         browser.sleep(2000);

         globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
         browser.sleep(2000);

       }); 
    
 });

    
    
    
    
    

    
