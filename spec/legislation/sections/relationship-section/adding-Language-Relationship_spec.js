var params = browser.params;
var jiraNumber = 'GCMSQABANG-1875';

var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        legisDocDisplayPage.get(loadedData.marginal_id);
        relationshippage.urlLoad(params.valid_username, params.valid_password);
        browser.driver.manage().window().maximize();

    });


	/*
     * Adding Language to the Relationship
     */

    it('Adding Language to the Relationship.' + jiraNumber, function () {


        //click on view all link and then add button in relationship table
        globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);
        // globalpage.clickOnbuttonInsideSectionTable(loadedData.AddButton);

        browser.waitForAngular();
        relationshippage.clickactionOnRelationshipTable(' Edit');

        // click on language icon(pencil shape)
        browser.waitForAngular();
        relationshippage.clickOnIcon(loadedData.RelationshipPanel, loadedData.LanguageIcon);

        // verify if language modal opened or not
        expect(relationshippage.isModalPresent(loadedData.LanguageModal)).toEqual(true);

        // add language 
        relationshippage.addLanguage(loadedData.Language);

        //close Popup
        relationshippage.closeMultiLanguagePopupAddRelationship();

        //click on add button
        browser.sleep(2000);
        relationshippage.clickOnRelPopUpButtons('Save');
        // //close add relationship window
        relationshippage.closeAddorEditRelationshipPopup();


        //         browser.waitForAngular();
        //       var relation = relationshippage.isRalationshipViewAllPresent();
        //       expect(relation).toEqual(true);
        //       relationshippage.expandRelationshipTable();
        //       relationshippage.clearFiltersInRelationshipTable();
        //       browser.waitForAngular();
        //       relationshippage.clickBlankFieldinViewAllTableCell();
        //       relationshippage.clickonFirstCheckboxViewAll();
        //       relationshippage.clickDropdownViewAllTableFirst();
        //       var edit = relationshippage.isEditOptionPresentDropdownViewAllFirst();
        //       expect(edit).toEqual(true);
        //       relationshippage.clickEditOptionPresentDropdownViewAllFirst();
        //       browser.waitForAngular();

        //       var select = element(by.css('[ng-model="RelationshipsAddModalCtrl.currentLang"]'));
        //       select.$('[value="1"]').click();
        //       browser.waitForAngular();
        //       relationshippage.clickSaveButtonEditRelationshipPopUp();
        //       browser.waitForAngular();
        //       relationshippage.clickCloseButtonEditRelationshipPopup();


    });

});