import Image from "next/image";
import { useState } from "react";

const Lang = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("Uzbek");

  const toggleButton = () => {
    setOpen(!open);
  };

  const handleSelect = (tab) => {
    setTab(tab);
    setOpen(!open);
  };
  return (
    <div className="">
      <button
        onClick={toggleButton}
        className={"flex gap-x-[5px] items-center"}
      >
        <h4>{tab}</h4>
        <Image
          src={"/icons/dropdown.svg"}
          alt={"down"}
          width={24}
          height={24}
          className={`${
            !open ? "rotate-0" : "rotate-180"
          } transition-all duration-300`}
        />
      </button>

      {open && (
        <div className="absolute w-full max-w-[90px]  bg-white z-30 rounded-[8px] p-[12px] font-gilroy">
          <ul className="space-y-[4px]">
            <li>
              <button
                className={`p-[8px] w-full text-start rounded-[4px] ${
                  tab === "Uzbek"
                    ? " bg-[#EBF1F9] text-[#0256BA]"
                    : "bg-[#F7F7F7] text-[#21201F]"
                }`}
                onClick={() => handleSelect("Uzbek")}
              >
                Uzbek
              </button>
            </li>

            <li>
              <button
                className={`p-[8px] w-full text-start rounded-[4px] ${
                  tab === "Rus"
                    ? " bg-[#EBF1F9] text-[#0256BA]"
                    : "bg-[#F7F7F7] text-[#21201F]"
                }`}
                onClick={() => handleSelect("Rus")}
              >
                Rus
              </button>
            </li>

            <li>
              <button
                className={`p-[8px] w-full text-start rounded-[4px] ${
                  tab === "English"
                    ? " bg-[#EBF1F9] text-[#0256BA]"
                    : "bg-[#F7F7F7] text-[#21201F]"
                }`}
                onClick={() => handleSelect("English")}
              >
                English
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Lang;
