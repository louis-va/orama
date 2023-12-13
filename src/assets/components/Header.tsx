import Line from "./Line";
import Logo from "./Logo";
import Button from "./Button";

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