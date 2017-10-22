$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Crop1: 2666,
            Crop2: null,
            Crop3: 2647
        }, {
            period: '2010 Q2',
            Crop1: 2778,
            Crop2: 2294,
            Crop3: 2441
        }, {
            period: '2010 Q3',
            Crop1: 4912,
            Crop2: 1969,
            Crop3: 2501
        }, {
            period: '2010 Q4',
            Crop1: 3767,
            Crop2: 3597,
            Crop3: 5689
        }, {
            period: '2011 Q1',
            Crop1: 6810,
            Crop2: 1914,
            Crop3: 2293
        }, {
            period: '2011 Q2',
            Crop1: 5670,
            Crop2: 4293,
            Crop3: 1881
        }, {
            period: '2011 Q3',
            Crop1: 4820,
            Crop2: 3795,
            Crop3: 1588
        }, {
            period: '2011 Q4',
            Crop1: 15073,
            Crop2: 5967,
            Crop3: 5175
        }, {
            period: '2012 Q1',
            Crop1: 10687,
            Crop2: 4460,
            Crop3: 2028
        }, {
            period: '2012 Q2',
            Crop1: 8432,
            Crop2: 5713,
            Crop3: 1791
        }],
        xkey: 'period',
        ykeys: ['Crop1', 'Crop2', 'Crop3'],
        labels: ['Crop1', 'Crop2', 'Crop 3'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
