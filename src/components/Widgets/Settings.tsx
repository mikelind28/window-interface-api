// icon imports
import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";
import { BsGearWideConnected } from "react-icons/bs";

// React imports
import { useState, type Dispatch, type SetStateAction } from 'react'

// style imports
import { styleClass1, styleClass2, styleClass3 } from "../../styles/styles";

// UI imports
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

// Widget imports
import StyleTemplate1 from "../../components/Templates/StyleTemplate1";
import StyleTemplate2 from "../../components/Templates/StyleTemplate2";
import StyleTemplate3 from "../../components/Templates/StyleTemplate3";
import type { Style } from "../../types/types";

type SettingsProps = {
    style: Style;
    setStyle: Dispatch<SetStateAction<Style>>;
}

export default function Settings({ style, setStyle }: SettingsProps) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function setStyleLocalStorage(style: string) {
    localStorage.setItem('style', style);

    switch (style) {
        case "styleClass1":
            setStyle(styleClass1);
            break;

        case "styleClass2":
            setStyle(styleClass2);
            break;

        case "styleClass3":
            setStyle(styleClass3);
            break;
    }
  }

  return (
    <div className="fixed top-4 right-4">
        <IconContext.Provider value={{ className: 'text-3xl text-neutral-200/67 hover:cursor-pointer hover:text-neutral-400/67'}}>
            <div onClick={open}>
                <BsGearWideConnected />
            </div>
        </IconContext.Provider>

        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-xs" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-white/10 p-6 backdrop-blur-3xl border-[1px] border-neutral-600 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                            Style Settings
                        </DialogTitle>

                        { /* close button */ }
                        <IconContext.Provider value={{ className: "absolute top-2 right-2 text-3xl text-white/67 focus:not-data-focus:outline-none focus:outline focus:outline-white hover:text-gray-400/67"}}>
                            <div onClick={close}>    
                                <IoIosCloseCircle
                                />
                            </div>
                        </IconContext.Provider>

                        <p className="mt-2 text-sm/6 text-white/50">
                            Pick a theme from the options below.
                        </p>

                        {/* buttons for changing the style */}
                        <div className="flex">
                            <div 
                            className={`w-10 h-10 bg-slate-800 ${style === styleClass1 ? " drop-shadow-sm drop-shadow-white outline-2 outline-white" : ""} m-2 border-2 rounded-lg border-emerald-400 ring-1 ring-lime-200 hover:cursor-pointer print:bg-neutral-50 print:border-neutral-600 print:inset-shadow-neutral-950/25 print:ring-neutral-200 print:outline-neutral-200`
                            }
                            onClick={() => setStyleLocalStorage("styleClass1")}
                            ></div>

                            <div 
                            className={`w-10 h-10 bg-slate-800 ${style === styleClass2 ? " drop-shadow-sm drop-shadow-white outline-2 outline-white" : ""} m-2 rounded-lg border-2 border-indigo-700 hover:cursor-pointer print:bg-neutral-50 print:border-neutral-600 print:inset-shadow-neutral-950/25 print:ring-neutral-200 print:outline-neutral-200`} 
                            onClick={() => setStyleLocalStorage("styleClass2")}
                            ></div>

                            <div 
                            className={`w-10 h-10 bg-slate-800 ${style === styleClass3 ? " drop-shadow-sm drop-shadow-white outline-2 outline-white" : ""} m-2 rounded-lg border-2 border-blue-500 hover:cursor-pointer print:bg-neutral-50 print:border-neutral-600 print:inset-shadow-neutral-950/25 print:ring-neutral-200 print:outline-neutral-200`} 
                            onClick={() => setStyleLocalStorage("styleClass3")}></div>
                        </div>

                        { /* template widget with matching style */ }
                        <div className="flex">
                            {style === styleClass1 && 
                            <StyleTemplate1 setStyle={setStyle}/>
                            }

                            {style === styleClass2 &&
                            <StyleTemplate2 setStyle={setStyle}/>
                            }

                            {style === styleClass3 &&
                            <StyleTemplate3 setStyle={setStyle}/>
                            }
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    </div>
  )
}
