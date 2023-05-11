import { Fade } from "react-reveal";
import { forwardRef } from 'react';
import Card from "./Card";
import ListRow from "./ListRow";
import { ReactComponent as Development } from './development/development.svg';
import { ReactComponent as Html } from './development/html.svg';
import { ReactComponent as Css } from './development/css.svg';
import { ReactComponent as Javascript } from './development/javascript.svg';
import { ReactComponent as Php } from './development/php.svg';
import { ReactComponent as Framework } from './framework/framework.svg';
import { ReactComponent as Bootstrap } from './framework/bootstrap.svg';
import { ReactComponent as React_ } from './framework/react.svg';
import { ReactComponent as TailwindCss } from './framework/tailwind.svg';
import { ReactComponent as NodeJs } from './framework/node.svg';
import { ReactComponent as Other } from './other/other.svg';
import { ReactComponent as Responsive } from './other/responsive.svg';
import { ReactComponent as Telegram } from './other/telegram.svg';
import { ReactComponent as Server } from './other/server.svg';
import { ReactComponent as Network } from './other/network.svg';

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="pt-20 flex flex-col justify-center items-center max-w-screen-xl px-5 mx-auto mb-10">
        <div className="w-full text-center">
          <Fade bottom>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-indigo-600 dark:text-[#716bff] mb-2 font-caveat select-none">Skills</h2>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-5 dark:text-white">My Skills</h2>
          </Fade>
          <hr className="h-px my-5 bg-neutral-200 dark:bg-neutral-700 border-0 w-4/5 mx-auto" />
        </div>
        <div className="text-center w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Fade bottom>
            <Card Icon={Development} name="Web Development">
              <ListRow name="HTML" link="https://www.google.com/search?q=HTML" Image={Html} />
              <ListRow name="CSS" link="https://www.google.com/search?q=CSS" Image={Css} />
              <ListRow name="Javascript" link="https://www.google.com/search?q=Javascript" Image={Javascript} />
              <ListRow name="PHP" link="https://www.google.com/search?q=PHP" Image={Php} />
            </Card>
            <Card Icon={Framework} name="Framework">
              <ListRow name="React" link="https://www.google.com/search?q=React" Image={React_} />
              <ListRow name="Node.js" link="https://www.google.com/search?q=Node.js" Image={NodeJs} />
              <ListRow name="Bootstrap" link="https://www.google.com/search?q=Bootstrap" Image={Bootstrap} />
              <ListRow name="Tailwind CSS" link="https://www.google.com/search?q=Tailwind+CSS" Image={TailwindCss} />
            </Card>
            <div className="md:col-span-2 lg:col-span-1">
              <Card Icon={Other} name="Other">
                <ListRow name="Responsive design" link="https://www.google.com/search?q=Responsive+design" Image={Responsive} />
                <ListRow name="Telegram bot dev" link="https://www.google.com/search?q=Telegram+bot+dev" Image={Telegram} />
                <ListRow name="Server management" link="https://www.google.com/search?q=Server+management" Image={Server} />
                <ListRow name="Network management" link="https://www.google.com/search?q=Network+management" Image={Network} />
              </Card>
            </div>
          </Fade>
        </div>
    </div>
  );
});

export default Skills;
