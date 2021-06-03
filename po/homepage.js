var HomePage = function () {

                    
 var _bibliographylink= element(by.id('itemTextLink1'));
     
 var _jurisprudence= element(by.id('itemTextLink10'));

 jurisprudenceisdisplayed = function() 
 {
      return this._jurisprudence.isDisplayed();
   };
                    
  bibliographylinkDisplayed = function() {
                    return this._bibliographylink.isDisplayed();
    };
                    
     
};
 module.exports = HomePage; 

 /*var HomePage = function () {

       // trLogo = element(by.css('img[alt="Thomson Reuters"]'));
       var bibliography = element(by.id("itemTextLink1"));
        var jurisprudence = element(by.id("itemTextLink10"));
       var practicalContent = element(by.id("itemTextLink39"));

    HomePage.prototype = Object.create({}, {
    jurisprudenceisdisplayed= jurisprudence.isDisplayed();}},
    bibliographylinkdisplayed= bibliography.isDisplayed();}}
    });
    };


    module.exports = HomePage; */
