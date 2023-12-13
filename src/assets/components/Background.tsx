const Background = () => {
  return (
    <div className="layout-grid fixed -z-10 h-screen opacity-10 max-w-screen-xl xl:border-x xl:border-dashed xl:border-black">
      <div className="border-x border-dashed border-black"></div>
      <div className="border-x border-dashed border-black"></div>
      <div className="border-x border-dashed border-black"></div>
      <div className="border-x border-dashed border-black"></div>
      <div className="border-x border-dashed border-black hidden lg:block"></div>
      <div className="border-x border-dashed border-black hidden lg:block"></div>
    </div>
  );
};

export default Background;