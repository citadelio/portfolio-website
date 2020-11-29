import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
      <title>Hussein Warrake - Software Engineer | Tech Enthusiast | Gadget Lover</title>
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta name="description" content="Hussein is a software engineer with a knack for creating engaging and immersive experience on the Web and on Mobile." />
      <meta name='keywords' content="Hussein, Warrake, Portfolio, Personal website, Reactjs, Nextjs, Web developer, Software, Software engineer, programmer" />
      <meta name="author" content="Hussein Warrake"/>
      <meta charSet="UTF-8" />    
      <link rel="icon" type="image/ico" href="/favicon.ico" />
      <link href="/style.css" rel="stylesheet" />
      <link href="/css/font-awesome.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet"/>

        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000"/>
  </Head>
  {/* <body className="hidden hidden-ball smooth-scroll drag-scroll">	 */}
  <main>		
      <div className="preloader-wrap" data-firstline="Stay" data-secondline="Relaxed">
          <div className="outer">
              <div className="inner">
                  <div className="preloader-marquee-mask">
                      <div className="preloader-marquee-wrapper">
                          <div className="preloader-marquee" data-text="Expect Something Awesome!🔥 Expect Something Awesome!🔥">Expect Something Awesome! 🔥 Expect Something Awesome! 🔥</div>
                      </div>
                  </div>
                  
                  <div className="preloader-marquee-wrapper stroked">
                      <div className="preloader-marquee" data-text="Expect Something Awesome!🔥 Expect Something Awesome!🔥">Expect Something Awesome! 🔥 Expect Something Awesome! 🔥</div>
                  </div>
                  
                  <div className="percentage-wrapper"><div className="percentage" id="precent"></div></div>
                  <div className="trackbar">
                      <div className="loadbar"></div>
                  </div>                     
              </div>
          </div>
      </div>
      
      <div className="cd-index cd-main-content">
  
      <div id="page-content" className="light-content" data-bgcolor="#141414">
          
          <header className="fullscreen-menu">
              <div id="header-container">
              
              
                  <Link  href="/">
                    <a className="ajax-link" data-type="page-transition">
                    <div id="logo" className="hide-ball disable-drag">
                      <img className="black-logo" src="/images/logo.png" alt="Hussein Logo"/>
                      <img className="white-logo" src="/images/logo-white.png" alt="Hussein Logo"/>
                    </div>
                    </a>
                  </Link>
              
              <nav> 
                <div className="nav-height">
                      <div className="outer">
                          <div className="inner">           
                              <ul data-breakpoint="10025" className="flexnav">
                                 
                                  <li className="link menu-timeline">
                                  <Link href="/">
                                    <a className="ajax-link" data-type="page-transition"><div className="before-span"><span data-hover="Home">Home</span></div></a>
                                    </Link>
                                    </li>
                                 
                                  <li className="link menu-timeline">
                                    <Link href="/about">
                                    <a className="ajax-link" data-type="page-transition"><div className="before-span"><span data-hover="About">About</span></div></a>
                                    </Link></li>

                                    <li className="link menu-timeline">
                                  <Link href="/portfolio"><a className="ajax-link" data-type="page-transition"><div className="before-span"><span data-hover="Portfolio">Portfolio</span></div></a></Link>
                                  </li>

                                  <li className="link menu-timeline">
                                  <Link href="/articles"><a className="ajax-link" data-type="page-transition"><div className="before-span"><span data-hover="Articles">Articles</span></div></a></Link>
                                    </li>

                                  <li className="link menu-timeline">
                                  <Link href="/contact">
                                    <a className="ajax-link" data-type="page-transition"><div className="before-span"><span data-hover="Reach Me">Reach Me</span></div></a>
                                    </Link>
                                    </li>
                                  

                                   
                               
                              </ul>            
                          </div>
                      </div> 
                  </div>          
              </nav>
             
             
              <div className="button-wrap right menu disable-drag">
                  <div className="icon-wrap parallax-wrap">
                      <div className="button-icon parallax-element">
                          <div id="burger-wrapper">
                              <div id="menu-burger">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="button-text sticky right"><span data-hover="Menu">Menu</span></div> 
              </div>
           
          
              </div>
          </header>
         
          
         
          
       
          <div id="content-scroll">
          
          
           
                            
                  
                 
                  <Component {...pageProps} />
                                       
                 
            
       
        </div>
        
          
          
          <div id="app"></div>
  </div>    
    
  
  </div>
</main>
  
  
  
  
  <div className="cd-cover-layer"></div>
  <div id="magic-cursor">
      <div id="ball">
        <div id="ball-drag"></div>
        <div id="ball-loader"></div>
      </div>
  </div>
  <div id="clone-image"></div>
  <div id="rotate-device"></div>
  {/* </body> */}
  <script src="/js/jquery.min.js"></script>
    <script src="/cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>    
    <script src="/cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js" ></script>
    <script src="/cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/utils/Draggable.min.js" ></script>
    <script src='/cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.js'></script>
	<script src='/cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.js'></script>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpK1sWi3J3EbUOkF_K4-UHzi285HyFX5M&amp;sensor=false"></script>
	<script src="/js/plugins.js"></script>
    <script src="/js/scripts.js"></script>
  </>
}

export default MyApp
