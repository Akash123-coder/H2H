import React from 'react'
import DealerAddProduct from '../components/DealerAddProduct'
import List from '../components/List'

function DealerPage() {
  return (
    <div>
      <div className="p-5 w-full flex ">
        <div className="flex-1">
          <DealerAddProduct/>
        </div>
        <div className="">
        <button>Add Product</button>
        </div>
      </div>
        <div className="p-10 ">
        <List/>
        </div>
    </div>
  )
}

export default DealerPage