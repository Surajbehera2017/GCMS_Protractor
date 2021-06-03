var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1='GCMSQABANG-2744';
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


    //TC09 -Add 1.0 Editor - Aranzadi - Texto de nota
    it('author Note XML Elementor Selector Dropdown and select Texto de nota.'+jiraNumber1, function () { 
       
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
		
                //Select repeal from Element selector drop down
            
                rightpanelpage.dropDownOptionsOnXMLeditor(loaded.clause);


                //Verify XML Insert Modal Window is displayed
                var xmlInsertWindow = rightpanelpage.isXMLEditorInsertModalWindowDisplayed();
                expect(xmlInsertWindow).toEqual(true);
                
                //Write data to input fields in Insert Modal pop up & click OK
                rightpanelpage.sendKeysToXMLEditorInsertModalWindow(loaded.textfield_value,0);
                rightpanelpage.sendKeysToXMLEditorInsertModalWindow(loaded.idfeild_value,1);
                rightpanelpage.clickOnApplyOrCloseButton('ok');
                
                
                //verify the xml
                var text_xml='<clause id="id">TEST</clause><texto><parrafo>$position</parrafo></texto>';
                var actualXMLText = authorNotes.getXMLTextInUnitPopUp();
                expect(actualXMLText).toEqual(text_xml);
                
                authorNotes.clickOnXbutton();
                browser.sleep(1000);
                browser.close();
            }); 
              
        });    
    });   
});