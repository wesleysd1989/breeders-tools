import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import Flags from "country-flag-icons/react/3x2";

import i18n from "../../locales";
import logo from "../../assets/logo.svg";
import * as S from "./styles";

const Home = () => {
  const { t } = useTranslation("home");

  const [hashPowerPool, setHashPowerPool] = useState("");
  const [hashPower, setHashPower] = useState("");
  const [showModal, setShowModal] = useState(false);

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
  };

  return (
    <S.Container>
      <S.Language>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", marginBottom: "8px" }}>
            {t("language")}
          </h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ width: "42px" }}
              onClick={() => changeLanguage("en-US")}
            >
              <Flags.US title="United States" />
            </div>
            <div
              style={{ width: "42px", marginLeft: "8px" }}
              onClick={() => changeLanguage("pt-BR")}
            >
              <Flags.BR title="Brazil" />
            </div>
          </div>
        </div>
      </S.Language>
      <S.Logo src={logo} alt="logo" />
      <h1 style={{ color: "#fff" }}>breeders tools</h1>
      <S.Content>
        <Card>
          <Card.Header>{t("calculator")}</Card.Header>
          <Card.Body>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ color: "#fff", marginBottom: "8px" }}>
                hash power pool
              </label>
              <input
                type="text"
                className="input-style"
                value={hashPowerPool}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setHashPowerPool(e.target.value);
                  }
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                style={{ color: "#fff", marginTop: "8px", marginBottom: "8px" }}
              >
                hash power
              </label>
              <input
                type="text"
                className="input-style"
                value={hashPower}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setHashPower(e.target.value);
                  }
                }}
              />
            </div>
            <div
              className="d-grid gap-2"
              style={{
                display: "flex",
                marginTop: "8px",
                width: "100%",
              }}
            >
              <Button variant="success" onClick={() => setShowModal(true)}>
                {t("calculate")}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </S.Content>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{t("result")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {t("mining", {
              ESB: `${(342 / hashPowerPool) * hashPower} ESB`,
            })}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            {t("close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </S.Container>
  );
};

export default Home;
