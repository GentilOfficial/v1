import { Fade } from "react-reveal";
import { forwardRef } from 'react';
import Portrait from './portrait.webp';
import ListRow from "./ListRow";
import { ReactComponent as AboutBox } from './abox.svg';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="pt-20 flex flex-col gap-4 items-center justify-center max-w-screen-xl px-5 mx-auto lg:grid lg:grid-cols-2 mb-10">
        <div className="order-last lg:order-first w-full h-full flex items-center justify-center lg:justify-center lg:pr-32">
            <Fade bottom>
                <img src={Portrait} width="500" height="500" className="rounded-lg w-60 md:w-72 lg:w-fit my-drop-shadow " alt="portrait" />
            </Fade>
        </div>
        <div className="order-first lg:order-last w-full">
            <Fade bottom>
                <div className="w-full text-center lg:text-start">
                    <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-indigo-600 dark:text-[#716bff] mb-2 font-caveat select-none">About</h2>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-3 flex items-center justify-center lg:justify-start dark:text-white">My background <AboutBox className="ms-2 text-indigo-600 dark:text-[#716bff] w-8 my-drop-shadow" /></h2>
                </div>
                <div className="text-center lg:text-left dark:text-neutral-200">
                    <p>
                        Hi, my name is Federico Gentili and I am an IT student.
                        I live near Ferrara, a city in Emilia-Romagna, Italy. I have learnt many technologies and communication techniques.
                        I am always looking for new technologies to learn and use in my projects. My life goal is to build accessible and inclusive digital products as a Software Engineer.
                        For now, I will continue my studies to improve my skills and to discover something new.
                    </p>
                </div>
                <Fade bottom>
                    <div className="mt-5 w-full text-center lg:text-start">
                        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold dark:text-white">Experience <span className="text-indigo-600 dark:text-[#716bff] text-lg md:text-xl xl:text-2xl">&</span> Education</h2>
                    </div>
                </Fade>
                <div className="divide-y divide-neutral-200 dark:divide-neutral-700 mb-3 lg:mb-0">
                    <Fade up>
                        <ListRow link="http://www.iiscopernico.edu.it/" name="IIS N.Copernico A.Carpeggiani" year="2018-2023" description="Information Technology degree" />
                        <ListRow link="https://www.logikamente.it/" name="Logikamente S.r.l." year="2022-2023" description="1 month of stage in an IT company" />
                    </Fade>
                </div>
            </Fade>
        </div>
    </div>
  );
});

export default About;
