var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-2126';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
describe('Relationship', function () {
  
  
           
    beforeAll(function () {
      
      browser.ignoreSynchronization = false;
      legisDocDisplayPage.get(loadedData.marginal_id);
      relationshippage.urlLoad(params.valid_username,params.valid_password);
      
      });
    
    

	/*
     * 01 - Validate Multilingual fields

     */

    it('Validate Multilingual fields', function () {

      browser.waitForAngular();
      globalfunction.clickOnSectionButton(loadedData.relationship,loadedData.viewbtn);
      browser.sleep(2000);
      globalfunction.clickOnbuttonInsideSectionTable(loadedData.filters);
      browser.sleep(2000);
      globalfunction.selectNoOfRows('1');
      browser.sleep(2000);
      relationshippage.clickactionOnRelationshipTable(loadedData.editaction);
      browser.sleep(2000);
      relationshippage.clickOnIcon(loadedData.panelname,loadedData.lang_icon);
      expect(relationshippage.isModalPresent(loadedData.languagemodal)).toEqual(true);
      browser.sleep(2000);
      relationshippage.addLanguage(loadedData.lang_latin);
      browser.sleep(2000);
      relationshippage.closeMultiLanguagePopupAddRelationship();
      browser.sleep(2000);
      relationshippage.selectLanguageFromDropdown(loadedData.lang_latin);










     
        // browser.waitForAngular();
        // var add = relationshippage.isAddRelationshipDisplayed();
        // expect(add).toEqual(true);
        // relationshippage.clickAddRelationship();
        // browser.waitForAngular();
        
        // var icon = relationshippage.isPencilIconDisplayedInLanguageDropdown();
        // expect(icon).toEqual(true);
        // relationshippage.clickPencilIconDisplayedInLanguageDropdown();
        
        // var language = relationshippage.isMultiLanguagePopupDisplayedAddReltionshipButton();
        // expect(language).toEqual(true);
        
        // var select = element.all(by.css('.select-element-large.input-border.cursor-pointer.width-100.ng-pristine.ng-valid')).get(1);
        // select.$('[value="4"]').click();
        
        // relationshippage.closeMultiLanguagePopupAddRelationship();
        
        // var worldicon = relationshippage.isMultiLanguageIconDisplayedAddRelationship();
        // expect(worldicon).toEqual(true);
        
        // var select = element(by.css('.language-select.selectpicker.select-element.input-border.cursor-pointer.select-relationship.reladatalang.ng-pristine.ng-valid'));
        // select.$('[value="1"]').click();
        
        // //Deletion of language
        
        // relationshippage.clickPencilIconDisplayedInLanguageDropdown();
        // relationshippage.clickDeleteButtoninMultiLanguagePopup();
        // relationshippage.closeMultiLanguagePopupAddRelationship();
        // relationshippage.clickCloseButtonEditRelationshipPopup();
        // browser.waitForAngular();   
       
      }); 
    
  });