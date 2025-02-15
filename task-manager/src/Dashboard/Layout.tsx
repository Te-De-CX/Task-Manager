import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

export default function Layout() {
  return (
    <>
    <div className="flex">
        <Nav />
        <Hero />
    </div>
    </>
  )
}
