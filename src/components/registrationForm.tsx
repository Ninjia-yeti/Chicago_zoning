"use client";
import { InputRegistration } from "@/components/inputRegistration";
import { InputButton } from "./inputButton";
import { InputType } from "@/lib/utils";
import Silhoutte_Icon from "@/app/assets/images/icons/silhouette.svg";
import Envelope_Icon from "@/app/assets/images/icons/envelope.svg";
import Phone_Icon from "@/app/assets/images/icons/phone.svg";
import { useState } from "react";
export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [interest, setInterest] = useState("");
  const [isCorrectInputData, setIsCorrectInputData] = useState(
    Array(5).fill(true)
  );

  const handleSubmit = () => {
    console.log(name, email, phone, address, interest);
    setIsCorrectInputData(Array(5).fill(true));
  };
  return (
    <div className="chicago-registrationform">
      <div className="max-w-492 w-492 bg-green-700 max-w-[400px] p-6 mx-auto mt-6 rounded-2xl flex flex-col">
        <h3 className="text-center font-bold text-4xl text-valhalla leading-tight">
          Registration
        </h3>
        <br />
        <div>
          <div className="mt-6 mb-4">
            <InputRegistration
              imgSrc={Silhoutte_Icon}
              handleChange={(firstName) => setName(firstName)}
              type={InputType.text}
              placeHolder={"Enter first Name"}
              isCheckInputData={isCorrectInputData[0]}
            />
          </div>
          <div className="mb-4">
            <InputRegistration
              imgSrc={Envelope_Icon}
              handleChange={(email) => setEmail(email)}
              type={InputType.email}
              placeHolder={"Enter email address"}
              isCheckInputData={isCorrectInputData[1]}
            />
          </div>
          <div className="mb-4">
            <InputRegistration
              imgSrc={Phone_Icon}
              handleChange={(phone) => setPhone(phone)}
              type={InputType.phone}
              placeHolder={"Enter phone number"}
              isCheckInputData={isCorrectInputData[2]}
            />
          </div>
          <div className="mb-4">
            <InputRegistration
              imgSrc={Phone_Icon}
              handleChange={(address) => setAddress(address)}
              type={InputType.text}
              placeHolder={"Enter your address"}
              isCheckInputData={isCorrectInputData[3]}
            />
          </div>
          <div className="mb-4">
            <InputRegistration
              imgSrc={Phone_Icon}
              handleChange={(interest) => setInterest(interest)}
              type={InputType.text}
              placeHolder={"Enter your interest"}
              isCheckInputData={isCorrectInputData[4]}
            />
          </div>
          <div className="p-4">
            <InputButton
              title={"Register"}
              handleSubmit={handleSubmit}
              buttonWidth="w-full"
            ></InputButton>
          </div>
        </div>
      </div>
    </div>
  );
};
