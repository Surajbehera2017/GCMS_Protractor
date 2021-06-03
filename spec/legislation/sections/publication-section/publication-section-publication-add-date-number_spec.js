var params = browser.params;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber1 = 'GCMSQABANG-2394';
var jiraNumber2 = 'GCMSQABANG-2396';
var testData = require('../../../../test-data/Jira_TestData/Publication-section/' + jiraNumber1 + '.js');
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

    //02- Add a new date-number-series in the same publication block
    //04- Delete  a date-number-series

    it('should add a new subblock for same publication block.' + jiraNumber1 + '.' + jiraNumber2, function () {

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
        browser.sleep(4000);
        publicationsection.clickOnElement(loaded.expandpublicationsection);
        browser.sleep(3000);
        publicationsection.clickAddDateandSeries();
        browser.sleep(1000);
        publicationsection.selectDateFromDropdown('second', loaded.expected_date);
        browser.sleep(1000);
       //if(params.BU!="gulf"){
        if(params.BU!="gulf" && params.BU!="mexico"){
            publicationsection.enterPageNumber('second', loaded.page_num);
        }
        browser.sleep(1000);
        //clicking on save button
        publicationsection.clickOnElement(
            loaded.savebutton_xpath);
        browser.sleep(1000);
        //clicking on save button in popup
        publicationsection.clickOnElement(loaded.saveinpopup_xpath);
        browser.sleep(2000);

        //delete the added date & Number,series
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
        browser.sleep(4000);
        publicationsection.clickOnElement(loaded.expandpublicationsection);
        browser.sleep(3000);
        publicationsection.clickOnElement(loaded.removedateandseries_xpath);
        browser.sleep(1000);
        //clicking on save button
        publicationsection.clickOnElement(loaded.savebutton_xpath);
        browser.sleep(1000);
        //clicking on save button in popup
        publicationsection.clickOnElement(loaded.saveinpopup_xpath);
        browser.sleep(2000);

    });

});

