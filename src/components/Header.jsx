import { useState, useEffect } from 'react';
import LOGO from "../assets/f0211ba9161f004f374318662479997c.png";
import IMG1 from "../assets/image_19.png";
import IMG2 from "../assets/image_16.png";
import IMG3 from "../assets/img1.png";
import IMG4 from "../assets/image_20.png";

const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    // Formatting time to display in HH:mm format
    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    });

    // Formatting date to display in month day format
    const formattedDate = time.toLocaleDateString('en-IN', {
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="flex items-center bg-[#101010] rounded-[2.5rem] sm:rounded-[1.7rem] mt-10 sm:mt-7 justify-between mx-20 sm:mx-3 px-10 sm:px-5">
            <div>
                <img src={LOGO} className="w-20 sm:w-10" alt="alt text" />
            </div>
            <div>
                <div className="flex sm:items-center gap-3 sm:gap-1 mt-7 sm:mt-4">
                    <img src={IMG1} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover" alt="alt text" />
                    <img src={IMG2} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover" alt="alt text" />
                    <img src={IMG3} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover" alt="alt text" />
                    <img src={IMG4} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover" alt="alt text" />
                    <span className="text-white text-4xl sm:text-lg">{formattedTime}</span>
                    <div className="flex flex-col text-sm sm:leading-3 sm:text-[0.43rem] sm:pt-1">
                        <span className="text-white">{time.getHours() >= 12 ? 'pm' : 'am'}</span>
                        <span className="text-white">{formattedDate}</span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;
