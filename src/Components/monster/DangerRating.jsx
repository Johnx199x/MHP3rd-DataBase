import './DangerRating.css'


export const DangerRating = ({ danger }) => {
    const dangerStar = "★";
    return (
        <span className="danger-rating-container">
            <span className="danger-rating">
                {Array.from({ length: danger || 0 }).map((_, index) => (
                    <span key={index} className="danger-star">{dangerStar}</span>
                ))}
            </span>
        </span>
    );
};