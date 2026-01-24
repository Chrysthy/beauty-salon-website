interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    price: string;
}

export const ServiceCard = ({ icon, title, description, price }: ServiceCardProps) => {
    return (
        <div
            className="bg-(--bg-color) border border-(--border-line) rounded-lg p-6
            hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(248,100,191,0.2)] 
        "
        >
            <div className="flex flex-col gap-4">
                <div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 bg-linear-to-br from-(--hover-color) to-primary" 
                >
                    {icon}
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-white">{title}</h3>
                    <p className="text-(--text-color) text-sm">{description}</p>
                </div>

                <div className="pt-2 border-t border-(--border-line) text-lg font-semibold">
                    <span className="text-primary">{price}</span>
                </div>
            </div>
        </div>
    );
};