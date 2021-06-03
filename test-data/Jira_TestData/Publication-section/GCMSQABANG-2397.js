var testData = {
    qc: {
        spain: {
            marginal_id:'1570752',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_publication:'B. AISS',
            expected_date:'20/12/1977  1417/1977',
            page_num:'6748',
            removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
            ispublicationpresent:"//a[contains(text(),'B. AISS')]",
            isdatenumberseriespresent:"//a[contains(text(),'20/12/1977 1417/1977')]",
            field_name_first:'Publication',
            field_name_second:'Date & Number, Series',
            exiteditbutton:'Exit edition mode',
            yesbutton:'Yes',
            

        
            },

            br: {
                marginal_id:'63074156',
                section_name:'Publication Data',
                edit_button:'Edit',
                expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                expected_publication:'Coleçao Legislativa',
                expected_date:'29/05/1984  1984',
                page_num:'6748',
                removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
                ispublicationpresent:"//a[contains(text(),'Coleção de Leis do Brasil')]",
                isdatenumberseriespresent:"//a[contains(text(),'31/12/1945  1945')]",
                field_name_first:'Publication',
                field_name_second:'Date & Number, Series',
                exiteditbutton:'Exit edition mode',
                yesbutton:'Yes',
                
    
            
                },
            gulf: {
                    marginal_id:'68833077',
                    section_name:'Publication Data',
                    edit_button:'Edit',
                    expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                    expected_publication:'Al Waqaia Al Iraqiya Official Gazette',
                    expected_date:'08/07/2013  4281/2013',
                    removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
                    ispublicationpresent:"//a[contains(text(),'UAE Official Gazette')]",
                    isdatenumberseriespresent:"//a[contains(text(),'31/03/2013 547/2013')]",
                    field_name_first:'Publication',
                    field_name_second:'Date & Number, Series',
                    exiteditbutton:'Exit edition mode',
                    yesbutton:'Yes'             
                    }
    },
    client: {
        spain: {
            marginal_id:'1570752',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_publication:'B. AISS',
            expected_date:'20/12/1977  1417/1977',
            page_num:'6748',
            removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
            ispublicationpresent:"//a[contains(text(),'B. AISS')]",
            isdatenumberseriespresent:"//a[contains(text(),'20/12/1977 1417/1977')]",
            field_name_first:'Publication',
            field_name_second:'Date & Number, Series',
            exiteditbutton:'Exit edition mode',
            yesbutton:'Yes',
        
        },

        br: {
            marginal_id:'63074156',
            section_name:'Publication Data',
            edit_button:'Edit',
            expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
            expected_publication:'Coleçao Legislativa',
            expected_date:'29/05/1984  1984',
            page_num:'6748',
            removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
            ispublicationpresent:"//a[contains(text(),'Coleção de Leis do Brasil')]",
            isdatenumberseriespresent:"//a[contains(text(),'31/12/1945  1945')]",
            field_name_first:'Publication',
            field_name_second:'Date & Number, Series',
            exiteditbutton:'Exit edition mode',
            yesbutton:'Yes',
            

        
            },
            gulf: {
                marginal_id:'69361212',
                section_name:'Publication Data',
                edit_button:'Edit',
                expandpublicationsection:"//strong[contains(@class,'ng-binding')][text()='Publication Data']//preceding::a[2]",
                expected_publication:'Al Waqaia Al Iraqiya Official Gazette',
                expected_date:'03/12/2013  18/2013',
                page_num:'6748',
                removepublication_xpath:"( //*[contains(text(),'Publication')]//..//..//a/i)[2]",
                ispublicationpresent:"//a[contains(text(),'UAE Official Gazette')]",
                isdatenumberseriespresent:"//a[contains(text(),'30/01/2014 559/2014')]",
                field_name_first:'Publication',
                field_name_second:'Date & Number, Series',
                exiteditbutton:'Exit edition mode',
                yesbutton:'Yes',
                
    
            
                }
    }
};

module.exports = testData;