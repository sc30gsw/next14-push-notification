'use client'

import { useLocationState } from '@location-state/core'

export function Counter() {
  const [counter, setCounter] = useLocationState({
    name: 'counter',
    defaultValue: 0,
    storeName: 'session',
  })

  return (
    <div>
      <p>
        storeName: <b>{counter}</b>, counter: <b>{counter}</b>
      </p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        increment
      </button>
    </div>
  )
}
