const Badge = (props) => {
  return (
    <span className="inline-block bg-neutral-200/75 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700/75 rounded-full px-3 py-1 text-sm font-semibold text-neutral-700 dark:text-neutral-200 mr-2 mb-2 select-none">{props.name}</span>
  );
};

export default Badge;