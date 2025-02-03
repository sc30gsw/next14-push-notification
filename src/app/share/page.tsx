'use client'

import dynamic from 'next/dynamic'

const ShareButton = dynamic(
  () =>
    import('../../features/sns-share/components/share-button').then(
      (mod) => mod.ShareButton,
    ),
  { ssr: false },
)

const SharePage = () => {
  return (
    <div className="max-w-screen-md mx-auto flex flex-col items-center my-6 gap-4">
      <h1 className="text-2xl font-bold">share page</h1>
      <ShareButton />
    </div>
  )
}

export default SharePage
