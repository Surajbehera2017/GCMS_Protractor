var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');

var loaded = testData.legislation.sections.thesaurus_section;

describe('Thesaurus',function(){//('Import from summarization button', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id_fifth);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);
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


    //02 - Import from summarization button - Target marginal with entries
    var jiraNumber='GCMSQABANG-2607';
  it('Target marginal with entries- 4120 '+jiraNumber.link(params.jiraURL+jiraNumber), function () {

        browser.waitForAngular();
        thesauruspage.clickImport();
        thesauruspage.isImportPopUpDisplayed();
        browser.sleep(1000);
        browser.waitForAngular();
        thesauruspage.clickOnCodeDropdown(loaded.clickOnCodeDropdown);
        thesauruspage.selectCodeFromDropdown(loaded.codename_1);
        browser.waitForAngular();
        thesauruspage.sendYearToImport(loaded.year_1);
        browser.sleep(1000);
        browser.waitForAngular();
        thesauruspage.sendNumberInImportTable(loaded.number_1);
        browser.sleep(1000);
        browser.waitForAngular();
        thesauruspage.clickSearchImport();
        thesauruspage.clickonCheckboxImport();
        browser.waitForAngular();
        thesauruspage.clickImportButton();
        expect(thesauruspage.isImportClassificationPopupDisplayed()).toEqual(true);
        thesauruspage.clickClosepopUp();
                
        browser.waitForAngular();
        thesauruspage.expandThesaurusModule();  
        browser.waitForAngular();      
        thesauruspage.clickOnGiveThesaurusType(loaded.type_link_1);

        browser.sleep(2000);
        browser.waitForAngular();
        thesauruspage.ClickShowFilters();
        browser.waitForAngular();
        thesauruspage.EnterValueinThesaurustermFeild(loaded.thesaurusterm_1);
        browser.waitForAngular();
        thesauruspage.clickTableCheckBoxFirst();
        browser.waitForAngular();
        browser.sleep(2000);
        thesauruspage.clickDelete();
        thesauruspage.clickOKinPopup();
        

        browser.waitForAngular();
        thesauruspage.ClickShowFilters();
        browser.waitForAngular();
        thesauruspage.EnterValueinThesaurustermFeild(loaded.thesaurusterm_2);
        browser.waitForAngular();
        thesauruspage.clickTableCheckBoxFirst();
        browser.waitForAngular();
        browser.sleep(2000);
        thesauruspage.clickDelete();
        thesauruspage.clickOKinPopup();
        
        browser.waitForAngular();
        thesauruspage.ClickShowFilters();
        browser.waitForAngular();
        thesauruspage.EnterValueinThesaurustermFeild(loaded.thesaurusterm_3);
        browser.waitForAngular();
        thesauruspage.clickTableCheckBoxFirst();
        browser.waitForAngular();
        browser.sleep(2000);
        thesauruspage.clickDelete();
        thesauruspage.clickOKinPopup();

        thesauruspage.closeViewAll();
        
       
    }); 
    
 });
    
    
    
    
    

    
