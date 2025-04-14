import { Product } from '@/types/product'

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold text-lg text-blue-600 mb-4">${product.price.toFixed(2)}</p>
            <p className={`text-sm ${product.available ? 'text-green-500' : 'text-red-500'}`}>
                {product.available ? 'Available' : 'Out of Stock'}
            </p>
        </div>
    )
}
