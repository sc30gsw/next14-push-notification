'use client'

import { Tabs } from '../components/ui'

const Home = () => {
  return (
    <div className='max-w-screen-md mx-auto flex flex-col items-center my-6'>
    <Tabs aria-label="Recipe App" className="w-full">
      <Tabs.List>
        <Tabs.Tab id="r">Recipes</Tabs.Tab>
        <Tabs.Tab id="i">Ingredients</Tabs.Tab>
        <Tabs.Tab id="m">Meal Plans</Tabs.Tab>
        <Tabs.Tab id="v">Videos</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="r">
        Browse through a wide selection of recipes for all occasions and dietary
        preferences.
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
