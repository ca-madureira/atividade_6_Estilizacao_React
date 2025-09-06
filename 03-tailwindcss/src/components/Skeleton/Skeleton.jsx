export const Skeleton = () => (
    <article className="flex flex-col gap-4 bg-[#e0e0e0] rounded-lg p-4 animate-[pulse_1.5s_ease-in-out_infinite]">
        <div className="w-full aspect-square bg-[#ccc] rounded-md" />
        <div className="h-4 bg-[#ccc] rounded w-4/5" />
        <div className="h-4 bg-[#ccc] rounded w-2/5" />
        <div className="h-10 w-full bg-[#ccc] rounded-md" />
    </article>
);
