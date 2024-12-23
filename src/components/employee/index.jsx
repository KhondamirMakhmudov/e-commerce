import Image from "next/image";

const EmployeeCard = ({ id, name, desc, width, height }) => {
  return (
    <div className={"col-span-4 max-h-[430px]"}>
      <div
        className={
          " bg-[#F5F5F5] w-full h-[430px] relative flex items-center justify-center "
        }
      >
        <Image
          src={`/images/employee${id}.png`}
          alt={"employee"}
          width={width}
          height={height}
          className={"absolute bottom-0"}
        />
      </div>
      <div className={"mt-[32px]"}>
        <h3 className={"text-[32px] font-medium"}>{name}</h3>
        <p className={"mt-[8px]"}>{desc}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
