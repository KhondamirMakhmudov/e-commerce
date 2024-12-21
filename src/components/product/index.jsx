import Image from "next/image";
const Product = ({ image, name, price, rank, onSale = false }) => {
  return (
    <div>
      <div
        className={"w-[270px] h-[250px] bg-[#F5F5F5] relative rounded-[4px]"}
      >
        <Image
          src={`/images/${image}`}
          alt={"product1"}
          width={190}
          height={190}
          className={"absolute inset-0 m-auto"}
        />
      </div>

      <div className={"mt-[16px] space-y-[8px]"}>
        <h2 className={"font-medium"}>{name}</h2>

        <p className={"text-[#DB4444] font-medium"}>{price}</p>
      </div>
    </div>
  );
};

export default Product;
