import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import BsButton from "react-bootstrap/Button";
import { IoMdCart } from "react-icons/io";

const Button = styled(BsButton)`
  /* Adaptar el color en base a una prop */
  background-color: ${(props) => (props.primary ? "#c35aea" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: ${(props) => (props.primary ? "500" : "bold")};

  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  width: 200px;
  letter-spacing: 0.7px;
`;

const StyleDiv = styled.div`
  .main-title {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1.25px;
  }

  .list-group-item {
    color: white;
    background-image: linear-gradient(
      180deg,
      hsl(218deg 61% 24%) 0%,
      hsl(211deg 82% 21%) 4%,
      hsl(206deg 100% 19%) 8%,
      hsl(204deg 100% 19%) 13%,
      hsl(202deg 100% 19%) 17%,
      hsl(201deg 100% 18%) 21%,
      hsl(198deg 100% 18%) 26%,
      hsl(196deg 100% 17%) 30%,
      hsl(194deg 100% 17%) 34%,
      hsl(192deg 100% 16%) 39%,
      hsl(189deg 100% 16%) 43%,
      hsl(187deg 93% 16%) 48%,
      hsl(189deg 100% 16%) 52%,
      hsl(192deg 100% 16%) 57%,
      hsl(194deg 100% 17%) 62%,
      hsl(196deg 100% 17%) 67%,
      hsl(198deg 100% 18%) 71%,
      hsl(201deg 100% 18%) 76%,
      hsl(202deg 100% 19%) 81%,
      hsl(204deg 100% 19%) 86%,
      hsl(206deg 100% 19%) 90%,
      hsl(211deg 82% 21%) 95%,
      hsl(218deg 61% 24%) 100%
    );
  }

  .info-price {
    background-color: #596978;
    width: 25%;
    padding: 10px;
    font-size: 1.2rem;
    margin-bottom: 5rem;
  }

  div.col-lg-7.col {
    width: 51%;
    margin-right: 30px;
  }
`;

const Optimized = (item) => (
  <Container fluid style={{ marginLeft: "3rem" }}>
    <StyleDiv>
      <Row style={{ marginTop: "4rem" }}>
        <Col xs="7">
          <p className="main-title">Your optimized build!</p>
        </Col>
        <Col>
          <a href="/">
            <Button>&lt;Back</Button>
          </a>
        </Col>
        <Col>
          <Button primary>
            <IoMdCart size="20px" />
            Checkout
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <img
            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/files/01_-_Main_-_Liquid_Cooled-removebg-preview.png"
            alt="Case de PC"
          />
        </Col>
        <Col xs="auto" style={{ marginLeft: "12rem" }}>
          <p style={{ fontSize: "2rem" }}>Componentes</p>
          <Row>
            {data.map((item, i) => (
              <>
                <Col>
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-intel_4baa939e-b1cd-466c-bb76-0e6294fb0d5f.png?width=50&height=50    "
                            alt="Procesador"
                          />
                        </Col>
                        <Col>{item.procesador}</Col>
                        <Col className="text-end">${item.procesadorPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/RAM_1c378c6f-baa0-44c7-8bc1-e92ce6de5401.png?width=50&height=50"
                            alt="Memoria RAM"
                          />
                        </Col>
                        <Col>{item.ram}</Col>
                        <Col className="text-end">${item.ramPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/ML2402.png?width=50&height=50"
                            alt="Cpu_Fans"
                          />
                        </Col>
                        <Col>{item.cpuFans}</Col>
                        <Col className="text-end">${item.cpufansPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/files/01_-_Main_-_Liquid_Cooled-removebg-preview.png?width=50&height=50"
                            alt="Case"
                          />
                        </Col>
                        <Col>{item.case}</Col>
                        <Col className="text-end">${item.casePrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/MSIB460MAPRO_d9ec608f-cdb8-44fd-a220-de2864681b6a.png?width=50&height=50"
                            alt="Motherboard"
                          />
                        </Col>
                        <Col>{item.placa}</Col>
                        <Col className="text-end">${item.placaPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/win-11-TRANS.png?width=50&height=50"
                            alt="Windows"
                          />
                        </Col>
                        <Col>{item.windows}</Col>
                        <Col className="text-end">${item.windowsPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-nvidia_8bee5a02-b3b8-4231-ad20-ad95403eb50f.png?width=50&height=50"
                            alt="Gráfica"
                          />
                        </Col>
                        <Col>{item.grafica}</Col>
                        <Col className="text-end">${item.graficaPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/M2_42cfb077-ffdd-4300-8af3-b1fb2c03b83c.png?width=50&height=50"
                            alt="Storage"
                          />
                        </Col>
                        <Col>{item.storage}</Col>
                        <Col className="text-end">${item.storagePrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/4xFan.png?width=50&height=50"
                            alt="ExtraFans"
                          />
                        </Col>
                        <Col>{item.extraFans}</Col>
                        <Col className="text-end">${item.extrafansPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/600WPSU_a434a461-6c03-43ad-9d62-9d4fffd92911.png?width=50&height=50"
                            alt="Fuente de Poder"
                          />
                        </Col>
                        <Col>{item.fuente}</Col>
                        <Col className="text-end">${item.fuentePrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/WifiCard.png?width=50&height=50"
                            alt="Wifi adapter"
                          />
                        </Col>
                        <Col>{item.wifi}</Col>
                        <Col className="text-end">${item.wifiPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/redux-logo.png?width=50&height=50"
                            alt="Redux_Image"
                          />
                        </Col>
                        <Col style={{ fontSize: "0.9rem" }}>
                          {item.ensamble}
                        </Col>
                        <Col className="text-end">${item.ensamblePrice}</Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="info-price">
        {data.map((item, i) => (
          <>
            <Col xs lg="7">
              <p>Components Price</p>
              <p className="text-end" style={{ fontWeight: "bold" }}>
                ${item.price}
              </p>
            </Col>
            <Col xs lg="3.5">
              <p>Build fee</p>
              <p className="text-center" style={{ fontWeight: "bold" }}>
                ${item.ensamblePrice}
              </p>
            </Col>
          </>
        ))}
      </Row>
    </StyleDiv>
  </Container>
);

const data = [
  {
    event: 3,
    title: "NASA PC",
    price: "1779",
    procesador: "INTEL CORE I7-12700F 12-CORE",
    procesadorPrice: "339",
    grafica: "NVIDIA GEFORCE RTX 3070 8GB",
    graficaPrice: "599",
    ram: "16GB DDR4 DUAL CHANNEL",
    ramPrice: "79",
    storage: "1TB NVME M.2",
    storagePrice: "99",
    cpuFans: "CM MASTERLIQUID ML240L",
    cpufansPrice: "99",
    extraFans: "QTY 4X CM MASTERFANS RGB",
    extrafansPrice: "49",
    case: "COOLER MASTER TD500 RGB",
    casePrice: "129",
    fuente: "700W ATX 80 PLUS GOLD",
    fuentePrice: "89",
    placa: "ASUS B660 SERIES | INTEL",
    placaPrice: "149",
    wifi: "WIRELESS 802.11AC",
    wifiPrice: "29",
    windows: "WINDOWS 11 HOME + USB RECOVERY",
    windowsPrice: "119",
    ensamble: "BUILD + SETUP + TESTING + WARRANTY",
    ensamblePrice: "99",
  },
];
export default Optimized;
