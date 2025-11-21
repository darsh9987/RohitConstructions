import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Rohit Constructions. All rights reserved.</p>
                    <p>Building Excellence Since 1984 | 40+ Years of Legacy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
