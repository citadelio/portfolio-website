import React from 'react'

export default function Footer() {
    return ( 
<footer className="hidden">        	
      <div id="footer-container">
          
          <div id="backtotop" className="button-wrap left disable-drag">
              <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                      <i className="fa fa-angle-up"></i>
                  </div>
              </div>
              <div className="button-text sticky left"><span data-hover="Back Top">Back Top</span></div> 
          </div>
          
          <div className="footer-middle">
              <div className="copyright">Software Engineer | Tech Enthusiast | Gadget Lover</div>
          </div>
          
          <div className="socials-wrap disable-drag">            	
              <div className="socials-icon"><i className="fa fa-share-alt" aria-hidden="true"></i></div>
              <div className="socials-text">Connect with me</div>
              <ul className="socials">
                  <li><span className="parallax-wrap"><a className="parallax-element" href="https://github.com/citadelio" target="_blank">Gh</a></span></li>
                  <li><span className="parallax-wrap"><a className="parallax-element" href="https://twitter.com/sudo_hussein" target="_blank">Tw</a></span></li>
                  <li><span className="parallax-wrap"><a className="parallax-element" href="https://web.facebook.com/Warrake.H/" target="_blank">Fb</a></span></li>
                  <li><span className="parallax-wrap"><a className="parallax-element" href="https://wa.me/2349039951233?text=Hi%20Hussein,%20I'm%20coming%20from%20your%20personal%20website%20-ENTER%20YOUR%20MESSAGE%20HERE-" target="_blank">Wa</a></span></li>
                  <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.instagram.com/call_me_citadel/">In</a></span></li>
              </ul>                
          </div>
          
      </div>
</footer>
    )
}
