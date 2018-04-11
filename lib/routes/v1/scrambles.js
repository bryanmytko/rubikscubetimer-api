import express from 'express';

const router = express.Router();

const scrambles = [
  `F B' L' U R' B R B' U2 B' D L2 B' D' B D R2 D2 L2 D' B' L' B2 D F' D`,
  `F D2 B' D2 F2 L2 D R2 B D2 L' U' B2 R2 B' L2 U' B' L2 F' L2 F' U2 F D'`,
  `B' U2 R2 F2 L B' U' F2 R2 U2 L' D' R F U2 L2 U L2 D2 L' U' B2 U2 B' D'`,
];

const scrambleData = scrambles[Math.floor(Math.random()*scrambles.length)];

router.get('/', (req, res) => (res.send(scrambleData)));

export default router;
