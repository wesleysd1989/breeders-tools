import React, { useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import Flags from "country-flag-icons/react/3x2";
import Spinner from "react-bootstrap/Spinner";

import { pool_calculaPesoDaPool, pool_calculaPesoDoUser } from "../../utils";
import api from "../../services/api";
import i18n from "../../locales";
import logo from "../../assets/logo.svg";
import * as S from "./styles";

const Home = () => {
  const { t } = useTranslation("home");

  const [hashPowerPool, setHashPowerPool] = useState("");
  const [hashPower, setHashPower] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [wallet, setWallet] = useState("");
  const [load, setLoad] = useState(false);

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
  };

  const getHashPowerAndCalcule = useCallback(async () => {
    try {
      setLoad(true);
      const responsePool = await api.post("/get_table_rows", {
        json: true,
        code: "breederspool",
        scope: "breederspool",
        table: "pools",
        lower_bound: null,
        upper_bound: null,
        index_position: 1,
        key_type: "",
        limit: "200",
        reverse: false,
        show_payer: false,
      });
      const hashPowerTotal = pool_calculaPesoDaPool(
        responsePool.data.rows[0].rarities,
        responsePool.data.rows[0].rarities_total
      );
      setHashPowerPool(hashPowerTotal);
      const responseWallet = await api.post("/get_table_rows", {
        json: true,
        code: "breederspool",
        scope: "breederspool",
        table: "users",
        lower_bound: wallet,
        upper_bound: wallet,
        index_position: 1,
        key_type: "",
        limit: "9000",
        reverse: false,
        show_payer: false,
      });
      const dados = responseWallet.data.rows.filter((u) => {
        return u.username === wallet;
      });
      const hashPowerUser = pool_calculaPesoDoUser(
        dados[0].data[0].rarities,
        responsePool.data.rows[0].rarities
      );
      setHashPower(hashPowerUser);
      console.log(hashPowerUser);
    } catch (error) {
      setLoad(false);
      setShowModalError(true);
    } finally {
      setLoad(false);
      setShowModal(true);
    }
  }, [wallet]);

  return (
    <S.Container>
      <S.Language>
        <S.LanguageContainer>
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
        </S.LanguageContainer>
      </S.Language>
      {!load && (
        <>
          <S.Logo src={logo} alt="logo" />
          <h1 style={{ color: "#fff" }}>breeders tools</h1>
          <S.Content>
            <Card>
              <Card.Header>{t("calculator")}</Card.Header>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ color: "#fff", marginBottom: "8px" }}>
                    Wallet
                  </label>
                  <input
                    type="text"
                    className="input-style"
                    value={wallet}
                    onChange={(e) => {
                      setWallet(e.target.value);
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
                  <Button
                    variant="success"
                    onClick={() => getHashPowerAndCalcule()}
                  >
                    {t("calculate")}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </S.Content>
        </>
      )}
      {load && (
        <div style={{ marginTop: "30.5%" }}>
          <Spinner animation="border" role="status" variant="light" />
        </div>
      )}
      <S.Footer>
        <h2 style={{ color: "#fff" }}>© 2021 BREEDERS TOOLS</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "8px",
          }}
        >
          {t("tools")}:
          <a
            href="https://nf.tools/breeders/ids"
            style={{ color: "#1eff36", marginLeft: "16px" }}
          >
            {t("getIDS")}
          </a>
        </div>
      </S.Footer>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{t("result")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{`total hash power pool: ${hashPowerPool}`}</p>
          <br />
          <p>{`hash power pool: ${hashPower}`}</p>
          <br />
          <p>
            {t("miningHR", {
              ESB: `${(342 / hashPowerPool) * hashPower} ESB`,
            })}
          </p>
          <br />
          <p>
            {t("mining6HRs", {
              ESB: `${(342 / hashPowerPool) * hashPower * 6} ESB`,
            })}
          </p>
          <br />
          <p>
            {t("mining24HRs", {
              ESB: `${(342 / hashPowerPool) * hashPower * 24} ESB`,
            })}
          </p>
          <br />
          <p>
            {t("mining1Week", {
              ESB: `${(342 / hashPowerPool) * hashPower * 168} ESB`,
            })}
          </p>
          <br />
          <p>
            {t("mining1Month", {
              ESB: `${(342 / hashPowerPool) * hashPower * 720} ESB`,
            })}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            {t("close")}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalError} onHide={() => setShowModalError(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{t("erro")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("errormsg")}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalError(false)}>
            {t("close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </S.Container>
  );
};

export default Home;
