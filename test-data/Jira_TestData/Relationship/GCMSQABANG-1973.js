var testData = {
    qc: {
        spain: {
            marginal_id: '139889525',
            Relationships: 'Relationships',
            AddProductButton: 'Add Product',
            viewAllLink: 'view',
            AddProductModal: 'Add Products',
            firstproduct: 'AYUDAS-Y-SUBVENCIONES_CPARZ',

            expectedproducts: ['Abogados, Procuradores y funcionarios de la Administración de Justicia SMCivitas',
                'Arbitraje BLCivitas',
                'Arrendamientos Rústicos BLCivitas',
                'Arrendamientos Urbanos BLCivitas',
                'Arrendamientos Urbanos SMCivitas'],
            lastpageproduct: 'WEB-Legis',
        },


        br: {
            marginal_id: '63003947',
            Relationships: 'Relationships',
            AddProductButton: 'Add Product',
            viewAllLink: 'view',
            AddProductModal: 'Add Products',
            firstproduct: 'BIBLIO_CPBR_PRIMERA-HORA',

            expectedproducts: ['BIBLIO_CPBR_PRIMERA-HORA',
                'BIBLIO_RTOL_JURISTENDENCIA',
                'Colección ANEXO_EXTRACT',

            ],
            lastpageproduct: 'juris-pdf-test',
        },

        gulf: {
            marginal_id: '67624566',
            Relationships: 'Relationships',
            AddProductButton: 'Add Product',
            viewAllLink: 'view',
            AddProductModal: 'Add Products',
            firstproduct: 'BIBLIO-GULF Collection',

            expectedproducts:  ['BIBLIO-GULF Collection',
            'CASES-GULF Collection',
            'Collection Gulf TestingPR',
            'LEGIS-GULF Collection',
            'LEXGULF',
            'PRACTICAL-GULF Collection'],
            lastpageproduct: 'PRACTICAL-GULF Collection',
        },

        mexico: {
            marginal_id: '70358452',
            Relationships: 'Relationships',
            AddProductButton: 'Add Product',
            viewAllLink: 'view',
            AddProductModal: 'Add Products',
            firstproduct: 'BIBLIO_CPMX',
            expectedproducts: ['BIBLIO_CPMX-TEMATICA-CONTABILIDAD',
                'BIBLIO_CPMX-TEMATICA-FISCAL',
                'BIBLIO_CPMX-TEMATICA-LABORAL'
            ],

            lastpageproduct: 'Sociedades#Tratados Internacionales#Tratado sobre Delimitación Marítima entre el Gobierno de los Estados Unidos Mexicanos y el Gobierno de la Republica de Honduras',
        },



    },
    client: {
        spain: {
            marginal_id: '135176403',
            Relationships: 'Relationships',
            AddProductButton: 'Add Product',
            viewAllLink: 'view',
            AddProductModal: 'Add Products',
            firstproduct: 'AYUDAS-Y-SUBVENCIONES_CPARZ',

            expectedproducts: ['Abogados, Procuradores y funcionarios de la Administración de Justicia SMCivitas',
                'Arbitraje BLCivitas',
                'Arrendamientos Rústicos BLCivitas',
                'Arrendamientos Urbanos BLCivitas',
                'Arrendamientos Urbanos SMCivitas'],
            lastpageproduct: 'WEB-Legis',
        },

        gulf: {
            marginal_id: '67616732',
            Relationships: 'Relationships',
            AddProductButton: 'Add Product',
            viewAllLink: 'view',
            AddProductModal: 'Add Products',
            firstproduct: 'BIBLIO-GULF Collection',

            expectedproducts:  ['BIBLIO-GULF Collection',
            'CASES-GULF Collection',
            'Collection Gulf TestingPR',
            'LEGIS-GULF Collection',
            'LEXGULF',
            'PRACTICAL-GULF Collection'],
            lastpageproduct: 'PRACTICAL-GULF Collection',
        },

        br: {
            marginal_id: '63085049',
            Relationships: 'Relationships',
            AddProductButton: 'Add Product',
            viewAllLink: 'view',
            AddProductModal: 'Add Products',
            firstproduct: 'BIBLIO_CPBR_PRIMERA-HORA',

            expectedproducts: ['BIBLIO_CPBR_PRIMERA-HORA',
                'BIBLIO_RTOL_JURISTENDENCIA',
                'Colección ANEXO_EXTRACT',
            ],
            lastpageproduct: 'juris-pdf-test',
        },

        //cannot be done for client environment
       /* mexico: {
            marginal_id: '71546153',
            Relationships: 'Relationships',
            AddProductButton: 'Add Product',
            viewAllLink: 'view',
            AddProductModal: 'Add Products',
            firstproduct: 'AUD_CODIGO_DE_ETICA_PARTE_A',
            expectedproducts: ['AUD_CODIGO_DE_ETICA_PARTE_A',
                'AUD_CODIGO_DE_ETICA_PARTE_B',
                'AUD_CODIGO_DE_ETICA_PARTE_C'
            ],

            lastpageproduct: 'TIP_CPMX-SEGURIDAD-SOCIAL',
        },*/

    }
};

module.exports = testData;