import React from 'react'

function CategoryBtn(props) {
  return (
    <div className='flex justify-center items-center px-3 py-2 bg-white rounded-[12px] cursor-pointer'>
        {props.title}
    </div>
  )
}

export default CategoryBtn