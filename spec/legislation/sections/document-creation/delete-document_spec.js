var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 
 

//test data support for various Bu's
var jiraNumber='GCMSQABANG-3313';
var testData = require('../../../../test-data/Jira_TestData/Document-creation/' + jiraNumber + '.js');
//var testData = require('../../../../test-data/Jira_TestData/Document-creation/testdata.js');
var loadedData = testData[params.env][params.BU];
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var statuteDataSection = require('../../../../po/document/edition/legis/sections/statute-data/statute-data.po.js');
var dateInForceSection = require('../../../../po/document/edition/legis/sections/date-in-force/date-in-force-new.po.js');


describe('Document Creation', function () {

	beforeAll(function(){
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(loadedData.marginal_id_copy);
		browser.waitForAngular();
		legisDocDisplayPage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
		createCopy(); //create copy of current document, to be deleted.
	});

	it('Delete a doc from document detail.'+jiraNumber , function () {
		var documentDisplayPage = LegislationDocumentDisplayPage;
		expect(documentDisplayPage.hasDeleteButton()).toBe(true);
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

	function createCopy(){
		var page = LegislationDocumentEditionPage;
		var documentDisplayPage = LegislationDocumentDisplayPage;
		//copy document
		browser.waitForAngular();
		documentDisplayPage.clickCopyButton();
		documentDisplayPage.selectcode(loadedData.document_code);
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
	}

});