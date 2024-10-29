"use client";
import { Drawer } from "@mui/material";
import { useState } from "react";
import Header from "../components/header";
import { Card } from "../components/card";
import { Search } from "../components/search";
import { feirasArray } from "../mock/feiras";

export default function HomePage() {
  const [mockData, setMockData] = useState(feirasArray);
  return (
    <div className="flex flex-col h-screen bg-[url('https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1200&h=900&crop=1')]">
      <Header />
      <Drawer
        anchor="left"
        open={true}
        variant="persistent"
        onClose={() => setMockData([])}
        sx={{
          ".MuiDrawer-paper": {
            position: "fixed",
            bottom: 0,
            width: 400,
            top: 80,
            height: "calc(100vh - 80px)",
            background: "rgba(255, 255, 255, 0.25)",
          },
        }}
      >
        <div className="sticky top-4 mx-4 z-50">
          <Search mock={mockData} setMockData={setMockData} />
        </div>
        <div className="flex flex-wrap gap-5 p-5">
          {mockData.map((mock) => (
            <Card key={mock.id} mock={mock} />
          ))}
        </div>
      </Drawer>
    </div>
  );
}