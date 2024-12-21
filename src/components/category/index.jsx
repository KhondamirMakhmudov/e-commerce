import Image from "next/image";

const CategoryCard = ({ category, image, name }) => {
  return (
    <div className="w-[170px] h-[145px] rounded-[4px] border flex flex-col justify-center items-center cursor-pointer hover:bg-[#DB4444] hover:text-[white] transition-all duration-300 ">
      <Image src={`/icons/${image}.svg`} alt={image} width={56} height={56} />

      <div className="mt-[16px] space-y-[8px]">
        <h2 className="font-medium">{name}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
