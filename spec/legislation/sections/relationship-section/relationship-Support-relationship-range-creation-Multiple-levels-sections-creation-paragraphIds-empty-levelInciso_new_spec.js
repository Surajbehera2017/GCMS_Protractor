var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber ='GCMSQABANG-2289';

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
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


	/*
	 * TC07 - Relationships - Support relationship range creation - Multiple levels-sections - Relationship creation - Add paragraph ids empty level and inciso fields
	 */
	it('Multiple levels-sections - Relationship creation - Add paragraph ids empty level and inciso fields.'+jiraNumber, function () {

		
	
		
		globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        // add relationship type 
        relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);

        // add document marginal id
        relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.CodeField,loadedData.code);
        relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.YearField,loadedData.year);
        relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.NumberField,loadedData.number);

       
		
	  relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.UnitField,loadedData.UnitValue);
	  relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.ComplimentField,loadedData.ComplimentValue);
	//   relationshippage.sendValueTo(loadedData.TargetPanel,loadedData.PartField,loadedData.PartValue);
	 
	  //Click on + button next to anchor image & select paragraph ids and there respective level and inciso field
        

		for(let i=0;i<loadedData.levelValue.length;i++){
			relationshippage.clickOnIcon(loadedData.TargetPanel,loadedData.PlusIcon);
		relationshippage.addmultipleunitlevel(loadedData.levelValue[i],loadedData.IncisoValue[i]);
		globalpage.clickOnButtonForGlobal('Ok');
		}
	
		expect(relationshippage.isNumberOfUnitSelectedEquals(2)).toEqual(true);
        
	});

});
