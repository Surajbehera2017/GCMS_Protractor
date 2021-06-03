var params = browser.params;
var jiraNumber = 'GCMSQABANG-2044';
var jiraNumber1 = 'GCMSQABANG-2046';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber1 + '.js');
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





    it('Copy - Vease.' + jiraNumber, function () {

        globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

        globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
        browser.waitForAngular();
        relationshippage.filterbyRelType(loadedData.Véase);


        browser.waitForAngular();

        relationshippage.clickactionOnRelationshipTable(loadedData.Copy);
        browser.sleep(1000);
        relationshippage.sendValueTo(loadedData.Target, loadedData.noteField, loadedData.data);
        var analystdisabled = relationshippage.isEditable2ndCheckOfAnalystName();
        expect(analystdisabled).toEqual('true');


        //Click Add 
        relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);

        // verify if Relationship added to collector or not
        expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);
        browser.sleep(3000);
        relationshippage.deleteEditrelationshipInpopup('delete');
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        //close relationship table

        globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);



    });




    it(' Copy - Modifica.' + jiraNumber1, function () {


        globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

        globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
        browser.waitForAngular();
        relationshippage.filterbyRelType(loadedData.Modifica);

        browser.waitForAngular();

        relationshippage.clickactionOnRelationshipTable(loadedData.Copy);
        browser.sleep(2000);
        relationshippage.sendValueTo(loadedData.Target, loadedData.noteField, loadedData.data);
        var analystdisabled = relationshippage.isEditable2ndCheckOfAnalystName();
        expect(analystdisabled).toEqual('true');


        //Click Add 
        relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);

        // verify if Relationship added to collector or not
        expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);
        browser.sleep(3000);
        relationshippage.deleteEditrelationshipInpopup('delete');
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        //close relationship table

        globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);



    });


});