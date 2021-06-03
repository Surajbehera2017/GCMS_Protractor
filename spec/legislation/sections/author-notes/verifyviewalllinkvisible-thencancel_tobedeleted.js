var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various BU's
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1='GCMSQABANG-3223';
var testData = require('../../../../test-data/Jira_TestData/author-notes/'+ jiraNumber1 + '.js');
var loaded=testData[params.env][params.BU];

describe('Author Notes', function() {

	beforeEach(function() {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		authorNotes.urlLoad(params.valid_username, params.valid_password);
		browser.sleep(5000);
		browser.waitForAngular();
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
	//GCMSQABANG-3223: 01 - Author note table from View All
	it('should display Author table', function() {

		//globalpage.clickOnSectionButton('Thesaurus','view');
		expect(authorNotes.clickOnSectionButton('Thesaurus','view')).toEqual(true);

    });
    
    
});