
import React from 'react'
import { AccodianData } from '../components/AccodianData';
import DatePickercomp from '../components/DatePickercomp';
import Select from '../components/Select';

function PastPrescription() {
  
  return (
    <div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg p-10">
        <div class="flex md:justify-between md:items-center pb-4  flex-wrap gap-3">
          <div className="relative">
            <div
              id="table-Reimbursement"
              class="flex flex-nowrap items-center pl-10 w-80  bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div className="text-lg font-semibold bg-indigo  text-gray-900">
              Total Reimbursement: 3897$
            </div>
          </div>
          
        </div>
        <AccodianData />
      </div>
    </div>
  );
}

export default PastPrescription

