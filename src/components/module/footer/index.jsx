// import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center end">
                    <p className="eat">Eat, Cook, Repeat</p>
                    <p className="share">Share your best recipe by uploading here !</p>
                    <div className="row">
                        <div className="col offset-4">
                            <ul className="d-flex justify-content-center">
                                <li className="mt-5 mx-2">Product</li>
                                <li className="mt-5 mx-2">Company</li>
                                <li className="mt-5 mx-2">Learn more</li>
                                <li className="mt-5 mx-2">Get in touch</li>
                            </ul>
                        </div>
                        <div className="col">
                            <p className="mt-5 copyright">&copy;Arkademy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer