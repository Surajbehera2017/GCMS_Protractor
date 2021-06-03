var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var statutedatasection = require('../../../../po/document/edition/legis/sections/statute-data/statute-data.po.js');
var legisDocPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var legisDocEditPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');



var legislativebodyEditionNew = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber1 = 'GCMSQABANG-2994';
var testData1 = require('../../../../test-data/Jira_TestData/Statute_Data/' + jiraNumber1 + '.js');
var loadedData1 = testData1[params.env][params.BU]

var jiraNumber2 = 'GCMSQABANG-2995';
var testData2 = require('../../../../test-data/Jira_TestData/Statute_Data/' + jiraNumber2 + '.js');
var loadedData2 = testData2[params.env][params.BU]

var jiraNumber3 = 'GCMSQABANG-2996';
var testData3 = require('../../../../test-data/Jira_TestData/Statute_Data/' + jiraNumber3 + '.js');
var loadedData3 = testData3[params.env][params.BU]

var jiraNumber4 = 'GCMSQABANG-2998';
var testData4 = require('../../../../test-data/Jira_TestData/Statute_Data/' + jiraNumber4 + '.js');
var loadedData4 = testData4[params.env][params.BU]

describe('Statute Data', function () {

	beforeEach(function () {
		browser.ignoreSynchronization = false;
	});

	afterEach(function () { });


	xit('Drag and Drop - Legislative Body in Statute Data Section.' + jiraNumber1, function () {

		if(params.BU == 'gulf'){
			console.log("We are not able to perform any functionality on Legislative Body in gulf")
		} else{
		//Load document with multiple rows in Legislation body
		//legisDocPage.get(loadedData1.marginal_id);
		legisDocEditPage.get(loadedData1.marginal_id);
		browser.waitForAngular();
		statutedatasection.urlLoad(params.valid_username, params.valid_password);
		browser.waitForAngular();

		global.expandSectionInLeftPanel(loadedData1.section);
		legislativebodyEditionNew.clickPlusButton(loadedData1.add);
		statutedatasection.selectvaluefromdropdown(loadedData1.dropdownProperty, loadedData1.dropdownValue);

		var firstvalue = statutedatasection.getTextFieldIdProperty(loadedData1.field1);
		var secondvalue = statutedatasection.getTextFieldIdProperty(loadedData1.field2);

		statutedatasection.dragAndDropMainBodyToSecondaryPosition();

		var firstvalueaftermoving = statutedatasection.getTextFieldIdProperty(loadedData1.field1);
		var secondvalueaftermoving = statutedatasection.getTextFieldIdProperty(loadedData1.field2);

		expect(firstvalue).toEqual(secondvalueaftermoving);
		expect(secondvalue).toEqual(firstvalueaftermoving);

		}

		
	});

	it('Drag and Drop - Statute Type in Statute Data Section.' + jiraNumber2, function () {
		//Load document with multiple rows in Legislation body
		legisDocEditPage.get(loadedData2.marginal_id);
		//legisDocPage.get(loadedData.marginal_id_move_statute_type);
		browser.waitForAngular();
		statutedatasection.urlLoad(params.valid_username, params.valid_password);
		browser.waitForAngular();

		global.expandSectionInLeftPanel(loadedData2.section);
		legislativebodyEditionNew.clickPlusButton(loadedData2.add);

		statutedatasection.selectvaluefromdropdown(loadedData2.dropdownProperty1, loadedData2.dropdownValue1);
		legislativebodyEditionNew.selectDropdownOption(loadedData2.dropdownProperty2, "a la que se adhirió España por");

		var firstStatuteTypeValue = statutedatasection.getTextFieldIdProperty(loadedData2.field1);
		var secondStatuteTypeValue = statutedatasection.getTextFieldIdProperty(loadedData2.field2);

		statutedatasection.dragAndDropSecondStatuteTypeToFirstPosition();
		browser.sleep(5000);

		var firstStatuteTypeValueAfterMoving = statutedatasection.getTextFieldIdProperty(loadedData2.field1);
		var secondStatuteTypeValueAfterMoving = statutedatasection.getTextFieldIdProperty(loadedData2.field2);

		expect(firstStatuteTypeValue).toEqual(secondStatuteTypeValueAfterMoving);
		expect(secondStatuteTypeValue).toEqual(firstStatuteTypeValueAfterMoving);

		expect(global.isElementDisplayed(loadedData2.connector)).toEqual(true);


	});

	it('Drag and Drop - Provision Date in Statute Data Section.' + jiraNumber3, function () {
		//Load document with multiple rows in Legislation body
		//legisDocPage.get(loadedData.marginal_id_move_provision_date);
		legisDocEditPage.get(loadedData3.marginal_id);
		browser.waitForAngular();
		statutedatasection.urlLoad(params.valid_username, params.valid_password);
		browser.waitForAngular();

		global.expandSectionInLeftPanel(loadedData3.section);
		legislativebodyEditionNew.clickPlusButton(loadedData3.add);

		legisDocEditPage.saveWIConfirm();
		expect(global.isElementDisplayed(loadedData3.popup)).toEqual(true);
		global.clickSaveorCancel(loadedData3.save);


		legislativebodyEditionNew.selectDropdownOption(loadedData3.dropdownProperty1, "aceptado por España el");

		var firstProvisionDateValue = statutedatasection.valueInProvisionDateForStatuteType(0);
		var secondProvisionDateValue = statutedatasection.valueInProvisionDateForStatuteType(1);

		statutedatasection.dragAndDropSecondPrecisionDateToFirstPosition();

		//browser.sleep(5000);
		var firstProvisionDateValueAfterMoving = statutedatasection.valueInProvisionDateForStatuteType(0);
		var secondProvisionDateValueAfterMoving = statutedatasection.valueInProvisionDateForStatuteType(1);

		expect(firstProvisionDateValue).toEqual(secondProvisionDateValueAfterMoving);
		expect(secondProvisionDateValue).toEqual(firstProvisionDateValueAfterMoving);

	});

	it('Drag and Drop - Legislative Number in Statute Data Section.'+jiraNumber4, function () {

		legisDocEditPage.get(loadedData4.marginal_id);
		browser.waitForAngular();
		statutedatasection.urlLoad(params.valid_username, params.valid_password);
		browser.waitForAngular();

		global.expandSectionInLeftPanel(loadedData4.section);
		legislativebodyEditionNew.clickPlusButton(loadedData4.add);

		legisDocEditPage.saveWIConfirm();
		expect(global.isElementDisplayed(loadedData4.popup)).toEqual(true);
		global.clickSaveorCancel(loadedData4.save);

		legislativebodyEditionNew.selectDropdownOption(loadedData4.dropdownProperty1,loadedData4.dropdownValue1 );
		legislativebodyEditionNew.selectDropdownOption(loadedData4.dropdownProperty2,loadedData4.dropdownValue2 );

		statutedatasection.enterTextBox(loadedData4.yearproperty, loadedData4.yearvalue);
		
		var firstLegislationNumberYearValue = statutedatasection.getTextBox(loadedData4.field1);
		var secondLegislationNumberYearValue = statutedatasection.getTextBox(loadedData4.field2);

		statutedatasection.dragAndDropFirstStatuteTypeSecondNumberToFirstPosition();

		//browser.sleep(5000);
		var firstLegislationNumberYearValueAfterMoving = statutedatasection.getTextBox(loadedData4.field1);
		var secondLegislationNumberYearValueAfterMoving = statutedatasection.getTextBox(loadedData4.field2);

		expect(firstLegislationNumberYearValue).toEqual(secondLegislationNumberYearValueAfterMoving);
		expect(secondLegislationNumberYearValue).toEqual(firstLegislationNumberYearValueAfterMoving);

	});

});
