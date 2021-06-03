var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum1='GCMSQABANG-1853';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum1 + '.js');
var loaded=testData[params.env][params.BU];
describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

        legisDocDisplayPage.get(loaded.marginal_id);
        
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
     //GCMSQABANG-1851 : TC01 -xEditor - Delete notatexto elements - Full
    // GCMSQABANG-1853: TC03 -xEditor-Delete-notatexto-elements-Unwrapping-with-children
    //GCMSQABANG-1844: 03 - xEditor - Paste from XML
	 var jiraNum2='GCMSQABANG-1851';
	it('Paste from external text and Delete Notatexto.'+jiraNum1+'.'+jiraNum2, function () {

        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        browser.sleep(2000);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        browser.sleep(2000);
        rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.unit3,loaded.Original); //right click on oroginal and select Edit visual
         browser.sleep(5000);
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
        browser.sleep(2000);      
        rightpanelpage.clickCapatextoAndChildTabs(loaded.breadcrumb_tab_name_fst); //Click on Captexto tab
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded. notatexto);  // Always move the option into Insert element
        browser.sleep(1000);
        rightpanelpage.fillMandotoryAttributeFields(loaded.mandatory_field_id,loaded.mandatory_field_id,'identiFactory1') // Fill the Mandatory Attribute for ID
        rightpanelpage.fillMandotoryAttributeFields(loaded.field_name4,loaded.mandatory_field_ref,'firsttext') // Fill the Mandatory Attribute for ref*
        rightpanelpage.fillMandotoryAttributeFields(loaded.field_name5,loaded.mandatory_field_o,'secondtext') // Fill the Mandatory Attribute for o*
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.sleep(5000);
        //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();//going back to document structure page
        
        //below code will delete the notatexto elements which are created above
      
        rightpanelpage.clickOnEditVisual();
        browser.sleep(5000);
        rightpanelpage.clickonXEditorExpandButton();
        browser.sleep(5000);
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
        browser.switchTo().frame('ext-gen1132'); 
        browser.ignoreSynchronization = true;
        browser.sleep(7000);
        //rightpanelpage.rightClickonNotoTextoandDeleteOption();
        rightpanelpage.rightClickonSpecificDataType(loaded.notatexto);
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        rightpanelpage.selectDataTypeAndPerform(loaded.notatexto,loaded.element_delete);
        browser.switchTo().defaultContent();
        //browser.ignoreSynchronization = false;
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.sleep(3000);
              
     }); 

    
});