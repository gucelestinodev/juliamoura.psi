import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #e5c7b5;
  padding: 20px 50px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0eded;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  justify-content: center;
`;
export const RightContent = styled.div`
  width: 40%;
`;

export const ButtonHeader = styled.button`
  display: flex;
  background-color: #e5c7b5;
  border: #000000 solid 1px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 500;
`;

export const Title = styled.p`
  color: #242a2d;
  font-size: 32px;
  font-weight: bold;
  text-align: start;
`;

export const SubText = styled.p`
  color: #242a2d;
  font-size: 22px;
  font-weight: 400;
`;

export const TextHeader = styled.p`
  color: #242a2d;
  font-size: 20px;
  font-weight: bold;
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ccc6c6;
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #ccc6c6;
`;

export const TextInfo = styled.p`
  color: #242a2d;
  font-size: 18px;
  margin: 20px;
`;

export const IconText = styled.img`
  max-width: 18%;
`;
