var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-1841';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
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
    
	//GCMSQABANG-1841: 07- Unwrrapping-math element with mathsubsup
	 
	it('Unwrapping the math sub section and deleting the mathsubsup.'+jiraNum, function () {

        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        browser.sleep(3000);
        rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.unit,loaded.Original); //right click on oroginal and select Edit visual
         browser.sleep(4000);
        //  rightpanelpage.clickonXEditorExpandButton();
        //  browser.sleep(1000);
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        rightpanelpage.clickCapatextoAndChildTabs(loaded.breadcrumb_tab_name_fst); //Click on Captexto tab
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.parrafo);// Always move the option into Insert element
        browser.sleep(3000);
              
        rightpanelpage.clickCapatextoAndChildTabs(loaded.parrafo); //Click on paraffo tab
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.math);// Always move the option into Insert element
        browser.sleep(1000);
        
        rightpanelpage.clickCapatextoAndChildTabs(loaded.math); //Click on paraffo tab
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.mathsubsup);// Always move the option into Insert element
        browser.sleep(1000);
        //removemark up of mathsubsup element
        browser.switchTo().frame('ext-gen1132'); 
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        rightpanelpage.rightClickonSpecificDataType(loaded.parrafo);
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        rightpanelpage.selectDataTypeAndPerform(loaded.mathsubsup,loaded.remove_markup);
        browser.sleep(5000);  
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        rightpanelpage.clickOnButtonForGlobal('Save');
        
        //below code deletes the math element
        rightpanelpage.clickOnEditVisual();
        browser.sleep(5000);
        rightpanelpage.clickonXEditorExpandButton();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.switchTo().frame('ext-gen1132'); 
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        rightpanelpage.rightClickonSpecificDataType(loaded.parrafo);
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        rightpanelpage.selectDataTypeAndPerform(loaded.math,loaded.element_delete);
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        
        browser.sleep(2000);
        rightpanelpage.clickOnButtonForGlobal('Save');
    
    });
    
	
});
