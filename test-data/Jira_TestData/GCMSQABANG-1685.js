var testData = {
    qc: {
        spain: {
            marginal_id: '1570806',
            expandable_unit: '[LB.VI]', 
            expandable_sub_unit: '[TIT.I/LB.VI]', 
            expandable_sub_unit_level_two: '[C.I/TIT.I/LB.VI]',
            expected_version_in_sublevel_two: '16/01/2004',				
        },
        mexico:{
            marginal_id: '69767562',
            expandable_unit: '[L.VI]', 
            expandable_sub_unit: '[TIT.1/L.VI]', 
            expandable_sub_unit_level_two: '[C.I/TIT.1/L.VI]',
            expected_version_in_sublevel_two: 'Original',				
        },
    },
    client: {
        spain: {
            marginal_id: '1570806', //id with original displayed on first page
            expandable_unit: '[LB.IV]', //Give the unit exactly as displayed in the application -inForce structure
            expandable_sub_unit: '[TIT.I/LB.IV]', //Give the subunit exactly as displayed in the application
            expandable_sub_unit_level_two: '[C.I/TIT.I/LB.IV]',
            expected_version_in_sublevel_two: 'Original',
        },
        mexico:{
            marginal_id: '69799606',
            expandable_unit: '[L.VI]', 
            expandable_sub_unit: '[TIT.1/L.VI]', 
            expandable_sub_unit_level_two: '[C.I/TIT.1/L.VI]',
            expected_version_in_sublevel_two: 'Original',				
        },
    }
};

module.exports = testData; 