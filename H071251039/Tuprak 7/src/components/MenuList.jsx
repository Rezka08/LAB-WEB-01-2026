import MenuCard from './MenuCard'

// Pemetaan foto untuk semua menu
const gambarMenu = {
  1: '/images/kopi-susu.jpg',
  2: '/images/americano.jpg',
  3: '/images/cappuccino.jpg',
  4: '/images/matcha-latte.jpg',
  5: '/images/teh-tarik.jpg',
  6: '/images/cokelat-panas.jpg',
  7: '/images/roti-bakar.jpg',
  8: '/images/pisang-goreng.jpg',
  9: '/images/nasi-goreng.jpg',
}

export default function MenuList({ menu, keranjang, onTambah }) {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {menu.map((item) => (
        <MenuCard
          key={item.id}
          nama={item.nama}
          kategori={item.kategori}
          deskripsi={item.deskripsi}
          harga={item.harga}
          tersedia={item.tersedia}
          jumlah={keranjang[item.id] || 0}
          gambar={gambarMenu[item.id]}
          onTambah={() => onTambah(item.id)}
        />
      ))}
    </section>
  )
}
