/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-300
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // vibrant-orange
        background: "var(--color-background)", // gray-50
        foreground: "var(--color-foreground)", // gray-900
        primary: {
          DEFAULT: "var(--color-primary)", // deep-navy
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // steel-blue
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-600
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-100
          foreground: "var(--color-muted-foreground)", // gray-600
        },
        accent: {
          DEFAULT: "var(--color-accent)", // vibrant-orange
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-900
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-900
        },
        success: {
          DEFAULT: "var(--color-success)", // green-600
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // yellow-600
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-600
          foreground: "var(--color-error-foreground)", // white
        },
        // Brand-specific colors
        'infrastructure-navy': "var(--color-infrastructure-navy)", // deep-navy
        'steel-blue': "var(--color-steel-blue)", // steel-blue-authority
        'innovation-orange': "var(--color-innovation-orange)", // vibrant-orange
        'safety-green': "var(--color-safety-green)", // green-600
        'technical-gray': "var(--color-technical-gray)", // gray-500
        'professional-charcoal': "var(--color-professional-charcoal)", // gray-800
        'urgent-red': "var(--color-urgent-red)", // red-600
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        'unit': 'var(--spacing-unit)', // 8px
        'unit-2': 'calc(var(--spacing-unit) * 2)', // 16px
        'unit-3': 'calc(var(--spacing-unit) * 3)', // 24px
        'unit-4': 'calc(var(--spacing-unit) * 4)', // 32px
        'unit-5': 'calc(var(--spacing-unit) * 5)', // 40px
        'unit-6': 'calc(var(--spacing-unit) * 6)', // 48px
        'unit-8': 'calc(var(--spacing-unit) * 8)', // 64px
        'unit-10': 'calc(var(--spacing-unit) * 10)', // 80px
        'unit-12': 'calc(var(--spacing-unit) * 12)', // 96px
        'unit-16': 'calc(var(--spacing-unit) * 16)', // 128px
        'unit-20': 'calc(var(--spacing-unit) * 20)', // 160px
      },
      borderRadius: {
        lg: "var(--radius)", // 8px
        md: "calc(var(--radius) - 2px)", // 6px
        sm: "calc(var(--radius) - 4px)", // 4px
      },
      boxShadow: {
        'brand-sm': 'var(--shadow-sm)',
        'brand': 'var(--shadow-default)',
        'brand-md': 'var(--shadow-md)',
        'brand-lg': 'var(--shadow-lg)',
        'brand-xl': 'var(--shadow-xl)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-slow": "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeIn": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slideUp": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionDuration: {
        'brand': '300ms',
        'brand-fast': '200ms',
      },
      transitionTimingFunction: {
        'brand': 'ease-out',
        'brand-fast': 'ease-in-out',
      },
      backdropBlur: {
        'light': '8px',
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'tooltip': '110',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}