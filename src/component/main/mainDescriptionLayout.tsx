import ImageLayout from "@/component/main/imageLayout";
import tw from "tailwind-styled-components";
import DescriptionLayout from "@/component/main/descriptionLayout";

export default function MainDescriptionLayout() {
    return (
        <MainContainer>
            <MainDescriptionBox>
                <DescriptionLayout/>
                <ImageLayout/>
            </MainDescriptionBox>
        </MainContainer>
    );
}

const MainContainer = tw.div`
    flex
    justify-center
    mt-28
`;

const MainDescriptionBox = tw.div`
    flex
    justify-evenly  
    w-4/5
`;
//border
