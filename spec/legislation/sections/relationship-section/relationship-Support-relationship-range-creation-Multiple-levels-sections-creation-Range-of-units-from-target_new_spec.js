var params = browser.params;
var jiraNumber ='GCMSQABANG-2288';

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});
	afterEach(function(){
   
		for(var i=0;i<5;i++){
		relationshippage.clickOnIcon('collector','deleteRela');}
	  });


	/*
	 * TC06 - Relationships - Support relationship range creation - Multiple levels-sections - Relationship creation - Range of units from target layer
	 */
	it('Multiple levels-sections - Relationship creation - Range of units from target layer.'+jiraNumber, function () {

	   // click on add button on relationship section 
	   globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
        //Select relationship type :'Véase'
		relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);
		
		//Enter mandatory fields in target
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
	    relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
	    relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
		
	   //select unit of target document
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.UnitField,loadedData.UnitValue);
		relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.PartField,loadedData.PartValue);
		
		
		//Click on + button next to anchor image & select paragraph ids and there respective level and inciso field
		for(let i=0;i<loadedData.levelValue.length;i++){
			relationshippage.clickOnIcon(loadedData.TargetPanel,loadedData.PlusIcon);
		   relationshippage.addmultipleunitlevel(loadedData.levelValue[i],loadedData.IncisoValue[i]);
		   globalpage.clickOnButtonForGlobal('Ok');
		}

		// verify if selected unit is same as selected 
		expect(relationshippage.isNumberOfUnitSelectedEquals(5)).toEqual(true);

		//click on add button to add relationship
	   relationshippage.clickOnRelPopUpButtons('Add');
        
	   // verify if Relationship added to collector or not
	   expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);
		
       

	});

});
