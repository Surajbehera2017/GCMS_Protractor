var testData = {

		document_structure:{
			marginal_id: '1570752',
			marginal_id_no_originaltext: '1570753',
			marginal_id_duplicatestructure: '139734916',
			date_duplicatestructure: '05/05/2015',
			unit_number_add_Unit_cancel: 'A.4',
			first_version_text: 'LEG\\2016\\7 spa (23/2/2017)',
			marginal_id_language : '118247769',
			warning_text_document_text: 'This document/language does not have text-structure',
			first_unit_pe: '[PE]',
			author_text: 'Add Author Notes',
			context_hierarchy: 'Context Index Hierarchy',
			relationship_popup: 'Relationship',
			thesaurus_hierarchy: 'Thesaurus Hierarchy',
			marginal_id_xml: '139889525',

			
			
			Unwrapping_TestData:{

				document_structure: 'DOCUMENT STRUCTURE'


			},		
			
			
		
			several_versions_and_CiIcon:{
				marginal_id: '1570752',
				unit_id: '18540000',
			},

			unit_with_version:{
				marginal_id: '79465895',
				unit:'A.3'
			},

			branch_unit:{
				marginal_id: '1570806',
				unit: 'TIT.PR'
			},

			delete_layer_cancel:{
				marginal_id: '78540664',
				unit: 'A.7',
				version: '20/11/2011'
			},

			delete_intermediate_layer:{
				marginal_id: '77491659',
				unit: 'A.1', //Unit with relationships related
				version: '29/06/2010' //Version with relationships related
			},

			rename_unit_menu:{
				marginal_id: '77491659',
				unit: 'PE', //Unit to rename
				unit_id_no_part: 'V'
			},

			unit_edition_layout:{
				marginal_id: '77491659',
				unit: 'A.5', //Unit to edit
				version: 'Original' //Version to edit
			},

			view_several_versions:{
				marginal_id: '1570752', //id with several existing versions
				unit: 'A.5', //Unit to edit
				version: 'Original' //Version to edit
			},

			view_original_version:{//Original version visible on first page of doc structure
				marginal_id: '1570806', //id with several existing versions
				unit: 'A.5', //Unit to edit
				version: 'Original' //Version to edit
			},

			structures_in_multiple_pages:{
				marginal_id: '1570752' //This should have many structures. 
			},

			switch_among_versions:{

				last_version:{
					marginal_id: '1570752', //id with several existing versions
					expandable_unit: '[RB] (1)', //Give the unit exactly as displayed in the application -inForce structure
					expandable_sub_unit: '[TIT.I] (1)', //Give the subunit exactly as displayed in the application
					expandable_sub_unit_level_two: '[RB.1/TIT.I] (1)',//Give the subunit exactly as displayed in the application
					expected_version_in_sublevel_two: '08/01/1993',
					//expected_structure: '19/02/2017' //This structure should be visible on the first page
				},
				original_version:{
					marginal_id: '1570806', //id with original displayed on first page
					expandable_unit: '[LB.VI]', //Give the unit exactly as displayed in the application -inForce structure
					expandable_sub_unit: '[TIT.I/LB.VI]', //Give the subunit exactly as displayed in the application
					expandable_sub_unit_level_two: '[A.454]',//Give the subunit exactly as displayed in the application
				},
				medium_version:{
					marginal_id: '1570752', //id with several existing versions
					expected_structure: '19/02/2017', //This structure should be visible on the first page
					expandable_unit: '[RB] (1)', //Give the unit exactly as displayed in the application -inForce structure
					expandable_sub_unit: '[TIT.I] (1)', //Give the subunit exactly as displayed in the application
					expandable_sub_unit_level_two: '[RB.1/TIT.I] (1)',//Give the subunit exactly as displayed in the application
					expected_version_in_sublevel_two: '08/01/1993',
				}

			},

			unit_xml_editor:{
				marginal_id: '139889525',
				search_key: 'titulo' //There should be atleast one occurance of this key in the xml content
			},

			unit_xml_editor_date:{
				marginal_id: '139889525',
				textfield_value: 'Text',
				datefield_value: '12/12/2005'
			},

			unit_xml_editor_note:{
				marginal_id: '139889525',
				textfield_value: 'Text',
				documentidfield_value: 'marginal'
			},

			unit_xml_editor_textnote:{
				marginal_id: '139889525',
				textfield_value: 'Text',
				documentidfield_value: 'marginal'
			},

			unit_xml_editor_ementa:{
				marginal_id: '139889525',
				textfield_value: 'Text',
				officialfield_value: 'oficial'
			},

			unit_xml_editor_section:{
				marginal_id: '139889525',
				textfield_value: 'Text',
				idfield_value: 'id'
			}

		}

};
module.exports = testData;