'use client'

import { Tabs } from '@/components/ui'
import { ReactNode, useEffect, useState } from 'react'

export function AppTabs({
  children,
  isAuthenticated,
}: { children: ReactNode; isAuthenticated: boolean }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true)
    }
  }, [])

  if (!mounted) {
    return null
  }

  const url = new URL(location.href)

  return (
    <Tabs aria-label="Recipe App" className="w-full">
      <Tabs.List className={'border-b'}>
        <Tabs.Tab id="r">Authentication</Tabs.Tab>
        <Tabs.Tab id="i">Ingredients</Tabs.Tab>
        <Tabs.Tab id="m">Meal Plans</Tabs.Tab>
        <Tabs.Tab id="v">Videos</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="r">{children}</Tabs.Panel>
      <Tabs.Panel id="i">
        {isAuthenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please log in to view your ingredients.</p>
        )}
      </Tabs.Panel>
      <Tabs.Panel id="m">
        Here's your{' '}
        <a
          href={`https://my-first-auth0.vercel.app/auth/login?redirectTo=${url.href}`}
          target="_blank"
          rel="noreferrer"
        >
          first app
        </a>
      </Tabs.Panel>
      <Tabs.Panel id="v">
        Watch cooking videos to learn new techniques and recipes.
      </Tabs.Panel>
    </Tabs>
  )
}
