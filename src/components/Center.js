import React from 'react'

function Center() {
  return (
    <div className='bg-[#ffeeeecd]'>
        <div className='flex p-12'>
            {/* I am here to waiting to be centered */}
                <div className=' w-1/3'></div>
            <div className='font-serif w-1/3 items-center justify-center'>
                <p className="px-4 text-3xl text-gray-500">Introducing our</p>
                <p className='text-6xl '>Schedule</p>
            </div>
            <div className=' w-1/3'></div>
        </div>
    </div>
  )
}

export default Center