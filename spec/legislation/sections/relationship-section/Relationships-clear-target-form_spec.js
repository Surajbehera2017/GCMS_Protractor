var params = browser.params;
var jiraNumber ='GCMSQABANG-2079';


var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
beforeAll(function () {

	browser.ignoreSynchronization = false;
	legisDocDisplayPage.get(loadedData.marginal_id);
	relationshippage.urlLoad(params.valid_username,params.valid_password);

});


	/*
	 * 06-Add a relationship pressing X button from the target section (blanqueo de target)
	 */
	it('Relationships - Clear Target Form.'+jiraNumber, function () {





			// click on add button on relationship section 
	globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
        
	//Verify type 
	relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);

	//Enter mandatory fields in target
	relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
	relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
	relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
  
	//add unit   to target
	relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.UnitField,loadedData.unit);
	relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.PartField,loadedData.part);


	//clicking the add button 
	  relationshippage.clickOnRelPopUpButtons('Add');
	  
	 // expect(relationshippage.getAlertMessage()).toEqual(loadedData.error_msg);

	 // get error info popup anf verify error message
	 relationshippage.clickERRORInfoLink();
	 var err_msg=relationshippage.verifyErrorInfoDialog();
	 expect(err_msg).toBe('**- Los ambitos de los marginales Afecta-Afectado no son correctos para el tipo de relacion seleccionado.');
	 globalpage.clickSaveorCancel('Save');



	 //clicking on clear form button in target section 
	  relationshippage.clickOnIcon(loadedData.Section,loadedData.iconName);
     browser.sleep(3000);
	  

	 //checking  mandatory feilds in red color
	  codeBorderColor = 
		 relationshippage.getBorderColorOfCodeInputField();
		yearBorderColor =
			relationshippage.getBorderColorOfYearInputField();
		 nBorderColor =
			relationshippage.getBorderColorOfNInputField();
		 expect(codeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
		 expect(yearBorderColor).toEqual('rgb(255, 0, 0)');
		 expect(nBorderColor).toEqual('rgb(255, 0, 0)');


		 browser.sleep(3000);



		// browser.waitForAngular();
		// browser.driver.manage().window().maximize();
		// relationshippage.clickAddRelationship();
		// browser.waitForAngular();
		
		// //Select type 
		// relationshippage.clickTypeFieldRelationshipPopup();
		// relationshippage.sendKeystoTypeinRelationshipTab(loadedData.creation_by_type.acepta_type);
		// relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
		
		// //Enter mandatory fields in target
		// relationshippage.clickCodeDropdownTarget();
		// relationshippage.sendKeystoCodeinRelationshipPopupTarget(loadedData.creation_by_type.target_code);
		// relationshippage.clickSearchBtnPartTextFieldTarget(); 
		// relationshippage.sendKeysinYearFieldRelationshipPopupTarget(loadedData.creation_by_type.target_year); //Invalid year
		// relationshippage.sendKeystoNumberinRelationshipPopupTarget(loadedData.creation_by_type.target_number);	//Invalid number
		// relationshippage.enterTargetUnitFieldDirectly('A'); //Enter any unit

		// //Verify the border color is NOT red for mandatory fields.
		// var codeBorderColor = 
		// relationshippage.getBorderColorOfCodeInputField();
		// var yearBorderColor =
		// 	relationshippage.getBorderColorOfYearInputField();
		// var nBorderColor =
		// 	relationshippage.getBorderColorOfNInputField();
		// expect(codeBorderColor).not.toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
		// expect(yearBorderColor).not.toEqual('rgb(255, 0, 0)');
		// expect(nBorderColor).not.toEqual('rgb(255, 0, 0)');
		
		// //Click Clear & verify mandatory fields are in red
		// relationshippage.clearTargetForm();
		// codeBorderColor = 
		// relationshippage.getBorderColorOfCodeInputField();
		// yearBorderColor =
		// 	relationshippage.getBorderColorOfYearInputField();
		// nBorderColor =
		// 	relationshippage.getBorderColorOfNInputField();
		// expect(codeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
		// expect(yearBorderColor).toEqual('rgb(255, 0, 0)');
		// expect(nBorderColor).toEqual('rgb(255, 0, 0)');

	});

});




