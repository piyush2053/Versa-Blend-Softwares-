
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	important: true,
	theme: {
		extend: {
			colors: {
				Navbar: '#263238',
				rws: '#007373',
				warning: '#FF9800'
			}
			,
			animation: {
				fade: 'fadeIn .4s ease-in-out',
				slideInRight: 'slideInRight .4s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				slideInRight: {
					from: { transform: 'translateX(100%)', opacity: 0 },
					to: { transform: 'translateX(0)', opacity: 1 },
				}
			}
		}
	},
	plugins: [],
}
