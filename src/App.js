import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";

// import ReusableNav from "./components/nav";
import MyCarousel from "./components/carousel";

const services = [
  {
    image: "/assets/services/residual-current.jpg",
    title: "Residual current Device testing",
    desc: "Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD. Earth leakage increases with each additional electrical appliance that is plugged in, and if RCD keeps tripping out it may be an overloaded circuit. Any faults we recommend that you have your wiring and appliances checked by an electrician to ascertain the fault if a RCD keeps tripping. The majority of electrical fatalities could have been prevented by the use of a properly installed RCD, and regular testing to ensure they are working correctly",
  },
  {
    image: "/assets/services/megger.jpg",
    title: "Megger Test",
    desc: "The Megger test is a method of testing making use of an insulation tester resistance meter that will help to verify the condition of electrical insulation.",
  },
  {
    image: "/assets/services/partial-discharge.jpg",
    title: "PD diagnostic test.",
    desc: "Partial discharges (PD) are small electrical sparks that occur within the insulation of medium and high voltage electrical assets. Each discrete partial discharge is the result of an electrical breakdown of an air pocket within the insulation. These discharges erode insulation and eventually result in insulation failure.",
  },
  {
    image: "/assets/services/oil-BDV.jpg",
    title: "Oil BDV Test",
    desc: "Principle of the oil test. To determine the insulating property of the dielectric oil, an oil sample is taken from the device under test, and measure breakdown voltage, two standard-compliant test electrodes with a typical clearance of 2.5 mm are surrounded by the insulating oil.",
  },
];

function App() {
  return (
    <div className="container m-auto p-0">
      <Router>
        {/* NAVBAr props attributes links,title,logo ...  */}
        {/* <ReusableNav links={["Home", "Contact"]} title="Open src" /> */}

        {/* carousel props imagesList, links */}
        <div className="container text-cMain">
          <MyCarousel items={services} />
        </div>
      </Router>
    </div>
  );
}

export default App;
