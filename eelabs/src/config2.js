var config = {
    style: 'mapbox://styles/idafensp/ckwf1xbc11gcf15p79xvm8xz1',
    accessToken: 'pk.eyJ1IjoiaWRhZmVuc3AiLCJhIjoiY2t3ZXlsdnl0MDlreTJvbXVnM2kyeGMyaSJ9.px5_x3AHstYaif4wyHU28Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'EELabs',
    subtitle: 'Uso Sostenible de la Luz Artifical',
    byline: '',
    footer: 'EELabs (eelabs.eu) es un proyecto financiado por el Programa INTERREG V-A MAC 2014-2020, cofinanciado por el FEDER (Fondo Europeo de Desarrollo Regional) de la Unión Europea, bajo el contrato número MAC2/4.6d/238 <br> En EELabs trabajan 5 centros de la Macaronesia (IAC, ITER, UPGC, SPEA-Azores, SPEA-Madeira)',
    chapters: [
        {
            id: 'id-lpl1',
            alignment: 'right',
            hidden: false,
            title: 'LPL 1 - Parque Nacional del Teide',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
				center: [-16.55076, 28.30389],
				zoom: 10.61,
				pitch: 60.00,
				bearing: -44.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'id-lpl2',
            alignment: 'left',
            hidden: false,
            title: 'LPL 2 - Parque Nacional Caldera de Taburiente',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
				center: [-17.86817, 28.72077],
				zoom: 10.61,
				pitch: 60.00,
				bearing: -44.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'id-lpl3',
            alignment: 'right',
            hidden: false,
            title: 'LPL 3 - Este de Madeira',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
				center: [-16.94706, 32.69116],
				zoom: 11.16,
				pitch: 60.00,
				bearing: -30.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'id-lpl4',
            alignment: 'left',
            hidden: false,
            title: 'LPL 4 - Isla de Corvo',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
				center: [-31.11326, 39.69429],
				zoom: 12.79,
				pitch: 51.00,
				bearing: 31.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'id-lpl5',
            alignment: 'left',
            hidden: false,
            title: 'LPL 5 - Parque Rural del Nublo',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
				center: [-15.61023, 27.94600],
				zoom: 10.61,
				pitch: 60.00,
				bearing: 46.98
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
        }
    ]
};
