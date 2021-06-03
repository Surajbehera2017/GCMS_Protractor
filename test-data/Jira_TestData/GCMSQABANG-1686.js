var testData = {
    qc: {
        spain: {
            marginal_id: '1570752',
            expandUnit: '[RB] (1)',
            expandSecondUnit:'[TIT.I] (1)',
            expected_version_in_sublevel_two:'08/01/1993',
            expected_structure: '19/02/2017',
					
        },
        mexico: {
            marginal_id: '69816986',
            expandUnit: '[RB]',
            expandSecondUnit:'[TIT.1]',
            expected_version_in_sublevel_two:'Original',
            
					
        },

    },
    client: {
        spain: {
            marginal_id: '1570752',
            expandUnit: '[RB] (1)',
            expandSecondUnit:'[TIT.I] (1)',
            expected_version_in_sublevel_two:'Original',
           
        },
        mexico: {
            marginal_id: '69817004',
            expandUnit: '[RB]',
            expandSecondUnit:'[TIT.1]',
            expected_version_in_sublevel_two:'Original',
            
					
        },

    }
};

module.exports = testData;
