var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var legisDocDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var Label = require('../../../../po/document/display/legis/sections/labels/labels.po');
//var fix_Section =require('../../../../po/document/display/legis/sections/fix-section/fix-section.po.js');
var jiraNumber = 'GCMSQABANG-2990';
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
		
	it('Check the correct labels on section titles - English.' + jiraNumber, function () {

		browser.waitForAngular();
		
		//verifying the sections displayed
		var loc_1 = globalfunction.gettingTextofelement(loaded.firstsec,loaded.sec_1);
		expect(loc_1).toEqual(true);
		browser.sleep(2000);
		var loc_2 = globalfunction.gettingTextofelement(loaded.second,loaded.prod);
		expect(loc_2).toEqual(true);
		browser.sleep(2000);
		var loc_3 = globalfunction.gettingTextofelement(loaded.control,loaded.ctrl);
		expect(loc_3).toEqual(true);
		browser.sleep(2000);
		var loc_4 = globalfunction.gettingTextofelement(loaded.statdata,loaded.data);
		expect(loc_4).toEqual(true);
		browser.sleep(2000);
		var loc_5 = globalfunction.gettingTextofelement(loaded.publctn,loaded.value);
		expect(loc_5).toEqual(true);
		browser.sleep(2000);
		var el = globalfunction.gettingTextofelement(loaded.corr,loaded.corrigendas);
		expect(el).toEqual(true);
		browser.sleep(2000);
		var loc_7 = globalfunction.gettingTextofelement(loaded.validity,loaded.val);
		expect(loc_7).toEqual(true);
		browser.sleep(2000);
		var index = globalfunction.gettingTextofelement(loaded.editorial,loaded.notes_sec);
		expect(index).toEqual(true);
		browser.sleep(2000);
		var el_1 = globalfunction.gettingTextofelement(loaded.practicearea,loaded.area_title);
		expect(el_1).toEqual(true);
		browser.sleep(2000);
		if(params.BU==='spain'){
		var el_2 = globalfunction.gettingTextofelement(loaded.topics,loaded.topics_title);
		expect(el_2).toEqual(true);
		}
		browser.sleep(2000);
		var el_3 = globalfunction.gettingTextofelement(loaded.thesaurus,loaded.th_section);
		expect(el_3).toEqual(true);
		browser.sleep(2000);
		var el_4 = globalfunction.gettingTextofelement(loaded.relationships,loaded.rel_sec);
		expect(el_4).toEqual(true);
		browser.sleep(2000);
		var el_5 = globalfunction.gettingTextofelement(loaded.books,loaded.books_sec);
		expect(el_5).toEqual(true);
		browser.sleep(2000);
		var ind_1 = globalfunction.gettingTextofelement(loaded.authornotes,loaded.auth_sec);
		expect(ind_1).toEqual(true);
		browser.sleep(2000);
		if(params.BU==='spain'){
		var index_2 = globalfunction.gettingTextofelement(loaded.legisdictionary,loaded.legis_title);
		expect(index_2).toEqual(true);
		}
		browser.sleep(2000);

	});
		
});
