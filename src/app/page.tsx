import CommonLayout from "@/component/CommonLayout";
import "./globals.css";

type Props = {};
type elemArrayType = [
    { elem: string, style: string, function: string },
    { elem: string, style: string, function: string },
    { elem: string, style: string, function: string }
];

const elementArray: elemArrayType = [
    {
        style: "bg-red-200",
        elem: "미세한 진동!",
        function: "vibrateOne"
    },
    {
        style: "bg-red-300",
        elem: "강한 진동!",
        function: "vibrateTwo"
    },
    {
        style: "bg-red-400",
        elem: "약한 진동!",
        function: "vibrateThree"
    }
];

export default function Home({}: Props) {
    return (
        elementArray.map(elem =>
            <CommonLayout className={elem.style} functionName={elem.function}>
                <h1 style={{color: "black", textAlign: "center", lineHeight: "40px"}}>{elem.elem}</h1>
            </CommonLayout>
        )
    );
}
