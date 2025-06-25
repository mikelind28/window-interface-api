import Header2 from "../Elements/Header2";
import Container from "../Elements/Container";
import type { Style } from "../../types/types";

type AlertProps = {
    style: Style;
}

export default function Alert({ style }: AlertProps) {
    const {
        containerClass,
        h2Class,
        h3Class,
        pClass,
        spanClass1,
        spanClass2
    } = style;

    return (
        <Container style={containerClass}>
            <Header2 style={h2Class}>
                <code>window.alert()</code>
            </Header2>
            <input 
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-black bg-cyan-50 rounded-sm caret-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Customize your alert!"
            />

            <button className="">Button Text</button>
        </Container>
    )
}