var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber ='GCMSQABANG-1884';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];


describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});

    

  	/*
     * Duplicated relationship - Error
     */

    it('Duplicated relationship - Error.' +jiraNumber, function () {
     // click on view all link of relationship page
      globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.viewAllLink);
     
            //copy any relationship
          relationshippage.clickactionOnRelationshipTable(loadedData.Copy);
                browser.waitForAngular();
               
      //Click Add without making any change
      relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);


      // get error info popup anf verify error message
      relationshippage.clickERRORInfoLink();

      expect(relationshippage.verifyErrorInfoDialog()).toBe(loadedData.err_msg);
      
        
     }); 
    
  });