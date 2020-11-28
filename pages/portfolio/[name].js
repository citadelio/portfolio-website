import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/ProjectHero'
import {getProjectByName} from '../../store'
import Head from 'next/head'
const Single = ({project}) => {
    console.log(project)
    return (
        <>
        <Head>
        <title>{project.name} | {project.tagline} | by Hussein Warrake</title>
        </Head>
         <div id="main"> 
        <Hero name={project?project.name:""} image={project?project.images[0]:""}  prev={true} tagline={project.tagline}/>
           
        <div id="main-content">
                        <div id="main-page-content">
                            
                            <div className="vc_row row_padding_top row_padding_bottom">
                                <div className="two_third">
                                	<h4 className="has-mask" data-delay="0">About this project</h4>
                                    <p className="has-animation" data-delay="400">
                                        {project.metadata[0].details}
                                    </p>
                                </div>
                                <div className="one_third last text-align-right">                                
                                	<hr/>
                                    <div className="button-wrap right disable-drag has-animation" data-delay="350">
                                        <div className="icon-wrap parallax-wrap">
                                            <div className="button-icon parallax-element">
                                                <i className="fa fa-angle-right"></i>
                                            </div>
                                        </div>
                                        <a target="_blank" href={project.link}><div className="button-text sticky right"><span data-hover="Live Link">Live Link</span></div></a> 
                                    </div>
                                </div>   
                            </div>
                            
                          
                          <div className="vc_row row_padding_top dark-section" data-bgcolor="#202020">
                                
                                <div className="one_half">
                                	{/* <p className="has-animation" data-delay="0">Fully Responsive design</p> */}
                                	<h3 className="has-mask" data-delay="0">{project.tagline}</h3>
                                </div>
                                
                                <div className="one_half last"></div>
                                
                                <hr/><hr/><hr/>
                                
                            </div>
                           
                            <div className="vc_row dark-section" data-bgcolor="#202020">
                                
                                <div className="swiper-container content-carousel disable-drag">
        							<div className="swiper-wrapper">
                                {
                                    project.images.map((imageLink, index)=><div key={index} className="swiper-slide"><img src={imageLink} alt="Project Image"/></div>)
                                }
            							
                                        
                                    </div>   
                                </div>                                
                                
                            </div>
                           
                            <div className="vc_row row_padding_bottom dark-section" data-bgcolor="#202020">
                                
                                <hr/><hr/><hr/><hr/><hr className="white-line has-animation"/><hr/><hr/><hr/><hr/>
                                
                                <div className="three_fourth">
                                	<h1 className="has-mask">{project.categories}</h1>                                
                                </div>
                                
                                <div className="one_fourth last"></div>
                                
                                <div className="one_half"></div>
                                
                                <div className="one_half last">                    
                                    <p className="has-animation" data-delay="100">Project duration: <b>{project.date}</b></p>
                                </div>
                                
                            </div>
                    
              
                        </div>
                         
                                   
                    </div>
</div>

        <Footer/>
       </>
       )
}

export  const  getStaticProps = async ({params}) => {
    const project = getProjectByName(params.name)
    return {
        props: {
            project
        }
    }
}

export  const getStaticPaths = async () => {
    return {
        paths : [],
        fallback : 'blocking'
    }
}

export default Single;