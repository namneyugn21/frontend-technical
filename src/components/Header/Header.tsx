import "./Header.css";

function Header() {
    return (
        <header>
            <div className="sub-header">
                <small className="header-reviews">Reviews</small>
                <p className="header-title">What our customers are saying 🍦🫶🏼 </p>
            </div>
            <div className="description-container">
                <p className="description">At The Cone Zone, we’re proud to serve up smiles with every scoop! Check out what our customers have to say about their favorite flavors, experiences, and sweet moments.</p>
            </div>
        </header>
    );
}

export default Header;