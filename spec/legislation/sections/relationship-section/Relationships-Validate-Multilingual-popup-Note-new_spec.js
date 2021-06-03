var params = browser.params;
var jiraNumber ='GCMSQABANG-2124';

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});
    
    

	/*
     * 02 - Validate Multilingual pop up for Note

     */

    it('Validate Multilingual pop up for Note.'+jiraNumber, function () {
     
       // click on add button on relationship section 
       globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        
       // click on language icon(pencil shape)
       
        relationshippage.clickOnIcon(loadedData.RelationshipPanel,loadedData.LanguageIcon);
         
        // verify if language modal opened or not
        expect(relationshippage.isModalPresent(loadedData.LanguageModal)).toEqual(true);
 
        // add language 
        relationshippage.addLanguage(loadedData.Language);
       
        //close Popup
        relationshippage.closeMultiLanguagePopupAddRelationship();
         
         // verify world icon is shown after adding new language
         var worldicon = relationshippage.isMultiLanguageIconDisplayedAddRelationship();
         expect(worldicon).toEqual(true);
      
        // verify if world icon present for note  field in source
       
       expect( relationshippage.isWorldIconPresentFor(loadedData.Source,loadedData.Note)).toEqual(true);
        //click on world icon of analyst field
        relationshippage.clickOnWorldIconOf(loadedData.Target,loadedData.Note);
         
        //verify if note modal is appeared or  not
       expect(relationshippage.isModalPresent(loadedData.Note)).toEqual(true);

       //verify if added langugae is shown in popup or not

       expect(relationshippage.isAddedLanguageShownInPopup(loadedData.Language)).toEqual(true);

       globalpage.clickOnButtonForGlobal(loadedData.Cancel);
      
       expect(relationshippage.isWorldIconPresentFor(loadedData.Target,loadedData.Note)).toEqual(true);
        //click on world icon of analyst field
        relationshippage.clickOnWorldIconOf(loadedData.Target,loadedData.Note);

        //verify if note modal is appeared or  not
       expect(relationshippage.isModalPresent(loadedData.Note)).toEqual(true);
       //verify if added langugae is shown in popup or not

       expect(relationshippage.isAddedLanguageShownInPopup(loadedData.Language)).toEqual(true);

       

      
       browser.sleep(3000);

        

       // verify if analyst name is there for selected language or not
        // var analystName = relationshippage.isAnalystNamePresentFor(loadedData.Language,loadedData.AnalystName);
        // expect(analystName).toEqual(true);

        // var firstLanguage = relationshippage.getTextofFirstLanguageMultiLanguagePopup();
        // expect(firstLanguage).toEqual(loadedata.add_relationship.first_language);
        
        // var secondLanguage = relationshippage.getTextofSecondLanguageMultiLanguagePopup();
        // expect(secondLanguage).toEqual(loadedata.add_relationship.second_langauge);
        
        // relationshippage.clickonCloseButtonMultiLanguageWorldiconpopup();
        
        
        // //Deletion of language
        
        // relationshippage.clickPencilIconDisplayedInLanguageDropdown();
        // relationshippage.clickDeleteButtoninMultiLanguagePopup();
        // relationshippage.closeMultiLanguagePopupAddRelationship();
        // relationshippage.clickCloseButtonEditRelationshipPopup();
        // browser.waitForAngular();   
       
      }); 
    
  });