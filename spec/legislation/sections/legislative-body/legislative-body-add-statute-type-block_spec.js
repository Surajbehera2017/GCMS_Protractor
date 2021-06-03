var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');

var legislativebodyEditionNew = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-2348';
var testData = require('../../../../test-data/Jira_TestData/Legislation_Body/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Legislation-Body', function () {

	beforeEach(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocEditPage = new LegislationDocumentEditionPage();
    legisDocEditPage.get(loadedData.marginal_id);
    legislativebodyEdition.urlLoad(params.valid_username,params.valid_password);
       
   });

   
it('should add statute type block.'+jiraNumber,function (){
		
    global.expandSectionInLeftPanel('Statute Data');
    expect(legislativebodyEdition.isExpanded()).toEqual(true);
    expect(legislativebodyEdition.hasaddStatutetypePlusButton()).toEqual(true);
    legislativebodyEditionNew.clickPlusButton("add-statute-type");
    expect(legislativebodyEdition.hasconnectorComboBox()).toEqual(true);
    // legislativebodyEdition.clickconnectorComboBox();
    // legislativebodyEdition.selectconnector(3);

    legislativebodyEditionNew.selectDropdownOption("combo-connector-1", loadedData.connector);
    browser.waitForAngular();
    legislativebodyEdition.clickStatuteType();
    legislativebodyEdition.addstatueType(loadedData.statute_type);
    legislativebodyEdition.clickSearchBtnStatuteType();
    legislativebodyEdition.clickItemList(); 
    browser.sleep(3000); 

        if(params.BU !='mex'|params.BU !='gulf'){
            legislativebodyEdition.clickprovisonDateforstatueButton();
			browser.sleep(3000);
        }
    LegislationDocumentEditionPageObject.saveWIConfirm();
    legislativebodyEditionNew.clickOnButtonConfirmationPopUp("Save");
    expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
});

    afterEach(function () {
        var legisDocEditionPage = new LegislationDocumentEditionPage();
        legisDocEditionPage.get(loadedData.marginal_id);
        legislativebodyEdition.expandSection();
        legislativebodyEditionNew.deletePerticularNode("statute.data.delete.type.1");
        LegislationDocumentEditionPageObject.saveWIConfirm();
        legislativebodyEditionNew.clickOnButtonConfirmationPopUp("Save");
        browser.sleep(5000);

    });
});

  













