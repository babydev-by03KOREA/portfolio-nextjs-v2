import tw from "tailwind-styled-components";
import Link from "next/link";
import HeaderText from "@/component/nav/headerText";

export type HeaderTextItem = {
    text: string,
    page: string
};

const headerTextItems: HeaderTextItem[] = [
    {text: "_hello", page: "/hello"},
    {text: "_about-me", page: "/about-me"}
];

export default function NavigationBar() {
    return (
        <NavigationMain>
            <LogoBox>
                <Link href="/">
                    <span>hyeongju-park</span>
                </Link>
            </LogoBox>
            <HeaderText headerItems={headerTextItems}/>
        </NavigationMain>
    );
}

const NavigationMain = tw.nav`
    flex
    flex-wrap
    items-center
    justify-start
    mx-auto
    h-14
    border
    border-line-navy  
`;

const LogoBox = tw.div`
    w-40
    h-14
    flex
    text-center
    p-5
    items-center  
    border
    border-line-navy
    text-font-navy
    font-code
`;
