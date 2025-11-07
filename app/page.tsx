import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-10">
      <Image
        src="/logo_white.png"  // 
        alt="Logo"
        width={200}
        height={200}
        priority
      />
      <h1 className="mt-4 text-2xl font-semibold text-white">
        Experience the future of digital connectivity
      </h1>

    </div>
  );
}
