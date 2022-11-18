import {NavLink} from 'react-router-dom'
import p4 from '../../public/p4.jpg'
// import Cta from '../components/Cta'

function Home() {
  return (
    <div>
        <div className="bg-white pb-6">
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <header className="flex justify-between items-center  mb-4">
      </header>
      <section className="min-h-80 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-10 md:py-10 xl:py-20">

        <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" className="w-full h-full object-cover object-center absolute inset-0" />
        <div className="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>

        <div className="sm:max-w-xl flex flex-col items-center relative p-4">
          <p className="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">Very proud to introduce</p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Revolutionary way to Care wounds</h1>
  
          <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
            <NavLink to='/login' className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Sign-up / login</NavLink>
  
            <NavLink  to='/prescription' className="inline-block bg-white hover:bg-indigo-100 focus-visible:ring ring-indigo-300 text-indigo-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Products</NavLink>
          </div>
        </div>
  
      </section>
    </div>
  </div>
      <section>
        <div className="bg-white">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">Products</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">

              <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src='https://www.anscare.com/uploads/images/Home/01-homepage-Education-520x660-01.jpg' loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Wound management</span>
              </a>
        
              <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://www.anscare.com/uploads/images/Home/01-homepage-Education-520x660-03.jpg" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">NPWT</span>
              </a>



              <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src={p4} loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Scarcare</span>
              </a>



              <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Retro</span>
              </a>

            </div>
          </div>
        </div>
      </section>
      <Cta/>
  </div>
  )
}

export default Home