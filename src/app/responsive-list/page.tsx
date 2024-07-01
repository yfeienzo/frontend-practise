import Image from "next/image";

export default function Home() {
    return (
        <div className="flex w-[1440px] h-auto justify-center font-poppins items-center bg-[#fafafa] text-[#bbbbbd] text-[15px] mb-8">
            <div className="w-[320px] h-auto mt-10">
                <div className="mb-12">
                    <div className="text-[#8a898f] text-[20px]">Reliable, efficient delivery</div>
                    <div className="font-bold text-[#474654] text-[22px]">Powered by Technology</div>
                    <div>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</div>
                </div>
                <div className="border-t-4 border-t-[#49cfd0] p-6 rounded-lg bg-white shadow-2xl flex flex-col mb-6">
                    <div className="font-bold text-[#474654] text-[20px] mb-2">Supervisor</div>
                    <div className="mb-10">Monitors activity to identify project roadblocks</div>
                    <Image
                        src="/responsive-list/icon-supervisor.svg"
                        alt="article"
                        width={50}
                        height={50}
                        className="self-end"
                    />
                </div>
                <div className="border-t-4 border-t-[#da5c5f] p-6 rounded-lg bg-white shadow-2xl flex flex-col mb-6">
                    <div className="font-bold text-[#474654] text-[20px] mb-2">Team Builder</div>
                    <div className="mb-10">Scans our talent network to create the optimal team for your project</div>
                    <Image
                        src="/responsive-list/icon-team-builder.svg"
                        alt="article"
                        width={50}
                        height={50}
                        className="self-end"
                    />
                </div>
                <div className="border-t-4 border-t-[#f5ae56] p-6 rounded-lg bg-white shadow-2xl flex flex-col mb-6">
                    <div className="font-bold text-[#474654] text-[20px] mb-2">Karma</div>
                    <div className="mb-10">Regularly evaluates our talent to ensure quality</div>
                    <Image
                        src="/responsive-list/icon-karma.svg"
                        alt="article"
                        width={50}
                        height={50}
                        className="self-end"
                    />
                </div>
                <div className="border-t-4 border-t-[#589dea] p-6 rounded-lg bg-white shadow-2xl flex flex-col mb-6">
                    <div className="font-bold text-[#474654] text-[20px] mb-2">Calculator</div>
                    <div className="mb-10">Uses data from past projects to provide better delivery estimates</div>
                    <Image
                        src="/responsive-list/icon-calculator.svg"
                        alt="article"
                        width={50}
                        height={50}
                        className="self-end"
                    />
                </div>
            </div>
        </div>
    )
}
