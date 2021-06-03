var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-2410';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];



describe('Thesaurus',function(){//('Import from summarization button', function () {

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


    //07 - Import from summarization button - Target marginal without entries
    
    
  it('Import from summarization button - Target marginal without entries 4123.'+jiraNumber, function () {
       
    globalpage.clickOnSectionButton(loaded.leftpanel,loaded.clickbutton);
    var import_popup=globalpage.isTablePresent();
    expect(import_popup).toEqual(true);
    thesauruspage.enterMarginalIdImport(loaded.codefield,loaded.code);
    thesauruspage.enterMarginalIdImport(loaded.yearfield,loaded.year);
    thesauruspage.enterMarginalIdImport(loaded.num_field,loaded.nfield);  
    globalpage.clickOnButtonForGlobal(loaded.button);
    thesauruspage.selectEntriesInImportPopup(loaded.checkbox);
    globalpage.clickOnButtonForGlobal(loaded.clickbutton);
    var validation=globalpage.isTablePresent();
    expect(validation).toEqual(true);
    globalpage.clickOnNavigationOrCloseButton('close');
    browser.sleep(1000);

        //deleting the added entries
        globalpage.expandSectionInLeftPanel(loaded.leftpanel);
        thesauruspage.clickOnGiveThesaurusType(loaded.checkbox);
        thesauruspage.selectNoOfRows('All');
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
        globalpage.clickOnButtonForGlobal(loaded.yes);
        browser.sleep(1000);
        
    }); 

   });