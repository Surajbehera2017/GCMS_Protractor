var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-2607';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];
var jiraNumber1='GCMSQABANG-2612';
var testData2 = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber1 + '.js');
var loaded2=testData2[params.env][params.BU];
var jiraNumber3 ='GCMSQABANG-2610';
var testData3 = require('../../../../test-data/Jira_TestData/Thesaurus/'+ jiraNumber3 + '.js');
var loaded3=testData3[params.env][params.BU];


describe('Thesaurus',function(){//('Import from summarization button', function () {

	beforeEach(function () {
         
       
        
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

	//02 - Import from summarization button - Target marginal with entries
     it('Import from summarization button - Target marginal with entries- 4120.'+jiraNumber, function () {
       
         browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);

        globalpage.clickOnSectionButton(loaded.leftpanel,loaded.clickbutton);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded.code);
        thesauruspage.enterMarginalIdImport('Year',loaded.year);
        thesauruspage.enterMarginalIdImport('N°',loaded.nfield);  
        globalpage.clickOnButtonForGlobal(loaded.button);
        thesauruspage.selectEntriesInImportPopup(loaded.checkbox);
        globalpage.clickOnButtonForGlobal(loaded.clickbutton);
        var validation=globalpage.isTablePresent();
        expect(validation).toEqual(true);
        globalpage.clickOnNavigationOrCloseButton('close');
        browser.sleep(1000);

        //deleting the added entries
        globalpage.expandSectionInLeftPanel(loaded.leftpanel);
        browser.sleep(1000);
        thesauruspage.clickOnGiveThesaurusType(loaded.checkbox);
        browser.sleep(1000);
        thesauruspage.selectNoOfRows(loaded.rowcount);
        browser.sleep(1000);
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
        browser.sleep(1000);
        globalpage.clickOnElement(loaded.yes_xpath);
        browser.sleep(1000);
        globalpage.clickOnNavigationOrCloseButton(loaded.close_button);
        browser.sleep(1000);


           
    }); 

    //06 - Import from table button - Marginal not found (present in GCMSQABANG-2607 test )
   var jiraNumber2='GCMSQABANG-2609';
     it(' Import from table button - Marginal not found - 2609 '+jiraNumber2.link(params.jiraURL+jiraNumber2), function () {
       
         browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);

        globalpage.expandSectionInLeftPanel(loaded.leftpanel);
        thesauruspage.clickOnGiveThesaurusType(loaded.type_1);
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.clickbutton);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded.code1);
        thesauruspage.enterMarginalIdImport('Year',loaded.year1);
        thesauruspage.enterMarginalIdImport('N°',loaded.nfield1);  
        globalpage.clickOnButtonForGlobal(loaded.button);
        var error_msg='This Document ID is not found. Please check the ID and try again.';
        var el = thesauruspage.ValidateErrormessage(error_msg);
        expect(el).toEqual(true);
       
    }); 
    
    //07 - Import from summarization button - Duplicated entry - Error
   var jiraNumber3 ='GCMSQABANG-2610';
    it(' Import from summarization button - Duplicated entry - Error - 4125 '+jiraNumber3.link(params.jiraURL+jiraNumber3), function () {
       
         browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded3.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);
        
        globalpage.clickOnSectionButton(loaded3.leftpanel,loaded3.clickbutton);
        browser.sleep(2000);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded3.code);
        thesauruspage.enterMarginalIdImport('Year',loaded3.year);
        thesauruspage.enterMarginalIdImport('N°',loaded3.nfield);  
        globalpage.clickOnButtonForGlobal(loaded3.button);
        browser.sleep(2000);
        thesauruspage.selectEntriesInImportPopup(loaded3.checkbox);
        globalpage.clickOnButtonForGlobal(loaded3.clickbutton);
        var validation=globalpage.isTablePresent();
        expect(validation).toEqual(true);
        globalpage.clickOnNavigationOrCloseButton(loaded3.close_button);
        browser.sleep(1000);

        //adding the duplicate entry
        globalpage.clickOnSectionButton(loaded3.leftpanel,loaded3.clickbutton);
        browser.sleep(2000);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded3.code);
        thesauruspage.enterMarginalIdImport('Year',loaded3.year);
        thesauruspage.enterMarginalIdImport('N°',loaded3.nfield);  
        globalpage.clickOnButtonForGlobal(loaded3.button);
        thesauruspage.selectEntriesInImportPopup(loaded3.checkbox);
        globalpage.clickOnButtonForGlobal(loaded3.clickbutton);
        var validation=globalpage.isTablePresent();
        expect(validation).toEqual(true);
        var error_msg ='There is already an entry associated with this concept.';
        var error_validation=thesauruspage.validateErrormessageAfterImport(error_msg);
        expect(error_validation).toEqual(true);
        globalpage.clickOnNavigationOrCloseButton(loaded3.close_button);
        browser.sleep(1000);

        //deleting the added entries
        globalpage.expandSectionInLeftPanel(loaded3.leftpanel);
        thesauruspage.clickOnGiveThesaurusType(loaded3.checkbox);
        thesauruspage.selectNoOfRows(loaded3.rowcount);
        browser.sleep(2000);
        thesauruspage.clickOnbuttonInsideSectionTable(loaded3.delete);
        globalpage.clickOnElement(loaded3.yes_xpath);
        browser.sleep(1000);

    }); 
    
     
    
     //09 - Import from summarization button - Inexistent Precept - Error
       var jiraNumber1='GCMSQABANG-2612';
    it('Import from summarization button - Inexistent Precept - Error - 4127 '+jiraNumber1.link(params.jiraURL+jiraNumber1), function () {
       
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded2.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);

         globalpage.clickOnSectionButton(loaded2.leftpanel,loaded2.clickbutton);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded2.code);
        thesauruspage.enterMarginalIdImport('Year',loaded2.year);
        thesauruspage.enterMarginalIdImport('N°',loaded2.nfield);  
        globalpage.clickOnButtonForGlobal(loaded2.button);
        thesauruspage.selectEntriesInImportPopup(loaded2.type_1);
        globalpage.clickOnButtonForGlobal(loaded2.clickbutton);
        var validation=globalpage.isTablePresent();
        expect(validation).toEqual(true);
        var error_msg='Error saving unit information:';
        browser.sleep(1000);
        var el = thesauruspage.validateErrormessageAfterImport(error_msg);
        expect(el).toEqual(true);
        
        });

    });
       
     //10 - Import from table button - Inexistent Precept - Error (Duplicated from GCMSQABANG-2612)
    /*var jiraNumber1='GCMSQABANG-2612';
     it('Import from table button - Inexistent Precept - Error - 4128 '+jiraNumber1.link(params.jiraURL+jiraNumber1), function () {
       
         browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded2.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);

        globalpage.expandSectionInLeftPanel(loaded2.leftpanel);
        thesauruspage.clickOnGiveThesaurusType(loaded2.type_1);
        thesauruspage.clickOnbuttonInsideSectionTable(loaded2.clickbutton);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded2.code);
        thesauruspage.enterMarginalIdImport('Year',loaded2.year);
        thesauruspage.enterMarginalIdImport('N°',loaded2.nfield); 
        globalpage.clickOnButtonForGlobal(loaded2.button);
        thesauruspage.selectEntriesInImportPopup(loaded2.type_1);
        thesauruspage.clickImportInPopup();
        var validation=globalpage.isTablePresent();
        expect(validation).toEqual(true);
        var error_msg='Error saving unit information:';
        browser.sleep(1000);
        var el = thesauruspage.validateErrormessageAfterImport(error_msg);
        expect(el).toEqual(true);
       
    });
    //08 - Import from table button - Duplicated entry - Error (Duplicated from GCMSQABANG-2610)
    var jiraNumber4='GCMSQABANG-2611';
    it(' Import from table button - Duplicated entry - Error - 4126 '+jiraNumber4.link(params.jiraURL+jiraNumber4), function () {
       
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password);

        globalpage.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.clickbutton);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded.code);
        thesauruspage.enterMarginalIdImport('Year',loaded.year);
        thesauruspage.enterMarginalIdImport('N°',loaded.nfield);  
        globalpage.clickOnButtonForGlobal(loaded.button);
        thesauruspage.selectEntriesInImportPopup(loaded.checkbox);
        thesauruspage.clickImportInPopup();
        browser.sleep(1000);
        var validation=globalpage.isTablePresent();
        expect(validation).toEqual(true);
        browser.sleep(1000);
        var button=thesauruspage.clickOnXbutton('classification');
        expect(button).toEqual(true);
        browser.sleep(5000);
             
        
        //adding the duplicate entry
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.clickbutton);
        var import_popup=globalpage.isTablePresent();
        expect(import_popup).toEqual(true);
        thesauruspage.enterMarginalIdImport('Code',loaded.code);
        thesauruspage.enterMarginalIdImport('Year',loaded.year);
        thesauruspage.enterMarginalIdImport('N°',loaded.nfield);  
        globalpage.clickOnButtonForGlobal(loaded.button);
        thesauruspage.selectEntriesInImportPopup(loaded.checkbox);
        thesauruspage.clickImportInPopup();
        var validation=globalpage.isTablePresent();
        expect(validation).toEqual(true);
        var error_msg ='There is already an entry associated with this concept.';
        var error_validation=thesauruspage.validateErrormessageAfterImport(error_msg);
        expect(error_validation).toEqual(true);
        var button=thesauruspage.clickOnXbutton('classification');
        expect(button).toEqual(true);
        browser.sleep(2000);
        globalpage.clickOnNavigationOrCloseButton(loaded.close_button);

         //deleting the added entries
        globalpage.expandSectionInLeftPanel(loaded.leftpanel);
        thesauruspage.clickOnGiveThesaurusType(loaded.checkbox);
        thesauruspage.selectNoOfRows(loaded.rowcount);
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
        globalpage.clickOnElement(loaded.yes_xpath);
        browser.sleep(1000);
        globalpage.clickOnNavigationOrCloseButton(loaded.close_button);

    });*/
    
    
    


    
    
    
    
    

    
