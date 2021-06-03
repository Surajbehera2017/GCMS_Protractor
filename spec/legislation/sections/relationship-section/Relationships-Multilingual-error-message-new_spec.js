var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-2128';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
describe('Relationship', function () {
  
  
           
    beforeAll(function () {
      
      browser.ignoreSynchronization = false;
      legisDocDisplayPage.get(loadedData.marginal_id);
      relationshippage.urlLoad(params.valid_username,params.valid_password);
      
      });
      
// 
    
    

	/*
     * 06 - Multilingual  - error message

     */

    it('Multilingual  - should give error message upon missing out mandatory fields for a language.' + jiraNumber, function () {
     
         browser.waitForAngular();
         globalfunction.clickOnSectionButton(loadedData.section,loadedData.add);
         browser.sleep(2000);
         relationshippage.clickandSelect(loadedData.field,loadedData.value);
         // click on language icon(pencil shape)
     browser.waitForAngular();
     relationshippage.clickOnIcon(loadedData.RelationshipPanel,loadedData.LanguageIcon);
        
     // verify if language modal opened or not
     expect(relationshippage.isModalPresent(loadedData.LanguageModal)).toEqual(true);

         relationshippage.addLanguage(loadedData.langoption);
         relationshippage.closeMultiLanguagePopupAddRelationship();
         relationshippage.selectLanguageFromDropdown(loadedData.option);
         relationshippage.sendValueTo(loadedData.panel,loadedData.Code,loadedData.codevalue);
         var yearborder = relationshippage.getBorderColorOfYearInputField();
         expect(yearborder).toEqual(loadedData.red);
         var numborder = relationshippage.getBorderColorOfNInputField();
         expect(numborder).toEqual(loadedData.red);






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
        
        // var adddisable = relationshippage.isAddButtonEnaled();
        // expect(adddisable).toEqual(false);
        
        
        // //Deletion of language
        
        // relationshippage.clickPencilIconDisplayedInLanguageDropdown();
        // relationshippage.clickDeleteButtoninMultiLanguagePopup();
        // relationshippage.closeMultiLanguagePopupAddRelationship();
        // relationshippage.clickCloseButtonEditRelationshipPopup();
        // browser.waitForAngular();   
       
    });
  });
