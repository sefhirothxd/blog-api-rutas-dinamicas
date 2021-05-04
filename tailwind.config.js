module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				greenLight: '#5A8FC3',
				textColor: '#F3F9FE',
				morado: '#8884FF',
				amarrillo: '#FAD7A1',
				rojoBlack: '#E96D71',
			},
			boxShadow: {
				caja: '-4px 4px 14px rgba(0, 0, 0, 0.25)',
			},
			fontFamily: {
				body: ['Oxygen'],
			},
			maxWidth: {
				960: '960px',
				1024: '1024px',
				1280: '1280px',
				1132: '1132px',
				550: '550px',
				340: '340px',
			},
			width: {
				680: '680px',
			},
			fontSize: {
				'14px': '14px',
				'34px': '34px',
			},
			margin: {
				17: '4.25rem',
				18: '4.50rem',
				19: '4.75rem',
			},
			boxShadow: {
				showTitle:
					'rgba(182, 209, 236, 0.4) -5px 5px, rgba(182, 209, 236, 0.3) -10px 10px, rgba(182, 209, 236, 0.2) -15px 15px, rgba(182, 209, 236, 0.1) -20px 20px, rgba(182, 209, 236, 0.05) -25px 25px',
			},
			screens: {
				xs: '360px',
			},
			minWidth: {
				300: '300px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
