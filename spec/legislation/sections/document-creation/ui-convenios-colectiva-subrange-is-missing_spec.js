var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

//test data support for various Bu's
var jiraNumber = 'GCMSQABANG-3262';
var testData = require('../../../../test-data/Jira_TestData/Document-creation/'+ jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var statuteDataSection = require('../../../../po/document/edition/legis/sections/statute-data/statute-data.po.js');
var generalDataSection = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var publicationDataSection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po-old.js');
var practiceAreaSection = require('../../../../po/document/edition/legis/sections/practice-area/practice-area.po_old.js');



describe('Document Creation', function () {

	beforeEach(function(){
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = LegislationDocumentDisplayPage;
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		legisDocDisplayPage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	it('verify error message if Subrange is not provided for Convenio Colectivo.GCMSQABANG-3262', function () {

		var page = LegislationDocumentEditionPage;
		var documentDisplayPage = LegislationDocumentDisplayPage;
		//save marginal before add
		var actualMarginal = documentDisplayPage.getMarginalNumber();

		documentDisplayPage.clickAddButton();
		documentDisplayPage.selectcode(loadedData.document_code);
		documentDisplayPage.enterYear(loadedData.year);
		documentDisplayPage.clickcalculate();
		documentDisplayPage.clickadd();

		//Enter all mandatory fields except 'subrange (collective agreements)'
		//(enter all mandatory fields before the occurance of this one)

		//Enter mandatory fields - general data
		generalDataSection.expandableEdit.expand();
		//Select 'Convenio Colectivo' as document type
		generalDataSection.selectDocumentTypeFromComboBox(loadedData.document_type);
		generalDataSection.jurisdictionSelect();
		generalDataSection.jurisdictionSelectOption(loadedData.jurisdiction);
		generalDataSection.expandableEdit.collapse();
		browser.waitForAngular();

		//Enter mandatory fields - statute data. Dont enter statute type
		statuteDataSection.expandableEdit.expand();
		statuteDataSection.selectFirstLegislativeBody(loadedData.legislative_body);
		statuteDataSection.selectFirstStatuteType(loadedData.statute_type);
		statuteDataSection.clickOnAddProvisionDateIcon();
		statuteDataSection.enterMainKeyword();
		statuteDataSection.clickCreateAbstractLink();
		browser.waitForAngular();
		browser.getAllWindowHandles().then(function(handles) {
			browser.switchTo().window(handles[1]).then(function () {
				browser.sleep(3000);
				browser.switchTo().frame('ext-gen1133'); // give id of iframe
				browser.ignoreSynchronization = true; 
			
				statuteDataSection.sendDataToCreateAbstractWindow(loadedData.abstract);
				browser.switchTo().defaultContent();
				statuteDataSection.clickSaveInXEditor();
				browser.sleep(3000);
			});
			browser.switchTo().window(handles[0]);
			browser.ignoreSynchronization = false; 
		});
		statuteDataSection.expandableEdit.collapse();
		browser.waitForAngular();

		/*/Enter mandatory fields - date in force
		dateInForceSection.expandSection();
		dateInForceSection.changeInDateInForceNew('01/01/2017');
		dateInForceSection.collapseSection();
		browser.waitForAngular();
*/
		//Enter mandatory fields - publication data
		publicationDataSection.expandableEdit.expand();
		publicationDataSection.selectFirstPublication(loadedData.publication);
		publicationDataSection.selectFirstDateNumberSeries(loadedData.date_and_number);
		publicationDataSection.expandableEdit.collapse();
		browser.waitForAngular();

		//Enter mandatory fields - practice area data
		practiceAreaSection.expandable.expand();
		practiceAreaSection.selectFirstPracticeArea(loadedData.practice_area);
		practiceAreaSection.expandable.collapse();
		browser.waitForAngular();

		//click create & verify statute type error message
		page.clickCreate();
		var firstError = page.getFirstSaveErrorMessage();
		expect(firstError).toEqual(loadedData.error_msg);

	});

});