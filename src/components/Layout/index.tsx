import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import homeIcon from "@assets/images/footer_home.png";
import searchIcon from "@assets/images/footer_search.png";
import priceIcon from "@assets/images/footer_price.png";
import userIcon from "@assets/images/footer_user.png";
import settingsIcon from "@assets/images/footer_settings.png";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.ContainerText>
        <S.TitleHeader>Olá! Franciele</S.TitleHeader>
        <S.SubTitleHeader>
          Última alteração feita em 02/11/2020
        </S.SubTitleHeader>
      </S.ContainerText>
      <S.ContainerAvatar>
        <S.Avatar
          source={{
            uri:
              "https://studiosol-a.akamaihd.net/letras/115x115/fotos/8/2/e/4/82e43cb24af143ceec6847584f7e1d26.jpg",
          }}
          resizeMode="cover"
        />
      </S.ContainerAvatar>
    </S.Header>
  );
};

const Footer: React.FC = () => {
  const navigation = useNavigation();

  function navigate(page: string) {
    navigation.navigate(page);
  }

  return (
    <S.Footer>
      <S.IconButton onPress={() => navigate("Home")}>
        <S.Icon source={homeIcon} resizeMode="contain" />
      </S.IconButton>
      <S.IconButton>
        <S.Icon source={searchIcon} resizeMode="contain" />
      </S.IconButton>
      <S.IconButton>
        <S.Icon source={priceIcon} resizeMode="contain" />
      </S.IconButton>
      <S.IconButton>
        <S.Icon source={userIcon} resizeMode="contain" />
      </S.IconButton>
      <S.IconButton>
        <S.Icon source={settingsIcon} resizeMode="contain" />
      </S.IconButton>
    </S.Footer>
  );
};

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <S.Container>
        <Header />
        <S.Content
          contentContainerStyle={{ paddingTop: 25, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
};

export default Layout;
