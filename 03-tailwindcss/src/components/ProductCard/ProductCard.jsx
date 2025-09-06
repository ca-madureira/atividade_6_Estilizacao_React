import { Button } from '../Button/Button';

export const ProductCard = ({ product }) => {
    const { image, name, price, rating, tag, variant = 'solid' } = product;

    const variantClasses = {
        solid: 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200',
        outline:
            'bg-transparent text-black border border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black',
        ghost:
            'bg-transparent text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800',
    };

    return (
        <article className="flex flex-col items-center gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 transition-transform hover:-translate-y-1 text-gray-800 dark:text-gray-100">
            <div className="relative rounded-md overflow-hidden w-full">
                <img
                    src={image}
                    alt={name}
                    className="w-full aspect-square object-cover bg-gray-100 dark:bg-gray-700"
                />
                {tag && (
                    <span
                        className={`absolute top-2 left-2 px-2.5 py-1 text-xs font-bold rounded-full text-white shadow-md ${tag.toLowerCase() === 'novo' ? 'bg-emerald-500' : 'bg-red-500'
                            }`}
                    >
                        {tag}
                    </span>
                )}
            </div>

            <h2
                className="text-lg font-semibold leading-snug line-clamp-2 text-center"
                title={name}
            >
                {name}
            </h2>

            <div className="flex items-center justify-between w-full">
                <span className="text-base font-bold">R$ {price}</span>
                {rating && (
                    <span
                        className="text-sm text-amber-500"
                        aria-label={`Avaliação ${rating} de 5`}
                    >
                        {'★'.repeat(Math.floor(rating))}
                        {rating % 1 ? '⯨' : ''}
                    </span>
                )}
            </div>

            <Button
                variant={variant}
                className={`w-full py-3 text-base font-semibold rounded-md transition-all focus:outline focus:outline-purple-700 focus:outline-offset-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant] || variantClasses.solid
                    }`}
            >
                Adicionar ao Carrinho
            </Button>
        </article>
    );
};
