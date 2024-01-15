import React from 'react'
import Image from '../../../asset/images/step 5.png'
import Image2 from '../../../asset/images/step 6.png'
import Image3 from '../../../asset/images/step 7.png'
import './detail-video.css'

const DetailVideo = () => {
  return (
    <>
        <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-7 py-5">
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/p28wMbunulQ" title="YouTube video"
                            allowfullscreen></iframe>
                    </div>
                    <div>
                        <p className="mt-3 beef1">Beef Steak with Curry Sauce - [Step 4] <br/> Cut the condiment and then mix
                            it <br/> <span className="hana1">3 month ago</span></p>
                    </div>
                </div>
                <div className="col-5 py-5 px-5">
                    <p className="beef-wrapper next">Next</p>
                    <div className="row">
                        <div className="col beef-wrapper">
                            <img src={Image} alt="step-5" className="step-5"/>
                        </div>
                        <div className="beef-wrapper">
                            <p className="mt-3 beef2">Beef Steak with Curry Sauce - [Step 5] <br/> Saute condiments together
                                until
                                turn brown <br/> <span className="hana2">HanaLohana - 3 month ago</span></p>
                        </div>
                        <div className="col beef-wrapper">
                            <img src={Image2} alt="step-6" className="step-5"/>
                        </div>
                        <div className="beef-wrapper">
                            <p className="mt-3 beef2">Beef Steak with Curry Sauce - [Step 6] <br/> SRoast beef until it’s
                                medium rare <br/> <span className="hana2">HanaLohana - 3 month ago</span></p>
                        </div>
                        <div className="col beef-wrapper">
                            <img src={Image3} alt="step-7" className="step-5"/>
                        </div>
                        <div className="beef-wrapper">
                            <p className="mt-3 beef2">Beef Steak with Curry Sauce - [Step 7] <br/> Roast beef until it’s
                                medium rare <br/> <span className="hana2">HanaLohana - 3 month ago</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DetailVideo