import { usePathname } from 'next/navigation'
import React, { useTransition } from 'react'

// https://zenn.dev/mr_ozin/articles/89329c5209d8da
export const ShareButton = () => {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const shareData = {
    title: 'sns share test',
    text: 'sns share test',
    url: new URL(pathname, location.origin).href,
  } as const satisfies ShareData

  const share = () => {
    startTransition(async () => {
      try {
        await navigator.share(shareData)

        alert('successfully shared')
      } catch (err: unknown) {
        if (err instanceof Error) {
          alert((err as Error).message)

          return
        }

        alert('something went wrong')
      }
    })
  }

  const isCanShare = 'canShare' in navigator && navigator.canShare(shareData)

  return (
    <button
      type="button"
      disabled={!isCanShare || isPending}
      onClick={share}
      className="text-white bg-zinc-800 rounded-md px-3 py-2 hover:bg-zinc-900/80 duration-300 transition-all shadow-md flex items-center cursor-pointer"
    >
      {isPending ? (
        <>
          <div
            className="animate-spin h-4 w-4 border-2 border-zinc-400 rounded-full border-t-transparent mr-2"
            aria-label="loading"
          />
          <span>sharing...</span>
        </>
      ) : isCanShare ? (
        <span>share</span>
      ) : (
        <span>cannot share</span>
      )}
    </button>
  )
}
