import Link from 'next/link'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Head from 'next/head'
const About = () => {
    return (
        <>
        <Head>
        <script src="https://kit.fontawesome.com/16bdfaf312.js" crossorigin="anonymous"></script>
        </Head>
         <div id="main"> 
            <Hero sub="I love 💛" main="Video Games"/>

            <div id="main-content">
                        <div id="main-page-content">
                            
                            <div className="vc_row row_padding_bottom">            
                                    
                                <div className="one_third">
                                    <h4 className="has-mask" data-delay="0">A Short Story</h4>
                                </div>
                                <div className="two_third last">
                                    <p className="has-animation" data-delay="400">Growing up during the early years of broadband penetration in Nigeria, My dad had just got this new mobile phone with a 2G internet connection. I'd frequently take his phone without his knowledge and surf through myriads of contents on the internet (Most times I got busted when the phone rings, until I learnt there was a mute setting). That little feature phone pricked my interest for Technology, the Internet and Softwares
                                    </p>

                                    <p className="has-animation" data-delay="500">
                                    Several years later, I had gotten myself a PC, taught myself to code, and was fascinated by how powerful technology can be in changing how people live their lives. Today, I am helping drive that change by creating truly engaging and user centered experiences on the Web and on Mobile.
                                    </p>

                                    <p className="has-animation" data-delay="600">
                                    One of such technologies that endears to me is the development of Progressive Web Apps (PWA's). PWA's are Fast, Lightweight, Engaing, Installable without taking much disk space, can work offline and allows for push messaging. Thus it is indeed the technology that'll be adopted by most of the Next Billion Users to come online.
                                    </p>
                                    
                                </div>
                            
                            </div>
                            
                        
                            
                            <div className="vc_row row_padding_top dark-section" data-bgcolor="#202020">
                                
                                <div className="two_third">
                                	<p className="has-animation">You should know</p>
                                    <br/>
                                	<h2 className="has-mask">I am passionate about computer programming. It’s the one thing I think I could do for free.</h2>
                                </div>
                                
                                <div className="one_third last"></div>
                                
                                <hr/><hr/><hr/>
                                
                            </div>
                           
                            <div className="vc_row">
                                
                                <div className="row-half-color first half-dark-section" data-bgcolor="#202020"></div>
                                <div className="row-half-color second half-white-section" data-bgcolor="#141414"></div>
                                                        
                                <div className="swiper-container about-image content-carousel disable-drag">
        							<div className="swiper-wrapper">
            							<div className="swiper-slide">
                                        	<img src="/images/h1.jpeg" alt="Image Title"/>
                                        </div>
                                        <div className="swiper-slide">
                                        	<img src="images/h3.jpg" alt="Image Title"/>
                                        </div>
                                        <div className="swiper-slide">
                                        	<img src="images/h2.jpg" alt="Image Title"/>
                                        </div>
                                       
                                        <div className="swiper-slide">
                                        	<img src="images/h4.jpg" alt="Image Title"/>
                                        </div>
                                       
                                    </div>   
                                </div>
                            
                            </div>
                           
                            <div className="vc_row">
                                
                                <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr className="white-line has-animation"/><hr/><hr/><hr/><hr/>
                                
                                
                                	<h1 className="has-mask">Cool technologies, cooler gadgets, processing power, plenty of RAM, a clear plan, internet access, headphones and it’s a party for me!</h1>                                
                                
                                
                             
                                <hr/><hr/>   
                                <div className="one_half"></div>
                                <div className="one_half last">
                                    <h5 className="has-mask">Web Development</h5>
                                    <hr className="white-line has-animation"/><br/><br/>
                                    <p className="has-animation" data-delay="200">I build responsive websites that are highly performant and scalable, designed to make your business stand out online. My works hinges on simplicity with a focus on clean codes, speed and an excellent user experience to create websites that’s both modern and timeless.</p><hr/><hr/>
                                    
                                </div>
                                                            
                                    
                                <div className="one_half"></div>
                                
                                <div className="one_half last">
                                    <h5 className="has-mask">Mobile Development</h5>
                                    <hr className="white-line has-animation"/><br/><br/>
                                    <p className="has-animation" data-delay="200">With proficiency in technologies like <b>React Native</b>, I help make beautifully designed mobile apps for Android and iOS.</p><hr/><hr/>
                                </div>

                                <div className="one_half"></div>
                                
                                <div className="one_half last">
                                    <h5 className="has-mask">Product Design</h5>
                                    <hr className="white-line has-animation"/><br/><br/>
                                    <p className="has-animation" data-delay="200">I'm gradually making a transition from engineering into product design, basically because it is important for businesses to build customer centered products that meets the underlying needs of their customers</p>
                                </div>
                            
                            
                            </div>
                            
                            
                            <div className="vc_row row_padding_top">
                            	<div className="one_half">
                                	<p className="has-animation">Tech Skills</p>
                                    <br/>
                                    <h2 className="has-mask">I love to take code to production… I love the ‘god’ feeling I get when I see someone served by my innovation.</h2>
                                </div>
                                <hr/><hr/>
                                <ul className="clients-table has-animation" data-delay="10">                        
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-html5 fa-5x"></i>
                                        <h5>HTML</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-css3 fa-5x"></i>
                                        <h5>CSS</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-js fa-5x"></i>
                                        <h5>JavaScript</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-react fa-5x"></i>
                                        <h5>ReactJS</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-react fa-5x"></i>
                                        <h5>React Native</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-js-square fa-5x"></i>
                                        <h5>NextJS</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-node-js fa-5x"></i>
                                        <h5>nodeJS</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-php fa-5x"></i>
                                        <h5>PHP</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-laravel fa-5x"></i>
                                        <h5>Laravel</h5>
                                    </li>
                                    <li className="link has-animation" data-delay="150">
                                        <i className="fab fa-birthday-cake fa-5x"></i>
                                        <h5>CakePHP</h5>
                                    </li>
                                  
                                </ul>
                                
                            </div>
                            
                            
                            
                            
                        
                        </div>
                      
                        <div id="page-nav">
                            <div className="next-page-wrap">
                                <div className="next-page-title">
                                    <div className="inner">                                        
                                        <div className="page-title-wrapper has-animation">
                                            <Link href="/portfolio">
                                        	<a className="page-title next-ajax-link-page disable-drag" data-type="page-transition" data-firstline="Next" data-secondline="Page">
                                            	<h1 className="hero-move-title title-reverse-backward"><span>See </span></h1>
                                    			<h1 className="hero-move-title title-reverse-forward"><span>Portfolio</span></h1>
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

export default About;