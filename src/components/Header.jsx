import LOGO from "../assets/f0211ba9161f004f374318662479997c.png";
import IMG1 from "../assets/b614eefe240fdce50a0faf61ce764c85.svg";
import IMG2 from "../assets/e4d27fdad426b5ebc0ae03c961ddddea.svg";
import IMG3 from "../assets/63a21ead849982c972e1c7a01fb709a5.svg";

const Header = () => {
    return (
        <div className="flex items-center bg-[#101010] w-[85rem] sm:w-[23rem] rounded-[2.5rem] sm:rounded-[1.7rem] mt-10 sm:mt-7 justify-between mx-20 sm:mx-3 px-10 sm:px-5">
            <div>
                <img src={LOGO} className="w-20 sm:w-10" alt="alt text" />
            </div>
            <div>
                <div className="flex gap-2 sm:gap-1 mt-7 sm:mt-3">
                    <img src={IMG1} className="rounded-full w-10 h-10 sm:w-7 sm:h-7" alt="alt text" />
                    <img src={IMG2} className="rounded-full w-10 h-10 sm:w-7 sm:h-7" alt="alt text" />
                    <img src={IMG3} className="rounded-full w-10 h-10 sm:w-7 sm:h-7" alt="alt text" />
                    <span className="text-white text-4xl sm:text-2xl">02:38</span>
                    <div className="flex flex-col text-sm sm:leading-3 sm:text-[0.63rem] sm:pt-1">
                        <span className="text-white">pm</span>
                        <span className="text-white">April 21</span>
                    </div>
                    
                </div>
                <div></div>
            </div>
        </div>
    )
};

export default Header;