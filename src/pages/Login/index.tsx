import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { useDispatch } from 'react-redux';

import * as S from "./styles";
import bgLogin from "@assets/images/bg-login.png";
import { InputProps } from "./types";
import { plataform } from "@root/utils/functions";
import { Types as RouteTypes } from '@store/ducks/route';

function Input({ label, containerProps, ...rest }: InputProps) {
  return (
    <S.ContainerInput {...containerProps}>
      <S.LabelInput>{label}</S.LabelInput>
      <S.TextInput {...rest} />
    </S.ContainerInput>
  );
}

export default function Login() {
  const dispatch = useDispatch();

  function login() {
    dispatch({
      type: RouteTypes.SET_ROUTE,
      payload: {
        loged: true
      }
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={plataform({ ios: "padding", android: "height" })}
      style={{ flex: 1 }}
    >
      <S.Container source={bgLogin}>
        <S.ContainerForm>
          <Input
            label="Digite seu email"
            keyboardType="email-address"
            placeholder="exemplo@exemplo.com"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            autoFocus={true}
            textContentType="emailAddress"
          />
          <View
            style={{
              flexDirection: "row",
              marginBottom: 50,
            }}
          >
            <Input
              containerProps={{
                style: { flex: 1, marginRight: 8, marginBottom: 0 },
              }}
              keyboardType="default"
              textContentType="password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              label="Senha"
            />
            <S.ButtonSubmit onPress={login}>
              <S.TextButtonSubmit>Acessar</S.TextButtonSubmit>
            </S.ButtonSubmit>
          </View>
          <S.Version>Versão 1.0.0</S.Version>
        </S.ContainerForm>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
