var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNumber = 'GCMSQABANG-1748';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]



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

  // afterEach(function () {
  //   browser.ignoreSynchronization = false;
  //   var legisDocDisplayPage = new LegislationDocumentDisplayPage();

  //   legisDocDisplayPage.get(loadedData.marginal_id);
  //   rightpanelpage.urlLoad(params.valid_username, params.valid_password);
  //   rightpanelpage.clickDocumentStructure();

  //   browser.driver.sleep(2000);
  //   browser.waitForAngular();
  //   rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedData.unit_name, loadedData.original);
  //   browser.driver.sleep(3000);
  //   browser.driver.sleep(3000);
  //   rightpanelpage.clickonXEditorExpandButton();
  //   browser.switchTo().frame(loadedData.outside_frame);
  //   browser.ignoreSynchronization = true;
  //   browser.sleep(2000);
  //   browser.switchTo().frame(loadedData.inside_frame);
  //   rightpanelpage.clickonSpecificDataType(loadedData.notatexto);
  //   browser.switchTo().defaultContent();
  //   browser.sleep(2000);
  //   browser.switchTo().frame(loadedData.outside_frame);
  //   browser.ignoreSynchronization = true;
  //   browser.sleep(2000);
  //   rightpanelpage.selectDataTypeAndPerform(loadedData.notatexto, loadedData.delete_button);
  //   browser.switchTo().defaultContent();

  //   browser.switchTo().frame(loadedData.outside_frame);
  //   browser.ignoreSynchronization = true;
  //   browser.sleep(2000);
  //   browser.switchTo().frame(loadedData.inside_frame);
  //   rightpanelpage.clickonSpecificDataType(loadedData.orderedlist);
  //   browser.switchTo().defaultContent();
  //   browser.sleep(2000);
  //   browser.switchTo().frame(loadedData.outside_frame);
  //   browser.ignoreSynchronization = true;
  //   browser.sleep(2000);
  //   rightpanelpage.selectDataTypeAndPerform(loadedData.orderedlist, loadedData.delete_button);
  //   browser.switchTo().defaultContent();
  //   browser.ignoreSynchronization = false;
  //   //browser.sleep(2000);
  //   rightpanelpage.clickOnButtonForGlobal(loadedData.save_button);
  //   browser.driver.sleep(2000);


  // });



  /*GCMSQABANG-1748  03-Edit-Delete diferents elements-shows display expanded  */

  it('Edit a unit shows display expanded.'+jiraNumber, function (done) {

    browser.waitForAngular();
    rightpanelpage.clickDocumentStructure();
    browser.driver.sleep(2000);
    browser.waitForAngular();
    rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedData.unit_name, loadedData.original);
    browser.driver.sleep(3000);
    //rightpanelpage.clickonXEditorExpandButton();
    browser.sleep(2000);
    browser.switchTo().frame(loadedData.outside_frame);
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    rightpanelpage.clickCapatextoAndChildTabs(loadedData.capatexto);
    browser.sleep(2000);
     rightpanelpage.moveToInsertAndSelectElement(loadedData.notatexto);
     browser.sleep(2000);
     rightpanelpage.fillMandotoryAttributeFields(loadedData.ref_fieldName, loadedData.ref_text, loadedData.ref_value);
     browser.sleep(2000);
    rightpanelpage.fillMandotoryAttributeFields(loadedData.o_fieldValue, loadedData.o_text, loadedData.o_value);
    browser.sleep(2000);
    rightpanelpage.clickCapatextoAndChildTabs(loadedData.capatexto);
    browser.sleep(2000);
    rightpanelpage.moveToInsertAndSelectElement(loadedData.orderedlist);
    browser.sleep(2000);
     browser.switchTo().frame(loadedData.inside_frame);
     rightpanelpage.clickonSpecificDataType(loadedData.orderedlist);
    // // rightpanelpage.enteringTextUsingProtractor('orderedlist');

     browser.sleep(2000);
     browser.switchTo().defaultContent();
     //browser.ignoreSynchronization = false;

     browser.switchTo().frame(loadedData.outside_frame);
    browser.ignoreSynchronization = true;
     rightpanelpage.clickOnPasteDropdown();
     rightpanelpage.selectOptionFromPasteDropdown(loadedData.paste_format);
     browser.sleep(2000);
    rightpanelpage.clickonEnterdata(loadedData.orderedlist);
    browser.sleep(2000);
     rightpanelpage.clickOnInsertorCancelInPastePopUpWindow(loadedData.insert_button);
     browser.sleep(2000);
    
    browser.switchTo().defaultContent();
    
      
      browser.sleep(2000);
      rightpanelpage.clickOnButtonForGlobal(loadedData.save_button);
     // browser.driver.sleep(1000);

     


  });
});
