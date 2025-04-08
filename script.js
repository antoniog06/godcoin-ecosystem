// Log message and alert once page is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('GODCOIN site loaded.');
  alert('Welcome to the official GODCOIN site!');
});

// --- Connect to Solana Mainnet ---
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));

// GODCOIN Token Mint Address
const TOKEN_MINT = "HDaxFGHaJJi6mCMBVeZj8mwfiFpwE8snv6uEfuYabCcm";

// Check GODCOIN Balance
async function checkGodcoinBalance() {
  const walletInput = document.getElementById("walletInput");
  const walletAddress = walletInput.value.trim();
  const balanceDisplay = document.getElementById("walletBalance");

  if (!walletAddress) {
    balanceDisplay.innerText = "Please enter a wallet address.";
    return;
  }

  try {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      new solanaWeb3.PublicKey(walletAddress),
      {
        mint: new solanaWeb3.PublicKey(TOKEN_MINT),
      }
    );

    const amount = tokenAccounts.value.length
      ? tokenAccounts.value[0].account.data.parsed.info.tokenAmount.uiAmount
      : 0;

    balanceDisplay.innerText = `${amount.toLocaleString()} GODCOIN`;
  } catch (error) {
    balanceDisplay.innerText = "Error: Invalid address or network issue.";
    console.error(error);
  }
}
