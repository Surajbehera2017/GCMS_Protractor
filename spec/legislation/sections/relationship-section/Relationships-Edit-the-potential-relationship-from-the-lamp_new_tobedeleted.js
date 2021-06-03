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
     * 03-Edit the potential relationship
     */
    it('Edit the potential relationship from the lamp', function () {
     
        relationshippage.clickDocumentTextLink();
        browser.waitForAngular();
        browser.switchTo().frame('capaTextoPreview'); // give id of iframe1
        browser.ignoreSynchronization = true;
        var docText = relationshippage.clickLampImageInDocumentText(0);
        browser.sleep(3000);//Sleep required - non angular
        browser.waitForAngular();
        browser.switchTo().defaultContent();
        browser.waitForAngular();
        
        //Verify warning image(potential relationship)& edit in collector - at first row
        expect(relationshippage.isWarningImageDisplayedInCollectorContainerRow(0)).toEqual(true);
        expect(relationshippage.isEditImageDisplayedInCollectorContainerRow(0)).toEqual(true);

        //Click edit & verify the back ground color is changed as expected
        relationshippage.clickEditImageInCollectorContainerRow(0);
        expect(relationshippage.getBGColorOfCollectorContainerRow(0)).toEqual('rgba(250, 227, 204, 1)');
        //Click Cancel (edit) & verify the back ground color is changed as expected
        relationshippage.clickCancelButtoninEditRelationshipPopup();
        expect(relationshippage.getBGColorOfCollectorContainerRow(0)).toEqual('rgba(255, 255, 255, 1)');
        
        
        //Cancel pop up verify popup is closed
        relationshippage.clickCloseButtonEditRelationshipPopup();
        
    }); 
    
  });