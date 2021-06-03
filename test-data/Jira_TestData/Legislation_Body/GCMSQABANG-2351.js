var testData = {
    qc: {
        spain: {
            	marginal_id: '4846462',
            verify:"//a[contains(text(),'Gobierno')]",
            leg:'LEG - Legislación',
        },
        br: {
            marginal_id: '63003631',
        verify:"//a[contains(text(),'Portaria')]",
        leg:'LGL - Legislación',
    },
    mexico: {
        marginal_id: '68755083',
    verify:"//a[contains(text(),'Iniciativas Aprobadas')]",
    leg:'LEG - Legislacion',
},
    },
    client: {
        spain: {
            marginal_id: '1570799',
            verify:"//a[contains(text(),'Gobierno')]",

        },
        br: {
            marginal_id: '63003631',
        verify:"//a[contains(text(),'Portaria')]",
        leg:'LGL - Legislación',
    },

    mexico: {
        marginal_id: '68755083',
    verify:"//a[contains(text(),'Iniciativa Aprobada')]",
    leg:'LEG - Legislacion',
},
    }
};

module.exports = testData;