import { Fade } from "react-reveal";
import { forwardRef } from "react";
import Card from "./Card";
import Badge from "./Badge";
import PortfolioScreen from "./screenshot/portfolio.webp";
import TelegramScreen from "./screenshot/telegram.webp";

const Portfolio = forwardRef((props, ref) => {

  return (
    <div ref={ref} className="pt-20 flex flex-col justify-center items-center max-w-screen-xl px-5 mx-auto mb-10">
        <div className="w-full text-center">
          <Fade bottom>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-indigo-600 dark:text-[#716bff] mb-2 font-caveat select-none">Portfolio</h2>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-5 dark:text-white">My Projects</h2>
            <hr className="h-px my-5 bg-neutral-200 dark:bg-neutral-700 border-0 w-4/5 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center overflow-hidden">
              <Fade bottom>
                <div className="flex items-center justify-center md:justify-end p-3">
                  <Card title="My Portfolio" image={PortfolioScreen} gitLink="https://github.com/GentilOfficial/My-Portfolio" >
                    <Badge name="React" />
                    <Badge name="Tailwind" />
                  </Card>
                </div>
                <div className="flex items-center justify-center md:justify-start p-3">
                  <Card title="Wake on LAN Bot" image={TelegramScreen} gitLink="https://github.com/GentilOfficial/Wake-on-LAN-Bot" >
                    <Badge name="Node.js" />
                    <Badge name="Telegram" />
                  </Card>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
    </div>
  );
});

export default Portfolio;
