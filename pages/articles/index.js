import BlogFooter from "../../components/BlogFooter"
import Link from "next/link"



const Index = ({posts}) => {
    console.log(posts)
    return (<>
     <div id="main"> 
            <div id="main-content">
            
                                            
                <div id="showcase-carousel-holder" className="disable-drag"> 
                    <div id="itemsWrapperLinks">
                    
                        
                        <div id="showcase-slider" className="swiper-container">
                            <div id="itemsWrapper" className="swiper-wrapper">
                            
                            {
                                posts.map((post,index)=><div key={post.slug} className="swiper-slide" data-slide={index + 1}>                                            
                                <div className="img-mask">
                                    <div className="section-image"><img src={post.feature_image} className="item-image grid__item-img" alt=""/></div>                                                
                                    <img className="grid__item-img grid__item-img--large" src={post.feature_image} />                              
                                </div>
                                <div className="move-caption">
                                    <div className="outer">                            
                                        <div className="inner">
                                            <div className="move-title" data-swiper-parallax-x="-200%"><span>{post.title}</span></div>
                                            <Link href={`/articles/${post.slug}`}>
                                            <a data-type="page-transition"></a>
                                            </Link>
                                        </div>                            
                                    </div>
                                </div>
                                <div className="move-caption stroked">
                                    <div className="outer">                            
                                        <div className="inner">                        
                                          
                                        <div className="subtitle" data-swiper-parallax-x="-60%"><span>{new Date(post.created_at).toDateString()}</span></div>

                                            <div className="move-title thumb-link" data-swiper-parallax-x="-200%" data-firstline="View" data-secondline="Article"><span>{post.title}</span></div>

                                            <div className="subtitle" data-swiper-parallax-x="-60%"><span>
                                            {`${post.reading_time} ${post.reading_time>1?"minutes":"minute"} read`}</span></div>

                                        </div>                            
                                    </div>
                                </div>
                            </div>
                                    )
                            }
                                
                                
                               
                            </div>                                  
                        </div>
                        
                        
                    </div>                                     
                </div>    
                             
                    
        </div>
        </div>
    <BlogFooter/>
    </>)
}

export const getStaticProps =  async () => {
        const res = await fetch(`${process.env.API_URL}/posts/?key=${process.env.CONTENT_API_KEY}`)
        const posts = await res.json();
        return {
            props:{
                posts: posts.posts
            }
        }
}
export default Index;