var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-2628';
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

    //02 - Thesaurus table - Unit Level - Filter by All

	it('filter Unit level' +jiraNumber.link(params.jiraURL + jiraNumber), function () {
        
       browser.waitForAngular();
       globalpage.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
       var table_popup=globalpage.isTablePresent();
       expect(table_popup).toEqual(true);
       globalpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
       thesauruspage.enterUnitLevel(loaded.unit_level);
    //    show_filters:'Show Filters',
    //    unit_level:'%',
    //    thesauruspage.clickViewAllLink();
    //    browser.waitForAngular();
    //    thesauruspage.clickShowFilters();
    //    thesauruspage.sendComplementary();
    //    thesauruspage.enterKeyFilterComplementary();
    //    var view = thesauruspage.isViewAllTableDisplayed();
    //      if(view = true)
    //          {
    //              expect(view).toEqual(true);
    //          }
    //    thesauruspage.closeViewAll();
          
     });
        
});