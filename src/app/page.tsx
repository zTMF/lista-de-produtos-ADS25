import ProductList from '@/components/ProductList'

export default function HomePage() {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Product List</h2>
            <p className="text-gray-600 mb-6">Here are some of our best products:</p>

            {/* Renderizando a lista de produtos */}
            <ProductList />
        </section>
    )
}
