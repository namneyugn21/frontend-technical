import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import reviewsData from "./reviews.json";
import Overlay from "./components/Overlay/Overlay";

// create an interface for the Reviewer object
interface Reviewer {
    name: string;
    review: string;
    grade: number;
    reviewer_level: string;
}

function App() {
    const [reviews, setReviews] = useState<Reviewer[]>([]); // initialize reviews state
    const [overlayStatus, setOverlayStatus] = useState(true); // initialize overlay state

    // function to toggle isActive state
    const toggleOverlay = () => {
        setOverlayStatus(!overlayStatus);
    };

    // set reviews state to reviews
    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    return (
        <div className="container">
            <Header/>
            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <Card key={index} review={review}/>
                ))}
            </div>
            <Overlay isActive={overlayStatus} onToggle={toggleOverlay} />
        </div>
    );
}

export default App;
