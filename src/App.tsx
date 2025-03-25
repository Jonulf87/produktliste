import { useState } from 'react';
import './App.css';
import { Menu } from './components/menu';
import { Productlist } from './components/productlist';
import data from './data/data.json';
import { Product } from './types/product';

function App() {
    const MAX_PRICE = 40000;
    const MIN_PRICE = 0;
    const [selectedCategory, setselectedCategory] = useState<string>('Alle');
    const [minPrice, setMinPrice] = useState<number>(MIN_PRICE);
    const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
    const [sortOrder, setSortOrder] = useState<string>('asc');

    const uniqueCategories = Array.from(new Set((data as Product[]).map((product) => product.category)));
    const categories = ['Alle', ...uniqueCategories];

    return (
        <>
            <Menu
                //Holy bananas, this is a lot of props
                //Would use a context for a lot of these in a real app or a library like jotai or similar
                selectedCategory={selectedCategory}
                setSelectedCategory={setselectedCategory}
                categories={categories}
                selectedMinPrice={minPrice}
                selectedMaxPrice={maxPrice}
                minPrice={MIN_PRICE}
                maxPrice={MAX_PRICE}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            <Productlist
                selectedCategory={selectedCategory}
                minPrice={minPrice}
                maxPrice={maxPrice}
                sortOrder={sortOrder}
            />
        </>
    );
}

export default App;
