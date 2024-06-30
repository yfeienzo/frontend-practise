import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Home() {
    return (
        <div className="flex h-screen justify-center items-center bg-[#f2ebe5]">
            <div className="w-[320px] bg-white rounded-2xl font-montserrat text-[#7d7d85] text-[14px]">
                <Image
                        src="/responsive-product/product-mobile.jpg"
                        alt="article"
                        className="rounded-t-2xl"
                        width={320}
                        height={200}
                    />
                <div className="p-6 ">
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
