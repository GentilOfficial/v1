import { Fade } from "react-reveal";
import { ReactComponent as Link } from './link.svg';
import { ReactComponent as Contact } from './contact.svg';
import Feedback from './Feedback.js'
import Links from './Links.js';

function Footer(props) {
  return (
    <footer className="bg-[#efefef] dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
        <div className="mx-auto w-full max-w-screen-xl p-5 py-6 lg:py-8">
            <Fade bottom>
                <div className="flex flex-col items-center justify-center w-full">
                    <p className="flex gap-2 items-center font-caveat text-3xl text-neutral-900 dark:text-white mb-3 my-drop-shadow">GET IN TOUCH <Contact className="w-9 text-indigo-600 dark:text-[#716bff]" /></p>
                    <p className="text-neutral-800 dark:text-neutral-200">Email</p>
                    <a href={"mailto:" + props.email} className="text-neutral-600 dark:text-neutral-400 flex gap-1 no-underline hover:underline">{props.email}<Link className="w-4"/></a>
                </div>
                <Feedback darkToggle={props.darkToggle} />
                <hr className="my-6 border-neutral-300 dark:border-neutral-700 sm:mx-auto lg:my-8" />
                <Links creator={props.creator} instagram={props.instagram} twitter={props.twitter} github={props.github} />
            </Fade>
        </div>
    </footer>
  );
}

export default Footer;
