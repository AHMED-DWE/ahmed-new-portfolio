export function StoreVisual() {
  return (
    <div className="project-art store-art" aria-hidden="true">
      <div className="fake-window">
        <div className="fake-top"><span /><span /><span /><b>NovaShop</b></div>
        <div className="shop-hero">
          <div><small>NEW COLLECTION</small><strong>Find your next favorite.</strong><i /></div>
          <div className="product-orb">⌁</div>
        </div>
        <div className="mini-products">
          {["⌚", "👟", "🎧", "🎒"].map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}

export function ResponsiveVisual() {
  return (
    <div className="project-art responsive-art" aria-hidden="true">
      <div className="device desktop-device">
        <div className="device-bar" />
        <div className="device-content"><span /><span /><span /></div>
      </div>
      <div className="device phone-device">
        <div className="phone-notch" />
        <div className="phone-lines"><span /><span /><span /><span /></div>
      </div>
      <div className="responsive-wave" />
    </div>
  );
}
