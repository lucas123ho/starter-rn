import React, { useState, useEffect, useMemo } from "react";
import { CheckBox } from "react-native-elements";
import { useDispatch } from 'react-redux';

import * as S from "./styles";
import { Types as RouteTypes } from '@store/ducks/route';

export default function Terms() {
  const [termAccepted1, setTermAccepted1] = useState(false);
  const [termAccepted2, setTermAccepted2] = useState(false);
  const [termAccepted3, setTermAccepted3] = useState(false);
  const allTermsAccepted = useMemo(
    () =>
      termAccepted1 &&
      termAccepted2 &&
      termAccepted3, [termAccepted1, termAccepted2, termAccepted3]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (allTermsAccepted) {
      dispatch({
        type: RouteTypes.SET_ROUTE,
        payload: {
          termsAccepted: true
        }
      })
    }
  }, [allTermsAccepted]);

  return (
    <S.Container>
      <S.Title>Termos de uso, política da privacidade e cancelamento</S.Title>
      <S.ContainerTerm>
        <S.ScrollTerm contentContainerStyle={{ paddingBottom: 25 }}>
          <S.TextTerm>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.{" "}
          </S.TextTerm>
        </S.ScrollTerm>
      </S.ContainerTerm>
      <S.ContainerAccept>
        <CheckBox
          checkedColor="#90caf9"
          checkedIcon="check-box"
          uncheckedIcon="check-box-outline-blank"
          iconType="material"
          checked={termAccepted1}
          onPress={() => setTermAccepted1(!termAccepted1)}
          title="Li e concordo com os termos de uso"
          containerStyle={{
            flex: 1,
            borderWidth: 0,
            marginLeft: 0,
            marginBottom: 20,
            backgroundColor: "#202326",
          }}
          textStyle={{
            color: "#747474",
          }}
        />
        <CheckBox
          checkedColor="#90caf9"
          checkedIcon="check-box"
          uncheckedIcon="check-box-outline-blank"
          iconType="material"
          checked={termAccepted2}
          onPress={() => setTermAccepted2(!termAccepted2)}
          title="Li e concordo a política de privacidade"
          containerStyle={{
            flex: 1,
            borderWidth: 0,
            marginLeft: 0,
            marginBottom: 20,
            backgroundColor: "#202326",
          }}
          textStyle={{
            color: "#747474",
          }}
        />
        <CheckBox
          checkedColor="#90caf9"
          checkedIcon="check-box"
          uncheckedIcon="check-box-outline-blank"
          iconType="material"
          checked={termAccepted3}
          onPress={() => setTermAccepted3(!termAccepted3)}
          title="Li e concordo com os termos de cancelamento"
          containerStyle={{
            flex: 1,
            borderWidth: 0,
            marginLeft: 0,
            backgroundColor: "#202326",
          }}
          textStyle={{
            color: "#747474",
          }}
        />
      </S.ContainerAccept>
    </S.Container>
  );
}
