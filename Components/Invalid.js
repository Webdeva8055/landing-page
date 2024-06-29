import React from 'react'
import { TiWarningOutline } from "react-icons/ti";

const Invalid = () => {
  return (
    <>
    <div className='outer-sector'>
    <TiWarningOutline className='warn' size={'3em'}/>
    <div className='sector-invalid'>
                <div className='inner-sector'>
                <h1>Invalid Screen Type</h1>
                </div>
            <h2>Please open desktop mode or shift to desktop/laptop</h2>
        </div>
    </div>
       
    </>
  )
}

export default Invalid