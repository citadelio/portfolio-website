import Router from 'next/router'
export default function BlogHero({name, image,date, prev = false}) {
    return (<>
        <div id="hero" className="has-image autoscroll">
        <div id="hero-styles">
            <div id="hero-caption" className="reverse-parallax-onscroll">
                <div className="inner">
                {
                            prev && <span className="pointer backBtn" onClick={()=>Router.back()}>&#8656; Back</span>
                        }
                    <div className="hero-subtitle">{new Date(date).toDateString()}</div>
                    <div className="hero-title"><span>{name}</span></div>                                    
                </div>
            </div>
            <div id="hero-footer">
                <div className="hero-footer-left">
                    <div className="button-wrap left disable-drag scroll-down">
                        <div className="icon-wrap parallax-wrap">
                            <div className="button-icon parallax-element">
                                <i className="fa fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="button-text sticky left"><span data-hover="Scroll or drag to navigate">Scroll or drag to navigate</span></div> 
                    </div>
                </div>
                <div className="hero-footer-right">
                    <div id="share" className="page-action-content disable-drag" data-text="Share:"></div>
                </div>
            </div>                                    
        </div>
    </div>
    <div id="hero-image-wrapper">
        <div id="hero-background-layer" className="parallax-scroll-effect">
            <div id="hero-bg-image" style={{backgroundImage:`url(${image})`}}></div>
        </div>
    </div>     
   </> )
}
