var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1750';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

  beforeAll(function () {

    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();

    legisDocDisplayPage.get(loadedData.marginal_id);
    rightpanelpage.urlLoad(params.valid_username, params.valid_password);

  });

  afterAll(function () {

    //Delete the Unit created for this test
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    //delete version
    legisDocDisplayPage.get(loadedData.marginal_id);
    rightpanelpage.urlLoad(params.valid_username, params.valid_password);
    browser.waitForAngular();
    rightpanelpage.clickDocumentStructure();
    browser.sleep(4000);
    rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loadedData.unit, 'Original');
    rightpanelpage.clickOnApplyOrCloseButton('ok');;
    //click Ok button
    rightpanelpage.clickOnApplyOrCloseButton('ok');;
    browser.sleep(7000);
    //Delete unit
    legisDocDisplayPage.get(loadedData.marginal_id);
    rightpanelpage.urlLoad(params.valid_username, params.valid_password);
    browser.waitForAngular();
    rightpanelpage.clickDocumentStructure();
    browser.sleep(4000);
    rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loadedData.unit);
    rightpanelpage.clickOnApplyOrCloseButton('ok');;
    //click Ok button
    rightpanelpage.clickOnApplyOrCloseButton('ok');;

  });

  /*
  *
  * GCMSQABANG-1750: TC02 -xEditor - Copy external text - Paragraphs and styles - Unit creation - Verify XML code
  * 
  */

  it('Copy external text Paragraphs and styles Unit Creation Verify XML code.'+jiraNumber, function () {


    browser.driver.manage().window().maximize();
    browser.waitForAngular();
    rightpanelpage.clickDocumentStructure();
    browser.waitForAngular();
    browser.sleep(2000);
    rightpanelpage.ClickOnStrucureActionAndSelectAction('Add new unit from editor');
    browser.sleep(2000);
    rightpanelpage.writeUnitIDInAddUnitPopUp(loadedData.unit);
    browser.sleep(2000);
    browser.switchTo().frame('legistext'); // give id of iframe
    browser.ignoreSynchronization = true;
    browser.sleep(1000);
    browser.switchTo().frame('ext-gen1132');
    browser.ignoreSynchronization = true;
    browser.sleep(1000);

    rightpanelpage.clickonSpecificDataType(loadedData.datatype);
    rightpanelpage.selectAllAndDelete();  // Select all content and delete
    browser.sleep(1000);
    browser.switchTo().defaultContent();
    browser.ignoreSynchronization = false;
    browser.switchTo().frame('legistext');
    browser.ignoreSynchronization = true;
    browser.sleep(1000);
    rightpanelpage.clickOnPasteDropdown();
    browser.sleep(1000);
    rightpanelpage.selectOptionFromPasteDropdown('Paste from XML');  // Select Paste External Text
    browser.sleep(1000);
    rightpanelpage.enterTextIntoPopup(loadedData.xmlContent);
    rightpanelpage.clickOnInsertOrCancel('Insert');
    browser.sleep(1000);
    browser.switchTo().defaultContent();
    browser.ignoreSynchronization = false;
    browser.switchTo().frame('legistext');
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    rightpanelpage.selectOptionFromDropDown(loadedData.title,loadedData.field,loadedData.fieldvalue );
    browser.sleep(2000);
    browser.switchTo().defaultContent();
    browser.ignoreSynchronization = false;
    browser.waitForAngular();
    rightpanelpage.clickOnApplyOrCloseButton('addUnit');
    browser.waitForAngular();
    browser.sleep(4000);

    browser.driver.ignoreSynchronization = false; 
		var infoMsg = rightpanelpage.getMessageFromInfoBoxPopUp();

		infoMsg.then(function(text) {
			if(text!==''){ //Save successful. No info message. Popup closes automatically
        console.log('Superscript is not verified. Given unit already exist in structure. Trying to delete it');
				expect(text).toContain(I18n.documentstructure.duplicateentryinsertmessage);
				//click on Ok button
				rightpanelpage.clickOnApplyOrCloseButton('ok');
				browser.sleep(2000);//Sleep required- Because Synchornization is overriden.
        rightpanelpage.clickOnApplyOrCloseButton('cancelEdition');
        
			}
		
			
		});
  });
});
