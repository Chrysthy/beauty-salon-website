import { FaScissors } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { RiBrushAiLine } from "react-icons/ri";
import { FaHandSparkles } from "react-icons/fa6";
import { LuPaintBucket, LuEyeClosed } from "react-icons/lu";
import { ServiceCard } from "./ServiceCard"
import { Button } from "./shared/Button"

export const Services = () => {
    const services = [
        {
            icon: <FaScissors size={24} />,
            title: "Signature Cut & Blow-Dry",
            description: "Precision cutting tailored to your face shape, finished with a professional blowout.",
            price: "$ 45"
        },
        {
            icon: <LuPaintBucket size={24} />,
            title: "Color & Highlights",
            description: "Full color, balayage, or custom highlights to add dimension and shine.",
            price: "$ 85"
        },
        {
            icon: <BsStars size={24} />,
            title: "Deep Conditioning",
            description: "Intensive hydration treatments to restore health, shine, and softness.",
            price: "$ 60"
        },
        {
            icon: <LuEyeClosed size={24} />,
            title: "Brow Shaping & Tint",
            description: "Expert architectural mapping and custom tinting designed to enhance volume, fill gaps, and perfectly frame your eyes.",
            price: "$ 25"
        },
        {
            icon: <FaHandSparkles size={24} />,
            title: "Premium Nails",
            description: "Complete nail care including cuticle treatment, shaping, and gel polish.",
            price: "$ 90"
        },
        {
            icon: <RiBrushAiLine size={24} />,
            title: "Professional Makeup",
            description: "Flawless application for events, aiming for a natural or glamorous look.",
            price: "$ 100"
        }
    ]

    return (
        <section id="services" className="py-16 lg:py-24 bg-(--bg-color) scroll-mt-27">
            <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-white mb-4 text-2xl">Our Services</h2>
                    <div></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                        />
                    ))}
                </div>

                <div className="flex justify-center pt-8">
                    <Button
                        variant="primary"
                        onClick={() => window.open('https://wa.me/558599999999999', '_blank')}
                    >
                        Book an Appointment
                    </Button>
                </div>
            </div>
        </section>
    )
}