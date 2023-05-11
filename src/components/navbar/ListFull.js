const ListFull = ({ skillsRef, portfolioRef, aboutRef, navbar }) => {
    function scrollTo(ref) {
        if (!ref.current) return;
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <ul className="flex flex-row gap-5 p-0 items-center justify-end mt-0 pl-5 font-bold">
            <li className="animate-slide_down600">
                <button onClick={() => scrollTo(skillsRef)} className={navbar ? "text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-[#716bff]" : "text-neutral-300 hover:text-white my-drop-shadow"}>Skills</button>
            </li>
            <li className="animate-slide_down800">
                <button onClick={() => scrollTo(portfolioRef)} className={navbar ? "text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-[#716bff]" : "text-neutral-300 hover:text-white my-drop-shadow"}>Portfolio</button>
            </li>
            <li className="animate-slide_down1000">
                <button onClick={() => scrollTo(aboutRef)} className={navbar ? "text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-[#716bff]" : "text-neutral-300 hover:text-white my-drop-shadow"}>About</button>
            </li>
        </ul>
    );
}

export default ListFull;