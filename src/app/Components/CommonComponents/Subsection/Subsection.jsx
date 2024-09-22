

const Subsection = ({title}) => {
    return (
        <div className=" flex flex-col gap-y-1">
        <h2 className="font-bold text-[40px] text-center">{title}</h2>
      <div className="flex justify-center">
      <div className="w-[90px] h-[4px] bg-[#3BB4FE] rounded-lg"></div>
      </div>
      </div>
    );
};

export default Subsection;