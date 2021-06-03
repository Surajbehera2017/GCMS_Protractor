var testData = {
    qc: {
        spain: {
            leftpanel: 'Thesaurus',
            //marginal_id: '1573164',
            marginal_id: '90538433',
            type: 'INDICE AYUDAS Y SUBVENCIONES',
            show_filters: 'Show Filters',
            unit: 'PD',
            term_1: 'Calidad',
            term_2: 'Comercio',
            actions: 'edit',
            apply_button: 'Apply',
            ok_button: 'Ok',
            close_button: 'close',

            unit_1: 'A.10',
          
            expected: "//span[text()='A.10']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Administraci�n p�blica y actividad pol�tica",
            error: "There is already an entry associated with this concept.",


        },
        mexico: {
            leftpanel: 'Thesaurus',
            
            marginal_id: '71546133',
            type: 'INDICE COMUN',
            show_filters: 'Show Filters',
            unit: 'A.1',
            term_1: 'Indice DF',
            term_2: 'Indice DF',
            actions: 'edit',
            apply_button: 'Apply',
            ok_button: 'Ok',
            close_button: 'close',

            unit_1: 'A.10',
          
            expected: "//span[text()='A.10']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Administraci�n p�blica y actividad pol�tica",
            error: "There is already an entry associated with this concept.",


        },


        br: {
            leftpanel: 'Thesaurus',
            //marginal_id: '1573164',
            marginal_id: '63004093',
            type: 'SECTOR',
            show_filters: 'Show Filters',
            unit: 'A.1',
            term_1: 'Alimentos',
            term_2: 'Bebidas',
            actions: 'edit',
            apply_button: 'Apply',
            ok_button: 'Ok',
            close_button: 'close',

            unit_1: 'A.1',
          
            expected: "//span[text()='A.2']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Administraci�n p�blica y actividad pol�tica",
            error: "There is already an entry associated with this concept.",


        },

        gulf:{

            marginal_id:'67616482',
            leftpanel:'Thesaurus',
            type:'PRODUCT TYPE',
            show_filters:'Show Filters',
            unit:'HED.1',
            term_1:'Accounts - General',
            actions:'edit',
            term_2:'Accounts - Saving',
            apply_button:'Apply',
            ok_button: 'Ok',
            close_button: 'close',


        },

    },
    client: {
        spain: {
            leftpanel: 'Thesaurus',
            //marginal_id: '1573164',
            marginal_id:'90538433',
            type: 'INDICE AYUDAS Y SUBVENCIONES',
            show_filters: 'Show Filters',
            unit: 'PD',
            term_1: 'Calidad',
            term_2: 'Comercio',
            actions: 'edit',
            apply_button: 'Apply',
            ok_button: 'Ok',
            close_button: 'close',

            unit_1: 'A.10',
            
            expected: "//span[text()='A.10']",
            hierarchy: '�ndice Com�n Aranzadi',
            term: 'Administraci�n p�blica y actividad pol�tica',
            error: 'There is already an entry associated with this concept.',

        },

        br: {
            leftpanel: 'Thesaurus',
            //marginal_id: '1573164',
            marginal_id: '63004093',
            type: 'SECTOR',
            show_filters: 'Show Filters',
            unit: 'A.2',
            term_1: 'Automotivo',
            term_2: 'Bebidas',
            actions: 'edit',
            apply_button: 'Apply',
            ok_button: 'Ok',
            close_button: 'close',

            unit_1: 'A.2',
          
            expected: "//span[text()='A.2']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Administraci�n p�blica y actividad pol�tica",
            error: "There is already an entry associated with this concept.",


        },
        gulf:{
            
            marginal_id:'67616482',
            leftpanel:'Thesaurus',
            type:'PRODUCT TYPE',
            show_filters:'Show Filters',
            unit:'HED.1',
            term_1:'Accounts - General',
            actions:'edit',
            term_2:'Accounts - Saving',
            apply_button:'Apply',
            ok_button: 'Ok',
            close_button: 'close',

            
        },
        mexico: {
            leftpanel: 'Thesaurus',
            
            marginal_id: '71546133',
            type: 'INDICE COMUN',
            show_filters: 'Show Filters',
            unit: 'A.1',
            term_1: 'Indice DF',
            term_2: 'Indice DF',
            actions: 'edit',
            apply_button: 'Apply',
            ok_button: 'Ok',
            close_button: 'close',

            unit_1: 'A.10',
          
            expected: "//span[text()='A.10']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Administraci�n p�blica y actividad pol�tica",
            error: "There is already an entry associated with this concept.",


        },
    }
};

module.exports = testData;
   