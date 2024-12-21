import Image from "next/image";

const Search = () => {
  return (
    <>
      <div className={"max-w-[243px] border relative flex rounded-[4px] "}>
        <input
          type="text"
          placeholder="What are you looking for?"
          className={" w-full py-[7px] pl-[20px] pr-[46px] rounded-[4px]"}
        />
        <div className={"absolute right-2 top-2"}>
          <Image
            src={"/icons/search.svg"}
            alt={"search"}
            width={24}
            height={24}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
