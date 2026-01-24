import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-row bg-(--bg-color) border-t border-(--border-line) py-8 ">
            <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
                    {/* copyright */}
                    <div className=" flex text-(--text-color) text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Star Saloon. All rights reserved.
                    </div>
                    {/* social links  */}

                    <ul className="flex flex-row items-center gap-6">
                        <li>
                            <a
                                href="https://www.instagram.com/star_saloon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-(--text-color) hover:text-(--hover-color) transition-colors duration-300"
                            >
                                <FaInstagram size={20} />
                                <span className="text-sm ml-2">Instagram</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://wa.me/5585999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-(--text-color) hover:text-(--hover-color) transition-colors duration-300"
                            >
                                <FaWhatsapp size={20} />
                                <span className="text-sm ml-2">WhatsApp</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://maps.google.com/?q=Barbearia+Navalha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-(--text-color) hover:text-(--hover-color) transition-colors duration-300"
                            >
                                <FaMapMarkerAlt size={20} />
                                <span className="text-sm ml-2">Location</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>

        </footer>
    );
};

export default Footer;