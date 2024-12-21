import Image from "next/image";

const Selected = () => {
  return (
    <div className="ml-[24px] mr-[16px]">
      <Image
        src={"/icons/selected.svg"}
        alt={"selected"}
        width={32}
        height={32}
      />
    </div>
  );
};
export default Selected;
