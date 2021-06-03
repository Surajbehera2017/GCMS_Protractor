var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1='GCMSQABANG-3104';
var jiraNumber2='GCMSQABANG-2405';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber1 + '.js');
var loaded=testData[params.env][params.BU];

describe('Thesaurus',function(){//('Thesaurus-section-Add Page', function () {

	beforeEach(function () {
         
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		thesauruspage.urlLoad(params.valid_username,params.valid_password);
		
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


	//03 - Add - Saving Classification entry for more than one unit
	//02 - Add - Saving Classification entry for more than one unit
	//BOTH TESTCASES ARE COVERED

	it('should successfully perform add operation for more than one unit .'+jiraNumber1+'.'+jiraNumber2,function(){
		
		globalpage.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
		thesauruspage.clickOnbuttonInsideSectionTable(loaded.add_button);
		
		browser.getAllWindowHandles().then(function(handles) {
			var newTabHandle = handles[1];
			browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
				thesauruspage.clickOnPlusButton();
				thesauruspage.enterUnitIDInPopup(loaded.unit_1);
				thesauruspage.clickOnComplementDropdown();
				thesauruspage.selectNumberFromComplement(loaded.number_1);
				browser.waitForAngular();
				globalpage.clickOnButtonForGlobal(loaded.save);
				browser.sleep(2000);
				
				thesauruspage.clickOnPlusButton();
				thesauruspage.enterUnitIDInPopup(loaded.unit_2);
				thesauruspage.clickOnComplementDropdown();
				thesauruspage.selectNumberFromComplement(loaded.number_2);
				browser.waitForAngular();
				globalpage.clickOnButtonForGlobal(loaded.save);
				browser.sleep(2000);

				thesauruspage.selectThesarusTypeFromDropdown(loaded.type);
				browser.sleep(1000);
				thesauruspage.clickHierarchyEnterText(loaded.hierarchy);
				browser.sleep(1000);
				thesauruspage.selectThesaurusHierarchy(loaded.hierarchy);
				browser.sleep(1000);
				thesauruspage.getIndexAndClickOnThesaurusTerm(loaded.term);
				browser.sleep(1000);
				thesauruspage.clickOnLinkForGlobal(loaded.link);
				browser.sleep(4000);
                browser.getAllWindowHandles().then(function (handles) {
                    var secondTabHandle = handles[2];

                    browser.switchTo().window(secondTabHandle).then(function () {
                        browser.ignoreSynchronization = true;        
                        browser.sleep(5000);
                        browser.switchTo().frame('ext-gen1133'); // give id of iframe
                        browser.ignoreSynchronization = true;
                        thesauruspage.enterTextSpecificDatatype('parrafo', 'This is testing to check the complemenatryinfo functionality');
                        browser.switchTo().defaultContent();
                        //browser.ignoreSynchronization = false;
                        thesauruspage.clickOnActionsInGeneralTab('Save');
                        browser.sleep(3000);
                    });
                });

                browser.switchTo().window(handles[1]);
                browser.ignoreSynchronization = false;
                browser.sleep(2000);
                globalpage.clickOnElement(loaded.add_xpath);
                browser.sleep(1000);
                globalpage.clickOnNavigationOrCloseButton(loaded.ok_button);
                browser.close();
                
            });

        browser.switchTo().window(handles[0]);
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
        globalpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
        thesauruspage.enterThesaurusTerm(loaded.term);
        thesauruspage.selectNoOfRows('All');
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
        globalpage.clickOnNavigationOrCloseButton(loaded.ok_button);
        globalpage.clickOnNavigationOrCloseButton(loaded.close_button);
    });
    });

});





