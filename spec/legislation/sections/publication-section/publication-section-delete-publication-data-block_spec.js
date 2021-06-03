var params = browser.params;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-2395';
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

    //03- Delete a publication data block

    it('Delete a publication data block.'+jiraNumber, function () {

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
        browser.sleep(4000);
        publicationsection.clickOnElement(loaded.expandpublicationsection);

        //remove the  second publication block 
        publicationsection.clickOnElement(loaded.removepublication_xpath);

        //trying to check whether we can delete the publication when there is only one
        //so check whether the x icon is present
        var isxbuttonpresent = globalpo.isElementPresent(loaded.removemainpublicaton_xpath);
        expect(isxbuttonpresent).toEqual(false);

        browser.sleep(2000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
        browser.sleep(1000);
        globalpo.clickOnButtonForGlobal(loaded.yesbutton);


    });

});


