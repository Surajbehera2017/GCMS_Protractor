var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');
 
var LegislationBillsSection = function () {
    
    this.expandable = new ExpandableToggle('linkUncollapseBillsSection', 'linkCollapseBillsSection');
    var _legislatureCode = element(by.model('sectionBillsController.document.data.document.legislatura.code'));
    var _processingType = element(by.model('sectionBillsController.model.tipoTramitacion.code'));
    
    this.selectLegislature = function (positionNum) {
		if (positionNum) {
			_legislatureCode.click().then(function(result){   
				//var options = 
				_legislatureCode.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};
    };
    
    this.selectProcessingType = function (positionNum) {
		if (positionNum) {
			_processingType.click().then(function(result){   
				//var options = 
				_processingType.all(protractor.By.tagName('option')).then(function (options) {
					options[positionNum].click();
				});
			});
		};
    };
    
    this.selectCompetentCommission= function(data){
        element(by.css('[model="sectionBillsController.document.data.document.comisionCompetente"] a[name="lnkSearchDropdown"]')).click();
		element(by.css('[model="sectionBillsController.document.data.document.comisionCompetente"] input[ng-model="searchtext"]')).sendKeys(data);
		element(by.css('[model="sectionBillsController.document.data.document.comisionCompetente"] input[ng-model="searchtext"]')).sendKeys(protractor.Key.ENTER);
	    element(by.cssContainingText('[model="sectionBillsController.document.data.document.comisionCompetente"] [ng-click="select(item)"]',data)).click();
    };

    this.writeSettingDate= function(data){
        element(by.css('[date="sectionBillsController.document.data.document.fechaCalificacion"] input')).clear();
        element(by.css('[date="sectionBillsController.document.data.document.fechaCalificacion"] input')).sendKeys(data);  
    };

};

module.exports = new LegislationBillsSection;