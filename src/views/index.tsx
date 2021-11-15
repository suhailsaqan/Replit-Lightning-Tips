import QRcode from "qrcode.react";
import { useQuery } from "react-query";
import { fetchInfo } from "src/api";
import BounceLoader from "react-spinners/BounceLoader";
import { useState } from "react";
import { IndexStyles as S } from "./styles";
import { Main } from "./main";
import useCopyClipboard from "src/util/clipboard";
import { useEffect } from "react";

export const IndexView = () => {
  const [host, setHost] = useState<string>("");
  const [isCopied, copy] = useCopyClipboard({ successDuration: 3000 });

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  const { isLoading, error, data } = useQuery<{
    url: string;
    max: number;
    min: number;
    name: string;
  }>("info", fetchInfo);

  if (isLoading) {
    return <p>Hold Up</p>;
  }

  if (error || !data) {
    return (
      <S.wrapper>
        <S.square>
          <S.top>Ran Into Error</S.top>
          <S.bottom>Please Try Refreshing!</S.bottom>
        </S.square>
      </S.wrapper>
    );
  }

  const renderContent = () => {
    if (!host) {
      return null;
    }

    return <Main max={data.max} min={data.min} />;
  };

  return (
    <S.wrapper>
      <S.square>
        <S.top>
          <S.title>{data.name}</S.title>
        </S.top>
        <S.bottom>{renderContent()}</S.bottom>
      </S.square>
    </S.wrapper>
  );
};
