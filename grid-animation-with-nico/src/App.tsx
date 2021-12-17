import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion" // https://www.framer.com/docs/
import {useRef, useState} from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const Box = styled(motion.div)`
  width: 600px;
  height: 300px;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #fff;
  width: 75px;
  height: 75px;
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const SwitchButton = styled(motion.div)`
  color: darkorange;
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 60px;
  user-select: none;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const OverlayBox = styled(motion.div)`
  width: 600px;
  height: 300px;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
`;


const BoxVariants = {
    start: {scale: 1},
    hover: {scale: 2},
    end: {scale: 1}
}

const OverlayVariants = {
    start: {backgroundColor: "rgba(0,0,0,0.0)"},
    end: {backgroundColor: "rgba(0,0,0,0.5)"},
    exit: {backgroundColor: "rgba(0,0,0,0.0)"}
}

const ButtonVariants = {
    start: {scale: 1},
    hover: {scale: 2},
    end: {scale: 1}
}


/*

1) 박스 4개 만들기 ㅇㅋ
2) 버튼 만들기 ㅇㅋ
3) 동그라미 생성 ㅇㅋ

4) 박스 마우스 오버 효과 1차 ㅇㅋ
5) 박스 클릭 효과 (중앙 이동) ㅇㅋ
6) 버튼 클릭 처리 (Circle 이동) 1차 ㅇㅋ

<세부조정 필요>
- 1,4 번 box 클릭할때만 Overlay
- 스위치 margin 위치 (Center 처리)
- 스위치 클릭시 이벤트 효과 (on/off)
- Box Scale 시, 다른 BOX 영역 침범 안하도록 처리
- 각 BOX 동적 처리 (map, key 이용)
- 코드 압축
 */


function GridAnimation() {

    //const BoxRef                = useRef<HTMLDivElement>(null);

    const [clicked, setClicked] : any = useState(null)
    const [switchClicked, setSwitchClicked] = useState(false);

    const switchClick = () => {
        setSwitchClicked((prop) => !prop)
    };

    return (
        <Wrapper>
            <Container>
                <Box onClick={() => setClicked("1")} layoutId="1"/> {/*dynamic 으로 수정해야됨*/}
                <Box> {!switchClicked ? <Circle layoutId="circle"/> : null}  </Box>
                <Box> {switchClicked ? <Circle layoutId="circle"/> : null} </Box>
                <Box onClick={() => setClicked("4")} layoutId="4"/> {/*dynamic 으로 수정해야됨*/}
            </Container>
            <AnimatePresence>


                <SwitchButton onClick={switchClick}
                              animate={switchClicked ? {
                                  color: "blue",
                                  scale: 1.2,
                                  fontWeight: "bold"
                              } : {color: "orange"}}>
                    Switch
                </SwitchButton>


                {clicked ?
                    <Overlay onClick={() => setClicked(false)} variants={OverlayVariants} initial="start" animate="end" exit="exit">
                        <OverlayBox layoutId={clicked}/>
                    </Overlay>
                    : null
                }

            </AnimatePresence>

        </Wrapper>
    );
}

export default GridAnimation;