export default function Alert() {
    return (
        <div>
            <h2 className="mb-3 text-xl text-yellow-200 text-shadow-lg/50 text-shadow-neutral-950 font-medium tracking-wide"><code>window.alert()</code></h2>
            <input 
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-black bg-cyan-50 rounded-sm caret-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Customize your alert!"
            />

            <button className="">Button Text</button>
        </div>
    )
}