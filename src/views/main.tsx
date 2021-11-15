import QRcode from "qrcode.react";
import { useState } from "react";
import { useMutation } from "react-query";
import { getInvoice } from "src/api";
import useCopyClipboard from "src/util/clipboard";
import styled from "styled-components";
import { IndexStyles } from "./styles";

const S = {
  separation: styled.div`
    margin: 0 0 16px;
  `,
  singleLine: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
  `,
  darkTitle: styled.div`
    color: grey;
  `,
  input: styled.input`
    font-size: 20px;
    padding: 5px;
    height: 38px;
    margin: 8px 0;
    border: 1px solid black;
    background: none;
    border-radius: 4px;
    width: 100%;
  `,
  button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 16px 0 0;
    background: #202020;
    color: white;
    border: none;
    font-size: 20px;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background: gray;
      color: white;
    }
  `,
};

export const Main = ({ max, min }: { max: number; min: number }) => {
  const [amount, setAmount] = useState<number>(Math.max(0, min));
  const [isCopied, copy] = useCopyClipboard({ successDuration: 3000 });

  const mutation = useMutation(getInvoice);

  if (mutation.error) {
    return (
      <div>We Ran Into An Error Creating The Invoice. Please Try Again!</div>
    );
  }

  if (mutation.data?.pr) {
    return (
      <>
        <IndexStyles.copyButton onClick={() => copy(mutation.data.pr)}>
          {isCopied ? (
            <IndexStyles.copied>Copied</IndexStyles.copied>
          ) : (
            <IndexStyles.copy>Click To Copy Invoice</IndexStyles.copy>
          )}
          <QRcode value={mutation.data.pr} size={240} />
        </IndexStyles.copyButton>
        <IndexStyles.info>Scan QR Code</IndexStyles.info>
      </>
    );
  }

  return (
    <>
      <S.separation>
        <S.singleLine>
          <S.darkTitle>Minimum Amount</S.darkTitle>
          <div>{`${min} sats`}</div>
        </S.singleLine>
        <S.singleLine>
          <S.darkTitle>Maximum Amount</S.darkTitle>
          <div>{`${max} sats`}</div>
        </S.singleLine>
      </S.separation>
      <S.singleLine>
        <S.darkTitle>Total Amount</S.darkTitle>
        <div>{`${amount} sats`}</div>
      </S.singleLine>
      <S.input
        onBlur={() => {
          if (amount < min) {
            setAmount(min);
          } else if (amount > max) {
            setAmount(max);
          }
        }}
        placeholder={"Sats"}
        value={amount}
        type={"number"}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <S.button
        disabled={mutation.isLoading}
        onClick={() => mutation.mutate({ amount })}
      >
        Create an Invoice
      </S.button>
    </>
  );
};
