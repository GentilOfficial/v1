import { Fade } from "react-reveal";
import { ReactComponent as Blob } from './blob.svg';

function Card({children, name, Icon}) {
  return (
    <div className="max-w-sm w-full mx-auto">
        <div className="mx-auto flex justify-center text-white items-center p-5 relative">
          <Icon className="w-16 p-3 my-drop-shadow"/>
          <Blob className="my-drop-shadow absolute -z-10 w-36 text-indigo-600 dark:text-[#716bff]" />
        </div>
        <h2 className="font-bold mt-3 text-md md:text-lg dark:text-white">{name}</h2>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-700 w-full">
          <Fade bottom>
            {children}
          </Fade>
        </div>
    </div>
  );
}

export default Card;
