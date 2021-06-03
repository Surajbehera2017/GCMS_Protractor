var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
// test data support for various BU's
//var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//var testData=testdata.legislation.sections.thesaurus;
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2514';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU]; 
       
describe('Thesaurus',function(){//('Thesaurus-section-activate delete button', function () {
  
		beforeEach(function () {
            
					browser.ignoreSynchronization = false;
					var legisDocDisplayPage = new LegislationDocumentDisplayPage();
					legisDocDisplayPage.get(loaded.marginal_id);
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
  //GCMSQABANG-2514 : 02 - Delete button activated - rows selected
    it('Delete button activated - rows selected.'+jiraNumber,function(){

      globalpo.clickOnSectionButton('Thesaurus','view');
      thesauruspage.selectNoOfRows('1');
      browser.sleep(1000);
      expect(globalpo.clickOnbuttonInsideSectionTable('Delete')).toEqual(false); 
      //globalpo.clickOnbuttonInsideSectionTable('Delete');
      globalpo.clickOnNavigationOrCloseButton('cancel');
		                              
        });
    });
    