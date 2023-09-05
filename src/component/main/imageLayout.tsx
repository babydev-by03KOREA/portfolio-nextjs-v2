import styled from "styled-components";
import Image from 'next/image';
import letsgo from '../../../public/images/temp_letsgo.JPG';

export default function ImageLayout() {

    return (
        <ImageWrapper>
            <Image src={letsgo} alt={'MacBook-Programming'} width={500} height={500} style={{borderRadius: "50%"}}/>
        </ImageWrapper>
    );
}

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;
