import React from 'react'
import Header from '@/components/common/Header'
export default async function page() {
  return (
   <>
   <Header/>
   <div className='container px-auto'>
    <div className='grid grid-cols-2 px-4'>
        <div>
            <span><h1>Tabs section</h1> </span>
        </div>
        <div> <span> <h2> Form section</h2></span></div>
    </div>
   </div>
   </>
  )
}

 