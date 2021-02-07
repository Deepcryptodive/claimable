import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import styles from "../styles/Home.module.css";
import styled from "styled-components";
import React, { useCallback, useState } from "react";
import { ClaimPretty } from "../src/components/ClaimPretty";

const Label = styled.label`
  font-weight: bold;
  font-size: 1.1rem;
  text-align: left;
  line-height: 3;
`;
const Input = styled.input`
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 6px;
  border: 1px solid black;
  font-family: monospace;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
`;

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40%;
`;

const initialResponseData = null;
const initialErrorValue = "";
export default function Home() {
  const { width, height } = useWindowSize();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initialErrorValue);
  const [responseData, setResponseData] = useState(initialResponseData);

  const handleAddressChange = useCallback(async (e) => {
    const { value } = e.target;
    setAddress(value);
    setError(initialErrorValue);
    setResponseData(initialResponseData);
    if (value.trim().length === 42) {
      setLoading(true);
      await fetch(`/api/claimable/${value}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            setError(
              "There are no claimable tokens nor POAPs for this address. Are you sure this is the address you want to check? ",
            );
            return;
          }
        })
        .then((res) => {
          // Confetti here
          setResponseData(res);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Claimable</h1>
        <p style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
          A place to see all the free things you can claim. <br />
          Like airdrops and POAP's.
        </p>
        <LabelInput>
          <Label>Ethereum Address:</Label>
          <Input
            value={address}
            placeholder="0x123..."
            onChange={handleAddressChange}
            disabled={loading}
          />
        </LabelInput>

        {loading && "loading..."}
        {error && <Error>{error}</Error>}
        {responseData && (
          <>
            <Confetti width={width} height={height} />
            <ClaimPretty claimables={responseData} />
          </>
        )}
      </main>

      <footer className={styles.footer}>
        Notice: Some of these may have already been claimed. This UI currently
        shows the initial snapshots of what your account was airdropped.
      </footer>
    </div>
  );
}