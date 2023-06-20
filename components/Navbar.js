import Link from "next/link"
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <Link className="navbar-brand logo-text" href="/">
                <span className="logo-nav">ZET Clone</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse custom-nav-links" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/partner-with-us">Partner With Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/blog">Blog</Link>
                        </li>
                    </ul>
                    <div className="cta-button ml-auto">
                        <button className="btn btn-primary custom-download-button">Download ZET</button>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navbar