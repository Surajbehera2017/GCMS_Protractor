var testData = {
    qc: {
        spain: {
            marginal_id: '139889525',
            leftpanel: 'Thesaurus',
            linktolink: 'viewalllink',
            unit: 'A.1',
            expect: "//span[text()='A.1']",
            clickonfilter: "Hide Filters",
            clickonfilter1: "Show Filters",
        },

        br: {
            marginal_id: '79134138',
            leftpanel: 'Thesaurus',
            linktolink: 'viewalllink',
            unit: 'A.1',
            expect: "//span[text()='A.1']",
            clickonfilter: "Hide Filters",
            clickonfilter1: "Show Filters",
        },

        mexico: {
            marginal_id: '68732256',
            leftpanel: 'Thesaurus',
            linktolink: 'viewalllink',
            unit: 'A.1',
            expect: "//span[text()='A.1']",
            clickonfilter: "Hide Filters",
            clickonfilter1: "Show Filters",
        },

        gulf: {
            marginal_id: '67616661',
            leftpanel: 'Thesaurus',
            linktolink: 'viewalllink',
            unit: 'ART.1',
            expect: "//span[text()='ART.1']",
            clickonfilter: "Hide Filters",
            clickonfilter1: "Show Filters",

        },
    },
    client: {
        spain: {
            marginal_id: '84973961',
            leftpanel: 'Thesaurus',
            linktolink: 'viewalllink',
            unit: 'A.12',
            expect: "//span[text()='A.12']",
            clickonfilter: "Hide Filters",


        },

        br: {
            marginal_id: '79134138',
            leftpanel: 'Thesaurus',
            linktolink: 'viewalllink',
            unit: 'A.1',
            expect: "//span[text()='A.1']",
            clickonfilter: "Hide Filters",
            clickonfilter1: "Show Filters",
        },

        mexico: {
            marginal_id: '70280780',
            leftpanel: 'Thesaurus',
            linktolink: 'viewalllink',
            unit: 'A.1',
            expect: "//span[text()='A.1']",
            clickonfilter: "Hide Filters",
            clickonfilter1: "Show Filters",
        },

        gulf: {
            marginal_id: '67616826',
            leftpanel: 'Thesaurus',
            linktolink: 'viewalllink',
            unit: 'SG',
            expect: "//span[text()='SG']",
            clickonfilter: "Hide Filters",
            clickonfilter1: "Show Filters",
        },
    }
};

module.exports = testData;