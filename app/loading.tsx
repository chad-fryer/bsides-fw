import * as React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
    </div>
  )
} 