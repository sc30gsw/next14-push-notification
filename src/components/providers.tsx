'use client'

import { LocationStateProvider } from '@location-state/core'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { RouterProvider } from 'react-aria-components'
import { ThemeProvider } from './theme-provider'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >
  }
}

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider enableSystem={true} attribute="class">
        <LocationStateProvider>{children}</LocationStateProvider>
      </ThemeProvider>
    </RouterProvider>
  )
}
