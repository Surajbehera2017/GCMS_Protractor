var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

//test data support for various Bu's
var jiraNumber='GCMSQABANG-3310';
var testData = require('../../../../test-data/Jira_TestData/Document-creation/' + jiraNumber + '.js');
//var testData = require('../../../../test-data/Jira_TestData/Document-creation/testdata.js');
var loadedData = testData[params.env][params.BU];
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var statuteDataSection = require('../../../../po/document/edition/legis/sections/statute-data/statute-data.po.js');
var dateInForceSection = require('../../../../po/document/edition/legis/sections/date-in-force/date-in-force-new.po.js');


describe('Document Creation', function () {

	beforeEach(function(){
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(loadedData.marginal_id_copy);
		browser.waitForAngular();
		legisDocDisplayPage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	it('verify copy button with text functionality.GCMSQABANG-3310', function () {

		var page = LegislationDocumentEditionPage;
		var documentDisplayPage = LegislationDocumentDisplayPage;
		//save marginal before copy
		var actualMarginal = documentDisplayPage.getMarginalNumber();

		//copy document
		documentDisplayPage.clickCopyButton();
		documentDisplayPage.selectcode(loadedData.document_code);
		documentDisplayPage.enterYear(loadedData.year);
		//documentDisplayPage.enterNumber(loadedData.numberToEnter_3);
		documentDisplayPage.enterGivenText(loadedData.text);
		documentDisplayPage.clickcalculate();
		documentDisplayPage.clickCopyOnCopyDocPopup();

		//Enter mandatory fields
		statuteDataSection.expandableEdit.expand();
		statuteDataSection.clickOnAddProvisionDateIcon();
		statuteDataSection.enterMainKeyword();
		dateInForceSection.expandSection();
		dateInForceSection.changeInDateInForceNew(loadedData.date);

		//click create
		page.clickCreate();
		browser.wait(documentDisplayPage.getCopyButton(),20000);

		//verify marginal is changed
		var newMarginal = documentDisplayPage.getMarginalNumber();
		browser.sleep(2000);
		expect(newMarginal).toContain(loadedData.code + loadedData.year);
		expect(newMarginal).toContain(loadedData.text);
		expect(newMarginal).not.toEqual(actualMarginal);

		//Delete the document
		documentDisplayPage.clickDeleteButton().then(function () {
			documentDisplayPage.clickConfirmDeleteButton().then(function(){
				// Document takes some time load, so wait until it's done.
				return browser.driver.wait(function () {
					return browser.driver.getCurrentUrl().then(function (url) {
						return /index/.test(url);
					});
				},30000);
				expect(documentDisplayPage.hasDeleteModal()).toBe(false);
			});
			expect(documentDisplayPage.hasDeleteButton()).toBe(false);
		});

	});

});