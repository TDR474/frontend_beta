
import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import { ethers } from "ethers";
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { useState } from "react";


async function getWMPrice() {   
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
  const wm_price_now =  await wmContract.totalSupply();
  return wm_price_now;
}



export const SalesValueChart = () => {
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
      const [wm_price_now, setWMSupply] = useState(9);
    
    
      async function getWMSupply() {
        let temp_wm_price_now = await wmContract.wm_price();
        temp_wm_price_now = ethers.utils.formatUnits(temp_wm_price_now, 6) ;
        setWMSupply(temp_wm_price_now);
      }
    getWMSupply();
  const data = {
    labels: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    // include wm_price_now as one of the data points

    series: [[ 1, 1, 1, 1, 1.1, wm_price_now, wm_price_now]]
  };

  const options = {
    low: 0,
    showArea: true,
    fullWidth: true,
    axisX: {
      position: 'end',
      showGrid: true
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: value => `$${value / 1}k`
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-double-octave" />
  );
};

export const SalesValueChartphone = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [[1, 2, 2, 3, 3, 4, 3]]
  };

  const options = {
    low: 0,
    showArea: true,
    fullWidth: false,
    axisX: {
      position: 'end',
      showGrid: true
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: value => `$${value / 1}k`
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-major-tenth" />
  );
};

export const CircleChart = (props) => {
  const { series = [], donutWidth = 20 } = props;
  const sum = (a, b) => a + b;

  const options = {
    low: 0,
    high: 8,
    donutWidth,
    donut: true,
    donutSolid: true,
    fullWidth: false,
    showLabel: false,
    labelInterpolationFnc: value => `${Math.round(value / series.reduce(sum) * 100)}%`,
  }

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={{ series }} options={{...options, plugins}} type="Pie" className="ct-golden-section" />
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [], chartClassName = "ct-golden-section" } = props;
  const data = { labels, series };

  const options = {
    low: 0,
    showArea: true,
    axisX: {
      position: 'end'
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Bar" className={chartClassName} />
  );
};
