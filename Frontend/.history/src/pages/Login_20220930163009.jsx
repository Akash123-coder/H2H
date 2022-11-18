import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";



function Login() {
  return (
    <div class="h-full md:h-screen md:flex py-10 ">
      <div class="grid grid-flow-col md:flex md:w-1/2 justify-center py-10 items-center bg-white">
        <div>
          <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="#"
                class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img class=" h-auto w-56 mr-2" src={logo} alt="logo" />
              </a>
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="remember"
                            class="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <NavLink
                        to="/signUp"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="relative flex w-full h-full overflow-hidden md:flex md:w-1/2  bg-gradient-to-tr rounded-l-lg from-blue-800 to-purple-700 i justify-around items-center ">
        <div>
          <h1 class="text-white font-bold text-4xl font-sans my-10">Sign Up</h1>
          <p class="text-white mt-1">Lets get started with Heal2Health</p>
          <div class="grid grid-flow-row md:grid-cols-3 gap-8 text-white mt-10 ">
            <div class="relative">
              <input
                class="hidden group peer"
                type="radio"
                name="shippingOption"
                value="standard_alt"
                id="standard_alt"
              />

              <label
                class="block p-2 text-sm font-medium transition-colors border border-gray-100  hover:text-gray-800 rounded-lg shadow-sm cursor-pointer peer-checked:border-indigo-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-indigo-500"
                for="standard_alt"
              >
                <span> Doctor </span>

                <span class="block mt-1 text-xs text-gray-300"> Free </span>
              </label>

              <svg
                class="absolute w-5 h-5 text-indigo-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div class="relative">
              <input
                class="hidden group peer"
                type="radio"
                name="shippingOption"
                value="next_day_alt"
                id="next_day_alt"
              />

              <label
                class="block p-2 text-sm font-medium transition-colors border  hover:text-gray-800 border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-indigo-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-indigo-500"
                for="next_day_alt"
              >
                <span> Nurse/Admin </span>

                <span class="block mt-1 text-xs text-gray-300"> Standard </span>
              </label>

              <svg
                class="absolute w-5 h-5 text-indigo-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="relative">
              <input
                class="hidden group peer"
                type="radio"
                name="shippingOption"
                value="day_alt"
                id="day_alt"
              />

              <label
                class="block p-2 text-sm font-medium transition-colors border  hover:text-gray-800 border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-indigo-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-indigo-500"
                for="day_alt"
              >
                <span> Dealer </span>

                <span class="block mt-1 text-xs text-gray-300"> Normal </span>
              </label>

              <svg
                class="absolute w-5 h-5 text-indigo-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="absolute hidden   -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute hidden  -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute hidden  -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute hidden  -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
    </div>
  );
}

export default Login;
  

{/* <form class="bg-white">
  <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
  <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
  <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clip-rule="evenodd"
      />
    </svg>
    <input
      class="pl-2 outline-none border-none"
      type="text"
      name=""
      id=""
      placeholder="Full name"
    />
  </div>
  <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
      />
    </svg>
    <input
      class="pl-2 outline-none border-none"
      type="text"
      name=""
      id=""
      placeholder="Username"
    />
  </div>
  <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
    <input
      class="pl-2 outline-none border-none"
      type="text"
      name=""
      id=""
      placeholder="Email Address"
    />
  </div>
  <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
        clip-rule="evenodd"
      />
    </svg>
    <input
      class="pl-2 outline-none border-none"
      type="text"
      name=""
      id=""
      placeholder="Password"
    />
  </div>
  <button
    type="submit"
    class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
  >
    Login
  </button>
  <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
    Forgot Password ?
  </span>
</form>; */}