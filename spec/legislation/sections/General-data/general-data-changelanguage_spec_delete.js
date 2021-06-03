var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var generaldataDisplayPage = require('../../../../po/document/display/legis/sections/general-data/general-data.po.js');
var generaldataEditPage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

describe('General-data', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.legislation.sections.generaldata.marginal_idcont1);
        generaldataDisplayPage.urlLoad();
        
	});

	
  it('change language', function () {
     
      
        generaldataDisplayPage.clickEditButton();
        browser.waitForAngular();
        generaldataEditPage.clickUncollaspedGeneraldata();
        browser.waitForAngular();
        generaldataEditPage.clickChangeOfficial();
        browser.waitForAngular();
        generaldataEditPage.clickOnPlusButton();
        browser.waitForAngular();
        generaldataEditPage.selectLanguageFromDropdown(4);
        browser.waitForAngular();
        generaldataEditPage.clickOnOfficialCheckBox();
        browser.waitForAngular();
        generaldataEditPage.clickUncollaspedStatueData();
        browser.waitForAngular();
        generaldataEditPage.clickOnGlobalIconOfStatueData();
        browser.waitForAngular();
        generaldataEditPage.enterMainKeywordForCatalan(testData.legislation.sections.generaldata.text,12);
        browser.waitForAngular();
        generaldataEditPage.clickOnApplyButton();
        browser.waitForAngular();
        generaldataEditPage.clickSave();
        browser.waitForAngular();
        generaldataEditPage.clickSaveonpopup();
        browser.waitForAngular();
        generaldataDisplayPage.clickUncollaspedGeneraldata();
        browser.waitForAngular();

       
        var language = generaldataDisplayPage.getSelectedLanguage();
        //expect(language1).toEqual('Gallego');

      if (language = 'Catalán'){

          
           generaldataDisplayPage.clickEditButton();
           browser.waitForAngular();
           generaldataEditPage.clickUncollaspedGeneraldata();
           browser.waitForAngular();
           generaldataEditPage.selectLanguageFromDropdown(11);
           browser.waitForAngular();
           generaldataEditPage.clickUncollaspedStatueData();
           browser.waitForAngular();
           generaldataEditPage.clickOnGlobalIconOfStatueData();
           browser.waitForAngular();
           generaldataEditPage.enterMainKeywordForCatalan(testData.legislation.sections.generaldata.text,12);
           browser.waitForAngular();
           generaldataEditPage.clickOnApplyButton();
           browser.waitForAngular();
           generaldataEditPage.clickSave();
           browser.waitForAngular();
           generaldataEditPage.clickSaveonpopup();
           browser.waitForAngular();
           generaldataDisplayPage.clickUncollaspedGeneraldata();
           browser.waitForAngular();
           var language1 =  generaldataDisplayPage.getSelectedLanguage();
           expect(language1).toEqual('Gallego');
          
      }
      else{

          generaldataDisplayPage.clickEditButton();
          browser.waitForAngular();
          generaldataEditPage.clickUncollaspedGeneraldata();
          browser.waitForAngular();
          generaldataEditPage.clickChangeOfficial();
          browser.waitForAngular();
          generaldataEditPage.clickOnPlusButton();
          browser.waitForAngular();
          generaldataEditPage.selectLanguageFromDropdown(4);
          browser.waitForAngular();
          generaldataEditPage.clickOnOfficialCheckBox();
          browser.waitForAngular();
          generaldataEditPage.clickUncollaspedStatueData();
          browser.waitForAngular();
          generaldataEditPage.clickOnGlobalIconOfStatueData();
          browser.waitForAngular();
          generaldataEditPage.enterMainKeywordForCatalan(testData.legislation.sections.generaldata.text,12);
          browser.waitForAngular();
          generaldataEditPage.clickOnApplyButton();
          browser.waitForAngular();
          generaldataEditPage.clickSave();
          browser.waitForAngular();
          generaldataEditPage.clickSaveonpopup();
          browser.waitForAngular();
          generaldataDisplayPage.clickUncollaspedGeneraldata();
          browser.waitForAngular();

          var language = generaldataDisplayPage.getSelectedLanguage();
          expect(language1).tobe('Catalán');
          
      }  
          
      generaldataDisplayPage.clickEditButton();
      browser.waitForAngular();
      generaldataEditPage.clickUncollaspedGeneraldata();
      browser.waitForAngular();
      generaldataEditPage.clickOnXButton();
      browser.waitForAngular();
      generaldataEditPage.clickChangeOfficial();
      browser.waitForAngular();
      generaldataEditPage.clickSave();
      browser.waitForAngular();
      generaldataEditPage.clickSaveonpopup();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        
    
     });
   
    

     });