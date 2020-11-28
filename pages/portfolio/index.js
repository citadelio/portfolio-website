import Link from 'next/link'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import { getAllProjects} from '../../store'
const Portfolio = ({projects}) => {
    return (
        <>
         <div id="main"> 
            <Hero sub="Digital 💼" main="Experiences"/>
            <div id="main-content">
                        <div id="main-page-content">
                            
                            
                            <div id="itemsWrapperLinks" className="portfolio-wrap">                
                                <div id="itemsWrapper" className="portfolio scattered-grid">
                                    {
                                      projects.map(project=><div key={project.id} className="item branding design tall disable-drag" data-item="1">
                                      <div className="item-parallax">
                                          <div className="item-appear">                                    		
                                              <div className="item-content">                            	               
                                              <Link href={`/portfolio/${project.name}`}>                  
                                                  <a className="item-wrap ajax-link-project" data-type="page-transition" ></a>
                                                </Link>   

                                                  <div className="item-wrap-image"><img src={project.images[1]} className="item-image grid__item-img" alt=""/></div>
                                                  <img className="grid__item-img grid__item-img--large" src={project.images[1]} />
                                              </div>                                             
                                          </div>
                                          <div className="item-caption-wrapper">
                                              <div className="item-caption">                                                                            
                                                  <h2 className="item-title">{project.name}</h2>
                                                  <h4 className="item-cat">{project.short_desc}</h4>                                                    
                                              </div>
                                          </div>
                                      </div>                                        
                                  </div>)
                                  }
                                </div>
                            </div>
                            
                        
                        </div>
                         
                        <div id="page-nav">
                            <div className="next-page-wrap">
                                <div className="next-page-title">
                                    <div className="inner">                                        
                                        <div className="page-title-wrapper has-animation">
                                            <Link href="/contact">
                                                <a className="page-title next-ajax-link-page disable-drag" data-type="page-transition" data-firstline="Next" data-secondline="Page">
                                                    <h1 className="hero-move-title title-reverse-backward"><span>Let's</span></h1>
                                                    <h1 className="hero-move-title title-reverse-forward"><span>Work Together</span>
                                                    </h1>
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

export  const  getStaticProps = async () => {
        const projects =  getAllProjects();
        return {
            props:{
                projects
            }
        }
}

export default Portfolio;