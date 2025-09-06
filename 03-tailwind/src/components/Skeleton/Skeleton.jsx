export const Skeleton = () => (
    <article className="flex flex-col gap-4 bg-gray-300 rounded-lg p-4 animate-pulse">
        <div className="w-full aspect-square bg-gray-400 rounded-md" />
        <div className="h-4 bg-gray-400 rounded w-4/5" />
        <div className="h-4 bg-gray-400 rounded w-2/5" />
        <div className="h-10 w-full bg-gray-400 rounded-md" />
    </article>
);
