import { NavLists } from "@/lib/lists/nav-lists";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router-dom";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  const { pathname } = useLocation();

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:flex w-full relative justify-between items-center py-8 border-t border-t-neutral-300">
        <div className="flex flex-col justify-center items-start gap-4 ml-2">
          <img
            src="/assets/icons/logo-text.svg"
            alt="LOGO TEXT"
            className="w-20 md:w-60 mb-2"
          />
          <span className="text-xs md:text-[14px] w-4/5 text-neutral-500 text-left">
            DSS VJIT is more than just a club, it’s a thriving ecosystem where
            students grow, innovate, and transform into future tech leaders!
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/dssvjit" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/github.png" alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/dss_vjit/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/company/dss-vjit/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 mr-5">
          <div className="bg-white-200 rounded-lg p-5 shadow-xl text-center outline outline-1 outline-gray-300 newsletter-container">
            <p className="text-xl text-black-800">Looking forward to connect with us?</p>
            <p className="text-sm text-neutral-500">Stay updated with our latest events and news!</p>
            <form className="flex flex-col items-center mt-4">
              <Input 
                type="email" 
                placeholder="Enter your email for updates" 
                required 
                className="mb-2 border-2 border-grey focus:border-blue-500 rounded" 
              />
              <Button type="button" className="bg-green-600 text-white rounded">Subscribe</Button>
            </form>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-3 py-5 px-1 mr-3"> {/* Navbar below newsletter */}
            {NavLists.map((navItem) => (
              <NavLink
                key={navItem.route}
                to={navItem.route}
                className={cn(
                  "text-lg text-neutral-600 hover:text-blue-500 transition duration-300", 
                  navItem.route === pathname
                    ? "text-neutral-900"
                    : "text-neutral-600"
                )}
              >
                {navItem.name}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden w-full relative flex flex-col items-center py-8 border-t border-t-neutral-300">
        <div className="flex flex-col justify-center items-start gap-4 mb-4 px-4">
          <img
            src="/assets/icons/logo-text.svg"
            alt="LOGO TEXT"
            className="w-20 md:w-60 mb-2"
          />
          <span className="text-xs md:text-[14px] w-full text-neutral-500 text-left">
            DSS VJIT is more than just a club, it’s a thriving ecosystem where
            students grow, innovate, and transform into future tech leaders!
          </span>
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://github.com/dssvjit" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/dss_vjit/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/company/dss-vjit/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
        <div className="flex flex-col items-start gap-3 mb-4 ml-2 mr-2">
          <div className="bg-white-200 rounded-lg p-5 shadow-xl text-center outline outline-1 outline-gray-300 newsletter-container">
            <p className="text-xl text-black-500">Looking forward to connect with us?</p>
            <p className="text-sm text-neutral-500">Stay updated with our latest events and news!</p>
            <form className="flex flex-col items-center mt-4">
            <Input 
                type="email" 
                placeholder="Enter your email for updates" 
                required 
                className="mb-2 border-2 border-grey focus:border-blue-500 rounded" 
              />
              <Button type="button" className="bg-green-600 text-white rounded">Subscribe</Button>
            </form>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-3 py-5 px-1"> 
            {NavLists.map((navItem) => (
              <NavLink
                key={navItem.route}
                to={navItem.route}
                className={cn(
                  "text-lg text-neutral-600 hover:text-blue-500 transition duration-300", 
                  navItem.route === pathname
                    ? "text-neutral-900"
                    : "text-neutral-600"
                )}
              >
                {navItem.name}
              </NavLink>
            ))}
          </div>
        </div>
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-10 right-10 bg-blue-500 text-white rounded-full p-2 shadow-lg"
        >
          ↑
        </button>
      </footer>
    </>
  );
};

export default FooterSection;