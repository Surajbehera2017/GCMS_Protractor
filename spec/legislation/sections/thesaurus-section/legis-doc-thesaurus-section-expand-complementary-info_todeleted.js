var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


describe('Thesaurus', function () {//('Thesaurus-section- Filter', function () {

    beforeAll(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        //testData.legislation.sections.thesaurus_section.marginal_id_third
       // legisDocDisplayPage.get('1573217');
        //thesauruspage.urlLoad(params.valid_username, params.valid_password);

    });

    afterAll(function () {
        browser.executeScript('window.sessionStorage.clear();'); //clear session
        browser.executeScript('window.localStorage.clear();');   //clear local storage
    });



    it('send exact data in filters', function () {

        browser.waitForAngular();
        browser.sleep(5000);
        thesauruspage.expandSectionInLeftPanel('Thesaurus');
        thesauruspage.clickOnGiveThesaurusType('INDICE COMUN');

        browser.sleep(8000);
        // browser.getAllWindowHandles().then(function (handles) {
        //     var newTabHandle = handles[1];
        //     browser.switchTo().window(newTabHandle).then(function () {
        //         browser.sleep(3000);
        //         //thesauruspage.clickOnLinkForGlobal('Add complementary info');
        //         thesauruspage.clickOnLinkForGlobal('Add complementary info');
        //         browser.sleep(5000);
        //         browser.getAllWindowHandles().then(function (handles) {
        //             browser.sleep(2000);
        //             var newTabHandle2 = handles[2];
        //             browser.waitForAngular();
                    
        //             browser.switchTo().window(newTabHandle2).then(function () {
        //                 browser.ignoreSynchronization = true;
                       
        //                 browser.sleep(2000);
        //                 thesauruspage.clickOnTabXeditor('Format');

        //                 thesauruspage.changeTheWordFormat('bold23');
        //                 browser.sleep(5000);
        //             });
        //              browser.switchTo().window(handles[1]);
        //              browser.waitForAngular();

        //         });

        //         //    thesauruspage.isComplementaryInfoTablePresent(); 
        //         //    thesauruspage.clickComplementaryInfoTable();
        //         //    var comp = thesauruspage.isComplemantaryInfoTextDisplayed();
        //         //     if(comp = true)
        //         //          {
        //         //              expect(comp).toEqual(true);
        //         //          }
        //         //    thesauruspage.closeViewAll();

        //     });
        //      browser.switchTo().window(handles[0]);
        //      browser.waitForAngular();
        //     //thesauruspage.closeViewAll();
        // });
    });

});