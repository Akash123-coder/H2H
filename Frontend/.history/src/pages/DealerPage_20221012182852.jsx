import React from 'react'
import DealerAddProduct from '../components/DealerAddProduct'
import List from '../components/List'
import { useState } from 'react'

function DealerPage() {
  const [Clicked, setClicked] = useState(false)


  return (
    <div>
      <div className="p-5 w-full flex ">
        <div className={`ml-8 mr-2 ${Clicked?'hidden':'visible'} md:visible font-semibold text-xl align-middle  text-gray-700`}>Create New Product</div>
        {Clicked ? (
          <div className="flex-1">
            <DealerAddProduct Clicked={Clicked} setClicked={setClicked} />
          </div>
        ) : (
          <button
          onClick={()=>setClicked(!Clicked)}
            class="text-white inline-block bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
            type="button"
          >
            Product
          </button>
        )}
      </div>
      <div className="p-8 ">
        <List />
      </div>
    </div>
  );
}

export default DealerPage

