import React from 'react'
import './footer.css'
import { Copyright } from '../CopyRight/Copyright'

export const Footer = () => {
  return (
    <div>
    <footer>
        <div className="div__footer">
            <div className="container">
                <div className="boxes__footer">
                    <div className="box__footer__left">
                        <div className="boxes__menu">
                            <h3 className="titr__menu">Navigate</h3>
                            <div className="menu__footer">
                                <ul className="menus">
                                    <i className="item__menu__footer">About Us</i>
                                    <i className="item__menu__footer">Blog</i>
                                    <i className="item__menu__footer">Contact Us</i>
                                    <i className="item__menu__footer">Sitemap</i>
                                </ul>
                            </div>
                        </div>
                        <div className="boxes__menu">
                            <h3 className="titr__menu">Categories</h3>
                            <div className="menu__footer">
                                <ul className="menus">
                                    <i className="item__menu__footer">New Arivales</i>
                                    <i className="item__menu__footer">Featurd</i>
                                    <i className="item__menu__footer">Catalog</i>
                                    <i className="item__menu__footer">Popular Brands</i>
                                </ul>
                            </div>
                        </div>
                        <div className="boxes__menu">
                            <h3 className="titr__menu">Collection</h3>
                            <div className="menu__footer">
                                <ul className="menus">
                                    <i className="item__menu__footer">Tables</i>
                                    <i className="item__menu__footer">Lamps</i>
                                    <i className="item__menu__footer">Chairs</i>
                                    <i className="item__menu__footer">Sofas</i>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="box__footer__right">
                        <div className="box__txt__addres">
                            <h2 className="txt__addres">
                                123 Widget Street <br/>
                                Acmevilla, AC 12345
                            </h2>
                        </div>
                        <div className="box__text__contact">
                            <p className="txt__contact">
                                hello@stilecompany.co <br/>
                                +1-512-758-7588
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    
        <Copyright/>
    </div>

  )
}
