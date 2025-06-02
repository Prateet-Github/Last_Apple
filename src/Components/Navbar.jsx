import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "logo", href: "#" },
    { name: "Store", href: "#" },
    { name: "Mac", href: "#" },
    { name: "iPad", href: "#" },
    { name: "iPhone", href: "#" },
    { name: "Watch", href: "#" },
    { name: "AirPods", href: "#" },
    { name: "TV & Home", href: "#" },
    { name: "Entertainment", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Support", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-white/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#">
          <img
            src="images/applelogo.jpg"
            alt="Apple"
            className="h-10 rounded-full"
          />
        </a>

        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {navItems.slice(1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-black transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="flex flex-col items-start bg-white px-4 pb-4 w-full">
          {navItems.slice(1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="py-2 text-gray-800 w-full border-b border-gray-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};