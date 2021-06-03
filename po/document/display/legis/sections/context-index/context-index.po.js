var  contextindexpage= function () {


	this.urlLoad = function (user, password) {

		var loginpopup = element(by.model('credentials.username'));
		loginpopup.isPresent().then(function (result) {

			if (result) {

				element(by.model('credentials.username')).sendKeys(user);
				element(by.model('credentials.password')).sendKeys(password);
				element(by.buttonText('Login')).click();

			}
			else {

			}
		});
	};



	//this button is used to check whethre the delete button is disable or not

	this.isDeleteDisabled = function(){

		var loc= element(by.xpath("//div[@class='modal-content']//a[@ng-click='deleteSelected()']"));
		return loc.getAttribute('disabled').then(function (result) {
            console.log("value of getAttribute", result);
            if (result === 'true') {
                console.log("delete button is Disabled");
                return true;

            } else {
                browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
                loc.click();
                return false;
            }
        },
            function (error) {
                console.log("error in clickOnbuttonInsideSectionTable:", error);
                return false;
            });
		
		};

   //This method takes the context index type value to select from dropdown and clicks on the given value.

    this.selectContextIndexTypeFromDropdown = function (expectedtype) {

	var selectcontextindexType = element(by.xpath('(//select[contains(@ng-model,"AddModalCtrl")])[1]')).click();
    var selectcontextindexvalue = element.all(by.xpath("//option[@class='ng-scope ng-binding']")).each(function (types) {
	types.getText().then(function (result) {
		if (result == expectedtype) {
			types.click();
			return result;
			}
		else {
		return false;
		console.log("error in selectContextIndexTypeFromDropdown")
		}

		});

	  });
	};

     //enter the text in the Internal note field

     this.enterTextInInternalNote = function(value){
		element(by.xpath('//textarea[contains(@ng-model,"internalNote")]')).clear();
        element(by.xpath('//textarea[contains(@ng-model,"internalNote")]')).sendKeys(value);

     };

    //this function is uesd to click on the Codex Systematic Index dropdown and select a option

    this.selectCodexSystematicIndexFromDropdown = function (givenText) {

        var selectcontextindexType = element(by.xpath('(//select[contains(@ng-model,"ModalCtrl")])[2]')).click();
        var selectcontextindexvalue = element.all(by.xpath("//option[@class='ng-binding']")).each(function (types) {
        types.getText().then(function (result) {
            if (result == givenText) {
                types.click();
                return result;
                }
            else {
            return false;
            console.log("error in selectCodexSystematicIndexFromDropdown")
            }
    
            });
    
          });
        };
    
    //this function is used to enter values in 3 fields of  show filters search
    //refer the below to know what is to be passed in the value
    //Document/unit:'unit',context Index Type:'type',Context Index term:'term'
    this.enterValueInSearchField = function (value,data) {

		element(by.xpath("//input[@ng-model='" +value+ "']")).sendKeys(data);
		element(by.xpath("//input[@ng-model='" +value+ "']")).sendKeys(protractor.Key.ENTER);
	};

    //To delete,edit,copy and detail view of particular record in actions column context index table
	
	this.contextindexAction = function (action) {

		if (action == 'delete')
            element(by.xpath("//a[@ng-click='" + action + "ContextIndex($item.idFicha)']")).click();
            
        else if(action == 'detail')
            element(by.xpath("//a[@ng-click='" + action + "ContextIndex($row, dp, $item.idFicha)']")).click(); 

        //give 'edit' in action to perform editing
        //give 'add' in the action to perform copy operation
        else
			element(by.xpath("//a[@ng-click='" + action + "ContextIndex($item)']")).click();

	};

    //this function is used only to click on "show filters" button since the generic function in global po is not working
    this.clickOnbuttonInsideSectionTable = function (buttonName) {

		var loc= element(by.xpath("//div[@class='modal-content']//following::*[contains(text(),'" + buttonName + "')]"));
		return loc.isEnabled().then(function (result) {
			if (result == true) {
				browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
				loc.click();
				return result;
			} else {
				console.log(buttonName + " button is Disabled");
				return false;
			}
		},
			function (error) {
				console.log("error in clickOnbuttonInsideSectionTable:", error);
				return false;
			});

	};

	//check the information displayed after clicking on lens icon.

	this.verifyInfoOfLensIcon = function(data) {

		return element(by.xpath("//strong[contains(text(),'" +data+ "')]//..//span")).getText();
	};

	//delete the added unit by clicking on the 'x' button next to it
	this.deleteUnitIncontextIndexPopUp= function(action){

		if(action.includes('edit')){
		var xbutton = element(by.xpath("//span[@ng-click='ContextIndexEditModalCtrl.deleteElemetOflistSelectedNode($index)']"));
		return xbutton.isPresent().then(function(result){
			if (result == true){
				browser.actions().click(xbutton).perform();

			}else{
				console.log("Error in deleteUnitIncontextIndexPopUp:edit");
				return false;
			}
		});
	}
	     else{
			var xbutton = element(by.xpath("//span[@ng-click='ContextIndexAddModalCtrl.deleteElemetOflistSelectedNode($index)']"));
			return xbutton.isPresent().then(function(result){
				if (result == true){
					browser.actions().click(xbutton).perform();
	
				}else{
					console.log("Error in deleteUnitIncontextIndexPopUp:copy");
					return false;
				}
			});

		 }
	};
	
	//return the count in view all link
	var _searchViewAllLink = element(by.id('contextIndexViewAllLink')); 

		this.ContextIndexTotal= function() {
		return _searchViewAllLink.getText().then(function (count) {
			return parseInt(count.replace("(", "").replace(")", ""));
		});
	};

	//this function is used to click on 'save' button in add unit popup
	
	this.clickOnSaveInUnitPopup=function(){
	 
		var el= element(by.xpath("(//button[@id='btnSaveAdd'][contains(text(),'Save')])[2]"));
		return el.isPresent().then(function(result){
			if(result===true){
				browser.actions().click(el).perform();

			}
			else{
				console.log("Error in clickOnSaveInUnitPopup");
				return false;
			
			}
		});	  
	};

	//this function is used to check the data in a particular row of context index table
	//whtehre the appropriate data is present or not
	this.isValidDataPresent = function(expectedcolumn,expecteddata){

    if(expectedcolumn.includes('term')){
 
		var el1=element(by.xpath("//div[@class='wj-cell wj-alt wj-wrap']//*[contains(text(),'" +expecteddata+ "')]"));
		return el1.isPresent().then(function(result1){

			if(result1===true)

				return true;

			else{
				console.log("Error in isValidDataPresent");
				return false;
			}

		});

	}

	else{
		var el2=element(by.xpath("//div[@class='wj-cell wj-alt wj-wrap'][contains(text(),'" +expecteddata+ "')]"));
		return el2.isPresent().then(function(result2){

			if(result2===true)

				return true;

			else{
				console.log("Error in isValidDataPresent");
				return false;
			}

		});
	}
	};

	//this function is used to Select Value from Context Index in edit mode.
	this.selectValueFromContextIndexTermInEdit = function (indexValue) {
		var splitValue = indexValue.split(',');
		console.log("Length:: " + splitValue.length);
		for (var row = 0; row < splitValue.length; row++) {
			var loc = element(by.xpath("(//*[@id='panel3']//following::div[contains(text(),'"  +splitValue[row]+  "')]//..//div[contains(@class,'bento-toggle')])[1]"));
			console.log("index Value:: " + splitValue[row]);
			browser.executeScript("arguments[0].scrollIntoView();", loc.getWebElement());
			browser.actions().click(loc).perform();
		}
	};

	//this function is used to click on arrow next to a unit which has sub units
	this.expandUnit = function(expectedunit){

        //collapse or decollapse the unit
		var ele=element(by.xpath("//span[contains(text(),'" +expectedunit+  "')]//..//i"));
		ele.isPresent().then(function(result){
			if(result===true){

				browser.actions().click(ele).perform();
			}

		else{
			console.log("Error in expandUnit");
			return false;
		}

		});
		 
	};

	

};

module.exports = new contextindexpage;