var testData = {
    qc: {
        spain: {
            marginal_id:'1572384',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_date:'01/03/2018  45/2018',
            page_num:'78',
            savebutton_xpath:"(//button[text()='Save'])[2]",
            saveinpopup_xpath:"(//button[text()='Save'])[3]",
            removedateandseries_xpath:"(//a[@ng-click='publication.deletePublicationDataSet(dataSet.originalIndex)']//i)[2]",

            },

            
            mexico: {
                marginal_id:'68735149',
                section_name:'Publication Data',
                edit_button:'Edit',
                expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                expected_date:'13/03/2013  2013',
                savebutton_xpath:"(//button[text()='Save'])[2]",
                saveinpopup_xpath:"(//button[text()='Save'])[3]",
                removedateandseries_xpath:"(//a[@ng-click='publication.deletePublicationDataSet(dataSet.originalIndex)']//i)[2]",
    
                },
                gulf: {
                    marginal_id:'68833077',
                    section_name:'Publication Data',
                    edit_button:'Edit',
                    expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                    expected_date:'31/12/2013  558/2013',
                    savebutton_xpath:"(//button[text()='Save'])[2]",
                    saveinpopup_xpath:"(//button[text()='Save'])[3]",
                    removedateandseries_xpath:"(//a[@ng-click='publication.deletePublicationDataSet(dataSet.originalIndex)']//i)[2]",
        
                    },
                
                br: {
                    marginal_id:'73605515',
                    section_name:'Publication Data',
                    edit_button:'Edit',
                    expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                    expected_date:'11/08/2605  2605',
                    page_num:'78',
                    savebutton_xpath:"(//button[text()='Save'])[2]",
                    saveinpopup_xpath:"(//button[text()='Save'])[3]",
                    removedateandseries_xpath:"(//a[@ng-click='publication.deletePublicationDataSet(dataSet.originalIndex)']//i)[2]",
        
                    }, 

    },
    client: {
        spain: {
            marginal_id:'1572384',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_date:'01/03/2018  45/2018',
            page_num:'78',
            savebutton_xpath:"(//button[text()='Save'])[2]",
            saveinpopup_xpath:"(//button[text()='Save'])[3]",
            removedateandseries_xpath:"(//a[@ng-click='publication.deletePublicationDataSet(dataSet.originalIndex)']//i)[2]",
        },

        mexico: {
            marginal_id:'68736509',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_date:'30/03/2017',
            savebutton_xpath:"(//button[text()='Save'])[2]",
            saveinpopup_xpath:"(//button[text()='Save'])[3]",
            removedateandseries_xpath:"(//a[@ng-click='publication.deletePublicationDataSet(dataSet.originalIndex)']//i)[2]",
        },
        br: {
            marginal_id:'63074156',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_date:'23/07/2018  2018',
            page_num:'78',
            savebutton_xpath:"(//button[text()='Save'])[2]",
            saveinpopup_xpath:"(//button[text()='Save'])[3]",
            removedateandseries_xpath:"(//a[@ng-click='publication.deletePublicationDataSet(dataSet.originalIndex)']//i)[2]",

            },
            gulf: {
                marginal_id:'67901495',
                section_name:'Publication Data',
                edit_button:'Edit',
                expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                expected_date:'31/08/2015  8/2015',
                //page_num:'78',
                savebutton_xpath:"(//button[text()='Save'])[2]",
                saveinpopup_xpath:"(//button[text()='Save'])[3]",
                removedateandseries_xpath:"(//a[@ng-click='publication.deletePublicationDataSet(dataSet.originalIndex)']//i)[2]",
    
            }    
    }
};

module.exports = testData;