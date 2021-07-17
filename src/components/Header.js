import React from "react";

export default function Header() {
  return (
    <div>
      <nav class="bg-gray-800 ">
        <div class=" mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div className="text-brand-pink  text-4xl font-semibold">
              Mandala Story
            </div>
            <div className="float-right text-brand-Default font-semibold text-lg  flex ">
              <div className="mx-4 cursor-pointer hover:text-brand-dark ">
                About
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
