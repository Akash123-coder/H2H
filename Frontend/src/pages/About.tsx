import img1 from '../../public/Product_Wound-Gel_840x600.png'
import img2 from '../../public/Product_Hydrocolloid-Dressing_840x600(1).png'
import img3 from '../../public/03_product_stick_g2_750x700.jpg'
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import {NavLink} from 'react-router-dom'


function About() {
  return (
    <div>
        
        <div className="bg-indigo-100 dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-10 lg:px-8 z-20">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white sm:text-4xl">
                    <span className="block">
                    Full Spectrum of Solutions
                    </span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                From advanced medical devices, hemorrhage management and wound care, to innovations in negative pressure wound therapy, Raymedis is the go-to solutions provider for medical suppliers and practitioners addressing the challenges of people’s healthcare. We combine good design, impeccable materials.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <NavLink type="button" to='/prescription'   className="py-2 px-4  bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            See Products
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <img src={img1} className="rounded-lg w-1/2" alt="Tree"/>
                <div>
                    <img src={img2} className="rounded-lg mb-8" alt="Tree"/>
                    <img src={img3} className="rounded-lg" alt="Tree"/>
                </div>
            </div>
        </div>
        {/* --------------------------------------------------------------------- */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">PRODUCTS</h2>

                <p className="max-w-screen-sm hidden md:block text-gray-500">Heal2Health supplies various wound dressings that provide balanced moisture environment on wound bed.</p>
            </div>

            <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-500 focus-visible:ring ring-indigo-300 border text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">More</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">

            <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src={p1} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">HEMOSTASIS</span>
            </a>

            <a href="#" className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src={p2} loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Wound Management</span>
            </a>

            <a href="#" className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src={p3} loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Scar Care</span>
            </a>


            
            <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src={p4} loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">NPWT</span>
            </a>

            </div>
        </div>
        </div>
    </div>
  )
}

export default About