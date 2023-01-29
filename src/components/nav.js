import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReusableNav = (props) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <nav className="relative container mx-auto p-4 text-center	">
      <div className="flex items-center justify-between">
        {/* Logo */}

        <div className="pt-2  flex flex-row">
          {props.logo ? <img src={props.logo} alt={props.title} /> : <></>}
          <Link
            to="/"
            hrefLang="#"
            className="text-3xl text-cTextDark no-underline hover:text-cMain"
          >
            {props.title}
          </Link>{" "}
        </div>

        {/* menu  */}

        <div className="hidden sm:flex flex-row space-x-6 ">
          {props.links.map((link) => {
            return (
              <Link
                key={link}
                to={`\${link}`}
                hrefLang="#"
                className="text-xl text-cTextDark no-underline hover:text-cMain"
              >
                {link}
              </Link>
            );
          })}
        </div>
        <div className="block sm:hidden text-2xl mx-3 ">
          <button onClick={toggleExpand}>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {expand ? (
        <div className="block sm:hidden flex-column">
          <ul>
            {props.links.map((link) => {
              return (
                <li className="m-3 border-b-2">
                  <Link
                    key={link}
                    to={link.toString()}
                    hrefLang="#"
                    className="text-xl text-cTextDark no-underline hover:text-cMain"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
export default ReusableNav;
