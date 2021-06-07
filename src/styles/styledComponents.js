/*
재활용 할 수 있는 버튼 만들어서 갖다쓰기
+
홈 화면에 필요한 스타일
*/
import styled from 'styled-components'

export const Button = styled.button`
    width: 200px; height: 40px;
    font-size: 18px;
    border-radius: 20px; border: none;
    color: white;
    background-color: #5CD1E5;
    margin: 20px; 
    &:active{
        outline: none;
    }
    &:focus{
        outline: none;
    }
    &:hover{
        background-color: #489CFF;
    }
    font-family: 'MaplestoryOTFBold';
`

// 제목이 적절한 위치에 배치되도록 최소높이 지정한!
export const Title = styled.div`
    font-size: 24px;
    min-height: 150px;
`
