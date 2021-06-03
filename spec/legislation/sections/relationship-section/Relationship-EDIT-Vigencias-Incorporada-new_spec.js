var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var loadedata = testData.legislation.sections.relationShip;


describe('Relationship', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedata.edit_relation.marginal_id_analyst);
        relationshippage.urlLoad();
        
	});
    
   
  	/*
     *  EDIT - Vigencias  - Incorporada
     */

    it(' EDIT - Vigencias  - Incorporada GCMSQABANG-2114', function () {
     
      browser.waitForAngular();
      var relation = relationshippage.isRalationshipViewAllPresent();
      expect(relation).toEqual(true);
      relationshippage.clickRelationshipCollapseButtonDisplayed();
      browser.waitForAngular();
      relationshippage.clickConsolidationLinkRelationship();
      browser.waitForAngular();
      
      relationshippage.clearFiltersInRelationshipTable();
      relationshippage.clickBlankFieldinViewAllTableCell();
      relationshippage.clickonFirstCheckboxViewAll();
      relationshippage.clickDropdownViewAllTableFirst();
      var edit = relationshippage.isEditOptionPresentDropdownViewAllFirst();
      expect(edit).toEqual(true);
      relationshippage.clickEditOptionPresentDropdownViewAllFirst();
      browser.waitForAngular();
       
      var analyst = relationshippage.isAnalystFieldPresentinCopyDropdownUserAnalystEdit();
      expect(analyst).toEqual(true);
        
      var analystdisable = relationshippage.isAnalystFieldDisabledinCopyDropdownUserAnalystEdit();
      relationshippage.clickCancelButtoninEditRelationshipPopup();
      browser.waitForAngular();
      relationshippage.clickCloseButtonEditRelationshipPopup();
      browser.waitForAngular();   
      relationshippage.clickGlassIconInViewAllRelationship();
        
      var date = relationshippage.getAnalystDateinGlassIconEdit();
      expect(date).toEqual(loadedata.edit_relation.date_glass_icon)
        
     }); 
    
  });