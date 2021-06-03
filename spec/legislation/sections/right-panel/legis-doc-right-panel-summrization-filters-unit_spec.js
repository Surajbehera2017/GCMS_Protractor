var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2400';
var testData = require('../../../../test-data/Jira_TestData/right-panel/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];


describe('Right-panel', function () {

  beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);

    });

    afterEach(function () {//Close additional tab
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]);
            for (var i = 1; i < handles.length; i++) {
                browser.switchTo().window(handles[i]).then(function () {
                    browser.close();
                }, function (error) {
                   browser.switchTo().window(handles[0]);
                });
            }
            browser.switchTo().window(handles[0]);
        });
    });

	
  it('summrization filter unit.'+jiraNum, function () {

          rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
          browser.waitForAngular();
          rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.relaicon);

          browser.sleep(4000);

          //check for option in relatiosnhip all
          rightpanelpage.clickoptionrelationshipgreenicon(loaded.relation);
          browser.sleep(2000);
          globalpo.clickOnbuttonInsideSectionTable(loaded.showfilters);
          browser.sleep(1000);
          var consolidropdoenpresent= globalpo.isElementPresent(loaded.consolidropdown);
          expect(consolidropdoenpresent).toEqual(true);
          browser.sleep(3000);
          globalpo.clickOnNavigationOrCloseButton(loaded.closetable);
          browser.sleep(1000);

          //check for effectiveness
          rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.relaicon);
          browser.sleep(1000);
          rightpanelpage.clickoptionrelationshipgreenicon(loaded.effecoption);
          browser.sleep(2000);
          globalpo.clickOnbuttonInsideSectionTable(loaded.showfilters);
          browser.sleep(1000);
          var consolidropdoenpresent= globalpo.isElementPresent(loaded.consolidropdown);
          expect(consolidropdoenpresent).toEqual(true);
          browser.sleep(1000);
          globalpo.clickOnNavigationOrCloseButton(loaded.closetable);
          browser.sleep(1000);

           //check for target
           rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.relaicon);
           browser.sleep(1000);
           rightpanelpage.clickoptionrelationshipgreenicon(loaded.targetoption);
           browser.sleep(2000);
           globalpo.clickOnbuttonInsideSectionTable(loaded.showfilters);
           browser.sleep(1000);
           var consolidropdoenpresent= globalpo.isElementPresent(loaded.consolidropdown);
           expect(consolidropdoenpresent).toEqual(true);
           globalpo.clickOnNavigationOrCloseButton(loaded.closetable);
           browser.sleep(1000);

           //check for annotations
           rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.relaicon);
           browser.sleep(1000);
           rightpanelpage.clickoptionrelationshipgreenicon(loaded.annotationopt);
           browser.sleep(2000);
           globalpo.clickOnbuttonInsideSectionTable(loaded.showfilters);
           browser.sleep(1000);
           var consolidropdoenpresent= globalpo.isElementPresent(loaded.consolidropdown);
           expect(consolidropdoenpresent).toEqual(true);
           globalpo.clickOnNavigationOrCloseButton(loaded.closetable);
           browser.sleep(1000);

           //check for source
           rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.relaicon);
           browser.sleep(1000);
           rightpanelpage.clickoptionrelationshipgreenicon(loaded.soruceoption);
           browser.sleep(2000);
           globalpo.clickOnbuttonInsideSectionTable(loaded.showfilters);
           browser.sleep(1000);
           var consolidropdoenpresent= globalpo.isElementPresent(loaded.consolidropdown);
           expect(consolidropdoenpresent).toEqual(true);
           globalpo.clickOnNavigationOrCloseButton(loaded.closetable);
           browser.sleep(1000);



     
    // // Verify Relationship All
    //  browser.waitForAngular();
    //  rightpanelpage.clickDocumentStructure();
    //  rightpanelpage.clickRelationshipButtonGreen();
    // var relation = rightpanelpage.isRelationshipAllPresent();
    //   if(relation = true)
    //       {
    //           expect(relation).toEqual(true);
    //       }
    //  rightpanelpage.clickRelationshipAll();
    //  browser.waitForAngular();
    //  rightpanelpage.clickShowFilters();
    //  var YesNo = rightpanelpage.isYesNoDropdownPresent();
    //   if(YesNo=true)
    //       {
    //           expect(YesNo).toEqual(true);
    //       }
      
    //   var select = element(by.id('spread'));
    //     select.$('[value="S"]').click();
      
    //   browser.waitForAngular();
      
    //   var select = element(by.id('spread'));
    //     select.$('[value="N"]').click();
       
    //  browser.waitForAngular();
    //  rightpanelpage.closeViewAll();
    //  rightpanelpage.clickRelationshipButtonGreen();
    //  rightpanelpage.clickRelationEffevtive();
    //  browser.waitForAngular(); 
    //  rightpanelpage.clickShowFilters();
    //  var YesNo = rightpanelpage.isYesNoDropdownPresent();
    //   if(YesNo=true)
    //       {
    //           expect(YesNo).toEqual(true);
    //       }
      
    //   var select = element(by.id('spread'));
    //     select.$('[value="S"]').click();
      
    //   browser.waitForAngular();
      
    //   var select = element(by.id('spread'));
    //     select.$('[value="N"]').click();
      
    //   rightpanelpage.isSourceDocumentTextPresent();
    //   rightpanelpage.isTargetDocumentTextPresent();
    //   rightpanelpage.closeViewAll();
    //   rightpanelpage.clickRelationshipButtonGreen();
    //   rightpanelpage.clickAnnotationsRelationship();
    //   browser.waitForAngular(); 
    //   rightpanelpage.clickShowFilters();
    //   var YesNo = rightpanelpage.isYesNoDropdownPresent();
    //   if(YesNo=true)
    //       {
    //           expect(YesNo).toEqual(true);
    //       }
      
    //   var select = element(by.id('spread'));
    //     select.$('[value="S"]').click();
      
    //   browser.waitForAngular();
      
    //   var select = element(by.id('spread'));
    //     select.$('[value="N"]').click();
      
    //   rightpanelpage.isSourceDocumentTextPresent();
    //   rightpanelpage.isTargetDocumentTextPresent();
      
    });
});
    
    
    
    
    

    
