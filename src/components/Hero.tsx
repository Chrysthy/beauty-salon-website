import { Button } from "./shared/Button";
import sallonImage from "../assets/saloon-image.png";

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="h-screen w-full flex items-center bg-(--bg-color) relative overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div id="home" className="absolute inset-0 z-0">
                <img
                    src={sallonImage}
                    alt="Saloon Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-l from-[#ffffff]/30 via-[#444444]/80 to-[#0A0A0A]"></div>
            </div>

            <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <h1 className="text-white drop-shadow-lg text-5xl">
                            Flawless cuts, impeccable styling, and exceptional care.
                        </h1>

                        <p className="text-(--text-color) max-w-xl drop-shadow-md text-lg">
                            Expert professionals, a premium atmosphere, and excellent service designed for your unique style.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                onClick={() =>
                                    window.open("https://wa.me/5585999999999", "_blank")
                                }
                            >
                                Book on WhatsApp
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => scrollToSection("services")}
                            >
                                Our Services
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}