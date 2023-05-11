import { Fade } from 'react-reveal';
import { ReactComponent as Blob } from './blob.svg';
import { ReactComponent as Hand } from './hand.svg';
import { ReactComponent as Flag } from './flag.svg';
import { ReactComponent as Map } from './map.svg';
import { ReactComponent as Arrow } from './arrow.svg';

const Header = (props) => {
    function scrollTo(ref) {
        if (!ref.current) return;
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="pt-10 md:pt-5 lg:mt-0 w-full bg-gradient-to-b from-indigo-600 dark:from-indigo-900 to-purple-900 dark:to-purple-900 shadow-md">
            <div className="w-full min-h-screen max-w-screen-xl px-5 mx-auto md:grid md:grid-cols-2 my-drop-shadow">
                <Fade top>
                    <div className="md:order-last flex items-center w-4/5 md:w-full mx-auto">
                        <Blob className="w-full"/>
                    </div>
                </Fade>
                <div className="md:order-first flex flex-col justify-center md:ml-14 mt-10 md:mt-0">
                    <Fade bottom>
                        <h2 className="font-boldtext-3xl sm:text-2xl lg:text-4xl text-center md:text-start text-white">Hi <span className="inline-block items-baseline animate-wave"><Hand className="w-6 md:w-7 xl:w-10 mx-1" /></span>, I'm</h2>
                        <h1 className="pt-2 font-bold text-5xl sm:text-4xl lg:text-6xl text-center md:text-start text-white overflow-hidden whitespace-nowrap">{props.name}</h1>
                        <h2 className="mt-5 text-sm text-md text-center md:text-start text-neutral-300">I'm an <span className="inline-flex items-baseline">Italian<Flag className="w-5 mx-2"/></span>fullstack student, formed and based near <span className="inline-flex items-baseline">Ferrara, Italy<Map className="w-5 ml-1"/></span></h2>     
                    </Fade>
                    <Fade bottom>
                        <div className="w-full flex justify-center md:justify-start relative">
                            <button onClick={() => scrollTo(props.startRef)} className="inline-block select-none px-5 py-2 mt-10 mb-24 md:mb-0 text-neutral-900 dark:text-white border border-neutral-300 hover:border-neutral-200 dark:border-neutral-600 dark:hover:border-neutral-700 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-900 shadow-md">
                                Take a look
                            </button>
                            <div className="absolute text-white text-sm ml-52 top-10 md:left-32 md:top-9 md:ml-2 select-none animate-pulse">
                                <div className="rotate-[25deg] -m-1 ml-6 font-caveat text-lg whitespace-nowrap">Click it!</div>
                                <Arrow className="w-10" />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Header;
