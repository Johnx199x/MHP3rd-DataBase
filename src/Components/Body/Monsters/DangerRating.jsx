
export const DangerRating = ({ danger }) => {
    const dangerStar = "★";
    return dangerStar.repeat(danger || 0);
};