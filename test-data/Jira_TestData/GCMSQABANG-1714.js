var testData = {
    qc: {
        spain: {
            marginal_id_xml: '139889525',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            bold: 'Bold',
            replace: 'Replace',
            xmlText: '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>',
            expectedXmlAfterReplacement:'<en-origen peso-fuente="negrita"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

            
         },
         mexico: {
            marginal_id_xml: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            bold: 'Bold',
            replace: 'Replace',
            xmlText: '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>',
            expectedXmlAfterReplacement:'<en-origen peso-fuente="negrita"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

            
         },

         br: {
            marginal_id_xml: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            bold: 'Bold',
            replace: 'Replace',
            xmlText: '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>',
            expectedXmlAfterReplacement:'<en-origen peso-fuente="negrita"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

            
         },

         gulf:{

            marginal_id_xml: '67616616',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            bold: 'Bold',
            replace: 'Replace',
            xmlText: '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>',
            expectedXmlAfterReplacement:'<original-highlight font-weight="bold"><nota ref="test" o=""/></original-highlight>note<abstract.summary></abstract.summary>',
            
            
         },
        
    },
    client: {
        spain: {
            marginal_id_xml: '77491659',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            bold: 'Bold',
            replace: 'Replace',
            xmlText: '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>',
            expectedXmlAfterReplacement:'<en-origen peso-fuente="negrita"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

            
        },
        mexico: {
            marginal_id_xml: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            bold: 'Bold',
            replace: 'Replace',
            xmlText: '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>',
            expectedXmlAfterReplacement:'<en-origen peso-fuente="negrita"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

            
         },

         br: {
            marginal_id_xml: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            bold: 'Bold',
            replace: 'Replace',
            xmlText: '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>',
            expectedXmlAfterReplacement:'<en-origen peso-fuente="negrita"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

            
         },

         gulf:{

            marginal_id_xml: '67616563',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            bold: 'Bold',
            replace: 'Replace',
            xmlText: '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>',
            expectedXmlAfterReplacement:'<original-highlight font-weight="bold"><nota ref="test" o=""/></original-highlight>note<abstract.summary></abstract.summary>',
            
            
         },
          
    }
};

module.exports = testData;