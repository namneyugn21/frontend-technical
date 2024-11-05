import { useEffect } from "react";
import "./Overlay.css";

function Overlay({ isActive, onToggle }: { isActive: boolean; onToggle: () => void }) {
    useEffect(() => {
        document.body.style.overflow = isActive ? "hidden" : "auto"; // if isActive is true, set overflow to hidden
    }, [isActive]);

    if (!isActive) { // if isActive is false, return null
        return null;
    };

    return ( // if isActive is true, return the overlay
        <div className="overlay">
            <div className="linear-gradient-border">
                <button className="reveal-button" onClick={onToggle}>Show all reviews</button>
            </div>
        </div>
    );
}

export default Overlay;