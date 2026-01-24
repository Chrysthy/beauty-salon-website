import { FiMessageCircle } from "react-icons/fi";

const WhatsAppButton = () => {
    const handleClick = () => {
        window.open('https://wa.me/5585999999999', '_blank');
    }

    return (
        <button onClick={handleClick} className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110">
            <FiMessageCircle size={45} className='group-hover:scale-110 transition-transform' />
            <span className='absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full animate-pulse'>1</span>
        </button>
    );
}

export default WhatsAppButton;