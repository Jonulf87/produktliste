import { forwardRef } from 'react';
import { Product } from '../types/product';

type Props = {
    product: Product;
};

export const Listitem = forwardRef<HTMLDivElement, Props>(({ product }, ref) => (
    <div ref={ref} className="list-item">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>{product.price}</p>
    </div>
));
Listitem.displayName = 'Listitem';
