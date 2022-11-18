import React from 'react'
import p2 from '../assets/p2.jpg'
function Cta() {
  return (
    <div>
      <aside>
        <div class="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6  lg:px-8">
          <div class="grid grid-cols-1  gap-4 md:grid-cols-2">
            <div class="p-8 bg-indigo-600 md:p-12 rounded-lg lg:px-16 lg:py-24">
              <div class="max-w-xl mx-auto text-center">
                <h2 class="text-2xl font-bold text-white md:text-3xl">
                  Full Spectrum of Solutions
                </h2>

                <p class="hidden sm:block sm:mt-4 text-white/90">
                  From advanced medical devices, hemorrhage management and wound
                  care, to innovations in negative pressure wound therapy,
                  Raymedis is the go-to solutions provider for medical suppliers
                  and practitioners addressing the challenges of people’s
                  healthcare. We combine good design, impeccable materials.
                </p>

                <div class="mt-4 md:mt-8">
                  <a
                    href="#"
                    class="inline-block px-12 py-3 tracking-normal text-md  open-sans font-medium text-indigo-500 bg-white border border-white rounded transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="#"
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="object-cover w-full h-40 sm:h-56 md:h-full"
              />

              <img
                alt="#"
                src={p2}
                class="object-cover w-full h-40 sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Cta