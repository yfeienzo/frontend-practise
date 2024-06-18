import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen justify-center items-center bg-[#D5E1EF]">
            <div className="w-[320px] h-[497px] text-center bg-white rounded-2xl p-3">
                <Image
                src="/qr-code/image-qr-code.png"
                alt="qr code"
                className="rounded-2xl mb-5"
                width={288}
                height={288}
                />
                <p className="text-1xl font-bold text-[#1F314F] font-['Palatino'] text-[20px]">Improve your front-end skills by building projects</p>
                <p className="text-[#979797] text-[14px] p-3">Scan the QR code to visit frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}