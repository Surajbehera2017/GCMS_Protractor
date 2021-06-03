var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber ='GCMSQABANG-2290';

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
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

/*
TC08 - Relationships - Support relationship range creation - Multiple levels-sections - Relationship creation -  Verify the Levels Selected
*/
  it('verify_multiple_level_seccion.'+jiraNumber, function () {
    globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
		 
		//select unit of source document
		relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.UnitField,loadedData.UnitValue);
		relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.ComplimentField,loadedData.ComplimentValue);
		
		expect(relationshippage.isHeaderDisplayedInDocStructurePopUp()).toEqual(false);
		
		//Click on + button next to plus image & select multiple paragraph ids  with level and inciso
		relationshippage.clickOnIcon(loadedData.SourcePanel,loadedData.PlusIcon);

		relationshippage.enterLevelandIncisoWithParaID(loadedData.levelValue[0],loadedData.IncisoValue[0],loadedData.ParaID[0]);
		relationshippage.enterLevelandIncisoWithParaID(loadedData.levelValue[1],loadedData.IncisoValue[1],loadedData.ParaID[1]);
		 relationshippage.enterLevelandIncisoWithParaID(loadedData.levelValue[2],loadedData.IncisoValue[2],loadedData.ParaID[2]);
		 globalpage.clickOnButtonForGlobal('Ok');
		 expect(relationshippage.isNumberOfUnitSelectedEquals(3)).toEqual(true);

  });  
    
});
    

  
    
           
      

    