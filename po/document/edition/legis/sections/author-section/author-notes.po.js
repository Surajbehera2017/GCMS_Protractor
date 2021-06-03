var authornotessection = function() {


   var _editorialview = element(by.css('[ng-click="authorNotesSumData.viewAuThorNotesDetailAll()"]'));
   var _editorialview = element(by.css('div a#authorNotesViewAllLink strong.ng-binding'));
   var _authorTableContainer = element(by.css('#authorTableContainer'));
   var _deletenote = element(by.css('[ng-click="deleteAuthorNote($item.id)"]'));
   var _yesbutton = element(by.css('.btn.btn-primary.pull-right.ng-scope.ng-binding'));
   var _closeTable = element(by.css('[ng-click="close()"]'));
   var _fristcheckboxnote = element.all(by.css('input[ng-model="$item.selected"]'));
   var _fristcheckboxnote = element.all(by.css('[name="R0_C0"]>div>input'));
   var _topdeletebutton = element(by.css('#headerTableAuthorNote li:nth-child(3) a'));
   var _topdeletebutton = element.all(by.css('a[ng-click="deleteAuthorNote($item.id)"]')).get(0);
   var _first = element(by.css('button[ng-click^="first()"]'));
   var _previous = element(by.css('button[ng-click^="previous()"]')); 
   var _next = element(by.css('button[ng-click^="next()"]')); 
   var _last = element(by.css('button[ng-click^="last()"]'));
   var _selectItem = element(by.model('$item.selected'));
    

   
   
   
   
   this.clickSelectedItem = function () {
			return _selectItem.click();
		};
	
	
		this.haseditorialview = function () {
            return _editorialview.isDisplayed();
        };
    
        this.getTextviewall = function (){
           return _editorialview.getText();
        };
    
        this.clickeditorialview = function () {
            _scrollTo(_editorialview);
            return _editorialview.click();
        };
    
        this.hasauthorTableContainer = function () {
              return _authorTableContainer.isDisplayed();
        };
    
        this.clickdeletenote = function () {
            return _deletenote.click();
        };
    
        this.clickyesbutton = function () {
            return _yesbutton.click();
        };
    
        this.clickFirst = function () {
            _scrollTo(_first);
            return _first.click();
        };
    
        this.clickPrevious = function () {
            _scrollTo(_previous);
            return _previous.click();
        };
    
        this.clickNext = function () {
            _scrollTo(_next);
            return _next.click();
        };
    

        this.clickLast = function () {
            _scrollTo(_last);
            return _last.click();
        };
    
        this.clickcloseTable = function (){
            return _closeTable.click();
        };
    
        this.clickFristCheckbox = function () {
            // From the element list, get the fist one
            var notecheckbox = _fristcheckboxnote.first();
            // Call the inherited method.
            //this._scrollTo(notecheckbox);
            // Perform the relevant action for the test
            return notecheckbox.click();
        };
    
        this.clickonTapdeleteButton = function (){
            return _topdeletebutton.click();
        };
    
};

module.exports = new authornotessection;