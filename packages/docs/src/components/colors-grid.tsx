import { colors } from '@tdeepv/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  const formatColor = (color: string) => {
    if (
      !color.startsWith('#') &&
      !color.startsWith('rgb') &&
      !color.startsWith('hsl')
    ) {
      return `#${color}`
    }
    return color
  }

  return (
    <div>
      {Object.entries(colors).map(([key, color]) => (
        <div
          key={key}
          style={{ backgroundColor: formatColor(color), padding: '2rem' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color:
                getContrast(formatColor(color), '#FFF') < 3.5 ? '#000' : '#FFF'
            }}
          >
            <strong>${key}</strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
