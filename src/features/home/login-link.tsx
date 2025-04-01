'use client'

import React, { useEffect, useState } from 'react'

export const LoginLink = () => {
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
    <a
      href={`https://my-first-auth0.vercel.app/auth/login?redirectTo=${url.href}`}
    >
      Login
    </a>
  )
}
