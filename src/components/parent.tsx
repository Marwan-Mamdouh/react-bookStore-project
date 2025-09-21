import TextCard from "./card";
import LoginForm from "./form";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import type { IUserData } from "../components/interfaces";

const Parent = () => {
  const [userData, setUserData] = useState([]);

  const readInput = (userInput: IUserData) => {
    setUserData((state) => {
      return [...state, { ...userInput }];
    });
  };

  return (
    <div className="container d-flex flex-column  align-items-center">
      <LoginForm read={readInput}></LoginForm>
      <div className="d-flex d-flex flex-row flex-wrap">
        {userData.map((user) => (
          <TextCard key={uuid()} {...user}></TextCard>
        ))}
      </div>
    </div>
  );
};

export default Parent;
