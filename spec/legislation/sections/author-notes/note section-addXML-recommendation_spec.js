var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1='GCMSQABANG-2741';
var testData = require('../../../../test-data/Jira_TestData/author-notes/'+ jiraNumber1 + '.js');
var loaded=testData[params.env][params.BU];


describe('Author Notes', function () {

    beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        authorNotes.urlLoad(params.valid_username,params.valid_password);
        
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


    //TC14 -Add 1.0 Editor - Aranzadi - Recomendación
    it('author Note XML Elementor Selector Dropdown and select Recommendation.'+jiraNumber1, function () { 
       
        globalpage.clickOnSectionButton(loaded.section,loaded.linktolink);
		globalpage.clickOnbuttonInsideSectionTable(loaded.add_button);
		
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            var currenthandle = handles[0];
            browser.switchTo().window(newTabHandle).then(function () {
        
                browser.sleep(1000);
                
                var note =authorNotes.clickonXMLorVisual('XML');
                expect(note).toEqual(true);

    
                //Verify Element selector dropdown displayed
		        var buttonValidated = rightpanelpage.isElementSelectorDropdownDisplayedInUnitPopUp();
                expect(buttonValidated).toEqual(true);
		
                //Select Recommendation from Element selector drop down
                rightpanelpage.dropDownOptionsOnXMLeditor(loaded.recommendation);
                
                //Verify the new xml
                var text_xml='<recomendacion></recomendacion><texto><parrafo>$position</parrafo></texto>';
                var actualXMLText = authorNotes.getXMLTextInUnitPopUp();
                expect(actualXMLText).toEqual(text_xml);
                
                authorNotes.clickOnXbutton();
                browser.sleep(1000);
                browser.close();
            }); 
            browser.switchTo().window(currenthandle); 
            browser.sleep(1000);
            globalpage.clickOnNavigationOrCloseButton('close');   
        });    
    });   
});