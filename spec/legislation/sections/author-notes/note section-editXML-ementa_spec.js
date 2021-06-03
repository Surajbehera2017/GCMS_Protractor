var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various BU's
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
// test data support for various BU's
var jiraNumber = 'GCMSQABANG-2742';
var testData = require('../../../../test-data/Jira_TestData/author-notes/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Author Notes', function () {

    beforeEach(function () {
      
       browser.ignoreSynchronization = false;
       var legisDocDisplayPage = new LegislationDocumentDisplayPage();
       legisDocDisplayPage.get(loadedData.marginal_id1);
       browser.sleep(5000);
       authorNotes.urlLoad(params.valid_username, params.valid_password);
       browser.sleep(5000);
       browser.waitForAngular();
                  
    });

    afterEach(function(){//Close additional tab
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[0]);
            for(var i=1;i<handles.length;i++){
            browser.switchTo().window(handles[i]).then(function () {
                browser.close();
                },function(error){
                    browser.switchTo().window(handles[0]);
                    });
                }
            browser.switchTo().window(handles[0]);
        });
    });
    
    /* TC15 -Add 1.0 Editor - Aranzadi - Ementa */
    it('author Note XML Elementor Selector Dropdown and select Ementa', function () { 
        
        browser.sleep(2000);
        global.clickOnSectionButton(loadedData.section, loadedData.btn);
        
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (Handle1) {
            browser.sleep(2000);
            browser.switchTo().window(Handle1[1]).then(function () {
                browser.sleep(3000);
                global.clickonXMLorVisual(loadedData.xml);
                //global.clickOnSelectXmlEditorAndclickOnOption();
                browser.sleep(3000);
                rightpanelpage.dropDownOptionsOnXMLeditor('Ementa');
                rightpanelpage.fillTextFieldsOfPopUpWindowInXMLEditor("Text", "Test");
                rightpanelpage.fillTextFieldsOfPopUpWindowInXMLEditor("Oficial", "Test");
                global.clickOnNavigationOrCloseButton('ok');
                browser.sleep(3000);
                global.isElementDisplayed("//span[text()='oficial']");
            })
            browser.switchTo().window(Handle1[0]);
        })

     });

});