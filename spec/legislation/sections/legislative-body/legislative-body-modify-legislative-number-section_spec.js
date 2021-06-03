var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');

var legislativebodyEditionNew = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-3025';
var testData = require('../../../../test-data/Jira_TestData/Legislation_Body/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Legislation-Body', function () {

	beforeEach(function () {
        browser.ignoreSynchronization = false;
        var legisDocEditPage = new LegislationDocumentEditionPage();
        legisDocEditPage.get(loadedData.marginal_id);
        legislativebodyEdition.urlLoad(params.valid_username,params.valid_password);
    });

    afterEach(function () {
        var loc = "(//button[@id='btnGoToEditMode'])[2]";
        var el = element(by.xpath(loc));
        browser.actions().click(el).perform();
        // global.clickOnButtonForGlobal("Edit");
        global.expandSectionInLeftPanel('Statute Data');
        var del = "//a[@id='delete-comosition-1-0']//i";
      var ele = element(by.xpath(del));
      browser.actions().click(ele).perform();
      LegislationDocumentEditionPageObject.save();
      browser.sleep(1000);
    });
it('should modify last legislative number section.'+jiraNumber,function (){
    
    global.expandSectionInLeftPanel('Statute Data');
    
    expect(legislativebodyEdition.isExpanded()).toEqual(true);
    legislativebodyEditionNew.clickLegislativeNumber();
    legislativebodyEditionNew.selectDropdownOption(loadedData.connector,loadedData.connectorValue);
    
    browser.sleep(3000);

    legislativebodyEditionNew.selectDropdownOption(loadedData.option,loadedData.optionValue);
    browser.waitForAngular();
    browser.sleep(3000);
    
    browser.waitForAngular();
    legislativebodyEdition.legisNumber(loadedData.modify_legis_num);
    browser.sleep(3000);
        
        if(params.BU != 'gulf'){
        //    legislativebodyEdition.legispreviousNote(loadedData.modify_legis_previousNote);
        //     browser.waitForAngular();
        //     browser.sleep(3000);
        //     legislativebodyEdition.legisNote(loadedData.modify_legis_note);
        //     browser.waitForAngular();
        //     browser.sleep(3000);
        }

        legislativebodyEdition.legisYear(loadedData.modify_legis_year);
        browser.sleep(3000);
        browser.waitForAngular();
        LegislationDocumentEditionPageObject.save();
        browser.sleep(3000);
        expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title); 
   });
});













