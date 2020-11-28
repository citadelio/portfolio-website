
export default function BlogFooter() {
    return (
        <footer className="hidden">        	
        <div id="footer-container">
            
            <div className="button-wrap left disable-drag swiper-prev">
                <div className="icon-wrap parallax-wrap">
                    <div className="button-icon parallax-element">
                        <i className="fa fa-angle-left"></i>
                    </div>
                </div>
                <div className="button-text sticky left"><span data-hover="Prev Slide">Prev Slide</span></div> 
            </div>
            
            <div className="swiper-pagination disable-drag"></div>
            
            <div className="button-wrap right disable-drag swiper-next">
                <div className="icon-wrap parallax-wrap">
                    <div className="button-icon parallax-element">
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>
                <div className="button-text sticky right"><span data-hover="Next Slide">Next Slide</span></div> 
            </div>
            
        </div>
    </footer>
    )
}
