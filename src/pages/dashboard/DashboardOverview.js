
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { ethers } from "ethers";
import { useState } from "react";


 

export default () => {
    // get the price history of a token using ethers.js
    const provider = new ethers.providers.JsonRpcProvider("https://eth-rinkeby.alchemyapi.io/v2/B7joNLrdqTc7ULI4CpjW8WIhosHA4tHV");
    //const signer = new ethers.Wallet(process.env.RINKEBY_DEPLOYER_PRIVATE_KEY, provider);
    // You can also use an ENS name for the contract address
    const wmAddress = "0x861248D24A331cA30374F5a57b6c3E29cE962cc7";
  
    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    const wmAbi = [
    // Some details about the token
    "function wm_price() view returns (uint256)",
    "function totalSupply() view returns (uint256)",
  
    // Get the account balance
    "function wms_price(address) view returns (uint256)",
  
    // Send some of your tokens to someone else
    "function price_target(uint256)",
  
    // An event triggered whenever anyone transfers to someone else
    "event global_collateral_ratio(uint256)"
    ];
  
    // The Contract object
    const wmContract = new ethers.Contract(wmAddress, wmAbi, provider);
    const [wm_price_now, setWMPrice] = useState(9);
    const [wm_total_supply, setWMSupply] = useState(9);
  
  
    async function getWMPrice() {
      let temp_wm_price_now = await wmContract.wm_price();
      temp_wm_price_now = ethers.utils.formatUnits(temp_wm_price_now, 6) ;
      setWMPrice(temp_wm_price_now);
    }
    async function getWMSupply() {
      let temp_wm_supply_now = await wmContract.totalSupply();
      temp_wm_supply_now = ethers.utils.formatUnits(temp_wm_supply_now, 18) /1000 ;
      // only get three decimal places
      temp_wm_supply_now = temp_wm_supply_now.toFixed(3);
      setWMSupply(temp_wm_supply_now);
    }
    getWMPrice();
    getWMSupply();
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview Security
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Upgrade to Pro
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">Share</Button>
          <Button variant="outline-primary" size="sm">Export</Button>
        </ButtonGroup>
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
              title="World Money Token Value"
              value = {wm_price_now}
              percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Total Supply"
            title= {wm_total_supply + "k"}
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Protocol Revenue"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Traffic Share"
            data={trafficShares} />
        </Col>

      </Row>

      <Row>
        
      </Row>
    </>
  );
};
