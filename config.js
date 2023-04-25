var config = {
    style: 'mapbox://styles/adversarial-geography/clgvksdqt002x01pof9qqatn1',
    accessToken: 'pk.eyJ1IjoiYWR2ZXJzYXJpYWwtZ2VvZ3JhcGh5IiwiYSI6ImNsZjBvN3FqbjAwZDkzcmw0MGsxNDJ3MDIifQ.aVzxEUcFBUiojBtwfqYe6w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'SOMETHING SNAZZY ABOUT WATER',
    subtitle: 'SOMETHING DESCRIPTIVE ABOUT THE PROJECT',
    byline: 'By ______',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'ESTABLISHING SHOT OF NORTH AMERICA',
            image: './path/to/image/source.png',
            description: 'Our introduction goes blah blah blahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
            location: {
                center: [-81.141, 28.356],
                zoom: 3.4,
                pitch: 20,
                bearing: -45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'APPROACHING VANCOUVER',
            image: './path/to/image/source.png',
            description: 'Blah blah blahhhhhhhh',
            location: {
                center: [-122.875, 49.379],
                zoom: 4,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'You get it by now',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.875, 49.379],
                zoom: 7,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.875, 49.379],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
