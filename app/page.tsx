import React from 'react'
import Link from 'next/link'
// import styles from "./page.globals.css"

const page = () => {
  return (
    <div>page
      <h1 className= 'text-lg py-4 m-4'>Home Page</h1>
      <Link href='/about'>AboutUs</Link>


    </div>
        
  )
}

export default page