var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');
var billSection = require('../../../../po/document/display/legis/sections/bills-section/bills-new.po.js');

describe('Bill Section', function () {

	beforeEach(function () {
        
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.legislation.sections.bills.marginal_id_having_bills_1);
        billSection.urlLoad(params.valid_username,params.valid_password);
               
    });

    it('should verify deleting multiple rows from bill table', function () {
		
	    expect(billSection.isBillsSectionDisplayed()).toBeTruthy();
        //expect(billSection.isExpanded()).toEqual(false);
        var rowsBeforeDelete;
        var rowsAfterDeleteOneRecord;
		billSection.expandSection();
        expect(billSection.isExpanded()).toEqual(true);
        var rowcount = billSection.getTotalNoOfRowsInTable();
        rowsBeforeDelete = parseInt(rowcount,15);
        console.log(rowsBeforeDelete);
        billSection.clickViewAllLink();
        expect(billSection.isBillsTableDisplayed()).toBeTruthy();
        billSection.deleteMultipleRowsFromTable();
        //billSection.clickDeleteConfirmBtn();
        //billSection.closeTable();
        var rowcount = billSection.getTotalNoOfRowsInTable();
            rowsAfterDeleteOneRecord = parseInt(rowcount,15);
            console.log(rowsAfterDeleteOneRecord);
            diff = eval(rowsBeforeDelete-rowsAfterDeleteOneRecord);
           // expect(diff).toEqual(1);
        });
    
        
      
    it('should verify cancel button of delete confirmation from bill table', function () {
		
		expect(billSection.isBillsSectionDisplayed()).toBeTruthy();
       
        var rowsBeforeDelete;
        var rowsAfterDeleteOneRecord;
		billSection.expandSection();
        expect(billSection.isExpanded()).toEqual(true);
        var rowcount = billSection.getTotalNoOfRowsInTable();
            rowsBeforeDelete = parseInt(rowcount,15);
            console.log(rowsBeforeDelete);
            billSection.clickViewAllLink();
            expect(billSection.isBillsTableDisplayed()).toBeTruthy();
                
            billSection.deleteMultipleRowsFromTable();
            billSection.clickCancelButtonDelete();
            billSection.closeTable();
            var rowcount = billSection.getTotalNoOfRowsInTable();
            rowsAfterDeleteOneRecord = parseInt(rowcount,15);
            console.log(rowsAfterDeleteOneRecord);
            diff = eval(rowsBeforeDelete-rowsAfterDeleteOneRecord);
            // expect(diff).toEqual(0);
        });
});
                    