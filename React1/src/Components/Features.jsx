import React from "react";
import Banner from "./Banner";

const Features = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-center">Key Platform Features</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sint.
        </p>
        <p className="text-center">Lorem ipsum dolor sit amet.</p>

        <div className="flex flex-row text-center justify-center gap-10 p-2">
          <div className="bg-amber-50 h-60 w-80 rounded-2xl flex flex-col items-center justify-between p-6">
            <img src="lightning.png" alt="" className="h-10" />
            <div>
              <h3>Super Fast Build</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente, sit.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 h-60 w-80 rounded-2xl flex flex-col items-center justify-between p-6">
            <img src="Security.png" alt="" className="h-10" />
            <div>
              <h3>Secure Routing</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                ducimus!
              </p>
            </div>
          </div>

          <div className="bg-amber-50 h-60 w-80 rounded-2xl flex flex-col items-center justify-between p-6">
            <img src="Color.png" alt="" className="h-10" />
            <div>
              <h3>Modern Interface</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, ullam!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Features;
