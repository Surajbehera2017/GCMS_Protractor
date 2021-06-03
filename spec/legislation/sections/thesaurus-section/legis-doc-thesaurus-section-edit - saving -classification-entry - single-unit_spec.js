var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber1 = 'GCMSQABANG-2502';
var testData1 = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber1 + '.js');
var loadedData1 = testData1[params.env][params.BU]

var jiraNumber2 = 'GCMSQABANG-2415';
var testData2 = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber2 + '.js');
var loadedData2 = testData2[params.env][params.BU]

var jiraNumber3 = 'GCMSQABANG-2504';
var testData3 = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber3 + '.js');
var loadedData3 = testData3[params.env][params.BU]

var jiraNumber5 = 'GCMSQABANG-2505';
var testData5 = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber5 + '.js');
var loadedData5 = testData5[params.env][params.BU]

var jiraNumber4 = 'GCMSQABANG-2506';
var testData4 = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber4 + '.js');
var loadedData4 = testData4[params.env][params.BU]

describe('Thesaurus', function () {//('Thesaurus-section-Pencil Edit', function () {

    beforeEach(function () {

        // browser.ignoreSynchronization = false;
        // var legisDocEditionPage = new LegislationDocumentEditionPage();
        // legisDocEditionPage.get(loadedData1.marginal_id);
        // thesauruspage.urlLoad(params.valid_username, params.valid_password);
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


    // //01 - Edit - Saving Classification entry  - single unit
    it('Edit-Saving Classification entry-single unit', function () {



         browser.ignoreSynchronization = false;
        var legisDocEditionPage = new LegislationDocumentEditionPage();
        legisDocEditionPage.get(loadedData1.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);
        browser.sleep(2000);
        global.clickOnSectionButton('Thesaurus', 'viewall');
        expect(global.isTablePresent()).toEqual(true);

        global.clickOnFilterAndEnterValue('Unit', loadedData1.unit);
        browser.sleep(2000);

        //click on delete edit in actions
        thesauruspage.thesaurusAction('edit');
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (windows) {
            browser.switchTo().window(windows[1]).then(function () {
                //browser.ignoreSynchronization = true;
                browser.sleep(3000);
                thesauruspage.clickAndSearchAUnit(loadedData1.unit);
                thesauruspage.clickOnElementClass('margin-left-30 ng-scope ng-binding');
                global.clickOnNavigationOrCloseButton('TsEditModalCtrl.editClassificationEntry');
                global.clickOnNavigationOrCloseButton('ok');
                browser.sleep(3000);
           });

            browser.switchTo().window(windows[0]);
            thesauruspage.clickOnbuttonInsideSectionTable('Show Filters');
            thesauruspage.enterUnitId('');

            expect(global.isElementDisplayed(loadedData1.expected)).toEqual(true);
            browser.sleep(3000);

        });
    });

    // //02 - Edit - Saving Classification entry associated to more than one unit
    // //GCMSQABANG-2502
   it('Edit-Saving Classification entry associated to more than one unit.'+jiraNumber1, function () {


     browser.ignoreSynchronization = false;
        var legisDocEditionPage = new LegislationDocumentEditionPage();
        legisDocEditionPage.get(loadedData1.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);
        browser.sleep(2000);
        global.clickOnSectionButton('Thesaurus', 'viewall');
        expect(global.isTablePresent()).toEqual(true);

        global.clickOnFilterAndEnterValue('Unit', loadedData1.unit);
        browser.sleep(2000);

        //click on delete edit in actions
        thesauruspage.thesaurusAction('edit');
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (windows) {
            browser.switchTo().window(windows[1]).then(function () {
                //browser.ignoreSynchronization = true;
                browser.sleep(3000);
                thesauruspage.clickAndSearchAUnit(loadedData1.unit);
                thesauruspage.clickOnElementClass('margin-left-30 ng-scope ng-binding');
                global.clickOnNavigationOrCloseButton('TsEditModalCtrl.editClassificationEntry');
                global.clickOnNavigationOrCloseButton('ok');
                browser.sleep(3000);
            });

            browser.switchTo().window(windows[0]);
            thesauruspage.clickOnbuttonInsideSectionTable('Show Filters');
            thesauruspage.enterUnitId('');

            expect(global.isElementDisplayed(loadedData1.expected)).toEqual(true);
            browser.sleep(3000);

        });

    });

    
    // //05 - Edit - Saving Classification entry for one unit several terms
    // //GCMSQABANG-2504  
    it('Saving Classification entry for one unit several terms.'+jiraNumber3, function () {
        browser.ignoreSynchronization = false;
         var legisDocEditionPage = new LegislationDocumentEditionPage();
         legisDocEditionPage.get(loadedData3.marginal_id);
         thesauruspage.urlLoad(params.valid_username, params.valid_password);

        browser.sleep(2000);
        global.expandSectionInLeftPanel('Thesaurus');
        thesauruspage.clickOnGiveThesaurusType('INDICE COMUN');
        expect(global.isTablePresent()).toEqual(true);

        global.clickOnFilterAndEnterValue('Unit', loadedData3.unit_1);
        browser.sleep(2000);

        //click on edit in actions
        thesauruspage.thesaurusAction('edit');
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (windows) {
            browser.switchTo().window(windows[1]).then(function () {
                //browser.ignoreSynchronization = true;
                browser.sleep(3000);
                thesauruspage.clickAndSearchAUnit(loadedData3.unit_1);

                thesauruspage.selectThesaurusHierarchy('Índice Común Aranzadi');
                thesauruspage.getIndexAndClickOnThesaurusTerm('Agricultura y pesca');
                browser.sleep(2000);
                global.clickOnNavigationOrCloseButton('TsEditModalCtrl.editClassificationEntry');
                expect(global.isElementDisplayed(loadedData3.expected)).toEqual(true);
                browser.sleep(2000);
                global.clickOnNavigationOrCloseButton('ok');
                browser.sleep(1000);
            });

            //browser.close();
            browser.switchTo().window(windows[0]);
            //expect(global.isElementDisplayed(loadedData3.expected2)).toEqual(true);
            thesauruspage.getDateAndVerify("//tr[@class='bckgGrey trow tableGroup-3']/td[8]/span");

        });

    });

    
    //06 - Edit - Saving Classification entries - Complementary Info

    var jiraNumber5 = "GCMSQABANG-2505";
    it('Edit -Saving Classification entries - Complementary Info.'+jiraNumber5, function () {

        try {
            browser.ignoreSynchronization = false;
            var legisDocEditionPage = new LegislationDocumentEditionPage();
            legisDocEditionPage.get(loadedData5.marginal_id);
            thesauruspage.urlLoad(params.valid_username, params.valid_password);


          //  browser.sleep(2000);
            global.clickOnSectionButton('Thesaurus', 'viewall');

            expect(global.isTablePresent()).toEqual(true);
           // global.clickOnFilterAndEnterValue('complementaryInfo', 'Hipotecas');
            global.clickOnFilterAndEnterValue(loadedData5.info, loadedData5.filter);
            browser.sleep(2000);

            //click on edit in actions
            thesauruspage.thesaurusAction('edit');
            browser.sleep(3000);
            browser.getAllWindowHandles().then(function (windows) {
                browser.switchTo().window(windows[1]).then(function () {
                    //browser.ignoreSynchronization = true;
                    browser.sleep(3000);
                 
                    thesauruspage.clickOnLinkForGlobal("Edit");
                    browser.getAllWindowHandles().then(function (window2) {
                        browser.switchTo().window(window2[2]).then(function () {
                            browser.sleep(4000);
                            browser.switchTo().frame('ext-gen1133');
                            browser.ignoreSynchronization = true;
                            thesauruspage.selectAllAndDelete();
                            thesauruspage.enterTextSpecificDatatype("parrafo", "Hipotecas");
                            browser.switchTo().defaultContent();
                            thesauruspage.clickOnActionsInGeneralTab("Save");

                        });
                        browser.switchTo().window(window2[1]);
                        browser.waitForAngular();
                    });

                    browser.sleep(2000);
                    global.clickOnNavigationOrCloseButton('TsEditModalCtrl.editClassificationEntry');
                    expect(global.isElementDisplayed(loadedData4.expected)).toEqual(true);
                    browser.sleep(2000);
                    global.clickOnNavigationOrCloseButton('ok');
                    browser.sleep(1000);
                });

                //browser.close();
                browser.switchTo().window(windows[0]);
                thesauruspage.getDateAndVerify("//tr[@class='bckgGrey trow tableGroup-3']/td[8]/span");

            });

        }
        catch (exception) {
            var msg = exception.message;
            console.error(msg);
        }
    });


});

