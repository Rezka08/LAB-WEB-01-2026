import { useState } from "react";

function FormPesan({ jumlahItem, onKirim }) {
    const [nama, setNama] = useState("");
    const [nomorMeja, setNomorMeja] = useState("");
    const [error, setError] = useState({ nama: "", meja: "", pesanan: "" });
    const [terkirim, setTerkirim] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const angkaMeja = Number(nomorMeja);
        const errNama = nama.trim() === "" ? "Nama wajib diisi." : "";
        const errMeja =
        nomorMeja.trim() === "" ||
        !Number.isInteger(angkaMeja) ||
        angkaMeja < 1 ||
        angkaMeja > 20
            ? "Nomor meja harus angka 1 sampai 20."
            : "";
        const errPesanan =
        jumlahItem === 0 ? "Pesanan masih kosong. Tambahkan menu dulu." : "";

        setError({ nama: errNama, meja: errMeja, pesanan: errPesanan });

        if (errNama || errMeja || errPesanan) {
        setTerkirim(false);
        return;
        }

        setTerkirim(true);
        setNama("");
        setNomorMeja("");
        onKirim();
    }

    return (
        <section className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-xl font-extrabold">Kirim Pesanan</h2>

        <form onSubmit={handleSubmit} noValidate className="mt-3 flex flex-col gap-3">
            <div>
            <input
                type="text"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full rounded-2xl bg-krem px-4 py-3 outline-none focus:ring-2 focus:ring-orange_pumpkin"
            />
            {error.nama && <p className="mt-1 text-sm text-orange-tua">{error.nama}</p>}
            </div>

            <div>
            <input
                type="number"
                placeholder="Nomor meja"
                min = "1"
                max = "20"
                value={nomorMeja}
                onChange={(e) => setNomorMeja(e.target.value)}
                className="w-full rounded-2xl bg-krem px-4 py-3 outline-none focus:ring-2 focus:ring-merah"
            />
            {error.meja && <p className="mt-1 text-sm text-orange-tua">{error.meja}</p>}
            </div>

            {error.pesanan && <p className="text-sm text-orange-tua">{error.pesanan}</p>}

            <button
            type="submit"
            className="rounded-full bg-orange-pumpkin px-5 py-3 font-bold text-white hover:bg-orange-tua"
            >
            Kirim Pesanan
            </button>
        </form>

        {terkirim && (
            <p className="mt-3 rounded-2xl bg-krem px-4 py-3 text-sm font-semibold">
            Terima kasih, pesanan sudah terkirim!
            </p>
        )}
        </section>
    );
    }

export default FormPesan;
