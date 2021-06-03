var testData = {
    qc: {
        spain: {
            marginal_id: '1570752',
            expandable_unit: '[RB] (1)',
            expandable_sub_unit_level_two: '[TIT.I] (1)',
            expected_version_in_sublevel_two: '[RB.1/TIT.I] (1)',
            expected_version_in_sublevel_two: '08/01/1993',          
					
        },
        mexico: {
            marginal_id: '69799606',
            expandable_unit: '[RB.1]',
            expandable_sub_unit_level_two: '[TIT.1]',
            expected_version_in_sublevel_two: '[C.I/TIT.1]',
            expected_version_in_sublevel_two: 'Original',          
					
        },

    },
    client: {
        spain: {
            marginal_id: '1570752', //id with several existing versions
            expandable_unit: '[RB] (1)', //Give the unit exactly as displayed in the application -inForce structure
            expandable_sub_unit: '[TIT.VIII] (1)', //Give the subunit exactly as displayed in the application
            expandable_sub_unit_level_two: '[RB.1/TIT.VIII] (1)',//Give the subunit exactly as displayed in the application
            expected_version_in_sublevel_two: '30/10/1998',
        },

        mexico: {
            marginal_id: '69816924',
            expandable_unit: '[RB.1]',
            expandable_sub_unit_level_two: '[TIT.1]',
            expected_version_in_sublevel_two: '[C.I/TIT.1]',
            expected_version_in_sublevel_two: 'Original',          
					
        },

    }
};

module.exports = testData;