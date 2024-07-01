import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Home() {
    return (
        <div className="flex h-screen justify-center items-center bg-[#f2ebe5]">
            <div className="w-[320px] bg-white rounded-2xl font-montserrat text-[#7d7d85] text-[14px] flex flex-col lg:flex-row lg:w-[600px]">
                <div className="w-[320px] h-[200px] bg-cover rounded-t-2xl bg-[url('/responsive-product/product-mobile.jpg')] lg:bg-[url('/responsive-product/product-desktop.jpg')] lg:h-auto lg:w-[200px] lg:rounded-tr-none lg:rounded-l-2xl"></div>
                <div className="p-6 lg:w-[400px]">
                    <div className="mb-2">P E R F U M E</div>
                    <div className="font-fraunces text-[26px] leading-8 mb-3 text-[#1e2629]">Gabrielle Essence Eau De Parfum</div>
                    <div className="mb-3">A floral, solar and voluptuous interpretation composed by oliver Polge, Perfumer-creator for the House of CHANEL.</div> 
                    <span className="font-fraunces text-[26px] text-[#3d8168]">$149.99</span><span className="ml-5 inline-block line-through align-top leading-10">$169.99</span>
                    <div className="mt-3 cursor-pointer h-[45px] rounded-lg flex items-center justify-center font-bold text-white bg-[#3d8168]"><div className="flex items-center"><AiOutlineShoppingCart /><div className="ml-2">Add to Cart</div></div></div>
                </div>
            </div>
        </div>
    )
}
