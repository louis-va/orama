const Background = () => {
  return (
    <div className="layout-grid fixed -z-10 h-screen max-w-screen-lg opacity-10 lg:border-x lg:border-dashed lg:border-black">
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