import "react-typist/dist/Typist.css";
import tw from "tailwind-styled-components";
import {FaLocationDot} from "react-icons/fa6";

export default function DescriptionLayout() {
    return (
        <DescriptionBox>
            <HelloDescriptionSpan>
                <LocationIcon/>
                Seoul, Republic of Korea
            </HelloDescriptionSpan>
            <StackDescriptionSpanFontGreen>
                여러분의 아이디어를
            </StackDescriptionSpanFontGreen>
            <StackDescriptionSpanFontWhite>
                현실화 시켜주는
            </StackDescriptionSpanFontWhite>
            <StackDescriptionSpanFontGreen>
                만능 Full-Stack 개발자
            </StackDescriptionSpanFontGreen>
            <StackDescriptionSpanFontWhite>
                박형주 입니다!
            </StackDescriptionSpanFontWhite>
            <TechStackSpan>

            </TechStackSpan>
        </DescriptionBox>
    );
}

const DescriptionBox = tw.div`
    pt-14
    pl-10
`;

const LocationIcon = tw(FaLocationDot)`
    mr-2 inline-block align-middle
`;

const HelloDescriptionSpan = tw.span`
    flex
    items-center
    text-lg
    text-font-navy
    font-nanum-400
    mb-1
`;

const StackDescriptionSpanFontGreen = tw.span`
    block
    leading-loose
    text-5xl
    text-font-green
    font-nanum-700 
    leading-[1.2]
`;

const StackDescriptionSpanFontWhite = tw.span`
    block
    leading-loose
    text-5xl
    text-font-white
    font-nanum-700
    leading-[1.2] 
`;

const TechStackSpan = tw.span`
    block
    text-xl
    text-font-blue
    mt-10
`;
