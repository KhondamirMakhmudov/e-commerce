import Link from "next/link";
import Brand from "../brand";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex justify-between container pt-[80px] pb-[60px]">
        <div className="col-span-3 text-white space-y-[24px]">
          <Brand />

          <p className="text-[20px] font-medium">Subscribe</p>

          <p className="">Get 10% off your first order</p>
        </div>

        <div className="col-span-2">
          <p className="text-white font-medium text-[20px]  mb-[24px]">
            Support
          </p>
          <ul className="space-y-[16px]">
            <li>
              <p className="text-white">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
            </li>
            <li>
              <Link href="mailto:exclusive@gmail.com" className="text-white">
                exclusive@gmail.com
              </Link>
            </li>
            <li>
              <Link href="tel:+88015-88888-9999" className="text-white">
                +88015-88888-9999
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <p className="text-white font-medium text-[20px]  mb-[24px]">
            Account
          </p>
          <ul className="space-y-[16px]">
            <li>
              <Link href="#" className="text-white">
                My Account
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white">
                Login / Register
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white">
                Cart
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white">
                WishList
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <p className="text-white font-medium text-[20px]  mb-[24px]">
            Quick Link
          </p>
          <ul className="space-y-[16px]">
            <li>
              <Link href="#" className="text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-3">
          <p className="text-white font-medium text-[20px]  mb-[24px]">
            Download App
          </p>

          <div>
            <p className="text-xs text-white text-[#AFAFAF] mb-[8px]">
              Save $3 with App New User Only
            </p>

            <div className="flex gap-x-[11px]">
              <Image
                src={"/images/qr_code.png"}
                alt="qr_code"
                width={80}
                height={80}
              />

              <div className="space-y-[9px]">
                <Image
                  src={"/images/google_play.png"}
                  alt="google_play"
                  width={104}
                  height={30}
                  className="my-[5px]"
                />
                <Image
                  src={"/images/appstore.png"}
                  alt="appstore"
                  width={104}
                  height={30}
                  className="my-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[#3D3D3D] pt-[16px] flex items-center justify-center gap-x-[6px] pb-[24px] border-t border-t-[#141414]">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5001 18.3333C15.1025 18.3333 18.8334 14.6023 18.8334 9.99996C18.8334 5.39759 15.1025 1.66663 10.5001 1.66663C5.89771 1.66663 2.16675 5.39759 2.16675 9.99996C2.16675 14.6023 5.89771 18.3333 10.5001 18.3333Z"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.0001 8.14811C13.0001 8.14811 11.9707 6.66663 10.255 6.66663C8.5393 6.66663 7.16675 8.14811 7.16675 9.99996C7.16675 11.8518 8.5393 13.3333 10.255 13.3333C11.9707 13.3333 13.0001 11.8518 13.0001 11.8518"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
