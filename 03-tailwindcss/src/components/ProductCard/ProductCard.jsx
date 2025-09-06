import Button from "../../../../01-css-global/src/components/Button/Button";
const ProductCard = ({ product }) => {
    const { image, name, price, rating, tag, variant = 'solid' } = product;

    return (
        <article className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-4 transition-transform duration-300 hover:-translate-y-1 mt-20 border border-gray-100 dark:border-gray-700">
            <div className="relative rounded-md overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full aspect-square object-cover bg-gray-100 dark:bg-gray-700"
                />
                {tag && (
                    <span className={`absolute top-2 left-2 px-3 py-1 text-xs font-bold rounded-full text-white shadow-md ${tag.toLowerCase() === 'novo'
                        ? 'bg-green-500 dark:bg-green-600'
                        : 'bg-red-500 dark:bg-red-600'
                        }`}>
                        {tag}
                    </span>
                )}
            </div>

            <h2
                className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight line-clamp-2 overflow-hidden"
                title={name}
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                }}
            >
                {name}
            </h2>

            <div className="flex justify-between items-center">
                <span className="text-base font-bold text-gray-900 dark:text-gray-100">R$ {price}</span>
                {rating && (
                    <span
                        className="text-sm text-yellow-500 dark:text-yellow-400"
                        aria-label={`Avaliação ${rating} de 5`}
                    >
                        {'★'.repeat(Math.floor(rating))}
                        {rating % 1 ? '⯨' : ''}
                    </span>
                )}
            </div>

            <Button variant={variant}>Adicionar ao Carrinho</Button>
        </article>
    );
};

export default ProductCard;