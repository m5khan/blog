import React from "react";

export default function CV() {
  return (
    <div className="flex flex-col items-center bg-zinc-100 divide-solid divide-y-1">
      <main className="w-[210mm] h-[297mm] bg-white">
        <div className="grid grid-cols-[2fr_1fr] h-full">
          <div className="bg-rose-100">
            <header className="h-32 bg-blue-400 p-3">
              <div className="flex gap-2">
                <div>avatar</div>
                <div className="text-2xl font-normal">M SHOAIB KHAN</div>
              </div>
            </header>
          </div>
          <div className="bg-rose-200">
            <header className="h-32 bg-blue-500"></header>
          </div>
        </div>
      </main>
      <main className="w-[210mm] h-[297mm] bg-white"></main>
    </div>
  );
}
