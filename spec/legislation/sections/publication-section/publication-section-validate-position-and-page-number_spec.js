var params = browser.params;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber1 = 'GCMSQABANG-3101';
var jiraNumber2 = 'GCMSQABANG-3102';
var jiraNumber3 = 'GCMSQABANG-2729';
var jiraNumber4 = 'GCMSQABANG-2730';
var testData = require('../../../../test-data/Jira_TestData/Publication-section/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Publication Section', function () {

	beforeEach(function () {
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		publicationsection.urlLoad(params.valid_username, params.valid_password);

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

	//TC01 - Publication Data - display position and page number per BU - ARZ - Display
	it('display position and page number per BU  ARZ  Display.' + jiraNumber1, function () {

		browser.waitForAngular();
		var expectedName = ["Page N°", "N° de pagina", "N° da Página"];
		var pageNumberDisplayed = false;

		rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
		browser.sleep(4000);
		publicationsection.clickOnElement(loaded.expandpublicationsection);
		browser.sleep(3000);
		publicationsection.positionpage().then(function (result) {
			console.log("result="+result);
			for (var row = 0; row < expectedName.length; row++) {
				console.log("inside for");
				if (expectedName[row] == result) {
					console.log("inside if");
					pageNumberDisplayed = true;
					break;
				}
			}

			expect(pageNumberDisplayed).toEqual(true);
		});

	});

	//TC02 - Publication Data - display position and page number per BU - ARZ - Edit
	it('display position and page number per BU  ARZ  Edit.'+jiraNumber2, function () {

		browser.waitForAngular();
		var expectedName = ["Page N°", "N° de pagina", "N° da Página"];
		var pageNumberDisplayed = false;
		browser.sleep(1000);
		rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
		browser.sleep(4000);
		publicationsection.clickOnElement(loaded.expandpublicationsection);
		browser.sleep(3000);
		publicationsection.positionpage().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if (expectedName[row] === result) {
					pageNumberDisplayed = true;
					break;
				}
			}
			expect(pageNumberDisplayed).toEqual(true);
		});


	});

	//TC03 - Publication Data - display position and page number per BU - ARZ - Add
	it('display position and page number per BU  ARZ  Add.'+jiraNumber3, function () {

		rightpanelpage.clickOnbuttonInEditMode(loaded.addbutton);
		browser.sleep(1000);
		collectiveAgreementSection.enterMarginalIdImport('Code', loaded.code);
		browser.sleep(1000);
		collectiveAgreementSection.enterMarginalIdImport('Year', '2018');
		globalpo.clickOnButtonForGlobal(loaded.calculatebutton);
		browser.sleep(1000);
		collectiveAgreementSection.clickAddCopy('Add');
		browser.sleep(1000);
		var expectedName = ["Page N°", "N° de pagina", "N° da Página"];
		var pageNumberDisplayed = false;
		publicationsection.clickOnElement(loaded.expandpublicationsection);
		browser.waitForAngular();
		publicationsection.positionpage().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if (expectedName[row] === result) {
					pageNumberDisplayed = true;
					break;
				}
			}
			expect(pageNumberDisplayed).toEqual(true);
		});
	});


	//TC04 - Publication Data - display position and page number per BU - ARZ - Copy
	it('display position and page number per BU  ARZ  Copy.'+jiraNumber4, function () {
		
		rightpanelpage.clickOnbuttonInEditMode(loaded.copybutton);
		browser.sleep(1000);
		collectiveAgreementSection.enterMarginalIdImport('Code', loaded.code);
		browser.sleep(1000);
		collectiveAgreementSection.enterMarginalIdImport('Year', '2018');
		globalpo.clickOnButtonForGlobal(loaded.calculatebutton);
		browser.sleep(1000);
		collectiveAgreementSection.clickAddCopy('Copy');
		browser.sleep(1000);
		var expectedName = ["Page N°", "N° de pagina", "N° da Página"];
		var pageNumberDisplayed = false;
		publicationsection.clickOnElement(loaded.expandpublicationsection);
		browser.waitForAngular();
		publicationsection.positionpage().then(function (result) {
			for (var row = 0; row < expectedName.length; row++) {
				if (expectedName[row] === result) {
					pageNumberDisplayed = true;
					break;
				}
			}

			expect(pageNumberDisplayed).toEqual(true);
		});

	});
});

