import Link from "next/link";
import Lang from "../lang";
import Brand from "../brand";
import Menu from "../menu";
import Search from "../search";

const Header = () => {
  return (
    <header>
      <div className={"bg-black"}>
        <div
          className={
            "container relative grid grid-cols-12 py-[15px] text-white"
          }
        >
          <div
            className={"col-span-12  text-sm flex gap-x-[8px] justify-center"}
          >
            <h1 className={""}>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h1>
            <Link className={"underline text-sm font-semibold"} href={"/"}>
              ShopNow
            </Link>
          </div>

          <div className={"absolute right-0 top-3"}>
            <Lang />
          </div>
        </div>
      </div>

      <div className={"container mt-[40px] mb-[16px] flex items-center"}>
        <Brand />

        <Menu />

        <div>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
