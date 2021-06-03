var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2410';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Thesaurus',function(){//('Thesaurus-section-Import', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
      
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
      legisDocDisplayPage.get(testData.legislation.sections.thesaurus_section.marginal_id_fifth);
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
   //GCMSQABANG-2410 : 07 - Import from summarization button - Target marginal without entries
 
    it('summarization button, targer marginal without entries'+jiraNumber.link(params.jiraURL+jiraNumber), function () {
        
        browser.waitForAngular();
        thesauruspage.clickImport();
        thesauruspage.isImportPopUpDisplayed();
        thesauruspage.clickCodeDropdown();
        thesauruspage.sendCodeImport();
        thesauruspage.clickSearchinCode();
        thesauruspage.sendYearImport();
        thesauruspage.sendNumberImport();
        thesauruspage.clickSearchImport();
        thesauruspage.clickonCheckboxImport();
        thesauruspage.clickImportButton();
        var impCls = thesauruspage.isImportClassificationPopupDisplayed();
        if(impCls = true)
             {
                 expect(impCls).toEqual(true);
             }
        thesauruspage.clickClosepopUp();
       
        
});
    
//GCMSQABANG-2411: 08 - Import from table button - Marginal with entries
    var jiraNum='GCMSQABANG-2411';
   it('summarization button, targer marginal entries'+jiraNum.link(params.jiraURL+jiraNum), function () {
     
        browser.waitForAngular();
        thesauruspage.clickViewAllLink();
        thesauruspage.clickImportViewTable();
        thesauruspage.isImportPopUpDisplayed();
        thesauruspage.clickCodeDropdown();
        thesauruspage.sendCodeImport();
        thesauruspage.clickSearchinCode();
        thesauruspage.sendYearImport();
        thesauruspage.sendNumberImportTable();
        thesauruspage.clickSearchImport();
        thesauruspage.clickonCheckboxImport();
        thesauruspage.clickImportButton();
         var impClsEnt = thesauruspage.isImportClassificationPopupDisplayed();
        if(impClsEnt = true)
             {
                 expect(impClsEnt).toEqual(true);
             }
        thesauruspage.clickClosepopUp();
        thesauruspage.closeViewAll();
     
  });
});