import Main from "@/layouts/main";
import Image from "next/image";
import Link from "next/link";

const Contacts = () => {
  return (
    <Main>
      <main className={"container"}>
        <div className={"flex items-center gap-x-[12px] text-sm py-[80px]"}>
          <Link href="/" className={"text-[#808080]"}>
            Home
          </Link>
          <p>/</p>
          <Link href="/about">Contacts</Link>
        </div>

        <section className="grid grid-cols-12 gap-x-[30px] container mb-[140px]">
          <div className="col-span-4 shadow-xl pt-[40px] px-[35px] pb-[51px]">
            <div>
              <div className="flex gap-x-[16px] items-center">
                <Image
                  src="/icons/phone.svg"
                  alt="phone"
                  width={40}
                  height={40}
                />
                <p className="font-medium">Call To Us</p>
              </div>

              <p className="text-sm mt-[24px] mb-[16px]">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm">Phone: +8801611112222</p>

              <div className="w-full h-[1px] bg-[#808080] my-[32px]"></div>

              <div className="flex gap-x-[16px] items-center">
                <Image
                  src="/icons/mail.svg"
                  alt="mail"
                  width={40}
                  height={40}
                />
                <p className="font-medium">Write To US</p>
              </div>

              <p className="text-sm mt-[24px] mb-[16px]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm mb-[16px]">
                Emails: customer@exclusive.com
              </p>
              <p className="text-sm">Emails: support@exclusive.com</p>
            </div>
          </div>
          <form className="col-span-8 self-start shadow-xl py-[40px] px-[31px] grid grid-cols-9 gap-x-[16px] gap-y-[32px]">
            <div className="col-span-3 self-start">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full p-[16px] col-span-3 rounded-md bg-[#F5F5F5]"
              />
            </div>

            <div className="col-span-3 self-start">
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full p-[16px] rounded-md bg-[#F5F5F5]"
              />
            </div>

            <div className="col-span-3 self-start">
              <input
                type="tel"
                placeholder="Your Phone *"
                className="w-full p-[16px] rounded-md bg-[#F5F5F5]"
              />
            </div>

            <div className="col-span-9 self-start">
              <textarea
                className="w-full h-[207px]  p-[16px] bg-[#F5F5F5] rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="col-span-9 self-star">
              <button
                className={
                  "py-[16px] px-[48px] rounded-[4px] text-white bg-[#DB4444]  float-right"
                }
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
    </Main>
  );
};

export default Contacts;
