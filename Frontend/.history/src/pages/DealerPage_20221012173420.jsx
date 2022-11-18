import React from 'react'
import DealerAddProduct from '../components/DealerAddProduct'
import List from '../components/List'
import { useState } from 'react'

function DealerPage() {
  const [Clicked, setClicked] = useState(false)
  const HandleClick =()=>{

  }

  return (
    <div>
      <div className="p-5 w-full flex ">
        {Clicked ? (
          <div className="flex-1">
            <DealerAddProduct />
          </div>
        ) : (
          <button
          onClick={()=>setClicked(!true)}
            class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
            type="button"
          >
            Add Product
          </button>
        )}
      </div>
      <div className="p-10 ">
        <List />
      </div>
    </div>
  );
}

export default DealerPage

