var params = browser.params;
var jiraNumber = 'GCMSQABANG-1909';

var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');

describe('Relationship', function () {
    beforeAll(function () {

        browser.ignoreSynchronization = false;
        legisDocDisplayPage.get(loadedData.marginal_id);
        relationshippage.urlLoad(params.valid_username, params.valid_password);

    });


 it('Copy -relationship target.' + jiraNumber, function () {


        // click on veiw all link
        browser.waitForAngular();
        globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);
        browser.sleep(3000);
        //click on showfilters 
        browser.waitForAngular();
        globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
        browser.waitForAngular();
        browser.sleep(3000);

        //seraching by relation type:Añade unidad
        relationshippage.filterbyRelType(loadedData.type);
        browser.sleep(3000);

        //clicking on copy of first row
        relationshippage.clickactionOnRelationshipTable(loadedData.action);
        browser.sleep(3000);
        //clicking on new document section tab
        relationshippage.clickOnTab(loadedData.tab);
        browser.sleep(3000);

       //entering the text in unit feild
        relationshippage.clickandSelect(loadedData.name, loadedData.value);
        browser.sleep(3000);

        //clicking on add button
        relationshippage.clickOnRelPopUpButtons('Add');
        browser.sleep(3000);

        //clicking on delete in collector relationship
        globalpage.clickOnElement(loadedData.deletebutton);
        browser.sleep(4000);
        

        globalpage.clickSaveorCancel(loadedData.yesbutton);
        browser.sleep(4000);
        
     //close add relationship window
     relationshippage.closeAddorEditRelationshipPopup();
     browser.sleep(3000);

     globalpage.clickOnNavigationOrCloseButton('close');
     browser.sleep(2000);


        });

});