var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-3196';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Thesaurus', function () {//('Thesaurus-section-Import', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);

    });

    afterEach(function () {//Close additional tab
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



    //04 - Add - Saving Classification entry error message
    //Thersaus with the following data should be available in this marginal id 
    //unitid:'A.1', selectthesaurustype: 'INDICE COMÚN',
    // hierarchy:'Índice Común Aranzadi', thesaurusterm:'Derecho Civil',
    
    it('Saving Classification entry error message.' + jiraNumber, function () {

                //Click on viewall link:
                browser.waitForAngular();
                globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
                browser.sleep(2000);

                //Click on Add button:
                thesauruspage.clickOnbuttonInsideSectionTable(loaded.clickaddbutton);
                browser.sleep(1000);

               

                browser.getAllWindowHandles().then(function (handles) {
                var newTabHandle = handles[1];
                browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(1000);

                //Enter Unit id:
                thesauruspage.clickAndSearchAUnit(loaded.unitid);
                browser.sleep(2000);

                //Select Thesaurus from the dropdown:
                thesauruspage.selectThesarusTypeFromDropdown(loaded.selectthesaurustype);
                browser.sleep(2000);

                //Select Thesaurus Hierarchy:
                thesauruspage.selectThesaurusHierarchy(loaded.hierarchy);
                browser.sleep(2000);
                
                //Select Thesaurus Term:
                thesauruspage.getIndexAndClickOnThesaurusTerm(loaded.thesaurusterm);
                browser.sleep(2000);

                //Click on Add button:
                thesauruspage.clickOnAddButtonInThesaurus();
                browser.sleep(2000);

                // globalfunction.clickOnButtonForGlobal(loaded.clickaddbutton);
                // browser.sleep(3000);

                //Validate the error message:errormessage: 'There is already an entry associated with this concept.'
                //thesauruspage.ValidateErrormessagAfterSave(loaded.errormessage);
                thesauruspage.validateDuplicationMessage(loaded.errormessage);
                
                // //Click on ok button:
                globalfunction.clickOnButtonForGlobal(loaded.clickokbutton);
                browser.sleep(2000);


            });
        });

    });

});    
