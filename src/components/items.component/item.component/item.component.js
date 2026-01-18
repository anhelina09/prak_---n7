const ItemComponent = ({ image, title, price, salePrice, currency }) => {
  return (
    <div className={styles.itemCard}>
      {}
      {salePrice && (
        <div className={styles.saleBadge}>SALE</div>
      )}

      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      
      <div className={styles.priceContainer}>
        {salePrice ? (
          <>
            <span className={styles.oldPrice}>{currency}{price}</span>
            <span className={styles.newPrice}>{currency}{salePrice}</span>
          </>
        ) : (
          <span>{currency}{price}</span>
        )}
      </div>
    </div>
  );
};