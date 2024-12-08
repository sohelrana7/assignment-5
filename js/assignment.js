// function part
function handleDonation(
  donationInputId,
  mainBalanceId,
  donatedBalanceId,
  donationNameId,
  historyElementId
) {
  const inputBalance = parseFloat(
    document.getElementById(donationInputId).value
  );
  const mainBalanceElement = document.getElementById(mainBalanceId);
  const donatedBalanceElement = document.getElementById(donatedBalanceId);
  const donationHistoryElement = document.getElementById(historyElementId);
  const donationName = document.getElementById(donationNameId).innerText;

  // Validate input balance
  if (isNaN(inputBalance) || inputBalance <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  const mainBalance = parseFloat(mainBalanceElement.innerText);

  // Check if there is sufficient balance
  if (mainBalance < inputBalance) {
    alert("Insufficient balance for this donation.");
    return;
  }

  // Update main balance and donated amount
  const remainingMainBalance = mainBalance - inputBalance;
  mainBalanceElement.innerText = remainingMainBalance.toFixed(2);

  const donatedAmount =
    parseFloat(donatedBalanceElement.innerText) + inputBalance;
  donatedBalanceElement.innerText = donatedAmount.toFixed(2);

  alert("Donation Successful! Thank you for your Donation.");

  // Create a new history entry
  const currentDate = new Date().toLocaleDateString();
  const historyContainer = document.createElement("div");
  historyContainer.className = "border p-4 rounded-md mb-4";
  historyContainer.innerHTML = `
    <h3>${inputBalance} BDT is ${donationName}</h3>
    <p>Date: ${currentDate}</p>
  `;

  // Append the new entry to the donation history display
  donationHistoryElement.appendChild(historyContainer);
}

// Donate for Noakhali
document
  .getElementById("donate-for-noakhali")
  .addEventListener("click", function () {
    handleDonation(
      "noakhali-balance",
      "main-balance",
      "donate-noakhali-balance",
      "donation-name-noakhali",
      "histroy-result"
    );
  });

// Donate for Feni
document
  .getElementById("donate-for-feni")
  .addEventListener("click", function () {
    handleDonation(
      "feni-balance",
      "main-balance",
      "donate-feni-balance",
      "donation-name-feni",
      "histroy-result"
    );
  });

//   Donate for Movement

document
  .getElementById("donate-for-movement")
  .addEventListener("click", function () {
    handleDonation(
      "movement-balance",
      "main-balance",
      "donate-movement-balance",
      "donation-name-movement",
      "histroy-result"
    );
  });

//   Toggle here
const donationTab = document.getElementById("donation-tab");
donationTab.addEventListener("click", function () {
  donationTab.classList.add(
    "px-4",
    "py-2",
    "mr-4",
    "rounded-md",
    "bg-[#B4F461]",
    "text-xl",
    "font-semibold",
    "cursor-pointer"
  );
  historyTab.classList.remove("bg-[#B4F461]");
  historyTab.classList.add(
    "px-4",
    "py-2",
    "mr-4",
    "rounded-md",
    "border",
    "text-xl",
    "font-semibold",
    "cursor-pointer"
  );
  const donationCard = document.getElementById("donation-card");
  donationCard.classList.remove("hidden");
  const donationHistoryResult = document.getElementById("display-history");
  donationHistoryResult.classList.add("hidden");
});
const historyTab = document.getElementById("history-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "px-4",
    "py-2",
    "mr-4",
    "rounded-md",
    "bg-[#B4F461]",
    "text-xl",
    "font-semibold",
    "cursor-pointer"
  );
  donationTab.classList.remove("bg-[#B4F461]");
  donationTab.classList.add(
    "px-4",
    "py-2",
    "mr-4",
    "rounded-md",
    "border",
    "text-xl",
    "font-semibold",
    "cursor-pointer"
  );

  const donationCard = document.getElementById("donation-card");
  donationCard.classList.add("hidden");
  const donationHistoryResult = document.getElementById("display-history");
  donationHistoryResult.classList.remove("hidden");
});
