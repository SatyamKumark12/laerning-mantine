"use client"

import React from 'react'

interface PageParams{
    params : string
}

const page = ({params}:PageParams) => {
    console.log(params);
    
  return (
    <div>page</div>
  )
}

export default page

// export default function Page({ params }) {
//   console.log(params);
  
//   return <div>My Post</div>;
// }