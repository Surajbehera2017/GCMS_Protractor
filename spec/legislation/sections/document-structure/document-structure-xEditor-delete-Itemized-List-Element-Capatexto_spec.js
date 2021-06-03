var params = browser.params;
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-1801';
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

  // GCMSQABANG-1824:  06- Delete Itemized List Element with Capatexto
   var jiraNumber= 'GCMSQABANG-1824'
	it('Delete Itemized List Element with Capatexto.'+ jiraNumber, function () {

    browser.driver.manage().window().maximize();
    browser.waitForAngular();
    rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
    browser.sleep(2000);
    rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.unit1,loaded.Original); //right click on oroginal and select Edit visual
    browser.sleep(8000);
    browser.switchTo().frame('legistext'); // give id of iframe
    browser.ignoreSynchronization = true;
    browser.sleep(5000);
    rightpanelpage.clickCapatextoAndChildTabs(loaded.breadcrumb_tab_name_fst); //Click on Captexto tab
    browser.sleep(2000);
    rightpanelpage.moveToInsertAndSelectElement(loaded.itemizedlist);  // Always move the option into Insert element
    browser.sleep(2000);
    // Select for itemized list from Captexto
    browser.switchTo().defaultContent();
    browser.ignoreSynchronization = false;
    rightpanelpage.clickOnButtonForGlobal('Save');
    browser.sleep(7000);
   
    //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();//going back to document structure page
        
    //below code will delete the notatexto elements which are created above
  
    rightpanelpage.clickOnEditVisual();
    browser.sleep(5000);
    rightpanelpage.clickonXEditorExpandButton();
    browser.sleep(3000); 
    browser.switchTo().frame('legistext'); // give id of iframe
    browser.ignoreSynchronization = true;
    browser.switchTo().frame('ext-gen1132'); 
    browser.ignoreSynchronization = true;
    browser.sleep(5000);
    rightpanelpage.rightClickonSpecificDataType(loaded.itemizedlist);
    browser.sleep(3000);
    browser.switchTo().defaultContent();
    browser.ignoreSynchronization = false;
    browser.switchTo().frame('legistext'); // give id of iframe
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    rightpanelpage.selectDataTypeAndPerform(loaded.itemizedlist,loaded.element_delete);
    browser.switchTo().defaultContent();
    //browser.ignoreSynchronization = false;
    rightpanelpage.clickOnButtonForGlobal('Save');
     
        
  });
	
});







