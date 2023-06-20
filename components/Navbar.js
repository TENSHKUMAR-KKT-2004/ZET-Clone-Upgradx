import Link from "next/link"
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
                <Link class="navbar-brand" href="/">
                <span class="logo-text">ZET Clone</span>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse custom-nav-links" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" href="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/about">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/partner-with-us">Partner With Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/blog">Blog</Link>
                        </li>
                    </ul>
                    <div class="cta-button ml-auto">
                        <button class="btn btn-primary custom-download-button">Download ZET</button>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navbar