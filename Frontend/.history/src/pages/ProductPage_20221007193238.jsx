import React from "react";
import ProductFeatures from "../components/ProductFeatures";

function ProductPage() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="grid lg:grid-cols-5 gap-4">
              <div class="flex lg:flex-col order-last lg:order-none gap-4">
                <div class="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://www.anscare.com/uploads/images/products/Hemostasis/Product_Gauze_840x600(1).png"
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    class="w-full h-full object-cover object-center"
                  />
                </div>

                <div class="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://www.anscare.com/uploads/images/products/Hemostasis/Product_Gauze_840x600(1).png"
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    class="w-full h-full object-cover object-center"
                  />
                </div>

                <div class="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://www.anscare.com/uploads/images/products/Hemostasis/Product_Gauze_840x600(1).png"
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div class="lg:col-span-4 bg-gray-100 rounded-lg overflow-hidden relative">
                <img
                  src="https://www.anscare.com/uploads/images/products/Hemostasis/03-Product_Gauze_750x700(1).jpg"
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  class="w-full h-full object-cover object-center"
                />

                <span class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                  sale
                </span>

                <a
                  href="#"
                  class="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 border text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 absolute right-4 top-4 px-3.5 py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="md:py-8">
              <div class="mb-2 md:mb-3">
                <span class="inline-block text-gray-500 mb-0.5">
                  Anscare
                </span>
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
                  ChitoClot Gauze
                </h2>
              </div>

              <div class="flex items-center gap-3 mb-6 md:mb-10">
                <div class="h-7 flex items-center bg-indigo-500 text-white rounded-full gap-1 px-2">
                  <span class="text-sm">4.2</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <span class="text-gray-500 text-sm transition duration-100">
                  56 ratings
                </span>
              </div>

              <div class="mb-4 md:mb-6">
                <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">
                  Ply
                </span>

                <div class="flex flex-wrap gap-2">
                  <button
                    type="button"
                    class="w-8 h-8 bg-white border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    class="w-8 h-8 bg-white border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                  >
                    8
                  </button>
                </div>
              </div>
              {/* <!-- color - end -->

        <!-- size - start --> */}
              <div class="mb-8 md:mb-10">
                <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">
                  Size
                </span>

                <div class="flex flex-wrap gap-3">
                  <button
                    type="button"
                    class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                  >
                    5x40
                  </button>
                  <button
                    type="button"
                    class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                  >
                    10x80
                  </button>
                  <span class="w-12 h-8 flex justify-center items-center bg-indigo-500 text-white text-sm font-semibold text-center border border-indigo-500 rounded-md cursor-default">
                    10x40
                  </span>
                  <button
                    type="button"
                    class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                  >
                    10x10
                  </button>
                  <span class="w-12 h-8 flex justify-center items-center bg-white text-gray-400 text-sm font-semibold text-center border border-transparent rounded-md cursor-not-allowed">
                    20X20
                  </span>
                </div>
              </div>
              {/* <!-- size - end -->

        <!-- price - start --> */}
              <div class="mb-4">
                <div class="flex items-end gap-2">
                  <span class="text-gray-800 text-xl md:text-2xl font-bold">
                    ₹ 300
                  </span>
                  <span class="text-red-500 line-through mb-0.5">₹3000</span>
                </div>

                <span class="text-gray-500 text-sm">
                  incl. GST plus shipping
                </span>
              </div>
              {/* <!-- price - end -->

        <!-- shipping notice - start --> */}
              <div class="flex items-center text-gray-500 gap-2 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>

                <span class="text-sm">2-4 day shipping</span>
              </div>
              {/* <!-- shipping notice - end -->

        <!-- buttons - start --> */}
              <div class="flex gap-2.5">
                <a
                  href="#"
                  class="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Add to cart
                </a>

                <a
                  href="#"
                  class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <ProductFeatures />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
