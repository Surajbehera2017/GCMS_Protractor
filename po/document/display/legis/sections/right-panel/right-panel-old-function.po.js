//click on "original" label for a unit-Anusha
this.clickOnFirstOriginalLabel = function (i) {
    element.all(by.css('.icons-analisi.line-listversion.ng-scope')).get(i).click();
};


//Expand any Parent and Chile Unit
this.expandAllParentAndChildUnit = function (i) {
    //element.all(by.css('.col-md-1.padding-none.expandTreeNode.ng-scope')).get(i).click().then(function (expand){
    element.all(by.css('.tree-icon.color-icon-grey.pointerCursor.glyphicon.glyphicon-play')).get(i).click().then(function (expanded) {
        return expanded;
    },
        function (error) {
            console.log("Error in expandAllParentAndChildUnit");
            return false;
        });
};


//right click on a unit and select delete option
this.rightClickOnUnitAndSelectDelete = function (i) {
    var el = element.all(by.css('[ng-context-menu="getMenuOptionsNodo(node)"]')).get(i);
    browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.waitForAngular(3000);
    browser.actions().mouseMove(el, { x: 50, y: 325 }).click().perform();

};






//Click "Original" label in the row of the recently created unit.

/* this.clickOnOriginalLabel= function() {
     element.all(by.css('.ng-scope.ng-binding')).get(30).click(); 
 };
*/

//click "orginal" label of other document


// this.clickOn1stOriginalLabel = function () {
// 	element.all(by.css('.ng-scope.ng-binding')).get(16).click();
// };



// this.clickOn2ndOriginalLabel = function () {
// 	element.all(by.css('.ng-scope.ng-binding')).get(17).click();
// };


// this.clickOn3rdOriginalLabel = function () {
// 	element.all(by.css('.ng-scope.ng-binding')).get(23).click();
// };


// this.clickOn4thOriginalLabel = function () {
// 	element.all(by.css('[ng-click="structureCtrl.openTextView(node,$parent.node)"]')).get(12).click();
// };

//click on edit(visual)- to anywhere and Just pass the correct index.


// this.clickOnEditVisualLabel = function (i) {
// 	element.all(by.css('.padding-left-5.ng-binding')).get(i).click();
// };

//click on edit(visual)


/* this.clickOnEditVisualLabel1= function() {
     element.all(by.css('.padding-left-5.ng-binding')).get(17).click(); 
 };*/

// this.clickOnEditVisualLabel2 = function (i) {
// 	element.all(by.css('.padding-left-5.ng-binding')).get(i).click();
// };


// this.rightClickOnA101Orignal = function () {
// 	var el = element.all(by.css('[ng-click="structureCtrl.openTextView(node,$parent.node)"]')).get(12);
// 	browser.actions().mouseMove(el).perform();
// 	browser.actions().click(protractor.Button.RIGHT).perform();
// 	browser.actions().mouseMove(el, { x: 25, y: 25 }).click().perform();
// };


//select all and delete in edit(visual) window
this.selectAllAndDelete = function () {
    browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform();
    browser.sleep(3000);
    browser.actions().sendKeys(protractor.Key.DELETE).perform();
};

//select all the text
this.selectAllText = function () {
    browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform();
    browser.sleep(1000);

};


//select a entered text in edit(visual) window
this.selectEnteredTextinEditVisualWindow = function () {
    browser.sleep(1000);
    element.all(by.css('[data-type="text"]')).get(2);
    browser.actions().sendKeys(protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.HOME)).perform();
    browser.sleep(3000);

};

//resize button

this.clickOnResizeButtonBefore = function () {
    element(by.css('[ng-click="resizeFull()"]')).click();
};

this.clickOnResizeButtonAfter = function () {
    element(by.css('[ng-click="resizeMin()"]')).click();
};




// Select capatexto  

// this.clickOnCapatexto = function () {
// 	var el = element.all(by.css('.x-btn.x-unselectable.x-btn-toolbar.x-box-item.x-toolbar-item.x-btn-default-toolbar-small.x-noicon.x-btn-noicon.x-btn-default-toolbar-small-noicon')).get(0);
// 	browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();
// };

//insert element option is selected when clicked on capatexto


// this.selectInsertElementOption = function () {
// 	var el = element.all(by.css('.x-menu-item-link ')).get(0);
// 	browser.actions().mouseMove(el).perform();

// };




// this.select2ndInsertElementOption = function () {
// 	var el = element.all(by.css('.x-menu-item-link ')).get(3);
// 	browser.actions().mouseMove(el).perform();

// };



//select itemizedlist option


// this.selectItemizedlistOption = function () {
// 	element.all(by.css('.x-menu-item-link ')).get(6).click();
// };



this.select2ndItemizedlistOption = function () {
    element.all(by.css('.x-menu-item-text.x-menu-item-indent')).get(6).click();
};




//click pn ok popup

this.clickOkpopup = function () {
    if (element(by.css('[ng-click="ok()"]')).isPresent) {
        element(by.css('[ng-click="ok()"]')).click();
    }
};


// Go to the párrafo

// this.selectpárrafoOption = function () {
// 	element.all(by.css('.x-menu-item-link ')).get(12).click();
// };


//go to ordered list

// this.selectOrderdlistOption = function () {
// 	element.all(by.css('.x-menu-item-link ')).get(10).click();
// };


//go to faltatable

// this.selectFaltatableOption = function () {
// 	element.all(by.css('.x-menu-item-link ')).get(3).click();
// };

//go to faltafigura

// this.selectfaltafiguraOption = function () {
// 	element.all(by.css('.x-menu-item-link ')).get(5).click();
// };

//click the space where text is to be entered

this.clickTheSpace = function () {
    element(by.css('[data-type="parrafo"]')).click();

};



//click on table link

this.clickTableLink = function () {
    element(by.css('[data-type="faltatable"]')).click();

};

//click on cancel button of popup

// this.clickOnCancelButtonInPopup = function () {
// 	element.all(by.css('.x-btn-wrap')).get(46).click();

// };

//select paraffro button

/*this.clickParaffroButton= function(i) {
   var el=element.all(by.css('.x-btn-wrap.x-btn-arrow.x-btn-arrow-right')).get(i);
    browser.actions().mouseMove(el,{x: 30, y: 20}).click().perform();
        
       
};*/

// this.clickParaffroButton = function () {
// 	element.all(by.css('.x-btn-button')).get(44).click();

// };


//select delete option from parffro

// this.clickDeleteParaffro = function () {
// 	element.all(by.css('.x-menu-item-link')).get(6).click();
// };


//select orderd list button

// this.clickOrderedlistButton = function (data) {
// 	var el = element.all(by.css('.x-btn-inner.x-btn-inner-center')).get(44);
// 	browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();


// };

//select delete option from ordered list

// this.clickDeleteofOrderedlist = function () {
// 	element.all(by.css('.x-menu-item-link ')).get(7).click();
// };


//select listitem button

// this.clicklistitemButton = function (data) {
// 	var el = element.all(by.css('.x-btn-inner.x-btn-inner-center')).get(45);
// 	browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();

// };


//select insert break option of listitem button


/* this.selectInsertBreakOption= function() {
   element.all(by.css('.x-menu-item-link ')).get(4).click();
   
   
};*/

this.selectInsertBreakOption = function (i) {
    element.all(by.css('.x-menu-item-link ')).get(i).click();


};

//once inserted the itemiezdlist you select the space and enter any text in that  space
this.clickAndInsertPara = function (data) {
    element(by.css('[data-type="parrafo"]')).click();
    element(by.css('[data-type="parrafo"]')).sendKeys(data);

};
//select the text from the frame2
this.selectAllAndDeleteInsideContent = function () {
    element.all(by.id('visible-e12')).click();
    browser.sleep(2000);
    browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform();
    browser.sleep(2000);
    browser.actions().sendKeys(protractor.Key.DELETE).perform();
};

//click on the editor from the frame2 and enter text
this.clickAndEnterTextVisual = function (data) {
    element(by.id('visible-e8')).click();
    browser.sleep(2000);
    var el = browser.driver.findElement(by.id('visible-e9'));
    browser.actions().click(el).sendKeys(data).perform()
    browser.sleep(2000);

};

// click on paste dropdown
/*this.clickOnPasteDropdown= function() {
     element.all(by.id('splitbutton-1037-btnWrap')).get(0).click(); 
 };*/

// this.clickOnPasteDropdown = function () {
// 	//var el = element(by.id('splitbutton-1037'));
// 	var el = element(by.css('.x-btn.custombutton.x-unselectable.x-btn-toolbar.x-box-item.x-toolbar-item.x-btn-default-toolbar-small.x-icon.x-btn-icon.x-btn-default-toolbar-small-icon'));
// 	browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();
// },
//select option from dropdown (paste from word)


// //select option paste external text
// this.selectOptionFromPasteDropdown = function (i) {
// 	element.all(by.css('.x-component.x-box-item.x-component-default.x-menu-item')).get(i).click();
// };
//select option from dropdown (paste from word)

// this.select2ndOptionFromPasteDropdown = function () {
// 	element(by.css('.x-component.x-box-item.x-component-default.x-menu-item')).click();
// };

//select option paste external text

//select option paste from xml
// this.select3rdOptionFromPasteDropdown = function () {
// 	element.all(by.css('.x-menu-item-link ')).get(1).click();
// };

/*enter the text in the popup (which you get after clicking on paste from word)
*/
this.enterTextIntoPopup = function (i, value) {

    //element.all(by.css('.x-form-field.x-form-text.x-form-textarea')).get(i).click();
    //browser.sleep(2000);

    //element(by.css('.x-form-field.x-form-text.x-form-textarea')).sendKeys(value);
    var el = element(by.css('.x-form-field.x-form-text.x-form-textarea'));
    browser.sleep(3000);


    for (i = 0; i < value.length; i++) {
        el.sendKeys(value.charAt(i));
    }
    // element(by.id('textarea-1307-bodyEl')).click();
    // element(by.id('textarea-1307-bodyEl')).sendKeys(value);
};

this.enterTextIntoWordPopup = function (value) {

    element.all(by.id('window-1303-body')).click();
    browser.sleep(2000);
    element.all(by.css('window-1303-body')).sendKeys(value);
    browser.sleep(3000);
    // element(by.id('textarea-1307-bodyEl')).click();
    // element(by.id('textarea-1307-bodyEl')).sendKeys(value);
};



/*
This method assumes the test is taking care of having some text in the clipboard 
*/
this.enteringTextUsingProtractor = function (value) {
    browser.sleep(2000);
    browser.actions().keyDown(protractor.Key.CONTROL).sendKeys(value).perform();

};

//Enter Text into popup bold italics 
this.enterTextIntoPopupBoldItalicsStrikeTrough = function (value) {

    element.all(by.css('.x-form-field.x-form-text.x-form-textarea')).get(0).click();
    var el = element.all(by.css('.x-form-field.x-form-text.x-form-textarea')).get(0);
    setTextContent(el, value);
};
//after entering text click on insert

this.clickOnInsertButton = function (i) {
    element.all(by.css('.x-btn.x-unselectable.x-box-item.x-toolbar-item.x-btn-default-small.x-icon-text-left.x-btn-icon-text-left.x-btn-default-small-icon-text-left')).get(0).click();
};
this.clickonExpandEditorialnotes = function () {
    element.all(by.id('collapsed-editorial-notes-link')).get(0).click();

};

this.clickonWordicon = function () {
    element.all(by.id('editPrintEditorialNotesBtn')).get(0).click();
};

this.clickonCreateNota = function () {
    element.all(by.css('[ng-click="create(lang)"]')).get(0).click();
};

// this.clickonInsertButtonOfPasteFromExternal = function () {
// 	element(by.css('.x-btn-icon-el.icon-ok_16 ')).click();
// };

//click on cancel button

this.clickOnCancelButton = function () {
    element(by.css('[ng-click="cancelEdition()"]')).click();
};



//click on edit button

this.clickOnEditButton = function () {
    element(by.css('#panel-fixed-minified #btnGoToEditMode')).click();
};



//expand status data

this.expandStatusData = function () {
    element(by.css('[ ng-click="expandCollapse.status.statuteData.open=!expandCollapse.status.statuteData.open" ]')).click();
};




//click on global icon

this.clickOnGlobalIcon = function () {
    element.all(by.css('.multilang-ico')).get(0).click();
};

//after clicking global icon-you click on edit in edit abstracts

this.clickOnEditButtonInAbstract = function () {
    element(by.css('[ng-click="edit(lang)"]')).click();
};

//click on save button

this.clickOnsaveButton = function () {
    element(by.css('.btn.btn-primary.orange-button.ng-scope')).click();
};

this.clickOnsaveButtonVisualEditor = function () {
    browser.driver.findElement(by.name('btnConfirmationDialogAccept')).click();
    //element(by.css('.btn.btn-primary.orange-button.ng-scope')).click();
};

this.clickOnsaveButtonAddxml = function () {
    element(by.css('.btn.btn-primary.orange-button.ng-scope')).click();
};

//click on x button 

this.clickOnXButton = function () {
    element(by.css('[ng-click="close()"]')).click();
};





this.clickonEnterdata = function (data) {
    element(by.css('.x-form-field.x-form-text.x-form-textarea')).click();
    element(by.css('.x-form-field.x-form-text.x-form-textarea')).sendKeys(data);
};

this.clickonInsertButton = function () {
    //element.all(by.css('.x-btn-inner.x-btn-inner-center')).get(47).click();
    element.all(by.css('.x-btn-inner.x-btn-inner-center')).get(47).click();
};


// this.clickPasteDropdownPresentXEditor1 = function () {
// 	var el = element(by.css('.x-btn.custombutton.x-unselectable.x-btn-toolbar.x-box-item.x-toolbar-item.x-btn-default-toolbar-small.x-icon.x-btn-icon.x-btn-default-toolbar-small-icon'));
// 	browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();
// };


this.clickxml = function () {
    element.all(by.css('.x-menu-item-link ')).get(1).click();
};

//click dropdown button next to structure actions

this.clickDropdowniconOfActions = function (i) {
    element.all(by.css('.dropdown-icon')).get(i).click();
};

//select the option add newunit from  editor

this.selectAnOptionsFromStructureActions = function (i) {
    element.all(by.css('[ng-click="structureCtrl.doAction(action)"]')).get(i).click();
};

//click on unidad button


this.clickOnUnidadButton = function () {
    var el = element.all(by.css('.x-btn.x-unselectable.x-btn-toolbar.x-box-item.x-toolbar-item.x-btn-default-toolbar-small.x-noicon.x-btn-noicon.x-btn-default-toolbar-small-noicon')).get(1);
    browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();

};



//select delete option from unidad

this.clickDeleteOptionFromUnidad = function () {
    element.all(by.css('.x-component.x-box-item.x-component-default.x-menu-item')).get(7).click();
};

//click on X button

this.clickOnXbutton = function () {
    element(by.css('[ng-click="close()"]')).click();
};




this.
    clickRelationshipButtonGreen = function (i) {
        //element(by.css('#structure-table-scrollable #nodeId-140103398 td div div span a div.icon-analysis.icon-relationships-position-no-consolidation')).click();
        element.all(by.css('.icon-analysis.icon-relationships-position-no-consolidation')).get(i).click();
    };

this.clickRelationshipAll = function () {
    element(by.css('[ng-click="structureCtrl.viewRelationShipAllNoConsolidate(false,node)"]')).click();
};

this.closeViewAll = function () {
    element(by.css('.btn.btn-thesaurus-table.bento-icon-close-x')).click();
};

this.isRelationshipAllPresent = function () {
    element(by.css('[ng-click="structureCtrl.viewRelationShipAllNoConsolidate(false,node)"]')).isPresent();
};

this.isRelationEffectivePresent = function () {
    element.all(by.css('#tableContainer #structure-table #structure-table-scrollable #nodeId-140103398 td div div span ul li a.ng-binding')).get(1).isPresent();
};

this.clickRelationEffevtive = function (i) {
    element.all(by.css('#tableContainer #structure-table #structure-table-scrollable #nodeId-140103398 td div div span ul li a.ng-binding')).get(1).click();

};
//click on Relationship green icon and select source option
this.clickRelationSource = function () {
    element(by.css('.margin-left-17.ng-binding')).click();
};

this.isTargetRelationshipPresent = function () {
    element.all(by.css('.margin-left-17.ng-binding')).get(0).isPresent();
};

this.clickTargetRelationship = function () {
    element.all(by.css('.margin-left-17.ng-binding')).get(0).click();
};

this.isAnnotationsRelationshipPresent = function () {
    element(by.css('.ng-binding.border-top-grey-dropdown')).isPresent();
};

this.clickAnnotationsRelationship = function () {
    element(by.css('.ng-binding.border-top-grey-dropdown')).click();
};

this.isTargetAnnotationPresent = function () {
    element.all(by.css('.margin-left-17.ng-binding')).get(1).isPresent();
};

this.clickTargetAnnotation = function () {
    element.all(by.css('.margin-left-17.ng-binding')).get(1).click();
};

this.clickShowFilters = function () {
    element(by.buttonText('Show Filters')).click();
};

this.isYesNoDropdownPresent = function () {
    element(by.id('spread')).isPresent();
};


this.selectNote = function () {
    element(by.id('spread')).click();
};

this.clickTypeofNote = function () {
    element(by.id('spread')).click();
};

this.isSourceDocumentTextPresent = function () {
    element.all(by.css('div div div#relationShipHeaderGroup div.inline.left.colorHeaderGroup strong.ng-binding')).get(0).isPresent();
};

this.isTargetDocumentTextPresent = function () {
    element.all(by.css('div div div#relationShipHeaderGroup div.inline.left.colorHeaderGroup strong.ng-binding')).get(1).isPresent();
};

////////////////-New code-////////////
// this.clickStructureActions = function () {
// 	element(by.css('.dropdown-toggle.btn.btn-default.structureActionsButton.col-md-12')).click();
// };

this.isStructureActionsMenuDisplayed = function () {
    return element(by.css('.dropdown-menu.not-overflow-y')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isDisplayed() in isStructureActionsMenuDisplayed");
            return false;
        });
};

this.clickDuplicateStructureInStructureActionsMenu = function () {
    return element(by.xpath('//a[text()="Duplicate Structure"]')).click();
};

this.isOptionDisplayedInStructureActionsMenu = function (expOption) {
    return element
        .all(by.cssContainingText('.dropdown-menu.not-overflow-y>li.ng-scope', expOption))
        .get(0).isDisplayed().then(function (displayed) {
            return displayed;
        },
            function (error) {
                console.log("Error in isOptionDisplayedInStructureActionsMenu");
                return false;
            });
};

this.clickDeleteInStructureActionsMenu = function () {
    return element(by.xpath('//a[text()="Delete"]')).click();
};

// this.clickImportfromXMLInStructureActionsMenu = function () {
// 	element.all(by.css('.text-capitalize.ng-binding')).get(2).click().then(function (text) {
// 	},
// 		function (error) {
// 			console.log("Error in clickImportfromXMLInStructureActionsMenu");
// 		});
// };

// this.clickAddNewUnitFromXMLEditorInStructureActionsMenu = function () {
// 	//element(by.xpath('.//*[@id="structure-table"]//li[4]/a')).click();
// 	element.all(by.css('.text-capitalize.ng-binding')).get(4).click();
// };

this.clickAddNewUnitFromEditorInStructureActionsMenu = function () {
    element.all(by.css('.text-capitalize.ng-binding')).get(3).click();
};

// 	this.clickDeleteInStructureActionsMenu = function () {
// 		//element(by.xpath('.//*[@id="structure-table"]//li[8]/a')).click();
// 		element.all(by.css('.text-capitalize.ng-binding')).get(8).click();
// 	};

this.isModalWindowDisplayed = function () {
    return element(by.css('.modal-content')).isDisplayed();
};

this.clickYesButtonInDeleteStructurePopUp = function () {
    $('[ng-click="ok()"]').click();
};

this.isPopUpDisplayedWithIfoMessage = function () {
    return element(by.css('[ng-bind="message | translate"]')).isDisplayed();
};

this.getMessageOnPopUp = function () {
    return element(by.css('[ng-bind="message | translate"]')).getText();
};

this.clickOKButtonInMessagePopUp = function () {
    element(by.css('[ng-click="accept()"]')).click();
};



this.isStructureDeletedInfoBoxDisplayed = function () {
    return element(by.css('.wrapwords.col-md-10.ng-scope.ng-binding')).isDisplayed();

};

this.getMessageFromInfoBoxPopUp = function () {
    return element(by.css('[name="txtInfoDialog"]')).getText().then(function (text) {
        return text;
    },
        function (error) {
            return "";
        });
};
this.clickOKButtonInCommonPopUp = function () {
    return $('[ng-click="ok()"]').click();
}

this.clickCancelButtonInDuplicateStructurePopUp = function () {
    element(by.css('[ng-click="close() "]')).click();
};

this.clickOkButtonInDuplicateStructurePopUp = function () {
    _OkButton_DuplicateStructurePopUp.click();
};

this.isOkButtonDisplayedInDuplicateStructurePopUp = function () {
    return _OkButton_DuplicateStructurePopUp.isDisplayed();
};

this.writeDateInPopUp = function (value) {
    element(by.css('[datepicker-popup="dd/MM/yyyy"]')).clear();
    element(by.css('[datepicker-popup="dd/MM/yyyy"]')).sendKeys(value);
};

this.isUnitOrTextXMLFilePopUpDisplayed = function () {
    return element(by.css('[busy-loader="addUnitStructureCtrl.isUploadFileXML"]')).isPresent();
};

this.clickCancelButtonInUnitOrTextXMLFilePopUp = function () {
    element(by.css('[translate="Common.Cancel"]')).click();
};

this.clickImportButtonInUnitOrTextXMLFilePopUp = function () {
    element(by.css('[translate="Common.Import"]')).click().then(function (result) {

    },
        function (error) {
            console.log("Error in click() in clickIMportButtonInUnitOrTextXMLFilePopUp");
        });
};

this.isImportButtonInUnitOrTextXMLFilePopUpEnabled = function () {
    return element(by.css('[translate="Common.Import"]')).isEnabled().then(function (result) {
        return result;
    },
        function (error) {
            console.log("Error in isEnabled() in isImportButtonInUnitOrTextXMLFilePopUpEnabled");
            return false;
        });
};

this.clickCloseXButtonInUnitOrTextXMLFilePopUp = function () {
    element(by.xpath('//*[@busy-loader="addUnitStructureCtrl.isUploadFileXML"]//i[@class="bento-icon-close-x"]')).click();
};

this.isModalUnitEditPopUpDisplayed = function () {
    return element(by.css('.ng-scope.ng-isolate-scope.modal-unit-edit')).isPresent();
};

this.isSidebarButtonsDisplayedInModalUnitEditPopUp = function () {
    return element.all(by.css('.xmleditor-sidebar > button')).get(0).isDisplayed();
};

this.isSaveButtonDisplayedInModalUnitEditPopUp = function () {
    return element(by.css('[ng-click="addUnit()"]')).isDisplayed();
};

this.clickCancelButtonInModalUnitEditPopUp = function () {
    element(by.css('[ng-click="cancelEdition()"]')).isDisplayed().then(function (result) {
        browser.executeScript("arguments[0].scrollIntoView();", element(by.css('[ng-click="cancelEdition()"]')).getWebElement());
        element(by.css('[ng-click="cancelEdition()"]')).click();
    },
        function (error) {
            console.log("Error in click() in clickCancelButtonInModalUnitEditPopUp");
        });
};

this.clickSaveButtonInModalUnitEditPopUp = function () {
    element(by.css('[ng-click="addUnit()"]')).click().then(function (result) {

    },
        function (error) {
            console.log("Error in click() in clickSaveButtonInModalUnitEditPopUp");
        });
};

this.clickEditSaveButtonInModalUnitEditPopUp = function () {
    element(by.css('[ng-click="editTextLayer()"]')).click().then(function (result) {

    },
        function (error) {
            console.log("Error in click() in clickEditSaveButtonInModalUnitEditPopUp");
        });
};

this.isModalUnitEditPopUpHasDocumentTextTab = function () {
    return element(by.xpath('.//*[@class="modal-content"]//*[@ng-click="select()"][@class="ng-binding"]')).isDisplayed();
};

this.rightClickOnLastUnitAndSelectAdd = function () {
    var el = element.all(by.css('.padding-left-5.ng-binding')).last();
    browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.actions().mouseMove(el, { x: 50, y: 100 }).click().perform();
};

//right click on a document and click on add(xml)


this.rightClickOnUnitAndSelectAddxml = function () {
    var el = element(by.css('.padding-left-5.ng-binding'));
    browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.actions().mouseMove(el, { x: 50, y: 125 }).click().perform();
};


this.rightClickOnUnitAndSelectAdd = function (expectedUnit) {
    element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
        element.getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                browser.actions().mouseMove(element).perform();
                browser.actions().click(protractor.Button.RIGHT).perform();
                browser.actions().mouseMove(element, { x: 50, y: 100 }).click().perform();
            }
        });
    });
};

//right click on unit and select Edit unitId option
this.rightClickOnUnitAndSelectEditUnitId = function (expectedUnit) {
    element.all(by.xpath("//*[@id='structure-display']//span[text()='[" + expectedUnit + "] ']")).each(function (element, index) {
        element.getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                browser.actions().mouseMove(element).perform();
                browser.actions().click(protractor.Button.RIGHT).perform();
                browser.sleep(2000);
                browser.actions().mouseMove({ x: 50, y: 195 }).click().perform();

            }
        });
    });
};

// this.rightClickOnUnitAndSelectDeleteDropdown = function (expectedUnit) {
// 	element.all(by.xpath("//*[@id='structure-display']//span[text()='[" + expectedUnit + "] ']")).each(function (element, index) {
// 		element.getText().then(function (text) {
// 			if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
// 				browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
// 				browser.actions().mouseMove(element).perform();
// 				browser.actions().click(protractor.Button.RIGHT).perform();
// 				browser.actions().mouseMove({ x: 50, y: 325 }).click().perform();
// 				browser.sleep(5000);
// 			}
// 		});
// 	});
// };

// //right click on a unit and select delete option
// this.rightClickOnUnitAndSelectDelete = function (i) {
// 	var el = element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).get(i);
// 	browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
// 	browser.actions().mouseMove(el).perform();
// 	browser.actions().click(protractor.Button.RIGHT).perform();
// 	browser.waitForAngular(3000);
// 	browser.actions().mouseMove(el, { x: 50, y: 325 }).click().perform();
// }
//right click on last unit and select delete option
this.rightClickOnLastUnitAndSelectDelete = function () {
    var el = element.all(by.css('.padding-left-5.ng-binding')).last();
    browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.actions().mouseMove({ x: 50, y: 330 }).click().perform();
};

this.isAddUnitPopUpDisplayed = function () {
    return element(by.css('[ng-class="{\'modal-unit-view\': viewMode, \'modal-unit-edit\': !viewMode}"]')).isPresent();
};

this.isAddUnitPopUpHasSaveButton = function () {
    return element(by.css('[ng-click="addUnit()"]')).isDisplayed();
};

this.isAddUnitPopUpHasDocumentTextTab = function () {
    return element.all(by.css('.ng-isolate-scope.active')).get(1).isPresent();
};

this.isUnitIDDisplayedInAddUnitPopUp = function (value) {
    return element(by.css('[ng-model="unitName"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            return false;
        });
};

this.isComplementDisplayedInAddUnitPopUp = function (value) {
    return element(by.css('[ng-model="unit.preccDesc"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isDisplayed() in isComplementDisplayedInAddUnitPopUp");
            return false;
        });
};

this.isSuperiorLevelDisplayedInAddUnitPopUp = function (value) {
    return element(by.css('[ng-model="unit.nmc"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isDisplayed() in isSuperiorLevelDisplayedInAddUnitPopUp");
            return false;
        });
};

this.isBodyFieldDisplayedInAddUnitPopUp = function (value) {
    return element(by.css('[ng-model="unit.precs"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isDisplayed() in isBodyFieldDisplayedInAddUnitPopUp");
            return false;
        });
};

this.isUnitTreeDisplayedInAddUnitPopUp = function (value) {
    return element(by.css('.add-unit-tree.ng-scope')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isDisplayed() in isUnitTreeDisplayedInAddUnitPopUp");
            return false;
        });
};

this.isTreeImageDisplayedInAddUnitPopUp = function (value) {
    return element(by.css('.tree-image')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isDisplayed() in isTreeImageDisplayedInAddUnitPopUp");
            return false;
        });
};


// this.clickAsAChildRadioButtonInAddUnitPopUp = function () {
// 	element.all(by.css('[class="radio-button"]')).get(0).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in click() in clickAsAChildRadioButtonInAddUnitPopUp");
// 		});
// };




this.clickAsAChildRadioButtonInAddUnitPopUp = function () {
    element.all(by.css('[class="radio-button"]')).get(0).click().then(function (result) {

    },
        function (error) {
            console.log("Error in click() in clickAsAChildRadioButtonInAddUnitPopUp");
        });
};

this.clickAsAnUpperSiblingRadioButtonInAddUnitPopUp = function () {
    element.all(by.css('[class="radio-button"]')).get(1).click().then(function (result) {

    },
        function (error) {
            console.log("Error in click() in clickAsAnUpperSiblingRadioButtonInAddUnitPopUp");
        });
};

this.clickAsALowerSiblingRadioButtonInAddUnitPopUp = function () {
    element.all(by.css('[class="radio-button"]')).get(2).click().then(function (result) {

    },
        function (error) {
            console.log("Error in click() in clickAsALowerSiblingRadioButtonInAddUnitPopUp");
        });
};

// this.clickRadioButtonInAddUnitPopUp = function (i) {
// 	element.all(by.css('[class="radio-button"]')).get(i).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in click() in clickRadioButtonInAddUnitPopUp");
// 		});
// };

this.writeUnitIDInAddUnitPopUp = function (value) {
    element(by.css('[ng-model="unitName"]')).sendKeys(value).then(function (result) {

    },
        function (error) {
            console.log("Error in sendKeys() in writeUnitIDInAddUnitPopUp");
        });
};

this.clickEditTitleInAddUnitPopUp = function () {
    //browser.driver.findElement(by.xpath('.//*[@id="visible-e7"]')).click().then(function(result){
    element(by.xpath('.//*[@id="visible-e7"]')).click().then(function (result) {

    },
        function (error) {
            console.log("Error in click() in clickEditTitleInAddUnitPopUp");
        });
};


this.writeFieldInInnerTitleEditPopUp = function (value, i) {
    element.all(by.css('.x-form-field.x-form-text')).get(i).click().then(function (result) {
        element.all(by.css('.x-form-field.x-form-text')).get(i).sendKeys(value).then(function (result) {

        },
            function (error) {
                console.log("Error in sendKeys() in writeFieldInInnerTitleEditPopUp");
            });
    },
        function (error) {
            console.log("Error in click() in writeFieldInInnerTitleEditPopUp");
        });
};

this.clickAcceptInnerTitleEditPopUp = function (value) {
    element.all(by.css('span.x-btn-inner.x-btn-inner-center')).get(50).click().then(function (result) {
        //50th button matches with accept button in this popup
    },
        function (error) {
            console.log("Error in click() in clickAcceptInnerTitleEditPopUp");
        });
};

this.writeOriginalTitleInAddUnitPopUp = function (value) {
    element(by.xpath('.//*[@data-type="titulo"]/*[@id="visible-e7"]')).sendKeys(value).then(function (result) {

    },
        function (error) {
            console.log("Error in sendKeys() in writeOriginalTitleInAddUnitPopUp");
        });
};

this.writeRubricInAddUnitPopUp = function (value) {

    browser.driver.findElement(by.id('visible-e9')).isDisplayed().then(function (result) {
        var el = browser.driver.findElement(by.id('visible-e9'));
        browser.actions().click(el).sendKeys(value).perform();
    },
        function (error) {
            console.log("Error in sendKeys() in writeRubricInAddUnitPopUp");
        });

};

this.writeRubricInEditUnitPopUp = function (value) {
    var el = browser.driver.findElement(by.css('[data-type="titulorubrica"]'));
    browser.actions().click(el).sendKeys(value).perform();

};

this.clearRubricInEditUnitPopUp = function (value) {
    element(by.id('visible-e5')).clear();
};


this.writeEditorialRubricInEditUnitPopUp = function (value) {
    var el = browser.driver.findElement(by.id('visible-e6'));
    browser.actions().click(el).sendKeys(value).perform();
};

this.clearEditorialRubricInEditUnitPopUp = function (value) {
    element(by.id('visible-e6')).clear();
};

this.writeEditorialRubricInAddUnitPopUp = function (value) {
    //element(by.xpath('.//*[@data-type="titulorubricaficticia"]/*[@id="visible-e13"]')).sendKeys(value);
    browser.driver.findElement(by.id('visible-e12')).isDisplayed().then(function (result) {
        //element(by.id('visible-e9')).isDisplayed().then(function(result){
        var el = browser.driver.findElement(by.id('visible-e12'));
        browser.actions().click(el).sendKeys(" ").sendKeys(value).perform();
    },
        function (error) {
            console.log("Error in isDisplayed() in writeEditorialRubricInAddUnitPopUp");
        });
};

this.writeParagraphOneInAddUnitPopUpAndPressEnter = function (value) {
    browser.driver.findElement(by.id('visible-e10')).isDisplayed().then(function (result) {
        var el = browser.driver.findElement(by.id('visible-e10'));
        browser.actions().click(el).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
    },
        function (error) {
            console.log("Error in isDisplayed() in writeParagraphOneInAddUnitPopUpAndPressEnter");
        });
};

this.writeParagraphTwoInAddUnitPopUpAndPressEnter = function (value) {
    browser.driver.findElement(by.id('visible-e16')).isDisplayed().then(function (result) {
        var el = browser.driver.findElement(by.id('visible-e16'));
        browser.actions().click(el).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
    },
        function (error) {
            console.log("Error in isDisplayed() in writeParagraphTwoInAddUnitPopUpAndPressEnter");
        });
};

this.clickParagraphTwoInAddUnitPopUp = function () {
    browser.driver.findElement(by.id('visible-e16')).isDisplayed().then(function (result) {
        var el = browser.driver.findElement(by.id('visible-e16'));
        browser.actions().click(el).perform();
    },
        function (error) {
            console.log("Error in isDisplayed() in clickParagraphTwoInAddUnitPopUp");
        });
};

this.writeParagraphTwoInAddUnitPopUp = function (value) {//Do not press enter after input
    browser.driver.findElement(by.id('visible-e16')).isDisplayed().then(function (result) {
        var el = browser.driver.findElement(by.id('visible-e16'));
        browser.actions().click(el).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
    },
        function (error) {
            console.log("Error in isDisplayed() in writeParagraphTwoInAddUnitPopUp");
        });
};

/*
 * Select firstword in  InParagraphTwoInAddUnitPopUp
 */
this.selectWordInParagraphTwoInAddUnitPopUp = function (word) {
    //this is not working as expected
    element.all(by.css('visible-e16')).get(0).click().then(function (result) {
        var el = element.all(by.css('visible-e16')).get(0);
        browser.sleep(1000);
        browser.actions()
            .mouseMove(el, { x: 0, y: 0 })
            .mouseDown()
            .mouseMove(el, { x: 50, y: 0 })
            .mouseUp().perform();

        browser.sleep(1000);
    },
        function (error) {
            console.log("Error in selectWordInParagraphTwoInAddUnitPopUp");
        });
};

/*
 * Select first line in  InParagraphTwoInAddUnitPopUp
 */
this.selectFirstLineTextInParagraphTwoInAddUnitPopUp = function () {
    //this is not working as expected
    element(by.id('visible-e10')).click().then(function (result) {
        var elFstLine = element(by.id('visible-e10')); //Para 1 - line 1 element
        var elNextLine = element(by.id('visible-e15')); //Para 2- Line 1 element
        browser.actions()
            .mouseMove(elFstLine)
            .click()
            .mouseDown()
            .mouseMove(elNextLine)
            .mouseUp().perform();
        browser.sleep(1000);//Sleep is required
    },
        function (error) {
            console.log("Error in selectFirstLineTextInParagraphTwoInAddUnitPopUp");
        });
};

this.selectFirstWordInParagraphTwoInAddUnitPopUp = function (value) {
    browser.driver.findElement(by.id('visible-e16')).isDisplayed().then(function (result) {
        var el = browser.driver.findElement(by.id('visible-e16'));
        browser.actions().click(el).sendKeys(value).sendKeys(protractor.Key.ENTER).perform();
    },
        function (error) {
            console.log("Error in isDisplayed() in selectFirstWordInParagraphTwoInAddUnitPopUp");
        });
};

// this.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp = function (value) {
// 	//Third arrow mark is for definitivo. hence get(2).
// 	element.all(by.css('.x-form-arrow-trigger')).get(2).click().then(function (result) {
// 		//browser.executeScript("arguments[0].scrollIntoView();", element(by.css('[name="definitivo"]')).getWebElement());
// 		if (value === 'N') {
// 			browser.sleep(1000);
// 			element.all(by.css('[role="option"]')).get(1).click();
// 		} else if (value === 'S')
// 			browser.sleep(1000); {
// 			element.all(by.css('[role="option"]')).get(2).click();
// 		}
// 	},
// 		function (error) {
// 			console.log("Error in enterValueOnDefinitivoDropDownArrowInAddUnitPopUp");
// 		});
// };
this.enterValueOnDefinitivoDropDownArrowInAddUnitPopUp = function (value) {
    //Third arrow mark is for definitivo. hence get(2).
    element.all(by.css('.x-form-arrow-trigger')).get(2).click();
    //browser.executeScript("arguments[0].scrollIntoView();", element(by.css('[name="definitivo"]')).getWebElement());
    browser.sleep(2000);
    element(by.xpath("//*[@role='option' and text()='" + value + "']")).click();


};

this.rightClickOnLastUnitNameAndClickImportFromXML = function () {
    var el = element.all(by.css('.padding-left-5.ng-binding')).last();
    browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.actions().mouseMove(el, { x: 50, y: 150 }).click().perform();
};

this.isMultipleStructureVersionsDisplayed = function () {
    var elementsList = element.all(by.css('.carousel-versions.ng-scope>ul>li'));
    return elementsList.get(0).isPresent() && elementsList.get(1).isPresent();
};

this.isInForceStructureDisplayed = function () {
    return element(by.css('.inForce')).isPresent();
};

this.isInForceStructureDisplayedAsFirstStructure = function () {
    var firstStructure = element.all(by.css('.noselect.ng-scope>li')).get(0);
    return firstStructure.all(protractor.By.tagName('span.inForce')).get(0).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            return false;
        });
};

this.isNextArrowDisplayedInStructureNavigation = function () {
    return element(by.css('[ng-click="nextSlide()"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            return false;
        });
};

this.clickNextArrowInStructureNavigation = function () {
    element(by.css('[ng-click="nextSlide()"]')).click();
    //element(by.css('.rn-carousel-control.rn-carousel-control-next.ng-scope')).click();
};

this.isPreviousArrowDisplayedInStructureNavigation = function () {
    return element(by.css('[ng-click="prevSlide()"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            return false;
        });
};

this.clickPreviousArrowInStructureNavigation = function () {
    //element(by.css('.rn-carousel-control.rn-carousel-control-prev.ng-scope')).click();
    //Normal click is failing. Hence trying javascript click
    var elementArrow = element(by.css('[ng-click="prevSlide()"]'));
    browser.executeScript("arguments[0].click();", elementArrow);

};

this.isArrowDisplayedInStructureNavigation = function () {
    return element(by.css('[ng-click="prevSlide()"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            return false;
        });
};

this.isTextColorOfSelectedTabEquals = function (expColor) {
    return element(by.css('.ng-isolate-scope.active>a')).getCssValue('color').then(value => {
        if (expColor === value) {
            return true;
        } else {
            return false;
        }
        return false;
    },
        function (error) {
            return false;
        });
};

this.isBGColorOfInForceStructureEquals = function (expColor) {
    return element(by.css('.inForce')).getCssValue('background-color').then(function (value) {
        if (expColor === value) {
            return true;
        } else {
            return false;
        }
        return false;
    },
        function (error) {
            return false;
        });
};

this.isOriginalStructureDisplayed = function () {
    return element(by.css('.inForce')).isPresent();
};

this.selectOriginalStructure = function () {
    return element(by.css('.originalStructure')).click().then(function () {
    },
        function (error) {
            console.log('Error in selectOriginalStructure()');
        });
};

this.isBGColorOfOriginalStructureEquals = function (expColor) {
    return element(by.css('.selectedStructure')).getCssValue('background-color').then(function (value) {
        console.log("Expected Code:", value);
        if (expColor === value) {
            return true;
        } else {
            return false;
        }
        return false;
    },
        function (error) {
            return false;
        });
};

this.isContextIndexIconDisplayed = function () {
    return element.all(by.css('.icon-analysis.icon-ci-position')).get(0).isPresent();
};

this.clickContextIndexIconForUnit = function () {
    //browser.executeScript("arguments[0].scrollIntoView();",element.all(by.css('.icon-analysis.icon-ci-position')));
    //	element(by.css('[ng-click="structureCtrl.viewContextDetailByUnit(\'' + unitID + '\', null)"]')).click();
    element.all(by.css('.icon-analysis.icon-ci-position')).get(1).click();
};

this.isContextIndexTableDisplayed = function () {
    return element(by.css('[id="contextIndexTableContainer"]')).isPresent();
};

this.isDeleteUnitPopUpDisplayed = function () {
    return element(by.css('.modal-confirm-message.ng-scope.ng-binding')).isPresent();
};

this.clickCancelButtonInDeleteUnitPopUp = function () {
    element(by.css('[ng-click="cancel()"]')).click();
};

this.clickYesButtonInDeleteUnitPopUp = function () {
    element(by.css('[ng-click="ok()"]')).click().then(function () {
    },
        function (error) {
            console.log("Error in clickYesButtonInDeleteUnitPopUp");
        });
};

this.isDeleteUnitConfirmationPopUpDisplayed = function () {
    return element(by.css('.modal-body.modal-confirm-body.ng-scope')).isPresent();
};



this.getMessageOnDeleteUnitConfirmation = function () {
    return element(by.css('.wrapwords.col-md-10.ng-scope.ng-binding')).getText();
    //return columnvalue.then(function(text) {return text.trim();})
};

this.rightClickOnVersionAndSelectDeleteLayer = function (expectedUnit, version) {

    element.all(by.css('#structure-table-scrollable tr')).each(function (rowElement, index) {

        rowElement.all(protractor.By.tagName('td.col-md-3.width-29.td-structure.ng-scope div span')).get(0).getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                rowElement.all(protractor.By.css('.ng-scope.ng-binding')).each(function (versionEl, versionIndex) {
                    versionEl.getText().then(function (versionText) {
                        if (versionText === version) {
                            browser.executeScript("arguments[0].scrollIntoView();", versionEl.getWebElement());
                            browser.actions().mouseMove(versionEl).perform();
                            browser.actions().click(protractor.Button.RIGHT).perform();
                            browser.actions().mouseMove(versionEl, { x: 50, y: 75 }).click().perform();
                        }
                    },
                        function (error) {
                        });
                },
                    function (error) {
                    });
            }
        },
            function (error) {
            });
    },
        function (error) {
        });
};

this.rightClickOnVersionAndSelectEditLayerXML = function (expectedUnit, version) {

    element.all(by.css('#structure-table-scrollable tr')).each(function (rowElement, index) {

        rowElement.all(protractor.By.tagName('td.col-md-3.width-29.td-structure.ng-scope div span')).get(0).getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                rowElement.all(protractor.By.css('.ng-scope.ng-binding')).each(function (versionEl, versionIndex) {
                    versionEl.getText().then(function (versionText) {
                        if (versionText === version) {
                            browser.executeScript("arguments[0].scrollIntoView();", versionEl.getWebElement());
                            browser.actions().mouseMove(versionEl).perform();
                            browser.actions().click(protractor.Button.RIGHT).perform();
                            browser.actions().mouseMove(versionEl, { x: 50, y: 50 }).click().perform();
                        }
                    },
                        function (error) {
                        });
                },
                    function (error) {
                    });
            }
        },
            function (error) {
            });
    },
        function (error) {
        });
};

this.rightClickOnVersionAndSelectEditLayerVisual = function (expectedUnit, version) {

    element.all(by.css('#structure-table-scrollable tr')).each(function (rowElement, index) {

        rowElement.all(protractor.By.tagName('td.col-md-3.width-29.td-structure.ng-scope div span')).get(0).getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                rowElement.all(protractor.By.css('.ng-scope.ng-binding')).each(function (versionEl, versionIndex) {
                    versionEl.getText().then(function (versionText) {
                        if (versionText === version) {
                            browser.executeScript("arguments[0].scrollIntoView();", versionEl.getWebElement());
                            browser.actions().mouseMove(versionEl).perform();
                            browser.actions().click(protractor.Button.RIGHT).perform();
                            browser.actions().mouseMove(versionEl, { x: 50, y: 25 }).click().perform();
                        }
                    },
                        function (error) {
                        });
                },
                    function (error) {
                    });
            }
        },
            function (error) {
            });
    },
        function (error) {
        });
};





this.clickOnFormatinPoup = function () {
    element.all(by.id('tab-1015-btnInnerEl')).get(0).click().then(function (present) {
    },
        function (error) {
            console.log("Error in clickOnFormatinPoup");
        });
};

this.clickOnTableinPoup = function () {
    element.all(by.id('tab-1015-btnInnerEl')).get(0).click();
};

this.clickOnSearchinPoup = function () {
    element(by.id('button-1043-btnIconEl')).click();
};

this.clickOnGenearalTab = function () {
    element(by.id('tab-1014-btnInnerEl')).click();
};

this.clickOnTextStatus = function () {
    element(by.id('visible-e7')).click();
};


// this.enterdatainEdittile = function () {
// 	element.all(by.css('.x-form-field.x-form-text')).get(19).click();
// 	element.all(by.css('.x-form-field.x-form-text')).get(19).sendKeys("Test");
// };

this.clickoK = function () {
    element.all(by.css('.x-btn-inner.x-btn-inner-center')).get(51).click();
};




this.rightClickOnFirstUnitAndSelectAdd = function () {
    var el = element.all(by.css('.padding-left-5.ng-binding')).get(0);
    //browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.waitForAngular();
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();

    //	browser.actions().mouseMove(el).perform();
    //	browser.actions().click(protractor.Button.RIGHT).perform();
    browser.actions().mouseMove(el, { x: 50, y: 100 }).click().perform();
};


this.isUnitIDContainerPopUpDisplayed = function () {
    return element(by.css('#UnitIDContainer')).isPresent();
};

this.clickCancelInUnitIDContainerPopUp = function () {
    element(by.css('#btnCloseAdd')).click();
};

this.clickSaveInUnitIDContainerPopUp = function () {
    element(by.css('#btnSaveAdd')).click();
};

this.isSaveButtonEnabledInUnitIDContainerPopUp = function () {
    return element(by.css('#btnSaveAdd')).isEnabled();
};

this.isGreenTickDisplayedInUnitIDContainer = function () {
    return element(by.css('.bento-icon-checkmark.color-green')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            return false;
        });
};

this.isRedCrossDisplayedInUnitIDContainer = function () {
    return element(by.css('.bento-icon-close-x.color-red')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            return false;
        });
};

this.writeUnitInUnitIDContainerPopUp = function (unit) {
    element(by.css('[ng-model="UnitIdEditionCtrl.unitName"]')).clear();
    element(by.css('[ng-model="UnitIdEditionCtrl.unitName"]')).sendKeys(unit);
};

this.isHighlightedTabInRightPanelEquals = function (expText) {
    return element(by.css('.ng-isolate-scope.active>a')).getText().then(function (actualText) {
        if (expText === actualText) {
            return true;
        } else {
            return false;
        }
    },
        function (error) {
            return false;
        });
};

this.isColorOfHighlightedTabEquals = function (expColor) {
    return element(by.css('.ng-isolate-scope.active>a')).getCssValue('color').then(function (value) {
        if (expColor === value) {
            return true;
        } else {
            return false;
        }
        return false;
    },
        function (error) {
            return false;
        });
};


this.clickDocumentText = function () {
    element.all(by.css('[ng-click="select()"]')).get(1).click();
};

this.isDocumentTextTabDisplayedInRightPanel = function () {
    return element.all(by.css('[ng-click="select()"]')).get(1).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in in isDocumentTextTabDisplayedInRightPanel");
            return false;
        });
};

this.isDocumentStructureTabDisplayedInRightPanel = function () {
    return element(by.css('li[heading="DOCUMENT STRUCTURE"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in in isDocumentStructureTabDisplayedInRightPanel");
            return false;
        });
};

this.isOriginalTextDisplayedInRightPanel = function () {
    return element.all(by.css('[ng-click="select()"]')).get(2).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in in isOriginalTextDisplayedInRightPanel");
            return false;
        });
};

this.isVersionSelectorDropDownDisplayed = function () {
    return element(by.model('rightPanel.selPreviewDate')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isVersionSelectorDropDownDisplayed");
            return false;
        });
};

this.isLanguageSelectorDropDownDisplayed = function () {
    return element(by.model('rightPanel.selPreviewLang')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isLanguageSelectorDropDownDisplayed");
            return false;
        });
};

this.isPreviewButtonDisplayed = function () {
    return element(by.id('btnPreviewText')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isPreviewButtonDisplayedInRightPanel");
            return false;
        });
};

this.isRefreshTextButtonDisplayed = function () {
    return element(by.id('btnRefreshText')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isRefreshTextButtonDisplayedInRightPanel");
            return false;
        });
};

this.isTextDisplayedInRightPanel = function () {
    return element(by.id('marginalInfo')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isTextDisplayedInRightPanel");
            return false;
        });
};

/*
 * This function tries to click on expand arrow for the expectedUnit
 */
this.expandUnitInStructure = function (expectedUnit) {
    element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div')).each(function (element, index) {
        var unitElement = element.all(protractor.By.css('span')).get(0);
        unitElement.getText().then(function (text) {
            console.log("Text:: " + text + '' + 'expectedUnit:' + expectedUnit);
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                browser.executeScript("arguments[0].scrollIntoView();", unitElement.getWebElement());
                element.all(protractor.By.css('a')).get(0).click().then(function (result) {
                    browser.waitForAngular();
                },
                    function (error) {
                        console.log("Error in expandUnitInStructure");
                    });
            }
        },
            function (error) {
                console.log("Error in expandUnitInStructure");
            });
    },
        function (error) {
            console.log("Error in expandUnitInStructure");
        });
};

/*
 * This function returns true if the version found for the given unit
 */
this.isVersionExistForUnit = function (expectedUnit, version) {
    var versionFound = clickon(expectedUnit, version);
    return versionFound.isDisplayed().then(found => {
        console.log("verson founded:", found);
        return found;
    });
};

/*
 * This function clicks on version, if the version found for the given unit.
 */
this.clickVersionForUnit = function (expectedUnit, version) {

    element.all(by.css('#structure-table-scrollable tr')).each(function (rowElement, index) {
        rowElement.all(protractor.By.tagName('td.col-md-3.width-29.td-structure.ng-scope div span')).get(0).getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                rowElement.all(protractor.By.css('td.position-static.padding-none.align-center.porcent-15.ng-scope .ng-scope.ng-binding')).each(function (versionEl, versionIndex) {
                    versionEl.getText().then(function (versionText) {
                        if (versionText === version) {
                            versionEl.click();
                            return;
                        }
                    },
                        function (error) {
                        });
                },
                    function (error) {
                    });
            }
        },
            function (error) {
            });
    },
        function (error) {
        });

};

/*
 * Checks the pop up header for version name 
 */
this.isVersionNameDisplayedInPopUpHeader = function () {
    return element(by.css('.modal-header.header-import>span')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isVersionDisplayedInPopUpHeader");
            return false;
        });
};

/*
 * Returns the text in pop up header for version 
 */
this.getVersionNameDisplayedInPopUpHeader = function () {
    return element(by.css('.modal-header.header-import>span')).getText().then(function (text) {
        return text;
    },
        function (error) {
            console.log("Error in getVersionDisplayedInPopUpHeader");
            return "";
        });
};

/*
 * Clicks close button in pop up header for version 
 */
this.clickCloseInVersionPopUp = function () {
    element(by.css('[ng-click="close()"]')).click().then(function (text) {
    },
        function (error) {
            console.log("Error in clickCloseInVersionPopUp");
        });
};

/*
 * Clicks the structure displayed in the doc structure 
 */
this.selectVisibleStructureFromRightPanelHeader = function (expDate) {
    element.all(by.css('[ng-class="structure.inForce ? \'color-orange\' : \'\'"]')).each(function (rowElement, index) {
        rowElement.getText().then(function (text) {
            if (expDate === text) {
                rowElement.click();
            }
        });
    },
        function (error) {
            console.log("Error in selectVisibleStructureFromRightPanelHeader");
        });
};

/*
 * Checks if the structure visible in the doc structure page
 */
this.isStructureNameVisibleInRightPanelHeader = function (expDate) {

    return element
        .all(by.cssContainingText('[ng-class="structure.inForce ? \'color-orange\' : \'\'"]', expDate))
        .get(0).isPresent().then(function (displayed) {
            return displayed;
        },
            function (error) {
                console.log("Error in isStructureNameVisibleInRightPanelHeader");
                return false;
            });
};

/*
 * Checks if the validate button is displayed in unit popup 
 */
this.isValidateButtonDisplayedInUnitPopUp = function () {
    return element(by.css('[ng-click="editor.validate()"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isValidateButtonDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Checks if the 'Indent XML' button is displayed in unit popup 
 */
this.isIndentXMLButtonDisplayedInUnitPopUp = function () {
    return element(by.css('[ng-click="editor.beautify()"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isIndentXMLButtonDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Checks if the 'Change History' button is displayed in unit popup 
 */
this.isChangeHistoryButtonDisplayedInUnitPopUp = function () {
    return element(by.css('[ng-click="editor.diff()"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isChangeHistoryButtonDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Checks if the 'Text' button is displayed in unit popup 
 */
this.isTextButtonDisplayedInUnitPopUp = function () {
    return element.all(by.css('[ng-click="editor.insertElement(btn.elementName)"]')).get(0).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isTextButtonDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Checks if the 'Cite' button is displayed in unit popup 
 */
this.isCiteDisplayedInUnitPopUp = function () {
    return element.all(by.css('[ng-click="editor.insertElement(btn.elementName)"]')).get(1).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isCiteDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Checks if the 'Citation' button is displayed in unit popup 
 */
this.isCitationDisplayedInUnitPopUp = function () {
    return element.all(by.css('[ng-click="editor.insertElement(btn.elementName)"]')).get(2).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isCitationDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Checks if the 'Font Size' selector is displayed in unit popup 
 */
this.isFontSizeSelectorDisplayedInUnitPopUp = function () {
    return element(by.css('[ng-model="editor.fontSize"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isFontSizeSelectorDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Checks if the 'Element Selector' drop down is displayed in unit popup 
 */
this.isElementSelectorDropdownDisplayedInUnitPopUp = function () {
    return element(by.css('[ng-model="editor.selectedVariableElement"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isElementSelectorDropdownDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Checks if the 'Element Selector' drop down contains the given option 
 */
this.isOptionPresentInElementSelectorDropDownInUnitPopUp = function (expOption) {
    return element
        .all(by.cssContainingText('[ng-change="editor.insertElementFromSelect()"]>option', expOption))
        .get(0).isDisplayed().then(function (displayed) {
            return displayed;
        },
            function (error) {
                console.log("Error in isOptionPresentInElementSelectorDropDownInUnitPopUp");
                return false;
            });
};

/*
 * Select option from 'Element Selector' drop down 
 */
this.selectOptionFromElementSelectorDropDownInUnitPopUp = function (expOption) {

    element(by.css('[ng-change="editor.insertElementFromSelect()"]')).click();

    element
        .all(by.cssContainingText('[ng-change="editor.insertElementFromSelect()"]>option', expOption))
        .get(0).click().then(function (result) {

        },
            function (error) {
                console.log("Error in selectOptionFromElementSelectorDropDownInUnitPopUp");
            });
};

/*
 * Checks if the xml text contains the expected date in unit popup 
 */
this.isDateValueInXMLTextEquals = function (expDate) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('fecha valor="' + expDate + '"');
    },
        function (error) {
            console.log("Error in isDateValueInXMLTextEquals");
            return false;
        });
};

/*
 * Checks if the xml text contains the expected name for date (fecha) in unit popup 
 */
this.isDateTagTextInXMLTextEquals = function (expTextForDate) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes(expTextForDate + '</fecha>'); //verify text + end tag
    },
        function (error) {
            console.log("Error in isDateTagTextInXMLTextEquals");
            return false;
        });
};

/*
 * Checks if the xml text contains the expected document id text & tag text for Note in unit popup
 * Element selector : 'Note' 
 */
this.isNoteAndTagTextInXMLTextEquals = function (expDocumentID, expText) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<nota ref="' + expDocumentID + '" o=""/>' + expText);
    },
        function (error) {
            console.log("Error in isNoteAndTagTextInXMLTextEquals");
            return false;
        });
};

/*
 * Checks if the xml text contains the expected document id note text & tag text for Note in unit popup 
 * Element selector : 'Text Note'
 */
this.isTextNoteAndTagInXMLTextEquals = function (expDocumentID, expText) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<nota.texto ref="' + expDocumentID + '" o="">' + expText + '</nota.texto>');
    },
        function (error) {
            console.log("Error in isNoteAndTagTextInXMLTextEquals");
            return false;
        });
};

/*
 * Checks if the xml text contains the <derogado> tag 
 * Element selector : 'Repeal'
 */
this.isDerogadoTagDisplayedInXMLText = function () {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<derogado></derogado>');
    },
        function (error) {
            console.log("Error in isDerogadoTagDisplayedInXMLText");
            return false;
        });
};

/*
 * Checks if the xml text contains the <inconstitucional> tag 
 * Element selector : 'Repeal'
 */
this.isInconstitucionalTagDisplayedInXMLText = function () {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<inconstitucional></inconstitucional>');
    },
        function (error) {
            console.log("Error in isInconstitucionalTagDisplayedInXMLText");
            return false;
        });
};

/*
 * Checks if the xml text contains the <destaca.aranzadi> tag 
 * Element selector : 'Highlight'
 */
this.isDestacaAranzadiTagDisplayedInXMLText = function () {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<destaca.aranzadi></destaca.aranzadi>');
    },
        function (error) {
            console.log("Error in isDestacaAranzadiTagDisplayedInXMLText");
            return false;
        });
};

/*
 * Checks if the xml text contains new <recomendaciones><recomendacion> tags 
 * Element selector : 'recomendaciones'
 */
// this.isRecomendacionesTagDisplayedInXMLText = function () {
// 	return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
// 		return text.includes('<recomendaciones><recomendacion></recomendacion></recomendaciones>');
// 	},
// 		function (error) {
// 			console.log("Error in isRecomendacionesTagDisplayedInXMLText");
// 			return false;
// 		});
// };

/*
 * Checks if the xml text contains the expected ementa text & tag text for Note in unit popup 
 * Element selector : 'Ementa'
 */
this.isEmentaTextAndTagInXMLTextEquals = function (ementaOfficial, expText) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<ementa oficial="' + ementaOfficial + '"><parrafo>' + expText + '</parrafo></ementa>');

    },
        function (error) {
            console.log("Error in isEmentaTextAndTagInXMLTextEquals");
            return false;
        });
};

/*
 * Checks if the xml text contains the expected Paragraph id & tag text for Note in unit popup 
 * Element selector : 'Section(Paragraph)'
 */
this.isParagraphIDTextAndTagInXMLTextEquals = function (expID, expText) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<paragraph id="' + expID + '">' + expText + '</paragraph>');

    },
        function (error) {
            console.log("Error in isParagraphIDTextAndTagInXMLTextEquals");
            return false;
        });
};

/*
 * Checks if the xml text contains the expected Clause id & tag text for Note in unit popup 
 * Element selector : 'Clause'
 */
this.isClauseIDTextAndTagInXMLTextEquals = function (expID, expText) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<clause id="' + expID + '">' + expText + '</clause>');

    },
        function (error) {
            console.log("Error in isClauseIDTextAndTagInXMLTextEquals");
            return false;
        });
};

/*
 * Checks if the xml text contains the expected figura id & tag text for Note in unit popup 
 * Element selector : 'Image'
 */
this.isImageIDTextAndTagInXMLTextEquals = function (expID, expText) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<figura ref="' + expID + '">' + expText + '</figura>');

    },
        function (error) {
            console.log("Error in isClauseIDTextAndTagInXMLTextEquals");
            return false;
        });
};

/*
 * Checks if the xml text contains the new '<abstract.summary>' tag for Note in unit popup 
 * Element selector : 'Abstract of Abstract(Resumen de Resumen)'
 */
// this.isAbstractSummaryTagDisplayedInXMLText = function () {
// 	return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
// 		return text.includes('<abstract.summary></abstract.summary>');

// 	},
// 		function (error) {
// 			console.log("Error in isAbstractSummaryTagDisplayedInXMLText");
// 			return false;
// 		});
// };

/*
 * Checks if the xml text contains the new '<parrafo>' tag for Note in unit popup 
 * Element selector : 'Espaciado (Spacing)'
 */
this.isParaffoTagDisplayedInXMLText = function () {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes('<parrafo espaciado-anterior="simple"></parrafo>');

    },
        function (error) {
            console.log("Error in isParaffoTagDisplayedInXMLText");
            return false;
        });
};

/*
 * Checks if the 'xmleditor-insert-modal window' is displayed in unit popup 
 */
this.isXMLEditorInsertModalWindowDisplayed = function () {
    return element(by.css('.xmleditor-insert-modal')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            
            console.log("Error in isXMLEditorInsertModalWindowDisplayed");
            return false;
        });
};

/*
 * Sends value to input field in 'xmleditor-insert-modal window' in unit popup 
 */
this.sendKeysToXMLEditorInsertModalWindow = function (value, position) {
    element.all(by.css('[ng-model="models[element.id]"]')).get(position).isDisplayed().then(function (displayed) {
        element.all(by.css('[ng-model="models[element.id]"]')).get(position).clear();
        element.all(by.css('[ng-model="models[element.id]"]')).get(position).sendKeys(value);
    },
        function (error) {
            console.log("Error in sendKeysToXMLEditorInsertModalWindow");
            return false;
        });
};

/*
 * Click Cancel in 'xmleditor-insert-modal window' in unit popup 
 */
this.clickCancelInXMLEditorInsertModalWindow = function () {
    element(by.css('[ng-click="cancel()"]')).click().then(function (displayed) {

    },
        function (error) {
            console.log("Error in clickCancelInXMLEditorInsertModalWindow");
        });
};

/*
 * Checks if the 'Search Button' is displayed in unit popup 
 */
this.isSearchButtonDisplayedInUnitPopUp = function () {
    return element(by.css('[ng-click="editor.searchCM()"]')).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isSearchButtonDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Clicks on 'Search Button' displayed in unit popup 
 */
this.clickSearchButtonInUnitPopUp = function () {
    element(by.css('[ng-click="editor.searchCM()"]')).click().then(function (result) {

    },
        function (error) {
            console.log("Error in clickSearchButtonInUnitPopUp");
        });
};

/*
 * Checks if the 'Search Field Input' is displayed in unit popup 
 */
this.isSearchFieldInputDisplayedInUnitPopUp = function () {
    return element(by.css('.CodeMirror-search-field')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isSearchFieldInputDisplayedInUnitPopUp");
            return false;
        });
};

/*
 * Sends text to 'Search Input Field' in unit popup 
 */
this.sendKeyToSearchInputFieldAndPressEnter = function (searckKey) {
    element(by.css('.CodeMirror-search-field')).sendKeys(searckKey).then(function (result) {
        element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);
    },
        function (error) {
            console.log("Error in sendKeyToSearchInputFieldAndPressEnter");
        });
};

/*
 * Checks if the 'given value' is highlighted in xml text 
 */
this.isGivenValueHighlightedInXMLContentInUnitPopUp = function (value) {
    return element.all(by.css('.cm-cm-overlay.cm-searching')).get(0).isPresent().then(function (result) {
        return element.all(by.css('.cm-cm-overlay.cm-searching')).get(0).getText().then(function (actualText) {
            console.log(actualText);
            if (actualText === value) {
                return true;
            } else {
                return false;
            }
        },
            function (error) {
                console.log("Error in isGivenValueHighlightedInXMLContentInUnitPopUp");
                return false;
            });
    },
        function (error) {
            console.log("Error in isGivenValueHighlightedInXMLContentInUnitPopUp");
            return false;
        });
};

// /*
//  * Checks if the 'Replace Button' is displayed in unit popup 
//  */
// this.isReplaceButtonDisplayedInUnitPopUp = function () {
// 	return element(by.css('[ng-click="editor.replaceCM()"]')).isDisplayed().then(function (displayed) {
// 		return displayed;
// 	},
// 		function (error) {
// 			console.log("Error in isReplaceButtonDisplayedInUnitPopUp");
// 			return false;
// 		});
// };

// /*
//  * Clicks on 'Replace Button' displayed in unit popup 
//  */
// this.clickReplaceButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.replaceCM()"]')).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in clickReplaceButtonInUnitPopUp");
// 		});
// };

// /*
//  * Checks if the 'Replace All Button' is displayed in unit popup 
//  */
// this.isReplaceAllButtonDisplayedInUnitPopUp = function () {
// 	return element(by.css('[ng-click="editor.replaceAllCM()"]')).isDisplayed().then(function (displayed) {
// 		return displayed;
// 	},
// 		function (error) {
// 			console.log("Error in isReplaceAllButtonDisplayedInUnitPopUp");
// 			return false;
// 		});
// };

// /*
//  * Clicks on 'Replace All Button' displayed in unit popup 
//  */
// this.clickReplaceAllButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.replaceAllCM()"]')).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in clickReplaceAllButtonInUnitPopUp");
// 		});
// };

// /*
//  * Clicks on 'Clear Search Button' displayed in unit popup 
//  */
// this.clickClearSearchButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.clearSearchCM()"]')).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in clickClearSearchButtonInUnitPopUp");
// 		});
// };

// /*
//  * Checks if the 'Cut Button' is displayed in unit popup 
//  */
// this.isCutButtonDisplayedInUnitPopUp = function () {
// 	return element(by.css('[ng-click="editor.cutEditor()"]')).isDisplayed().then(function (displayed) {
// 		return displayed;
// 	},
// 		function (error) {
// 			console.log("Error in isCutButtonDisplayedInUnitPopUp");
// 			return false;
// 		});
// };

//  /*
//  * Clicks on 'Cut Button' displayed in unit popup 
//  */
// this.clickCutButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.cutEditor()"]')).click().then(function (result) {
// 		browser.sleep(1000); //Need to wait some time for the cut to take effect
// 	},
// 		function (error) {
// 			console.log("Error in clickCutButtonInUnitPopUp");
// 		});
// };

// /*
//  * Clicks on 'Copy Button' displayed in unit popup 
//  */
// this.clickCopyButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.copyEditor()"]')).click().then(function (result) {
// 		browser.sleep(1000); //Need to wait some time for the cut to take effect
// 	},
// 		function (error) {
// 			console.log("Error in clickCopyButtonInUnitPopUp");
// 		});
// };


// /*
//  * Clicks on 'Paste Button' displayed in unit popup 
//  */
// this.clickPasteButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.pasteEditor()"]')).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in clickPasteButtonInUnitPopUp");
// 		});
// };

// /*
//  * Checks if the 'Subscript Button' is displayed in unit popup 
//  */
// this.isSubscriptButtonDisplayedInUnitPopUp = function () {
// 	return element(by.css('[ng-click="editor.insertElement(\'subindex\')"]')).isDisplayed().then(function (displayed) {
// 		return displayed;
// 	},
// 		function (error) {
// 			console.log("Error in isSubscriptButtonDisplayedInUnitPopUp");
// 			return false;
// 		});
// };

// /*
//  * Clicks on 'Subscript Button' displayed in unit popup 
//  */
// this.clickSubscriptButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.insertElement(\'subindex\')"]')).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in clickSubscriptButtonInUnitPopUp");
// 		});
// };

// /*
//  * Checks if the 'Angle Quote Button' is displayed in unit popup 
//  */
// this.isAngleQuoteButtonDisplayedInUnitPopUp = function () {
// 	return element(by.css('[ng-click="editor.insertElement(\'angle-quotes\')"]')).isDisplayed().then(function (displayed) {
// 		return displayed;
// 	},
// 		function (error) {
// 			console.log("Error in isSubscriptButtonDisplayedInUnitPopUp");
// 			return false;
// 		});
// };

// /*
//  * Clicks on 'Angle Quote Button' displayed in unit popup 
//  */
// this.clickAngleQuoteButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.insertElement(\'angle-quotes\')"]')).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in clickSubscriptButtonInUnitPopUp");
// 		});
// };

// /*
//  * Checks if the 'Bold Button' is displayed in unit popup 
//  */
// this.isBoldButtonDisplayedInUnitPopUp = function () {
// 	return element(by.css('[ng-click="editor.insertElement(\'bold\')"]')).isDisplayed().then(function (displayed) {
// 		return displayed;
// 	},
// 		function (error) {
// 			console.log("Error in isBoldButtonDisplayedInUnitPopUp");
// 			return false;
// 		});
// };

// /*
//  * Clicks on 'Bold Button' displayed in unit popup 
//  */
// this.clickBoldButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.insertElement(\'bold\')"]')).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in clickBoldButtonInUnitPopUp");
// 		});
// };

// /*
//  * Checks if the 'Italic Button' is displayed in unit popup 
//  */
// this.isItalicButtonDisplayedInUnitPopUp = function () {
// 	return element(by.css('[ng-click="editor.insertElement(\'italic\')"]')).isDisplayed().then(function (displayed) {
// 		return displayed;
// 	},
// 		function (error) {
// 			console.log("Error in isItalicButtonDisplayedInUnitPopUp");
// 			return false;
// 		});
// };

// /*
//  * Clicks on 'Italic Button' displayed in unit popup 
//  */
// this.clickItalicButtonInUnitPopUp = function () {
// 	element(by.css('[ng-click="editor.insertElement(\'italic\')"]')).click().then(function (result) {

// 	},
// 		function (error) {
// 			console.log("Error in clickItalicButtonInUnitPopUp");
// 		});
// };

/*
 * Select first tag(start to end) in xml content in unit popup 
 * [Start tag should not have any inner tags]
 */
this.selectFirstTagInXMLTextInUnitPopUp = function () {
    element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '<')).get(0).getText().then(function (result) {
        element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '/>')).get(0).getText().then(function (result) {
            var startEl = element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', "<")).get(0);
            var endEl = element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', "\>")).get(0);
            browser.sleep(1000);
            browser.actions()
                .mouseMove(startEl, { x: 0, y: 0 })
                .mouseDown()
                .mouseMove(endEl, { x: 15, y: 0 })
                .mouseUp().perform();
            browser.sleep(1000);
        },
            function (error) {
                console.log("Error in selectFirstTagInXMLTextInUnitPopUp - end tag greater than  ");
            });
    },
        function (error) {
            console.log("Error in selectFirstTagInXMLTextInUnitPopUp - start tag less than ");
        });
};



/* THIS FUNCTION IS USED FOR IE BROWSER
 * Select first tag(start to end) in xml content in unit popup 
 * [Start tag should not have any inner tags]
 */
this.selectFirstTagInXMLTextInUnitPopUpInIE = function () {
    element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '<')).get(0).getText().then(function (result) {
        element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '/>')).get(0).getText().then(function (result) {
            var startEl = element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', "<")).get(0);
            var endEl = element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', "\>")).get(0);
            browser.sleep(1000);
            browser.actions()
                .mouseMove(startEl, { x: 0, y: 0 })
                .mouseDown()
                .mouseMove(endEl, { x: 10, y: 0 })
                .mouseUp().perform();
            browser.sleep(1000);
        },
            function (error) {
                console.log("Error in selectFirstTagInXMLTextInUnitPopUpInIE - end tag greater than  ");
            });
    },
        function (error) {
            console.log("Error in selectFirstTagInXMLTextInUnitPopUpInIE - start tag less than ");
        });
};






/*
 * returns the xml content in unit popup 
 */
this.getXMLTextInUnitPopUp = function () {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text;
    },
        function (error) {
            console.log("Error in getXMLTextInUnitPopUp");
            return "";
        });
};

/*
This method selects the data using CTRL +A and performs delete on the 
XML Unit pop up window
*/
this.selectAndDeleteXMLText = function () {

    var webElement = element(by.css('.CodeMirror-scroll'));
    webElement.click();

    browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform();
    browser.sleep(1500);
    browser.actions().sendKeys(protractor.Key.DELETE).perform();


};

//enter the data
this.clickAndEnterData = function (data) {

    element(by.css('.CodeMirror.cm-s-default.CodeMirror-wrap')).click();
    element.all(by.css('.CodeMirror-lines')).get(0).sendKeys(data);

};


/*
 * Checks if the given text exist in the whole xml content in unit popup 
 */
this.isXMLTextInUnitPopUpContains = function (expText) {
    return element(by.css('.CodeMirror-line>span')).getText().then(function (text) {
        return text.includes(expText);
    },
        function (error) {
            console.log("Error in isXMLTextInUnitPopUpContains");
            return false;
        });
};

/*
 * Move the cursor to the end of xml content in unit popup 
 * Note: this moves the cursor to the end of tag (finds by text '>')
 */
this.moveCursorToTheEndOfTagInXMLText = function (index) {
    element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '>')).get(index).getText().then(function (result) {
        var endEl = element.all(by.cssContainingText('.CodeMirror-line>span>span.cm-tag.cm-bracket', '>')).get(index);
        browser.actions()
            .mouseMove(endEl, { x: 10, y: 0 })
            .mouseDown()
            .mouseUp().perform();
    },
        function (error) {
            console.log("Error in moveCursorToTheEndOfXMLText");
            return false;
        });
};

/*
 * Replaces the xml content in unit popup with the given content
 * This uses Replace Button functionality
 */
this.replaceWholeXMLTextInUnitPopUpUsingReplaceButton = function (text) {
    element(by.css('.CodeMirror-line>span')).getText().then(function (actualText) {
        //Enter whole text in search field
        element(by.css('.CodeMirror-search-field')).sendKeys(actualText).then(function (result) {
            element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);
            //Enter new text in replace with field
            element(by.css('.CodeMirror-search-field')).sendKeys(text).then(function (result) {
                element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);
                element(by.css('.CodeMirror-dialog.CodeMirror-dialog-bottom>button')).click().then(function (result) {

                },
                    function (error) {
                        console.log("Error in replaceWholeXMLTextInUnitPopUp - Yes Button");
                    });
            },
                function (error) {
                    console.log("Error in replaceWholeXMLTextInUnitPopUp - Replace With");
                });
        },
            function (error) {
                console.log("Error in replaceWholeXMLTextInUnitPopUp - Search");
            });
    },
        function (error) {
            console.log("Error in replaceWholeXMLTextInUnitPopUp");
        });
};

//enter the text in the replace search box and replace it with new text
this.enterTextInReplaceSearchBox = function (actualtext, newtext) {

    element(by.css('.CodeMirror-search-field')).sendKeys(actualtext);
    element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);

    //Enter new text in replace with field
    element(by.css('.CodeMirror-search-field')).sendKeys(newtext);
    element(by.css('.CodeMirror-search-field')).sendKeys(protractor.Key.ENTER);
    element(by.css('.CodeMirror-dialog.CodeMirror-dialog-bottom>button')).click();

};


/*
 * Browse and select unit text xml file
 */
this.browseAndSelectUnitXMLFile = function (absolutePath) {
    element(by.id('btnImportOriginalTextFileXmlUnit')).isDisplayed().then(function (present) {
        $('#fileUploadUnitStructure').sendKeys(absolutePath);
    },
        function (error) {
            console.log("Error in browseAndSelectUnitXMLFile");
            return false;
        });
};

/*
 * Checks if the file is selected in the xml unit popup 
 */
this.isFileSelectedForUploadingUnitXML = function (fileName) {
    return element(by.cssContainingText('#originaltext-text-add', fileName)).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isFileSelectedForUploadingUnitXML");
            return false;
        });
};


this.clickRefreshTextButtonDisplayedInRightPanel = function () {
    return element(by.id('btnRefreshText')).click().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in clickRefreshTextButtonDisplayedInRightPanel");
            return false;
        });
};

this.getTextofXMLVersionDocumentStructure = function () {
    return element(by.id('marginalInfo')).getText().then(function (text) {
        console.log("aaaa" + text)
        return text;
    },
        function (error) {
            console.log("Error in getTextofXMLVersionDocumentStructure");
            return "";
        });
};

/*
 * Checks if the'Warning Text has been displayed in Document Text
 */
this.isWarningTextDisplayedDocumentText = function () {
    return element.all(by.css('.header.ng-scope')).get(1).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isWarningTextDisplayedDocumentText");
            return false;
        });
};

this.getWarningTextDisplayedDocument = function () {
    return element.all(by.css('.header.ng-scope')).get(1).getText().then(function (text) {
        console.log("pppp" + text);
        return text;
    },
        function (error) {
            console.log("Error in getWarningTextDisplayedDocument");
            return false;
        });
};

this.rightClickOnUnitAndSelectAddAnalysisAuthorNote = function (expectedUnit) {
    element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
        element.getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                browser.actions().mouseMove(element).perform();
                browser.actions().click(protractor.Button.RIGHT).perform();
                browser.actions().mouseMove({ x: 50, y: 375 })
                    .mouseMove({ x: 250, y: 0 })
                    .mouseMove({ x: 0, y: -75 })
                    .click().perform();

                //
                browser.sleep(5000);

            }
        });
    });
};
//click on authornotes icon for a unit in the document structure page
this.clickAuthornotesIcon = function (i) {
    var el = element.all(by.css('[ng-click="structureCtrl.viewAuthorNotes(layer)"]')).get(i);
    //	browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.sleep(2000);
    el.click();
};
//click on thesaurus icon for a unit in the document structure page
this.clickThesaurusIcon = function (i) {
    var el = element.all(by.css('[ng-click="structureCtrl.viewThesaurusDetail(1, node)"]')).get(i);
    //	browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.sleep(2000);
    el.click();
};
//click on contextindex icon for a unit in the document structure page
this.clickContextIndexIcon = function (i) {
    var el = element.all(by.css('.icon-analysis.icon-ci-position')).get(i);
    //	browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
    browser.sleep(2000);
    el.click();
};



/*
 * Checks if the First Unit Present in Document Structure
 */
this.isAuthorNotesTextDisplayed = function () {
    return element(by.css('.font-15.margin-left-20.common-header-font.ng-binding')).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isAuthorNotesTextDisplayed");
            return false;
        });
};

/*
 * Get text of header of Author Notes
 */
this.getTextofAuthorNotesWindow = function () {
    return element(by.css('.font-15.margin-left-20.common-header-font.ng-binding')).getText().then(function (text) {
        console.log("Author" + text);
        return text;
    },
        function (error) {
            console.log("Error in getTextofAuthorNotesWindow");
            return false;
        });
};

this.rightClickOnUnitAndSelectAddAnalysisContextIndex = function (expectedUnit) {
    element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
        element.getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                browser.actions().mouseMove(element).perform();
                browser.actions().click(protractor.Button.RIGHT).perform();
                browser.actions().mouseMove({ x: 50, y: 375 })
                    .mouseMove({ x: 250, y: 0 })
                    .mouseMove({ x: 0, y: -50 })
                    .click().perform();

                //
                browser.sleep(5000);

            }
        });
    });
};

this.isContextIndexHierarchyPresent = function () {
    return element.all(by.css('.titlePanel.ng-binding')).get(0).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isContextIndexHierarchyPresent");
            return false;
        });
};

/*
 * Get text of header of context index
 */
this.getTextofContextIndexHierarchy = function () {
    return element.all(by.css('.titlePanel.ng-binding')).get(0).getText().then(function (text) {
        console.log("context" + text);
        return text;
    },
        function (error) {
            console.log("Error in getTextofContextIndexHierarchy");
            return false;
        });
};

this.rightClickOnUnitAndSelectAddAnalysisRelationship = function (expectedUnit) {
    element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
        element.getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                browser.actions().mouseMove(element).perform();
                browser.actions().click(protractor.Button.RIGHT).perform();
                browser.actions().mouseMove({ x: 50, y: 375 })
                    .mouseMove({ x: 250, y: 0 })
                    .mouseMove({ x: 0, y: -25 })
                    .click().perform();
                    browser.sleep(5000);

            }
        });
    });
};

this.isRelationshipPopUpPresent = function () {
    return element.all(by.css('.modal-content')).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isRelationshipPopUpPresent");
            return false;
        });
};

/*
 * Get text of Add Relationship
 */
this.getTextofRelationshipText = function () {
    return element.all(by.css('.font-15.colorWhite.margin-left-5.ng-binding')).get(3).getText().then(function (text) {
        console.log("relationship" + text);
        return text;
    },
        function (error) {
            console.log("Error in getTextofRelationshipText");
            return false;
        });
};

this.isThesaurusHierarchyPresent = function () {
    return element.all(by.css('.titlePanelThesaurus.ng-binding')).get(0).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isThesaurusHierarchyPresent");
            return false;
        });
};


/*
 * Get text of header of Thesaurus
 */
this.getTextofThesaurusHierarchy = function () {
    return element.all(by.css('.titlePanelThesaurus.ng-binding')).get(0).getText().then(function (text) {
        console.log("thesaurus" + text);
        return text;
    },
        function (error) {
            console.log("Error in getTextofThesaurusHierarchy");
            return false;
        });
};

this.rightClickOnUnitAndSelectAddAnalysisThesaurus = function (expectedUnit) {
    element.all(by.css('#structure-table-scrollable tr td.col-md-3.width-29.td-structure.ng-scope div span')).each(function (element, index) {
        element.getText().then(function (text) {
            if ((text === expectedUnit) || (text === '[' + expectedUnit + ']')) {
                browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
                browser.actions().mouseMove(element).perform();
                browser.actions().click(protractor.Button.RIGHT).perform();
                browser.actions().mouseMove({ x: 50, y: 375 })
                    .mouseMove({ x: 250, y: 0 }).click().perform();
                browser.sleep(5000);

            }
        });
    });
};




// this.isConfirmDeleteDisplayed = function () {
// 	return element(by.css('.modal-content')).isPresent().then(function (present) {
// 		return present;
// 	},
// 		function (error) {
// 			console.log("Error in isConfirmDeleteDisplayed");
// 			return false;
// 		});
// };


this.isYesBtnDisplayedConfirmDelete = function () {
    return element(by.css('[ng-click="ok()"]')).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isYesBtnDisplayedConfirmDelete");
            return false;
        });
};


this.isCancelBtnDisplayedConfirmDelete = function () {
    return element(by.css('[ng-click="cancel()"]')).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isCancelBtnDisplayedConfirmDelete");
            return false;
        });
};

//clickCancelBtnDisplayedConfirmDelete
this.clickCancelBtnDisplayedConfirmDelete = function () {
    return element(by.css('[ng-click="cancel()"]')).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickCancelBtnDisplayedConfirmDelete");
            return false;
        });
};

this.isAddNewUnitXMLOptionPresent = function () {
    return element.all(by.css('[ng-click="structureCtrl.doAction(action)"]')).get(4).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isAddNewUnitXMLOptionPresent");
            return false;
        });
};

this.clickAddNewUnitXMLOptionPresent = function () {
    return element.all(by.css('[ng-click="structureCtrl.doAction(action)"]')).get(4).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickAddNewUnitXMLOptionPresent");
            return false;
        });
};

this.isChangeHistoryBtnDisplayed = function () {
    return element(by.css('[ng-click="editor.diff()"]')).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isChangeHistoryBtnDisplayed");
            return false;
        });
};

this.clickChangeHistoryBtnDisplayed = function () {
    element(by.css('[ng-click="editor.diff()"]')).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickChangeHistoryBtnDisplayed");
            return false;
        });
};

this.clickCloseBtnAddXML = function () {
    return element.all(by.css('.bento-icon-close-x')).get(1).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickCloseBtnAddXML");
            return false;
        });
};

this.isExportStructurePDFOptionPresent = function () {
    return element.all(by.css('[ng-click="structureCtrl.doAction(action)"]')).get(6).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isExportStructurePDFOptionPresent");
            return false;
        });
};

this.clickExportStructurePDFOptionPresent = function () {
    return element.all(by.css('[ng-click="structureCtrl.doAction(action)"]')).get(6).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickExportStructurePDFOptionPresent");
            return false;
        });
};

this.isExportStructureRTFOptionPresent = function () {
    return element.all(by.css('[ng-click="structureCtrl.doAction(action)"]')).get(7).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isExportStructurePDFOptionPresent");
            return false;
        });
};

this.clearXmlTextAll = function () {

    element(by.css('div div div section div div div div xml-editor div div div div div div div div div.CodeMirror-code')).clear();
    //browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform(); 
    //browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform(); 
};

this.clickParagraphButton = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(17).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickParagraphButton");
            return false;
        });
};

this.isParagraphBtnPresent = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(17).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isParagraphBtnPresent");
            return false;
        });
};

this.isStrikeThroughBtnPresent = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(16).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isStrikeThroughBtnPresent");
            return false;
        });
};

this.clickStrikeThroughButton = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(16).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickStrikeThroughButton");
            return false;
        });
};

this.isOverlineBtnPresent = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(15).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isOverlineBtnPresent");
            return false;
        });
};

this.clickOverlineButton = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(15).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickOverlineButton");
            return false;
        });
};

this.isUnderlineBtnPresent = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(14).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isUnderlineBtnPresent");
            return false;
        });
};

this.clickUnderlineButton = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(14).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickUnderlineButton");
            return false;
        });
};



this.clickBoldPulsItalicsButton = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(13).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickBoldPulsItalicsButton");
            return false;
        });
};

this.clickLowerCaseButton = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(19).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickLowerCaseButton");
            return false;
        });
};

this.clickUpperCaseButton = function () {
    return element.all(by.css('div div section div div div div xml-editor div div.xmleditor-sidebar div.group-horizontal button.btn.btn-default.xml-editor-img-btn')).get(18).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickLowerCaseButton");
            return false;
        });
};

//check whether validate button is displayed
this.isValidateBtnDisplayed = function () {
    return element(by.css('[ng-click="editor.validate()"]')).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isValidateBtnDisplayed");
            return false;
        });
};


/*
 * click on validate button 
 */
this.clickValidateButtonDisplayedInUnitPopUp = function () {
    element(by.css('[ng-click="editor.validate()"]')).click().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in clickValidateButtonDisplayedInUnitPopUp");
            return false;
        });
};


/*
 * Check wheather Validate pop-up Displayed
 */
// this.isValidatePOPUPDisplayed = function () {
// 	return element.all(by.css('.modal-content')).get(1).isPresent().then(function (present) {
// 		return present;
// 	},
// 		function (error) {
// 			console.log("Error in isValidatePOPUPDisplayed");
// 			return false;
// 		});
// };

/*
 * Get Text of Error message of validation pop up
 */
this.getTextofErrorValidation = function () {
    return element(by.css('.input-element.wrapwords.ng-scope.ng-binding')).getText().then(function (text) {
        return text;
    },
        function (error) {
            console.log("Error in getTextofErrorValidation");
            return "";
        });
};

/*
* Check wheather OK button is available in Validate pop-up 
*/
this.isOKButtonDisplayedinErrorValidation = function () {
    return element(by.css('[ng-click="ok()"]')).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isOKButtonDisplayedinErrorValidation");
            return false;
        });
};







this.isImageShowforUpperSibling = function () {
    return $('.add-structure-unit-upper-sibling-image.ng-scope').isDisplayed().then(result => {
        return result;
    });
},

    this.isImageShowforLowerSibling = function () {
        return $('.add-structure-unit-lower-sibling-image.ng-scope').isDisplayed().then(result => {
            return result;
        });
    },
    this.isImageShowforChild = function () {
        return $('.add-structure-unit-child-image.ng-scope').isDisplayed().then(result => {
            return result;
        });
    },
    /*
       Click on ok button of error message
   */
    this.clickOKBrowseXMLPopupError = function () {
        return element(by.css('[ng-click="ok()"]')).click().then(function (clicked) {
            return clicked;
        },
            function (error) {
                console.log("error in clickOKBrowseXMLPopupError");
                return error;
            });
    };
/*
 * click on cancel button in Browse XML
 */
this.clickCancelButtonBrowseXML = function () {
    return element(by.css('button[ng-click="close()"]')).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickCancelButtonBrowseXML");
            return false;
        });
};

/*
* Checks if the error pop up displayed
*/
this.isImportUnitXMLPopUPErrorDisplayed = function (fileName) {
    return element(by.css('.modal-content')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isImportUnitXMLPopUPErrorDisplayed");
            return false;
        });
};






/*
* click on ok button in Browse XML pop up error
*/
this.clickOkInBrowseXMLPopupWindow = function () {
    return element(by.css('[ng-click="addUnitStructureCtrl.uploaderXML.queue[0].upload()"]')).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickOKBrowseXMLPopupError");
            return false;
        });
};

/*
* Checking the Import XML pop up window is displayed.
*/
this.browseXMLPopupWindowIsPresented = function () {
    return element(by.css('[ng-click="addUnitStructureCtrl.uploaderXML.queue[0].upload()"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in clickOKBrowseXMLPopupError");
            return false;
        });
};

/*
 * Checks if the error pop up displayed
 */
this.isImportUnitXMLPopUPErrorEnabled = function (fileName) {
    return element(by.css('.modal-content')).isEnabled().then(function (enable) {
        return enable;
    },
        function (error) {
            console.log("Error in isImportUnitXMLPopUPErrorEnabled");
            return false;
        });
};



this.clickEditorButton = function (fileName) {
    element.all(by.id('btnGoToEditMode')).get(1).click();

};

this.selectDeleteAllelement = function () {
    var elt = element(by.id('visible-e8'));
    elt.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.actions().sendKeys(protractor.Key.DELETE).perform();
};

this.clickAddXEditorButtonStructureAction = function () {
    return element(by.xpath('//a[text()="Add new unit from XML editor"]')).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickAddXEditorButtonStructureAction");
            return false;
        });
};

this.isEditTitlePopUpDisplayedXEditor = function (fileName) {
    return element(by.css('#window-1407')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isEditTitlePopUpDisplayedXEditor");
            return false;
        });
};

this.clickEditTitleInAddUnitPopUpXEditor = function () {
    return element(by.id('visible-e7')).click().then(function (result) {
        return result;
    },
        function (error) {
            console.log("Error in click() in clickEditTitleInAddUnitPopUpXEditor");
        });
};

this.isEditTitleInAddUnitPopUpXEditor = function () {
    return element(by.id('visible-e7')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isEditTitleInAddUnitPopUpXEditor");
        });
};

this.clickFormatTabinXEditor = function () {
    return element(by.id('tab-1015-btnInnerEl')).click().then(function (result) {
        return result;
    },
        function (error) {
            console.log("Error in click() in clickFormatTabinXEditor");
        });
};


this.isFormatTabinXEditor = function (fileName) {
    return element(by.id('tab-1015-btnInnerEl')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isFormatTabinXEditor");
            return false;
        });
};

this.isPasteDropdownPresentXEditor = function () {
    return element(by.id('splitbutton-1037')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isPasteDropdownPresentXEditor");
            return false;
        });
};

// this.clickPasteDropdownPresentXEditor = function () {

// 	element(by.id('splitbutton-1037')).isPresent().then(function (result) {
// 		var el = element(by.id('splitbutton-1037'));
// 		browser.actions().mouseMove(el, { x: 30, y: 0 }).click().perform();
// 	},
// 		function (error) {
// 			console.log("Error in clickPasteDropdownPresentXEditor");
// 		});
// };

this.clickPasteFromWordLinkOption = function () {
    return element(by.id('menuitem-1036-textEl')).click().then(function (result) {
        return result;
    },
        function (error) {
            console.log("Error in click() in clickPasteFromWordLinkOption");
        });
};

this.isPasteWordDialogBoxDisplayed = function () {
    return element(by.id('window-1403_header_hd-textEl')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isPasteWordDialogBoxDisplayed");
            return false;
        });
};

this.sendWordKeyIntoDialogBoxWord = function (value) {
    element(by.css('html')).click();
    element(by.css('html')).clear();
    element(by.css('html')).sendKeys(value);
};

this.clickInsertButtonPasteDialogBox = function () {

    element(by.id('button-1405-btnInnerEl')).click().then(function (result) {

    },
        function (error) {
            console.log("Error in clickInsertButtonPasteDialogBox");
        });
};

this.clickCloseButtonXEditor = function () {

    element(by.css('[ng-click="close"]')).click().then(function (result) {

    },
        function (error) {
            console.log("Error in clickCloseButtonXEditor");
        });
};

this.rightClickOniFrameTextFieldAndSelectNumberGraph = function () {

    return element(by.id('visible-e3')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 175 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectNumberGraph");
            return false;
        });
};

this.isNumberGraphImagePresent = function () {
    return element(by.id('visible-e111')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isNumberGraphImagePresent");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectfataTable = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 60 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 5 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectfataTable");
            return false;
        });
};

this.isFataTableIconDisplayed = function () {
    return element(by.id('visible-e118')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isFataTableIconDisplayed");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectDeleteButton = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 200 }).click().perform();
        browser.sleep(4000);


        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectDeleteButton");
            return false;
        });
};

/*
 * Checks if 'Bold Button' displayed in FormatTab in unit popup 
 */
this.isDisplayedBoldButtonInFormatTabInUnitPopUp = function () {
    return element(by.css('.x-btn-icon-el.gcms2-bold')).isDisplayed().then(function (result) {
        return result;
    },
        function (error) {
            console.log("Error in isDisplayedBoldButtonInFormatTabInUnitPopUp");
            return false;
        });
};

/*
 * Clicks on 'Bold Button' displayed in FormatTab in uni	}

this.clickItemizedListPresentXEditor = function (i) {
    element(by.css('[data-type="listitem"]')).get(i).click().then(function (displayed) {
    },
        function (error) {
            console.log("Error in clickItemizedListPresentXEditor");
        });
};

this.isSecondItemizedListPresentInXEditor = function () {
    return element.all(by.css('[data-type="listitem"]')).get(1).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isSecondItemizedListPresentInXEditor");
            return false;
        });
};

/*
 * Right click on first itemized list , and insert: listitem > Insert Item > itemizedlist
 */
this.addItemizedListForFirstExistingItemizedListPresentXEditor = function () {
    element(by.css('[data-type="listitem"]')).click().then(function (displayed) {
        //Right click on current position
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 40 }).perform();
        browser.sleep(2000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(2000);
        browser.actions().mouseMove({ x: 150, y: 0 }).click().perform();
        browser.sleep(1000);
    },
        function (error) {
            console.log("Error in addItemizedListForFirstExistingItemizedListPresentXEditor");
        });
};

/*
 * Right click on first itemized list , and insert: listitem > Insert Item > orderedlist
 */
this.addOrderedListForFirstExistingItemizedListPresentXEditor = function () {
    element(by.css('[data-type="listitem"]')).click().then(function (displayed) {
        //Right click on current position
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 40 }).perform();
        browser.sleep(2000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(2000);
        browser.actions().mouseMove({ x: 150, y: 25 }).click().perform();
        browser.sleep(1000);
    },
        function (error) {
            console.log("Error in addOrderedListForFirstExistingItemizedListPresentXEditor");
        });
};

/*
 * Right click on first itemized list , and insert: listitem > Insert Item > paraffo
 */
this.addParaffoForFirstExistingItemizedListPresentInXEditor = function () {
    element(by.css('[data-type="listitem"]')).click().then(function (displayed) {
        //Right click on current position
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 40 }).perform();
        browser.sleep(2000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(2000);
        browser.actions().mouseMove({ x: 150, y: 50 }).click().perform();
        browser.sleep(1000);
    },
        function (error) {
            console.log("Error in addParaffoForFirstExistingItemizedListPresentXEditor");
        });
};

this.isParaffoPresentInFirstExistingItemizedListPresentInXEditor = function () {
    var firstList = element.all(by.css('[data-type="listitem"]')).get(0);
    return firstList.all(protractor.By.css('[data-type="parrafo"]')).get(0).isDisplayed().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isParaffoPresentInFirstExistingItemizedListPresentInXEditor");
            return false;
        });
};


this.isOrderListPresentXEditor = function () {
    return element(by.css('[data-type="orderedlist"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isOrderListPresentXEditor");
            return false;
        });
};

this.isItemizedListPresentXEditor = ()=>{
    return element(by.xpath('//*[@data-type="itemizedlist"]')).isPresent().then(displayed=>{
        return displayed;
    },
    function (error){
     console.log("Error in isItemizedListPresentXEditor");
     return false;
    }); 
};


this.isSecondOrderListPresentXEditor = function () {
    return element.all(by.css('[data-type="orderedlist"]')).get(1).isPresent().then(function (displayed) {
        if (displayed === false) {
            var el = element.all(by.css('[data-type="orderedlist"]')).get(0);
            return el.all(by.css('[data-type="listitem"]')).get(1).isDisplayed().then(function (displayed) {
                return displayed;
            },
                function (error) {
                    console.log("Error in isDisplayed() in isSecondOrderListPresentXEditor");
                    return false;
                });
        } else {
            return displayed;
        }
    },
        function (error) {
            console.log("Error in isPresent() in isSecondOrderListPresentXEditor");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectItemizedlist = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 45 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 45 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectItemizedlist");
            return false;
        });
};

this.isItemizedIconPresent = function () {
    return element(by.id('visible-e115')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isItemizedIconPresent");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectEliminarButtonItemizedList = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 150 }).click().perform();
        browser.sleep(4000);


        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectEliminarButtonItemizedList");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectDeleteButtonItemizedList = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 175 }).click().perform();
        browser.sleep(4000);


        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectEliminarButtonItemizedList");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectUnidadOption = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 45 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 135 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectUnidadOption");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectEliminarButtonUnidad = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 150 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectEliminarButtonUnidad");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectDeleteButtonUnidad = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 175 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectDeleteButtonUnidad");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectParrafoOption = function () {

    return element(by.id('visible-e113')).click().then(function (result) {

        browser.executeScript('window.scrollTo(0,120);').then(function () {
            element(by.id('visible-e113')).click();
            browser.actions().click(protractor.Button.RIGHT).perform();
            browser.actions().mouseMove({ x: 10, y: 45 }).perform();
            browser.sleep(4000);
            browser.actions().mouseMove({ x: 200, y: 0 }).perform();
            browser.sleep(4000);
            browser.actions().mouseMove({ x: 150, y: 200 }).click().perform();
            browser.sleep(4000);

            return result;
        });
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectUnidadOption");
            return false;
        });
};


this.rightClickOniFrameTextFieldAndSelectHROption = function () {

    return element(by.id('visible-e113')).click().then(function (result) {

        browser.executeScript('window.scrollTo(0,120);').then(function () {
            element(by.id('visible-e113')).click();
            browser.actions().click(protractor.Button.RIGHT).perform();
            browser.actions().mouseMove({ x: 10, y: 60 }).perform();
            browser.sleep(4000);
            browser.actions().mouseMove({ x: 200, y: 0 }).perform();
            browser.sleep(4000);
            browser.actions().mouseMove({ x: 150, y: 75 }).click().perform();
            browser.sleep(4000);

            return result;
        });
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectHROption");
            return false;
        });
};

this.isHRLinePresent = function () {
    return element(by.id('visible-e114')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isHRLinePresent");
            return false;
        });
};

this.rightClickOniFrameSelectTextFieldAndSelectItemizedList = function () {

    return element(by.id('visible-e6')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 90 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 100 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameSelectTextFieldAndSelectNumberGraph");
            return false;
        });
};

this.isItemizedIconPresentParent = function () {
    return element(by.id('visible-e113')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isItemizedIconPresentParent");
            return false;
        });
};

this.rightClickonItemizedListandDeleteOption = function () {

    return element(by.css('[data-type="itemizedlist"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 60 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 175 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickonItemizedListandDeleteOption");
            return false;
        });
};

this.sendTextItemizedList = function (value) {
    return element(by.id('visible-e112')).click().then(function (result) {
        element(by.id('visible-e112')).sendKeys(value);

        return result;
    },
        function (error) {
            console.log("Error in sendTextItemizedList");
            return false;
        });
};


this.rightClickOniFrameSelectTextFieldAndSelectParaffoOption = function () {

    return element(by.id('visible-e6')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 90 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 240 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameSelectTextFieldAndSelectParaffoOption");
            return false;
        });
};

this.clickonXEditorExpandButton = function () {
    element(by.css('[ng-click="resizeFull()"]')).click().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in clickonXEditorExpandButton");
            return false;
        });
};

this.isParagraphSpacePresent = function () {
    return element(by.id('visible-e111')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isParagraphSpacePresent");
            return false;
        });
};

this.rightClickonParagraphSelectNotatextHist = function () {

    return element(by.id('visible-e111')).click().then(function (result) {

        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 150 }).click().perform();
        browser.sleep(4000);

        return result;

    },
        function (error) {
            console.log("Error in rightClickonParagraphSelectNotatextHist");
            return false;
        });
};

this.isNotaTextHistBackgroundPresent = function () {
    return element(by.id('visible-e113')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isNotaTextHistBackgroundPresent");
            return false;
        });
};

this.rightClickonNotaTextandDeleteButton = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 175 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotaTextandDeleteButton");
            return false;
        });
};


this.enterdatainiframe2 = function (data) {

    element(by.id('visible-e33')).click();
    element(by.id('visible-e33')).sendKeys(data);
};


this.clickEditVisual = function () {
    element.all(by.css('padding-left-5 ng-binding')).get(13).click();

};

this.clickOriginalButtonNexttoUnit = function () {
    return element(by.css('[ng-click="structureCtrl.openTextView(node,$parent.node)"]')).click().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in clickOriginalButtonNexttoUnit");
            return false;
        });
};

this.isEditXMLTabPresentOriginalOption = function () {
    return element(by.css('[ng-click="editXml()"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isEditXMLTabPresentOriginalOption");
            return false;
        });
};

this.clickEditXMLTabPresentOriginalOption = function () {
    element(by.css('[ng-click="editXml()"]')).click().then(function () {

    },
        function (error) {
            console.log("Error in clickEditXMLTabPresentOriginalOption");
            return false;
        });
};

this.isXMLTagPresentinEditXML = function () {
    return element(by.css('.CodeMirror-line')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isXMLTagPresentinEditXML");
            return false;
        });
};

this.rightClickOniFrameSelectTextFieldAndSelectOrderListOption = function () {

    return element(by.id('visible-e6')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 90 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 200 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameSelectTextFieldAndSelectParaffoOption");
            return false;
        });
};

// this.rightClickonOrderListandDeleteOption = function () {

// 	return element(by.id('visible-e113')).click().then(function (result) {
// 		browser.actions().click(protractor.Button.RIGHT).perform();
// 		browser.actions().mouseMove({ x: 10, y: 5 }).perform();
// 		browser.sleep(4000);

// 		browser.actions().mouseMove({ x: 200, y: 175 }).click().perform();
// 		browser.sleep(4000);

// 		return result;
// 	},
// 		function (error) {
// 			console.log("Error in rightClickonOrderListandDeleteOption");
// 			return false;
// 		});
// };

this.rightClickonNotaTexthistandSelectFaltatable = function () {

    return element(by.id('visible-e116')).click().then(function (result) {

        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 5 }).click().perform();
        browser.sleep(4000);

        return result;

    },
        function (error) {
            console.log("Error in rightClickonNotaTexthistandSelectFaltatable");
            return false;
        });
};

this.rightClickonParagraphSelectNotatextHistParentOrderList = function () {

    return element(by.id('visible-e113')).click().then(function (result) {

        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 75 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 120 }).click().perform();
        browser.sleep(4000);

        return result;

    },
        function (error) {
            console.log("Error in rightClickonParagraphSelectNotatextHistParentOrderList");
            return false;
        });
};

this.isNotaTextHistBackgroundPresentParentOrderList = function () {
    return element(by.id('visible-e115')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isNotaTextHistBackgroundPresentParentOrderList");
            return false;
        });
};

this.isFatatableIconPresentParentNOtatexthist = function () {
    return element(by.id('visible-e126')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isFatatableIconPresentParentNOtatexthist");
            return false;
        });
};

this.rightClickonNotaTextandDeleteButtonParentOrderList = function () {

    return element(by.id('visible-e116')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 200 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotaTextandDeleteButtonParentOrderList");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectNotaText = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 45 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 90 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectNotaText");
            return false;
        });
};

this.isNotaTextIconPresentParentNumbergraph = function () {
    return element(by.id('visible-e114')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isNotaTextIconPresentParentNumbergraph");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectEliminarButtonNotatext = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 150 }).click().perform();
        browser.sleep(4000);


        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectEliminarButtonNotatext");
            return false;
        });
};


this.rightClickOniFrameTextFieldAndSelectEliminarButtonNumparagraph = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 175 }).click().perform();
        browser.sleep(4000);


        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectEliminarButtonNumparagraph");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectDeleteButtonNotatext = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 175 }).click().perform();
        browser.sleep(4000);


        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectDeleteButtonNotatext");
            return false;
        });
};

this.rightClickOnSecondParagraphinFrameTextFieldAndSelectHROption = function () {

    element(by.id('visible-e16')).isPresent().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 20 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: -20 }).click().perform();
        browser.sleep(4000);
    },
        function (error) {
            console.log("Error in rightClickOnSecondParagraphinFrameTextFieldAndSelectHROption");
        });
};

this.rightClickOniFrameTextFieldAndSelectParagraphOption = function () {

    return element(by.id('visible-e113')).click().then(function (result) {

        browser.executeScript('window.scrollTo(0,120);').then(function () {
            element(by.id('visible-e113')).click();
            browser.actions().click(protractor.Button.RIGHT).perform();
            browser.actions().mouseMove({ x: 10, y: 45 }).perform();
            browser.sleep(4000);
            browser.actions().mouseMove({ x: 200, y: 0 }).perform();
            browser.sleep(4000);
            browser.actions().mouseMove({ x: 150, y: 175 }).click().perform();
            browser.sleep(4000);

            return result;
        });
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectParagraphOption");
            return false;
        });
};

this.rightClickOniFrameTextFieldAndSelectEliminarButtonParagraph = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 150 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectEliminarButtonParagraph");
            return false;
        });
};

this.rightClickonTextLorumandSelectFaltaFigura = function () {

    return element(by.id('visible-e15')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: -90 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickonTextLorumandSelectFaltaFigura");
            return false;
        });
};

this.isFaltaFiguraIconDisplayedAnother = function () {
    return element(by.css('[src="../editor/img/editor/editor-missing-image-bkg-icon.png"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isFaltaFiguraIconDisplayedAnother");
            return false;
        });
};

this.clickFaltaFiguraIconDisplayedAnother = function () {
    return element(by.css('[src="../editor/img/editor/editor-missing-image-bkg-icon.png"]')).click().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in clickFaltaFiguraIconDisplayedAnother");
            return false;
        });
};
//click on add button in insert falta table pop up
this.clickAddButtonFaltaFiguraDialogBox = function () {
    element.all(by.css('.x-btn.x-unselectable.x-box-item.x-toolbar-item.x-btn-default-small.x-icon-text-left.x-btn-icon-text-left.x-btn-default-small-icon-text-left')).get(0).click();
};
//click anywhere inside the falta table after insertion(click inside row or colomn)
this.clickInsideFaltaTable = function () {
    element.all(by.css('[data-type="tbody"]')).click().then(function (result) {
        return result;
    },
        function (error) {
            console.log("Error in click() in clickInsideFaltaTable");
            return false;
        });
};
this.rightClickonTextLorumandSelectFaltaTable = function () {

    return element(by.id('visible-e15')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 5 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: -75 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickonTextLorumandSelectFaltaTable");
            return false;
        });
};


this.isFaltaTableIconDisplayedAnother = function () {
    return element(by.css('[src="../editor/img/editor/editor-missing-table-bkg-icon.png"]')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isFaltaTableIconDisplayedAnother");
            return false;
        });
};
//click on the falta table icon
this.clickFaltaTableIconDisplayedAnother = function () {
    return element.all(by.css('[data-type="notatextohist"]')).get(2).click().then(function (displayed) {
    },
        function (error) {
            console.log("Error in clickFaltaTableIconDisplayedAnother");
            return false;
        });
};

this.clickCancelButtonFaltaTableDialogBox = function (value) {
    element.all(by.css('span.x-btn-inner.x-btn-inner-center')).get(50).click().then(function (result) {
        //50th button matches with accept button in this popup
    },
        function (error) {
            console.log("Error in click() in clickCancelButtonFaltaTableDialogBox");
        });
};

this.rightClickOniFrameTextFieldAndSelectfataTableParent = function () {

    return element(by.id('visible-e3')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 45 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 30 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectfataTableParent");
            return false;
        });
};

this.clickCancelButtonFaltaTableDialogBoxParent = function (value) {
    element.all(by.css('span.x-btn-inner.x-btn-inner-center')).get(46).click().then(function (result) {
        //50th button matches with accept button in this popup
    },
        function (error) {
            console.log("Error in click() in clickCancelButtonFaltaTableDialogBoxParent");
        });
};

this.rightClickOniFrameTextFieldAndSelectItemizedList = function () {

    return element(by.id('visible-e3')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 0 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 150, y: 110 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectItemizedList");
            return false;
        });
};


this.rightClickOniFrameTextFieldAndSelectListItemInsertBreak = function () {

    return element(by.id('visible-e113')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 30 }).click().perform();
        browser.sleep(4000);


        return result;
    },
        function (error) {
            console.log("Error in rightClickOniFrameTextFieldAndSelectListItemInsertBreak");
            return false;
        });
};

this.isItemizedListIconPresent = function () {
    return element(by.id('visible-e112')).isPresent().then(function (displayed) {
        return displayed;
    },
        function (error) {
            console.log("Error in isItemizedListIconPresent");
            return false;
        });
};

//this  function checks whether different format buttons from "Add new unit from XML editor" window is present or not .
//you can check for particular format by giving the proper index
this.isRequiredFormatButtonPresent = function (i) {
    return element.all(by.css('.btn.btn-default.xml-editor-img-btn')).get(i).isPresent().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in isRequiredFormatButtonPresent");
            return false;
        });
};

//this functions clicks on the any one of format buttons
//you can click on the required format button by giving the proper index
this.clickRequiredFormatButton = function (i) {
    element.all(by.css('.btn.btn-default.xml-editor-img-btn')).get(i).click().then(function (present) {
        return present;
    },
        function (error) {
            console.log("Error in clickRequiredFormatButton");
            return false;
        });
};
//right click on any original link and select Edit visual option.
this.rightClickOnOrignalVisual = function (i) {
    //var el = element.all(by.css('[ng-click="structureCtrl.openTextView(node,$parent.node)"]')).get(i);
    var el = element.all(by.css('.ng-scope.ng-binding')).get(i);
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.actions().mouseMove(el, { x: 25, y: 25 }).click().perform();
};

//right click on any original link and select Edit layer(xml Editor) option
this.rightClickOnOrignalXML = function (i) {
    var el = element.all(by.css('[ng-click="structureCtrl.openTextView(node,$parent.node)"]')).get(i);
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.actions().mouseMove(el, { x: 25, y: 50 }).click().perform();
};

//right click on any original link and select delete layer
this.rightClickOnOrignalDeleteLayer = function (i) {
    //var el = element.all(by.css('[ng-click="structureCtrl.openTextView(node,$parent.node)"]')).get(i);
    var el = element.all(by.css('.ng-scope.ng-binding')).get(i);
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.actions().mouseMove(el, { x: 25, y: 75 }).click().perform();
};

// //Move to Inser elements from all tab options
// this.movemousetoInsertElements = function (i) {
// 	var el = element.all(by.css('.x-menu-item-text.x-menu-item-indent.x-menu-item-indent-right-arrow')).get(i);
// 	browser.actions().mouseMove(el).perform();
// };


//Below function will be selecting the Insert element options passing through correct Index 
this.insertElementOptions = function (i) {
    element.all(by.css('.x-menu-item-link')).get(i).click();
};



//Fill Mandotory Fields from Attributes
this.selectDefinitivoMandotoryAttributeFields = function (selectSorN) {
    return element(by.id('ext-gen2722')).click();
    return element.all(by.css('.x-boundlist-item')).get(selectSorN).click();

};
//selecting a text inside the frame 2
this.selectAText = function () {
    browser.sleep(1000);
    var el = element(by.css('[data-type="parrafo"]'));
    browser.actions().mouseMove(el).click().perform();
    browser.actions().sendKeys(protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.HOME)).perform();
    browser.sleep(3000);
};


this.rightClickonNotoTextoandDeleteOption = function () {
    return element(by.css('[data-type="notatexto"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 200 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotoTextoandDeleteOption");
            return false;
        });
};

this.rightClickonNumaparagraphandDeleteOption = function () {
    return element(by.css('[data-type="numparagraph"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 185 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonNumaparagraphandDeleteOption");
            return false;
        });
};

this.rightClickonNumaparagraphandRemoveOption = function () {
    return element(by.css('[data-type="numparagraph"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 165 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonNumaparagraphandRemoveOption");
            return false;
        });
};

this.rightClickonTableandDeleteOption = function () {
    return element(by.css('[data-type="table"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 80 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 120 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonNumaparagraphandDeleteOption");
            return false;
        });
};



//right click on the orderlist in te frame2 and select delete option
this.rightClickonOrderListandDeleteOption = function () {
    return element(by.css('[data-type="orderedlist"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 55 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 180 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonOrderListandDeleteOption");
            return false;
        });
};

this.rightClickonReproandDeleteOption = function () {
    return element(by.css('[data-type="repro"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 60 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 185 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotoTextoandDeleteOption");
            return false;
        });
};


this.rightClickondirwebandDeleteOption = function () {
    return element(by.css('[data-type="dirweb"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 20 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 165 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotoTextoandDeleteOption");
            return false;
        });
};


this.rightClickondirwebandRemoveOption = function () {
    return element(by.css('[data-type="dirweb"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 20 }).perform();
        browser.sleep(5000);
        browser.actions().mouseMove({ x: 200, y: 135 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickondirwebandRemoveOption");
            return false;
        });
};

this.rightClickonNotaandDeleteOption = function () {
    return element(by.css('[data-type="nota"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 20 }).perform();
        browser.sleep(5000);
        browser.actions().mouseMove({ x: 200, y: 135 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotaandDeleteOption");
            return false;
        });
};


this.rightClickonNotaandRemoveOption = function () {
    return element(by.css('[data-type="nota"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 20 }).perform();
        browser.sleep(5000);
        browser.actions().mouseMove({ x: 200, y: 105 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotaandRemoveOption");
            return false;
        });
};



this.rightClickonNotatextohistandDeleteOption = function () {

    return element(by.css('[data-type="notatextohist"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 195 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotoTextoandDeleteOption");
            return false;
        });
};
this.rightClickonfaltatableandDeleteOption = function () {
    return element.all(by.css('[data-type="parrafo"]')).get(1).click().then(function (result) {
        //return element(by.css('[data-type="parrafo"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 30 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 195 }).click().perform();
        browser.sleep(4000);
        return result;
    },
        function (error) {
            console.log("Error in rightClickonfaltatableandDeleteOption");
            return false;
        });

};


this.rightClickonParrafoandDeleteOption = function () {

    return element(by.css('[data-type="parrafo"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 20 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 200 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotoTextoandDeleteOption");
            return false;
        });
};
//right click on math and sel;ect delelete option

this.rightClickonMathandDeleteOption = function () {

    return element(by.css('[data-type="parrafo"]')).click().then(function (result) {
        browser.actions().click(protractor.Button.RIGHT).perform();
        browser.actions().mouseMove({ x: 10, y: 20 }).perform();
        browser.sleep(4000);
        browser.actions().mouseMove({ x: 200, y: 185 }).click().perform();
        browser.sleep(4000);

        return result;
    },
        function (error) {
            console.log("Error in rightClickonNotoTextoandDeleteOption");
            return false;
        });
};


//click "orginal" label of other document


this.clickOnOriginalLabel = function (i) {
    element.all(by.css('.ng-scope.ng-binding')).get(i).click();
};

this.clickItemizedListXEditorAndEdit = function () {
    element.all(by.css('[data-type="listitem"]')).click();
    browser.sleep(2000);
};

//Below function can be used in all available buttons inside the Edit Visual Text
this.clickonAnyAvailableButtonInEditVisual = function (i) {
    //element.all(by.css('.x-btn-inner.x-btn-inner-center')).get(i).click();
    element.all(by.css('.x-btn-button')).get(i).click();
};

this.availableUnitInDocumentStructure = function (i) {
    element.all(by.css('[ng-context-menu="getMenuOptionsNodo(node)"]')).get(i).getText().then(function (actualText) {
        console.log("Unit Name :" + actualText);
        return actualText;

    },
        function (error) {
            console.log("Error in availableUnitInDocumentStructure");
            return false;
        });

};
