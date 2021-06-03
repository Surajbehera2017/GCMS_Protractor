var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

//test data support for various Bu's
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var statuteDataSection = require('../../../../po/document/edition/legis/sections/statute-data/statute-data.po.js');
var generalDataSection = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var dateInForceSection = require('../../../../po/document/edition/legis/sections/date-in-force/date-in-force-new.po.js');
var publicationDataSection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po-old.js');
var practiceAreaSection = require('../../../../po/document/edition/legis/sections/practice-area/practice-area.po_old.js');
var billsSection = require('../../../../po/document/edition/legis/sections/bills-section/bills.po.1.js');

var testData = require('../../../../test-data/Jira_TestData/Document-creation/testdata.js');
var loadedData = testData[params.env][params.BU];

describe('Document Creation', function () {

	beforeEach(function(){
		browser.ignoreSynchronization = false;
		var documentDisplayPage = LegislationDocumentDisplayPage;
		documentDisplayPage.get(loadedData.marginal_id_copy);
		browser.waitForAngular();
		documentDisplayPage.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	afterEach(function(){//Close additional tab
		browser.getAllWindowHandles().then(function(handles) {
			browser.switchTo().window(handles[0]);
			for(var i=1;i<handles.length;i++){
				browser.switchTo().window(handles[i]).then(function () {
					browser.close();
				},function(error){
					browser.switchTo().window(handles[0]);
				});
			}
			browser.switchTo().window(handles[0]);
		});
	});

	it('Add a doc from document detail.', function () {

		var documentDisplayPage = LegislationDocumentDisplayPage;
		var page = LegislationDocumentEditionPage;
		var actualMarginal = documentDisplayPage.getMarginalNumber();

		documentDisplayPage.clickAddButton();
		documentDisplayPage.selectcode(loadedData.document_code);
		documentDisplayPage.clickcalculate();
		documentDisplayPage.clickadd();

		//Enter mandatory fields - general data
		generalDataSection.expandableEdit.expand();
		generalDataSection.selectDocumentTypeFromComboBox('Legislación');
		generalDataSection.jurisdictionSelect();
		generalDataSection.jurisdictionSelectOption('Estatal');
		generalDataSection.expandableEdit.collapse();
		browser.waitForAngular();

		//Enter mandatory fields - statute data
		statuteDataSection.expandableEdit.expand();
		statuteDataSection.selectFirstLegislativeBody('Gobierno General Guinea Ecuatorial');
		statuteDataSection.selectFirstStatuteType('Ordenanza');
		statuteDataSection.clickOnAddProvisionDateIcon();
		statuteDataSection.enterMainKeyword();
		statuteDataSection.clickCreateAbstractLink();
		browser.waitForAngular();
		browser.getAllWindowHandles().then(function(handles) {
			browser.switchTo().window(handles[1]).then(function () {
				browser.sleep(3000);
				browser.switchTo().frame('ext-gen1133'); // give id of iframe
				browser.ignoreSynchronization = true; 
			
				statuteDataSection.sendDataToCreateAbstractWindow('This is test data');
				browser.switchTo().defaultContent();
				statuteDataSection.clickSaveInXEditor();
				browser.sleep(3000);
			});
			browser.switchTo().window(handles[0]);
			browser.ignoreSynchronization = false; 
		});
		statuteDataSection.expandableEdit.collapse();
		browser.waitForAngular();

		//Enter mandatory fields - date in force
		dateInForceSection.expandSection();
		dateInForceSection.changeInDateInForceNew('01/01/2017');
		dateInForceSection.collapseSection();
		browser.waitForAngular();

		//Enter mandatory fields - publication data
		publicationDataSection.expandableEdit.expand();
		publicationDataSection.selectFirstPublication('BO. Guinea Ecuatorial');
		publicationDataSection.selectFirstDateNumberSeries('15/12/1947  24/1947');
		publicationDataSection.expandableEdit.collapse();
		browser.waitForAngular();

		//Enter mandatory fields - practice area data
		practiceAreaSection.expandable.expand();
		practiceAreaSection.selectFirstPracticeArea('General');
		practiceAreaSection.expandable.collapse();
		browser.waitForAngular();
		/*
        //Enter mandatory fields - billsSection
        billsSection.expandable.expand();
        billsSection.selectLegislature(1);
        billsSection.selectProcessingType(1);
        billsSection.writeSettingDate('01/01/2017');
        billsSection.selectCompetentCommission('Comisión Constitucional');
        billsSection.expandable.collapse();
        browser.waitForAngular();
		 */

		//click create
		page.clickCreate();
		browser.waitForAngular();
		browser.wait(documentDisplayPage.getAddButton(),30000);
		expect(documentDisplayPage.hasAddButton()).toEqual(true);

		//verify marginal is changed
		var newMarginal = documentDisplayPage.getMarginalNumber();
		expect(newMarginal).not.toEqual(actualMarginal);

		//Verify Cancelling add
		documentDisplayPage.clickAddButton();
		documentDisplayPage.selectcode(loadedData.document_code);
		documentDisplayPage.clickcalculate();
		expect(documentDisplayPage.isPopUpDisplayed()).toBeTruthy();
		documentDisplayPage.clickCancelOnCopydocPopup();
		expect(documentDisplayPage.isPopUpDisplayed()).toBeFalsy();
		browser.waitForAngular();

	});

});