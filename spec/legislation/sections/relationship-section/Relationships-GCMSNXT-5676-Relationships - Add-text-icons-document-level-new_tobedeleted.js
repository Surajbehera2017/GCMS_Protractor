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
        legisDocDisplayPage.get(loadedata.GCMS_NXT.marginal_id);
        relationshippage.urlLoad();
        
	});
    
    

	/*
     *  GCMSNXT-5676 Relationships - Add from text icons-from document level
     */

    it('GCMSNXT-5676 Relationships - Add from text icons-from document level', function () {
     
        relationshippage.clickDocumentTextLink();
        browser.waitForAngular();
        browser.switchTo().frame('capaTextoPreview'); // give id of iframe1
        browser.ignoreSynchronization = true;
        
        
        browser.waitForAngular();
        var docText = relationshippage.isDocumentTextDropdownPresent();
        expect(docText).toEqual(true);
        relationshippage.clickDocumentTextDropdown();
        relationshippage.clickAddRelationshipinDocumentTextDropdown();
        browser.waitForAngular();
        
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
        
        var popup = relationshippage.isEditRelationshippopupDislayed();
        expect(popup).toEqual(true);
        var type = relationshippage.isTypeFieldPresentRelationshipPopupDocumentType();
        expect(type).toEqual(true);
        relationshippage.clickTypeFieldRelationshipPopup();
        browser.sleep(4000);
        relationshippage.sendKeystoTypeinRelationshipTab(loadedata.GCMS_NXT.text_type);
        browser.waitForAngular();
        relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
        browser.waitForAngular();
        
        relationshippage.clickCloseButtonEditRelationshipPopup();
        browser.waitForAngular(); 
     
     
    
    }); 
    
  });