import MenuCard from "./MenuCard.jsx";

function MenuList({ menuList, onTambah }) {
  if (menuList.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-stone-300">
        <p className="text-stone-400 text-sm font-medium">
          Tidak ada menu yang sesuai dengan kategori ini.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {menuList.map((item) => (
        <MenuCard key={item.id} item={item} onTambah={onTambah} />
      ))}
    </div>
  );
}

export default MenuList;