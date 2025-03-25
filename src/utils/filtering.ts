import { Product } from '../types/product';

export function filterProducts(
    products: Product[],
    selectedCategory: string,
    minPrice: number,
    maxPrice: number,
    sortOrder: string
) {
    const filtered = products.filter((product) => {
        const categoryMatches = selectedCategory === 'Alle' || product.category === selectedCategory;
        const priceMatches = product.price >= minPrice && product.price <= maxPrice;
        return categoryMatches && priceMatches;
    });
    return filtered.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
}
