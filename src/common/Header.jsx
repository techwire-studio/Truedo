import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isServices = location.pathname === '/our-services';
  const isContact = location.pathname === "/contact"

  return (
    <div
    className={`font-dm uppercase absolute top-16 left-1/2 z-20 px-16 py-4 gap-16 font-medium flex items-center justify-center transform -translate-x-1/2 rounded-[14px] 
      ${(isServices || isContact)
        ? 'border-black text-black'
        : 'border-[#FFFCF2] text-[#FFFCF2]'} 
      border-[1px] lg:text-[14px]`}
  >
      <a href="/">Home</a>
      <a href="/our-services">Services</a>
      <a href="">Profile</a>
      <a href="/contact">Contacts</a>
    </div>
  );
};

export default Header;
