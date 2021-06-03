var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-2596';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

describe('Thesaurus',function(){//('Thesaurus-section-Pencil Delete', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocEditionPage = new LegislationDocumentEditionPage();
        legisDocEditionPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);  
                          
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
	//GCMSQABANG-2596: 01 - Delete a row associated to a document from View All table -there are more than two thesaurus types
  it('Delete a row associated to a document from View All table.'+jiraNumber, function () {
       
    
    globalpo.clickOnSectionButton('Thesaurus', 'Add');
    browser.getAllWindowHandles().then(function (handles) {
        var newTabHandle = handles[1];
        browser.switchTo().window(newTabHandle).then(function () {
            thesauruspage.clickOnPlusButton();
            browser.sleep(2000);
            thesauruspage.enterUnitIDInPopup(loaded.unitid);
            globalpo.clickOnButtonForGlobal('Save');
            browser.sleep(1000);
            thesauruspage.selectThesarusTypeFromDropdown(loaded.thesaurustype);
            thesauruspage.selectThesaurusHierarchy(loaded.thesaurushierarchy);
            thesauruspage.getIndexAndClickOnThesaurusTerm(loaded.thesaurusterm);
             thesauruspage.clickOnLinkForGlobal(loaded.complementarylink);
             browser.sleep(4000);
            browser.getAllWindowHandles().then(function (handles) {
                var secondTabHandle = handles[2];

                browser.switchTo().window(secondTabHandle).then(function () {
                    browser.ignoreSynchronization = true;
                    browser.sleep(2000);
                    
                    browser.sleep(5000);
                    browser.switchTo().frame('ext-gen1133'); // give id of iframe
                    browser.ignoreSynchronization = true;
                    thesauruspage.enterTextSpecificDatatype('parrafo', 'This is testing to check the complemenatryinfo functionality');
                    browser.switchTo().defaultContent();
                    //browser.ignoreSynchronization = false;
                    thesauruspage.clickOnActionsInGeneralTab('Save');
                    browser.sleep(3000);
                });
            });

            browser.switchTo().window(handles[1]);
            browser.ignoreSynchronization = false;
            browser.sleep(2000);
            authorNotes.clickOnButtonForGlobal('Add');
            browser.sleep(1000);
            globalpo.clickOnNavigationOrCloseButton('ok');
            browser.close();
            browser.sleep(1000);
        });


   //to delete the added thesaurus
    browser.switchTo().window(handles[0]);
    browser.ignoreSynchronization = false;
    browser.waitForAngular();
    globalpo.clickOnSectionButton('Thesaurus', 'view');
    globalpo.clickOnFilterAndEnterValue('marginalUnitName',loaded.unitid);
    globalpo.clickOnFilterAndEnterValue('thesaurusName',loaded.thesaurusterm);
    browser.sleep(1000);
    thesauruspage.selectNoOfRows('All');
    browser.sleep(1000);
    thesauruspage.thesaurusAction('delete');
    browser.sleep(1000);
    globalpo.clickOnNavigationOrCloseButton('Yes');
    browser.sleep(1000);
    globalpo.clickOnNavigationOrCloseButton('Close');
});
    
        
        });
    
});
    
