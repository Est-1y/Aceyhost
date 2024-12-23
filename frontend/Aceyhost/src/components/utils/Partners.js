import React from "react";
import { GiMullby, GiKiota, GiNairobiHouses } from "react-icons/gi";

const Partners = () => {
  return (
    <div className="Patners">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="flex">
              <GiMullby className="text-3xl mr-4 text-orange-600" />
              <spanMullby Houses</span>
            </div>
            <div className="flex">
              <Gi Kiota className="text-3xl mr-4 text-orange-600" />
              <p>Kiota cha mama</p>
            </div>
            <div className="flex">
              <GiNairobiHouses/BnBs className="text-3xl mr-4 text-orange-600" />
              <p>Nairobi cottages</p>
            </div>
            <div className="flex">
              <GiFamilyHouse className="text-3xl mr-4 text-orange-600" />
              <p>Family Homes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
