var testData = {
    qc: {
        spain: {

            marginal_id1: '1572021',
            section: 'Author Notes',
            btn: 'viewall',
            filter: 'input-filter-author-note-unit-detail',
            filterValue: 'DA.10',
            add: 'Add',
            xml: 'Edit (XML)',
            text: '<texto><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></texto>',
            newtext: '<texto><parrafo><parrafo alineacion-texto="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></parrafo></texto>',
            history: 'Change history',
            expected: "//span[contains(text(),'negrita')]",
        },
        br: {

            marginal_id1: '63004093',
            section: 'Author Notes',
            btn: 'viewall',
            filter: 'input-filter-author-note-unit-detail',
            filterValue: 'A.3',
            add: 'Add',
            xml: 'Edit (XML)',
            text: '<texto><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></texto>',
            newtext: '<texto><parrafo><parrafo alineacion-texto="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></parrafo></texto>',
            history: 'Change history',
            expected: "//span[contains(text(),'negrita')]",
            

        },
        mexico: {

            marginal_id1: '68735482',
            section: 'Author Notes',
            btn: 'viewall',
            filter: 'input-filter-author-note-unit-detail',
            filterValue: 'A.16',
            add: 'Add',
            xml: 'Edit (XML)',
            text: '<texto><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></texto>',
            newtext: '<texto><parrafo><parrafo alineacion-texto="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></parrafo></texto>',
            history: 'Change history',
            expected: "//span[contains(text(),'«»')]",
            
        },


    },
    client: {
        spain: {

            
            marginal_id1: '1572021',
            section: 'Author Notes',
            btn: 'viewall',
            filter: 'input-filter-author-note-unit-detail',
            filterValue: 'DA.10',
            add: 'Add',
            xml: 'Edit (XML)',
            text: '<texto><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></texto>',
            newtext: '<texto><parrafo><parrafo alineacion-texto="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></parrafo></texto>',
            history: 'Change history',
            expected: "//span[contains(text(),'negrita')]",
        },
        br: {

            marginal_id1: '63004093',
            section: 'Author Notes',
            btn: 'viewall',
            filter: 'input-filter-author-note-unit-detail',
            filterValue: 'A.2',
            add: 'Add',
            xml: 'Edit (XML)',
            text: '<texto><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></texto>',
            newtext: '<texto><parrafo><parrafo alineacion-texto="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></parrafo></texto>',
            history: 'Change history',
            expected: "//span[contains(text(),'negrita')]",
        },
        mexico: {

            marginal_id1: '68737296',
            section: 'Author Notes',
            btn: 'viewall',
            filter: 'input-filter-author-note-unit-detail',
            filterValue: 'A.1',
            add: 'Add',
            xml: 'Edit (XML)',
            text: '<texto><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></texto>',
            newtext: '<texto><parrafo><parrafo alineacion-texto="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</parrafo></parrafo></texto>',
            history: 'Change history',
            expected: "//span[contains(text(),'«»')]",
        

        },

    },
};


module.exports = testData;