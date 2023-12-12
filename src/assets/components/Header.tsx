import Line from "../system/Line";
import Logo from "../system/Logo";

const Header = () => {
  return (
    <header>
      <nav className='layout-grid py-3'>
        <a href="/"> <Logo /> </a>
        <div className="col-span-3 flex items-center justify-end lg:col-span-5">
          <button className="flex items-center gap-1 uppercase">
            <span className="text-xs opacity-60">[+]</span> Menu
          </button>
        </div>
      </nav>
      <Line />
    </header>
  );
};

export default Header;