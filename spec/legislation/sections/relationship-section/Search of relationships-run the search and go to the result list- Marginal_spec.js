
var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var relationshipsearch = require('../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var jiraNumber = 'GCMSQABANG-3821';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];


describe('Relationship', function () {

      beforeEach(function () {

            browser.ignoreSynchronization = false;
            legisDocDisplayPage.get(loadedData.marginal_id);
            relationshippage.urlLoad(params.valid_username, params.valid_password);

      });

	
//TC01 - Search of relationships - run the search and go to the result list - Marginal


it('Search of relationships - run the search and go to the result list - Marginal.'+ jiraNumber , function () {
     
       browser.waitForAngular();
       globalfunction.clickOnSectionButton(loadedData.secname,loadedData.addbtn);
       browser.sleep(2000);
       relationshippage.clickandSelect(loadedData.fieldtype,loadedData.mod_type);
       browser.sleep(2000);

       //entering data in mandatory fields in target panel
       relationshippage.sendValueTo(loadedData.paneltype,loadedData.Codefield,loadedData.Code);
       relationshippage.sendValueTo(loadedData.paneltype,loadedData.Yearfield,loadedData.Year);
       relationshippage.sendValueTo(loadedData.paneltype,loadedData.no_field,loadedData.number);

       //clicking document structure and selecting the unit
       relationshippage.selectUnitFromStructureButton(loadedData.paneltype,loadedData.unitselected);
   
       //clicking the document structure pop up
       globalfunction.clickOnButtonForGlobal(loadedData.okbtn);

       relationshippage.clickOnRelPopUpButtons(loadedData.addbtn);

      expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);
      browser.waitForAngular();

      relationshippage.closeAddorEditRelationshipPopup();

      browser.actions().mouseMove(element(by.css('.block.font-19.ng-binding'))).perform();
      relationshippage.clickOnBackButton();

      browser.ignoreSynchronization = true;
      browser.sleep(2000);

      relationshippage.clickOnLinkInAvailableOptions(loadedData.legislation);
      browser.sleep(1000);
      relationshippage.clickOnLinkInAvailableOptions(loadedData.consolidation);
      browser.sleep(1000);
      relationshippage.clickOnLinkInAvailableOptions(loadedData.consolidation_option);
      browser.sleep(2000);

      var page = relationshipsearch.isRelationshipSearchPagePresent();
      expect(page).toEqual(true);

      browser.sleep(1000);
      relationshipsearch.clickOnTheButton(loadedData.clearform);
      browser.sleep(2000);

      relationshipsearch.clickOnDropdown(loadedData.amend_sec,loadedData.marginalfield);
      browser.sleep(1000);
      relationshipsearch.enterDataAndSelectValue(loadedData.amend_sec,loadedData.marginalfield,loadedData.Code);
      browser.sleep(1000);
      relationshipsearch.fillTheYearAndNumFields('from',loadedData.field_year,loadedData.field_num,loadedData.Year,loadedData.number);
      browser.sleep(1000);
      relationshipsearch.clickOnTheButton(loadedData.search_button);
      browser.sleep(1000);

      var table = relationshipsearch.isResultListTablePresent();
      expect(table).toEqual(true);
      browser.sleep(2000);
      relationshipsearch.clickOnRowCheckBox(loadedData.unitselected);
      browser.sleep(1000);
      relationshipsearch.clickButtonsInsideTable(loadedData.delbtn);
      browser.sleep(1000);
      globalfunction.clickOnButtonForGlobal(loadedData.confirm);
      browser.sleep(2000);
      relationshipsearch.clickOnButtonInBreadcrumb(loadedData.back_button);
      browser.sleep(2000);
      relationshipsearch.clickOnTheButton(loadedData.search_button);
      browser.sleep(2000);
      var isrowpresent=relationshipsearch.clickOnRowCheckBox(loadedData.unit_name);
      expect(isrowpresent).toEqual(false);



















       











//       browser.waitForAngular();
//       browser.driver.manage().window().maximize();
      
//       relationshippage.clickAddButtonNextToRelationship();
      
//      relationshippage.selectTypeDropdown();
//      relationshippage.enterRelationType(testData.legislation.sections.relationShip.Searchofrelationships_Marginal.type,testData.legislation.sections.relationShip.Searchofrelationships_Marginal.i); 
    
//      relationshippage.selectCodeDropdownOfDestination();      
//      relationshippage.entercodeDynamically(testData.legislation.sections.relationShip.Searchofrelationships_Marginal.code,testData.legislation.sections.relationShip.Searchofrelationships_Marginal.j);

//      relationshippage.enterYear(testData.legislation.sections.relationShip.Searchofrelationships_Marginal.year);
    
//      relationshippage.enterN(testData.legislation.sections.relationShip.Searchofrelationships_Marginal.N);
     
//      relationshippage.docstructureButtonClick();
   
//      relationshippage.selectTheCheckboxForUnit();
//      relationshippage.ClickOnOkAfterSelectingCheckbox(); 
    
//      relationshippage.clickAddonpopup();
//      expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);
//      browser.waitForAngular();

//      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
     
    
//            browser.actions().mouseMove(element(by.css('.block.font-19.ng-binding'))).perform();
//            relationshippage.clickOnBackButton();
          
//            browser.ignoreSynchronization = true;
//            browser.sleep(2000);      
//            relationshippage.selectLegislation();
          
//            relationshippage.selectConsolidationAndSelectOption();
           
//            browser.sleep(2000); 
//            relationshippage.selectCodeInConsolidation(testData.legislation.sections.relationShip.Searchofrelationships_Marginal.code);
           
           
//           relationshippage.enterYearInConsolidation(testData.legislation.sections.relationShip.Searchofrelationships_Marginal.year);
           
           
//            relationshippage.enterNInConsolidation(testData.legislation.sections.relationShip.Searchofrelationships_Marginal.N);
//            browser.sleep(2000); 
//            relationshippage.clickOnSearchInConsolidation();
//            browser.sleep(2000); 
//            relationshippage.selectCheckboxAndDelete();
//            browser.sleep(2000); 
//            relationshippage.clickOkpopup();
           
//            browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
         
     
    
      
    

});


    
    
});