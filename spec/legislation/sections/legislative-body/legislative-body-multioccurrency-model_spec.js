 var params = browser.params;
//  i18n basic support
//  var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
// var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
 var legisDocEditPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
// var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var legislativebodyEditionNew = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2635';
var jiraNumber1 = 'GCMSQABANG-2631';
var jiraNumber2 = 'GCMSQABANG-2637';
var jiraNumber3 = 'GCMSQABANG-2630';
var jiraNumber4 = 'GCMSQABANG-2636';
var jiraNumber5 = 'GCMSQABANG-2640';
var jiraNumber6 = 'GCMSQABANG-2642';
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var testData = require('../../../../test-data/Jira_TestData/Legislation_Body/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];
describe('Legislation-Body', function () {

    
    beforeEach(function () {
        browser.ignoreSynchronization = false;
        // legisDocEditPage.get(testData.legislation.sections.legislativebody.marginal_legisnum_id);
        legisDocEditPage.get(loaded.marginal_id);
        legislativebodyEdition.urlLoad(params.valid_username,params.valid_password);
    });

   it('should verify the modle value Multioccurrency NOR .'+jiraNumber, function () {
        // var legislativebodypage = new LegislationDocumentEditionPage();
        // var legislativebodySection = legislativebodypage.sections.legislativeBodySection;
        
        // legislativebodyEdition.expandSection();
        // expect(legislativebodyEdition.isExpanded()).toEqual(true);
        // legislativebodyEdition.clicklegisNumberconnectorComboBox();
        // legislativebodyEdition.selectlegisNumberConnector(2);
        // legislativebodyEdition.clicklegisnumModelComboBox();
        // legislativebodyEdition.selectlegisNumberModel(1);
        // legislativebodyEdition.legisNumber(testData.legislation.sections.legislativebody.modify_legis_num);
        // legislativebodyEdition.legispreviousNote(testData.legislation.sections.legislativebody.modify_legis_previousNote);
        // legislativebodyEdition.legisNote(testData.legislation.sections.legislativebody.modify_legis_note);
        // legislativebodyEdition.legisYear(testData.legislation.sections.legislativebody.modify_legis_year);
        // LegislationDocumentEditionPageObject.save();
        // expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
        legislativebodyEdition.expandSection();
        expect(legislativebodyEdition.isExpanded()).toEqual(true);
        browser.sleep(1000);
        global.selectValueDropdown(loaded.sectionname,loaded.norvalue);
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(1000);
        global.clickSaveorCancel(loaded.savebutton);
        browser.sleep(2000);  
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);

        console.log("After save");
        browser.sleep(1000);              
        legislativebodyEdition.expandSection();
        expect(legislativebodyEdition.isExpanded()).toEqual(true);
        browser.sleep(1000);
        expect(legislativebodyEditionNew.getTextElement(loaded.Text)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Text1));
        browser.sleep(1000);
        console.log("After getting nor");
        // expect(legislativebodyEditionNew.getTextElement(loaded.Year)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Year1));
        // browser.sleep(1000);
        expect(legislativebodyEditionNew.getTextElement(loaded.Note)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Note1));
        browser.sleep(1000);
        expect(legislativebodyEditionNew.getTextElement(loaded.FullYear)).toEqual(legislativebodyEditionNew.getTextElement(loaded.FullYear1));
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(1000);
        global.clickSaveorCancel(loaded.savebutton);
        browser.sleep(4000);
        



       });


 it('should verify the modle vlaue Multioccurrency NAP .'+jiraNumber1, function () {
        
//         legislativebodyEdition.expandSection();
//         expect(legislativebodyEdition.isExpanded()).toEqual(true);
//         legislativebodyEdition.clicklegisNumberconnectorComboBox();
//         legislativebodyEdition.selectlegisNumberConnector(2);
//         legislativebodyEdition.clicklegisnumModelComboBox();
//         legislativebodyEdition.selectlegisNumberModel(3);
//         legislativebodyEdition.legisNumber(testData.legislation.sections.legislativebody.modify_legis_num);
//         legislativebodyEdition.legispreviousNote(testData.legislation.sections.legislativebody.modify_legis_previousNote);
//         legislativebodyEdition.legisNote(testData.legislation.sections.legislativebody.modify_legis_note);
//         legislativebodyEdition.legisYear(testData.legislation.sections.legislativebody.modify_legis_year);
//         LegislationDocumentEditionPageObject.save();
//         expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
legislativebodyEdition.expandSection();
expect(legislativebodyEdition.isExpanded()).toEqual(true);
browser.sleep(1000);
global.selectValueDropdown(loaded.sectionname,loaded.napvalue);
browser.sleep(1000);
collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
browser.sleep(1000);
global.clickSaveorCancel(loaded.savebutton);
browser.sleep(2000);  
rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
browser.sleep(1000);              
legislativebodyEdition.expandSection();
expect(legislativebodyEdition.isExpanded()).toEqual(true);
browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.Text)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Text1));
browser.sleep(1000);
// expect(legislativebodyEditionNew.getTextElement(loaded.Year)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Year1));
// browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.Note)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Note1));
browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.FullYear)).toEqual(legislativebodyEditionNew.getTextElement(loaded.FullYear1));
browser.sleep(1000);
collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
browser.sleep(1000);
global.clickSaveorCancel(loaded.savebutton);
browser.sleep(4000);

           });
                
                       
     it('should verify the modle vlaue Multioccurrency PNA .'+jiraNumber2, function () {
//         var legislativebodypage = new LegislationDocumentEditionPage();
//         var legislativebodySection = legislativebodypage.sections.legislativeBodySection;
        
//         legislativebodyEdition.expandSection();
//         expect(legislativebodyEdition.isExpanded()).toEqual(true);
//         legislativebodyEdition.clicklegisNumberconnectorComboBox();
//         legislativebodyEdition.selectlegisNumberConnector(2);
//         legislativebodyEdition.clicklegisnumModelComboBox();
//         legislativebodyEdition.selectlegisNumberModel(4);
//         legislativebodyEdition.legisNumber(testData.legislation.sections.legislativebody.modify_legis_num);
//         legislativebodyEdition.legispreviousNote(testData.legislation.sections.legislativebody.modify_legis_previousNote);
//         legislativebodyEdition.legisNote(testData.legislation.sections.legislativebody.modify_legis_note);
//         legislativebodyEdition.legisYear(testData.legislation.sections.legislativebody.modify_legis_year);
//         LegislationDocumentEditionPageObject.save();
//         expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
legislativebodyEdition.expandSection();
expect(legislativebodyEdition.isExpanded()).toEqual(true);
browser.sleep(1000);
global.selectValueDropdown(loaded.sectionname,loaded.pnavalue);
browser.sleep(1000);
collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
browser.sleep(1000);
global.clickSaveorCancel(loaded.savebutton);
browser.sleep(2000);  
rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
browser.sleep(1000);              
legislativebodyEdition.expandSection();
expect(legislativebodyEdition.isExpanded()).toEqual(true);
browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.Text)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Text1));
browser.sleep(1000);
// expect(legislativebodyEditionNew.getTextElement(loaded.Year)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Year1));
// browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.Note)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Note1));
browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.FullYear)).toEqual(legislativebodyEditionNew.getTextElement(loaded.FullYear1));
browser.sleep(1000);
collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
browser.sleep(1000);
global.clickSaveorCancel(loaded.savebutton);
browser.sleep(4000); 
          

});
            
    
     it('should verify the modle vlaue Multioccurrency NUM .'+jiraNumber3, function () {
 
legislativebodyEdition.expandSection();
expect(legislativebodyEdition.isExpanded()).toEqual(true);
browser.sleep(1000);
global.selectValueDropdown(loaded.sectionname,loaded.numvalue);
browser.sleep(1000);
collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
browser.sleep(1000);
global.clickSaveorCancel(loaded.savebutton);
browser.sleep(2000);  
rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
browser.sleep(1000);              
legislativebodyEdition.expandSection();
expect(legislativebodyEdition.isExpanded()).toEqual(true);
browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.Text)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Text1));
browser.sleep(1000);
// expect(legislativebodyEditionNew.getTextElement(loaded.Year)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Year1));
// browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.Note)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Note1));
browser.sleep(1000);
expect(legislativebodyEditionNew.getTextElement(loaded.FullYear)).toEqual(legislativebodyEditionNew.getTextElement(loaded.FullYear1));
browser.sleep(1000);
collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
browser.sleep(1000);
global.clickSaveorCancel(loaded.savebutton);
browser.sleep(4000);
//         legislativebodyEdition.expandSection();
//         expect(legislativebodyEdition.isExpanded()).toEqual(true);
//         legislativebodyEdition.clicklegisNumberconnectorComboBox();
//         legislativebodyEdition.selectlegisNumberConnector(2);
//         legislativebodyEdition.clicklegisnumModelComboBox();
//         legislativebodyEdition.selectlegisNumberModel(5);
//         legislativebodyEdition.legisNumber(testData.legislation.sections.legislativebody.modify_legis_num);
//         legislativebodyEdition.legispreviousNote(testData.legislation.sections.legislativebody.modify_legis_previousNote);
//         legislativebodyEdition.legisNote(testData.legislation.sections.legislativebody.modify_legis_note);
//         legislativebodyEdition.legisYear(testData.legislation.sections.legislativebody.modify_legis_year);
//         LegislationDocumentEditionPageObject.saveWIConfirm();
//         expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
     });
                
     it('should verify the modle vlaue Multioccurrency PAN .'+jiraNumber4, function () {

        legislativebodyEdition.expandSection();
        expect(legislativebodyEdition.isExpanded()).toEqual(true);
        browser.sleep(1000);
        global.selectValueDropdown(loaded.sectionname,loaded.panvalue);
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(1000);
        global.clickSaveorCancel(loaded.savebutton);
        browser.sleep(2000);  
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(1000);              
        legislativebodyEdition.expandSection();
        expect(legislativebodyEdition.isExpanded()).toEqual(true);
        browser.sleep(1000);
        expect(legislativebodyEditionNew.getTextElement(loaded.Text)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Text1));
        browser.sleep(1000);
        // expect(legislativebodyEditionNew.getTextElement(loaded.Year)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Year1));
        // browser.sleep(1000);
        expect(legislativebodyEditionNew.getTextElement(loaded.Note)).toEqual(legislativebodyEditionNew.getTextElement(loaded.Note1));
        browser.sleep(1000);
        expect(legislativebodyEditionNew.getTextElement(loaded.FullYear)).toEqual(legislativebodyEditionNew.getTextElement(loaded.FullYear1));
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(1000);
        global.clickSaveorCancel(loaded.savebutton);
        browser.sleep(4000);       

//         legislativebodyEdition.expandSection();
//         expect(legislativebodyEdition.isExpanded()).toEqual(true);
//         legislativebodyEdition.clicklegisNumberconnectorComboBox();
//         legislativebodyEdition.selectlegisNumberConnector(2);
//         legislativebodyEdition.clicklegisnumModelComboBox();
//         legislativebodyEdition.selectlegisNumberModel(6);
//         legislativebodyEdition.legisNumber(testData.legislation.sections.legislativebody.modify_legis_num);
//         legislativebodyEdition.legispreviousNote(testData.legislation.sections.legislativebody.modify_legis_previousNote);
//         legislativebodyEdition.legisNote(testData.legislation.sections.legislativebody.modify_legis_note);
//         legislativebodyEdition.legisYear(testData.legislation.sections.legislativebody.modify_legis_year);
//         LegislationDocumentEditionPageObject.save();
//         expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
      });
                
    
               
                      
      it('should verify the Multioccurrency plural selected & unselected.'+jiraNumber5, function () {
        legislativebodyEdition.expandSection();
        expect(legislativebodyEdition.isExpanded()).toEqual(true);
        browser.sleep(1000);
        global.clickOnElement(loaded.pluralcheck);
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(1000);
        global.clickSaveorCancel(loaded.savebutton);
        browser.sleep(4000);
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(1000);
        legislativebodyEdition.expandSection();
        expect(legislativebodyEdition.isExpanded()).toEqual(true);
        browser.sleep(1000);
        global.clickOnElement(loaded.pluralcheck);
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(1000);
        global.clickSaveorCancel(loaded.savebutton);
        browser.sleep(4000);


        
//         legislativebodyEdition.expandSection();
//         expect(legislativebodyEdition.isExpanded()).toEqual(true);
        //  var radiobutton=legislativebodyEdition.pluralSelect();
//         if(radiobutton=true){
//         browser.sleep(3000);
//         legislativebodyEdition.clickPlural();
//         }
//         legislativebodyEdition.clicklegisNumberconnectorComboBox();
//         legislativebodyEdition.selectlegisNumberConnector(2);
//         legislativebodyEdition.clicklegisnumModelComboBox();
//         legislativebodyEdition.selectlegisNumberModel(2);
//         legislativebodyEdition.legisNumber(testData.legislation.sections.legislativebody.modify_legis_num);
//         legislativebodyEdition.legispreviousNote(testData.legislation.sections.legislativebody.modify_legis_previousNote);
//         legislativebodyEdition.legisNote(testData.legislation.sections.legislativebody.modify_legis_note);
//         legislativebodyEdition.legisYear(testData.legislation.sections.legislativebody.modify_legis_year);
//         LegislationDocumentEditionPageObject.save();
                               
     });
                           
                       
     it('should verify the Multioccurrency Precision.'+jiraNumber6, function () {
        
        
     legislativebodyEdition.expandSection();
     expect(legislativebodyEdition.isExpanded()).toEqual(true);
     browser.sleep(1000);
     collectiveAgreementSection.enterDate(loaded.provision,loaded.date);
     browser.sleep(1000);
     collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
     browser.sleep(1000);
     global.clickSaveorCancel(loaded.savebutton);
     browser.sleep(4000);
     rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
     browser.sleep(1000);
     legislativebodyEdition.expandSection();
     expect(legislativebodyEdition.isExpanded()).toEqual(true);
     expect(legislativebodyEditionNew.getTextElement(loaded.FullYear)).toEqual(legislativebodyEditionNew.getTextElement(loaded.FullYear1));
     browser.sleep(1000);
     collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
     browser.sleep(1000);
     global.clickSaveorCancel(loaded.savebutton);
     browser.sleep(4000);
            
//     legislativebodyEdition.clicklegisNumberconnectorComboBox();
//     legislativebodyEdition.selectlegisNumberConnector(2);
//     legislativebodyEdition.clicklegisnumModelComboBox();
//     legislativebodyEdition.selectlegisNumberModel(2);
//     legislativebodyEdition.legisNumber(testData.legislation.sections.legislativebody.modify_legis_num);
//     legislativebodyEdition.legispreviousNote(testData.legislation.sections.legislativebody.modify_legis_previousNote);
//     legislativebodyEdition.legisNote(testData.legislation.sections.legislativebody.modify_legis_note);
//     browser.waitForAngular();
//     //legislativebodyEdition.legisYear(testData.legislation.sections.legislativebody.modify_legis_year);
//     legislativebodyEdition.clickprovisonDateButton();
//     expect(legislativebodyEdition.hasconnectorComboBox()).toEqual(true);
//     legislativebodyEdition.clickconnectorComboBox();
//     legislativebodyEdition.selectconnector(2);
//     browser.waitForAngular();
//     LegislationDocumentEditionPageObject.saveWIConfirm();

  });

});
                            
       
                            
                












