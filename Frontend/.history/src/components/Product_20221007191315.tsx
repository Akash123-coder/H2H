import storeItems from "../data/item.json";
import Buttonsm from '../components/Buttonsm'
import Buttonrm from "../components/Buttonrm";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";





type StoreItemProps = {
  id: number;
  name: string;
  comission: number;
  imgurl: string;
};
  



export default function Product({ id, name, comission, imgurl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div>
      <div className="group ">
        <div className="flex mt-2 ">
          <h3 className="flex-1 font-medium text-lg capitalize text-gray-700">
            {name}
          </h3>
        </div>
        <NavLink to="/ProductPage">
          <div className="w-full aspect-w-1 h-56 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={imgurl}
              className="w-full h-full object-center  object-cover group-hover:opacity-75"
            />
          </div>
        </NavLink>

        <div className="flex">
          <p className="flex-1 text-lg font-medium  text-gray-800">
            Bill Reimbursement:
          </p>
          <p className="flex flex-end text-lg font-medium  text-gray-800">
            {comission} ₹
          </p>
        </div>

        <div className="mt-2 w-full">
          {quantity === 0 ? (
            <button
              type="button"
              className="text-gray-200 bg-gradient-to-r from-indigo-500 w-full via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
              onClick={() => increaseItemQuantity(id)}
            >
              <span className="text-xl inline-block">+</span> ADD TO
              PRESCRIPTION
            </button>
          ) : (
            <div className="flex w-full ">
              <div className="flex w-full">
                {/* <Buttonsm name='+'  /> */}
                <button
                  type="button"
                  className="text-gray-200 bg-gradient-to-r h-10 from-green-500 w-full via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 tracking-wide  "
                  onClick={() => increaseItemQuantity(id)}
                >
                  Add
                </button>
                <div className="flex justify-center self-center px-4 mb-2 text-gray-800 font-bold text-lg ">
                  {quantity}
                </div>
                {/* <Buttonsm name='-'/> */}
                <button
                  type="button"
                  className="text-gray-200 bg-gradient-to-r h-10 from-red-500 w-full via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
                  onClick={() => decreaseItemQuantity(id)}
                >
                  Remove
                </button>
              </div>
              {/* <div className="flex-end">
                <button
                  type="button"
                  className="text-gray-200 bg-gradient-to-r h-10 from-green-400 w-fit to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
                  onClick={() => removeFromCart(id)}
                >
                  UPLOAD
                </button>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
