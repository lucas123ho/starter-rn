import styled from 'styled-components/native';

import { Text } from '@styles/components';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
`;

export const ContainerForm = styled.View`
  padding: 45px 30px 15px 30px;
  background-color: #f8f8f8;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const ContainerInput = styled.View`
  position: relative;
  margin-bottom: 18px;
  /* flex: 1; */
  align-self: stretch;
`;

export const LabelInput = styled(Text)`
  font-size: 13px;
  color: #000;
  position: absolute;
  top: -7px;
  left: 15px;
  background-color: #f8f8f8;
  padding: 0 8px;
  z-index: 10;
  font-weight: bold;
`;

export const TextInput = styled.TextInput`
  padding: 15px;
  border-width: 2px;
  border-color: #000;
  border-radius: 4px; 
  z-index: 1;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  /* height: 100%; */
  padding: 10px 30px;
  background-color: #000;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonSubmit = styled(Text)`
  font-size: 15px;
  color: #f8f8f8;
  font-weight: bold;
`;


export const Version = styled(Text)`
  font-size: 10px;
  color: #6f6f6f;
  text-align: center;
  align-self: stretch;
`;