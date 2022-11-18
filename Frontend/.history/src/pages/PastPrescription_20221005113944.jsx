import React from 'react'
import { AccodianData } from '../components/AccodianData';
import DatePickercomp from '../components/DatePickercomp';
import Select from '../components/Select';

function PastPrescription() {
  
  return (
    <div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg p-10">
        <div class="flex justify-between items-center pb-4">
          <div className="relative">
            <div
              id="table-Reimbursement"
              class="flex flex-nowrap items-center pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            Total Reimbursement: 3897$
          </div>
          <DatePickercomp />
          <Select />
        </div>
        <AccodianData/>
        <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
          <div class="flex items-center">
            <button
              type="button"
              class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
            >
              <svg
                width="9"
                fill="currentColor"
                height="8"
                class=""
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
            <button
              type="button"
              class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
            >
              1
            </button>
            <button
              type="button"
              class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
            >
              2
            </button>
            <button
              type="button"
              class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
            >
              3
            </button>
            <button
              type="button"
              class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
            >
              4
            </button>
            <button
              type="button"
              class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
            >
              <svg
                width="9"
                fill="currentColor"
                height="8"
                class=""
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastPrescription

