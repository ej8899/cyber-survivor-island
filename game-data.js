import { phishingData } from './game-area-data/phishing.js';
import { shipwreckData } from './game-area-data/shipwreck.js';
import { passwordsData } from './game-area-data/passwords.js';
import { jungleData } from './game-area-data/jungle.js';
import { blackmailData } from './game-area-data/extortion.js';
import { volcanoData } from './game-area-data/volcano.js';
import { marketData } from './game-area-data/shopping.js';
import { darkwebData } from './game-area-data/darkweb.js';
import { deepfakesData } from './game-area-data/deepfakes.js';
import { botnetbayData } from './game-area-data/iot.js';

const gameAreas = [
  phishingData,
  shipwreckData,
  passwordsData,
  jungleData,
  blackmailData,
  volcanoData,
  marketData,
  darkwebData,
  deepfakesData,
  botnetbayData,
];

window.gameAreas = gameAreas;


if (debug) console.log("game area list:",window.gameAreas)

