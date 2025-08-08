import React from 'react'

export default function Footer() {
  return (
    <footer className="text-black mt-12 mb-6">
      <div className="container mx-auto flex justify-center">
        <p className="text-center text-xs">© {new Date().getFullYear()} Tanuson Deachaboonchana. All rights reserved.</p>
      </div>
    </footer>
  )
}