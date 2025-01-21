import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
// Dynamically import the Spline component with lazy loading
const Spline = dynamic(() => import("@splinetool/react-spline/next"), {
  ssr: false, // Disable server-side rendering for Spline
  loading: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "1rem",
      }}
    >
      <Image
              src="/logo/fluxus.png"
              alt="Fluxus 24"
            blurDataURL="/logo/fluxus.png"
              height={2000}
              width={1200}
              className="h-[10rem] brightness-0 invert"
            />
    </div>
  ),
});

export default function Home() {
  const scrolls = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className=" h-[100dvh] w-[100dvw]">
      <Spline
        scene="https://prod.spline.design/F3-FHsfqj4t-hIH7/scene.splinecode"
        className="fixed top-0 w-[100dvw] h-[100dvh]"
      />

      <div className="absolute h-[70px] bottom-[18px] z-10 w-full flex justify-end px-[18px]">
        <Link href="#">
          <div className="flex items-center justify-center font-bold h-[70px] rounded-xl w-[140px] bg-[rgba(20,20,20,1)] hover:scale-[1.05] transition-all duration-300">
          
          </div>
        </Link>
      </div>
    </div>
  );
}
