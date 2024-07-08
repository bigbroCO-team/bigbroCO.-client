import ShoppingModalWrapper from '../ShoppingModalWrapper';

import * as S from './style';

interface Props {
  selectedCount: number;
  closeModal: () => void;
}

const ShoppingModal: React.FC<Props> = ({ selectedCount, closeModal }) => {
  return (
    <ShoppingModalWrapper closeModal={closeModal}>
      <S.TextWrppaer>
        <S.DeleteTextBox>
          <S.QustionText>
            상품 {selectedCount}개를 삭제하시겠습니까?
          </S.QustionText>
          <S.ExplainText>
            삭제 후 상품목록에서 다시 담을 수 있어요
          </S.ExplainText>
        </S.DeleteTextBox>
      </S.TextWrppaer>
      <S.ButtonWrapper>
        <S.CancelButton>취소</S.CancelButton>
        <S.DeleteButton>삭제하기</S.DeleteButton>
      </S.ButtonWrapper>
    </ShoppingModalWrapper>
  );
};

export default ShoppingModal;
