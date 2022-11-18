import React from 'react'

function CompanyNameSelect() {
  return (
    <div className="px-50 flex justify-center">
      <div class=" max-w-lg">
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="shippingOption"
            value="1"
            id="1"
          />

          <label
            class="flex items-center justify-between p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
            for="1"
          >
            <span> Company 1 </span>

            <span> Free </span>
          </label>
        </div>
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="shippingOption"
            value="2"
            id="2"
          />

          <label
            class="flex items-center justify-between p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
            for="2"
          >
            <span> Company 2 </span>

            <span> $5.99 </span>
          </label>
        </div>
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="shippingOption"
            value="3"
            id="3"
          />

          <label
            class="flex items-center justify-between p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
            for="3"
          >
            <span> Company 3 </span>

            <span> $5.99 </span>
          </label>
        </div>
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="shippingOption"
            value="4"
            id="4"
          />

          <label
            class="flex items-center justify-between p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
            for="4"
          >
            <span> Company 4 </span>

            <span> $5.99 </span>
          </label>
        </div>
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="shippingOption"
            value="5"
            id="5"
          />

          <label
            class="flex items-center justify-between p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
            for="5"
          >
            <span> Company 5 </span>

            <span> $5.99 </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CompanyNameSelect