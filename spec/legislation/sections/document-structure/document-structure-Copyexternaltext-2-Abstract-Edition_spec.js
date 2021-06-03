var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1866';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]
browser.manage().timeouts().implicitlyWait(3000);


describe('Document-structure', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    rightpanelpage.urlLoad(params.valid_username, params.valid_password);
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




  /*
  * GCMSQABANG-1866 TC03 -xEditor - Copy external text - Tables - Word format - Abstract - Edition
  */
  /*
    it('Copy external text Tables Word format Unit edition Verify elements', function () {
  
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      rightpanelpage.clickOnEditButton(1);
      browser.waitForAngular();
      rightpanelpage.expandStatusData();
      rightpanelpage.clickOnGlobalIcon(0);
      browser.waitForAngular();
      rightpanelpage.clickOnEditButtonInAbstract();
      //browser.sleep(30000);
      // browser.ignoreSynchronization = true;
      browser.getAllWindowHandles().then(function (handles) {
      var newTabHandle = handles[1];
      browser.switchTo().window(newTabHandle).then(function () {
    });
    */

  /*
  * GCMSQABANG-1866 TC03 -xEditor - Copy external text - Tables - Word format - Abstract - Edition
  */

  it('Copy external text Tables Word format Unit edition Verify elements.'+jiraNumber, function () {
    browser.waitForAngular();
    browser.driver.manage().window().maximize();
    browser.waitForAngular();
    rightpanelpage.clickOnbuttonInEditMode('Edit');
    browser.waitForAngular();
    rightpanelpage.expandSectionInLeftPanel('Statute Data');
    //rightpanelpage.clickOnGlobalIcon();
    browser.waitForAngular();
    //click on Edit button inside abstract segment
     rightpanelpage.clickOnApplyOrCloseButton(loadedData.edit);
  
    browser.sleep(5000);
    browser.getAllWindowHandles().then(function (handles) {
    var newTabHandle = handles[1];
    browser.switchTo().window(newTabHandle).then(function () {
    browser.ignoreSynchronization = true;
    browser.sleep(1000);
    rightpanelpage.clickOnPasteDropdown();
    rightpanelpage.selectOptionFromPasteDropdown('Paste from XML');  // Select Paste External Text
    rightpanelpage.enterTextIntoPopup(loadedData.text);
    rightpanelpage.clickOnInsertOrCancel('Insert');

    browser.ignoreSynchronization = false;


      });
    });

  });
});
