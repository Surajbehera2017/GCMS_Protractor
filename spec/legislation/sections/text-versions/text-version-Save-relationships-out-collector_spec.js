var params = browser.params;
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-3021';
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
	
	it('Save relationships out of the collector.'+jiraNum, function () {
     
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(3000);

        
        globalpo.clickOnElement(loaded.refreshbutton);
        browser.sleep(6000);
     
        browser.switchTo().frame("capaTextoPreview");
       
        browser.ignoreSynchronization=true;
        browser.sleep(3000);
        textversionpage.hoverelement(loaded.cite_element);
        globalpo.clickOnElement(loaded.clickonbuld);
        browser.sleep(3000);
//swithcing to the popup

        browser.waitForAngular();
         var popup = textversionpage.isAddRelationshipDisplayed();
             if(popup = true)
                {
                    expect(popup).toEqual(true);
               }
        browser.switchTo().defaultContent();
         browser.sleep(6000);

               relationshippage.entertextintypefield(loaded.typefeild1);
               browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // for every run we have to uniqe code,year,nfeild
        //or else will get alet popup
              relationshippage.entertextincodefield(loaded.code);
              browser.actions().sendKeys(protractor.Key.ENTER).perform();
              relationshippage.entertextinyearfield(loaded.year);
              relationshippage.entertextinNºfield(loaded.nfeild);
            browser.sleep(4000);
                 
            //relationshippage.clickOnAddRelationship();
              globalpo.clickOnElement(loaded.addbutton);
              browser.sleep(5000);


              //deleteing the reletionship in collector feild
              globalpo.clickOnElement(loaded.deletebutton);
              browser.sleep(4000);

               globalpo.clickSaveorCancel(loaded.yesbutton);
              browser.sleep(4000);


              //clsoing the relationship popup
              textversionpage.closeAddRelationShipPopup();
              browser.sleep(3000);

                
                collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
               browser.sleep(3000);
               globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
               browser.sleep(2000);

              
         
 });
    
});
    
    
    
    
    

    
