var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//import rightpanelpage from '../../../../po/document/display/legis/sections/right-panel/right-panel.po.js' ;

describe('Right-panel', function () {

    beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        
      legisDocDisplayPage.get(testData.legislation.sections.left_panel.marginal_id);
      rightpanelpage.urlLoad(params.valid_username,params.valid_password);
        
    });

    
  it('summrization filter unit', function () {
     
    // Verify Relationship All
     browser.waitForAngular();
     rightpanelpage.clickDocumentStructure();
     browser.waitForAngular();
     rightpanelpage.ClickOnOriginalUnit('[A]');
  // rightpanelpage.expandUnit('[PE]');
   
     browser.waitForAngular();
     rightpanelpage.clickonEditVisual();
     browser.waitForAngular();
     browser.switchTo().frame('legistext'); // give id of iframe
     browser.ignoreSynchronization = true; 
     browser.sleep(5000);
     rightpanelpage.clickCapatextoAndChildTabs('capatexto');
     browser.sleep(1000);
      rightpanelpage.movemousetoInsertElements();
     browser.sleep(1000);
     rightpanelpage.insertElementOptions('repro');
      browser.sleep(1000);
      rightpanelpage.clickCapatextoAndChildTabs('repro');
      browser.sleep(1000);
      rightpanelpage.movemousetoInsertElements();
      browser.sleep(1000);
    rightpanelpage.insertElementOptions('notatexto');
     browser.sleep(1000);
     browser.switchTo().defaultContent();
     browser.ignoreSynchronization = false; 
     rightpanelpage.clickOnsaveButton();
    //  browser.sleep(1000);
    //  rightpanelpage.clickOnEditVisualLabel(15);
    //     browser.waitForAngular();
    //     browser.switchTo().frame('legistext'); // give id of iframe
    //     browser.ignoreSynchronization = true; 
    //     browser.switchTo().frame('ext-gen1132'); 
    //     browser.ignoreSynchronization = true;
    //     browser.sleep(1000);
    //     rightpanelpage.rightClickonNotaandDeleteOption();
    //     browser.ignoreSynchronization = false;
    //     browser.switchTo().defaultContent();
    //     browser.ignoreSynchronization = false;
    //     rightpanelpage.clickOnsaveButton();
      
    });
});
    
