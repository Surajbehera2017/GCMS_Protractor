var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-1673';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
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

	//GCMSQABANG-1673 : TC01 - Legislation Unit Edition - Ordered List Element - Add - Layout.

	it('Legislation Unit Edition Ordered List Element Add Layout.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		
		rightpanelpage.ClickOnStrucureActionAndSelectAction('Add new unit from editor');
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);

		rightpanelpage.writeUnitIDInAddUnitPopUp(loadedData.unit_to_add);
		browser.waitForAngular();
		browser.sleep(8000);
		//Steps - belongs to iFrame
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
		browser.switchTo().frame('ext-gen1132'); // give id of iframe
		rightpanelpage.writeRubricInAddUnitPopUp(loadedData.rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(loadedData.editorial_rubric_text);

		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(loadedData.paragraph_one);
		rightpanelpage.writeParagraphTwoInAddUnitPopUp(loadedData.paragraph_two);

		//adding orderedlist
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
		rightpanelpage.clickCapatextoAndChildTabs(loadedData.tabname_1);
		rightpanelpage.moveToInsertAndSelectElement('orderedlist');

		// //adding orderedlist from listitems (already existing list)
		//rightpanelpage.clickCapatextoAndChildTabs('orderedlist');
		browser.sleep(1000);
		rightpanelpage.selectDataTypeAndPerform('orderedlist', 'Insert break');

		//Verify the changes
		//expect(rightpanelpage.isOrderListPresentXEditor()).toEqual(true);
		//expect(rightpanelpage.isSecondOrderListPresentXEditor()).toEqual(true);


		// rightpanelpage.clickParagraphTwoInAddUnitPopUp();
		// browser.switchTo().defaultContent();
		// browser.switchTo().frame('legistext');
		// rightpanelpage.performRightClickAtCurrentPosition();
		// rightpanelpage.moveCursorToItemInRightClickMenuInFrame('capatexto');
		// rightpanelpage.moveCursorToItemInRightClickMenuInFrame('Insert element');
		// rightpanelpage.clickItemInRightClickMenuInFrame('orderedlist');

		// //adding orderedlist from listitems (already existing list)
		// browser.switchTo().frame('ext-gen1132');
		// rightpanelpage.clickItemizedListPresentXEditor();
		// browser.switchTo().defaultContent();
		// browser.switchTo().frame('legistext');
		// rightpanelpage.performRightClickAtCurrentPosition();
		// rightpanelpage.moveCursorToItemInRightClickMenuInFrame('listitem');
		// rightpanelpage.clickItemInRightClickMenuInFrame('Insert break');
		// browser.switchTo().frame('ext-gen1132');
		// //Verify the changes
		// expect(rightpanelpage.isOrderListPresentXEditor()).toEqual(true);
		// expect(rightpanelpage.isSecondOrderListPresentXEditor()).toEqual(true);



	});

});







