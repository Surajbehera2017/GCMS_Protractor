var params = browser.params;
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum = 'GCMSQABANG-2233';
var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');

var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNum + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship', function () {

	beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    
        legisDocDisplayPage.get(loaded.marginal_id);
        collectiveAgreementSection.urlLoad(params.valid_username, params.valid_password);
    
      });
  
	/*
     *  01- Add the potential relationship from the lamp
     */
    it('Add the potential relationship from the lamp GCMSQABANG-2233', function () {
     
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