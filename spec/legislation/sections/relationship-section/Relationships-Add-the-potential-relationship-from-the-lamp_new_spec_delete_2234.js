var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedata = testData.legislation.sections.relationShip;


describe('Relationship', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedata.addmultiple_paragraph.marginal_id);
        relationshippage.urlLoad();
        
	});
  
	/*
     *  01- Add the potential relationship from the lamp
     */
    it('Add the potential relationship from the lamp', function () {
     
        relationshippage.clickDocumentTextLink();
        browser.waitForAngular();
        browser.switchTo().frame('capaTextoPreview'); // give id of iframe1
        browser.ignoreSynchronization = true;
        var docText = relationshippage.clickLampImageInDocumentText(0);
        browser.sleep(3000);//Sleep required - non angular page
        browser.waitForAngular();
        browser.switchTo().defaultContent();
        browser.waitForAngular();
        //Verify relationship popup is displayed
        var popup = relationshippage.isEditRelationshippopupDislayed();
        expect(popup).toEqual(true);
        //Verify collector displayed with an item
        var collectorDisplayed = relationshippage.isItemPresentInCollectorContainer();
        expect(collectorDisplayed).toEqual(true);
        //Verify warning image,edit image & delete image in collector
        expect(relationshippage.isWarningImageDisplayedInCollectorContainer()).toEqual(true);
        expect(relationshippage.isEditImageDisplayedInCollectorContainer()).toEqual(true);
        expect(relationshippage.isDeleteImageDisplayedInCollectorContainer()).toEqual(true);
        
    }); 
    
  });