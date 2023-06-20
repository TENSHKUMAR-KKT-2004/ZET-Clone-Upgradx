import Head from 'next/head'
import './page.css'

export default function Home() {
  return (
    <div>
      <Head>
        <script src='./BrandSlider.js' />
      </Head>
      {/* hero section */}
      <div className="hero-section text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 left-sec">
              <h1 className="fade-up hero-text">Become a Financial Advisor and <span className='hero-color-text'>Earn Rs.1 Lakh/Month</span></h1>
              <p className="fade-up hero-mini-text">No investment required</p>
              <div className="fade-up">
                <img src="/google-play-badge.png" alt="google-play-logo" className="download-btn" />
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/hero.png" alt="hero image" className="hero-image fade-up" />
            </div>
          </div>
        </div>
      </div>

      {/* Brands section */}
      <div className="top-brands-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Top Brands on ZET</h2>
                <p>We are trusted by the best brands in the country</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <img src="/topBrands/brand1.png" alt="Brand 1" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand2.png" alt="Brand 2" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand3.png" alt="Brand 3" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand4.png" alt="Brand 4" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand5.png" alt="Brand 5" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand6.png" alt="Brand 6" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand7.png" alt="Brand 7" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand8.png" alt="Brand 8" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand9.png" alt="Brand 9" />
                    </div>
                    <div className="brand-item">
                      <img src="/topBrands/brand10.png" alt="Brand 10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* products section */}
      <div className="products-section">
        <div className="section-heading">
          <h2>Products on ZET</h2>
          <p>We are trusted by the best brands in the country</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-item">
                <div className="product-card">
                  <div className="product-image">
                    <img className="product-img" src="/credit-card.png" alt="Credit Cards" />
                  </div>
                  <div className="product-details">
                    <p className="product-title">CREDIT CARDS</p>
                    <p className="product-description">100% Contactless Application Process with Instant Approval From Top Banks.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <div className="product-item">
                <div className="product-card" style={{ backgroundColor: '#fff1ca' }}>
                  <div className="product-image">
                    <img className="product-img" src="loan.png" alt="Loans" />
                  </div>
                  <div className="product-details">
                    <p className="product-title">LOANS</p>
                    <p className="product-description">100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="product-item">
                <div className="product-card">
                  <div className="product-image">
                    <img className="product-img" src="buy-now-pay-later.png" alt="Buy Now Pay Later" />
                  </div>
                  <div className="product-details">
                    <p className="product-title">BUY NOW PAY LATER</p>
                    <p className="product-description">Short-term financing that allows consumers to make purchases and pay for them over time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-item">
                <div className="product-card">
                  <div className="product-image">
                    <img className="product-img" src="savings-account.png" alt="Saving Accounts" />
                  </div>
                  <div className="product-details">
                    <p className="product-title">SAVING ACCOUNTS</p>
                    <p className="product-description">ZET offers a range of savings accounts that suit your personal needs for banking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* zet-effects-section */}

      <div className="zet-effects-section">
        <div className="background-color"></div>
        <div className="background-image">
          <img className='centered-img' src="persons.png" alt="persons image" />
        </div>
        <div className="effect-container">

          <div className="slider">
            <h2 style={{color: 'white',textAlign: 'center',fontSize: '2.5rem'}}>THE ZET EFFECT</h2>
            <div className="slide active">
              <p>We helped customers in more than 50 cities to get their first financial product</p>
            </div>
            <div className="slide">
              <p>More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</p>
            </div>
            <div className="slide">
              <p>14 Lakh+ Financial Advisor across India are using ZET to increase their income.</p>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress"></div>
          </div>

        </div>
      </div>

      <script src='./ProcessBarWithSlider.js' />
      <script src='./BrandSlider.js' />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </div>
  )
}
