import React from "react";
import { useState } from "react";
import { Link } from "react";

const Header = () => {
  let [open, setOpen] = useState(false);

  return (
    <div>
      {/* Company Logo */}
      <div>
        <img
          src="/my-project/src/assets/CLT-Logo.png"
          alt="CLT Logo"
          className="w-16 pl-2 lg:w-18"
        />
      </div>
    </div>
  );
};

export default Header;
