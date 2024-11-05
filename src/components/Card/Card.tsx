import { useState } from "react";
import "./Card.css";

// type check before running the code
interface CardProps {
    review: {
        name: string;
        review: string;
        grade: number;
        reviewer_level: string;
    }
}

// function to generate random avatar
function radomizeAvatar() {
    return Math.floor(Math.random() * 8);
}

function Card({ review }: CardProps) {
    const [avatar] = useState(radomizeAvatar());

    return (
        <div className="card-container">
            {/* contains name, avatar, and status */}
            <div className="card-header">
                <div className="avatar-container">
                    <img src={`https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=${avatar}`} alt="avatar"/>                
                </div>
                <div className="name-container">
                    <p className="name">{review.name}</p>
                    <p className="review_level">{review.reviewer_level}</p>
                </div>
            </div>
            {/* contains grade represented as star */}
            <div className="grade-container">
                    {[...Array(review.grade)].map(() => (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(251, 191, 56)" className="grade-star">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                    ))}
            </div>
            {/* contains review */}
            <div className="review-container">
                <p className="review">{review.review}</p>
            </div>
        </div>
    );
}

export default Card;