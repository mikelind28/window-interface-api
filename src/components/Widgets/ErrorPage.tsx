// TODO: error page

import { useState } from "react";
import { getLocalStorageTheme } from "../../App";
import type { Theme } from "../../types/types";
import Settings from "./Settings";

export default function ErrorPage() {
    const [theme, setTheme] = useState<Theme>(getLocalStorageTheme);

    return (
        <main className="h-screen w-screen flex items-center justify-center" data-theme={theme}>
            <title>Error</title>
            <Settings theme={theme} setTheme={setTheme}/>
            <div className="container max-w-fit flex flex-col gap-3">
                <h3 style={{ fontSize: '2rem' }}>Uh oh!</h3>
                <h4 style={{ fontSize: '1.5rem' }}>Looks like there was an error.</h4>
                <span className='span-2'><a href="/" className="underline underline-offset-4">Return home</a></span>
            </div>
        </main>
    );
}