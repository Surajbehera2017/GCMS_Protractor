var testData = {
    qc: {
        spain: {
            marginal_id: '1571972',
			unit_Name: 'A.11',
			sibiling: 'lower',
			import_button: 'Import',
			ok_button: 'Ok',
			Yes_button:'Yes',
            import_xml_error: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field: ',
            contains_msg: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field',
        },
        br: {
            marginal_id: '63052404',
			unit_Name: 'A.1',
			sibiling: 'lower',
			import_button: 'Import',
			ok_button: 'Ok',
			Yes_button:'Yes',
            import_xml_error: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field: ',
            contains_msg: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field',
        },

        mexico: {
            marginal_id: '68737883',
			unit_Name: 'A.1',
			sibiling: 'lower',
			import_button: 'Import',
			ok_button: 'Ok',
			Yes_button:'Yes',
            import_xml_error: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field: ',
            contains_msg: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field',
        },
    },
    client: {
        spain: {
            marginal_id: '1571972',
			unit_Name: 'A.11',
			sibiling: 'lower',
			import_button: 'Import',
			ok_button: 'Ok',
			Yes_button:'Yes',
            import_xml_error: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field: ORA-00001: unique constraint (SPE.UQ_PTL_MARG_UNIDAD_FECHA) violated [Text structure 169590067 Date: 01-MAY-08 Definitive: S Unit: 169587419]',
            contains_msg: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field',
        },
        br: {
            marginal_id: '63003879',
			unit_Name: 'EM',
			sibiling: 'lower',
			import_button: 'Import',
			ok_button: 'Ok',
			Yes_button:'Yes',
            import_xml_error: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field: ORA-00001: unique constraint (SPE.UQ_PTL_MARG_UNIDAD_FECHA) violated [Text structure 169590067 Date: 01-MAY-08 Definitive: S Unit: 169587419]',
            contains_msg: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field',
        },

        mexico: {
            marginal_id: '68737883',
			unit_Name: 'A.1',
			sibiling: 'lower',
			import_button: 'Import',
			ok_button: 'Ok',
			Yes_button:'Yes',
            import_xml_error: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field: ',
            contains_msg: 'Error creating text structure: An attempt has been made to insert a duplicate value in a field',
        },
    }
};

module.exports = testData;ts = testData

