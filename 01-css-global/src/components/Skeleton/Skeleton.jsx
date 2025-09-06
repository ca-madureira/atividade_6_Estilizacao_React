import './Skeleton.css';

export const Skeleton = () => (
    <article className="skeleton">
        <div className="skeleton__image" />
        <div className="skeleton__text skeleton__title" />
        <div className="skeleton__text skeleton__price" />
        <div className="skeleton__button" />
    </article>
);
