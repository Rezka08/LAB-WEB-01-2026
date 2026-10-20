    const Skills = () => {
    const skillCategories = [
        {
        id: 1,
        title: "Hardware Switch Deployment",
        description: "Konfigurasi switch fisik multi-vendor (VLAN, Trunking 802.1Q, Port Security)",
        tags: ["Cisco Catalyst", "Edgecore", "Ruijie", "HPE Aruba"]
        },
        {
        id: 2,
        title: "Routing & IP Engineering",
        description: "Konfigurasi RouterOS via Winbox, firewall filter, NAT, bandwidth queues, dan alokasi IP",
        tags: ["MikroTik RouterOS", "Winbox GUI", "Subnetting VLSM/CIDR"]
        },
        {
        id: 3,
        title: "Simulation & Lab Management",
        description: "Pemodelan topologi enterprise serta pemeliharaan komprehensif hardware komputer",
        tags: ["Cisco Packet Tracer", "Topology Design", "Structured Cabling", "Hardware Troubleshooting"]
        }
    ];

    return (
        <section id="skills" className="space-y-6">
        <div>
            <span className="text-xs font-bold tracking-widest text-[#c05621] uppercase">
            KOMPETENSI
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mt-1">
            Keahlian & Penguasaan Perangkat
            </h2>
            <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Implementasi langsung pada perangkat keras jaringan fisik dan lingkungan simulasi.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
            <div
                key={cat.id}
                className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-6 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] space-y-4 flex flex-col justify-between"
            >
                <div className="space-y-2">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white">{cat.title}</h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {cat.description}
                </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                {cat.tags.map((tag, idx) => (
                    <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#f2ece0] dark:bg-[#252220] text-stone-800 dark:text-stone-300 text-xs font-medium rounded-lg border border-[#e2d8c7] dark:border-[#332f2c]"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            ))}
        </div>
        </section>
    );
    };

    export default Skills;