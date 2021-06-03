var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


describe('Thesaurus',function(){//('Thesaurus-section-Add Page', function () {

	beforeAll(function () {
         
        browser.ignoreSynchronization = false;
       var legisDocDisplayPage = new LegislationDocumentDisplayPage();
      legisDocDisplayPage.get(testData.legislation.sections.thesaurus_section.marginal_id_First);
      thesauruspage.urlLoad();
        
	});
    
    afterAll(function() {
       
    browser.executeScript('window.sessionStorage.clear();'); //clear session
    browser.executeScript('window.localStorage.clear();');   //clear local storage
        
        
        
        
        
     });

     
     //CANNOT BE MAPPED
     
	xit('Saving Classification entry for more than one unit', function () {
        
        browser.waitForAngular();
        thesauruspage.clickadd();
        browser.waitForAngular();
        browser.getAllWindowHandles().then(function(handles) {
        var newTabHandle = handles[1];
        browser.switchTo().window(newTabHandle).then(function () {
            browser.sleep(3000);
        browser.waitForAngular();
        thesauruspage.clickMainUnit1();
        thesauruspage.clickAddUnit1();
        thesauruspage.clickMainUnit2();
        thesauruspage.clickAddUnit2();
        
            /*
        browser.waitForAngular();
        thesauruspage.clickElementSelectorDropdownFirst();
        expect(thesauruspage.getFirstTextDropdown).toContain('CNAE');   
        
        browser.waitForAngular();
        thesauruspage.clickElementSelectorDropdownSecond();
        expect(thesauruspage.getSecondTextDropdown).toContain('CONVENIOS');  
        
        browser.waitForAngular();
        thesauruspage.clickElementSelectorDropdownThird();
        expect(thesauruspage.getThirdTextDropdown).toContain('INDICE AYUDAS Y SUBVENCIONES');
        
        browser.waitForAngular();
        thesauruspage.clickElementSelectorDropdownFourth();
        expect(thesauruspage.getFourthTextDropdown).toContain('INDICE COMUN'); 
        
        
            */
       
        thesauruspage.sendTermKeyword();
        thesauruspage.enterKeyTerm();
        thesauruspage.clickonThesaurusTerm();
        thesauruspage.clickAddThesaurus();
        
        var addBtn = thesauruspage.isAddThesaurusPresent();
        if(addBtn = true)
            {
        expect(addBtn).toEqual(true);
            }
        
            
        thesauruspage.clickOKinPopup();
        thesauruspage.clickCancelButton();
        });
        
        browser.switchTo().window(handles[0]);
        browser.sleep(3000);
        browser.waitForAngular();
        thesauruspage.clickViewAllLink();
        thesauruspage.clickShowFilters();
            
        var pickerDue = element(by.model("analystDate"));

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
       var yyyy = today.getFullYear();

        if(dd<10) {
        dd='0'+dd 
        } 

        if(mm<10) {
         mm='0'+mm
        } 

       today = dd+'/'+mm+'/'+yyyy;

       pickerDue.clear();
       pickerDue.sendKeys(today);    
        
       thesauruspage.enterKeyFilter();
       thesauruspage.selectAllCheckBox();
       thesauruspage.clickDelete();
      var yes = thesauruspage.isYesToDelete();
            if(yes = true)
                {
       expect(yes).toEqual(true);             
                }
       thesauruspage.clickYesToDelete();
       thesauruspage.closeViewAll();
       
            
        });
      
    });
       
});