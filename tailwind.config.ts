import type { Config } from 'tailwindcss'

export const screenSizes = {
  'zero': 1,
  'xs': 375,
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1200,
  '2xl': 1440,
  '3xl': 1920,
}

export const screens = {
  'xs': `${screenSizes.xs}px`,
  'xsMax': { max: `${screenSizes.xs - 1}px` },
  'sm': `${screenSizes.sm}px`,
  'smMax': { max: `${screenSizes.sm - 1}px` },
  'md': `${screenSizes.md}px`,
  'mdMax': { max: `${screenSizes.md - 1}px` },
  'lg': `${screenSizes.lg}px`,
  'lgMax': { max: `${screenSizes.lg - 1}px` },
  'xl': `${screenSizes.xl}px`,
  'xlMax': { max: `${screenSizes.xl - 1}px` },
  '2xl': `${screenSizes['2xl']}px`,
  '2xlMax': { max: `${screenSizes['2xl'] - 1}px` },
  '3xl': `${screenSizes['3xl']}px`,
  '3xlMax': { max: `${screenSizes['3xl'] - 1}px` },
}

export const colours = {
  white: '#ffffff',
  black: '#000000',
}

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './utilities/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      ...colours,
    },
    fontFamily: {
      body: [
        'Inter',
        'sans-serif',
        'system-ui',
      ],
    },
    fontSize: {
      16: '1rem',
      18: '1.125rem',
      27: '1.6875rem',
    },
    lineHeight: {
      default: '1',
      normal: '1.15',
    },
    letterSpacing: {
      normal: '0',
      plump: '0.02em',
      wide: '0.03em',
      wider: '0.05em',
      widest: '0.2em',
    },
    screens,
    transitionTimingFunction: {
      smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0.0, 1, 1)',
      out: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      inExpo: 'cubic-bezier(0.7, 0, 0.84, 0)',
      outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      inOutExpo: 'cubic-bezier(0.87, 0, 0.13, 1)',
      inQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',
      outQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      inOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
      inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      outBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    aspectRatio: {
      '16/9': '16 /9',
      '9/16': '9 / 16',
      '1/1': '1 / 1',
    },
  },
  plugins: [],
} satisfies Config
