var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber ='GCMSQABANG-1881';

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
	  /*
     * Summarization-Documents with annotation and consolidation relationships
     */

    it('Summarization-Documents with annotation and consolidation relationships.'+jiraNumber, function () {
     
      browser.waitForAngular();
      var relation = relationshippage.isRalationshipViewAllPresent();
      expect(relation).toEqual(true);
      var expand = relationshippage.isRelationshipCollapseButtonDisplayed();
      expect(expand).toEqual(true);
      globalpage.expandSectionInLeftPanel(loadedData.Relationships);
     
      //browser.waitForAngular();
      browser.sleep(5000);
        var consolidate = relationshippage.isConsolidationLinkPresent();
        expect(consolidate).toEqual(true);
        
        var annotation = relationshippage.isAnnotationLinkPresent();
        expect(annotation).toEqual(true);
        
     }); 
    
    });