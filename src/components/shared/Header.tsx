import { useState } from "react";
import saloonLogo from "../../assets/saloon-logo.png";
import { Button } from "../shared/Button";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-glass-gray/30 backdrop-blur-sm border-b border-(--border-line) z-50">
            <div className="flex justify-between items-center px-4 md:px-6 py-4">
                <div className="flex items-center gap-2">

                    <a href="#hero">
                        <img
                            src={saloonLogo}
                            alt="Logo Star Saloon"
                            className="w-15 h-20 rounded object-cover"
                        />

                    </a>

                    <span className="text-white text-sm md:text-base">
                        Star Saloon
                    </span>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex items-center gap-8">
                        <li className="text-white hover:text-(--hover-color) duration-300 cursor-pointer">
                            Home
                        </li>
                        <li className="text-white hover:text-(--hover-color) duration-300 cursor-pointer">
                            Services
                        </li>
                        <li className="text-white hover:text-(--hover-color) duration-300 cursor-pointer">
                            Contact
                        </li>
                        <li>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    window.open("https://wa.me/5585999999999", "_blank");
                                }}
                            >
                                Book now
                            </Button>
                        </li>
                    </ul>
                </nav>

                {/* Botão Hamburguer Mobile */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>
            </div>

            {/* Menu Mobile */}
            <nav
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col px-4 pb-4 gap-4 bg-(--bg-color)">
                    <li className="text-white hover:text-(--hover-color) duration-300 cursor-pointer py-2">
                        Inicio
                    </li>
                    <li className="text-whitehover:text-(--hover-color) duration-300 cursor-pointer py-2">
                        Serviços
                    </li>
                    <li className="text-whitehover:text-(--hover-color) duration-300 cursor-pointer py-2">
                        Contato
                    </li>
                    <li className="pt-2">
                        <Button
                            variant="primary"
                            className="w-full"
                            onClick={() => {
                                window.open("https://wa.me/5585999999999", "_blank");
                            }}
                        >
                            Book now
                        </Button>
                    </li>
                </ul>
            </nav>
        </header >
    );
};

export default Header;