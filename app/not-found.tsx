import * as React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-4">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 