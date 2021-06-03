var testData = {
    qc: {
        spain: {
            marginal_id: '139889525',
            relation_type: 'Amplía plazo',
            Relationships:'Relationships',
            AddButton: 'Add',
            TypeField:'type',
            TargetPanel: 'Target',
             CodeField:'code',
             YearField:'year',
             NumberField:'num',
             UnitField:'precu',
        
            PartValue:'8',
            rotationIcon:'Rotation',
		section:'Relationship',
		SoureEyeIcon:'getSummaryDocument',
		Source:'Source',
      
ProductTab:'PRODUCTS (0)',
		StructureImg:'openStructure',
		DocStructModal:'Document Structure',
        firstproduct: 'AYUDAS-Y-SUBVENCIONES_CPARZ',
					
        expectedproducts: ['Abogados, Procuradores y funcionarios de la Administración de Justicia SMCivitas' ,
            'Arbitraje BLCivitas' ,
            'Arrendamientos Rústicos BLCivitas' ,
            'Arrendamientos Urbanos BLCivitas' ,
            'Arrendamientos Urbanos SMCivitas'],
        lastpageproduct: 'WEB-Legis',
        },
        br: {
            marginal_id: '63003344',
            Relationships: 'Relationships',
            AddButton: 'Add',
            section: 'Relationship',
            ProductTab: 'PRODUCTS (0)',
            firstproduct: 'BIBLIO_CPBR_PRIMERA-HORA',
           lastpageproduct: 'juris-pdf-test',
        },

        mexico: {
            marginal_id:'68500192',
            Relationships:'Relationships',
            AddButton:'Add',
            section:'Relationship',
            ProductTab:'PRODUCTS (0)',
            firstproduct:'BIBLIO_CPMX-TEMATICA-COMEXT',
           lastpageproduct:'Sociedades#Tratados Internacionales#Tratado sobre Delimitación Marítima entre el Gobierno de los Estados Unidos Mexicanos y el Gobierno de la Republica de Honduras',
        },

        gulf: {
            marginal_id:'67616569',
            Relationships:'Relationships',
            AddButton:'Add',
            section:'Relationship',
            ProductTab:'PRODUCTS (0)',
            firstproduct:'BIBLIO-GULF Collection',
           lastpageproduct:'Sociedades#Tratados Internacionales#Tratado sobre Delimitación Marítima entre el Gobierno de los Estados Unidos Mexicanos y el Gobierno de la Republica de Honduras',
        },
    },
    client: {
        spain: {
            marginal_id: '135176403',
         
            relation_type: 'Amplía plazo',
            Relationships:'Relationships',
            AddButton: 'Add',
            TypeField:'type',
            TargetPanel: 'Target',
             CodeField:'code',
             YearField:'year',
             NumberField:'num',
             UnitField:'precu',
        
            PartValue:'8',
            Source:'Source',
      
            PartField:'precp',
            UnitValue:'A',
            rotationIcon:'Rotation',
            section:'Relationship',
            ProductTab:'PRODUCTS (0)',
		StructureImg:'openStructure',
        DocStructModal:'Document Structure',
        firstproduct: 'AYUDAS-Y-SUBVENCIONES_CPARZ',
					
        expectedproducts: ['Abogados, Procuradores y funcionarios de la Administración de Justicia SMCivitas' ,
            'Arbitraje BLCivitas' ,
            'Arrendamientos Rústicos BLCivitas' ,
            'Arrendamientos Urbanos BLCivitas' ,
            'Arrendamientos Urbanos SMCivitas'],
        lastpageproduct: 'WEB-Legis',
        },
        br: {
            marginal_id: '63003344',
            Relationships: 'Relationships',
            AddButton: 'Add',
            section: 'Relationship',
            ProductTab: 'PRODUCTS (0)',
            firstproduct: 'BIBLIO_CPBR_PRIMERA-HORA',
           lastpageproduct: 'juris-pdf-test',
        },

        /*
        mexico: {
            marginal_id:'68501245',
            Relationships:'Relationships',
            AddButton:'Add',
            section:'Relationship',
            ProductTab:'PRODUCTS (0)',
            firstproduct:'AUD_CODIGO_DE_ETICA_PARTE_A',
           lastpageproduct:'TIP_CPMX-SEGURIDAD-SOCIAL',
        },
        */

       gulf: {
        marginal_id:'67616569',
        Relationships:'Relationships',
        AddButton:'Add',
        section:'Relationship',
        ProductTab:'PRODUCTS (0)',
        firstproduct:'BIBLIO-GULF Collection',
       lastpageproduct:'Sociedades#Tratados Internacionales#Tratado sobre Delimitación Marítima entre el Gobierno de los Estados Unidos Mexicanos y el Gobierno de la Republica de Honduras',
    },

    }
};

module.exports = testData;