import Image from "next/image";

const ShopBasket = () => {
  return (
    <div>
      <Image
        src={"/icons/shop-basket.svg"}
        alt={"shop-basket"}
        width={32}
        height={32}
      />
    </div>
  );
};

export default ShopBasket;
