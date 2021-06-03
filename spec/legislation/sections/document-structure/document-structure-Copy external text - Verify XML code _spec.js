var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-1752';
var jiraNumber_1 = 'GCMSQABANG-1846';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Document-structure', function () {

  beforeAll(function () {

    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();

    legisDocDisplayPage.get(loaded.marginal_id);
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
  * Duplicate GCMSQABANG-1846 same as in GCMSQABANG-1752
  *   TC02 -xEditor - Copy external text - Paragraphs and styles - Unit edition - Verify XML code
  *
  */

  it('Copy external text Paragraphs and styles Unit edition Verify XML code.'+jiraNumber+'.'+jiraNumber_1, function () {

    browser.waitForAngular();
    rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
    rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.expectedUnit, loaded.version);
    browser.waitForAngular();
    rightpanelpage.clickonXEditorExpandButton();
    browser.sleep(3000);
    browser.switchTo().frame(loaded.out_frame_id);
    browser.ignoreSynchronization = true;
    browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    rightpanelpage.clickonSpecificDataType(loaded.performOption);
    browser.switchTo().defaultContent();
    browser.ignoreSynchronization = false;
    browser.switchTo().frame(loaded.out_frame_id);
    browser.ignoreSynchronization = true;
    rightpanelpage.clickOnPasteDropdown();
    rightpanelpage.selectOptionFromPasteDropdown(loaded.pasteFormat);//select the option paste from external text
    rightpanelpage.enterTextIntoPopup(loaded.xmlContent); //enter the text in the paste from external text box
    browser.sleep(1000);
    rightpanelpage.clickOnInsertOrCancel(loaded.option);
    browser.sleep(2000);
    browser.switchTo().defaultContent();
    browser.ignoreSynchronization = false;
    browser.waitForAngular();
    rightpanelpage.clickOnButtonForGlobal(loaded.save);

    //deleting the text
    browser.sleep(4000);
    rightpanelpage.clickOnEditVisual();
    browser.waitForAngular();
    rightpanelpage.clickonXEditorExpandButton();
    browser.sleep(1000);
    browser.switchTo().frame(loaded.out_frame_id);
    browser.ignoreSynchronization = true;
    browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
    browser.ignoreSynchronization = true;
    browser.sleep(6000);
    rightpanelpage.clickonSpecificDataType(loaded.performOption);
    rightpanelpage.selectAllAndDelete();
    browser.sleep(1000);
    browser.switchTo().defaultContent();
    browser.ignoreSynchronization = false;
    rightpanelpage.clickOnButtonForGlobal(loaded.save);
    browser.sleep(1000);
    
  });
});
