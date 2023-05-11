import { ReactComponent as Link } from './link.svg';

function ListRow(props) {
  return (
    <div className="py-3 sm:py-4">
        <div className="flex space-x-4">
            <div className="flex-1 min-w-0">
                <div className="flex justify-between text-md font-medium text-neutral-900 dark:text-neutral-200">
                <a href={props.link} rel="noreferrer" target="_blank" className="truncate mr-2 flex gap-1 no-underline hover:underline">{props.name}<Link className="w-4"/></a>
                <p className="whitespace-nowrap">{props.year}</p>
                </div>
                <div className="text-sm list-disc list-inside text-neutral-500 dark:text-neutral-400">
                    <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0 rotate-90 my-drop-shadow" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {props.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ListRow;
