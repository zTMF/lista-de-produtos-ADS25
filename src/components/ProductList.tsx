'use client'

import { Product } from '@/types/product'
import ProductCard from './ProductCard'

const mockProducts: Product[] = [
    {
        id: 1,
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with adjustable DPI.',
        price: 29.99,
        category: 'Electronics',
        image: 'https://via.placeholder.com/300x200?text=Mouse',
        available: true,
    },
    {
        id: 2,
        name: 'Bluetooth Headphones',
        description: 'Over-ear headphones with noise cancellation.',
        price: 89.99,
        category: 'Audio',
        image: 'https://via.placeholder.com/300x200?text=Headphones',
        available: false,
    },
    {
        id: 3,
        name: 'Gaming Keyboard',
        description: 'Mechanical keyboard with RGB lighting.',
        price: 59.99,
        category: 'Gaming',
        image: 'https://via.placeholder.com/300x200?text=Keyboard',
        available: true,
    },
]

export default function ProductList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
