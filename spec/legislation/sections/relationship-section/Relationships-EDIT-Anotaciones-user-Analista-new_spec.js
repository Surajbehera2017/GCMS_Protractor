var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var jiraNumber ='GCMSQABANG-2116';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Relationship', function () {

	beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loaded.marginal_id);
    relationshippage.urlLoad(params.valid_username,params.valid_password);
  
  });
  
	  
     //09 - EDIT - Anotaciones  - user Analista

    it('EDIT - Anotaciones - user Analista.'+jiraNumber, function () {

        browser.sleep(1000);
        globalpage.expandSectionInLeftPanel(loaded.Relationships);
        browser.sleep(1000);
        relationshippage.clickonLinkInsideRelationship(loaded.annotation_link);
        browser.sleep(1000);
        relationshippage.clickactionOnRelationshipTable(loaded.edit_button);
        browser.sleep(1000);
        var useranalyst=relationshippage.isAnalystNamePresentFor('native',loaded.analyst_name);
        expect(useranalyst).toEqual(true);
        browser.sleep(5000);
        relationshippage.enterDataInNote('sample');
        browser.sleep(1000);
        globalpage.clickOnButtonForGlobal('Save');
        browser.sleep(5000);
        relationshippage.clickOnXbutton();
        browser.sleep(2000);
        //globalpage.clickOnButtonForGlobal('Yes');
        browser.sleep(1000);
        relationshippage.clickOnLensIcon();
        browser.sleep(1000);
        var todays_date = globalpage.getDateAndVerify(loaded.path_date);
        expect(todays_date).toEqual(false);
        browser.sleep(1000);
        globalpage.clickOnNavigationOrCloseButton('close');

  
     }); 
    
  });