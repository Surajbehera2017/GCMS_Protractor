var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2452';
var testData = require('../../../../test-data/Jira_TestData/collective-agreement/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

describe("Collective Agreements", function () {
  var legisDocDisplayPage = new LegislationDocumentDisplayPage();
      
  beforeEach(function () {
        
    browser.ignoreSynchronization = false;
  

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

  it('should Delete Sector Subsector in collective agreement - Company not empty.'+jiraNum, function () {
   
    rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
    browser.sleep(1000);
    globalpo.expandSectionInLeftPanel(loaded.modulename);
    browser.sleep(1000);
    var companypresent=globalpo.isElementDisplayed(loaded.element1);
    expect(companypresent).toEqual(true);
    browser.sleep(1000);
    collectiveAgreementSection.toDeletetheFeilds('Sector');
    collectiveAgreementSection.toDeletetheFeilds('Subsector');
    browser.sleep(1000);
    //globalpo.clickOnButtonForGlobal('Select');
        collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
        browser.sleep(1000);
        globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
        browser.sleep(2000);

  });

  // Because of test case similarity In both 'it' blocks we are using the same jira with different marginal id's mentioned.
  it('should Delete Sector Subsector in collective agreement - Company empty.'+jiraNum, function () {
    
       rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
       browser.sleep(1000);
       globalpo.expandSectionInLeftPanel(loaded.modulename);
       browser.sleep(1000);
       collectiveAgreementSection.toDeletetheFeilds('Company');
       //expect(globalpo.isElementPresent(loaded.element1)).toEqual(false);
       browser.sleep(1000);
       collectiveAgreementSection.toDeletetheFeilds('Sector');
       collectiveAgreementSection.toDeletetheFeilds('Subsector');
       collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
       browser.sleep(1000);
       globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
       browser.sleep(2000);
      
      
});
});
    


    

    


