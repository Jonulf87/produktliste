import React, { Dispatch, SetStateAction } from 'react';

type Props = {
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    categories: string[];
    selectedMinPrice: number;
    selectedMaxPrice: number;
    minPrice: number;
    maxPrice: number;
    setMinPrice: Dispatch<SetStateAction<number>>;
    setMaxPrice: Dispatch<SetStateAction<number>>;
    sortOrder: string;
    setSortOrder: Dispatch<SetStateAction<string>>;
};

export const Menu: React.FC<Props> = ({
    selectedCategory,
    setSelectedCategory,
    categories,
    selectedMinPrice,
    selectedMaxPrice,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    sortOrder,
    setSortOrder,
}) => {
    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div className="menu">
            <h2>Meny</h2>
            <label htmlFor="category-select">Kategori:</label>
            <select id="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <div className="price-slider">
                <label>Prisintervall:</label>
                <div className="slider-container">
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={selectedMinPrice}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value <= selectedMaxPrice) setMinPrice(value);
                        }}
                        className="thumb thumb-min"
                    />
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={selectedMaxPrice}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= selectedMinPrice) setMaxPrice(value);
                        }}
                        className="thumb thumb-max"
                    />
                </div>
                <div className="price-values">
                    <span>Min: {selectedMinPrice} kr</span> - <span>Maks: {selectedMaxPrice} kr</span>
                </div>
            </div>
            <div className="sort-button">
                <button onClick={toggleSortOrder}>Pris: {sortOrder === 'asc' ? 'Stigende' : 'Synkende'}</button>
            </div>
        </div>
    );
};
