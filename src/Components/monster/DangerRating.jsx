import './DangerRating.css'

export const DangerRating = ({ danger }) => {
    const maxStars = 8;
    const filledStar = "★";
    const emptyStar = "☆";
    return (
        <span className="danger-rating-container">
            <span className="danger-rating">
                {Array.from({ length: maxStars }).map((_, index) => (
                    <span
                        key={index}
                        className={index < (danger || 0) ? "danger-star filled" : "danger-star empty"}
                    >
                        {index < (danger || 0) ? filledStar : emptyStar}
                    </span>
                ))}
            </span>
        </span>
    );
};