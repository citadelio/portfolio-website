import Link from 'next/link'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
const Contact = () => {
    return (
        <>
         <div id="main"> 
            <Hero sub="Let's 🤝" main="Work Together"/>
            <div id="main-content">
                        <div id="main-page-content">
                            
                            <div className="vc_row row_padding_bottom">            
                                
                                <h2 className="has-mask" data-delay="0">...and make something that matters.</h2>
                                
                                <hr/><hr/>
                                    
                                <div className="one_half">
                                	<p className="has-animation" data-delay="500">E-mail</p>
                                    <h5 className="has-mask" data-delay="250">
                                        <a href="mailto:husseinwarrake@gmail.com">
                                        husseinwarrake@gmail.com
                                        </a>
                                        </h5>
                                </div>
                                <div className="one_half last">
                                    <p className="has-animation" data-delay="500">Phone</p>
                                    <h5 className="has-mask" data-delay="250">
                                    <a href="tel:+2349039951233">
                                        +234 903 9951 233
                                        </a>
                                    </h5>                                    
                                </div>
                            
                            </div>
                             
                            <div className="vc_row large">
                                
                                <div className="row-half-color first half-dark-section" data-bgcolor="#141414"></div>
                                <div className="row-half-color second half-white-section change-header-color" data-bgcolor="#fff"></div>
                            </div>
                            
                            <div className="vc_row row_padding_top row_padding_bottom white-section change-header-color" data-bgcolor="#fff">
                                                        
                                <div className="one_half">
                                	<p className="has-animation" data-delay="0">Get in Touch</p>
                                    <h3 className="has-mask" data-delay="0">Drop me a message</h3>
                                </div>
                                
                                <hr/><hr/>
                                    
                                 <div id="contact-formular" className="bigger-form disable-drag">
                                
                                    <div id="message"></div>
                                
                                    <form method="post" action="" name="contactform" id="contactform">                             
                                        <div className="name-box has-animation" data-delay="100">        
                                            <input name="name" type="text" required id="name" size="30"  placeholder="Name"/><label className="input_label"></label>
                                        </div>                                                        
                                        <div className="email-box has-animation" data-delay="150">
                                            <input name="email" type="text" id="email" size="30" placeholder="E-mail"/><label className="input_label"></label>
                                        </div>                            
                                        <div className="message-box has-animation" data-delay="100">
                                            <textarea name="comments" required cols="40" rows="4" id="comments" placeholder="Message" ></textarea><label className="input_label slow"></label>
                                        </div>                             
                                        <div className="button-box has-animation" data-delay="100">             
                                            <div className="clapat-button-wrap circle parallax-wrap bigger">
                                                <div className="clapat-button parallax-element">
                                                	<div className="button-border outline parallax-element-second"><input type="submit" className="send_message" id="submit" value="Submit" /></div>
                                                </div>
                                            </div> 
                                        </div>
                                    </form>                        
                                                            
                                </div>
                             
                            </div>
                             
                        
                        </div>
                        

                        <div id="page-nav">
                            <div className="next-page-wrap">
                                <div className="next-page-title">
                                    <div className="inner">                                        
                                        <div className="page-title-wrapper has-animation">
                                        <Link href="/about">
                                        	<a className="page-title next-ajax-link-page disable-drag" data-type="page-transition" data-firstline="More" data-secondline="Works">
                                            	<h1 className="hero-move-title title-reverse-backward"><span>More</span></h1>
                                    			<h1 className="hero-move-title title-reverse-forward"><span>About Me</span></h1>
                                            </a>
                                            </Link>
                                        </div>
                                    </div>                   
                                </div>
                            </div>
                        </div>      
                        
                                
                    </div>
                    </div>
            <Footer/>
        </>
    )
}

export default Contact;