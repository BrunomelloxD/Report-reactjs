/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#00FA97', // Verde primário
                secondary: '#5A53F7', // Azul secundário
                background: '#F2F2FE', // Branco de fundo
                dark: '#707070', // Cinza escuro
                'dark-black': '#241640' // Preto escuro
            }
        }
    },
    plugins: []
}
