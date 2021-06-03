
    
 var params = browser.params;
 var jiraNumber ='GCMSQABANG-2111';
 
 var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');
 var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
 var loadedData=testData[params.env][params.BU];
 var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
 var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
 var legisDocDisplayPage = new LegislationDocumentDisplayPage();
 var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 
 describe('Relationship', function () {
 beforeAll(function () {
 
   browser.ignoreSynchronization = false;
   legisDocDisplayPage.get(loadedData.marginal_id);
   relationshippage.urlLoad(params.valid_username,params.valid_password);
 
 });
 
	  /*
     *  04 - COPY - Vigencias

     */

    it(' COPY - Vigencias.'+jiraNumber, function () {
     
      browser.waitForAngular();
      globalpage.expandSectionInLeftPanel(loadedData.sectionName);
      browser.sleep(3000);

     relationshippage.clickonLinkInsideRelationship(loadedData.linkName);
     browser.sleep(3000);
     relationshippage.clickactionOnRelationshipTable(loadedData.action);
     browser.sleep(3000);
     browser.waitForAngular();
     
     var useranalyst=relationshippage.isAnalystNamePresentFor('native',loadedData.analyst_name);
     expect(useranalyst).toEqual(false);
     if(useranalyst==true){
       console.log("analyst is present");
     }
     else{
       console.log("analyst is not present");
     }
     
    //  globalpage.clickOnNavigationOrCloseButton(loadedData.buttonOption);
    //  browser.sleep(3000);

    // textversionpage.closeAddRelationShipPopup();
    // browser.sleep(3000);

     //close add relationship popup
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(3000);


    relationshippage.clickOnLensIcon();
    browser.sleep(3000);



     var elementpresent1=globalpage.isElementDisplayed(loadedData.analystname1);
            expect(elementpresent1).toEqual(false);
          
            if(elementpresent1==true){
              console.log("analystname feild is present");
            }
            else{
              console.log("analystname feild is not present");
            }


            browser.sleep(3000);
            var elementpresent2=globalpage.isElementDisplayed(loadedData.analystdate);
            expect(elementpresent2).toEqual(false);
          
            if(elementpresent2==true){
              console.log("analystdate feild is present");
            }
            else{
              console.log("analystdate feild is not present");
            }


            globalpage.clickOnNavigationOrCloseButton(loadedData.buttonOption);
            browser.sleep(3000);
    //         var elementpresent1=globalpo.isElementDisplayed(loadedData.analystdate);
    //         expect(elementpresent1).toEqual(true);
    //   browser.sleep(3000);


    //   browser.waitForAngular();
    //   var relation = relationshippage.isRalationshipViewAllPresent();
    //   expect(relation).toEqual(true);
    //   relationshippage.clickRelationshipCollapseButtonDisplayed();
    //   browser.waitForAngular();
    //   relationshippage.clickConsolidationLinkRelationship();
    //   browser.waitForAngular();
      
    //   relationshippage.clearFiltersInRelationshipTable();
    //   relationshippage.clickBlankFieldinViewAllTableCell();
    //   relationshippage.clickonFirstCheckboxViewAll();
    //   relationshippage.clickDropdownViewAllTableFirst();
    //   var copy = relationshippage.isCopyOptionPresentDropdownViewAllFirst();
    //   expect(copy).toEqual(true);
    //   relationshippage.clickCopyOptionPresentDropdownViewAllFirst();
    //   browser.waitForAngular();
        
    //   var analyst = relationshippage.isAnalystFieldPresentinCopyDropdown();
    //   expect(analyst).toEqual(true);
        
    //   relationshippage.clickonDropdownPartTargetSection();
    //   relationshippage.sendKeysPartFieldTarget(loadedata.edit_relation.unit_part);
    //   relationshippage.clickSearchBtnPartTextField();
    //   browser.waitForAngular();
        
    //   relationshippage.clickAddButtonEditRelationshipPopUp();
    //   browser.waitForAngular();
        
    //   relationshippage.clickCloseButtonEditRelationshipPopup();
    //   browser.waitForAngular();
        
      
    //  relationshippage.clickGlassIconInViewAllRelationship();
    //  var analystDisplay = relationshippage.isNotesSectionEmptyinGlassIcon();
    //  expect(analystDisplay).toEqual(true);
        
        
    // relationshippage.clickonFirstCheckboxViewAll();
    // relationshippage.clickDeleteRelationShip();
    // var del = relationshippage.isDeletePopupDisplayed();
    // expect(del).toEqual(true);
    // relationshippage.clickOkpopup();
    // browser.waitForAngular();

         
      
      
        
     }); 
    
  });