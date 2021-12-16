import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

/*추후, 
- Styled Component는 한곳에 몰아 넣기
- 디자이너와 협업할때 Migration 어떻게 할지.. 고민
*/
const Container = styled.div`
    padding: 0px 20px;
    width:480px;
    margin:0 auto;
`;

const Header    = styled.header`
    height: 10vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const Title     = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Coinslist = styled.ul`
    
`;

const CoinImage = styled.img`
    width:35px;
    height:35px;
    margin-right:10px;
`;


const Coin      = styled.li`
    background-color: white;
    color: ${(props) => props.theme.textColor};
    BORDER-RADIUS: 15PX;
    MARGIN-BOTTOM: 10PX;
    padding:20px;
    font-size:20px;
    a {
      transition : color 0.2s ease-in;
      display:flex;
      align-items:center;
    }
    &:hover{
      a {
        color:${(props) => props.theme.accentColor};  
      }
    }
    
`;

const Loading = styled.span`
  text-align:center;
`


interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {

    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { // 어떤 값이 변화를 감지하면 실행됨. 아직 완벽히 이해를 못함.
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0,100));
            setLoading(false);
        })();
    }, []);


    return (
        <Container>
            <Header>
                <Title>Coin List</Title>
            </Header>
            {loading ?
                <Loading>
                    Loading...
                </Loading>
                     :
                <Coinslist>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={{pathname:`/${coin.id}`}} state={{name: coin.name}}> // 6.0부터 to, state 분리됨
                                <CoinImage src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>

                    ))}
                </Coinslist>
            }
        </Container>
    );

}
export default Coins;