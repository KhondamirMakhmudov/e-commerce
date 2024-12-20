import Image from "next/image";

const Search = () => {
  return (
    <div className={"max-w-[243px] border relative right-0"}>
      <input
        type="text"
        placeholder="What are you looking for?"
        className={" w-full"}
      />
      <div className={"absolute"}>
        <Image
          src={"/icons/search.svg"}
          alt={"search"}
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Search;
