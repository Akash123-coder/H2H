import React from 'react'

function List() {
  return (
    <div>
      <div className="p-5 w-full sticky overflow-x-auto text-center text-white bg-indigo-600 rounded-t-lg text-xl font-bold">
        <p>List of all the Doctors Using your Products</p>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Position
              </th>
              <th scope="col" className="py-3 px-6">
                Reimburcement
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="http://begmetobuyit.com/application/css/images/noImage.jpg"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Neil Sims</div>
                  <div className="font-normal text-gray-500">
                    neil.sims@gmail.com
                  </div>
                </div>
              </th>
              <td className="py-4 px-6">Doctor</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  4210
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="http://begmetobuyit.com/application/css/images/noImage.jpg"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Bonnie Green</div>
                  <div className="font-normal text-gray-500">
                    bonnie@gmail.com
                  </div>
                </div>
              </th>
              <td className="py-4 px-6">Doctor</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  4210
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="http://begmetobuyit.com/application/css/images/noImage.jpg"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Jese Leos</div>
                  <div className="font-normal text-gray-500">
                    jese@Doctor.com
                  </div>
                </div>
              </th>
              <td className="py-4 px-6">Doctor</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  4210
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="http://begmetobuyit.com/application/css/images/noImage.jpg"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Thomas Lean</div>
                  <div className="font-normal text-gray-500">
                    thomes@Doctor.com
                  </div>
                </div>
              </th>
              <td className="py-4 px-6">Doctor</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  4210
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="http://begmetobuyit.com/application/css/images/noImage.jpg"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    Leslie Livingston
                  </div>
                  <div className="font-normal text-gray-500">
                    leslie@Doctor.com
                  </div>
                </div>
              </th>
              <td className="py-4 px-6">Specialist</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                  5000
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List



