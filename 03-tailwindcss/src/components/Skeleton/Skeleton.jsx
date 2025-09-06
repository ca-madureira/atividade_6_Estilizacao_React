const Skeleton = () => (
    <article className="flex flex-col gap-4 bg-gray-200 dark:bg-gray-700 rounded-lg p-4 animate-pulse border border-gray-100 dark:border-gray-600">
        <div className="w-full aspect-square bg-gray-300 dark:bg-gray-600 rounded-md"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/5"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
    </article>
);

export default Skeleton;