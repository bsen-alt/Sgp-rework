import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, X, Menu, Languages } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/main-login");
  };

  const serviceColumns = [
    {
      title: <Link to="/services/construction">Construction</Link>,
      content: [
        <Link to="/services/construction">
          Desired type of standard constructions
        </Link>,
      ],
    },
    {
      title: <Link to="/services/construction-plans">Construction Plans</Link>,
      content: [
        <Link to="/services/construction-plans/house-plans">House Plans</Link>,
        <Link to="/services/construction-plans/cabana-plans">
          Cabana Plans
        </Link>,
        <Link to="/services/construction-plans/garage-plans">
          Garage Plans
        </Link>,
        <Link to="/services/construction-plans/guardroom-plans">
          Guard Room Plans
        </Link>,
        <Link to="/services/construction-plans/restaurant-plans">
          Restaurant Plans
        </Link>,
        <Link to="/services/construction-plans/warehouse-plans">
          Warehouse Plans
        </Link>,
        <Link to="/services/construction-plans/shop-plans">Shop Plans</Link>,
        <Link to="/services/construction-plans/factory-plans">
          Factory Plans
        </Link>,
      ],
    },
    {
      title: "Pre Made Doors",
      content: [
        "Wooden doors for rooms",
        "Aluminum doors for rooms",
        "Steel doors",
      ],
    },
    {
      title: "Pre Made Windows",
      content: ["Wooden windows", "Aluminum windows"],
    },
    {
      title: "Concrete Stones",
      content: ["Concrete stones price and amount calculator"],
    },
  ];

  const translateOptions = [
    { name: "Eng English", code: "EN" },
    { name: "\u0DC3\u0DD2\u0D82 Sinhala", code: "SI" },
    { name: "Th Tamil", code: "TA" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
      setIsNavbarVisible(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      const timeout = setTimeout(() => {
        setIsNavbarVisible(false);
      }, 2000);

      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: isNavbarVisible ? 0 : scrollingDown ? -100 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 shadow-md h-[4rem] select-none"
    >
      <nav className="flex justify-between items-center px-6 md:px-24 py-3 bg-black/90 backdrop-blur-lg shadow-md relative z-10">
        <Link className="text-xl font-bold cursor-pointer" to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-[1rem] text-white font-medium items-center">
          <div
            className="relative group"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <Link
              to="/services"
              className="cursor-pointer h-4 flex items-center group"
            >
              <p className="py-6">Services</p>
              <ChevronDown
                className={`text-[0.4rem] h-4 transition-transform duration-500 ease-in-out ${
                  showServices ? "rotate-180" : "rotate-0"
                }`}
              />
            </Link>
          </div>

          <Link to="/about" className="cursor-pointer">
            About
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleLoginClick}
            className="text-[0.8rem] font-medium border py-1 px-4 border-white/80 rounded-sm hover:bg-black hover:text-white bg-yellow-500 text-black hover:transition-transform duration-500"
          >
            Login
          </button>

          <div className="relative">
            <button
              onClick={() => setShowTranslate(!showTranslate)}
              className="text-[0.8rem] font-medium text-white hover:text-gray-300 flex items-center border py-1 px-3 border-white/80 rounded-sm"
            >
              <Languages className="h-4 mr-.5" /> Translate
            </button>

            {showTranslate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 bg-white shadow-lg mt-6 w-18 py-2 text-[0.8rem]"
              >
                {translateOptions.map((option) => (
                  <Link
                    key={option.code}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-[0.8rem]"
                  >
                    {option.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 text-white shadow-md"
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            <li>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleLoginClick();
                  setIsMobileMenuOpen(false);
                }}
                className="text-[0.8rem] font-medium border py-1 px-4 border-white/80 rounded-sm bg-yellow-500 text-black"
              >
                Login
              </button>
            </li>
            <li className="flex gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[0.8rem] font-medium text-white border py-1 px-3 border-white/80 rounded-sm hover:bg-white hover:text-black"
              >
                En
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[0.8rem] font-medium text-white border py-1 px-3 border-white/80 rounded-sm hover:bg-white hover:text-black"
              >
                සිං
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[0.8rem] font-medium text-white border py-1 px-3 border-white/80 rounded-sm hover:bg-white hover:text-black"
              >
                த
              </button>
            </li>
          </ul>
        </motion.div>
      )}
      {/* Services Section */}
      {showServices && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-full bg-white w-full shadow-md z-0"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8">
            {serviceColumns.map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2 text-gray-800 text-[0.8rem]">
                  {column.title}
                </h3>
                <ul>
                  {column.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-gray-950 cursor-pointer mb-1 text-[0.8rem] hover:underline hover:underline-offset-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
