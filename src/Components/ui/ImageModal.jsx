import { useState } from "react";
import './ImageModal.css'

export const ImageModal = ({ src, alt, className = "", style = {} }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    return (
        <>
            <img 
                src={src} 
                alt={alt}
                className={className}
                style={{ ...style, cursor: 'pointer' }}
                onClick={openModal}
                loading="lazy"
            />

            {/* Modal */}
            {isModalOpen && (
                <div 
                    className="image-modal-overlay" 
                    onClick={closeModal}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="image-modal-close" 
                            onClick={closeModal}
                            aria-label="Close Modal"
                        >
                            ×
                        </button>
                        <img 
                            src={src} 
                            alt={alt}
                            className="image-modal-img"
                            loading="lazy"
                        />
                    </div>
                </div>
            )}
        </>
    );
};