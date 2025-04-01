'use client'

import { Tabs } from '../components/ui'

const Home = () => {
  return (
    <div className="max-w-screen-md mx-auto flex flex-col items-center my-6">
      <Tabs aria-label="Recipe App" className="w-full">
        <Tabs.List className={'border-b'}>
          <Tabs.Tab id="r">Authentication</Tabs.Tab>
          <Tabs.Tab id="i">Ingredients</Tabs.Tab>
          <Tabs.Tab id="m">Meal Plans</Tabs.Tab>
          <Tabs.Tab id="v">Videos</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="r">
          <a
            target="_blank"
            href="https://my-first-auth0.vercel.app/auth/login"
            rel="noreferrer"
          >
            login
          </a>
        </Tabs.Panel>
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
    </div>
  )
}

export default Home
