    "use client";

    import { useState, useEffect } from "react";

    const quotes = [
    {
        teks: "Tahu kau mengapa aku sayangi kau lebih dari siapa pun? Karena kau menulis. Suaramu takkan padam ditelan angin.",
        tokoh: "Pramoedya Ananta Toer",
        karya: "Bumi Manusia"
    },
    {
        teks: "Perjuangan tidak akan pernah sia-sia selama ingatan dan kisah keberanian terus kita jaga bersama.",
        tokoh: "Leila S. Chudori",
        karya: "Laut Bercerita"
    },
    {
        teks: "Bahkan kode yang buruk pun bisa berfungsi. Namun jika kode tidak bersih, hal itu bisa membuat tim pengembang berlutut.",
        tokoh: "Robert C. Martin",
        karya: "Clean Code"
    },
    {
        teks: "Setiap orang bisa menulis kode yang dimengerti komputer. Programmer hebat menulis kode yang dapat dimengerti manusia.",
        tokoh: "Martin Fowler",
        karya: "Refactoring"
    },
    {
        teks: "Mencemaskan hal-hal di luar kendali kita hanya menyita ketenangan pikiran. Fokuslah pada apa yang sanggup kau tata.",
        tokoh: "Henry Manampiring",
        karya: "Filosofi Teras"
    },
    {
        teks: "Perubahan kecil setiap hari, jika ditumpuk secara konsisten, akan menjelma menjadi pencapaian yang luar biasa.",
        tokoh: "James Clear",
        karya: "Atomic Habits"
    },
    {
        teks: "Kemampuan untuk fokus mendalam tanpa distraksi di tengah dunia yang bising adalah nilai tertinggi di era digital.",
        tokoh: "Cal Newport",
        karya: "Deep Work"
    },
    {
        teks: "Kita lebih sering menderita dalam imajinasi dan pikiran kita sendiri daripada dalam kenyataan sesungguhnya.",
        tokoh: "Seneca",
        karya: "Surat Filosofis Stoisisme"
    },
    {
        teks: "Sebuah buku adalah cermin; jika seekor kera mengintip ke dalamnya, Anda tidak bisa berharap seorang rasul akan tampak.",
        tokoh: "Georg Christoph Lichtenberg",
        karya: "Aphorisms"
    }
    ];

    export default function LiteraryQuote() {
    const [quote, setQuote] = useState(quotes[0]);

    useEffect(() => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(random);
    }, []);

    return (
        <aside className="my-8 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-center relative overflow-hidden transition-all duration-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <p className="font-serif italic text-zinc-300 text-sm sm:text-base leading-relaxed mb-2">
            &ldquo;{quote.teks}&rdquo;
        </p>
        <p className="text-xs text-amber-400/90 font-medium">
            — {quote.tokoh}, <span className="text-zinc-500 italic">{quote.karya}</span>
        </p>
        </aside>
    );
    }