import Header from "@/components/header";
import Product from "@/components/product";
import Title from "@/components/title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { onSaleData } from "@/components/dummy-datas/onSale";
import CategoryCard from "@/components/category";
import { categoryData } from "@/components/dummy-datas/category";
import { bestSale } from "@/components/dummy-datas/bestSellingProducts";
import Footer from "@/components/footer";

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

        <section className={"container grid grid-cols-12 mt-[140px]"}>
          <div className={"col-span-12 mb-[40px]"}>
            <Title subtitle={"Today’s"} title={"Flash Sales"} />
          </div>

          <div className={"col-span-12"}>
            <Swiper slidesPerView={4} spaceBetween={30}>
              {onSaleData.map((product) => (
                <SwiperSlide key={product.id}>
                  <Product
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center ">
              <button
                className={
                  "py-[16px] px-[48px] rounded-[4px] text-white bg-[#DB4444] mt-[60px]"
                }
              >
                View All Products
              </button>
            </div>
          </div>

          <div
            className={
              "col-span-12 bg-[#B3B3B3] w-full h-[1px] mt-[60px] mb-[80px]"
            }
          >
            {" "}
          </div>
        </section>

        <section className={"container grid grid-cols-12"}>
          <div className={"col-span-12 mb-[40px]"}>
            <Title subtitle={"Categories"} title={"Browse By Category"} />

            <div></div>
          </div>

          <div className={"col-span-12"}>
            <Swiper slidesPerView={6}>
              {categoryData.map((category) => (
                <SwiperSlide key={category.id}>
                  <CategoryCard image={category.image} name={category.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div
            className={"col-span-12 bg-[#B3B3B3] w-full h-[1px] my-[70px]"}
          ></div>
        </section>

        <section>
          <div className="container grid grid-cols-12">
            <div className="col-span-12 mb-[40px] flex justify-between items-end">
              <Title subtitle={"This Month"} title={"Best Selling Products"} />

              <div>
                <button
                  className={
                    "py-[16px] px-[48px] rounded-[4px] text-white bg-[#DB4444] mt-[60px]"
                  }
                >
                  View All
                </button>
              </div>
            </div>

            <div className="col-span-12">
              <Swiper slidesPerView={4} spaceBetween={30}>
                {bestSale.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Product
                      image={product.image}
                      name={product.name}
                      price={product.price}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <section className="container grid grid-cols-12 bg-black mt-[140px] mb-[71px]">
          <div className={"col-span-12 py-[69px] pl-[56px] flex gap-x-[27px]"}>
            <div>
              <p className={"text-[#00FF66] font-semibold"}>Categories</p>
              <h1 className={"text-[48px] font-semibold text-white my-[32px]"}>
                Enhance Your <br /> Music Experience
              </h1>

              <ul className={" space-x-[24px]"}>
                <li
                  className={
                    "py-[14px] px-[15px] bg-white inline-block rounded-full text-center text-[11px]"
                  }
                >
                  <p className={"text-base"}>35</p>
                  <p>Hours</p>
                </li>
                <li
                  className={
                    "py-[14px] px-[17px] bg-white inline-block rounded-full text-center text-[11px]"
                  }
                >
                  <p className={"text-base"}>5</p>
                  <p>Days</p>
                </li>
                <li
                  className={
                    "py-[14px] px-[10px] bg-white inline-block rounded-full text-center text-[11px]"
                  }
                >
                  <p className={"text-base"}>35</p>
                  <p>Minutes</p>
                </li>
                <li
                  className={
                    "py-[14px] px-[7px] bg-white inline-block rounded-full text-center text-[11px]"
                  }
                >
                  <p className={"text-base"}>35</p>
                  <p>Seconds</p>
                </li>
              </ul>

              <button
                className={
                  "py-[16px] px-[48px] rounded-[4px] text-white bg-[#00FF66] mt-[60px]"
                }
              >
                Buy Now!
              </button>
            </div>
            <div className={"w-[600px] h-[420px]"}>
              <Image
                src={"/images/music.png"}
                alt={"music"}
                width={600}
                height={420}
              />
            </div>
          </div>
        </section>

        <section className="container grid grid-cols-12">
          <div className="col-span-12 mb-[40px] flex justify-between items-end">
            <Title subtitle={"This Month"} title={"Best Selling Products"} />

            {/* <div>
              <button
                className={
                  "py-[16px] px-[48px] rounded-[4px] text-white bg-[#DB4444] mt-[60px]"
                }
              >
                View All
              </button>
            </div> */}
          </div>

          <div className="col-span-12">
            <Swiper slidesPerView={4} spaceBetween={30}>
              {bestSale.map((product) => (
                <SwiperSlide key={product.id}>
                  <Product
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center ">
              <button
                className={
                  "py-[16px] px-[48px] rounded-[4px] text-white bg-[#DB4444] mt-[60px]"
                }
              >
                View All Products
              </button>
            </div>
          </div>
        </section>

        <section className="container grid grid-cols-12 gap-x-[30px] mt-[140px]">
          <div className="col-span-12 gap-x-[30px] mb-[40px]">
            <Title subtitle={"Featured"} title={"New Arrival"} />
          </div>

          <div
            className={
              "col-span-6 bg-black relative w-[570px] h-[600px] z-10 rounded-[4px]"
            }
          >
            <Image
              src={"/images/playstation.png"}
              alt={"music"}
              width={511}
              height={511}
              className={"absolute bottom-0 left-[29px] right-[30px] -z-10"}
            />

            <div className={"space-y-[16px] z-40 p-[32px] bottom-0 absolute"}>
              <h1 className={"text-white text-[24px] font-semibold"}>
                PlayStation 5
              </h1>
              <p className={"text-white text-[14px]"}>
                Black and White version of the PS5 <br /> coming out on sale.
              </p>
              <button className={"text-white cursor-pointer"}>Shop Now</button>
            </div>
          </div>

          <div className={"col-span-6"}>
            <div
              className={
                "bg-[#0D0D0D] relative w-full h-[286px] -z-10 right-0 rounded-[4px]"
              }
            >
              <Image
                src={"/images/woman.png"}
                alt={"woman"}
                width={432}
                height={286}
                className={"absolute right-0  -z-10 "}
              />

              <div className={"space-y-[16px] z-40 p-[32px] bottom-0 absolute"}>
                <h1 className={"text-white text-[24px] font-semibold"}>
                  Women’s Collections
                </h1>
                <p className={"text-white text-[14px]"}>
                  Featured woman collections that <br /> give you another vibe.
                </p>
                <button className={"text-white cursor-pointer"}>
                  Shop Now
                </button>
              </div>
            </div>

            <div className="w-full flex mt-[31px] gap-x-[30px]">
              <div
                className={
                  "bg-[#0D0D0D] relative w-full h-[286px] -z-10 right-0 rounded-[4px]"
                }
              >
                <Image
                  src={"/images/speakers.png"}
                  alt={"speakers"}
                  width={210}
                  height={222}
                  className={
                    "absolute left-[31px] top-[30px] bottom-[30px] right-[31px] -z-10 "
                  }
                />

                <div
                  className={"space-y-[8px] z-40 p-[24px] bottom-0 absolute"}
                >
                  <h1 className={"text-white text-[24px] font-semibold"}>
                    Speakers
                  </h1>
                  <p className={"text-white text-[14px]"}>
                    Amazon wireless speakers
                  </p>
                  <button className={"text-white cursor-pointer"}>
                    Shop Now
                  </button>
                </div>
              </div>
              <div
                className={
                  "bg-[#0D0D0D] relative w-full h-[286px] -z-10  rounded-[4px]"
                }
              >
                <Image
                  src={"/images/gucci.png"}
                  alt={"gucci"}
                  width={210}
                  height={222}
                  className={
                    "absolute left-[30px] top-[30px] bottom-[32px] right-[30px]  -z-10 "
                  }
                />

                <div
                  className={"space-y-[8px] z-40 p-[24px] bottom-0 absolute"}
                >
                  <h1 className={"text-white text-[24px] font-semibold"}>
                    Perfume
                  </h1>
                  <p className={"text-white text-[14px]"}>
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className={"text-white cursor-pointer"}>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container grid grid-cols-12 mt-[140px]"></section>

        <Footer />
      </main>
    </>
  );
}
