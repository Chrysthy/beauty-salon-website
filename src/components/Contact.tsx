import { FaRegClock, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Button } from "./shared/Button";

export const Contact = () => {
    return (
        <section className="py-16 lg:py-24 bg-(--bg-color)">
            <div className="text-center">
                <h2 className="text-white mb-4 text-2xl" id="contact">Contact Us</h2>
            </div>
            <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 bg-glass-gray/30 rounded-lg py-8">
                <h3 className="mb-6 text-white">Information</h3>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <FaMapMarkerAlt size={20} />
                    </div>

                    <div>
                        <h4 className="text-white mb-1">Address</h4>
                        <p className="text-(--text-color)">Av. Principal, 123 - Centro</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <FaRegClock size={20} />
                    </div>

                    <div>
                        <h4 className="text-white mb-1">Opening hours</h4>
                        <p className="text-(--text-color)">Mon to Sat: 9:00AM–7:00PM</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <FaWhatsapp size={20} />
                    </div>

                    <div>
                        <h4 className="text-white mb-1">WhatsApp</h4>
                        <p className="text-(--text-color)">(85) 99999-9999</p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-(--border-line)">
                    <Button
                        variant="primary"
                        onClick={() =>
                            window.open("https://wa.me/558599999999999", "_blank")
                        }
                        className="w-full bg-color-primary"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <FaWhatsapp size={18} />
                            Message us on WhatsApp
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
};