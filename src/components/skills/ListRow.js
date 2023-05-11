function ListRow({ Image, name, link }) {
  return (
    <div className="py-3">
        <div className="flex items-center justify-between space-x-4">
            <a href={link} rel="noreferrer" target="_blank" className="text-sm md:text-md font-medium text-neutral-900 dark:text-white truncate no-underline hover:underline">
                {name}
            </a>
            <div className="text-base font-semibold text-neutral-900 dark:text-white">
                <Image className="w-8 my-drop-shadow"/>  
            </div>
        </div>
    </div>
  );
}

export default ListRow;
