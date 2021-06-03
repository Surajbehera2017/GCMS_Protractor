var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-2406';
var jiraNumber2 = 'GCMSQABANG-3105';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber2 + '.js');
var loaded = testData[params.env][params.BU];


describe('Thesaurus', function () {//('Thesaurus-section-Add Page', function () {

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



	//03 - Add - Saving Classification entry for document without text
	//01 - Add - Saving Classification entry for document without text
	//both testcases are covered
	it('should successfully perform add operation and delete the same.' + jiraNumber1 + '.' + jiraNumber2, function () {

		globalpage.clickOnSectionButton(loaded.leftpanel, loaded.linktolink);
		thesauruspage.clickOnbuttonInsideSectionTable(loaded.add_button);

		browser.getAllWindowHandles().then(function (handles) {
			var newTabHandle = handles[1];
			browser.switchTo().window(newTabHandle).then(function () {
				browser.sleep(2000);
				thesauruspage.selectThesarusTypeFromDropdown(loaded.type);

				//thesauruspage.selectThesarusTypeFromDropdown('SECTORES');
				browser.sleep(1000);
				thesauruspage.clickHierarchyEnterText(loaded.hierarchy);
				browser.sleep(1000);
				thesauruspage.selectThesaurusHierarchy(loaded.hierarchy);
				browser.sleep(1000);
				thesauruspage.getIndexAndClickOnThesaurusTerm(loaded.term);
				browser.sleep(1000);
				authorNotes.clickOnButtonForGlobal(loaded.add_button);
				browser.sleep(1000);
				globalpage.clickOnNavigationOrCloseButton(loaded.ok_button);
				browser.close();

			});

			browser.switchTo().window(handles[0]);
			browser.ignoreSynchronization = false;
			browser.waitForAngular();
			globalpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
			thesauruspage.enterThesaurusTerm(loaded.term1);
			thesauruspage.selectNoOfRows('All');
			thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
			browser.sleep(1000);
			globalpage.clickOnNavigationOrCloseButton(loaded.ok_button);
			browser.sleep(1000);
			globalpage.clickOnNavigationOrCloseButton(loaded.close_button);
		});
	});

});




