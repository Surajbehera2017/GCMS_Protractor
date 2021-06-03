var WIPLeftPanePart = function () {
    /*
    ATCHUNG!: Even if we are locationg the links by id this does NOT ensure the matching between the desired link and the id is correct.
    This happens because GCMS creates the link list dynamically, this menas that today itemTextLink1 = BIBLIOGARPHY link, but tomorrow could be something else.
    Every time a new item is added to the list the ids of the items below change, meaning this PO should be updated accordingly. Life isn't fair, sorry.
    */

    this.bibliographyLink = element(by.id('itemTextLink1'));
    //...
    //The link list should be completed & tested with all the other remaining links
    //...
    this.legislationLink = element(by.id('itemTextLink66'));
    this.regulationsLink = element(by.id('itemTextLink67'));
    this.searchRegulationsLink = element(by.id('itemTextLink68'));

}

module.exports = WIPLeftPanePart;