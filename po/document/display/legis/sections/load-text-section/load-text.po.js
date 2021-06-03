var ExpandableToggle = require('../expandable-toggle.po.js');

 
var LegislationLoadTextSection = function () {
	this.expandable = new ExpandableToggle('linkUncollapseGrantsAndSubsidiesSection', 'linkCollapseGrantsAndSubsidiesSection');
    this.expandableEdit = new ExpandableToggle('linkUncollapseGrantsAndSubsidiesEditSection', 'linkCollapseGrantsAndSubsidiesEditSection');
};

LegislationLoadTextSection.prototype = Object.create({}, {
    
    _documentStructureTab:{
        get: function (){
            return element(by.css('[active="rightPanel.viewTabs.structure"]'));
        }
    },
    
    _structureActions: {
        get: function (){
            return element(by.css('[class^="dropdown-toggle btn btn-default structureActionsButton"]'));
        }
    },
    
    _addNewUnitFromEditor: {
        get: function (){
            return element.all(by.css('[ng-repeat="action in structureCtrl.actions"]')).get(2);
        }
    },
    
    _duplicateStructure: {
        get: function (){
            return element.all(by.css('[ng-repeat="action in structureCtrl.actions"]')).get(4);
        }
    },
    
    _importFromXml: {
        get: function (){
            return element.all(by.css('[ng-repeat="action in structureCtrl.actions"]')).get(1);
        }
    },
    
    clickOnDuplicateStructure:{
        get: function (){
            return this._duplicateStructure.click();
        }
    },
    
    clickOnImportFromXml:{
        get: function (){
            return this._importFromXml.click();
        }
    },
    
    clickCancelButtonOnImportFromXmlPopup:{
        get: function (){
            return element(by.css('[translate="Common.Cancel"]')).click();
        }
    },
    
    clickXButtonOnImportFromXmlPopup:{
        get: function (){
            return element.all(by.css('[class="bento-icon-close-x"]')).get(1).click();
        }
    },
    
    rightClickUnitMenu:{
        get: function (){
            browser.actions().mouseMove(element(by.css('[ng-click="onSelect(node)"] [compile="expandingProperty.cellTemplate"]'))).perform();
            return browser.actions().click(protractor.Button.RIGHT).perform();
            
        }
    },
    
    clickOnImportFromXmlFromContextMenu: {
        get: function (){
            webdriver = browser.driver;
            //browser.actions().mouseMove(element(by.css('[ng-click="onSelect(node)"] [compile="expandingProperty.cellTemplate"]'))).perform();
            
            /*return element.all(by.css('*')).filter(function(elem, index){
                return elem.getText().then(function(text){
                    console.log(text);
                    return text==='Import from XML';
                });
            }).first().click();*/
            
            return browser.actions().sendKeys(Keys.ARROW_DOWN).perform();
            
            
            
        }
    },
    
    _nextStructureDateField:{
        get: function (){
            return element(by.css('[ng-model="date"]'));
        }
    },
    
    enterNextStructureDateField:{
        value: function (dt){
            return this._nextStructureDateField.sendKeys(dt);
        }
    },
    
    _okBtnOnDuplicateStrucPopup:{
        get: function (){
            return element(by.css('[ng-click="actionDuplicate()"]'));
        }
    },
    
    clickOnOkBtnOnDuplicateStrucPopup:{
        get: function (){
            return this._okBtnOnDuplicateStrucPopup.click();
        }
    },
    
    getErrorMessageOnDuplicateStructure:{
        get: function (){
            return element(by.css('[ng-repeat="message in messages"] [class="ng-binding"]')).getText();
        }
    },
    
    clickOnDocumentStructureTab:{
        get: function (){
            return this._documentStructureTab.click();
        }
    },
    
    isDisplayedDocumentStructureTab:{
        get: function (){
            return this._documentStructureTab.isDisplayed();
        }
    },
    
    clickOnStructureActions:{
        get: function (){
            return this._structureActions.click();
        }
    },
    
    clickOnAddNewUnitFromEditor: {
        get: function (){
            return this._addNewUnitFromEditor.click();
        }
    },
    
    _saveOnXEditor:{
        get: function (){
            return element(by.css('[name="btnConfirmationDialogAccept"]'));
        }
    },
    
    isSaveOnXEditorDisplayed:{
        get: function (){
            return this._saveOnXEditor.isDisplayed();
        }
    },
    
    _cancelOnXEditor:{
        get: function (){
            return element(by.css('[name="btnConfirmationDialogCancel"]'));
        }
    },
    
    isCancelOnXEditorDisplayed: {
        get: function (){
            return this._cancelOnXEditor.isDisplayed();
        }
    },
    
    clickOnCancelOnXEditorDisplayed: {
        get: function (){
            return this._cancelOnXEditor.click();
        }
    },
    _documentTextOnXEditor: {
        get: function (){
            return element.all(by.css('[class="nav nav-pills"] a')).get(0);
        }
    },
    
    isDocumentTextOnXEditorDisplayed:{
        get: function (){
            return this._documentTextOnXEditor.getText().then(function(text){
                if(text=='DOCUMENT TEXT'){
                    return true;
                }else{
                    return false;
                }
            });
        }
    },
    _internalNoteOnXEditor: {
        get: function (){
            return element.all(by.css('[class="nav nav-pills"] a')).get(1);
        }
    },
    
    isInternalNoteOnXEditorDisplayed: {
        get: function (){
            return this._internalNoteOnXEditor.getText().then(function(text){
                if(text=='INTERNAL NOTE'){
                    return true;
                }else{
                    return false;
                }
            });
        }
    },
    
    _unitRow:{
        get: function (){
            return element.all(by.css('[ng-repeat="node in tree_nodes track by node.__hashKey__ "]')).get(1).element(by.css('span'));
        }
    },
    
    getFirstUnitRow:{
        get: function (){
            return this._unitRow;
        }
    },
    
    clickFirstUnitRow: {
        get: function (){
            return this._unitRow.click();
        }
    },
    
    _originalTextTab: {
        get: function (){
            return element(by.css('[active="rightPanel.viewTabs.origText"]'));
            
        }
    },
    
    clickOnOriginalTextTab: {
        get: function (){
            return this._originalTextTab.click();
        }
    },
    
    getColorOfOriginalText: {
        get: function (){
            return element(by.css('[active="rightPanel.viewTabs.origText"]>a')).getCssValue('color');
        }
    },
    
    _importPDFButton: {
        get: function (){
            return element(by.css('[id="btnImportOriginalTextFilePdf"]'));
        }
    },
    
    isDisplayedImportPDFButton: {
        get: function (){
            return this._importPDFButton.isDisplayed();
        }
    },
    
    _loadXmlButton: {
        get: function (){
            return element(by.css('[id="btnImportOriginalTextFileXml"]'));
        }
    },
    
    isDisplayedLoadXmlButton: {
        get: function (){
            return this._loadXmlButton.isDisplayed();
        }
    },
    
    _originalTextPdfDiv:{
        get: function (){
            return element(by.css('[id="originalTextDiv"]'));
        }
    },
    
    isDisplayedOriginalTextPdfDiv: {
        get: function (){
            return this._originalTextPdfDiv.isDisplayed();
        }
    },
    
    isDisplayedContextIndexNoteIcon: {
        get: function (){
            
            return element.all(by.css('[ng-class="{ \'hide-icon\': !node.hasContextIndex }"]')).filter(function(elem, index) {
  return elem.isDisplayed();
            
}).count().then(function(c){
                return c > 0;
            });
        
        }
    },
    
    isDisplayedRelationshipNoteIcons: {
        get: function (){
            
            return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"]')).filter(function(elem, index) {
                
                
  return elem.isDisplayed();
            
}).count().then(function(c){
                console.log("R ICONS = " + c);
                return c > 0;
            });
        
        }
    },
    
    clickOnRelationShipIconHavingAllOptions:{
        get: function (){
            
            return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"]')).filter(function(elem, index) {
                
                return elem.isDisplayed().then(function(flag){
                    if(flag === true){
                        return elem.click().then(function(){
                        return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"][aria-expanded="true"] + [ng-if="node.hasMenuNoConsolidate"]>li>a')).count().then(function(co){
                            console.log("SubItems = " + co);
                            elem.click();
                            if(co>6){
                                return true;
                            }else{
                                return false;
                            }
                        });
                    });
                    }else{
                        return false;
                    }
                    
                });
                
                
            
}).first().click();
        
        }
    },
    
    clickOnRelationshipAll:{
        get: function (){
            
            
                return element(by.css('[class="dropdown open"]>ul>li>[ng-click="structureCtrl.viewRelationShipAllNoConsolidate(false,node)"]')).click();
           
        
        }
    },
    
    clickOnEffectiveness:{
        get: function (){
            
            return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"]')).filter(function(elem, index) {
                
                return elem.isDisplayed().then(function(flag){
                    if(flag === true){
                        return elem.click().then(function(){
                        return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"][aria-expanded="true"] + [ng-if="node.hasMenuNoConsolidate"]>li>a')).count().then(function(co){
                            console.log("SubItems = " + co);
                            elem.click();
                            if(co>6){
                                return true;
                            }else{
                                return false;
                            }
                        });
                    });
                    }else{
                        return false;
                    }
                    
                });
                
                
            
}).first().click().then(function(){
                return element(by.css('[class="dropdown open"]>ul>li>[ng-click="structureCtrl.viewRelationShipTypeNoConsolidate(false,\'\',\'consolidations\', node)"]')).click();
            });
        
        }
    },
    
    clickSource:{
        get: function (){
            
            return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"]')).filter(function(elem, index) {
                
                return elem.isDisplayed().then(function(flag){
                    if(flag === true){
                        return elem.click().then(function(){
                        return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"][aria-expanded="true"] + [ng-if="node.hasMenuNoConsolidate"]>li>a')).count().then(function(co){
                            console.log("SubItems = " + co);
                            elem.click();
                            if(co>6){
                                return true;
                            }else{
                                return false;
                            }
                        });
                    });
                    }else{
                        return false;
                    }
                    
                });
                
                
            
}).first().click().then(function(){
                return element(by.css('[class="dropdown open"]>ul>li>[ng-click="structureCtrl.viewRelationShipTypeNoConsolidate(false,\'source\',\'consolidations\', node)"]')).click();
            });
        
        }
    },
    
    clickOnTarget:{
        get: function (){
            
            return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"]')).filter(function(elem, index) {
                
                return elem.isDisplayed().then(function(flag){
                    if(flag === true){
                        return elem.click().then(function(){
                        return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"][aria-expanded="true"] + [ng-if="node.hasMenuNoConsolidate"]>li>a')).count().then(function(co){
                            console.log("SubItems = " + co);
                            elem.click();
                            if(co>6){
                                return true;
                            }else{
                                return false;
                            }
                        });
                    });
                    }else{
                        return false;
                    }
                    
                });
                
                
            
}).first().click().then(function(){
                return element(by.css('[class="dropdown open"]>ul>li>[ng-click="structureCtrl.viewRelationShipTypeNoConsolidate(false,\'target\',\'consolidations\', node)"]')).click();
            });
        
        }
    },
    
    clickOnAnnotations: {
        get: function (){
            
            return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"]')).filter(function(elem, index) {
                
                return elem.isDisplayed().then(function(flag){
                    if(flag === true){
                        return elem.click().then(function(){
                        return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"][aria-expanded="true"] + [ng-if="node.hasMenuNoConsolidate"]>li>a')).count().then(function(co){
                            console.log("SubItems = " + co);
                            elem.click();
                            if(co>6){
                                return true;
                            }else{
                                return false;
                            }
                        });
                    });
                    }else{
                        return false;
                    }
                    
                });
                
                
            
}).first().click().then(function(){
                return element(by.css('[class="dropdown open"]>ul>li>[ng-click="structureCtrl.viewRelationShipTypeNoConsolidate(false,\'\',\'annotations\', node)"]')).click();
            });
        
        }
    },
    
    
    clickOnAnnotationsSource: {
        get: function (){
            
            return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"]')).filter(function(elem, index) {
                
                return elem.isDisplayed().then(function(flag){
                    if(flag === true){
                        return elem.click().then(function(){
                        return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"][aria-expanded="true"] + [ng-if="node.hasMenuNoConsolidate"]>li>a')).count().then(function(co){
                            console.log("SubItems = " + co);
                            elem.click();
                            if(co>6){
                                return true;
                            }else{
                                return false;
                            }
                        });
                    });
                    }else{
                        return false;
                    }
                    
                });
                
                
            
}).first().click().then(function(){
                return element(by.css('[class="dropdown open"]>ul>li>[ng-click="structureCtrl.viewRelationShipTypeNoConsolidate(false,\'source\',\'annotations\', node)"]')).click();
            });
        
        }
    },
    clickOnAnnotationsTarget:{
        get: function (){
            
            return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"]')).filter(function(elem, index) {
                
                return elem.isDisplayed().then(function(flag){
                    if(flag === true){
                        return elem.click().then(function(){
                        return element.all(by.css('[ng-click="structureCtrl.getIconRelationShips(false, node)"][aria-expanded="true"] + [ng-if="node.hasMenuNoConsolidate"]>li>a')).count().then(function(co){
                            console.log("SubItems = " + co);
                            elem.click();
                            if(co>6){
                                return true;
                            }else{
                                return false;
                            }
                        });
                    });
                    }else{
                        return false;
                    }
                    
                });
                
                
            
}).first().click().then(function(){
                return element(by.css('[class="dropdown open"]>ul>li>[ng-click="structureCtrl.viewRelationShipTypeNoConsolidate(false,\'target\',\'annotations\', node)"')).click();
            });
        
        }
    },
    
    
    
    _countOfContextIndexNoteIcons: {
        get: function (){
            return element.all(by.css('[ng-class="{ \'hide-icon\': !node.hasContextIndex }"]')).count().then(function(c){
                return c;
            });
        }
    },
    
    _countOfContextIndexNoteIconsHidden: {
        get: function (){
            return element.all(by.css('[ng-class="{ \'hide-icon\': !node.hasContextIndex }"][class="hide-icon"]')).count().then(function(c){
                return c;
            });
        }
    },
    
    clickOnContextIndexNoteIcon:{
        get: function (){
            return element.all(by.css('[ng-class="{ \'hide-icon\': !node.hasContextIndex }"]')).filter(function(elem, index) {
  return elem.isDisplayed();
            
}).first().click();
        }
    },
    
    isDisplayedContextIndexTable:{
        get: function (){
            return element(by.css('[ng-click="addContextIndex()"]')).isDisplayed();
        }
    },
    
    isDisplayedRelationshipTable:{
        get: function (){
            return element(by.css('[ng-click="addNewRelationship()"]')).isDisplayed();
        }
    },
    
    closeRelationshipTable: {
        get: function (){
            return element(by.css('[ng-click="close()"]')).click();
        }
    },
    
    clickonXIconOfDeleteOriginalText: {
        get: function (){
            return element(by.css('[id="originalTextRemoveBtn-0"]')).click();
        }
    },
    
    clickYesOnDeleteOriginalConfirmPopup: {
        get: function (){
            return element(by.css('[name="btnConfirmationDialogAccept"]')).click();
        }
    },
    
    
    isDisplayedXIconOfDeleteOriginalText: {
        get: function (){
            return element(by.css('[id="originalTextRemoveBtn-0"]')).isDisplayed();
        }
    },
    
    clickOnDeleteDocumentStructure:{
        get: function (){
        element.all(by.css('[ng-repeat="action in structureCtrl.actions"]')).get(7).click();
        }
    },
    
    clickOnYesPopupConfirmationDeleteDocumentStructure:{
        get: function (){
            return element(by.css('[name="btnConfirmationDialogAccept"]')).click();
        }
    },
    

});

module.exports = LegislationLoadTextSection;