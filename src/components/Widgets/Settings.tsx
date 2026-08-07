// icon imports
import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";
import { BsGearWideConnected } from "react-icons/bs";

// React imports
import { useState, type Dispatch, type SetStateAction } from "react";

// UI imports
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

// Widget imports
import ThemeTemplate from "./ThemeTemplate";
import type { Theme } from "../../types/types";

type SettingsProps = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export default function Settings({ theme, setTheme }: SettingsProps) {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function setThemeLocalStorage(theme: Theme) {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }

  return (
    <div className="fixed top-4 right-4">
      <IconContext.Provider
        value={{
          className:
            "text-3xl text-neutral-200/67 cursor-pointer hover:text-neutral-400/67",
        }}
      >
        <button onClick={open} className="outline-0! focus-visible:outline-2! focus-visible:outline-blue-400! focus-visible:outline-offset-2!" style={{ background: 'unset' }}>
          <BsGearWideConnected />
        </button>
      </IconContext.Provider>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-xs" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2 xxs:p-4">
            <DialogPanel
              transition
              className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-neutral-600 bg-white/10 p-3 backdrop-blur-3xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 xxs:p-6"
            >
              <DialogTitle as="h3" style={{ color: "white" }}>
                Style Settings
              </DialogTitle>

              {/* close button */}
              <IconContext.Provider
                value={{
                  className:
                    "absolute top-2 right-2 text-3xl text-white/67 focus:not-data-focus:outline-none focus:outline focus:outline-white hover:text-gray-400/67",
                }}
              >
                <IoIosCloseCircle onClick={close} />
              </IconContext.Provider>

              <p style={{ color: "white", fontWeight: 300, opacity: 0.75 }}>
                Pick a theme from the options below.
              </p>

              {/* buttons for changing the style */}
              <div className="flex items-center mx-1 gap-4">
                <button
                  className={`h-10 w-10 bg-slate-800 bg-linear-to-br from-yellow-300 to-teal-300 ${theme === "style-1" ? "outline-2 outline-white drop-shadow-sm drop-shadow-white" : ""} rounded-lg border-2 border-emerald-400 ring-1 ring-lime-200 hover:cursor-pointer print:border-neutral-600 print:bg-neutral-50 print:ring-neutral-200 print:inset-shadow-neutral-950/25 print:outline-neutral-200 outline-0! focus-visible:outline-2! focus-visible:outline-blue-400! focus-visible:outline-offset-2!`}
                  onClick={() => {
                    setThemeLocalStorage("style-1");
                  }}
                ></button>

                <button
                  className={`h-9 w-9 bg-slate-800 bg-linear-to-br from-fuchsia-500 via-fuchsia-300 to-blue-400 ${theme === "style-2" ? "outline-2 outline-white drop-shadow-sm drop-shadow-white" : ""} rounded-lg outline-2 outline-offset-2 outline-indigo-700 hover:cursor-pointer print:border-neutral-600 print:bg-neutral-50 print:ring-neutral-200 print:inset-shadow-neutral-950/25 print:outline-neutral-200 outline-0! focus-visible:outline-2! focus-visible:outline-blue-400! focus-visible:outline-offset-2!`}
                  onClick={() => {
                    setThemeLocalStorage("style-2");
                  }}
                ></button>

                <button
                  className={`h-10 w-10 bg-slate-800 bg-linear-to-br from-orange-400 via-amber-300 to-lime-600 ${theme === "style-3" ? "outline-2 outline-white drop-shadow-sm drop-shadow-white" : ""} rounded-lg border-2 border-blue-500 shadow-[inset_0_1px_2px_rgba(2,6,23,0.5)] hover:cursor-pointer print:border-neutral-600 print:bg-neutral-50 print:ring-neutral-200 print:inset-shadow-neutral-950/25 print:outline-neutral-200 outline-0! focus-visible:outline-2! focus-visible:outline-blue-400! focus-visible:outline-offset-2!`}
                  onClick={() => {
                    setThemeLocalStorage("style-3");
                  }}
                ></button>
              </div>

              {/* template widget with matching style */}
              <ThemeTemplate theme={theme} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
