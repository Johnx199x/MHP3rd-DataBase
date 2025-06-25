import './DangerRating.css'


export const DangerRating = ({ danger }) => {
    const dangerStar = "★";
    return (
        <div className="danger-rating-container">
            <div className="danger-rating">
                {Array.from({ length: danger || 0 }).map((_, index) => (
                    <span key={index} className="danger-star">{dangerStar}</span>
                ))}
            </div>
        </div>
    );
};