import { Product } from '../types/product';
import { filterProducts } from '../utils/filtering';

describe('filterProducts', () => {
    const products: Product[] = [
        { id: 1, name: 'Laptop', category: 'Elektronikk', price: 12000 },
        { id: 2, name: 'Sofa', category: 'Møbler', price: 5000 },
        { id: 3, name: 'TV', category: 'Elektronikk', price: 15000 },
    ];

    it('returns all products when selected category is Alle', () => {
        const result = filterProducts(products, 'Alle', 0, 20000, 'asc');
        expect(result).toHaveLength(3);
    });

    it('filters correctly by category', () => {
        const result = filterProducts(products, 'Elektronikk', 0, 20000, 'asc');
        expect(result).toHaveLength(2);
        expect(result.every((p) => p.category === 'Elektronikk')).toBe(true);
    });

    it('filters correctly by price range', () => {
        const result = filterProducts(products, 'Alle', 6000, 16000, 'asc');
        expect(result).toHaveLength(2);
        expect(result.every((p) => p.price >= 6000 && p.price <= 16000)).toBe(true);
    });

    it('sorts products in ascending order', () => {
        const result = filterProducts(products, 'Alle', 0, 20000, 'asc');
        expect(result[0].price).toBeLessThanOrEqual(result[1].price);
    });

    it('sorts products in descending order', () => {
        const result = filterProducts(products, 'Alle', 0, 20000, 'desc');
        expect(result[0].price).toBeGreaterThanOrEqual(result[1].price);
    });
});
