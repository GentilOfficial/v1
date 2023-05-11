const ListSmall = ({ skillsRef, portfolioRef, aboutRef, showMenuChangeBackground }) => {
    function scrollTo(ref) {
        if (!ref.current) return;
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <ul className="flex flex-col gap-1 p-4 mt-5 border rounded-lg border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 font-bold">
            <li>
                <button onClick={() => {scrollTo(skillsRef);showMenuChangeBackground();}} className="py-2 text-neutral-900 dark:text-white" data-hs-collapse="#navbar-menu" aria-controls="navbar-menu">Skills</button>
            </li>
            <li>
                <button onClick={() => {scrollTo(portfolioRef);showMenuChangeBackground();}} className="py-2 text-neutral-900 dark:text-white" data-hs-collapse="#navbar-menu" aria-controls="navbar-menu">Portfolio</button>
            </li>
            <li>
                <button onClick={() => {scrollTo(aboutRef);showMenuChangeBackground();}} className="py-2 text-neutral-900 dark:text-white" data-hs-collapse="#navbar-menu" aria-controls="navbar-menu">About</button>
            </li>
        </ul>
    );
}

export default ListSmall;