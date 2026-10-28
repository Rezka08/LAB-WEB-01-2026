import MenuCard from "./MenuCard.jsx";

const pilihanKategori = [
  { value: "All", label: "All" },
  { value: "Beverages", label: "Beverages" },
  { value: "Kopi", label: "Coffee" },
  { value: "Non-Kopi", label: "Non-Coffee" },
  { value: "Food", label: "Food" },
];

function MenuList({ menu, kategoriAktif, onKategoriChange, kataKunci, onKataKunciChange, pesanan, onTambah, onKurangi }) {
  const kataDicari = kataKunci.trim().toLocaleLowerCase("id-ID");
  const menuTampil = menu.filter((item) => {
    const cocokKategori = kategoriAktif === "All"
      || (kategoriAktif === "Beverages" && item.kategori !== "Makanan")
      || (kategoriAktif === "Food" && item.kategori === "Makanan")
      || item.kategori === kategoriAktif;
    const cocokPencarian = `${item.nama} ${item.deskripsi} ${item.kategori}`.toLocaleLowerCase("id-ID").includes(kataDicari);
    return cocokKategori && cocokPencarian;
  });

  const beverages = menuTampil.filter((item) => item.kategori !== "Makanan");
  const food = menuTampil.filter((item) => item.kategori === "Makanan");
  const modeAll = kategoriAktif === "All";
  const judulHasil = pilihanKategori.find((item) => item.value === kategoriAktif)?.label || "Menu";

  function renderCards(items) {
    return (
      <div className="product-grid">
        {items.map((item) => (
          <MenuCard
            key={item.id}
            menu={item}
            jumlah={pesanan[item.id] || 0}
            onTambah={onTambah}
            onKurangi={onKurangi}
          />
        ))}
      </div>
    );
  }

  return (
    <section id="menu" className="menu-section" aria-labelledby="menu-title">
      <div className="menu-section-heading">
        <div><span className="section-overline">ORDER · PICK YOUR FAVOURITE</span><h2 id="menu-title">What are you craving?</h2><p>Find your go-to drink or a little something to eat.</p></div>
        <span className="menu-count-label">{menuTampil.length} {menuTampil.length === 1 ? "item" : "items"}</span>
      </div>

      <div className="menu-tools">
        <div className="category-tabs" role="group" aria-label="Filter menu category">
          {pilihanKategori.map((kategori) => (
            <button
              key={kategori.value}
              type="button"
              className={`category-tab ${kategoriAktif === kategori.value ? "category-tab-active" : ""}`}
              onClick={() => onKategoriChange(kategori.value)}
              aria-pressed={kategoriAktif === kategori.value}
            >
              {kategori.label}
            </button>
          ))}
        </div>
        <label className="search-box">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7"/><path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
          <input type="search" value={kataKunci} onChange={(event) => onKataKunciChange(event.target.value)} placeholder="Search coffee, matcha, food..." aria-label="Search menu" />
          {kataKunci && <button type="button" className="search-clear" onClick={() => onKataKunciChange("")} aria-label="Clear search">×</button>}
        </label>
      </div>

      {menuTampil.length > 0 ? (
        <div className="menu-results" aria-live="polite">
          {modeAll ? (
            <>
              {beverages.length > 0 && <section className="menu-group" id="beverages"><div className="menu-group-heading"><div><span className="group-kicker">SIP SOMETHING GOOD</span><h3>Beverages <span>({beverages.length})</span></h3></div><button type="button" className="text-action" onClick={() => onKategoriChange("Beverages")}>See all <span aria-hidden="true">→</span></button></div>{renderCards(beverages)}</section>}
              {food.length > 0 && <section className="menu-group" id="food"><div className="menu-group-heading"><div><span className="group-kicker">A LITTLE SOMETHING TO EAT</span><h3>Food <span>({food.length})</span></h3></div><button type="button" className="text-action" onClick={() => onKategoriChange("Food")}>See all <span aria-hidden="true">→</span></button></div>{renderCards(food)}</section>}
            </>
          ) : (
            <section className="menu-group" id={kategoriAktif === "Food" ? "food" : "beverages"}>
              <div className="menu-group-heading"><div><span className="group-kicker">MADE FOR YOUR MOMENT</span><h3>{judulHasil} <span>({menuTampil.length})</span></h3></div>{kategoriAktif !== "All" && <button type="button" className="text-action" onClick={() => onKategoriChange("All")}>View all <span aria-hidden="true">→</span></button>}</div>
              {renderCards(menuTampil)}
            </section>
          )}
        </div>
      ) : (
        <div className="no-results"><div className="no-results-mark"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="21" cy="21" r="13" stroke="currentColor" strokeWidth="1.8"/><path d="m31 31 9 9M16 21h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>No matches found</h3><p>Try another keyword or choose a different category.</p><button type="button" className="text-action" onClick={() => { onKataKunciChange(""); onKategoriChange("All"); }}>Clear filters <span aria-hidden="true">→</span></button></div>
      )}
    </section>
  );
}

export default MenuList;
