var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-2614';
var jiraNumber1='GCMSQABANG-2615';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Thesaurus',function(){

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
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


      //11 - Import from summarization button - Source marginal without entries - Error
    it('Import from summarization button - Source marginal without entries - Error- 4129.'+jiraNumber, function () {

                globalpage.clickOnSectionButton(loaded.leftpanel,loaded.clickbutton);
                var import_popup=globalpage.isTablePresent();
                expect(import_popup).toEqual(true);
                thesauruspage.enterMarginalIdImport('Code',loaded.code);
                thesauruspage.enterMarginalIdImport('Year',loaded.year);
                thesauruspage.enterMarginalIdImport('N°',loaded.nfield);  
                globalpage.clickOnButtonForGlobal(loaded.button);
                var error_msg='No classification entries for the marginal indicated.';
                var el = thesauruspage.ValidateErrormessage(error_msg);
                expect(el).toEqual(true);
      });

      
      //12 - Import from table button - Source marginal without entries - Error
        
      it('Import from table button - Source marginal without entries - Error- 4129 '+jiraNumber1.link(params.jiraURL+jiraNumber1), function () {
       
        globalpage.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.clickbutton);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded.code);
         thesauruspage.enterMarginalIdImport('Year',loaded.year);
        thesauruspage.enterMarginalIdImport('N°',loaded.nfield);  
         globalpage.clickOnButtonForGlobal(loaded.button);
        var error_msg='No classification entries for the marginal indicated.';
         var el = thesauruspage.ValidateErrormessage(error_msg);
         expect(el).toEqual(true);
         browser.sleep(2000);
         thesauruspage.clickOnXbutton('import');
         browser.sleep(1000);

         
      }); 
   });