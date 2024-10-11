"use client";
interface ButtonProps {
  title: string;
  buttonWidth: string;
  handleSubmit: () => void;
}
export const InputButton = ({
  title,
  buttonWidth,
  handleSubmit,
}: ButtonProps) => {
  const classNameForPrimaryButton =
    "bg-[#16c1fb] text-white hover:bg-[#04ade7]";
  return (
    <div className="trauma-button flex justify-center">
      <button
        className={`uppercase py-3 px-12 rounded-[10px] leading-6 tracking-widest text-center text-xl  ${buttonWidth} 
          ${classNameForPrimaryButton}`}
        onClick={handleSubmit}
      >
        {title}
      </button>
    </div>
  );
};
