import React from 'react'
import Hero from '../../components/BlogHero'
import Footer from '../../components/Footer'
import Head from 'next/head'

const Title = ({post}) => {
    console.log(post)
    return (<>
    <Head>
    <title>{post.title} by Hussein Warrake</title>
    </Head>
         <div id="main"> 
        <Hero name={post?post.title:""} image={post?post.feature_image:""} date={post.created_at}/>
        <div id="main-content">
                        <div id="main-page-content">
                            
                            <div className="vc_row row_padding_top row_padding_bottom">
                                <div className="two_third">
                                	<h4 className="has-mask" data-delay="0">{`${post.reading_time} ${post.reading_time>1?"mins":"min"} read`}</h4>
                                    <p className="has-animation" data-delay="400" dangerouslySetInnerHTML={{__html:post.excerpt}}></p>
                                </div>  
                            </div>
                            
                          
                          <div className="vc_row row_padding_top dark-section" dangerouslySetInnerHTML={{__html:post.html}} data-bgcolor="#202020"></div>

                        </div>
                         
                                   
                    </div>
</div>

        <Footer/>
       </>)
}

export const getStaticProps = async ({params}) => {
    const res = await fetch(`${process.env.API_URL}/posts/slug/${params.title}/?key=${process.env.CONTENT_API_KEY}`)
    const post = await res.json();
    return{
        props:{
            post: post.posts[0]
        }
    }
}


export const getStaticPaths = async () => {
    return {
        paths : [],
        fallback : 'blocking'
    }
}
export default Title;