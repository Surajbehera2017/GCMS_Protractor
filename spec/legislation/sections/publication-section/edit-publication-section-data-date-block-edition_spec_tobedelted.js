var params = browser.params;
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var  publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');

describe('Publication Section', function () {


    beforeEach(function () {
         browser.ignoreSynchronization =false;
         browser.driver.manage().window().maximize();      
         LegislationDocumentEditionPage.get(testData.legislation.sections.publication.marginal_id_1);
         browser.waitForAngular();
         publicationsection.urlLoad(params.valid_username,params.valid_password);
         browser.waitForAngular();
    });

//TC01- Edition(duplicate)
    it('should change the exsiting publication and add date for changed publication', function () {
        publicationsection.editbutton();
        publicationsection.expandableEdit.expand();
        browser.sleep(5000);
        publicationsection.isPublicationNamePesent().then (function (isPresent) {
           if(isPresent===true){
               publicationsection.deleteExistingPublication();
               publicationsection.changepublicationNAme(); 
               expect(publicationsection.isPublicationNameUpdated(testData.legislation.sections.publication.name)).toEqual(true);       
               publicationsection.addchangeDateseriesdate(testData.legislation.sections.publication.addchange_date_1);
               browser.waitForAngular();
              // expect(publicationsection.isDateSeriesUpdated(testData.legislation.sections.publication.has_addchange_date_1)).toEqual(true);
                publicationsection.save();
        }else{
            publicationsection.changepublicationNAme();
            expect(publicationsection.isPublicationNameUpdated(testData.legislation.sections.publication.name)).toEqual(true);       
            publicationsection.addchangeDateseriesdate(testData.legislation.sections.publication.addchange_date_1);
            browser.waitForAngular();
          //  expect(publicationsection.isDateSeriesUpdated(testData.legislation.sections.publication.has_addchange_date_1)).toEqual(true);
             publicationsection.save();
           }
        });
     
        });
   

    it('Should change the exsiting date series for  publication', function () {
       
        publicationsection.editbutton();
        publicationsection.expandableEdit.expand();
        browser.sleep(5000);
        publicationsection.isPublicationNamePesent().then (function (isPresent) {
            if(isPresent===true){

                    publicationsection.changeDateseriesdate(testData.legislation.sections.publication.edit_date_1);
                    publicationsection.save();

                } else
                {
                    publicationsection.changeDateseriesdate(testData.legislation.sections.publication.edit_date_2);
                    publicationsection.save();
                    }   
        });

    });
   
});








