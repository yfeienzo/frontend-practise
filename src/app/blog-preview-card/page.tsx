import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen justify-center items-center bg-[#F4D04E]">
            <div className="w-[384px] h-[522px] bg-white flex justify-center p-6 rounded-2xl">
                <div className="w-[336px]">
                    <Image
                        src="/blog-preview-card/article.svg"
                        alt="article"
                        className="rounded-2xl mb-5"
                        width={336}
                        height={200}
                    />
                    <div className="bg-[#F4D04E] rounded-md w-[82px] h-[29px] justify-center font-bold text-[12px] flex items-center mb-3">Learning</div>
                    <p className="text-[14px] mb-3">Published 21 Dec 2023</p>
                    <div className="font-bold mb-3 text-[20px] hover:text-[#F4d04E] cursor-pointer">HTML & CSS foundations</div>
                    <p className="text-[#7F7F7F] text-[14px] mb-5">These languages are the backbone of every website, defining structure, content, and presentation</p>
                    <div className="flex">
                        <Image
                            src="/blog-preview-card/avatar.webp"
                            alt="avatar"
                            className="rounded-full"
                            width={32}
                            height={32}
                        />
                        <span className="font-bold text-[12px] mx-3 leading-8">Greg Hooper</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
