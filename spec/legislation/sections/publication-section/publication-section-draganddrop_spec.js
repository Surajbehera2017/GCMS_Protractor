var params = browser.params;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-3097';
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

    //TC02- Drag and drop
    it('should drag&drop the publication.'+jiraNumber, function () {

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
        browser.sleep(4000);
        publicationsection.clickOnElement(loaded.expandpublicationsection);
        browser.sleep(2000);
        var pubName = element(by.css('div.col-md-8.right-label-height-grey.border-sides-detail-border-top.input-publication'));
        pubName.getText().then(function (publicationName) {
            console.log(publicationName);
            // browser.actions().mouseDown(pubName).perform();
            // browser.waitForAngular();
            // browser.actions().mouseMove({ x: 0, y: 40 }).perform();
            // browser.sleep(2000);

            // browser.sleep(500);
            // browser.actions().mouseDown(element(by.id('publication.edit.section.description1'))).perform();
            // browser.sleep(1000);
            // browser.actions().mouseMove(element(by.id('publication.edit.section.description0'))).perform();
            // browser.sleep(1000);
            // browser.actions().mouseUp().perform();
            // browser.sleep(1000);

            browser.actions().mouseDown(pubName).perform();
            //browser.sleep(3000);
            browser.actions().mouseMove({ x: 0, y: 40 }).perform();
            browser.sleep(3000)
            browser.actions().mouseUp().perform();

            element(by.css('div.col-md-8.right-label-height-grey.border-sides-detail-border-top.input-publication')).click();
            pubName.getText().then(function (publicationName) {
                console.log(publicationName);
                // publicationSection.save();
                browser.sleep(2000);
                collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
                browser.sleep(1000);
                globalpo.clickOnButtonForGlobal(loaded.yesbutton);


            });
        });
    });
});
