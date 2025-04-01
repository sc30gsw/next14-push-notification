'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

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
      <Link href={'/'}>
        <button
          type="button"
          className="bg-slate-700 px-4 py-2 rounded-md text-white shadow-md"
        >
          button
        </button>
      </Link>
    </div>
  )
}

export default SharePage
