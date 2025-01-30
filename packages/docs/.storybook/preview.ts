import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    docs: { theme: themes.dark },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#18181B'
        },
        {
          name: 'light',
          value: '#FFFFFF'
        }
      ]
    },
    darkMode: {
      current: 'dark'
    }
  }
}

export default preview
