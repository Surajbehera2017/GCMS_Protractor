var params = browser.params;
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1792';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id_1);
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

	 /* GCMSQABANG-1792 01- Eliminar Nota element */
    
    it('Eliminar Nota element.'+jiraNumber,function () {

			//insert the notatexto element first
			browser.waitForAngular();
			rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
			browser.waitForAngular();
			rightpanelpage.ClickOnOriginalUnit(loaded.unit_name2,loaded.version);
			browser.waitForAngular();
			rightpanelpage.clickOnEditVisual();
			browser.waitForAngular();
			rightpanelpage.clickonXEditorExpandButton();
			browser.waitForAngular();
			browser.switchTo().frame(loaded.out_frame_id);
			browser.ignoreSynchronization = true; 
			browser.sleep(3000);
			rightpanelpage.clickCapatextoAndChildTabs(loaded.tabname_1);
			browser.sleep(1000);
			rightpanelpage.moveToInsertAndSelectElement(loaded.elementname_8);
			browser.sleep(2000);
			rightpanelpage.fillMandotoryAttributeFields(loaded.field_name4,loaded.fieldTextName_4,'ref123');
			rightpanelpage.fillMandotoryAttributeFields(loaded.field_name5,loaded.fieldTextName_5,'1');
			

			//insert nota element

			rightpanelpage.clickCapatextoAndChildTabs(loaded.tabname_2);
			browser.sleep(1000);
			rightpanelpage.moveToInsertAndSelectElement(loaded.elementname_14);
			browser.sleep(1000);
			rightpanelpage.fillMandatoryFieldsofNota('nota','ref*','ref123');
			rightpanelpage.fillMandatoryFieldsofNota('nota','o*','nota1');
			browser.sleep(2000); 
			


			//Remove the nota element

			browser.switchTo().frame(loaded.inside_frame_id);
			browser.ignoreSynchronization = true;
			browser.sleep(3000);
			rightpanelpage.rightClickonSpecificDataType(loaded.elementname_14);
			browser.sleep(1000);
			browser.switchTo().defaultContent();
			browser.sleep(3000);
			browser.switchTo().frame(loaded.out_frame_id);
			browser.ignoreSynchronization = true;
			rightpanelpage.selectDataTypeAndPerform(loaded.elementname_14,loaded.removemarkup);
			browser.sleep(1000);
  });
 });