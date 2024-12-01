import { IconButton } from "@mui/material";
import { Calendar, Clock, MapPin, Star, StarHalf } from "lucide-react";
import React from "react";

interface Props {
  mock: TypeFeira;
}

export function Card({ mock }: Props) {
  const [stared, setStared] = React.useState(false);

  return (
    <div className="bg-white rounded-lg p-5 shadow-md w-[420px] h-[340px] flex flex-col justify-between hover:shadow-big hover:scale-105 transition-all">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-lg font-bold text-secundaria-forte hover:underline transition-all hover:cursor-pointer">
            {mock.nome}
          </div>
          <div className="flex gap-2">
            {mock.tags.map((tag) => (
              <div className="bg-secundaria-forte rounded-full px-2 py-1 text-sm">
                <div className="text-white">{tag.tag.nome}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) =>
              i < Math.floor(mock.nota) ? (
                <Star
                  key={i}
                  fill="currentColor"
                  className={"text-secundaria-forte"}
                />
              ) : i === Math.floor(mock.nota) ? (
                <div>
                  <StarHalf
                    fill="currentColor"
                    className={"text-secundaria-forte absolute z-10"}
                  />
                  <Star className="text-secundaria-forte absolute z-0" />
                </div>
              ) : (
                <Star key={i} className={"text-secundaria-forte ml-5"} />
              )
            )}
          </div>
        </div>
        <IconButton onClick={() => setStared(!stared)} className="h-fit">
          <Star
            className="text-secundaria-forte"
            fill={stared ? "currentColor" : "none"}
          />
        </IconButton>
      </div>
      <div className="mt-5 overflow-hidden rounded-lg h-[200px] bg-destaque-forte flex items-center justify-center">
        <img
          src={mock.imagem}
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "./logo.svg";
            (e.target as HTMLImageElement).className = "h-12";
          }}
        />
      </div>
      <div className="mt-5 flex justify-between font-semibold">
        <div className="flex items-center gap-2">
          <MapPin className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">{mock.endereco}</div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">
            {new Date(mock.data).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-secundaria-forte" />
          <div className="text-sm text-secundaria-forte">
            Ás{" "}
            {new Date(mock.data).getHours().toString().padStart(2, "0") +
              ":" +
              new Date(mock.data).getMinutes().toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}
