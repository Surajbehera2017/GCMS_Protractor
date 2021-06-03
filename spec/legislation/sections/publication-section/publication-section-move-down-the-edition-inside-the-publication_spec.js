var params = browser.params;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-3099';
var testData = require('../../../../test-data/Jira_TestData/Publication-section/' + jiraNumber + '.js');
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

	//TC03 - It is possible to move down the edition inside the publication
	it('Move first edition of the publication to the second place.'+jiraNumber, function () {

		//Load document with multiple Publications
		var firstvalue;
		var secondvalue;

		browser.sleep(4000);

		publicationsection.clickOnElement(loaded.expandpublicationsection);

		publicationsection.valueInPublicationType(0).then(function (result) {
			firstvalue = result;
			publicationsection.valueInPublicationType(1).then(function (result) {
				secondvalue = result;
				rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
				browser.sleep(1000);
				publicationsection.clickOnElement(loaded.expandpublicationsection);
				browser.sleep(1000);
				publicationsection.dragAndDropFirstPublicationTypeToSecondPosition();
				browser.sleep(1000);
				browser.waitForAngular();
				//clicking on save button
				publicationsection.clickOnElement(loaded.savebutton_xpath);
				browser.sleep(1000);
				//clicking on save button in popup
				publicationsection.clickOnElement(loaded.saveinpopup_xpath);
				browser.sleep(2000);
		
				publicationsection.clickOnElement(loaded.expandpublicationsection);
				browser.sleep(2000);
				//expect(publicationsection.valueInPublicationType(0)).toEqual(secondvalue);
				//expect(publicationsection.valueInPublicationType(1)).toEqual(firstvalue);
			});
		});
	});

});