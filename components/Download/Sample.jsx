import React from 'react'

function Sample({innerUrl, outerUrl}) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Sample of Inner Label</h3>
      {innerUrl ? (
        <div className="relative w-full mt-5">
          <img src={innerUrl} alt="Uploaded" className="w-2/4 h-2/4" />
        </div>
      ) : (
        <div className='h-screen w-full bg-gray-200 border mb-10' />
      )}
      
      <h3 className="text-lg font-bold mb-4">Sample of Outer Label</h3>
      {outerUrl ? (
        <div className="relative w-full mt-5">
          <img src={outerUrl} alt="Uploaded" className="w-2/4 h-2/4" />
        </div>
      ) : (
        <div className='h-screen w-full bg-gray-200 border mb-10' />
      )}
    </div>
  )
}

export default Sample