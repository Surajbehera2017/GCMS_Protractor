var params = browser.params;
var jiraNumber ='GCMSQABANG-2287';

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
		
		//legisDocDisplayPage.get(loadedData.addmultiple_paragraph.marginal_id);
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});
	afterEach(function(){
   
		for(var i=0;i<3;i++){
		relationshippage.clickOnIcon('collector','deleteRela');}
	 
	   
	   
	  });


	/*
	 * TC05 - Relationships - Support relationship range creation - Multiple levels-sections - Relationship creation - Range of units from source layer
	 */
	it('Multiple levels-sections - Relationship creation - Range of units from source layer.'+jiraNumber, function () {

		globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
		 
		//select unit of source document
		relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.UnitField,loadedData.UnitValue);
		relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.ComplimentField,loadedData.ComplimentValue);
		
		//Click on + button next to anchor image & select paragraph ids and there respective level and inciso field
		for(let i=0;i<loadedData.levelValue.length;i++){
			relationshippage.clickOnIcon(loadedData.SourcePanel,loadedData.PlusIcon);
		   relationshippage.addmultipleunitlevel(loadedData.levelValue[i],loadedData.IncisoValue[i]);
		   globalpage.clickOnButtonForGlobal('Ok');
		}
	
		expect(relationshippage.isNumberOfUnitSelectedEquals(3)).toEqual(true);
        // add relationship type 
        relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);
	
      // add document marginal id
	  relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
	  relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
	  relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);
   
	  //click on add button to add relationship
	  relationshippage.clickOnRelPopUpButtons('Add');
        
	  // verify if Relationship added to collector or not
	 expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);
	});

});






	



	
