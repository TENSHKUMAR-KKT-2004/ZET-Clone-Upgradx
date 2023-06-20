import './footer.css'

import Link from 'next/link';
const Footer = () => {
    return (
        <div className='custom-footer-container'>
        <img className='footerBG' src="AboutUs.png" width="1440" height="570" style={{color: 'transparent', objectFit: 'cover'}} alt="Footer bg img" />
<div className="footer-content">
            <Link className="logo-text" href="/">
                <span className="logo">ZET Clone</span>
            </Link>
            <hr />
            <div className="menu-section">
                <div className="menu-group">
                    <p className="menu-heading">COMPANY</p>
                    <Link href="/about" className="menu-link">About Us</Link>
                    <Link href="/partner-with-us" className="menu-link">Partner with us</Link>
                    <Link href="/blog" className="menu-link">Blog</Link>
                </div>
                <div className="menu-group">
                    <p className="menu-heading">LEGAL</p>
                    <Link href="/privacy-policy" className="menu-link">Privacy Policy</Link>
                    <Link href="/terms-of-use" className="menu-link">Terms of Use</Link>
                </div>
                <div className="menu-group">
                    <p className="menu-heading">CONTACT</p>
                    <Link href="mailto:hi@zetapp.in" className="menu-link">hi@zetapp.in</Link>
                    <Link href="tel:+919991110022" className="menu-link">+91-7417274072</Link>
                </div>
                <div className="menu-group">
                    <p className="menu-heading">SOCIAL</p>
                    <div className="social-icons">
                        <Link href="https://www.linkedin.com/" className="social-link">linkedin</Link>
                        <Link href="https://www.instagram.com/" className="social-link">instagram</Link>
                        <Link href="https://www.facebook.com/" className="social-link">facebook</Link>
                        <Link href="https://web.telegram.org/" className="social-link">telegram</Link>
                        <Link href="https://chat.whatsapp.com/" className="social-link">whatsapp</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Footer