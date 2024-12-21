const Title = ({ title, subtitle }) => {
  return (
    <div>
      <div className={"flex gap-x-[16px] items-center mb-[24px]"}>
        <div className={"bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"}></div>
        <h3 className={"text-[#DB4444] font-semibold"}>{subtitle}</h3>
      </div>

      <div className={"text-[36px] font-semibold"}>{title}</div>
    </div>
  );
};

export default Title;
