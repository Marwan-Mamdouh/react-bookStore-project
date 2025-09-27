import { memo, useState } from "react";
import type ourState from "../interfaces/interfaces";

const Footer = () => {
  const [userData] = useState<ourState>({
    firstName: "Marwan",
    lastName: "AbdalMagied",
    age: 23,
    address: "Cairo",
  });

  return (
    <footer className="d-flex justify-content-center p-5">
      firstName: {userData.firstName}, lastName: {userData.lastName}, age:
      {userData.age}, address: {userData.address}
    </footer>
  );
};

export default memo(Footer);
