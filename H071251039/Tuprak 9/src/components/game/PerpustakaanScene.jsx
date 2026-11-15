"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { PCFShadowMap, Vector3, Euler } from "three";
import { dataBuku, warnaKategori } from "@/data/dataBuku";

// Pemetaan 3 rak buku ke data buku dari dataBuku.js
const RAK_KONFIG = [
  {
    id: "rak-teknologi",
    label: "RAK 01 • TEKNOLOGI",
    kategori: "Teknologi",
    warnaAksen: "#3d5cff",
    posisi: [-5.5, 0, -4],
    rotasi: [0, 0.25, 0],
    bukuIds: ["1", "2", "3"],
  },
  {
    id: "rak-fiksi",
    label: "RAK 02 • FIKSI",
    kategori: "Fiksi",
    warnaAksen: "#ff8fd0",
    posisi: [0, 0, -5.5],
    rotasi: [0, 0, 0],
    bukuIds: ["4", "5", "6"],
  },
  {
    id: "rak-pengembangan",
    label: "RAK 03 • PENGEMBANGAN DIRI",
    kategori: "Pengembangan Diri",
    warnaAksen: "#8df2d0",
    posisi: [5.5, 0, -4],
    rotasi: [0, -0.25, 0],
    bukuIds: ["7", "8", "9"],
  },
];

// Model 3D Buku individual di rak
function BookMesh({ buku, offsetIndex, warnaAksen, isNear, modalOpen, onSelect }) {
  const xOffset = (offsetIndex - 1) * 0.45;
  const bookRef = useRef(null);

  useFrame((state) => {
    if (isNear && !modalOpen && bookRef.current) {
      bookRef.current.position.y = 1.05 + Math.sin(state.clock.elapsedTime * 4) * 0.04;
    } else if (bookRef.current) {
      bookRef.current.position.y = 1.05;
    }
  });

  return (
    <group ref={bookRef} position={[xOffset, 1.05, 0.15]}>
      {/* Cover / Spine Buku */}
      <mesh
        castShadow
        onClick={(e) => {
          e.stopPropagation();
          onSelect(buku);
        }}
      >
        <boxGeometry args={[0.12, 0.65, 0.45]} />
        <meshStandardMaterial
          color={isNear && !modalOpen ? "#ffd23f" : warnaAksen}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Lembar Halaman Buku */}
      <mesh position={[0.04, 0, 0]}>
        <boxGeometry args={[0.04, 0.6, 0.42]} />
        <meshStandardMaterial color="#fff4d6" roughness={0.7} />
      </mesh>

      {/* Indikator visual 3D di atas buku saat didekati (murni mesh Three.js, tanpa DOM) */}
      {isNear && !modalOpen && (
        <mesh position={[0, 0.52, 0]} rotation={[0, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.08, 0]} />
          <meshStandardMaterial color="#ffd23f" emissive="#ffd23f" emissiveIntensity={0.8} />
        </mesh>
      )}
    </group>
  );
}

// Plang Nama Rak Buku 3D Murni (Tanpa DOM)
function ShelfSign({ warnaAksen }) {
  return (
    <group position={[0, 2.7, 0]}>
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.0, 0.35, 0.08]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      <mesh position={[0, 0, 0.045]}>
        <boxGeometry args={[1.9, 0.06, 0.09]} />
        <meshStandardMaterial color={warnaAksen} />
      </mesh>
    </group>
  );
}

// Model 3D Rak Buku
function Bookshelf({ config, bukuList, nearBookId, modalOpen, onSelectBook }) {
  const { warnaAksen, posisi, rotasi, bukuIds } = config;

  return (
    <group position={posisi} rotation={rotasi}>
      <ShelfSign warnaAksen={warnaAksen} />

      {/* Struktur Lemari Kayu */}
      <mesh position={[-1.1, 1.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.08, 2.5, 0.8]} />
        <meshStandardMaterial color="#2c1d11" roughness={0.8} />
      </mesh>
      <mesh position={[1.1, 1.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.08, 2.5, 0.8]} />
        <meshStandardMaterial color="#2c1d11" roughness={0.8} />
      </mesh>
      <mesh position={[0, 1.25, -0.38]} receiveShadow>
        <boxGeometry args={[2.2, 2.5, 0.05]} />
        <meshStandardMaterial color="#1f140c" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.48, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.3, 0.08, 0.82]} />
        <meshStandardMaterial color="#362315" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.06, 0.78]} />
        <meshStandardMaterial color="#362315" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[2.2, 0.08, 0.8]} />
        <meshStandardMaterial color="#2c1d11" roughness={0.8} />
      </mesh>

      {/* Buku-buku di Rak ini */}
      {bukuIds.map((id, idx) => {
        const buku = bukuList.find((b) => b.id === id);
        if (!buku) return null;
        return (
          <BookMesh
            key={buku.id}
            buku={buku}
            offsetIndex={idx}
            warnaAksen={warnaAksen}
            isNear={!modalOpen && nearBookId === buku.id}
            modalOpen={modalOpen}
            onSelect={onSelectBook}
          />
        );
      })}
    </group>
  );
}

// Meja Baca di tengah ruangan
function ReadingTable({ position = [0, 0, 1] }) {
  return (
    <group position={position}>
      {/* Karpet bawah meja */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4.5, 3]} />
        <meshStandardMaterial color="#4a3e35" roughness={0.9} />
      </mesh>

      {/* Daun Meja */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.08, 1.6]} />
        <meshStandardMaterial color="#543821" roughness={0.6} />
      </mesh>
      {/* Kaki Meja */}
      <mesh position={[-1.45, 0.36, -0.65]} castShadow>
        <boxGeometry args={[0.08, 0.72, 0.08]} />
        <meshStandardMaterial color="#1a110a" />
      </mesh>
      <mesh position={[1.45, 0.36, -0.65]} castShadow>
        <boxGeometry args={[0.08, 0.72, 0.08]} />
        <meshStandardMaterial color="#1a110a" />
      </mesh>
      <mesh position={[-1.45, 0.36, 0.65]} castShadow>
        <boxGeometry args={[0.08, 0.72, 0.08]} />
        <meshStandardMaterial color="#1a110a" />
      </mesh>
      <mesh position={[1.45, 0.36, 0.65]} castShadow>
        <boxGeometry args={[0.08, 0.72, 0.08]} />
        <meshStandardMaterial color="#1a110a" />
      </mesh>

      {/* Lampu Baca Klasik (Banker's Lamp) */}
      <group position={[0, 0.8, 0]}>
        <mesh position={[0, 0.02, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.04, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.35, 12]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.26, 16, 1, false, 0, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#1b4d2e" roughness={0.2} metalness={0.1} />
        </mesh>
        <pointLight position={[0, 0.3, 0]} intensity={1.8} distance={3} color="#ffe8b0" />
      </group>

      {/* Buku terbuka di atas meja */}
      <group position={[0.7, 0.8, 0]} rotation={[0, 0.2, 0]}>
        <mesh>
          <boxGeometry args={[0.45, 0.02, 0.32]} />
          <meshStandardMaterial color="#fff4d6" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// Lingkungan Ruangan Perpustakaan
function RoomEnvironment() {
  return (
    <group>
      {/* Lantai Ruangan */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial color="#9c7a56" roughness={0.7} metalness={0.05} />
      </mesh>

      {/* Plafon Ruangan */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4.2, 0]}>
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial color="#2d221b" roughness={0.9} />
      </mesh>

      {/* Balok Kayu Plafon */}
      {[-6, -2, 2, 6].map((x) => (
        <mesh key={`beam-${x}`} position={[x, 4.1, 0]}>
          <boxGeometry args={[0.2, 0.2, 22]} />
          <meshStandardMaterial color="#1a120c" />
        </mesh>
      ))}

      {/* Dinding Belakang */}
      <mesh position={[0, 2.1, -9]} receiveShadow>
        <boxGeometry args={[22, 4.2, 0.2]} />
        <meshStandardMaterial color="#e8dfce" roughness={0.85} />
      </mesh>

      {/* Dinding Depan */}
      <mesh position={[0, 2.1, 9]} receiveShadow>
        <boxGeometry args={[22, 4.2, 0.2]} />
        <meshStandardMaterial color="#e8dfce" roughness={0.85} />
      </mesh>

      {/* Dinding Kiri */}
      <mesh position={[-9, 2.1, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[22, 4.2, 0.2]} />
        <meshStandardMaterial color="#ded4c0" roughness={0.85} />
      </mesh>

      {/* Dinding Kanan */}
      <mesh position={[9, 2.1, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[22, 4.2, 0.2]} />
        <meshStandardMaterial color="#ded4c0" roughness={0.85} />
      </mesh>

      {/* Papan Slogan 3D Murni */}
      <group position={[0, 3.4, -8.85]}>
        <mesh>
          <boxGeometry args={[6.2, 0.6, 0.06]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh position={[0, 0, 0.035]}>
          <boxGeometry args={[6.0, 0.08, 0.07]} />
          <meshStandardMaterial color="#ffd23f" />
        </mesh>
      </group>
    </group>
  );
}

const cameraDirection = new Vector3();
const sideDirection = new Vector3();
const moveVector = new Vector3();
const rayOrigin = new Vector3();
const rayDirection = new Vector3();
const toBookVector = new Vector3();

// Kontrol Pemain Kamera FPS & Tombol WASD (Tanpa dependensi Drei PointerLockControls)
function PlayerController({
  isLocked,
  modalOpen,
  targetBooks,
  onNearBookChange,
  onInteractBook,
}) {
  const keys = useRef({ forward: false, backward: false, left: false, right: false });
  const mouseDelta = useRef({ x: 0, y: 0 });
  const lastNearId = useRef(null);

  // Reset kontrol saat modal terbuka
  useEffect(() => {
    if (modalOpen) {
      keys.current = { forward: false, backward: false, left: false, right: false };
      mouseDelta.current = { x: 0, y: 0 };
      lastNearId.current = null;
      onNearBookChange(null);
    }
  }, [modalOpen, onNearBookChange]);

  // Listener mouse movement saat locked
  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isLocked || modalOpen) return;
      mouseDelta.current.x += e.movementX || 0;
      mouseDelta.current.y += e.movementY || 0;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [isLocked, modalOpen]);

  // Listener klik mouse kiri untuk berinteraksi dengan buku yang sedang dibidik
  useEffect(() => {
    const handleMouseDown = (e) => {
      if (modalOpen || !isLocked) return;
      if (e.button === 0) {
        onInteractBook();
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [modalOpen, isLocked, onInteractBook]);

  // Event listener keyboard WASD & E
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalOpen) return;
      if (e.code === "KeyW" || e.code === "ArrowUp") keys.current.forward = true;
      if (e.code === "KeyS" || e.code === "ArrowDown") keys.current.backward = true;
      if (e.code === "KeyA" || e.code === "ArrowLeft") keys.current.left = true;
      if (e.code === "KeyD" || e.code === "ArrowRight") keys.current.right = true;
      if (e.code === "KeyE") {
        onInteractBook();
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === "KeyW" || e.code === "ArrowUp") keys.current.forward = false;
      if (e.code === "KeyS" || e.code === "ArrowDown") keys.current.backward = false;
      if (e.code === "KeyA" || e.code === "ArrowLeft") keys.current.left = false;
      if (e.code === "KeyD" || e.code === "ArrowRight") keys.current.right = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onInteractBook, modalOpen]);

  useFrame((state, delta) => {
    if (!isLocked || modalOpen) return;

    const cam = state.camera;

    // Rotasi kamera dari akumulasi mouse movement
    if (mouseDelta.current.x !== 0 || mouseDelta.current.y !== 0) {
      cam.rotation.order = "YXZ";
      cam.rotation.y -= mouseDelta.current.x * 0.0022;
      cam.rotation.x -= mouseDelta.current.y * 0.0022;
      // Batasi sudut pandang atas & bawah
      cam.rotation.x = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, cam.rotation.x));
      mouseDelta.current.x = 0;
      mouseDelta.current.y = 0;
    }

    const speed = 4.8 * delta;

    // Arah pandangan depan kamera pada bidang horizontal XZ
    cam.getWorldDirection(cameraDirection);
    cameraDirection.y = 0;
    cameraDirection.normalize();

    // Arah samping kamera (strafe)
    sideDirection.crossVectors(cam.up, cameraDirection).normalize();

    moveVector.set(0, 0, 0);

    if (keys.current.forward) moveVector.add(cameraDirection);
    if (keys.current.backward) moveVector.sub(cameraDirection);
    if (keys.current.left) moveVector.add(sideDirection);
    if (keys.current.right) moveVector.sub(sideDirection);

    if (moveVector.lengthSq() > 0) {
      moveVector.normalize().multiplyScalar(speed);
      cam.position.x += moveVector.x;
      cam.position.z += moveVector.z;
    }

    // Ketinggian mata pemain konstan
    cam.position.y = 1.7;

    // Batas ruangan agar pemain tidak tembus tembok
    cam.position.x = Math.max(-8, Math.min(8, cam.position.x));
    cam.position.z = Math.max(-7.5, Math.min(7.5, cam.position.z));

    // Deteksi buku terarah dengan raycasting bidikan kursor presisi (Crosshair Ray Aiming)
    cam.getWorldDirection(rayDirection);
    rayOrigin.copy(cam.position);

    let closestBook = null;
    let bestScore = Infinity;

    for (const item of targetBooks) {
      toBookVector.subVectors(item.worldPos, rayOrigin);
      const distAlongRay = toBookVector.dot(rayDirection);

      // Buku harus berada di depan kamera dan dalam jangkauan interaksi (0.5m s/d 3.8m)
      if (distAlongRay > 0.5 && distAlongRay < 3.8) {
        // Jarak tegak lurus (perpendicular) dari garis bidikan kursor ke posisi buku
        const perpX = toBookVector.x - distAlongRay * rayDirection.x;
        const perpY = toBookVector.y - distAlongRay * rayDirection.y;
        const perpZ = toBookVector.z - distAlongRay * rayDirection.z;
        const perpDist = Math.sqrt(perpX * perpX + perpY * perpY + perpZ * perpZ);

        // Toleransi bidikan kursor: 0.42m di jarak dekat, melebar sedikit secara proporsional seiring jarak
        const maxPerp = 0.42 + distAlongRay * 0.08;

        if (perpDist < maxPerp) {
          // Bobot skor mengutamakan ketepatan titik tengah bidikan kursor (perpDist)
          const score = perpDist + distAlongRay * 0.12;
          if (score < bestScore) {
            bestScore = score;
            closestBook = item.buku;
          }
        }
      }
    }

    if (closestBook?.id !== lastNearId.current) {
      lastNearId.current = closestBook?.id || null;
      onNearBookChange(closestBook);
    }
  });

  return null;
}

export default function PerpustakaanScene() {
  const [isLocked, setIsLocked] = useState(false);
  const [sedangCooldown, setSedangCooldown] = useState(false);
  const [nearBook, setNearBook] = useState(null);
  const [bukuTerpilih, setBukuTerpilih] = useState(null);

  const canvasDomRef = useRef(null);
  const waktuUnlockTerakhir = useRef(0);

  // Buka kunci kursor (exitPointerLock)
  const bukaKunci = useCallback(() => {
    if (typeof document === "undefined") return;
    waktuUnlockTerakhir.current = Date.now();
    try {
      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
    } catch {
      // Abaikan
    }
  }, []);

  // Kunci kursor sendiri pada elemen canvas (gl.domElement) dengan proteksi cooldown & Promise catch
  const kunciKursor = useCallback(() => {
    if (typeof document === "undefined") return;
    const sekarang = Date.now();
    // Cooldown 1000 ms setelah unlock terakhir
    if (sekarang - waktuUnlockTerakhir.current < 1000) {
      return;
    }
    const canvas = canvasDomRef.current;
    if (!canvas) return;

    try {
      const res = canvas.requestPointerLock();
      if (res && typeof res.catch === "function") {
        res.catch(() => {
          setIsLocked(false);
        });
      }
      setIsLocked(true);
    } catch {
      setIsLocked(false);
    }
  }, []);

  // Monitor event pointerlockchange murni dari document
  useEffect(() => {
    const onPointerLockChange = () => {
      const locked = Boolean(document.pointerLockElement);
      setIsLocked(locked);
      if (!locked) {
        waktuUnlockTerakhir.current = Date.now();
        setSedangCooldown(true);
        const timer = setTimeout(() => {
          setSedangCooldown(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    };

    const onPointerLockError = () => {
      setIsLocked(false);
    };

    document.addEventListener("pointerlockchange", onPointerLockChange);
    document.addEventListener("pointerlockerror", onPointerLockError);

    return () => {
      document.removeEventListener("pointerlockchange", onPointerLockChange);
      document.removeEventListener("pointerlockerror", onPointerLockError);
      if (typeof document !== "undefined" && document.pointerLockElement) {
        try {
          document.exitPointerLock();
        } catch {
          // Abaikan
        }
      }
    };
  }, []);

  // Hitung posisi akurat dunia 3D tiap buku (memperhitungkan rotasi & posisi rak)
  const targetBooks = useMemo(() => {
    const list = [];
    for (const rak of RAK_KONFIG) {
      const euler = new Euler(rak.rotasi[0], rak.rotasi[1], rak.rotasi[2]);
      rak.bukuIds.forEach((id, idx) => {
        const buku = dataBuku.find((b) => b.id === id);
        if (!buku) return;
        const xOffset = (idx - 1) * 0.45;
        const localPos = new Vector3(xOffset, 1.05, 0.15).applyEuler(euler);
        const worldPos = new Vector3(
          rak.posisi[0] + localPos.x,
          rak.posisi[1] + localPos.y,
          rak.posisi[2] + localPos.z
        );
        list.push({ buku, worldPos });
      });
    }
    return list;
  }, []);

  // Tangani interaksi tombol E untuk membuka buku
  const handleInteractBook = useCallback(() => {
    if (nearBook && !bukuTerpilih) {
      setBukuTerpilih(nearBook);
      setNearBook(null);
      bukaKunci();
    }
  }, [nearBook, bukuTerpilih, bukaKunci]);

  // Tutup panel detail buku (untuk tombol ESC)
  const tutupModal = useCallback(() => {
    setBukuTerpilih(null);
  }, []);

  // Lanjut menjelajah langsung dari modal buku (langsung kunci kursor dan kembali ke 3D tanpa menu perantara)
  const lanjutMenjelajahDariModal = useCallback(() => {
    setBukuTerpilih(null);
    setIsLocked(true);
    const canvas = canvasDomRef.current;
    if (!canvas) return;

    try {
      const res = canvas.requestPointerLock();
      if (res && typeof res.catch === "function") {
        res.catch(() => {
          setIsLocked(false);
        });
      }
    } catch {
      setIsLocked(false);
    }
  }, []);

  // Menutup modal dengan tombol ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && bukuTerpilih) {
        tutupModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [bukuTerpilih, tutupModal]);

  return (
    <div className="relative h-[680px] w-full overflow-hidden border-[3px] border-ink bg-surface shadow-brut-lg">
      {/* Three.js Canvas: Shadow map disetel ke PCFShadowMap murni */}
      <Canvas
        shadows={{ type: PCFShadowMap }}
        camera={{ position: [0, 1.7, 4.5], fov: 60 }}
        className="h-full w-full"
        onCreated={(state) => {
          canvasDomRef.current = state.gl.domElement;
        }}
      >
        {/* Pencahayaan Ruangan */}
        <ambientLight intensity={0.65} color="#fff4d6" />
        <directionalLight
          position={[5, 8, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          color="#fffaed"
        />
        <pointLight position={[0, 3.8, 0]} intensity={1.2} distance={12} color="#fff1d0" />
        <pointLight position={[-5, 3.5, -4]} intensity={0.9} distance={8} color="#ffeec9" />
        <pointLight position={[5, 3.5, -4]} intensity={0.9} distance={8} color="#ffeec9" />

        {/* Lingkungan Ruangan */}
        <RoomEnvironment />

        {/* Rak-Rak Buku */}
        {RAK_KONFIG.map((rak) => (
          <Bookshelf
            key={rak.id}
            config={rak}
            bukuList={dataBuku}
            nearBookId={bukuTerpilih ? null : nearBook?.id}
            modalOpen={Boolean(bukuTerpilih)}
            onSelectBook={(buku) => {
              setBukuTerpilih(buku);
              setNearBook(null);
              bukaKunci();
            }}
          />
        ))}

        {/* Meja Baca di Tengah */}
        <ReadingTable position={[0, 0, 0.5]} />

        {/* Kontrol Pemain FPS */}
        <PlayerController
          isLocked={isLocked}
          modalOpen={Boolean(bukuTerpilih)}
          targetBooks={targetBooks}
          onNearBookChange={setNearBook}
          onInteractBook={handleInteractBook}
        />
      </Canvas>

      {/* HUD: Overlay Masuk / Lanjut Jelajah (Muncul saat Kursor Belum Terkunci) */}
      {!isLocked && !bukuTerpilih && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 p-4 text-center">
          <div className="max-w-md border-[3px] border-ink bg-surface p-6 shadow-brut-lg">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sun">
              Navigasi Ruang 3D
            </span>
            <h2 className="mt-2 text-2xl font-black text-ink">
              Ruang Perpustakaan Senja
            </h2>
            <p className="mt-2 font-mono text-xs leading-relaxed text-ink/75">
              Arahkan pandangan dengan mouse, berjalan dengan tombol <strong>WASD</strong>, dan dekati rak buku untuk membaca detailnya.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={kunciKursor}
                disabled={sedangCooldown}
                className="border-[3px] border-ink bg-volt px-6 py-2.5 font-bold text-on-fill shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sedangCooldown ? "Menyiapkan..." : "Mulai menjelajah"}
              </button>
            </div>
            <p className="mt-3 font-mono text-[11px] text-ink/50">
              Tekan tombol <strong>ESC</strong> kapan saja untuk melepas mouse.
            </p>
          </div>
        </div>
      )}

      {/* HUD: Titik Bidik (Crosshair) Presisi Tinggi */}
      {isLocked && !bukuTerpilih && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Reticle Bingkai Luar: Berputar & Berganti Warna Saat Membidik Buku dengan Akurat */}
            <div
              className={`flex items-center justify-center border-2 border-ink transition-all duration-150 ${
                nearBook
                  ? "h-7 w-7 rotate-45 border-ink bg-volt/30 scale-110 shadow-brut-sm"
                  : "h-5 w-5 bg-surface/30"
              }`}
            >
              {/* Titik Pusat Presisi (Center Aiming Dot) */}
              <div
                className={`transition-all duration-150 ${
                  nearBook
                    ? "h-2 w-2 border border-ink bg-volt"
                    : "h-1.5 w-1.5 border border-ink bg-sun"
                }`}
              />
            </div>

            {/* Garis Pembidik Sumbu Vertikal & Horizontal untuk Akurasi Orientasi */}
            <div
              className={`absolute -top-3 h-2 w-0.5 bg-ink transition-all duration-150 ${
                nearBook ? "-top-4 bg-volt w-1" : ""
              }`}
            />
            <div
              className={`absolute -bottom-3 h-2 w-0.5 bg-ink transition-all duration-150 ${
                nearBook ? "-bottom-4 bg-volt w-1" : ""
              }`}
            />
            <div
              className={`absolute -left-3 h-0.5 w-2 bg-ink transition-all duration-150 ${
                nearBook ? "-left-4 bg-volt h-1" : ""
              }`}
            />
            <div
              className={`absolute -right-3 h-0.5 w-2 bg-ink transition-all duration-150 ${
                nearBook ? "-right-4 bg-volt h-1" : ""
              }`}
            />
          </div>
        </div>
      )}

      {/* HUD: Petunjuk Interaksi saat Dekat dengan Buku (Murni React HUD, Hilang saat Modal Aktif) */}
      {nearBook && !bukuTerpilih && (
        <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2">
          <button
            type="button"
            onClick={handleInteractBook}
            className="flex items-center gap-3 border-[3px] border-ink bg-sun px-5 py-3 shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            <span className="border-2 border-ink bg-ink px-2 py-0.5 font-mono text-xs font-bold text-paper">
              E / Klik
            </span>
            <span className="font-mono text-sm font-bold text-on-fill">
              Buka Buku: &quot;{nearBook.judul}&quot;
            </span>
          </button>
        </div>
      )}

      {/* HUD: Petunjuk Kontrol Keyboard di Pojok Kiri Bawah */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-20 hidden sm:block">
        <div className="border-2 border-ink bg-surface/90 px-3 py-2 font-mono text-[11px] font-bold text-ink shadow-brut-sm backdrop-blur-xs">
          <span>WASD: Jalan • Mouse: Arahkan Bidikan • E / Klik: Buka Buku • ESC: Lepas Mouse</span>
        </div>
      </div>

      {/* Modal Detail Buku (Fixed Overlay Murni, Aman dari Error removeChild pada Navigasi) */}
      {bukuTerpilih && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg border-[3px] border-ink bg-surface p-6 shadow-brut-lg md:p-8">
            {/* Header Kategori & Tombol Tutup */}
            <div className="flex items-center justify-between gap-2">
              <span
                className={`border-2 border-ink px-2.5 py-0.5 font-mono text-xs font-bold ${
                  warnaKategori[bukuTerpilih.kategori] || "bg-volt text-on-fill"
                }`}
              >
                {bukuTerpilih.kategori}
              </span>
              <button
                type="button"
                onClick={tutupModal}
                className="border-2 border-ink bg-surface px-2.5 py-1 font-mono text-xs font-bold text-ink transition hover:bg-ink hover:text-paper"
                aria-label="Tutup modal"
              >
                ✕ ESC
              </button>
            </div>

            {/* Judul & Meta Buku */}
            <h3 className="mt-4 text-2xl font-black text-ink md:text-3xl">
              {bukuTerpilih.judul}
            </h3>
            <p className="mt-1 font-mono text-sm text-ink/75">
              Penulis: <strong>{bukuTerpilih.penulis}</strong> • Terbit {bukuTerpilih.tahun}
            </p>

            {/* Status Ketersediaan */}
            <div className="mt-4">
              <span
                className={`inline-block border-2 border-ink px-3 py-1 font-mono text-xs font-bold ${
                  bukuTerpilih.tersedia ? "bg-volt text-on-fill" : "bg-bubble text-on-fill"
                }`}
              >
                {bukuTerpilih.tersedia ? "Tersedia di Rak Fisik" : "Sedang Dipinjam"}
              </span>
            </div>

            {/* Sinopsis */}
            <div className="mt-5 border-t-2 border-dashed border-ink/30 pt-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60">
                Sinopsis Singkat
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-ink/90">
                {bukuTerpilih.sinopsis}
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={lanjutMenjelajahDariModal}
                className="border-[3px] border-ink bg-surface px-4 py-2 font-bold text-ink shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Lanjut menjelajah
              </button>
              <Link
                href={`/katalog/${bukuTerpilih.id}`}
                onClick={() => {
                  bukaKunci();
                }}
                className="border-[3px] border-ink bg-sun px-5 py-2 font-bold text-on-fill shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Baca buku ini →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
