import tw from "tailwind-styled-components";
import {HeaderTextItem} from "@/component/nav/navigationBar";

type HeaderTextProps = {
    headerItems: HeaderTextItem[];
};

export default function HeaderText({headerItems}: HeaderTextProps) {

    return (
        <HeaderTextBar>
            {
                headerItems.map((elem, index) =>
                    <HeaderTextElements key={index}>{elem.text}</HeaderTextElements>)
            }
        </HeaderTextBar>
    );
}

const HeaderTextBar = tw.div`
    flex
    justify-center
    items-center
    px-0
`;
//gap-8

const HeaderTextElements = tw.span`
    flex
    justify-center
    items-center
    h-14
    w-auto
    border
    border-line-navy  
    text-base
    non-italic
    font-normal
    px-7
    text-font-white
`;

// const HeadUnderBar = tw.div`
//     w-auto
//     bar-orange
// `;
