import Router from 'next/router'

export default function Hero({sub, main, prev = false}) {
    return (
        <div id="hero">
            <div id="hero-styles">
                <div id="hero-caption" className="parallax-onscroll">
                    <div className="inner">
                        {
                            prev && <span className="pointer backBtn" onClick={()=>Router.back()}>&#8656; Back</span>
                        }
                    <h1 className="hero-move-title title-backward"><span>{sub} </span></h1>
                        <h1 className="hero-move-title title-forward"><span>{main}</span></h1>
                    </div>
                </div>                                   
            </div>
        </div>  
    )
}
