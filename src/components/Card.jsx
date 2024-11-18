import mobilePic from "../assets/images/image-product-mobile.jpg";
import desktopPic from "../assets/images/image-product-desktop.jpg";
import cartIcon from "../assets/images/icon-cart.svg";
import Info from "./Info";
import Price from "./Price";

export default function Card() {
    return <div id="card" className="bg-pure-white rounded-lg max-w-88 m-auto flex flex-col md:flex-row md:max-w-2xl">
        <div id="product-pic">
            <img className="rounded-t-lg md:hidden" src={mobilePic} alt="a picture of Chanel Gabrielle perfume" />
            <img className="rounded-s-lg hidden md:flex" src={desktopPic} alt="a picture of Chanel Gabrielle perfume" />
        </div>
        <div className="flex flex-col md:max-w-[50%]">
        <Info />
        <Price />
        <button className="bg-light-aquamarine text-pure-white font-montserrat font-bold mx-6 mb-6 py-4 rounded-lg active:bg-white active:text-light-aquamarine active:border active:border-light-aquamarine md:hover:bg-deep-aquamarine md:active:bg-white md:mx-10 md:mb-7">
            <img src={cartIcon} alt="icon of a cart" className="inline-block mr-3 align-text-top"/>
            Add to Cart</button>
        </div>
    </div>
}