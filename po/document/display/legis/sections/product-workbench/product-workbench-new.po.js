var productworkbench = function() { 

    var ProductWorkbenchCollections = require('./collections.po.js');
    var ProductWorkbenchProducts = require('./products.po.js');

    
        this.collections = new ProductWorkbenchCollections();
        this.products = new ProductWorkbenchProducts();
    
    

    this.urlLoad=function(user,password){
        
        var loginpopup =  element(by.model('credentials.username'));
        loginpopup.isPresent().then(function(result) {

            if ( result ) {

                
                element(by.model('credentials.username')).sendKeys(user);
                element(by.model('credentials.password')).sendKeys(password);
                element(by.buttonText('Login')).click();

            }
            else{

            }
        });
        
    };
    
    var _expandButton =  element(by.id('lnkPWCollapsedArrow'));
    var _collapseButton =  element(by.id('lnkPWExpandedArrow'));
    
    this.isExpanded = function() {
      return _collapseButton.isPresent();
        };
           
    this.isCollapsed = function() {
         return _expandButton.isPresent();
        };
           
    this.expandSection = function() {
           _expandButton.click();
    };
       
    this.collapseSection = function() {
         _collapseButton.click();
    };
    
    var _errorMessage = element(by.id('txtPWNoEntries'));
    var _allButton = element(by.id('btnPWFilterViewAll'));
    var _displayMessage = element(by.css('[ng-if="rightPanel.versions.length == 0"]'));
    var _displayMessageNew = element(by.xpath('//div[@class="right-tab-content ng-scope"]//*[@class="rightpanel-notext ng-scope"]'));
                   
    this.displayMessageNew = function() {
            return _displayMessageNew.getInnerHtml();
    };

    this.displayMessage = function() {
            return _displayMessage.getText();
    };
    
    this.hasErrorMessage = function() {
            return _errorMessage.isDisplayed();
    };

    this.errorMessage = function() {
            return _errorMessage.getText();
    };

    this.showAll = function() {
            return _allButton.click();
    };

    this.isVisible = function() {
            return collections.isVisible || products.isVisible;
    };

    this.isShowAllButtonVisible = function() {
            return _allButton.isDisplayed();
    };

    this.isCollectionsButtonVisible = function() {
        return _showButton.isDisplayed();
    };

    var _showButton = element(by.id('btnPWFilterTotalCollections'));
    var _showButtonManual = element(by.id('btnPWFilterManualCollections'));
    var _showButtonAutomatic = element(by.id('btnPWFilterAutomaticCollections'));
    var _showButtonProduct = element(by.id('btnPWFilterProducts'));
    
    this.isAutomaticButtonVisible = function() {
                return _showButtonAutomatic.isDisplayed();
        };
 
        
    this.isManualButtonVisible = function() {
            return _showButtonManual.isDisplayed();
    };

    this.isProductButtonVisible = function() {
            return _showButtonProduct.isDisplayed();
        };
    
    
    var _collections = element(by.id('txtPWTotalCollectionsCounter'));
    
    this.clickCollections = function() {
            return _collections.click();
    };
    
    var _collectionPagination = element(by.id('PWManualCollectionsSectionPagination'));
    
    this.isCollectionPaginationAvailable = function() {
            return _collectionPagination.isDisplayed();
    };
    
    var _manual = element(by.id('btnPWFilterManualCollections'));
    
    this.clickManual = function() {
            return _manual.click();
    };
    
    var _manualPagination = element(by.id('PWManualCollectionsSectionPagination'));
    
    this.isManualPaginationAvailable = function() {
            return _manualPagination.isDisplayed();
    };
    
    var _automaticFilter = element(by.id('btnPWFilterAutomaticCollections'));
    
    this.clickAutomaticFilter = function() {
        return _automaticFilter.click();
    };
    
    var _automaticPagination = element(by.id('PWAutomaticCollectionsSectionPagination'));
    
    this.isAutomaticPaginationAvailable = function() {
            return _automaticPagination.isDisplayed();
    };
    
    var _productFilter = element(by.id('btnPWFilterProducts'));
    
    this.clickProductFilter = function() {
            return _productFilter.click();
    };
    
    var _productPagination = element(by.id('PWProductsSectionPagination'));
    
    this.isProductPaginationAvailable = function() {
            return _productPagination.isDisplayed();
    };
    
    this.isCollectionsAvailable = function() {
            return _collections.isDisplayed();
    };

    this.isManualButtonAvailable = function() {
            return _manual.isDisplayed();
    };

    this.isAutomaticButtonButtonAvailable = function() {
            return _automaticFilter.isDisplayed();
    };

    this.isProductButtonAvailable= function() {
            return _productFilter.isDisplayed();
    };

    this.clickDocumentStructureTab = function() {
        element.all(by.css('[ng-click="select()"]')).get(0).click();
 };

 var _quantityLabelManual = element(by.id('txtPWTotalManualCollectionsCounter'));
 this.quantityManual = function() {
        return _quantityLabelManual.getText();
                                 
        };

var _quantityLabelAutomatic = element(by.id('txtPWTotalAutomaticCollectionsCounter'));
this.quantityAutomatic = function() {
      return _quantityLabelAutomatic.getText();
   };

   var _deleteButtonList = element(by.css('[name="btnDeletePWManualCollectionItem"]'));
    this.deleteSingle = function() {
        return _deleteButtonList.isPresent();
    };            
        

};

module.exports = new productworkbench();