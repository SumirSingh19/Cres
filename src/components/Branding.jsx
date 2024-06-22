import VIDEO from "../assets/vid1.mp4";
import PHOTO1 from "../assets/1.jpg";
import PHOTO2 from "../assets/2.jpg";
import PHOTO3 from "../assets/3.jpg";

const Branding = () => {
    return (
        <div className="flex sm:flex-col items-center justify-evenly px-60 2xl:px-28 xl:px-24 sm:px-10 gap-36 xl:gap-16 sm:gap-5 py-10 xl:py-20">
            <div className="h-[39rem] 2xl:mb-96 xl:h-[16rem] xl:mb-96">
                <video src={VIDEO} autoPlay loop muted className="2xl:p-20"></video>
            </div>
            <div className="flex flex-col gap-10 2xl:pb-20">
                <div className="flex flex-col gap-16 sm:gap-8">
                    <div className="flex flex-col gap-10 sm:gap-5 xl:pt-10">
                        <span className="text-7xl 2xl:text-8xl sm:text-5xl font-semibold font-inter">Branding</span>
                        <span className="text-[#525252] text-3xl 2xl:text-4xl sm:text-xl font-semibold font-poppins italic">“Want to Boost Your Business with Marketing, Reels & SEO?”</span>
                        <div className="leading-6 w-11/12">
                            <span className="font-poppins text-xs 2xl:text-base xl:text-sm sm:text-[0.6rem] tracking-wider sm:tracking-tight text-left">
                                Elevate your brand with dynamic marketing campaigns captivating reels and strategic SEO. Share your ideas, and let’s create something amazing together.
                            </span>
                        </div>
                        
                    </div>
                    <div>
                        <button className="bg-[#222222] text-white text-sm sm:text-[0.6rem] font-inter rounded-full px-9 sm:px-5 py-3 sm:py-1.5">
                            <span>Become our Client</span>
                        </button>
                    </div>
                </div>
                <div className="flex gap-5 sm:gap-3">
                    <img src={PHOTO1} className="w-[12rem] 2xl:w-[16rem] sm:w-[6rem] sm:h-[6rem]" alt="" />
                    <img src={PHOTO2} className="w-[12rem] 2xl:w-[16rem] sm:w-[6rem] sm:h-[6rem]" alt="" />
                    <img src={PHOTO3} className="w-[12rem] 2xl:w-[16rem] sm:w-[6rem] sm:h-[6rem]" alt="" />
                </div>
            </div>
        </div>
    )
};

export default Branding;