import React from "react";
// import buildingimage from './assets/banner-building-image.jpg'
import "./assets/styles/_index.scss"
import { Container} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import BannerImg from "./assets/bannerimg2.jpg";

const BannerImage = ({bannerDet}) => {
    // console.log("$$$$---", bannerDet)
    return (
        <>    
        <section className="bannerimage-wrapper">
            <img src={BannerImg} alt="" className="img-fluid" />
            <div className="banner-content d-flex align-items-center">
                <Container>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce offset={100}>
                        {/* <div className="banner-title">sadkl</div>
                        <div className="banner-title-detail">asda</div> */}
                        <div className="title-section">
                            <div className="word">Welcome</div>
                            <div className="word">To</div>
                            <div className="word">CartRabbit</div>
                            <div className="word">Travels</div>
                        </div>
                    </ScrollAnimation>
                </Container>
            </div>
        </section>
        </>
    )
}

export default BannerImage
