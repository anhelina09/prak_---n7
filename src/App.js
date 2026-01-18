import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: "Arne Jacobsen Egg Chair blue", price: 199, oldPrice: 220, img: "/imgs/arne_jacobsen_egg_chair_blue_1_medium.avif", sale: true },
    { id: 2, name: "Attractive round chair", price: 60, img: "/imgs/attractive_round_chair_on_low_revolving_base_1_medium.avif" },
    { id: 3, name: "Avenue Six Roundabout", price: 78, img: "/imgs/avenue_six_roundabout_spring_green_low_circle_lounger_1_medium.avif" },
    { id: 4, name: "CAMILLA Armchair", price: 469, img: "/imgs/camilla_armchair_1_medium.avif" },
    { id: 5, name: "Le Corbusier Armchair", price: 399, oldPrice: 500, img: "/imgs/le_corbusier_armchair_1_medium.avif", sale: true },
    { id: 6, name: "Le Corbusier LC7 Chair", price: 420, img: "/imgs/le_corbusier_lc7_chair_furniture_1_medium.avif" },
    { id: 7, name: "Mesa Modern Round Table", price: 265, img: "/imgs/mesa_modern_round_dining_table_1_medium.avif" },
    { id: 8, name: "Miss K Table Lamp", price: 170, img: "/imgs/miss_k_table_lamp_by_flos_1_medium.avif" },
    { id: 9, name: "Modern Contemporary Storage", price: 320, oldPrice: 400, img: "/imgs/modern_contemporary_self_storage_furniture_hipster_by_zuo_modern_1_medium.avif", sale: true },
    { id: 10, name: "Modern Cardboard Chair", price: 265, img: "/imgs/modern_design_cardboard_wiggle_chair_1_medium.avif" },
    { id: 11, name: "Oksana Dining Table", price: 199, img: "/imgs/oksana_dining_table_1_medium.avif" },
    { id: 12, name: "PK20 Easy Chair", price: 60, img: "/imgs/pk20_easy_chair_by_designer_poul_kjaerholm_for_fritz_hansen_1_medium.avif" },
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="header__auth">
          <span>Log in</span> <span>Create an account</span> <span>Check out</span>
        </div>
        <div className="header__main">
          <div className="logo">
            <h1 className="logo__text">Furniture<span className="logo__bold">Store</span></h1>
            <p className="logo__sub">The biggest choice on the web</p>
          </div>
          <div className="header__right">
            <div className="cart">🛒 My cart: 0 item(s) — $0.00</div>
            <div className="search">
              <input type="text" className="search__input" placeholder="Search store..." />
              <button className="search__button">🔍</button>
            </div>
          </div>
        </div>
      </header>

      <main className="catalog">
        <h2 className="catalog__title">Featured Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-card__img-holder">
                {p.sale && <div className="product-card__sale">SALE</div>}
                <img src={p.img} alt={p.name} className="product-card__img" />
              </div>
              <h3 className="product-card__title">{p.name}</h3>
              <div className="product-card__prices">
                <span className="product-card__price">${p.price.toFixed(2)}</span>
                {p.oldPrice && <span className="product-card__old">${p.oldPrice.toFixed(2)}</span>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;