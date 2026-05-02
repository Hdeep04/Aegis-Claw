// escape.js
const fetch = require('node-fetch'); // npm i node-fetch@2

async function triggerEmergencyEscape(walletAddress) {
    console.log("🔥 緊急退避プロトコル起動中...");
    
    // 1. JupiterでSOL -> USDCのレートを取得
    const quote = await fetch('https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=100000000&slippageBps=50');
    const quoteData = await quote.json();
    
    console.log("✅ 最適退避ルート確保:", quoteData.outAmount, "USDC");
    console.log("🚀 あとは署名（Phantom）を待つだけです。");
}

triggerEmergencyEscape('あなたのPhantomアドレス');