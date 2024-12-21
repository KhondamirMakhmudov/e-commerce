import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <main className="border-t">
        <div className="container grid grid-cols-12">
          <div className="col-span-3 border-r pt-[40px] pr-[16px]">
            <ul className="space-y-[16px]">
              <li>Woman’s Fashion</li>
              <li>Men’s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className="col-span-9 pt-[40px] pl-[45px]">
            <div className="bg-black text-white">
              <div className="pl-[67px] relative pt-[58px] pb-[47px]">
                <div className="flex gap-x-[24px] items-center ">
                  <Image
                    src={"/images/apple-logo.png"}
                    alt={"apple-logo"}
                    width={40}
                    height={49}
                  />
                  <p>iPhone 14 Series</p>
                </div>

                <h1 className="text-[48px] font-semibold mt-[20px] mb-[22px]">
                  Up to 10% <br /> off Voucher
                </h1>

                <button className="flex gap-x-[8px] items-center">
                  <p className="font-medium">Shop Now</p>
                  <Image
                    src={"/icons/arrow-right.svg"}
                    alt={"arrow-right"}
                    width={24}
                    height={24}
                  />
                </button>

                <Image
                  src={"/images/apple-bg.png"}
                  alt={"apple-bg"}
                  width={496}
                  height={352}
                  className="absolute right-0 bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
