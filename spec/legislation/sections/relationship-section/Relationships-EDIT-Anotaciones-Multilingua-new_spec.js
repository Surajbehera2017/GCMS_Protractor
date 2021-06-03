var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var jiraNumber = 'GCMSQABANG-2118';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Relationship', function () {

      beforeEach(function () {

            browser.ignoreSynchronization = false;
            legisDocDisplayPage.get(loaded.marginal_id);
            relationshippage.urlLoad(params.valid_username, params.valid_password);

      });


      // 11 - EDIT - Anotaciones  - Multilingua

      it('EDIT - Anotaciones - Multilingua.' + jiraNumber, function () {

            browser.sleep(1000);
            globalpage.expandSectionInLeftPanel(loaded.Relationships);
            browser.sleep(1000);
            relationshippage.clickonLinkInsideRelationship(loaded.annotation_link);
            browser.sleep(1000);
            relationshippage.clickactionOnRelationshipTable(loaded.edit_button);
            browser.sleep(1000);
            //check the analyst name
            var useranalyst = relationshippage.isAnalystNamePresentFor('native', loaded.analyst_name);
            expect(useranalyst).toEqual(true);
            browser.sleep(5000);

            //clicking on the language dropdown
            relationshippage.selectLanguageFromDropdown(loaded.languagename);

            //click on Save button
            globalpage.clickOnButtonForGlobal(loaded.save_button);
            browser.sleep(1000);
            //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
            browser.sleep(5000);
            relationshippage.clickOnXbutton();
            // globalpage.clickOnButtonForGlobal('Yes');
            browser.sleep(1000);
            relationshippage.clickOnLensIcon();
            browser.sleep(1000);
            var languagetext = contextindexpage.verifyInfoOfLensIcon(loaded.field_name);
            expect(languagetext).toEqual(loaded.language);
            browser.sleep(2000);


      });

});