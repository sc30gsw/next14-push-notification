import { ShareButton } from '@/features/sns-share/components/share-button'
import React from 'react'

const SharePage = () => {
  return (
    <div className="max-w-screen-md mx-auto flex flex-col items-center my-6 gap-4">
      <h1 className="text-2xl font-bold">share page</h1>
      <ShareButton />
    </div>
  )
}

export default SharePage
