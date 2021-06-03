var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');
var billSection = require('../../../../po/document/display/legis/sections/bills-section/bills-new.po.js');

describe('Bill Section', function () {

    beforeAll(function () {
        
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.legislation.sections.bills.marginal_id_having_bills_1);
        billSection.urlLoad(params.valid_username,params.valid_password);
               
    });
	
    it('should verify bills section and mandatory error messages and editing the fields and saving the document', function () {
       	
        expect(billSection.isBillsSectionDisplayed).toBeTruthy();
        billSection.expandSection();
        expect(billSection.isExpanded()).toEqual(true);
        expect(billSection.isAddButtonDisplayed()).toBeTruthy();
        expect(billSection.isLegislatureDisplayed()).toBeTruthy();
        expect(billSection.isProcessingTypeIsDisplayed()).toBeFalsy();
        expect(billSection.isSettingDateIsDisplayed()).toBeFalsy();
        expect(billSection.isCompetentCommissionIsDisplayed()).toBeFalsy();
            //expect(billSection.isViewAllIsDisplayed).toBeTruthy();
            
            expect(billSection.numberOfEntriesInLegislature()).toEqual(4);
            expect(billSection.numberOfEntriesInProcessingType()).toEqual(12);
            //expect(billSection.numberOfEntriesInCompetentCommission).toEqual(45);
            
            billSection.clearFieldSettingDate();
            billSection.save();
            expect(billSection.errorMsgSettingDate()).toEqual('The field qualification date (bills) is mandatory');
            billSection.enterFieldSettingDate();
                        
                  
            browser.sleep(15000);
            billSection.clearCompetentCommission();
            billSection.save();
            expect(billSection.errorMsgCompetentCommission()).toEqual('The field committee (bills) is mandatory');
               
            billSection.editLegislature();
            billSection.editProcessingType();
            billSection.editSettingDate();
            billSection.editCompetentCommission();
            billSection.saveAndConfirm();
            billSection.expandSection();
            browser.ignoreSynchronization = false;
        });
    });   
        
	