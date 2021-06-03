var params = browser.params;
var jiraNumber ='GCMSQABANG-3759';
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
	browser.driver.manage().window().maximize();
});


	/*
	 * 011 - Add relationship Transpone - New Section
	 */
	it('Add relationship Transpone - New Section.'+jiraNumber, function () {

			// click on add button on relationship section 
			globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
        
			//Verify type is mandatory field
			var typeBorderColor = relationshippage.getBorderColorOfTypeInputField();
			expect(typeBorderColor).toEqual('rgb(255, 0, 0)'); // red - rgb(255, 0, 0)
		   
		   
			//Verify the border color is red for mandatory fields.
			var codeBorderColor = relationshippage.getBorderColorOfCodeInputField();
			var yearBorderColor =  relationshippage.getBorderColorOfYearInputField();
			var nBorderColor =  relationshippage.getBorderColorOfNInputField();
			expect(codeBorderColor).toEqual(loadedData.redColor); 
			expect(yearBorderColor).toEqual(loadedData.redColor);
			expect(nBorderColor).toEqual(loadedData.redColor);
			
			//Enter mandatory fields 
			
			  relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);
			  relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
			  relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
			  relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
			
			  //Verify the border color red is removed
			codeBorderColor = relationshippage.getBorderColorOfCodeInputField();
			yearBorderColor =relationshippage.getBorderColorOfYearInputField();
			nBorderColor =relationshippage.getBorderColorOfNInputField();
			typeBorderColor =relationshippage.getBorderColorOfTypeInputField();
			expect(codeBorderColor).not.toEqual(loadedData.redColor); 
			expect(yearBorderColor).not.toEqual(loadedData.redColor);
			expect(nBorderColor).not.toEqual(loadedData.redColor);
			expect(typeBorderColor).not.toEqual(loadedData.redColor);
		   });

});




