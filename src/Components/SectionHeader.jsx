const SectionHeader = ({startTitle,title, subTitle}) => {
  return (
    <div className="section-header text-center">
      <h3 className="text-center  text-2xl text-[#0471BA] ">
        <span className="title-others relative pl-12 ml-1 font-medium">
          {startTitle}
        </span>
      </h3>
      <h2 className="text-[28px] md:text-[40px] leading-8 md:leading-12 text-[#313131] font-semibold">
        {title}
      </h2>
      <h3 className="text-[25px] mt-4 md:mt-5 md:text-[38px] leading-[27px] text-[#0471BA]">{subTitle}</h3>
    </div>
  );
};

export default SectionHeader;
