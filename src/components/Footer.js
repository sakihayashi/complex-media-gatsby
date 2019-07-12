import React from 'react'
// import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div className="padding-top footer-background">
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://musicofsnow.io/">Flamingod News</a>.
        </span>
      </div>
    </footer>
  </div>
)
