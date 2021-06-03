var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var relationshipsearch = require('../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var jiraNumber1 = 'GCMSQABANG-2248';
var jiraNumber2 ='GCMSQABANG-2264';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];


describe('Relationship', function () {

      beforeEach(function () {

            browser.ignoreSynchronization = false;
            legisDocDisplayPage.get(loaded.marginal_id);
            relationshippage.urlLoad(params.valid_username, params.valid_password);

      });


      //TC04 - Search of relationships - run the search and go to the result list - Marginal + Mostrar marcadas para no consolidar
      //TC02 - Create a non consolidated relationship and delete in the result table of consolidation using the delete feature for handling many relationships
      
      it('Search of relationships - Marginal + Mostrar marcadas para no consolidar.'+jiraNumber1+'.'+jiraNumber2, function () {

            browser.waitForAngular();

            // click on add button on relationship section 
            globalpage.clickOnSectionButton(loaded.Relationships, loaded.AddButton);

            //select the relationship type
            relationshippage.clickandSelect(loaded.TypeField, loaded.relation_type);

            //enter the marginal in target section
            relationshippage.sendValueTo(loaded.TargetPanel, loaded.CodeField, loaded.code);
            relationshippage.sendValueTo(loaded.TargetPanel, loaded.YearField, loaded.year);
            relationshippage.sendValueTo(loaded.TargetPanel, loaded.NumberField, loaded.number);

            //click on document structure and add the unit
            relationshippage.selectUnitFromStructureButton(loaded.TargetPanel, loaded.unit_name);

            //click on ok button in the popup
            globalpage.clickOnButtonForGlobal(loaded.ok_button);
            
            //Click Add 
            relationshippage.clickOnRelPopUpButtons(loaded.AddButton);

            expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(false);
            browser.waitForAngular();

            //close add relationship window
            relationshippage.closeAddorEditRelationshipPopup();

            browser.actions().mouseMove(element(by.css('.block.font-19.ng-binding'))).perform();
            relationshippage.clickOnBackButton();

            browser.ignoreSynchronization = true;
            browser.sleep(2000);

            relationshippage.clickOnLinkInAvailableOptions(loaded.legislation);
            browser.sleep(1000);
            relationshippage.clickOnLinkInAvailableOptions(loaded.consolidation);
            browser.sleep(1000);
            relationshippage.clickOnLinkInAvailableOptions(loaded.consolidation_option);
            browser.sleep(2000);
            var ispagepresent = relationshipsearch.isRelationshipSearchPagePresent();
            expect(ispagepresent).toEqual(true);
            browser.sleep(1000);
            relationshipsearch.clickOnTheButton(loaded.clearform_button);
            browser.sleep(1000);
            relationshipsearch.clickOnDropdown(loaded.Section_name,loaded.field_name);
            browser.sleep(1000);
            relationshipsearch.enterDataAndSelectValue(loaded.Section_name,loaded.field_name,loaded.code);
            browser.sleep(1000);
            relationshipsearch.fillTheYearAndNumFields('from',loaded.field_year,loaded.field_num,loaded.year,loaded.number);
            browser.sleep(1000);
            relationshipsearch.clickOnTheButton(loaded.search_button);
            browser.sleep(1000);
            var table_header=relationshipsearch.isTableHeaderPresent();
            expect(table_header).toEqual(true);
            browser.sleep(2000);
            var resultedtable=relationshipsearch.isResultListTablePresent();
            expect(resultedtable).toEqual(true);
            browser.sleep(1000);
            relationshipsearch.clickOnRowCheckBox(loaded.unit_name);
            browser.sleep(1000);
            relationshipsearch.clickButtonsInsideTable(loaded.discard_button);
            browser.sleep(1000);
            relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
            browser.sleep(1000);
            relationshipsearch.clickOnTheButton(loaded.search_button);
            browser.sleep(1000);
            var isrowpresent=relationshipsearch.clickOnRowCheckBox(loaded.unit_name);
            expect(isrowpresent).toEqual(false);
            browser.sleep(1000);
            relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
            browser.sleep(1000);
            relationshipsearch.clickOnCheckbox(loaded.last_section,loaded.checkbox_1);
            browser.sleep(1000);
            relationshipsearch.clickOnCheckbox(loaded.last_section,loaded.checkbox_2);
            browser.sleep(1000);
            relationshipsearch.clickOnTheButton(loaded.search_button);
            browser.sleep(2000);
            relationshipsearch.clickOnRowCheckBox(loaded.unit_name);
            browser.sleep(1000);
            relationshipsearch.clickButtonsInsideTable(loaded.retrieve_button);
            browser.sleep(1000);
            relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
            browser.sleep(1000);
            relationshipsearch.clickOnCheckbox(loaded.last_section,loaded.checkbox_1);
            browser.sleep(1000);
            relationshipsearch.clickOnCheckbox(loaded.last_section,loaded.checkbox_2);
            browser.sleep(1000);
            relationshipsearch.clickOnTheButton(loaded.search_button);
            browser.sleep(1000);
            relationshipsearch.clickOnRowCheckBox(loaded.unit_name);
            browser.sleep(1000);
            relationshipsearch.clickButtonsInsideTable(loaded.delete_button);
            browser.sleep(1000);
            globalpage.clickOnButtonForGlobal(loaded.yes_button);
            browser.sleep(2000);
            relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
            browser.sleep(1000);
            relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
            browser.sleep(1000);
            relationshippage.clickOnLinkInAvailableOptions(loaded.legislation);
            browser.sleep(1000);




      });


});