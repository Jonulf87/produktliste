import React, { useEffect, useState, useMemo } from 'react';
import data from '../data/data.json';
import { Product } from '../types/product';
import { Listitem } from './listitem';
import FlipMove from 'react-flip-move';
import { filterProducts } from '../utils/filtering';

type Props = {
    selectedCategory: string;
    minPrice: number;
    maxPrice: number;
    sortOrder: string;
};

export const Productlist: React.FC<Props> = ({ selectedCategory, minPrice, maxPrice, sortOrder }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(data);
    }, []);

    const filteredProducts = useMemo(
        () => filterProducts(products, selectedCategory, minPrice, maxPrice, sortOrder),
        [products, selectedCategory, minPrice, maxPrice, sortOrder]
    );

    return (
        <div className="list-wrapper">
            {/* Bruker et bibliotek for å animere listen. Mange edgecaser hvis man skal gjøre det selv ettersom man må ta vare på posisjon før og etter listen er oppdatert, og css mangler funskjonalitet for å animere når handlingen er diskret. */}
            {/* Biblioteket er av litt eldre dato og har noen mangler, derfor warning i console. Med litt mer tid ville jeg sett på andre mer moderne biblioteker */}
            <FlipMove style={{ width: '100%' }}>
                {filteredProducts.map((product) => (
                    <Listitem key={product.id} product={product} />
                ))}
            </FlipMove>
        </div>
    );
};
