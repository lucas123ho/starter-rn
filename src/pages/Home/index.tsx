import React from "react";

import * as S from "./styles";
import Layout from "../../components/Layout";
import flag from "@assets/images/flag.png";
import stars from '@assets/images/stars.png';
import plus from '@assets/images/plus.png';

export default function Home() {
  return (
    <Layout>
      <S.Container>
        <S.CardInfo>
          <S.ContainerNumberProducts>
            <S.TitleNumberProducts>200</S.TitleNumberProducts>
            <S.SubTitleNumberProducts>Produtos</S.SubTitleNumberProducts>
            <S.Flag source={flag} resizeMode="contain" />
          </S.ContainerNumberProducts>
          <S.ContainerInfo>
            <S.Flex
              style={{
                paddingBottom: 15,
                borderBottomWidth: 1,
                borderColor: "#202326",
              }}
            >
              <S.ItemFlex>
                <S.TitleInfo>06</S.TitleInfo>
                <S.SubTitleInfo>Categorias</S.SubTitleInfo>
              </S.ItemFlex>
              <S.ItemFlex>
                <S.TitleInfo>126</S.TitleInfo>
                <S.SubTitleInfo>Subcategorias</S.SubTitleInfo>
              </S.ItemFlex>
            </S.Flex>
            <S.Flex>
              <S.ItemFlex>
                <S.SubTitleInfo style={{ marginTop: 15 }}>Avaliações</S.SubTitleInfo>
                <S.SmallText style={{ marginBottom: -8, marginTop: 4 }}>Categoria: Comida</S.SmallText>
                <S.TitleInfo style={{ fontSize: 40 }}>100</S.TitleInfo>
              </S.ItemFlex>
              <S.ItemFlex style={{ marginTop: 15 }}>
                <S.ButtonExplore>
                  <S.TextButtonExplore>Explorar -> </S.TextButtonExplore>
                </S.ButtonExplore>
                <S.Stars source={stars} resizeMode="contain"/>
              </S.ItemFlex>
            </S.Flex>
          </S.ContainerInfo>
        </S.CardInfo>
        <S.AddOrEdit>
          <S.ContentAddOrEdit>
            <S.Plus source={plus} /> 
            <S.TextAddOrEdit>Adicionar ou editar produto</S.TextAddOrEdit>
          </S.ContentAddOrEdit>
        </S.AddOrEdit>
        <S.AddOrEdit>
          <S.ContentAddOrEdit>
            <S.Plus source={plus} /> 
            <S.TextAddOrEdit>Adicionar ou editar produto</S.TextAddOrEdit>
          </S.ContentAddOrEdit>
        </S.AddOrEdit>
        <S.AddOrEdit>
          <S.ContentAddOrEdit>
            <S.Plus source={plus} /> 
            <S.TextAddOrEdit>Adicionar ou editar produto</S.TextAddOrEdit>
          </S.ContentAddOrEdit>
        </S.AddOrEdit>
      </S.Container>
    </Layout>
  );
}
