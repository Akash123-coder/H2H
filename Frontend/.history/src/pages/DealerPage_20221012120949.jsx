import React from 'react'
import List from '../components/List'

function DealerPage() {
  return (
    <div>
      <div className="p-5">
        <button>Add Product</button>
      </div>
        <div className="p-10 ">
        <List/>
        </div>
    </div>
  )
}

export default DealerPage