import Main from "@/layouts/main";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

const About = () => {
  return (
    <Main>
      <main className={"container"}>
        <div
          className={
            "flex items-center gap-x-[12px] text-sm mt-[80px] mb-[42px]"
          }
        >
          <Link href="/" className={"text-[#808080]"}>
            Home
          </Link>
          <p>/</p>
          <Link href="/about">About</Link>
        </div>

        <section>
          <div className={"grid grid-cols-12 gap-x-[75px] "}>
            <div
              className={
                "col-span-6 space-y-[40px] items-start flex justify-center flex-col"
              }
            >
              <h1 className={"text-[54px] font-semibold"}>Our Story</h1>
              <div className={"space-y-[24px]"}>
                <p className={""}>
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
            </div>
            <div className={"col-span-6"}>
              <Image
                src={"/images/about-bg.png"}
                alt={"about-bg"}
                width={705}
                height={609}
              />
            </div>
          </div>
        </section>

        <section className={"my-[140px]"}>
          <div className={"grid grid-cols-12 gap-x-[30px]"}>
            <div
              className={
                "col-span-3 group hover:bg-[#DB4444] hover:border-0 hover:shadow-md hover:text-white cursor-pointer border border-[#B3B3B3] rounded-[4px] flex items-center justify-center flex-col py-[30px] transition-all duration-300"
              }
            >
              <div
                className={
                  "bg-[#C1C1C1] group-hover:bg-[#E67C7C] inline-block p-[12px] rounded-full transition-all duration-300"
                }
              >
                <div
                  className={
                    "bg-black group-hover:bg-white  p-[11px] rounded-full transition-all duration-300"
                  }
                >
                  <Image
                    src={"/icons/shop.svg"}
                    alt={"shop"}
                    width={40}
                    height={40}
                    className={"bg-black "}
                  />
                </div>
              </div>

              <div className={"mt-[24px] space-y-[12px]"}>
                <p className={"text-[32px] font-bold text-center"}>
                  <CountUp end={10.5} duration={2} decimals={1} />k
                </p>

                <p>Sallers active our site</p>
              </div>
            </div>

            <div
              className={
                "col-span-3 group hover:bg-[#DB4444] hover:border-0 hover:shadow-md hover:text-white cursor-pointer border border-[#B3B3B3] rounded-[4px] flex items-center justify-center flex-col py-[30px] transition-all duration-300"
              }
            >
              <div
                className={
                  "bg-[#C1C1C1] group-hover:bg-[#E67C7C] inline-block p-[12px] rounded-full transition-all duration-300"
                }
              >
                <div
                  className={
                    "bg-black group-hover:bg-white  p-[11px] rounded-full transition-all duration-300"
                  }
                >
                  <Image
                    src={"/icons/sale-icon.svg"}
                    alt={"sale"}
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              <div className={"mt-[24px] space-y-[12px]"}>
                <p className={"text-[32px] font-bold text-center"}>
                  <CountUp end={33} duration={2} decimals={0} />k
                </p>

                <p>Mopnthly Produduct Sale</p>
              </div>
            </div>

            <div
              className={
                "col-span-3 group hover:bg-[#DB4444] hover:border-0 hover:shadow-md hover:text-white cursor-pointer  border border-[#B3B3B3] rounded-[4px] flex items-center justify-center flex-col py-[30px] transition-all duration-300"
              }
            >
              <div
                className={
                  "bg-[#C1C1C1] group-hover:bg-[#E67C7C] inline-block p-[12px] rounded-full transition-all duration-300"
                }
              >
                <div
                  className={
                    "bg-black group-hover:bg-white  p-[11px] rounded-full transition-all duration-300"
                  }
                >
                  <Image
                    src={"/icons/shopping-bag.svg"}
                    alt={"shopping-bag"}
                    width={40}
                    height={40}
                    className={"bg-black "}
                  />
                </div>
              </div>

              <div className={"mt-[24px] space-y-[12px]"}>
                <p className={"text-[32px] font-bold text-center"}>
                  <CountUp end={45.5} duration={2} decimals={1} />k
                </p>

                <p>Customer active in our site</p>
              </div>
            </div>

            <div
              className={
                "col-span-3 group hover:bg-[#DB4444] hover:border-0 hover:shadow-md hover:text-white cursor-pointer border border-[#B3B3B3] rounded-[4px] flex items-center justify-center flex-col py-[30px] transition-all duration-300"
              }
            >
              <div
                className={
                  "bg-[#C1C1C1] group-hover:bg-[#E67C7C] inline-block p-[12px] rounded-full transition-all duration-300"
                }
              >
                <div
                  className={
                    "bg-black group-hover:bg-white  p-[11px] rounded-full transition-all duration-300"
                  }
                >
                  <Image
                    src={"/icons/money-bag.svg"}
                    alt={"money-bag"}
                    width={40}
                    height={40}
                    className={"bg-black "}
                  />
                </div>
              </div>

              <div className={"mt-[24px] space-y-[12px]"}>
                <p className={"text-[32px] font-bold text-center"}>
                  <CountUp end={25} duration={2} decimals={0} />k
                </p>

                <p>Anual gross sale in our site</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Main>
  );
};

export default About;
