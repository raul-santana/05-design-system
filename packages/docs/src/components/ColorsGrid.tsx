import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        key={key}
        style={{
          backgroundColor: color,
          padding: '2rem',
          fontFamily: 'monospace',
          color: getContrast(color, '#FFFF') < 3.5 ? '#000' : '#FFF',
        }}
      >
        <strong> ${key} </strong>
        <span> {color} </span>
      </div>
    )
  })
}
