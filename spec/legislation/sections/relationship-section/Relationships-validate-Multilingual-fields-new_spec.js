var params = browser.params;
var jiraNumber ='GCMSQABANG-2123';

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
    
    

	/*
     * 01 - Validate Multilingual fields

     */

    it('Validate Multilingual fields.'+jiraNumber, function () {
     
       // click on add button on relationship section 
	     globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
      // click on language icon(pencil shape)
      
       relationshippage.clickOnIcon(loadedData.RelationshipPanel,loadedData.LanguageIcon);
        
       // verify if language modal opened or not
       expect(relationshippage.isModalPresent(loadedData.LanguageModal)).toEqual(true);

       // add language 
       relationshippage.addLanguage(loadedData.Language);
      
       //close Popup
       relationshippage.closeMultiLanguagePopupAddRelationship();
        
        // verify world icon is shown after adding new language
        var worldicon = relationshippage.isMultiLanguageIconDisplayedAddRelationship();
         expect(worldicon).toEqual(true);
        
        
      }); 
    
  });