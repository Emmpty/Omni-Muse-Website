module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      screens: {
        sm: '640px', // small devices
        md: '768px', // medium devices
        lg: '1024px', // large devices
        xl: '1280px', // extra large devices
        '2xl': '1920px', // 为 1920px 或更大屏幕添加断点
        '3xl': '2560px', // 为 2560px 或更大屏幕添加断点
      },
      colors: {
        primary: {
          100: '#f4eaff',
          200: '#e2cfff',
          300: '#c19cff',
          400: '#9f64ff',
          500: '#8137fe',
          600: '#6f19fe',
          700: '#6609ff',
          800: '#5500e4',
          900: '#4b00cc',
          1000: '#7760FF',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      backgroundImage: {
        // 直接定义背景图案，使用完整的 CSS 渐变值
        'button-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(119, 96, 255, 0.42) 100%)',
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
