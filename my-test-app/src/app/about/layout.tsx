import React from 'react';

interface Props{
 children : React.ReactNode;
}

const AboutLayout:React.FC<Props> = ({children}) => {
  return (
    <>
    <h1 className='text-3xl'>This is the about layout</h1>
    {children}
    </>
  )
}

export default AboutLayout;