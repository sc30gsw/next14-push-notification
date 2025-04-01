'use client'

import { Tabs } from '@/components/ui'
import { ReactNode } from 'react'

export function AppTabs({ children }: { children: ReactNode }) {
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
        Check the list of ingredients needed for your chosen recipes.
      </Tabs.Panel>
      <Tabs.Panel id="m">
        Discover curated meal plans to simplify your weekly cooking.
      </Tabs.Panel>
      <Tabs.Panel id="v">
        Watch cooking videos to learn new techniques and recipes.
      </Tabs.Panel>
    </Tabs>
  )
}
