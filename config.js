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
    byline: 'By Jeremy Allen, Marina Matsuura, Kate McIntyre and Carl Wittmann',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
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
            description: "Since Vancouver’s reservoirs are supplied by snowmelt and rain this brings up questions as to how climatic factors can affect the reservoirs and their abundance. Is Vancouver’s water system resilient enough in the face of climate change? Climate change has had and will continue to have devastating effects across the globe and will prove especially damaging to clean and safe water. In 2022, we saw an abnormally warm and dry fall season where we saw temperatures above 20 degrees Celsius and a lack of precipitation until the latter half of October. This was a cause for concern for Vancouver’s water supply because the city was continuing to use the supply from the winter’s snowmelt. There had not been any major water-supplying weather events for several months.",
            location: {
                center: [-122.91100, 49.38069],
                zoom: 10.17,
                pitch: 54.50,
                bearing: -170.40,
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
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Glacial Melt',
            image: '',
            description: "Since Vancouver’s reservoirs are supplied by snowmelt and rain this brings up questions as to how climatic factors can affect the reservoirs and their abundance. Is Vancouver’s water system resilient enough in the face of climate change? Climate change has had and will continue to have devastating effects across the globe and will prove especially damaging to clean and safe water. In 2022, we saw an abnormally warm and dry fall season where we saw temperatures above 20 degrees Celsius and a lack of precipitation until the latter half of October. This was a cause for concern for Vancouver’s water supply because the city was continuing to use the supply from the winter’s snowmelt. There had not been any major water-supplying weather events for several months.",
            location: {
                center: [-122.76599, 49.40065],
                zoom: 11.03,
                pitch: 66,
                bearing: -157.60,
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
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Climate Change and Water Quality',
            image: '',
            description: "Climate change will increase sediments, salinity, pollution, and runoff. This will make ensuring access to clean and safe water more difficult and costly. In Vancouver, the snowpack is expected to decrease by 56% by 2050 which will have major implications for how much water will be available for use. Vancouverites and their relationship to 'free' and clean tap water will likely change as climate change impacts these systems. (Pepler, 2020) Droughts are expected to worsen with climate change as well. Vancouver has experienced incredibly high temperatures in the summer months in the past few years in the form of heat waves or 'domes.' This functions as an entrapment of hot ocean air which can reach incredibly high temperatures and lead to damage to both the welfare of people and water systems and availability (NOAA, n.d.). Regardless of if there’s a heat dome or simply increased temperatures in the summer months, Vancouver does have some systems of restrictions for water usage from May 1st to October 15 (City of Vancouver, n.d.a). During this period water usage increases by 50%, mainly as a result of lawn watering and so these restrictions apply to limiting the amount of water used and how often people can water their lawns (City of Vancouver, n.d.a).", 
            location: {
                center: [-122.96256, 49.27492],
                zoom: 10.39,
                pitch: 60.50,
                bearing: -43.64,
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
            id: 'eighth-chapter',
            alignment: 'left',
            hidden: false,
            title: "The Future of Vancouver's Water Supply",
            image: '',
            description: "By 2050, Vancouver’s population will increase by approximately 1 million more people (). It is difficult to fully comprehend what this would mean for the city, but it is clear that based on the fact it is already necessary for the city to put restrictions in place in the summer months, that Vancouver’s water system likely would not be able to support such an increase in population, especially considering how climate change will affect the water source. This could lead to some level of crisis related to the accessibility and safety of Vancouver’s drinking water. Although, it is necessary to recognize that there are presently many urban areas across the globe experiencing water-related crises that also must be involved when exploring water-related discussions.", 
            location: {
                center: [-123.10402, 49.29880],
                zoom: 9.82,
                pitch: 59.50,
                bearing: 53.96,
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
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            title: "Flint, Michigan",
            image: '',
            description: "Flint, Michigan, USA has been experiencing a water-related crisis for the past 9 years when the city decided to switch the resource they got their water in order to save money. The original source of water was Detroit’s system but it was moved to the Flint River, which was inadequately tested leading to city-wide chronic complaints, health problems, and quality issues. Over the past century, Flint River had been used as an unofficial dump site for many local industries from meatpacking facilities, car factories, lumber mills, and sewage as well as agricultural, urban, and landfill runoff. This, obviously, has made the water unfit for drinking as it is highly corrosive. This in combination with the fact that the pipes used to distribute water throughout the town are old, leaching lead pipes has increased the problems around water for the community. These factors have led to widespread disease and other health problems, especially in children who have grown up in the community. It is being argued that the people of Flint not having access to safe water for their daily needs only emphasizes racial and economic divides that are already present across several cities in the US. Worsening water access has the very real potential to worsen such divides which highlights such concerns as the globe moves toward a more uncertain future regarding such accessibility. (Denchak, 2018)", 
            location: {
                center: [-122.97985, 49.24554],
                zoom: 9.44,
                pitch: 65.50,
                bearing: -90.45,
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
            id: 'tenth-chapter',
            alignment: 'left',
            hidden: false,
            title: "Canada's Indigenous Communities",
            image: '',
            description: "Similar concerns are present throughout North American First Nations communities, particularly in Canada. Most Canadians have the privilege of clean and accessible drinking water and hold similar mentalities toward drinking water as Vancouverites do but this is not the reality for many Indigenous people living on reserve land as many have faced drinking water advisories with little to no support. In the past few years, the Canadian government has been aiming to solve the problem of drinking water advisories in First Nations communities, but solutions have been a long time coming and still fall short for many communities. In a country that is so financially and resource wealthy, the shortcomings of the water system in the many Indigenous communities that have experienced limited clean water access seem as a result of purposeful negligence and discrimination. This falls in line with not-so-distant racist and genocidal government policies that have targeted Indigenous Peoples in hopes of removing them entirely. (Cecco, 2021)", 
            location: {
                center: [-122.97985, 49.24554],
                zoom: 9.44,
                pitch: 65.50,
                bearing: -90.45,
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
