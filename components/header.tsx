import { Avatar } from "@mui/material";
import Link from "next/link";

export default function Header() {
  // list of all the options on header
  let items = ["Início", "Sobre", "Contato", "Mapa"];

  // WIP selected header
  let atual = "Mapa";
  return (
    <header className="w-full flex justify-between h-20 bg-destaque-forte items-center px-5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-50">
      <Link href={"/"}>
        <img src="./logo.svg" className="h-12" />
      </Link>
      <div className="w-fit h-full pc:flex hidden">
        {items.map((item) => (
          <p
            className={`hover:bg-secundaria-forte/25 
                cursor-pointer
                px-5
                transition-colors h-full flex justify-center items-center text-2xl ${
                  atual === item ? "bg-dominante-fraca" : ""
                }`}
          >
            {item}
          </p>
        ))}
      </div>
      <Link href={"/login"} className="rounded-full">
        <Avatar />
      </Link>
    </header>
  );
}
