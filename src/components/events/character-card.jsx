import Link from "next/link"

export function CharacterCard({ name, description, image, backgroundColor, link }) {
  return (
    <div className="flex flex-col items-center p-4 w-full max-w-sm">
      <div className="w-full aspect-square mb-4 p-2 relative" style={{ backgroundColor }}>
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-bold mb-2 uppercase text-center tracking-wider pixel-font">{name}</h3>
      <p className="text-sm text-center mb-4 pixel-font">{description}</p>
      <Link href={link} >
        <button className="bg-yellow-400 text-black px-6 py-2 uppercase pixel-font hover:bg-white  hover:-translate-y-2 transition-colors">
          Register
        </button>
      </Link>
    </div>
  )
}

