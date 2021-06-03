
var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var relationshipsearch = require('../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var jiraNumber = 'GCMSQABANG-2261';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship', function () {

  beforeEach(function () {

    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id8);
    relationshippage.urlLoad();

  });


  //03 - Relationships -Documents rotation - Rotation enabled

  it('Relationships - Documents rotation - Rotation enabled.'+jiraNumber, function () {

    browser.waitForAngular();

    //expand relationship section
     globalpage.expandSectionInLeftPanel(loaded.Relationships);

    // click on add button on relationship section 
    globalpage.clickOnSectionButton(loaded.Relationships, loaded.AddButton);

    //select the relationship type
    relationshippage.clickandSelect(loaded.TypeField, loaded.relation_type);

    //enter the marginal in target section
    relationshippage.sendValueTo(loaded.TargetPanel, loaded.CodeField, loaded.code);
    relationshippage.sendValueTo(loaded.TargetPanel, loaded.YearField, loaded.year);
    relationshippage.sendValueTo(loaded.TargetPanel, loaded.NumberField, loaded.number);

    //click on document structure and add the unit
    relationshippage.selectUnitFromStructureButton(loaded.TargetPanel, loaded.unit_name);

    //click on ok button in the popup
    globalpage.clickOnButtonForGlobal(loaded.ok_button);

    //enter some data in note textbox  of the target panel


    //Verify current marginal id is displayed as disabled in source section
    expect(relationshippage.isCurrentMarginalIdDisabledInSource()).toEqual(true);

    //Click rotation icon 
    relationshippage.clickOnIcon(loaded.rel_section, loaded.rotate_icon);
    browser.waitForAngular();

    //click on the ok button in warning popup
    globalpage.clickOnButtonForGlobal(loaded.ok_button);
    
    //verify current marginal id is displayed as disabled in target section
    expect(relationshippage.isCurrentMarginalIdDisabledInTarget()).toEqual(true);
    browser.waitForAngular();

    //close add relationship window
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(2000);

  });


  //02 - Relationships -Documents rotation - Consolidations


  it('Relationships -Documents rotation - Consolidations1', function () {

    browser.waitForAngular();
    browser.driver.manage().window().maximize();
    browser.waitForAngular();
    relationshippage.expandRelationshipTable();
    relationshippage.clickAddButtonOnTop();

    relationshippage.selectUnitDropdown();
    relationshippage.UnitSearchAndEnter(testData.legislation.sections.relationShip.unit2);

    relationshippage.selectPartDropdownOfSource();
    relationshippage.partSearchAndEnterOfSource(testData.legislation.sections.relationShip.part1);
    relationshippage.selectComplementDropdownOfSource();
    relationshippage.complementSearchAndEnterOfSource(testData.legislation.sections.relationShip.complement);

    relationshippage.selectTypeDropdown();
    relationshippage.enterRelationShipType(testData.legislation.sections.relationShip.type4);


    relationshippage.selectCodeDropdownOfDestination();
    relationshippage.enterCode(testData.legislation.sections.relationShip.code2);
    relationshippage.enterYear(testData.legislation.sections.relationShip.year3);
    relationshippage.enterN(testData.legislation.sections.relationShip.n3);


    relationshippage.selectUnitDropdownOfDestination();
    relationshippage.UnitSearchAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
    relationshippage.selectPartDropdownOfDestination();
    relationshippage.PartSearchAndEnterOfDestination(testData.legislation.sections.relationShip.part);

    relationshippage.selectComplementDropdownOfDestination();
    relationshippage.complementSearchAndEnterOfDestination(testData.legislation.sections.relationShip.complement);


    browser.waitForAngular();

    relationshippage.RotateButtonClick();
    relationshippage.clickOnAddButton();
    browser.waitForAngular();




    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();


  });


  //06 - Relationships -Documents rotation - icons

  it('Relationships -Documents rotation - icons', function () {

    browser.waitForAngular();
    browser.driver.manage().window().maximize();
    browser.waitForAngular();
    relationshippage.expandRelationshipTable();
    relationshippage.clickAddButtonOnTop();

    relationshippage.selectUnitDropdown();
    relationshippage.UnitSearchAndEnter(testData.legislation.sections.relationShip.unit3);

    relationshippage.selectPartDropdownOfSource();
    relationshippage.partSearchAndEnterOfSource(testData.legislation.sections.relationShip.part1);
    relationshippage.selectComplementDropdownOfSource();
    relationshippage.complementSearchAndEnterOfSource(testData.legislation.sections.relationShip.complement);

    relationshippage.selectTypeDropdown();
    relationshippage.enterRelationShipType(testData.legislation.sections.relationShip.type4);


    relationshippage.selectCodeDropdownOfDestination();
    relationshippage.enterCode(testData.legislation.sections.relationShip.code2);
    relationshippage.enterYear(testData.legislation.sections.relationShip.year2);
    relationshippage.enterN(testData.legislation.sections.relationShip.n2);


    relationshippage.selectUnitDropdownOfDestination();
    relationshippage.UnitSearchAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
    relationshippage.selectPartDropdownOfDestination();
    relationshippage.PartSearchAndEnterOfDestination(testData.legislation.sections.relationShip.part2);

    relationshippage.selectComplementDropdownOfDestination();
    relationshippage.complementSearchAndEnterOfDestination(testData.legislation.sections.relationShip.complement);


    browser.waitForAngular();

    relationshippage.RotateButtonClick();
    relationshippage.eyeButtonClick();
    relationshippage.eyeIconDisplayClose();
    relationshippage.anchorButtonClick1();
    relationshippage.anchorIconDisplayClose();
    relationshippage.anchorButtonClick2();
    relationshippage.anchorIconDisplayClose();


    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();



  });

  //04 - Relationships -Documents rotation - Current Marginal

  it(' Relationships -Documents rotation - Current Marginal', function () {

    browser.waitForAngular();
    browser.driver.manage().window().maximize();
    browser.waitForAngular();
    relationshippage.expandRelationshipTable();
    relationshippage.clickAddButtonOnTop();

    relationshippage.selectUnitDropdown();
    relationshippage.UnitSearchAndEnter(testData.legislation.sections.relationShip.unit3);

    relationshippage.selectPartDropdownOfSource();
    relationshippage.partSearchAndEnterOfSource(testData.legislation.sections.relationShip.part1);
    relationshippage.selectComplementDropdownOfSource();
    relationshippage.complementSearchAndEnterOfSource(testData.legislation.sections.relationShip.complement);

    relationshippage.selectTypeDropdown();
    relationshippage.enterRelationShipType(testData.legislation.sections.relationShip.type4);


    relationshippage.selectCodeDropdownOfDestination();
    relationshippage.enterCode(testData.legislation.sections.relationShip.code2);
    relationshippage.enterYear(testData.legislation.sections.relationShip.year2);
    relationshippage.enterN(testData.legislation.sections.relationShip.n2);


    relationshippage.selectUnitDropdownOfDestination();
    relationshippage.UnitSearchAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
    relationshippage.selectPartDropdownOfDestination();
    relationshippage.PartSearchAndEnterOfDestination(testData.legislation.sections.relationShip.part2);

    relationshippage.selectComplementDropdownOfDestination();
    relationshippage.complementSearchAndEnterOfDestination(testData.legislation.sections.relationShip.complement);


    browser.waitForAngular();


    var yearenabled = relationshippage.isEnabledCheckForYearBeforeRotationInTarget();
    expect(yearenabled).toEqual(true);


    relationshippage.RotateButtonClick();


    var yeardisabled = relationshippage.isEnabledCheckForYearAfterRotationInTarget();
    expect(yeardisabled).toEqual('true');

    browser.waitForAngular();


    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();



  });
  //07 - Relationships -Documents rotation - Consolidations


  it('Relationships -Documents rotation - Consolidations2', function () {

    browser.waitForAngular();
    browser.driver.manage().window().maximize();
    browser.waitForAngular();
    relationshippage.expandRelationshipTable();
    relationshippage.clickAddButtonOnTop();

    relationshippage.selectUnitDropdown();
    relationshippage.UnitSearchAndEnter(testData.legislation.sections.relationShip.unit3);

    relationshippage.selectPartDropdownOfSource();
    relationshippage.partSearchAndEnterOfSource(testData.legislation.sections.relationShip.part1);
    relationshippage.selectComplementDropdownOfSource();
    relationshippage.complementSearchAndEnterOfSource(testData.legislation.sections.relationShip.complement);

    relationshippage.selectTypeDropdown();
    relationshippage.enterRelationShipType(testData.legislation.sections.relationShip.type4);


    relationshippage.selectCodeDropdownOfDestination();
    relationshippage.enterCode(testData.legislation.sections.relationShip.code1);
    relationshippage.enterYear(testData.legislation.sections.relationShip.year2);
    relationshippage.enterN(testData.legislation.sections.relationShip.n2);


    relationshippage.selectUnitDropdownOfDestination();
    relationshippage.UnitSearchAndEnterOfDestination(testData.legislation.sections.relationShip.unit1);
    relationshippage.selectPartDropdownOfDestination();
    relationshippage.PartSearchAndEnterOfDestination(testData.legislation.sections.relationShip.part2);

    relationshippage.selectComplementDropdownOfDestination();
    relationshippage.complementSearchAndEnterOfDestination(testData.legislation.sections.relationShip.complement);



    relationshippage.RotateButtonClick();

    relationshippage.clickOnAddButton();
    browser.waitForAngular();
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();


    relationshippage.clickShowRelationshipfilter();
    relationshippage.entermarginalid1();
    browser.waitForAngular();
    relationshippage.selectFirstcheckbox();
    relationshippage.clickDeleteRelationShip();
    browser.waitForAngular();
    relationshippage.clickOkpopup();
    browser.waitForAngular();
    relationshippage.clearmarginalid();
    relationshippage.closeRelationshipFilter();

    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();



  });





});
