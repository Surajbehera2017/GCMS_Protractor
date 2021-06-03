var testData = {
    qc: {
        spain: {
            marginal_id:'1572384',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_publication:'B. AISS',
            expected_date:'20/10/1977  1411/1977',
            page_num:'78',
            savebutton_xpath:"(//button[text()='Save'])[2]",
            saveinpopup_xpath:"(//button[text()='Save'])[3]",
            removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",

            },

            br: {
                marginal_id:'63074156',
                section_name:'Publication Data',
                edit_button:'Edit',
                expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                expected_publication:'Coleçao Legislativa',
                expected_date:'01/01/2006  2006',
                page_num:'78',
                savebutton_xpath:"(//button[text()='Save'])[2]",
                saveinpopup_xpath:"(//button[text()='Save'])[3]",
                removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
    
                },
            gulf: {
                    marginal_id:'67901185',
                    section_name:'Publication Data',
                    edit_button:'Edit',
                    expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                    expected_publication:'Al Waqaia Al Iraqiya Official Gazette',
                    expected_date:'08/07/2013  4281/2013',
                   // page_num:'78',
                    savebutton_xpath:"(//button[text()='Save'])[2]",
                    saveinpopup_xpath:"(//button[text()='Save'])[3]",
                    removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
        
                    },
    },
    client: {
        spain: {
            marginal_id:'1572384',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_publication:'B. AISS',
            expected_date:'20/10/1977  1411/1977',
            page_num:'78',
            savebutton_xpath:"(//button[text()='Save'])[2]",
            saveinpopup_xpath:"(//button[text()='Save'])[3]",
            removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
        },

        br: {
            marginal_id:'63074156',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_publication:'Coleçao Legislativa',
            expected_date:'01/01/2006  2006',
            page_num:'78',
            savebutton_xpath:"(//button[text()='Save'])[2]",
            saveinpopup_xpath:"(//button[text()='Save'])[3]",
            removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",

            },
            gulf: {
                marginal_id:'67656819',
                section_name:'Publication Data',
                edit_button:'Edit',
                expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                expected_publication:'Al Waqaia Al Iraqiya Official Gazette',
                expected_date:'03/12/2013  18/2013',
               // page_num:'78',
                savebutton_xpath:"(//button[text()='Save'])[2]",
                saveinpopup_xpath:"(//button[text()='Save'])[3]",
                removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
    
                }
           
    }
};

module.exports = testData;