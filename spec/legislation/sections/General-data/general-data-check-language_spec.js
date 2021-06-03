var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2540';
var testData = require('../../../../test-data/Jira_TestData/General-data/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
describe('General-data', function () {

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

	
  it('it should check for one language.'+jiraNum, function () {
     

    browser.waitForAngular();
    globalpo.expandSectionInLeftPanel(loaded.modulename1);
    browser.sleep(3000);
    
    //checking  one languages
    var elementpresent1=globalpo.isElementDisplayed(loaded.Español);
 expect(elementpresent1).toEqual(true);
       
    
    rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
     browser.sleep(1000);

     collectiveAgreementSection.clickSaveExitEdit('Exit edition mode');
    browser.sleep(1000);

    globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
    browser.sleep(2000);
    
  
 
 });  
  
  
  
 });
    


    
    
    
    

    
