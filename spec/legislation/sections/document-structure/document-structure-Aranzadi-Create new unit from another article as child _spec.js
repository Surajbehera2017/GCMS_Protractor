var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1689';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeEach(function () {

    browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id_xml);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

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
     *  TC03 -Add 1.0 Editor - Aranzadi - Create new unit from another article as child
     */ 
    
    it(' Aranzadi Create new unit from another article as child.'+jiraNumber, function () {

      browser.waitForAngular();
	  rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
	  browser.waitForAngular();
      rightpanelpage.rightClickOnUnitAndSelectAddXml(loaded.unit_name1);
      browser.waitForAngular();
        
      //Verify pop-up displayed
      var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
      expect(popup).toEqual(true);

      rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.replace);
    //   rightpanelpage.enterTextInReplaceSearchBox(loaded.oldxmltext,loaded.newxmlText);
    rightpanelpage.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(loaded.newxmlText);
      
      browser.sleep(1000);
      //rightpanelpage.clickOnsaveButton();
            
  });
});
