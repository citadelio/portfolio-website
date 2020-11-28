import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => {
  return ( 
  <>
   <div id="main"> 
    <Hero sub="Hi there 👋" main="Hussein here"/>

      <div id="main-content">
          <div id="main-page-content">  
            <div className="vc_row row_padding_bottom">            
                                      
                <div className="one_third">
                    <h4 className="has-mask" data-delay="0">I build scalable digital solutions.</h4>
                </div>
                <div className="two_third last">
                    <p className="has-animation" data-delay="400">I'm a Software Engineer from Port Harcourt, Nigeria🇳🇬. with a knack for creating engaging and immersive experience on the Web and on Mobile. A little more <Link href="/about" ><a className="sidelink ajax-link" data-type="page-transition">About me</a></Link> <br/> I've worked on a number of really interesting <Link href="/portfolio" ><a className="sidelink ajax-link" data-type="page-transition">Projects</a></Link> 
                     and written a few technical <Link href="/articles" ><a className="sidelink ajax-link" data-type="page-transition">Articles</a></Link> 
                     </p>
            
                    
                </div>
            
            </div>
          </div>  
      </div>  
      </div>  


      <Footer/>
  </>
  )
}

export default Home;