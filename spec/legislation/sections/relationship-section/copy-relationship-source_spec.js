var params = browser.params;
var jiraNumber = 'GCMSQABANG-3492';
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
     * Copy relationship - source
     */

      it('Copy relationship - source.' + jiraNumber, function () {

            globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

            globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
            browser.waitForAngular();
            relationshippage.filterbyRelType(loadedData.Modifica);

            browser.waitForAngular();

            relationshippage.clickactionOnRelationshipTable(loadedData.Copy);
            browser.waitForAngular();
            relationshippage.sendValueTo(loadedData.Target, loadedData.UnitField, loadedData.UnitValue);
            relationshippage.sendValueTo(loadedData.Target, loadedData.PartField, loadedData.PartValue);
            // var analystdisabled= relationshippage.isEditable2ndCheckOfAnalystName();
            //expect(analystdisabled).toEqual('true');

            //Click Add 
            relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);

            // verify if Relationship added to collector or not
            expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);
            browser.sleep(3000);
            //delete the new copied
            relationshippage.deleteEditrelationshipInpopup('delete');
            browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
            //close relationship table

            globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);




      });

});