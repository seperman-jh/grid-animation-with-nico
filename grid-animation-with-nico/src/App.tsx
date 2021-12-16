import styled from "styled-components";
import { motion } from "framer-motion"
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Container = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  display:flex;
  justify-content: center;
  align-items:center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  cursor:pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


function App() {

    const constraintsRef = useRef<HTMLDivElement>(null);

    return (
        <Wrapper>
            <Container ref={constraintsRef}>
                <Box drag dragSnapToOrigin dragElastic={1} dragConstraints={constraintsRef} whileHover={{borderRadius:"100px"}} />
            </Container>
        </Wrapper>
    );
}

export default App;