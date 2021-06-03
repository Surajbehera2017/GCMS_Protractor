var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var Label = require('../../../../po/document/display/legis/sections/labels/labels.po');
var fix_Section =require('../../../../po/document/display/legis/sections/fix-section/fix-section.po.js');
var jiraNumber = 'GCMSQABANG-2987';
// test data support for various BU's
var testData = require('../../../../test-data/Jira_TestData/labels/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Labels', function () {
	
		beforeEach(function () {
	
			browser.ignoreSynchronization = false;
	
			legisDocDisplayPage.get(loaded.marginal_id);
			Label.urlLoad(params.valid_username, params.valid_password);
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

	
	
	it('Check the common labels on section titles - Spanish', function () {

			browser.waitForAngular();
			fix_Section.selectLanguageFromUserDropdown(loaded.langselect);
			browser.sleep(2000);
			var loc = globalfunction.gettingTextofelement(loaded.general,loaded.datos);
			browser.sleep(2000);
			var loc_1 = globalfunction.gettingTextofelement(loaded.prod,loaded.prodcoll);
			expect(loc_1).toEqual(true);
			browser.sleep(2000);
			var loc_2 = globalfunction.gettingTextofelement(loaded.control,loaded.ctrl);
			expect(loc_2).toEqual(true);
			browser.sleep(2000);
			var loc_3 = globalfunction.gettingTextofelement(loaded.disposicn,loaded.title);
			expect(loc_3).toEqual(true);
			browser.sleep(2000);
			var loc_4 = globalfunction.gettingTextofelement(loaded.publication,loaded.publicationdata);
			expect(loc_4).toEqual(true);
			browser.sleep(2000);
			var loc_5 = globalfunction.gettingTextofelement(loaded.corrigendas,loaded.corr_title);
			expect(loc_5).toEqual(true);
			browser.sleep(2000);
			var el = globalfunction.gettingTextofelement(loaded.valid,loaded.validity)
			expect(el).toEqual(true);
			browser.sleep(2000);
			var title = globalfunction.gettingTextofelement(loaded.notes,loaded.notes_title);
			expect(title).toEqual(true);
			browser.sleep(2000);
			var el_1 = globalfunction.gettingTextofelement(loaded.area,loaded.area_header);
			expect(el_1).toEqual(true);
			browser.sleep(2000);
			if(params.BU==='spain'){
			var el_2 = globalfunction.gettingTextofelement(loaded.topics,loaded.topics_title);
			expect(el_2).toEqual(true);
			}
			browser.sleep(2000);
			var el_3 = globalfunction.gettingTextofelement(loaded.tesauro,loaded.tesauro_sec);
			expect(el_3).toEqual(true);
			browser.sleep(2000);
			var el_4 = globalfunction.gettingTextofelement(loaded.relationships,loaded.rel_sec);
			expect(el_4).toEqual(true);
			browser.sleep(2000);
			var el_5 = globalfunction.gettingTextofelement(loaded.obras,loaded.obras_sec);
			expect(el_5).toEqual(true);
			browser.sleep(2000);
			var el_6 = globalfunction.gettingTextofelement(loaded.authornotes,loaded.auth_sec);
			browser.sleep(2000);
			if(params.BU==='spain'){
			var el_7 = globalfunction.gettingTextofelement(loaded.legisdoc,loaded.doc_section);
			expect(el_7).toEqual(true);
			}
			browser.sleep(2000);







		// browser.ignoreSynchronization = false;
        // LegislationDocumentDisplayPage.get(testData.legislation.sections.labels.marginal_id_with_common_labels);
        // browser.waitForAngular();
		// LegislationDocumentDisplayPage.urlLoad(params.valid_username,params.valid_password);
		// browser.waitForAngular();
		// Label.clickUserDropDown();
		// browser.sleep(3000);
		// Label.selectSpainLang();
		// browser.sleep(5000);
		
		// var expectedLabels = testData.legislation.sections.labels.common_labels_spanish;
		// var expectedLabelsArray =  expectedLabels.split(",");
		
		// for (var row = 0; row < expectedLabelsArray.length; row++) {
		// //	logger.info('Validating section header :\''+expectedLabelsArray[row]+'\'');
		// 	expect(Label.isSectionHeaderDisplayed(expectedLabelsArray[row])).toEqual(true);
		// }
		
	});
	
	// it('Check the Bills label on section titles - Spanish', function () {
	// 	browser.ignoreSynchronization = false;
    //     LegislationDocumentDisplayPage.get(testData.legislation.sections.labels.marginal_id_with_bills);
    //     browser.waitForAngular();
	// 	LegislationDocumentDisplayPage.urlLoad(params.valid_username,params.valid_password);
	// 	browser.waitForAngular();
	// 	Label.clickUserDropDown();
	// 	Label.selectSpainLang();
	// 	browser.sleep(5000);
	// 	var expectedLabels = testData.legislation.sections.labels.bills_label_spanish;
	// 	var expectedLabelsArray =  expectedLabels.split(",");
		
	// 	for (var row = 0; row < expectedLabelsArray.length; row++) {
	// 	//	logger.info('Validating section header :\''+expectedLabelsArray[row]+'\'');
	// 		expect(Label.isSectionHeaderDisplayed(expectedLabelsArray[row])).toEqual(true);
	// 	}
		
	// });
	
	// it('Check the Collective Agreements label on section titles - Spanish', function () {
	// 	browser.ignoreSynchronization = false;
    //     LegislationDocumentDisplayPage.get(testData.legislation.sections.labels.marginal_id_with_collective_agreement);
    //     browser.waitForAngular();
	// 	LegislationDocumentDisplayPage.urlLoad(params.valid_username,params.valid_password);
	// 	browser.waitForAngular();
	// 	Label.clickUserDropDown();
	// 	Label.selectSpainLang();
	// 	browser.sleep(5000);
	// 	var expectedLabels = testData.legislation.sections.labels.collective_agreement_label_spanish;
	// 	var expectedLabelsArray =  expectedLabels.split(",");
		
	// 	for (var row = 0; row < expectedLabelsArray.length; row++) {
	// 	//	logger.info('Validating section header :\''+expectedLabelsArray[row]+'\'');
	// 		expect(Label.isSectionHeaderDisplayed(expectedLabelsArray[row])).toEqual(true);
	// 	}
		
	// });
	
	
	
});
