var ReadMoreModal = function () {

	var _titleLabel= element(by.css('[name="titleReadMoreDirective"]'));
	var _descriptionLabel= element(by.css('[name="contentMessageReadMoreDirective"]'));
	var _closeButton= element(by.css('[name="btnCloseReadMoreDirective"]'));

	this.isDisplayed = function()
	{
		return _titleLabel.isPresent();
	};
	
	title= _titleLabel.getText();
	description= _descriptionLabel.getText();
	close= _closeButton.click();

};

module.exports = new ReadMoreModal;
