// import React from 'react'
import Navbar from '../../components/module/navbar'
import Footer from '../../components/module/footer'
// import { Outlet } from 'react-router-dom'
import Image from '../../../asset/images/boiled-egg.png'
import Image2 from '../../../asset/images/Group 687.svg'
import Image3 from '../../../asset/images/ramen.jpeg'
import Image4 from '../../../asset/images/bone broth ramen.jpeg'
import Image5 from '../../../asset/images/chicken-kare.png'
import Image6 from '../../../asset/images/bomb-chicken.png'
import Image7 from '../../../asset/images/banana-smoothie.png'
import Image8 from '../../../asset/images/cake-coffee.png'
import Image9 from '../../../asset/images/salmon-sugar.png'
import Image10 from '../../../asset/images/salad-indian.png'
// import { Link } from 'react-router-dom'
// import {useSelector, useDispatch} from 'react-redux'
import './home.css'
import { Link } from 'react-router-dom'


const Main = () => {

    // const stateGlobal = useSelector({state}=>state)
    // const dispatch = useDispatch()


  return (
    <>
    <Navbar/>

    <section id="hero">
        <div className="container-fluid">
            <div className="container">
                <div className="row position-relative hero-tagline">
                    <div className="col-md-6 d-flex align-items-center px-5 cek1">
                        <h1>Discover Recipe <br/> & Delicious Food</h1>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center cek2">
                        <img src={Image} alt="boiled-egg" className="image-tagline"/>
                    </div>
                    <div className="position-absolute px-5 input-search">
                        <input type="text" id="searchRestaurant" className="inp-search"
                            placeholder="search restaurant, food"></input>
                    </div>
                    <div className="position-absolute px-5 glass">
                        <img src={Image2} alt="search" className="magnifying"/>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="popular">
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md position-relative px-5">
                        <div className="rectangle-popular">
                            <div className="col-md position-absolute for">
                                <h5 className="you1">Popular For You !</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="container">
                <div className="row position-relative all-wrapper">
                    <div className="col-md-6 px-5">
                        <div className="bread-wrapper position-relative">
                            <img src={Image3} alt="bread-toast" className="bread z-3 position-absolute"/>
                            <div className="bread-bor z-1 position-absolute "></div>
                        </div>
                    </div>
                    <div className="col-md-6 healthy-wrapper d-flex align-items-center justify-content-center">
                        <h2 className="healthy">Healthy Bone Broth <br/> Ramen (Quick & Easy)</h2>
                    </div>
                    <div className="position-absolute line1"></div>
                    <div className="col-md position-relative px-5">
                        <p className="position-absolute quick">Quick + Easy Chicken Bone Broth Ramen- <br/> Healthy chicken
                            ramen in a hurry? That’s right!</p>
                    </div>
                    <div className="position-relative">
                        <button type="button" className="position-absolute learn"><Link to="/detail-recipe">Learn More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md position-relative px-5">
                    <div className="rectangle-new">
                        <div className="col-md position-absolute for">
                            <h5 className="you">New Recipe</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-md-fluid position-relative">
        <div className="z-1 position-absolute rectangle-section"></div>
        <div className="container">
            <div className="row position-relative all-wrapper">
                <div className="col-md-6 px-5">
                    <div className="burger-wrapper">
                        <img src={Image4} alt="burger" className="z-3 position-absolute bread"/>
                        <div className=""></div>
                    </div>
                </div>
                <div className="col-md-6 healthy-wrapper d-flex align-items-center justify-content-center">
                    <h2 className="healthy">Healthy Bone Broth <br/> Ramen (Quick & Easy)</h2>
                </div>
                <div className="position-absolute line1"></div>
                <div className="col-md position-relative px-5">
                    <p className="position-absolute quick">Quick + Easy Chicken Bone Broth Ramen- <br/> Healthy chicken ramen
                        in a hurry? That’s right!</p>
                </div>
                <div className="position-relative">
                    <button type="button" className="position-absolute learn"><a href="detail-recipe.html">Learn More</a></button>
                </div>
            </div>
        </div>
    </div>


    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md position-relative px-5">
                    <div className="rectangle-recipe">
                        <div className="col-md position-absolute for">
                            <h5 className="you2">Popular Recipe</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col popularRecipe px-5 position-relative">
                    <img src={Image5} alt="chicken-kare"/>
                    <p className="kare-text position-absolute">Chiken <br/> Kare</p>
                </div>
                <div className="col popularRecipe position-relative">
                    <img src={Image6} alt="bomb-chicken"/>
                    <p className="bomb-text position-absolute">Bomb <br/> Chicken</p>
                </div>
                <div className="col popularRecipe position-relative">
                    <img src={Image7} alt="banana-smoothie"/>
                    <p className="smoothie-text position-absolute">Banana <br/> Smothie Pop</p>
                </div>
            </div>
            <div className="row">
                <div className="col popularRecipe px-5 position-relative">
                    <img src={Image8} alt="cake-coffee"/>
                    <p className="lava-text position-absolute">Coffee Lava <br/> Cake</p>
                </div>
                <div className="col popularRecipe position-relative">
                    <img src={Image9} alt="salmon-sugar"/>
                    <p className="bomb-text position-absolute">Sugar <br/> Salmon</p>
                </div>
                <div className="col popularRecipe position-relative">
                    <img src={Image10} alt="salad-indian"/>
                    <p className="smoothie-text position-absolute">Indian <br/> Salad</p>
                </div>
            </div>
        </div>
    </div>
    
    <Footer/>
    </>

  )
}

export default Main