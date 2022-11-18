import React from 'react'
import DealerAddProduct from '../components/DealerAddProduct'
import List from '../components/List'

function DealerPage() {
  return (
    <div>
      <div className="p-5 w-full flex ">
        <div className="flex-1">
          <DealerAddProduct />
        </div>
        <div className="">
          <button
            class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
            type="button"
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="p-10 ">
        <List />
      </div>
    </div>
  );
}

export default DealerPage