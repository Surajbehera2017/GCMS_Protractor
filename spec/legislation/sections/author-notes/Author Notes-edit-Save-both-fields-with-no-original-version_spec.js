var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-3304';
var testData = require('../../../../test-data/Jira_TestData/author-notes/'+ jiraNumber + '.js');
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

     //TC07 - Author Notes - Select Section and Section ID - Edit - Save both fields with original version
    it('edit-Save both fields with original version.'+jiraNumber, function () { 
        
        globalpage.clickOnSectionButton(loaded.section,loaded.linktolink);
        browser.sleep(2000);
		authorNotes.selectActionFromTable(loaded.action_button);
		
    	  browser.getAllWindowHandles().then(function(handles) {
          var newTabHandle = handles[1];
          var currentHandle = handles[0];
          browser.switchTo().window(newTabHandle).then(function () {
             
            browser.sleep(1000);
            authorNotes.selectAndAddUnitFromDropDown('PD','level');
            var a=['version','unit'];
            var b=['Original','PAR.ID'];

            //entering data in level('#') 
            for(var i=0;i<2;i++){
                authorNotes.enterDataInHashPopup(a[i],b[i]);
            }
            browser.waitForAngular();
            
            var plus = authorNotes.clickOnPlusIcon();
            expect(plus).toEqual(true);
            browser.sleep(1000);
            var typeofnote=authorNotes.selectSearchNameAndValue('Type of Note','Editorial-title');
            expect(typeofnote).toEqual(true);
            browser.sleep(1000);
            var note =authorNotes.clickonXMLorVisual('XML');
            expect(note).toEqual(true);
            var text_xml='<texto><parrafo>parrafo</parrafo></texto>';
            authorNotes.fontFormatOptionsOnXMLeditor('Replace');
            authorNotes.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(text_xml);
            var actualXMLText = authorNotes.getXMLTextInUnitPopUp();
            expect(actualXMLText).toEqual(text_xml);
            browser.sleep(1000);
            var sidebutton=authorNotes.clickOnSideBarButton('Accept');
            expect(sidebutton).toEqual(true);
            browser.sleep(1000);
            authorNotes.selectAnalyst("Addas Nascimento Oliveira [ ANALISTA ] ");
            globalpage.clickOnButtonForGlobal(loaded.save_button);
            
             
          });  
          browser.switchTo().window(currentHandle); 
          browser.sleep(3000);
          globalpage.clickOnNavigationOrCloseButton('close');
          
        });          
    });    
});