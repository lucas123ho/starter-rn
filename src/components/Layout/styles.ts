import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { Text } from '@root/styles/components';

export const Container = styled.View`
  flex: 1;
  background-color: #000;;
  padding: 30px 30px 0 30px;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  /* margin-bottom: 40px; */
  padding-bottom: 15px;
  margin-top: 30px;
`;

export const ContainerText = styled.View`
  flex: 1;
`;

export const TitleHeader = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 3px;
`;

export const SubTitleHeader = styled(Text)`
  color: #fff;
  font-size: 10px;
`;

export const ContainerAvatar = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border-width: 1px;
  border-color: #7f40de;
  padding: 4px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const Footer = styled.View`
  width: ${() => Dimensions.get("window").width-30}px;
  position: absolute;
  bottom: 30px;
  left: 15px;
  right: 15px;
  padding: 15px;
  background-color: #f5bf53;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-evenly; */
`;

export const IconButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  height: 35px;
`;