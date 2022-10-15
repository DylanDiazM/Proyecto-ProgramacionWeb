import React from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const StyledDiv = styled.div`
  .accordion {
    width: 50%;
    margin-bottom: 20rem;
  }

  .info-title {
    overflow: hidden;
    margin-left: 50px;
    font-size: 1.25rem;
  }

  .info-price {
    overflow: hidden;
    margin-left: 200px;
    font-weight: bold;
    font-size: 1.15rem;
  }

  .accordion-item {
    border: none;
    margin-bottom:10px;
    border-radius:5px;
  }

  .accordion-body {
    background-color: #353f4b;
  }

  .list-group {
    margin: -10px -20px;
  }

  div.col {
    align-items: center;
    justify-content: center;
    line-height: 4rem;
  }

  .text-end,
  .text-center {
    font-weight: bold;
  }

  .list-group-item {
    color: white;
    height: 70px;
    overflow: hidden;
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

    .accordion-body{
        margin-top:-5px;
    }
    
  }
`;

const Acordion = () => (
  <Container fluid>
    <StyledDiv>
      <Accordion>
        {data.map((item, i) => (
          <Accordion.Item eventKey={item.event}>
            <Accordion.Header>
              <Row style={{ width: "90%" }}>
                <Col xs="auto">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0408/5792/7834/files/01_-_Main_-_Liquid_Cooled-removebg-preview.png?width=60&height=60"
                    alt="Case de PC"
                  />
                </Col>
                <Col>{item.title}</Col>
                <Col className="text-end">$ {item.price}</Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body>
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
                        src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/RAM_1c378c6f-baa0-44c7-8bc1-e92ce6de5401.png?width=50&height=50"
                        alt="Ram"
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
                        src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/win-11-TRANS.png?width=50&height=50"
                        alt="Windows"
                      />
                    </Col>
                    <Col>{item.windows}</Col>
                    <Col className="text-end">${item.windowsPrice}</Col>
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
                    <Col>{item.ensamble}</Col>
                    <Col className="text-end">${item.ensamblePrice}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </StyledDiv>
  </Container>
);

const data = [
  {
    event: 1,
    title: "Monster PC",
    price: "3634",
    procesador: "INTEL CORE I9-12900K 16-CORE",
    procesadorPrice: "599",
    grafica: "NVIDIA GEFORCE RTX 4090 24GB",
    graficaPrice: "1799",
    ram: "32GB DDR4 DUAL CHANNEL",
    ramPrice: "159",
    storage: "1TB NVME M.2",
    storagePrice: "99",
    cpuFans: "CM MASTERLIQUID ML360",
    cpufansPrice: "149",
    extraFans: "QTY 4X CM MASTERFANS RGB",
    extrafansPrice: "49",
    case: "COOLER MASTER TD500 RGB",
    casePrice: "129",
    fuente: "1000W ATX 80 PLUS GOLD",
    fuentePrice: "179",
    placa: "ASUS Z690 SERIES | INTEL",
    placaPrice: "225",
    wifi: "WIRELESS 802.11AC",
    wifiPrice: "29",
    windows: "WINDOWS 11 HOME + USB RECOVERY",
    windowsPrice: "119",
    ensamble: "BUILD + SETUP + TESTING + WARRANTY",
    ensamblePrice: "99",
  },
  {
    event: 2,
    title: "Cruser Build",
    price: "2228",
    procesador: "INTEL CORE I7-12700F 12-CORE",
    procesadorPrice: "339",
    grafica: "NVIDIA GEFORCE RTX 3080 10GB",
    graficaPrice: "799",
    ram: "32GB DDR4 DUAL CHANNEL",
    ramPrice: "159",
    storage: "1TB NVME M.2",
    storagePrice: "99",
    cpuFans: "CM MASTERLIQUID ML240L",
    cpufansPrice: "99",
    extraFans: "QTY 4X CM MASTERFANS RGB",
    extrafansPrice: "49",
    case: "COOLER MASTER TD500 RGB",
    casePrice: "129",
    fuente: "850W ATX 80 PLUS GOLD",
    fuentePrice: "159",
    placa: "ASUS B660 SERIES | INTEL",
    placaPrice: "149",
    wifi: "WIRELESS 802.11AC",
    wifiPrice: "29",
    windows: "WINDOWS 11 HOME + USB RECOVERY",
    windowsPrice: "119",
    ensamble: "BUILD + SETUP + TESTING + WARRANTY",
    ensamblePrice: "99",
  },
  {
    event: 3,
    title: "NASA PC",
    price: "1878",
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
  {
    event: 4,
    title: "Budget Build",
    price: "1404",
    procesador: "INTEL CORE I5-12400F 6-CORE",
    procesadorPrice: "155",
    grafica: "NVIDIA GEFORCE RTX 3060 12GB",
    graficaPrice: "399",
    ram: "16GB DDR4 DUAL CHANNEL",
    ramPrice: "79",
    storage: "500GB NVME M.2",
    storagePrice: "69",
    cpuFans: "COOLER MASTER HYPER 212 EVO",
    cpufansPrice: "39",
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

export default Acordion;
