import React from 'react'

const Button = ({ styles }) => {
  return (
    <>
      <button 
        type='button' 
        className={`
          py-4 px-6 bg-blue-gradient font-poppins 
          font-medium text-[18px] text-primary 
          outline-none shadow-emerald-500 border-none rounded-full ${styles}`
        }
      >
        Get started
      </button>
    </>
  )
}

export default Button