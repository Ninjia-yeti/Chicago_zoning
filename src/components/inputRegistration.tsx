import Image from "next/image";
import { ReactElement, useState } from "react";

interface InputProps {
  imgSrc: string;
  type: string;
  handleChange: (content: string) => void;
  children?: ReactElement | ReactElement[];
  placeHolder: string;
  isCheckInputData?: boolean;
}

export const InputRegistration = ({
  imgSrc,
  handleChange,
  type,
  placeHolder,
  children,
  isCheckInputData,
}: InputProps) => {
  const [userEmail, setUserEmail] = useState("");
  const borderColor = isCheckInputData
    ? "border-[#e4e4e4] focus:border-[#545dff]"
    : "border-[#ff2020] focus:border-[#ff2020]";
  return (
    <div>
      <div className="relative flex items-center">
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="envelope"
          className="absolute top-0 left-4 bottom-0 my-auto z-10 opacity-55"
        />
        <input
          type={type}
          placeholder={placeHolder}
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
            handleChange(e.target.value);
          }}
          className={`w-full py-3 pr-4 pl-[52px] border-[0.5px]  rounded-md bg-[#fafafa]
        focus:border-[1.5px] focus:outline-none ${borderColor}`}
        />
        {children}
      </div>
      {!isCheckInputData && (
        <div className=" mb-4 text-xs text-[#ff2020]">
          This field is required
        </div>
      )}
    </div>
  );
};
