var params = browser.params;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-2393';
var testData = require('../../../../test-data/Jira_TestData/Publication-section/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Publication Section', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        publicationsection.urlLoad(params.valid_username, params.valid_password);

    });

    afterEach(function () {
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


    //01- Add a new publication data block
    it('should add a new publication under publication section.'+jiraNumber, function () {

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
        browser.sleep(4000);
        publicationsection.clickOnElement(loaded.expandpublicationsection);
        browser.sleep(3000);
        publicationsection.clickAddPublication();
        browser.sleep(1000);
        publicationsection.selectPublicationFromDropdown('second', loaded.expected_publication);
        browser.sleep(1000);
        publicationsection.selectDateFromDropdown('second', loaded.expected_date);
        browser.sleep(1000);
        if(params.BU!="gulf"){
            publicationsection.enterPageNumber('second', loaded.page_num);
        }
        browser.sleep(1000);
        //clicking on save button
        publicationsection.clickOnElement(loaded.savebutton_xpath);
        browser.sleep(1000);
        //clicking on save button in popup
        publicationsection.clickOnElement(loaded.saveinpopup_xpath);
        browser.sleep(2000);

        //below code is used to delete the added publication
        rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
        browser.sleep(4000);
        publicationsection.clickOnElement(loaded.expandpublicationsection);
        browser.sleep(3000);
        //remove the publication block that has been added 
        publicationsection.clickOnElement(loaded.removepublication_xpath);
        //clicking on save button
        publicationsection.clickOnElement(loaded.savebutton_xpath);
        browser.sleep(1000);
        //clicking on save button in popup
        publicationsection.clickOnElement(loaded.saveinpopup_xpath);
        browser.sleep(2000);



        // publicationsection.editbutton();    
        // publicationsection.expandableEdit.expand();
        // publicationsection.clickaddpublication();
        // publicationsection.clickFirstItemInPublicationList();
        // expect(publicationsection.hasPublicationItem(testData.legislation.sections.publication.name)).toEqual(true);
        // publicationsection.clickFirstItemInDateNumberList();
        // browser.sleep(5000);
        // expect(publicationsection.hasDateseriesItem(testData.legislation.sections.publication.hasdate)).toEqual(true);
        // browser.sleep(3000);
        // publicationsection.save(); 

    });


});