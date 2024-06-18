import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen justify-center items-center bg-[#151515]">
            <div className="w-[384px] h-[522px] bg-[#1f1f1f] flex justify-center items-center p-6 rounded-2xl">
                <div className="w-[336px] text-[#f1f1f1] text-center">
                    <Image
                            src="/social-links/avatar.jpeg"
                            alt="avatar"
                            className="rounded-full mb-5 m-auto"
                            width={68}
                            height={68}
                    />
                   <p className="font-bold text-[22px] mb-1">Jessica Randall</p>
                   <p className="text-[#c4f82a] text-[13spx] mb-3">London, United Kingdoms</p>
                   <p className="text-[12px] mb-3">"Front-end developer and avid reader."</p>
                   <div className="bg-[#c4f82a] text-[#343433] text-[14px] font-bold rounded-md leading-8 mb-2 h-[32px]">Github</div>
                   <div className="bg-[#343433] text-[14px] font-bold rounded-md leading-8 mb-2 h-[32px]">Frontend Mentor</div>
                   <div className="bg-[#343433] text-[14px] font-bold rounded-md leading-8 mb-2 h-[32px]">Linkedin</div>
                   <div className="bg-[#343433] text-[14px] font-bold rounded-md leading-8 mb-2 h-[32px]">Twitter</div>
                   <div className="bg-[#343433] text-[14px] font-bold rounded-md leading-8 mb-2 h-[32px]">Instagram</div>
                </div>
            </div>
        </div>
    )
}