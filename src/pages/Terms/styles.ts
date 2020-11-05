import styled from 'styled-components/native';

import { Text } from '@styles/components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px;
`;

export const Title = styled(Text)`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ContainerTerm = styled.View`
  width: 100%;
  flex: 1;
  background-color: #303339;
  padding: 25px 15px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ScrollTerm = styled.ScrollView`
  flex: 1;
`;

export const TextTerm = styled(Text)`
  font-size: 15px;
  line-height: 27px;
`;

export const ContainerAccept = styled.View`
  padding: 0 20px;
`;
