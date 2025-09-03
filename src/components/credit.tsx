"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { User, Github, HeartHandshake } from "lucide-react";

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Credit({ isOpen, onClose }: CreditModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background transparan */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black/50 p-6 text-left align-middle shadow-xl transition-all border border-white/20 backdrop-blur-sm">
                {/* Title di tengah */}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold text-bravepink mb-6 text-center"
                >
                  CREDIT
                </Dialog.Title>

                <div className="space-y-4 text-white text-sm">
                  {/* Penyusun web */}
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-bravepink" />
                    <span>
                      Developer:{" "}
                      <a
                        href="https://www.instagram.com/restu.aka/"
                        target="_blank"
                        className="text-bravepink hover:underline"
                      >
                        Restu Aka 🪐
                      </a>
                      <span> & (ayo bantu aku 😅)</span>
                    </span>
                  </div>

                  {/* Repo */}
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-bravepink" />
                    <span>
                      Repository:{" "}
                      <a
                        href="https://github.com/restuak/reset-indonesia"
                        target="_blank"
                        className="text-bravepink hover:underline"
                      >
                        GitHub
                      </a>
                    </span>
                  </div>

                  {/* Terimakasih */}
                  <p className="mt-3 font-semibold flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-bravepink" />
                    Thanks to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    {[
                      "rakyatmenuntut.net",
                      "pinkijo.vercel.app",
                      "brave-pink-hero-green.lovable.app",
                      "resetindonesia.com",
                      "@mantapfunny (IG)",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-bravepink hover:text-white cursor-pointer transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tombol Tutup di tengah */}
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    className="bg-herogreen px-5 py-2 rounded-lg text-white hover:brightness-125 transition"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
