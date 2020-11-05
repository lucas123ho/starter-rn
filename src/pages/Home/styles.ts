import styled from 'styled-components/native';

import { Text } from '@styles/components';

export const Container = styled.View`
    margin-top: 40px;
`;

export const CardInfo = styled.View`
  padding: 7px;
  background-color: #ff535f;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContainerNumberProducts = styled.View`
  padding: 4px 5px;
  border-radius: 15px;
  background-color: #202326;
  align-items: center;
  margin-right: 8px;
  height: 100%;
`;

export const TitleNumberProducts = styled(Text)`
  font-size: 40px;
  color: #0e7be7;
  font-weight: bold;
`;

export const SubTitleNumberProducts = styled(TitleNumberProducts)`
  font-size: 14px;
  margin-top: -7px;
  margin-bottom: 15px;
`;

export const Flag = styled.Image`
  width: 80px;
  height: 60px;
  margin-bottom: 10px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  /* background-color: red; */
  padding: 0 10px;
`;

export const Flex = styled.View`
  flex-direction: row;
`;

export const ItemFlex = styled.View`
  flex: 1;
`;

export const TitleInfo = styled(Text)`
  font-size: 50px;
  color: #202326;
  font-weight: bold;
`;

export const SubTitleInfo = styled(Text)`
  padding: 2px 4px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  background-color: #202326;
  color: #ff535f;
  align-self: baseline;
  margin-top: -7px;
  display: flex;
`;

export const SmallText = styled(Text)`
  font-size: 10px;
  font-weight: bold;
  color: #202326;
`;

export const ButtonExplore = styled.TouchableOpacity`
  padding: 15px;
  background-color: #202326;
  border-radius: 30px;
  align-items: center;
  margin-bottom: 15px;
`;

export const TextButtonExplore = styled(Text)`
  color: #0e7be7;
  font-size: 12px;
`;

export const Stars = styled.Image`
  height: 15px;
  width: 80px;
  margin-top: -4px;
  margin-left: 5px;
`;

export const AddOrEdit = styled.TouchableOpacity`
  background-color: #303339;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ContentAddOrEdit = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const Plus = styled.Image`
  width: 100px;
  height: 100px;
  /* background-color: red; */
  margin-right: 10px;
`;

export const TextAddOrEdit = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  color: #7f40de;
  max-width: 60%;
  /* background-color: red; */
`;