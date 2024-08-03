import { useState } from 'react';
import * as S from './style';
import { ProductImageType } from 'shared';

interface Props {
  imgList: ProductImageType[];
}

const ImgDisplay: React.FC<Props> = ({ imgList }) => {
  const [mainImg, setMainImg] = useState<string>(imgList[0].url);

  return (
    <S.Container>
      <S.MainImg src={mainImg} />
      <S.SubImgContainer>
        {[...imgList].map(({ id, url }) => (
          <S.SubImg
            key={id}
            src={url}
            isSelected={url === mainImg}
            onClick={() => setMainImg(url)}
          />
        ))}
      </S.SubImgContainer>
    </S.Container>
  );
};

export default ImgDisplay;
