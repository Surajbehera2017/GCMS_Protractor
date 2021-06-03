var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNumber = 'GCMSQABANG-1617';
var jiraNumber_1 = 'GCMSQABANG-1620';
var jiraNumber_2 = 'GCMSQABANG-1621';
//var jiraNumber_7= 'GCMSQABANG-1622'
var jiraNumber_3 = 'GCMSQABANG-1626';
var jiraNumber_4 = 'GCMSQABANG-1627';
var jiraNumber_5 = 'GCMSQABANG-1623';
var jiraNumber_6 = 'GCMSQABANG-1625';



var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
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
	 * TC04 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using Xeditor - Added as an lower sibling
	 */
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling.' + jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		rightpanelpage.rightClickOnUnitAndSelectAdd(loaded.unit);
		browser.sleep(2000);

		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);

		rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.lower);
		browser.sleep(2000);
		rightpanelpage.writeUnitIDInAddUnitPopUp(loaded.sibling_unit_to_add);

		//enetring the frames

		browser.sleep(15000);
		browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true;
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

		//complete rubric and editorial rubric fields
		rightpanelpage.writeRubricInAddUnitPopUp(loaded.rubric_text);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(loaded.editorial_rubric_text);

		//enter the text in the main text field
		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(loaded.paragraph_one);

		//click on titulo original button
		rightpanelpage.clickonSpecificDataType(loaded.performOption);
		browser.sleep(1000);

		browser.switchTo().defaultContent();
		browser.ignoreSynchronization = false;
		browser.sleep(3000);

		//going to the first frame

		browser.switchTo().frame(loaded.out_frame_id);
		browser.ignoreSynchronization = true;
		//rightpanelpage.writeFieldInInnerTitleEditPopUp('Title',19);
		rightpanelpage.fillFieldTextinPopUpWindow(loaded.title_fieldname, loaded.title_fieldvalue)
		rightpanelpage.clickOnInsertOrCancel(loaded.accept);
		browser.sleep(3000);
		rightpanelpage.selectOptionFromDropDown(loaded.definitivo_label, loaded.definitivo_field, loaded.definitivo_option);
		browser.sleep(1000);
		browser.switchTo().defaultContent();
		browser.ignoreSynchronization = false;
		//Click Save button
		rightpanelpage.clickOnButtonForGlobal(loaded.save);
		browser.waitForAngular();



	});

	// performing bold operation on the lower sibling created

	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Bold.' + jiraNumber_1, function () {
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);

		//clicking on the original for the created unit and selecting edit (visual layer)
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.sibling_unit_to_add, loaded.version);
		//going to 2nd frame
		browser.sleep(4000);
		browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true;
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

		//selecting the line and performing the bold action

		rightpanelpage.selectAText(loaded.par_opt);
		browser.sleep(2000);

		//performing bold

		browser.switchTo().defaultContent();
		browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
		browser.sleep(2000);
		rightpanelpage.changeTheWordFormat(loaded.bold);
		browser.sleep(2000);


	});


	italics
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling italics.' + jiraNumber_2, function () {
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);

		//clicking on the original for the created unit and selecting edit (visual layer)
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.sibling_unit_to_add, loaded.version);
		browser.sleep(2000);
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);

		//moving to 2nd frame and selecting the text
		browser.sleep(2000);
		browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true;
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

		//selecting text
		rightpanelpage.selectAText(loaded.par_opt);

		//performing italics
		browser.switchTo().defaultContent();
		browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
		browser.sleep(2000);
		rightpanelpage.changeTheWordFormat(loaded.Italic);
		browser.sleep(2000);

	});



	//subscript
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Subscript.' + jiraNumber_3, function () {
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);

		//clicking on the original for the created unit and selecting edit (visual layer)
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.sibling_unit_to_add, loaded.version);

		//going to 2nd frame
		browser.sleep(2000);
		browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true;
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

		//selecting text
		rightpanelpage.selectAText(loaded.par_opt);

		//performing subscript
		browser.switchTo().defaultContent();
		browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
		browser.sleep(2000);
		rightpanelpage.changeTheWordFormat(loaded.Subscript2);
		browser.sleep(2000);
		browser.switchTo().defaultContent();
		browser.ignoreSynchronization = false;
		//Click Save button
		rightpanelpage.clickOnButtonForGlobal(loaded.save);
		browser.waitForAngular();

	});

	//Superscript
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Superscript.' + jiraNumber_4, function () {
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);

		//clicking on the original for the created unit and selecting edit (visual layer)
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.sibling_unit_to_add, loaded.version);

		//going to 2nd frame
		browser.sleep(2000);
		browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true;
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

		//selecting text
		rightpanelpage.selectAText(loaded.par_opt);

		//performing superscript
		browser.switchTo().defaultContent();
		browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
		browser.sleep(2000);
		rightpanelpage.changeTheWordFormat(loaded.Superscript);
		browser.sleep(2000);
		browser.switchTo().defaultContent();
		browser.ignoreSynchronization = false;

	});

	//Underline
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Underline.' + jiraNumber_4, function () {
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);

		//clicking on the original for the created unit and selecting edit (visual layer)
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.sibling_unit_to_add, loaded.version);

		//going to 2nd frame
		browser.sleep(2000);
		browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true;
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

		//selecting text
		rightpanelpage.selectAText(loaded.par_opt);

		//performing superscript
		browser.switchTo().defaultContent();
		browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
		browser.sleep(2000);
		rightpanelpage.changeTheWordFormat(loaded.Underline);
		browser.sleep(2000);

	});

	//Overline
	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Overline.' + jiraNumber_5, function () {
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);

		//clicking on the original for the created unit and selecting edit (visual layer)
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.sibling_unit_to_add, loaded.version);

		//going to 2nd frame
		browser.sleep(2000);
		browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true;
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

		//selecting text
		rightpanelpage.selectAText(loaded.par_opt);

		//performing superscript
		browser.switchTo().defaultContent();
		browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
		browser.sleep(2000);
		rightpanelpage.changeTheWordFormat(loaded.Overline);
		browser.sleep(2000);

	});

	//srikethrough

	it('Add Unit Xeditor Unit Menu Added as Lower Sibling Strikethrough.' + jiraNumber_6, function () {
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);

		//clicking on the original for the created unit and selecting edit (visual layer)
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.sibling_unit_to_add, loaded.version);

		//going to 2nd frame
		browser.sleep(2000);
		browser.switchTo().frame(loaded.out_frame_id);//1st frame
		browser.ignoreSynchronization = true;
		browser.switchTo().frame(loaded.inside_frame_id);//2nd frame
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

		//selecting text
		rightpanelpage.selectAText(loaded.par_opt);

		//performing superscript
		browser.switchTo().defaultContent();
		browser.switchTo().frame(loaded.out_frame_id); //switching to frame one
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		rightpanelpage.clickOnTabInsideVisualEditor(loaded.tabName);
		browser.sleep(2000);
		rightpanelpage.changeTheWordFormat(loaded.Strikethrough);
		browser.sleep(2000);
		browser.switchTo().defaultContent();
		browser.ignoreSynchronization = false;
		//Click Save button
		rightpanelpage.clickOnButtonForGlobal(loaded.save);
		browser.waitForAngular();

	});

	it('deletion of created unit' + jiraNumber.link(params.jiraURL + jiraNumber), function () {

		//deletion of the created unit
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.waitForAngular();
		// rightpanelpage.expandUnit(loaded.unit);
		//browser.waitForAngular();
		rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loaded.sibling_unit_to_add, loaded.version);
		browser.sleep(2000);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.waitForAngular();
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.waitForAngular();
		//rightpanelpage.expandUnit(loaded.unit);
		rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.sibling_unit_to_add);
		rightpanelpage.clickOnButtonForGlobal(loaded.yes);
		browser.waitForAngular();
		rightpanelpage.clickOnButtonForGlobal(loaded.ok);
		browser.sleep(2000);



	});

 });







