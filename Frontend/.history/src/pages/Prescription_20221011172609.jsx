
import storeItems from "../data/item.json";
// import Buttonsm from '../components/Buttonsm'
// import Buttonrm from "../components/Buttonrm";

import Product from '../components/Product'
import Select from "../components/Select";
import CompanySelect from "../components/CompanySelect";

function Prescription() {
   
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex w-full ml-10 mt-8">
          <div className="flex flex-auto">Reimbursement</div>
          <div >
            <CompanySelect />
          </div>
        </div>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {storeItems.map((item) => (
              <div key={item.id}>
                <Product {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Prescription;


