import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="spinner w-12 h-12 border-4 border-t-4 border-gray-300 rounded-full animate-spin"></div>
</div>

  )
}

export default Spinner
