import { useState } from 'react';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList';
import RingkasanPesanan from './components/RingkasanPesanan';
import FormPesan from './components/FormPesan';
import Footer from './components/Footer';

function App() {
  const [navAktif, setNavAktif] = useState('menu');
  const [kategoriTerpilih, setKategoriTerpilih] = useState(null);

  const [menuData] = useState([
    { id: 1, nama: 'Iced Kopi Dari Tani', kategori: 'Fore Signature', harga: 25000, tersedia: true, deskripsi: 'Paduan rasa dan aroma kopi Indonesia yang kuat bercampur dengan gula aren khas nusantara.' },
    { id: 2, nama: 'Iced Butterscotch Sea Salt Latte', kategori: 'Fore Signature', harga: 33000, tersedia: true, deskripsi: 'Perpaduan butterscotch dan espresso house blend dengan topping cream sea salt yang lembut di atasnya.' },
    { id: 3, nama: 'Iced Buttercream Latte', kategori: 'Fore Signature', harga: 33000, tersedia: true, deskripsi: 'Nikmatnya Buttercream Coffee sebagai topping kopi susu karamel.' },
    { id: 4, nama: 'Iced Aren Latte', kategori: 'Fore Signature', harga: 29000, tersedia: true, deskripsi: 'Rasa alami gula aren berpadu sempurna dengan espresso premium. Menu terlaris Fore Coffee.' },
    { id: 5, nama: 'Hot Aren Latte', kategori: 'Fore Signature', harga: 29000, tersedia: true, deskripsi: 'Rasa alami gula aren berpadu sempurna dengan espresso premium. Menu terlaris Fore Coffee.' },
    { id: 6, nama: 'Iced Pandan Latte', kategori: 'Fore Signature', harga: 29000, tersedia: true, deskripsi: 'Latte dengan rasa dan aroma unik dari ekstrak pandan alami khas Fore Coffee.' },
    { id: 7, nama: 'Hot Pandan Latte', kategori: 'Fore Signature', harga: 29000, tersedia: true, deskripsi: 'Latte dengan rasa dan aroma unik dari ekstrak pandan alami. Menu istimewa dari Fore Coffee.' },

    { id: 8, nama: 'Iced Americano', kategori: 'Americano Series', harga: 23000, tersedia: true, deskripsi: 'Espresso shot yang dicampur dengan segelas air menghadirkan karakter, aroma, dan rasa yang ideal.' },
    { id: 9, nama: 'Hot Americano', kategori: 'Americano Series', harga: 23000, tersedia: true, deskripsi: 'Espresso shot yang dicampur dengan segelas air menghadirkan karakter, aroma, dan rasa yang ideal.' },
    { id: 10, nama: 'Iced Manuka Americano', kategori: 'Americano Series', harga: 29000, tersedia: true, deskripsi: 'Americano dengan madu Manuka yang pas untuk jadi energy booster.' },
    { id: 11, nama: 'Hot Manuka Americano', kategori: 'Americano Series', harga: 29000, tersedia: true, deskripsi: 'Americano dengan madu Manuka yang pas untuk jadi energy booster.' },
    { id: 12, nama: 'Iced Triple Peach Americano', kategori: 'Americano Series', harga: 29000, tersedia: true, deskripsi: 'Peach coffee perpaduan rasa kopi, tiga jenis buah peach dan aroma elderflower yang menciptakan sensasi kopi yang segar dan harmonis.' },
    { id: 13, nama: 'Iced Berry Manuka Americano', kategori: 'Americano Series', harga: 31000, tersedia: true, deskripsi: 'Perpaduan rasa Stroberi dan Manuka dengan Classic Blend Fore yang menyegarkan.' },

    { id: 14, nama: 'Iced Dirty Matchapresso', kategori: 'Coffee', harga: 31000, tersedia: true, deskripsi: 'Kombinasi matcha dan espresso yang bold, creamy dan memberikan kesegaran maksimal.' },
    { id: 15, nama: 'Iced Malty Latte', kategori: 'Coffee', harga: 27000, tersedia: true, deskripsi: 'Sang legenda Tradisional Latte berpadu dengan manisnya karamel, keharuman panggangan rasa creamy dan nutty, yang berkesan di lidah.' },
    { id: 16, nama: 'Iced Bumi Latte', kategori: 'Coffee', harga: 25000, tersedia: true, deskripsi: 'Sensasi lembut dan manis dari rasa karamel dan butterscotch yang khas berpadu dengan kopi asli Indonesia.' },
    { id: 17, nama: 'Iced Cappuccino', kategori: 'Coffee', harga: 29000, tersedia: true, deskripsi: 'Paduan Espresso, susu hangat, dan lapisan foam tebal di atasnya tanpa gula tambahan.' },
    { id: 18, nama: 'Hot Cappuccino', kategori: 'Coffee', harga: 29000, tersedia: true, deskripsi: 'Paduan Espresso, susu hangat, dan lapisan foam tebal di atasnya tanpa gula tambahan.' },
    { id: 19, nama: 'Double Iced Shaken Latte', kategori: 'Coffee', harga: 33000, tersedia: true, deskripsi: 'Paduan kocok 2 shot espresso dengan susu dan krim.' },
    { id: 20, nama: 'Iced Café Latte', kategori: 'Coffee', harga: 29000, tersedia: true, deskripsi: 'Paduan espresso dengan susu segar pilihan dan sedikit foam tanpa gula tambahan.' },
    { id: 21, nama: 'Hot Café Latte', kategori: 'Coffee', harga: 29000, tersedia: true, deskripsi: 'Paduan espresso dengan susu segar pilihan dan sedikit foam tanpa gula tambahan.' },
    { id: 22, nama: 'Iced Nutty Oat Latte', kategori: 'Coffee', harga: 39000, tersedia: false, deskripsi: 'Espresso dari biji kopi khas nusantara dipadukan susu oat gluten-free dan sensasi nutty dari hazelnut.' },
    { id: 23, nama: 'Iced Buttercream Tiramisu Latte', kategori: 'Coffee', harga: 34000, tersedia: true, deskripsi: 'Lembutnya Buttercream Tiramisu sebagai topping kopi rasa praline.' },
    { id: 24, nama: 'Hot Espresso', kategori: 'Coffee', harga: 21000, tersedia: true, deskripsi: 'Ekstrak biji kopi Arabika murni tanpa campuran.' },
    { id: 25, nama: 'Iced Caramel Praline Macchiato', kategori: 'Coffee', harga: 34000, tersedia: true, deskripsi: 'Latte dengan rasa Praline dan karamel dengan rasa dan aroma manis.' },
    { id: 26, nama: 'Hot Caramel Praline Macchiato', kategori: 'Coffee', harga: 34000, tersedia: true, deskripsi: 'Latte dengan rasa Praline dan karamel dengan rasa dan aroma manis.' },

    { id: 27, nama: 'Iced Aceh Gayo', kategori: 'Coffee of The Day', harga: 24000, tersedia: true, deskripsi: 'Kopi aromatik dengan taste notes cokelat, butterscotch, dan rempah.' },
    { id: 28, nama: 'Hot Aceh Gayo', kategori: 'Coffee of The Day', harga: 24000, tersedia: true, deskripsi: 'Kopi aromatik dengan taste notes cokelat, butterscotch, dan rempah.' },
    { id: 29, nama: 'Iced Toraja Sapan', kategori: 'Coffee of The Day', harga: 24000, tersedia: true, deskripsi: 'Kopi aromatik dengan notes citrus, rempah, dan molases.' },
    { id: 30, nama: 'Hot Toraja Sapan', kategori: 'Coffee of The Day', harga: 24000, tersedia: true, deskripsi: 'Kopi aromatik dengan notes fruity dan citrus.' },
    { id: 31, nama: 'Iced Bali Kintamani', kategori: 'Coffee of The Day', harga: 24000, tersedia: true, deskripsi: 'Kopi aromatik dengan notes fruity dan citrus.' },
    { id: 32, nama: 'Hot Bali Kintamani', kategori: 'Coffee of The Day', harga: 24000, tersedia: true, deskripsi: 'Kopi aromatik dengan notes fruity dan citrus.' },

    { id: 33, nama: 'Crunchy Cereal Latte 1L', kategori: 'FOREveryone 1L', harga: 109000, tersedia: true, deskripsi: 'Perpaduan kopi dan cereal dengan rasa manis gurih, dilengkapi taburan cornflakes renyah.' },
    { id: 34, nama: 'Salted Spanish Latte 1L', kategori: 'FOREveryone 1L', harga: 90000, tersedia: true, deskripsi: 'Kopi rasa Spanish dengan sensasi gurih manis yang lembut dan pas disajikan.' },
    { id: 35, nama: 'Coco Peach Fusion 1L', kategori: 'FOREveryone 1L', harga: 89000, tersedia: true, deskripsi: 'Rasa segar dari peach, lychee, orange citrus, dan air kelapa.' },
    { id: 36, nama: 'Kopi Dari Tani 1L', kategori: 'FOREveryone 1L', harga: 89000, tersedia: true, deskripsi: 'Paduan rasa dan aroma kopi autentik Indonesia yang pas dalam ukuran 1L.' },
    { id: 37, nama: 'Bumi Latte 1L', kategori: 'FOREveryone 1L', harga: 89000, tersedia: true, deskripsi: 'Sensasi lembut dan manis Bumi Latte hadir dalam ukuran 1L, pas untuk dinikmati bersama-sama.' },
    { id: 38, nama: 'Dark Chocolate 1L', kategori: 'FOREveryone 1L', harga: 109000, tersedia: true, deskripsi: 'Dibuat dari 100% dark chocolate dan paduan susu yang nikmat.' },
    { id: 39, nama: 'Butterscotch Sea Salt Latte 1L', kategori: 'FOREveryone 1L', harga: 129000, tersedia: true, deskripsi: 'Butterscotch Sea Salt Latte Fore Coffee yang disukai banyak orang hadir dalam ukuran 1L.' },
    { id: 40, nama: 'Aren Latte 1L', kategori: 'FOREveryone 1L', harga: 99000, tersedia: true, deskripsi: 'Nikmatnya rasa dengan gula aren khas Indonesia hadir dalam ukuran 1L.' },
    { id: 41, nama: 'Caramel Praline Macchiato 1L', kategori: 'FOREveryone 1L', harga: 109000, tersedia: true, deskripsi: 'Latte praline bercampur karamel dalam ukuran 1L.' },
    { id: 42, nama: 'Pandan Latte 1L', kategori: 'FOREveryone 1L', harga: 99000, tersedia: true, deskripsi: 'Latte dengan aroma dan rasa pandan yang khas dari Fore Coffee dalam ukuran 1L.' },
    { id: 43, nama: 'Café Latte 1L', kategori: 'FOREveryone 1L', harga: 99000, tersedia: true, deskripsi: 'Latte tanpa gula dalam ukuran 1L yang pas untuk menemani momen kumpul bersama.' },
    { id: 44, nama: 'Nutty Oat Latte 1L', kategori: 'FOREveryone 1L', harga: 139000, tersedia: true, deskripsi: 'Latte dengan susu oat yang nikmat dalam ukuran 1L.' },
    { id: 45, nama: 'Almond Choco 1L', kategori: 'FOREveryone 1L', harga: 139000, tersedia: true, deskripsi: 'Cokelat terbaik dengan rasa almond dalam ukuran 1L yang pas untuk dinikmati bersama keluarga.' },
    { id: 46, nama: 'Matcha Green Tea 1L', kategori: 'FOREveryone 1L', harga: 109000, tersedia: true, deskripsi: 'Nikmatnya matcha berkualitas yang dipadukan dengan rasa creamy enak untuk diseduh di rumah.' },

    { id: 47, nama: 'Iced Sunrise Mont-Black', kategori: 'Favorite Choice', harga: 29000, tersedia: true, deskripsi: 'Americano dengan sentuhan rasa jeruk dilengkapi krim yang lembut.' },
    { id: 48, nama: 'Iced Starrycano', kategori: 'Favorite Choice', harga: 29000, tersedia: true, deskripsi: 'Kopi Americano yang bold bercampuran dengan belimbing dan apel, menambah rasa dan sensasi dinamis yang segar untuk si Jiwa Petualang.' },

    { id: 49, nama: 'Salt Bread', kategori: 'Fore Deli', harga: 19000, tersedia: true, deskripsi: 'Saltbread gurih berpadu dengan tekstur lembut dan lelehan butter yang menggoda.' },
    { id: 50, nama: 'Beef & Omelette Toast', kategori: 'Fore Deli', harga: 36000, tersedia: true, deskripsi: 'Perpaduan smoked beef, telur omelet, dan keju cheddar dalam English muffin yang khas dan lembut.' },
    { id: 51, nama: 'Mushroom Truffle Sandwich', kategori: 'Fore Deli', harga: 42000, tersedia: true, deskripsi: 'Sandwich dengan roti taburan parsley, jamur, saus truffle dan keju cheddar.' },
    { id: 52, nama: 'Roll Cake Cheese Pandan', kategori: 'Fore Deli', harga: 27000, tersedia: true, deskripsi: 'Bolu gulung pandan yang lembut dengan krim vanilla dan taburan keju parut.' },
    { id: 53, nama: 'Roll Cake Peanut Butter & Jam', kategori: 'Fore Deli', harga: 27000, tersedia: true, deskripsi: 'Bolu gulung vanila yang lembut dengan selai kacang dan selai stroberi.' },
    { id: 54, nama: 'Roll Cake Mocha', kategori: 'Fore Deli', harga: 27000, tersedia: true, deskripsi: 'Bolu gulung cokelat yang lembut dengan krim mocha dan taburan meises.' },
    { id: 55, nama: 'Beef Mentai Sandwich', kategori: 'Fore Deli', harga: 39000, tersedia: true, deskripsi: 'Sandwich dengan potongan daging, saus mentai, keju cheddar merah, dan paprika merah.' },
    { id: 56, nama: 'Cakalang Quiche', kategori: 'Fore Deli', harga: 36000, tersedia: true, deskripsi: 'Pie gurih dengan isian ikan cakalang, telur, krim, dan keju.' },
    { id: 57, nama: 'Pain au Tiramisu', kategori: 'Fore Deli', harga: 36000, tersedia: true, deskripsi: 'Pastry dengan isian almond paste rasa tiramisu dan topping cocoa crumble.' },
    { id: 58, nama: 'Cheesy Tuna Sandwich', kategori: 'Fore Deli', harga: 39000, tersedia: true, deskripsi: 'Sandwich dengan roti taburan wijen hitam, tuna mayo, saus tartar, keju mozzarella, keju cheddar merah, bawang bombay.' },
    { id: 59, nama: 'Chicken Teriyaki Sandwich', kategori: 'Fore Deli', harga: 39000, tersedia: true, deskripsi: 'Sandwich dengan roti taburan wijen putih, ayam bumbu teriyaki, mayonnaise teriyaki, keju cheddar, dan bawang bombay.' },
    { id: 60, nama: 'Smoked Beef & Cheese Sandwich', kategori: 'Fore Deli', harga: 39000, tersedia: true, deskripsi: 'Sandwich dengan roti focaccia taburan parsley, smoked beef, keju mozzarella, keju red cheddar, mayonnaise dan bawang bombay.' },
    { id: 61, nama: 'Blueberry Cheese Muffin', kategori: 'Fore Deli', harga: 36000, tersedia: true, deskripsi: 'Bolu padat rasa vanilla dengan isian krim keju bluberi dan topping crumble.' },
    { id: 62, nama: 'Choco Melt Muffin', kategori: 'Fore Deli', harga: 36000, tersedia: true, deskripsi: 'Bolu padat rasa coklat dengan isian coklat yang meleleh dan topping coklat chips.' },
    { id: 63, nama: 'Triple Cheese Danish', kategori: 'Fore Deli', harga: 36000, tersedia: true, deskripsi: 'Danish dengan isian krim keju.' },
    { id: 64, nama: 'Almond Croissant', kategori: 'Fore Deli', harga: 36000, tersedia: true, deskripsi: 'Croissant dengan taburan gula halus dan potongan almond.' },
    { id: 65, nama: 'Banana Chocolate Cake', kategori: 'Fore Deli', harga: 27000, tersedia: true, deskripsi: 'Bolu dengan paduan pisang dan coklat.' },
    { id: 66, nama: 'Cempedak Cake', kategori: 'Fore Deli', harga: 27000, tersedia: true, deskripsi: 'Bolu dengan potongan cempedak.' },
    { id: 67, nama: 'Butter Croissant', kategori: 'Fore Deli', harga: 24000, tersedia: true, deskripsi: 'Pastry dengan rasa dan aroma butter.' },
    { id: 68, nama: 'Pain au Chocolat', kategori: 'Fore Deli', harga: 29000, tersedia: true, deskripsi: 'Pastry dengan isi coklat di dalamnya.' },
    { id: 69, nama: 'Kouign-Amann', kategori: 'Fore Deli', harga: 29000, tersedia: true, deskripsi: 'Pastry dengan lapisan karamel manis dan juga taburan kayu manis.' },

    { id: 70, nama: 'Iced Choco Cookie Shake', kategori: 'Fore Junior', harga: 29000, tersedia: true, deskripsi: 'Rasa cokelat istimewa untuk momen manis dan penuh petualangan.' },
    { id: 71, nama: 'Iced Butterscotch Milk Crumble', kategori: 'Fore Junior', harga: 29000, tersedia: true, deskripsi: 'Butterscotch dengan paduan karamel, susu dengan sea salt cream dan caramel crumble sebagai topping.' },
    { id: 72, nama: 'Iced Vanilla O\' Crumbs', kategori: 'Fore Junior', harga: 29000, tersedia: true, deskripsi: 'Perpaduan vanilla, butterscotch dan susu dilengkapi dengan saus karamel juga topping oreo yang gurih di atasnya.' },
    { id: 73, nama: 'Iced Choco Caramel Cloud', kategori: 'Fore Junior', harga: 29000, tersedia: true, deskripsi: 'Nikmatnya cream salted caramel dengan paduan dark chocolate yang cocok untuk ceriakan hari.' },

    { id: 74, nama: 'Iced Matcha Butter Salt Cream', kategori: 'Non Coffee', harga: 31000, tersedia: true, deskripsi: 'Perpaduan matcha dengan krim Butter Salt yang populer dan memanjakan di setiap tegukan.' },
    { id: 75, nama: 'Iced Dark Chocolate', kategori: 'Non Coffee', harga: 34000, tersedia: true, deskripsi: 'Dibuat dari 100% dark chocolate dan paduan susu yang nikmat.' },
    { id: 76, nama: 'Hot Dark Chocolate', kategori: 'Non Coffee', harga: 34000, tersedia: true, deskripsi: 'Dibuat dari 100% dark chocolate dan paduan susu yang nikmat.' },
    { id: 77, nama: 'Iced Almond Choco', kategori: 'Non Coffee', harga: 39000, tersedia: true, deskripsi: 'Cokelat klasik dari Fore Coffee yang dipadu dengan susu almond. Sebuah definisi comfort drink yang sesungguhnya.' },
    { id: 78, nama: 'Hot Almond Choco', kategori: 'Non Coffee', harga: 39000, tersedia: true, deskripsi: 'Cokelat klasik dari Fore Coffee yang dipadu dengan susu almond. Sebuah definisi comfort drink yang sesungguhnya.' },
    { id: 79, nama: 'Iced Matcha Green Tea', kategori: 'Non Coffee', harga: 34000, tersedia: true, deskripsi: 'Bubuk matcha spesial Fore yang lembut dan creamy berpadu dengan susu segar.' },
    { id: 80, nama: 'Hot Matcha Green Tea', kategori: 'Non Coffee', harga: 34000, tersedia: true, deskripsi: 'Bubuk matcha spesial Fore yang lembut dan creamy berpadu dengan susu segar.' },
    { id: 81, nama: 'Iced Classic Milo', kategori: 'Non Coffee', harga: 25000, tersedia: true, deskripsi: 'Minuman klasik cokelat dengan rasa malt dengan saus creamy dan susu creamy.' },
    { id: 82, nama: 'Hot Classic Milo', kategori: 'Non Coffee', harga: 25000, tersedia: true, deskripsi: 'Minuman klasik cokelat dengan rasa malt dengan saus creamy dan susu creamy.' },

    { id: 83, nama: 'Iced Coco Peach Fusion', kategori: 'Refresher', harga: 29000, tersedia: true, deskripsi: 'Rasa segar dari peach, lychee, orange citrus, dan air kelapa.' },
    { id: 84, nama: 'Hibiscus Lychee Peach Yakult', kategori: 'Refresher', harga: 29000, tersedia: true, deskripsi: 'Kebaikan buah berry, hibiscus, dan yakult yang memberi kesegaran sepanjang hari.' },
    { id: 85, nama: 'Iced Sunny Citrus Jasmine', kategori: 'Refresher', harga: 31000, tersedia: true, deskripsi: 'Campuran spesial dari rasa buah tropikal, madu Manuka, dan teh jasmine yang menyegarkan sekaligus beraroma.' },

    { id: 86, nama: 'Iced English Breakfast', kategori: 'Tea', harga: 29000, tersedia: true, deskripsi: 'Teh hitam klasik harum yang legendaris.' },
    { id: 87, nama: 'Hot English Breakfast', kategori: 'Tea', harga: 29000, tersedia: true, deskripsi: 'Teh hitam klasik harum yang legendaris.' },
    { id: 88, nama: 'Iced Green Tea Jasmine', kategori: 'Tea', harga: 29000, tersedia: true, deskripsi: 'Teh hijau dengan sentuhan rasa melati.' },
    { id: 89, nama: 'Hot Green Tea Jasmine', kategori: 'Tea', harga: 29000, tersedia: true, deskripsi: 'Teh hijau dengan sentuhan rasa melati.' },
    { id: 90, nama: 'Iced Pure Chamomile', kategori: 'Tea', harga: 29000, tersedia: true, deskripsi: 'Teh bunga chamomile memiliki aroma madu yang kaya dan menghasilkan warna emas.' },
    { id: 91, nama: 'Hot Pure Chamomile', kategori: 'Tea', harga: 29000, tersedia: true, deskripsi: 'Teh bunga chamomile memiliki aroma madu yang kaya dan menghasilkan warna emas.' },
    { id: 92, nama: 'Iced Green Tea Mint', kategori: 'Tea', harga: 29000, tersedia: true, deskripsi: 'Teh merah halus dari Afrika Selatan dengan campuran rempah-rempah Perancis yang manis.' },
    { id: 93, nama: 'Hot Green Tea Mint', kategori: 'Tea', harga: 29000, tersedia: true, deskripsi: 'Teh merah halus dari Afrika Selatan dengan campuran rempah-rempah Perancis yang manis.' },

    { id: 94, nama: 'Iced Crunchy Cereal Latte', kategori: 'The Unexpected Twist', harga: 31000, tersedia: true, deskripsi: 'Perpaduan kopi susu sereal dengan rasa manis gurih, dilengkapi taburan cornflakes renyah.' },
    { id: 95, nama: 'Iced Salted Spanish Latte', kategori: 'The Unexpected Twist', harga: 27000, tersedia: true, deskripsi: 'Kopi susu Spanish dengan sentuhan gurih manis yang lembut di tiap tegukan.' },
    { id: 96, nama: 'Hot Crunchy Cereal Latte', kategori: 'The Unexpected Twist', harga: 31000, tersedia: true, deskripsi: 'Perpaduan kopi susu sereal dengan rasa manis gurih, dilengkapi taburan cornflakes renyah.' },
    { id: 97, nama: 'Hot Salted Spanish Latte', kategori: 'The Unexpected Twist', harga: 27000, tersedia: true, deskripsi: 'Kopi susu Spanish dengan sentuhan gurih manis yang lembut di tiap tegukan.' },

    { id: 98, nama: 'Coco Peach Fusion 250 ml', kategori: 'Fore x Citilink', harga: 46000, tersedia: true, deskripsi: 'Rasa segar dari peach, lychee, orange citrus, dan air kelapa dalam kemasan botol 250ml.' },
    { id: 99, nama: 'Classic Latte 250 ml', kategori: 'Fore x Citilink', harga: 38000, tersedia: true, deskripsi: 'Racikan espresso dengan Biji Kopi Arabica dan krim susu pilihan. 100% cita rasa kopi Indonesia.' },
    { id: 100, nama: 'Pandan Latte 250 ml', kategori: 'Fore x Citilink', harga: 46000, tersedia: true, deskripsi: 'Latte dengan rasa dan aroma unik dari ekstrak pandan alami dan espresso dari Biji Kopi Arabica. Menu spesial dari Fore Coffee.' },
    { id: 101, nama: 'Aren Latte 250 ml', kategori: 'Fore x Citilink', harga: 46000, tersedia: true, deskripsi: 'Cita rasa gula aren terbaik Indonesia berpadu sempurna dengan espresso premium dari Biji Kopi Arabica. Menu terlaris di Fore Coffee.' },

    { id: 102, nama: 'Caramel Praline Coffee Ice Blended', kategori: 'Ice Blended', harga: 34000, tersedia: true, deskripsi: 'Ice blended latte dengan saus Praline dan karamel.' },
    { id: 103, nama: 'Matcha Ice Blended', kategori: 'Ice Blended', harga: 34000, tersedia: true, deskripsi: 'Paduan Creamy Matcha khas Fore Coffee, susu segar, dengan es, pas untuk menyejukkan harimu!' },
    { id: 104, nama: 'Strawberry Ice Blended', kategori: 'Ice Blended', harga: 34000, tersedia: true, deskripsi: 'Manisnya strawberry bertemu dengan susu dan es dilapisi dengan strawberry puree.' },
    { id: 105, nama: 'Chocolate Ice Blended', kategori: 'Ice Blended', harga: 37000, tersedia: true, deskripsi: 'Ice blended cokelat spesial dengan susu pilihan.' },

    { id: 106, nama: 'Bubu in Black Totebag', kategori: 'Merchandise', harga: 119000, tersedia: true, deskripsi: 'Tas canvas warna hitam dengan rubber patch Bubu yang menggemaskan (Ukuran 42x30x10 cm).' },
    { id: 107, nama: 'Bubu in Rouge Totebag', kategori: 'Merchandise', harga: 119000, tersedia: true, deskripsi: 'Tas canvas warna merah muda dengan rubber patch Bubu yang menggemaskan (Ukuran 42x30x10 cm).' },
    { id: 108, nama: 'Bubu in Jade Totebag', kategori: 'Merchandise', harga: 119000, tersedia: true, deskripsi: 'Tas canvas warna hijau dengan rubber patch Bubu yang menggemaskan (Ukuran 42x30x10 cm).' },
    { id: 109, nama: 'Bubu in Mocha Totebag', kategori: 'Merchandise', harga: 119000, tersedia: true, deskripsi: 'Tas canvas warna cokelat dengan rubber patch Bubu yang menggemaskan (Ukuran 42x30x10 cm).' },
    { id: 110, nama: 'Bubu in Ocean Totebag', kategori: 'Merchandise', harga: 119000, tersedia: true, deskripsi: 'Tas canvas warna biru dengan rubber patch Bubu yang menggemaskan (Ukuran 42x30x10 cm).' },
    { id: 111, nama: 'Bubu & Fweends in Cream XL', kategori: 'Merchandise', harga: 169000, tersedia: true, deskripsi: 'Kaos desain Bubu dan karakter tahilalats, berbahan katun dengan ukuran XL (lebar 62 cm, panjang 74 cm, lengan 29 cm).' },
    { id: 112, nama: 'Bubu & Fweends in Cream L', kategori: 'Merchandise', harga: 169000, tersedia: true, deskripsi: 'Kaos desain Bubu dan karakter tahilalats, berbahan katun dengan ukuran L (lebar 58 cm, panjang 72 cm, lengan 28 cm).' },
    { id: 113, nama: 'Cheeky Bubu in Black XL', kategori: 'Merchandise', harga: 169000, tersedia: true, deskripsi: 'Kaos hitam desain Bubu yang menggemaskan, berbahan katun dengan ukuran XL (lebar 62 cm, panjang 74 cm, lengan 29 cm).' },
    { id: 114, nama: 'Cheeky Bubu in Black L', kategori: 'Merchandise', harga: 169000, tersedia: true, deskripsi: 'Kaos hitam desain Bubu yang menggemaskan, berbahan katun dengan ukuran L (lebar 58 cm, panjang 72 cm, lengan 28 cm).' },
    { id: 115, nama: 'Catfeinated Bubu Mug', kategori: 'Merchandise', harga: 99000, tersedia: true, deskripsi: 'Gelas berbahan keramik berukuran 390ml yang cocok untuk menemani momen ngopi.' },
    { id: 116, nama: 'Bubu Bottle', kategori: 'Merchandise', harga: 119000, tersedia: true, deskripsi: 'Botol minuman lucu berbentuk Bubu dengan bahan yang aman untuk minuman.' },
    { id: 117, nama: 'Sneaky Bubu Tumbler 500ml', kategori: 'Merchandise', harga: 299000, tersedia: true, deskripsi: 'Botol minum stainless dengan desain Bubu ukuran 500 ml, tahan panas hingga 12 jam dan dingin hingga 24 jam.' },
    { id: 118, nama: 'Bubu Travel Tumbler 450ml', kategori: 'Merchandise', harga: 249000, tersedia: true, deskripsi: 'Botol minum 450ml stainless steel dengan desain Bubu, tahan panas hingga 12 jam dan dingin hingga 24 jam.' },
    { id: 119, nama: 'Tumbler 18oz - Misty Cloud', kategori: 'Merchandise', harga: 229000, tersedia: true, deskripsi: 'Botol minum 532ml stainless steel warna abu merah, tahan panas hingga 12 jam dan dingin hingga 24 jam.' },

    { id: 120, nama: 'Charcoal Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna abu-abu gelap.' },
    { id: 121, nama: 'Butter Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna kuning lembut.' },
    { id: 122, nama: 'Frosty Blue Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna biru muda.' },
    { id: 123, nama: 'Pecan Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna cokelat muda.' },
    { id: 124, nama: 'Terracotta Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna terakota.' },
    { id: 125, nama: 'Dusty Rose Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna merah muda.' },
    { id: 126, nama: 'Dark Matcha Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna hijau muda.' },
    { id: 127, nama: 'Light Teal Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna biru kehijauan.' },
    { id: 128, nama: 'Pebble Tumbler Silicone Boot', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Alas botol minuman silicone warna abu-abu.' },
    { id: 129, nama: 'Charcoal Tumbler Strap', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Tali botol minuman berbahan nilon warna abu-abu gelap.' },
    { id: 130, nama: 'Butter Tumbler Strap', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Tali botol minuman berbahan nilon warna kuning lembut.' },
    { id: 131, nama: 'Frosty Blue Tumbler Strap', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Tali botol minuman berbahan nilon warna biru muda.' },
    { id: 132, nama: 'Pecan Tumbler Strap', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Tali botol minuman berbahan nilon warna cokelat muda.' },
    { id: 133, nama: 'Terracotta Tumbler Strap', kategori: 'Merchandise Accessories', harga: 5000, tersedia: true, deskripsi: 'Tali botol minuman berbahan nilon warna terakota.' },

    { id: 134, nama: 'Birthday Greeting Card', kategori: 'Others', harga: 0, tersedia: true, deskripsi: 'Kartu ucapan ulang tahun spesial dari Fore Coffee.' },
    { id: 135, nama: 'All Day Greeting Card', kategori: 'Others', harga: 0, tersedia: true, deskripsi: 'Kartu ucapan serbaguna spesial dari Fore Coffee.' },
    { id: 136, nama: 'Packaging Hampers S', kategori: 'Others', harga: 5000, tersedia: true, deskripsi: 'Kemasan hampers ukuran S.' },
    { id: 137, nama: 'Packaging Hampers M', kategori: 'Others', harga: 6000, tersedia: true, deskripsi: 'Kemasan hampers ukuran M.' },
    { id: 138, nama: 'Tas Belanja M', kategori: 'Others', harga: 5000, tersedia: true, deskripsi: 'Tas belanja ramah lingkungan ukuran M.' },
    { id: 139, nama: 'Tas Belanja S', kategori: 'Others', harga: 3000, tersedia: true, deskripsi: 'Tas belanja ramah lingkungan ukuran S.' },
    { id: 140, nama: 'Mystery Pouch', kategori: 'Others', harga: 5001, tersedia: true, deskripsi: 'Kantong misteri berisi kejutan spesial.' },
    { id: 141, nama: 'No Add On', kategori: 'Others', harga: 0, tersedia: true, deskripsi: 'Tanpa tambahan.' },
    { id: 142, nama: 'Stainless Straw - Google Review & Apology', kategori: 'Others', harga: 0, tersedia: true, deskripsi: 'Sedotan stainless steel ramah lingkungan.' },
    { id: 143, nama: 'Mineral Water', kategori: 'Others', harga: 12000, tersedia: true, deskripsi: 'Air mineral kemasan botol segar.' },
    { id: 144, nama: 'Greeting Card', kategori: 'Others', harga: 8000, tersedia: true, deskripsi: 'Jadikan kirimanmu lebih berkesan dengan kartu ucapan spesial dari Fore Coffee.' }
  ]);

  const [pesanan, setPesanan] = useState([]);
  const [nama, setNama] = useState('');
  const [nomorMeja, setNomorMeja] = useState('');
  const [pesanNotifikasi, setPesanNotifikasi] = useState(null);
  const [detailModalItem, setDetailModalItem] = useState(null);

  const totalJumlah = pesanan.reduce((sum, item) => sum + item.jumlah, 0);
  const totalHarga = pesanan.reduce((sum, item) => sum + (item.harga * item.jumlah), 0);

  const handleTambah = (item) => {
    if (!item.tersedia) return;
    setPesanan((prev) => {
      const ada = prev.find((p) => p.id === item.id);
      if (ada) {
        return prev.map((p) => (p.id === item.id ? { ...p, jumlah: p.jumlah + 1 } : p));
      }
      return [...prev, { ...item, jumlah: 1 }];
    });
  };

  const handleKurang = (id) => {
    setPesanan((prev) => {
      return prev
        .map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p))
        .filter((p) => p.jumlah > 0);
    });
  };

  const handleHapus = (id) => {
    setPesanan((prev) => prev.filter((p) => p.id !== id));
  };

  const handleKirimPesanan = (e) => {
    e.preventDefault();

    if (!nama.trim() || !nomorMeja.trim()) {
      setPesanNotifikasi({
        tipe: 'error',
        teks: 'Mohon lengkapi Nama Pelanggan dan Nomor Meja Anda!'
      });
      return;
    }

    if (pesanan.length === 0) {
      setPesanNotifikasi({
        tipe: 'error',
        teks: 'Keranjang pesanan Anda masih kosong. Silakan pilih menu terlebih dahulu!'
      });
      return;
    }

    setPesanNotifikasi({
      tipe: 'sukses',
      teks: `Terima kasih ${nama} (Meja ${nomorMeja})! Pesanan Anda telah berhasil dikirim ke kasir Fore Coffee.`
    });

    setNama('');
    setNomorMeja('');
    setPesanan([]);
  };

  const handlePilihNav = (idNav) => {
    setNavAktif(idNav);
    if (idNav === 'menu') {
      setKategoriTerpilih(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3ED]">
      <Navbar 
        navAktif={navAktif}
        setNavAktif={handlePilihNav}
        totalJumlah={totalJumlah}
        totalHarga={totalHarga}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-[#004D2E] via-[#1C3A27] to-[#291E19] text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden border border-[#003B23]">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block bg-[#007849] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider shadow-sm border border-emerald-400/30">
              Fore Coffee Tablet Order
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-2 text-white">
              Revolutionizing Your Daily Brew
            </h1>
            <p className="text-[#E6F4ED] text-sm sm:text-base leading-relaxed">
              Selamat datang di sistem pemesanan mandiri Fore Coffee. Pilih kategori menu favorit Anda untuk menjelajahi pilihan kopi dan hidangan istimewa.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-white/5 skew-x-12 hidden md:block"></div>
        </div>

        {pesanNotifikasi && (
          <div className={`mb-6 p-4 rounded-2xl flex items-center justify-between shadow-md transition-all ${
            pesanNotifikasi.tipe === 'error' 
              ? 'bg-rose-50 border border-rose-200 text-rose-800' 
              : 'bg-[#E6F4ED] border border-[#BBE3D0] text-[#004D2E]'
          }`}>
            <div className="flex items-center gap-3">
              <span className="text-xl">
                {pesanNotifikasi.tipe === 'error' ? '⚠️' : '🎉'}
              </span>
              <p className="font-semibold text-sm sm:text-base">{pesanNotifikasi.teks}</p>
            </div>
            <button 
              onClick={() => setPesanNotifikasi(null)}
              className="text-stone-400 hover:text-stone-600 font-bold px-2 py-1 text-sm rounded-lg"
            >
              ✕
            </button>
          </div>
        )}

        {navAktif === 'home' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E6DFD3] mb-8 space-y-6">
            <h2 className="text-2xl font-black text-[#291E19]">Selamat Datang di Fore Coffee</h2>
            <p className="text-[#57534E] text-sm leading-relaxed">
              Nikmati kenyamanan memesan minuman, makanan, dan merchandise favorit Anda secara praktis langsung dari tablet meja. Kami mengombinasikan keahlian barista, bahan baku lokal berkualitas, dan sentuhan teknologi terkini.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#F6F3ED] p-5 rounded-2xl border border-[#E6DFD3]">
                <span className="text-2xl mb-2 block">☕</span>
                <h3 className="font-bold text-[#291E19] mb-1">100% Arabika Indonesia</h3>
                <p className="text-xs text-[#78716C]">Biji kopi terpilih disangrai sempurna untuk kualitas cita rasa terbaik.</p>
              </div>
              <div className="bg-[#F6F3ED] p-5 rounded-2xl border border-[#E6DFD3]">
                <span className="text-2xl mb-2 block">🌿</span>
                <h3 className="font-bold text-[#291E19] mb-1">Ramah Lingkungan</h3>
                <p className="text-xs text-[#78716C]">Pengemasan bertanggung jawab demi keberlanjutan bumi kita.</p>
              </div>
              <div className="bg-[#F6F3ED] p-5 rounded-2xl border border-[#E6DFD3]">
                <span className="text-2xl mb-2 block">📱</span>
                <h3 className="font-bold text-[#291E19] mb-1">Pemesanan Cepat</h3>
                <p className="text-xs text-[#78716C]">Proses pemesanan langsung terhubung otomatis ke sistem kasir.</p>
              </div>
            </div>
            <button 
              onClick={() => handlePilihNav('menu')} 
              className="bg-[#004D2E] hover:bg-[#003B23] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Lihat Kategori Menu
            </button>
          </div>
        )}

        {navAktif === 'tentang' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E6DFD3] mb-8 space-y-6">
            <div className="border-b border-[#E6DFD3] pb-4">
              <span className="text-xs font-bold text-[#7C4A27] uppercase tracking-wider">Our Story</span>
              <h2 className="text-2xl font-black text-[#291E19]">Tentang Fore Coffee</h2>
            </div>
            
            <div className="space-y-4 text-[#57534E] text-sm leading-relaxed">
              <p>
                Didirikan pada tahun 2018, Fore Coffee merupakan rintisan kedai kopi modern dengan komitmen untuk menyajikan kopi spesial berkualitas terbaik bagi setiap pelanggan. Terinspirasi dari makna kata &quot;Forest&quot; (hutan), Fore Coffee berorientasi untuk tumbuh secara berkelanjutan, kuat, serta memberikan dampak positif bagi ekosistem dan komunitas penikmat kopi di Indonesia.
              </p>
              <p>
                Melalui dukungan jaringan luas dan inovasi teknologi terkini, seluruh biji kopi berkualitas didapatkan langsung dari petani lokal pilihan. Biji kopi diproses serta disangrai dengan standar tinggi dan diracik oleh barista berpengalaman untuk memberikan pengalaman menikmati sajian kopi terbaik di setiap cangkirnya.
              </p>
            </div>
          </div>
        )}

        {navAktif === 'kontak' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E6DFD3] mb-8 space-y-4">
            <h2 className="text-2xl font-black text-[#291E19]">Hubungi Kami</h2>
            <p className="text-[#57534E] text-sm leading-relaxed mb-4">
              Butuh bantuan saat memesan di meja? Silakan sampaikan pesan Anda kepada staf barista terdekat kami atau hubungi kami melalui kontak resmi berikut:
            </p>
            <div className="space-y-2 text-xs text-[#291E19] font-medium bg-[#F6F3ED] p-5 rounded-2xl border border-[#E6DFD3]">
              <p>📍 Alamat: Fore Coffee Store / Tablet Order Meja</p>
              <p>📞 Layanan Pelanggan: 1500-FORE (3673)</p>
              <p>✉️ Email: support@fore.coffee</p>
              <p>🌐 Website: https://fore.coffee/id/</p>
            </div>
          </div>
        )}

        {navAktif === 'menu' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <section className="lg:col-span-8">
              <MenuList 
                menuData={menuData} 
                kategoriTerpilih={kategoriTerpilih}
                setKategoriTerpilih={setKategoriTerpilih}
                pesanan={pesanan}
                onTambah={handleTambah}
                onKurang={handleKurang}
                onDetail={setDetailModalItem}
              />
            </section>

            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                <RingkasanPesanan 
                  pesanan={pesanan}
                  totalJumlah={totalJumlah}
                  totalHarga={totalHarga}
                  onTambah={handleTambah}
                  onKurang={handleKurang}
                  onHapus={handleHapus}
                />

                <FormPesan 
                  nama={nama}
                  setNama={setNama}
                  nomorMeja={nomorMeja}
                  setNomorMeja={setNomorMeja}
                  onSubmit={handleKirimPesanan}
                />
              </div>
            </aside>
          </div>
        )}
      </main>

      {detailModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#291E19]/70 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-[#E6DFD3]">
            <button 
              onClick={() => setDetailModalItem(null)}
              className="absolute top-4 right-4 bg-[#F6F3ED] hover:bg-[#E6DFD3] text-[#291E19] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>
            <div className="mb-4">
              <span className="inline-block bg-[#E6F4ED] text-[#004D2E] font-bold text-xs px-3 py-1 rounded-full mb-2">
                {detailModalItem.kategori}
              </span>
              <h3 className="text-xl font-extrabold text-[#291E19]">{detailModalItem.nama}</h3>
              <p className="text-[#007849] font-black text-lg mt-1">
                Rp {detailModalItem.harga.toLocaleString('id-ID')}
              </p>
            </div>
            <p className="text-[#57534E] text-sm leading-relaxed mb-6 bg-[#F6F3ED] p-4 rounded-2xl border border-[#E6DFD3]">
              {detailModalItem.deskripsi}
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setDetailModalItem(null)}
                className="flex-1 py-3 border border-[#E6DFD3] rounded-xl text-[#57534E] font-semibold text-sm hover:bg-[#F6F3ED]"
              >
                Tutup
              </button>
              <button 
                disabled={!detailModalItem.tersedia}
                onClick={() => {
                  handleTambah(detailModalItem);
                  setDetailModalItem(null);
                }}
                className={`flex-1 py-3 rounded-xl font-bold text-sm text-white shadow-md transition-all ${
                  detailModalItem.tersedia 
                    ? 'bg-[#004D2E] hover:bg-[#003B23] active:scale-95' 
                    : 'bg-stone-300 cursor-not-allowed'
                }`}
              >
                {detailModalItem.tersedia ? '+ Tambah ke Pesanan' : 'Stok Habis'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;