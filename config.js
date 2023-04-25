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
    title: 'Urban Hydrological Metabolism',
    subtitle: 'Exploring Water Usage in the Greater Vancouver Water District',
    byline: 'By ______',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        
        //THIS IS OUR FIRST CHAPTER
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "Where does our water come from? That’s not a question that is often asked here in Vancouver; we are generally aware that our freshwater comes from the mountains, and since there are mountains as far as the eye can see there must be an abundance of water. Believing that our water comes from the vast Coastal Mountains Range can lead to the dangerous mindset that our water system is safe from the effects of climate change.",
            location: {
                center: [-103.87429, 31.42158],
                zoom: 3.57,
                pitch: 26,
                bearing: 0,
                speed: 0.5,
                curve: 1,
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

        // THIS IS OUR SECOND CHAPTER
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: "North America's Primary Watersheds",
            image: '',
            description: "What do we know about our water supply? A study sponsored by Unilever and RBC called Canadian Water Attitudes Study in 2011 released a survey for all Canadians to respond to, and found that 80% of respondents were 'very' or 'somewhat' confident of Canadian drinking water, and were more confident that the Canadian Government had the capital and the readiness to protect it (Pentland, 2013). While confidence was found to be high, actual knowledge of water in Canada was found to be minimal; most survey respondents believed that Canada has the most fresh water in the world (Canada does not, Brazil does), Canadians use on average 329L of water a day and most respondents guess we use half of that a day, and most believed that households use the majority of Canada’s freshwater supply (households do not, agriculture does) (Pentland, 2013).",
            location: {
                center: [-104.58308, 46.80711],
                zoom: 3.57,
                pitch: 0,
                bearing: 0,
                speed: 0.1,
                curve: 0.5,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'fully',
            hidden: false,
            title: "Vancouver's Metabolic Rift",
            image: '',
            description: "Is this knowledge discrepancy due to ignorance or lack of information and data? Either way, there is a metabolic rift between Canadians, especially Vancouverites, and the reality of fresh water. The infrastructure and the ecological processes that supply our renowned drinking water are out of the sight of the ordinary citizen. Vancouver’s water system is reliable and supplies all of Metro Vancouver with clean, high-quality water and so many people take this system for granted. This project aims to explore Vancouver’s water system from its origin point to the home and reveal to Vancouverites and other interested parties what this system actually looks like. We aim to make the realities of this system clear by visualizing the amount of water we actually have available to us while also preparing ourselves for the reality of the future of this system which will only decrease as the population grows and climate change worsens. We also hope that this approach is exportable to other contexts across the globe when trying to better understand water systems in urban areas.",
            location: {
                center: [-122.875, 49.379],
                zoom: 9,
                pitch: 0,
                bearing: 0.00,
                speed: 0.4,
                curve: 0.8,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'The Greater Vancouver Water District',
            image: '',
            description: "All of Vancouver’s drinking water comes from 3 reservoirs: Capilano, Seymour, and Coquitlam. The water pools in these reservoirs thanks to snowmelt and rainfall (Pepler, 2020). Before distribution throughout the Metro Vancouver area, a majority of the water is filtered at the Seymour-Capilano Water Filtration Plant located downstream of the Seymour water supply (Pepler, 2020). The goal of filtration is to reduce cloudiness, remove micro-organisms that can cause illness, and help reduce the amount of chlorine required to achieve disinfection of the water (City of Vancouver, n.d.b). Overall this improves the taste, smell, and look of the water, explaining why Vancouver’s water is regarded so highly, especially in comparison to other major cities in North America. ",
            location: {
                center: [-122.875, 49.379],
                zoom: 10,
                pitch: 60,
                bearing: 0,
                speed: 0.4,
                curve: 0.8,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Hydrologic Regimes',
            image: '',
            description: "All of Vancouver’s drinking water comes from 3 reservoirs: Capilano, Seymour, and Coquitlam. The water pools in these reservoirs thanks to snowmelt and rainfall (Pepler, 2020). Before distribution throughout the Metro Vancouver area, a majority of the water is filtered at the Seymour-Capilano Water Filtration Plant located downstream of the Seymour water supply (Pepler, 2020). The goal of filtration is to reduce cloudiness, remove micro-organisms that can cause illness, and help reduce the amount of chlorine required to achieve disinfection of the water (City of Vancouver, n.d.b). Overall this improves the taste, smell, and look of the water, explaining why Vancouver’s water is regarded so highly, especially in comparison to other major cities in North America. ",
            location: {
                center: [-122.875, 49.379],
                zoom: 10,
                pitch: 60,
                bearing: 0,
                speed: 0.4,
                curve: 0.8,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
