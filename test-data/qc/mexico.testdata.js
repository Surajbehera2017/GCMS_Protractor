var testData = {
    legislation: {
        sections: {

            thesaurus: {

                marginal_idthes_2: '68732040',
                marginal_idthes_1: '68732040'

            },
            context_index: {
					/*
					//qc data
					 marginal_idcont1: '68754732',
                marginal_id: '68754732',
                codexValue: 'Both',
                analystName: ' Pavan Gangone',
                analysisDate: ' 22/06/2016',
                internalNote: ' Test',
                errorMessage: 'Some units are duplicated, aborted operation.',
                contextindexHierarchy: 'Legislación: Listados de revisión',
                child_ContextindexHierarchy: 'Ley aduanera',
                edit_ContextindexHierarchy: 'Ley aduanera',
                marginal_idcont1: '68754732',
                marginal_id_filter: '68754732',
                ContextIndexType:'CODEX',
                context_index_term_invalid:'Tratado de Lisboa'
					 */
					//client data
					 marginal_idcont1: '72027580',
                marginal_id: '72027580',
                codexValue: 'Both',
                analystName: ' Pavan Gangone',
                analysisDate: ' 22/06/2016',
                internalNote: ' Test',
                errorMessage: 'Some units are duplicated, aborted operation.',
                contextindexHierarchy: 'Legislación: Listados de revisión',
                child_ContextindexHierarchy: 'Ley aduanera',
                edit_ContextindexHierarchy: 'Ley aduanera',
                marginal_idcont1: '72027580',
                marginal_id_filter: '72027580',
                ContextIndexType:'CODEX',
                context_index_term_invalid:'Tratado de Lisboa'

            },
            author_notes: {
                marginal_idaut1: '68732250',
                marginal_id: '68501233',
                ContextIndexType:'CODEX',
                NoteType:'Comentario',
                AuthorUnit:'RB.3',
                changeAuthorUnit:'RB.3',
                marginal_id_copy: '68501233',
                marginal_id_edit_delete_unit: '68501233',
                search_term: 'Normas Civiles',
                addbuttontext_authornotes: 'Agregar'

            },
            author: {
                marginal_id: '68734762',
                totalcount: 'View All (3)'
            },
            legislativebody: {
                marginal_id: '68734762',
                //marginal_id: '68734762',
                marginal_legisnum_id: '68734762',
                statute_note: 'abc1234',
                legis_list_value: 'Banco de México',
                statute_type: 'Anexo',
                marginal_provison_id: '68734762',
                legis_num: '1',
                legis_year: '1981',
                legis_previousNote: 'abc',
                legis_note: 'xyz',
                modify_legis_num: '2',
                modify_legis_year: '1991',
                modify_legis_previousNote: 'abc1',
                modify_legis_note: 'xyz1',
                change_legisbody_value: 'Cámara de Diputados',
                old_legisbody_value: 'Banco de México',
                modify_provisonDate: '10/05/2016',
                old_provisonDate: '09/05/2016',
                modify_abbreviation: 'A. en P.',
                old_modify_abbreviation: 'AC',
                modify_alias: 'QC Testing',
                old_modify_alias: 'XXXX',
                modify_mainKeyword: 'Barcelona',
                old_mainKeyword: 'A.C'


            },
            fix_section_and_general: {
                marginal_id: '68500169',
                document_no: 'LEG\\2000\\1',
                range: 'Ley',
                docnum: '',
                lawarea: 'Fiscal',
                abstract: 'Ley del Procedimiento Administrativo del Estado de Jalisco',
                marginal_id_split_display: '68735038'
            },
            document_type: {
                marginal_id_p_1: '',
                marginal_id_p_2: '1576073',
                secondary_languages: ['Español', 'Catalán', 'Francés', 'Gallego', 'Italiano'],
                marginal_id_Doc_Type: '68736017',
                marginal_id_display: '68736017',
                marginal_id_Edit_Doc_Type: '68500169',
                orginalDoctype: 'Otras disposiciones',
                OrginalJurisdiction: 'Estado de Nuevo León',
                changeValidationJurisdiction: 'Cancún',
                changeToJurisdiction: 'Estado de Jalisco',
                errormessage: '**El ámbito territorial de la disposición no coincide con ningún ámbito legislativo (principal o secundario) de un órgano emisor'
            },
            thesaurus_section: {
                marginal_id: '68500169',
                marginal_id_having_unit: '68500169',
                section_links: ['INDICE COMUN (284)'],
                thesaurus_search_term: '',
                analyst_search_term: '',
                complementary_info_term: '',
                unit: '',
                thesaurus_search_term_invalid: 'Contratación Mercantil'
            },
            control_data: {
                marginal_id: '68755463',
                analyst: 'Punit Joshi',
                analysis_date: '03/03/2016',
                filename: 'LEG_LEL_LMLEG800104DD',
                relevant_change: '02/03/2016'
            },
            date_in_force: {
                marginal_id: '68755463',
                marginal_id1: '68755463',
                ineffective_note: 'Ineffective Note',
                marginal_iddate1: '68734762',
                marginal_id_edition_display: '68755463',
                marginal_id_edit_date_in_force: '68755463',
                date_in_force: '01/01/2015',
                date_in_force_prior: '01/01/1980',
                failmsg: '**La fecha de vigencia es anterior a la fecha de disposición',
                marginal_id_add_document: '68755463',
                document_code: 'LEG - Legislacion',
                ineffective_type: 'Circunstancial',
                ineffective_note_large: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.'

            },
            practice_area: {
                marginal_id: '68755463',
                marginal_id1: '68755463',
                marginal_id2: '68755463',
                analyst: 'Angelina Hernández García',
                marginal_id3: '68755463',
                text1: 'Laboral Principal',
                text: 'Laboral'

            },
            publication: {
                marginal_id: '68734762',
                name: 'Gaceta Parlamentaria',
                date: '13/10/2013%',
                hasdate: '13/10/2013',
                principaltext: 'Principal',
                datenumbertext: 'Date & Number, Series',
                pagetext: 'Position',
                publication_name1: 'Diario Oficial de la Federación',
                publication_date1: '30/12/2013 2013',
                publication_name2: 'Gaceta Parlamentaria',
                publication_date2: '17/10/2013',
                //publication delete date
                //marginal_id_1: '',
                delete_date: '15/11/2009%',
                duplicate_date: '15/11/2009%',
                add_date: '30/09/2008%',
                //publication and date edition block
                marginal_id_1: '68734762',
                haschangepublication_name: 'Diario Oficial de la Federación',
                changepublication_name: 'Gaceta Parlamentaria',
                addchange_date_1: '17/10/2013%',
                has_addchange_date_1: '17/10/2013',
                addchange_date_2: '30/12/2013  2013',
                has_addchange_date_2: '30/12/2013 2013',
                edit_date_1: ' 09/12/2013  2013',
                edit_date_2: '15/11/2009%',
                unit_level: '1#A.391',
                marginal_idrel1: '68500169'

            },
            relationShip: {
                marginal_id: '68734762', //'155633883'
                relationship_name: 'Véase',
                relationship_code: 'LEG',
                relationship_year: '2010',
                relationship_num: '3',
                TotalCount: 'View All (3)',
                //test data for the single and addtest relation ship
                //relationship_name_1:'Véase',

                //relationship_code_1:'LEG',
                //relationship_year_1:'2010',
                //relationship_num_1:'3',
                affectedunit_iden_code: 'A',
                affected_unitiden_part: '1',
                affected_unitiden_part_1: '2',
                affected_unitiden_part_2: '3',
                TotalCount_1: 'View All (7)'
            },
            differenttyperelationShip: {
                marginal_id: '70543545',
                relationship_name_1: 'modifica',
                relationship_name_2: 'Véase',
                relationship_name_3: 'Adhiere',
                relationship_code_1: 'LEG',
                relationship_year_1: '2001',
                relationship_num_1: '1',
                affectedunit_iden_code: 'A',
                affected_unitiden_part: '1',
                affected_unitiden_part_1: '2',
                affected_unitiden_part_2: '3',
                TotalCount_1: 'View All (5)'

            },
            relationship: {
                marginal_id: '68500169', //need to find marginal id with modifica relations and consolidation //status as no
                unit_level: '1#A.391',
                marginal_idrel1: '68500169',
                search_term: 'abc'
            },

            bills: {
                marginal_id_not_having_bills: '68500169'
            },
            grants_subsidies: {
                marginal_id_not_displayed: '68500169'

            },
            rightPanel: {
                marginal_id: '68732068',
                value: '[ng-click="thesaurus.viewThesaurusDetail(1, t.name)"]'
            },
            
            load_text: {
                marginal_id: '139799846',
                marginal_id_first_original_text: '12088224',
                marginal_id_already_original_text: '1570752',
                marginal_id_duplicate_structure: '139799846',
                marginal_id_duplicate_structure_date: '139927916',
                marginal_id_with_context_index: '68754732',
                marginal_id_without_context_index: '68500169',
                marginal_id_for_rel_icon: '1570752'
            },
            
            allfiltersInternationalization: {
                marginal_id_thesaurus: '68500169',
                marginal_id_contextindex: '68754732',
                addbuttontext: 'Nuevo',
                importbuttontext: 'Importar',
                filtersbuttontext: 'Mostrar Filtros',
                marginal_id_authornotes: '68734762',
                marginal_id_relationship: '68500169',
                marginal_id_legislationdictionary: '1570752'
            }
        }

    }

};
module.exports = testData;