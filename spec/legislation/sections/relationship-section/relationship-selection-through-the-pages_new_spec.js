var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber1 = 'GCMSQABANG-2271';
var jiraNumber2 = 'GCMSQABANG-2272';
var jiraNumber3 = 'GCMSQABANG-2273';
var jiraNumber4 = 'GCMSQABANG-2274';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];


describe('Relationship', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        legisDocDisplayPage.get(loaded.marginal_id);
        relationshippage.urlLoad(params.valid_username, params.valid_password);

    });


	/*
	 * 02 - Relationship - selection through the pages
     * Note: This is having a bug(selection not retaining while moving to new page).
     *       hence temporarly disabling to remove from current run.
     */

    it('Relationship - selection through the pages1.' + jiraNumber1, function () {

        browser.sleep(1000);

        //expand the relationship section
        globalpage.expandSectionInLeftPanel(loaded.Relationships);
        browser.sleep(1000);

        // click on view all link of relationship section 
        globalpage.clickOnSectionButton(loaded.Relationships, loaded.linktolink);
        browser.sleep(1000);

        //select first 2 rows from the 1st page
        globalpage.selectNoOfRows('2');
        browser.sleep(1000);

        //click on next button to move to the next page
        relationshippage.clickonPagination(loaded.next_button);

        //select first 2 rows from the 2nd page
        globalpage.selectNoOfRows('2');
        browser.sleep(2000);

        //click on previous button to move to the previous page
        relationshippage.clickonPagination(loaded.previous_button);
        browser.sleep(3000);

        //close the table
        globalpage.clickOnNavigationOrCloseButton('close');

    });

    // 03 - Relationship - Filters

    it('Relationship - selection through the pages - Filters.' + jiraNumber2, function () {

        //expand the relationship section
        globalpage.expandSectionInLeftPanel(loaded.Relationships);
        browser.sleep(1000);

        // click on view all link of relationship section 
        globalpage.clickOnSectionButton(loaded.Relationships, loaded.linktolink);
        browser.sleep(1000);

        //select first 2 rows from the 1st page
        globalpage.selectNoOfRows('1');
        browser.sleep(1000);

        //click on next button to move to the next page
        relationshippage.clickonPagination(loaded.next_button);
        browser.sleep(1000);

        //select first 2 rows from the 2nd page
        globalpage.selectNoOfRows('1');
        browser.sleep(2000);

        //Apply any filter - to verify selection reset
        globalpage.clickOnbuttonInsideSectionTable(loaded.showFilter);
        browser.sleep(3000);
        relationshippage.filterbyConsolidation(loaded.option);
        browser.sleep(5000);

        expect(relationshippage.isCheckboxAtPositionSelected(0)).toEqual(false);
        
        //close the table
        globalpage.clickOnNavigationOrCloseButton('close');

    });

    //04 - Relationship - selection through the pages

    it('Relationship - selection through the pages - Delete.' +jiraNumber3, function () {

        browser.sleep(1000);

        //expand the relationship section
        globalpage.expandSectionInLeftPanel(loaded.Relationships);
        browser.sleep(1000);

        // click on view all link of relationship section 
        globalpage.clickOnSectionButton(loaded.Relationships, loaded.linktolink);
        browser.sleep(1000);

        //select first 2 rows from the 1st page
        globalpage.selectNoOfRows('2');
        browser.sleep(1000);

        //click on next button to move to the next page
        relationshippage.clickonPagination(loaded.next_button);

        //select first 2 rows from the 2nd page
        globalpage.selectNoOfRows('2');
        browser.sleep(2000);

        //click on delete button
        globalpage.clickOnbuttonInsideSectionTable(loaded.delete_button);
        browser.sleep(2000);

        //click on cancel button in delete popup
        globalpage.clickOnButtonForGlobal(loaded.cancel_button);
        browser.sleep(1000);

        
        //close the table
        globalpage.clickOnNavigationOrCloseButton('close');

    });


    /*
	 * 05 - Relationship- select all
     */
    it('Relationship - selection through the pages - select all.'+jiraNumber4, function () {

        browser.sleep(1000);

        //expand the relationship section
        globalpage.expandSectionInLeftPanel(loaded.Relationships);
        browser.sleep(1000);

        // click on view all link of relationship section 
        globalpage.clickOnSectionButton(loaded.Relationships, loaded.linktolink);
        browser.sleep(7000);

        //Select all check box from 1st page
        globalpage.selectNoOfRows('All');
        browser.sleep(3000);

        //close the table
        globalpage.clickOnNavigationOrCloseButton('close');

        // expect(relationshippage.isCheckboxAtPositionSelected(0)).toEqual(true);

        // //Go to 2nd page and verify check boxes are not selected in this page
        // relationshippage.clickonPagination(loaded.next_button);
        // browser.waitForAngular();
        // expect(relationshippage.isCheckboxAtPositionSelected(0)).toEqual(false);

    });

});




