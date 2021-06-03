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
        legisDocDisplayPage.get(loadedata.copy_relationship.marginal_copy);
        relationshippage.urlLoad();
        
	});
    
    

	  // 10 - EDIT - Anotaciones  - user no Analista

    it('EDIT - Anotaciones  - user no Analista', function () {
     
      browser.waitForAngular();
      var relation = relationshippage.isRalationshipViewAllPresent();
      expect(relation).toEqual(true);
      relationshippage.clickRelationshipCollapseButtonDisplayed();
      browser.waitForAngular();
      relationshippage.clickAnnotationLinkRelationship();
      browser.waitForAngular();
      
      relationshippage.clearFiltersInRelationshipTable();
      relationshippage.clickBlankFieldinViewAllTableCell();
      relationshippage.clickonFirstCheckboxViewAll();
      relationshippage.clickDropdownViewAllTableFirst();
      var edit = relationshippage.isEditOptionPresentDropdownViewAllFirst();
      expect(edit).toEqual(true);
      relationshippage.clickEditOptionPresentDropdownViewAllFirst();
      browser.waitForAngular();
       
      var analyst = relationshippage.isAnalystFieldPresentinCopyDropdownUserAnalyst();
      expect(analyst).toEqual(true);
      var analystdisable = relationshippage.isAnalystFieldDisabledinCopyDropdownUserAnalystEditLoginUser();
        
      relationshippage.clickCancelButtoninEditRelationshipPopup();
      browser.waitForAngular();
      relationshippage.clickCloseButtonEditRelationshipPopup();
      browser.waitForAngular();   
      relationshippage.clickGlassIconInViewAllRelationship();
      var analystDisplay = relationshippage.isNotesSectionEmptyinGlassIcon();
      expect(analystDisplay).toEqual(true);
        
     }); 
    
  });