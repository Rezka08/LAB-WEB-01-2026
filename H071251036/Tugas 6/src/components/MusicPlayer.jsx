export default function MusicPlayer() {
  return (
    <section className="bg-slate-800 py-8 text-center">
      <h2 className="mb-4 text-xl font-bold text-white">Musik Latar</h2>
      {/* Memanggil audio dari folder public */}
      <audio controls className="mx-auto w-11/12 max-w-md">
        <source src="/Pikiran Yang Matang.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung tag audio.
      </audio>
    </section>
  )
}