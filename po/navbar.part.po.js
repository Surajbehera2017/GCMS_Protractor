var NavbarPart = function () {
    this.wipLink = element(by.css('#lnkHeaderWIP'));
    this.productWorkbenchLink = element(by.css('#lnkHeaderProducts'));
    this.administrationLink = element(by.css('#lblAdmin'));
    this.logoffLink = element(by.css('#lnkHeaderLogOut'));

    this.goToWip = function () {
        return this.wipLink.click();
    };

    this.goToProductWorkbench = function () {
        return this.productWorkbenchLink.click();
    };

    this.goToAdministration = function () {
        return this.administrationLink.click();
    };

    this.goToLogoff = function () {
        return this.logoffLink.click();
    };
}

module.exports = NavbarPart;