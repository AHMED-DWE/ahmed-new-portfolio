import { useMemo, useState } from "react";
import { ArrowLeft, Minus, Plus, Search, ShoppingBag, ShoppingCart, Star, X } from "lucide-react";
import Logo from "../components/Logo";

const products = [
  { id: 1, name: "Wave Headphones", category: "Audio", price: 129, icon: "🎧", rating: 4.8 },
  { id: 2, name: "Street Sneakers", category: "Fashion", price: 89, icon: "👟", rating: 4.6 },
  { id: 3, name: "Smart Watch", category: "Tech", price: 149, icon: "⌚", rating: 4.7 },
  { id: 4, name: "City Backpack", category: "Fashion", price: 59, icon: "🎒", rating: 4.5 },
  { id: 5, name: "Studio Keyboard", category: "Tech", price: 79, icon: "⌨️", rating: 4.4 },
  { id: 6, name: "Mini Speaker", category: "Audio", price: 49, icon: "🔊", rating: 4.5 },
];

const categories = ["All", "Audio", "Fashion", "Tech"];

export default function Ecommerce() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [category, search]);

  const addToCart = (product) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) return items.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...items, { ...product, qty: 1 }];
    });
  };

  const changeQty = (id, amount) => {
    setCart((items) => items.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item));
  };

  const removeItem = (id) => setCart((items) => items.filter((item) => item.id !== id));
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="shop-page">
      <header className="shop-nav">
        <a href="/" className="shop-back"><ArrowLeft size={18} aria-hidden="true" /> Portfolio</a>
        <div className="shop-brand"><Logo /> <strong>NovaShop</strong></div>
        <button type="button" className="shop-cart-button" onClick={() => setCartOpen(true)} aria-label={`Open cart with ${cartCount} items`}>
          <ShoppingCart size={20} aria-hidden="true" /><span aria-hidden="true">{cartCount}</span>
        </button>
      </header>

      <main className="shop-main">
        <section className="shop-hero-section">
          <div className="shop-hero-copy">
            <p className="eyebrow">REACT E-COMMERCE DEMO</p>
            <h1>Discover products with a clean shopping experience.</h1>
            <p>This demo page shows a responsive product grid, search, category filters and a working local cart.</p>
            <a href="#shop-products" className="btn btn-primary">Shop products <ShoppingBag size={18} aria-hidden="true" /></a>
          </div>
          <div className="shop-showcase" aria-hidden="true">
            <div className="showcase-ring" />
            <div className="showcase-product">🎧</div>
            <span className="showcase-label">Featured product</span>
          </div>
        </section>

        <section id="shop-products" className="shop-products-section" aria-labelledby="products-heading">
          <h2 id="products-heading" className="sr-only">Products</h2>
          <div className="shop-toolbar">
            <label className="shop-search">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Search products</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products" />
            </label>
            <div className="shop-categories" role="group" aria-label="Product categories">
              {categories.map((item) => (
                <button type="button" className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image" aria-hidden="true"><span>{product.icon}</span><small>{product.category}</small></div>
                <div className="product-info">
                  <div className="product-rating"><Star size={14} fill="currentColor" aria-hidden="true" /><span className="sr-only">Rating: </span>{product.rating}<span className="sr-only"> out of 5</span></div>
                  <h3>{product.name}</h3>
                  <div className="product-bottom"><strong>${product.price}</strong><button type="button" onClick={() => addToCart(product)}>Add to cart</button></div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)} role="presentation">
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()} aria-label="Shopping cart">
            <div className="cart-head">
              <div><small>YOUR CART</small><h2>{cartCount} item{cartCount === 1 ? "" : "s"}</h2></div>
              <button type="button" onClick={() => setCartOpen(false)} aria-label="Close cart"><X aria-hidden="true" /></button>
            </div>
            <div className="cart-items">
              {cart.length === 0 && <div className="empty-cart"><ShoppingCart aria-hidden="true" /><p>Your cart is empty.</p></div>}
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-icon" aria-hidden="true">{item.icon}</div>
                  <div className="cart-item-info">
                    <strong>{item.name}</strong><small>${item.price}</small>
                    <div>
                      <button type="button" onClick={() => changeQty(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}><Minus size={14} aria-hidden="true" /></button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => changeQty(item.id, 1)} aria-label={`Increase ${item.name} quantity`}><Plus size={14} aria-hidden="true" /></button>
                    </div>
                  </div>
                  <button type="button" className="remove-button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name} from cart`}><X size={16} aria-hidden="true" /></button>
                </div>
              ))}
            </div>
            <div className="cart-total"><span>Total</span><strong>${total}</strong></div>
            <button type="button" className="checkout-button" disabled={!cart.length}>Demo checkout</button>
          </aside>
        </div>
      )}
    </div>
  );
}
