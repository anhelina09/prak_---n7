import { itemsData } from './items.data'; 
import ItemComponent from './item.component/item.component';

const ItemsComponent = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {itemsData.map((product, index) => (
        <ItemComponent 
          key={index} 
          image={product.image}
          title={product.title}
          price={product.price}
          salePrice={product.salePrice}
          currency={product.currency}
        />
      ))}
    </div>
  );
};

export default ItemsComponent;