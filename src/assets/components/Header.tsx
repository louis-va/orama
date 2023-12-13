import Line from "../system/Line";
import Logo from "../system/Logo";
import Button from "../system/Button";

const Header = () => {
  return (
    <header>
      <nav className='layout-grid py-3'>
        <div>
          <a className='inline-block' href='/'>
            <Logo />
          </a>
        </div>
        <div className='col-span-3 flex items-center justify-end lg:col-span-5'>
          <Button className='flex items-center gap-1' type='button'>
            <span className="text-xs pointer-events-none">[+]</span> Menu
          </Button>
        </div>
      </nav>
      <Line />
    </header>
  );
};

export default Header;