
const WHATSAPP_NUM = "611207927";
let user = null, cart = [], currentCat = "RASHIIN";

// Wax kasta oo alaab ah halkan ayay ku jiraan (sidii hore)
const products = [
    {cat:"RASHIIN", name:"BUR", prices:{"Kiilo":{c:"SSO", p:16}, "Nus Kiilo":{c:"SSO", p:8}, "Ruwac":{c:"SSO", p:4}, "Haaf":{c:"$", p:13}, "Loor":{c:"$", p:26}}},
    {cat:"RASHIIN", name:"BARIIS-XAMSE", prices:{"Kiilo":{c:"$", p:1}, "Nus Kiilo":{c:"$", p:0.5}, "Ruwac":{c:"$", p:0.25}, "Haaf":{c:"$", p:24}, "Loor":{c:"$", p:48}}},
    {cat:"RASHIIN", name:"BARIIS-BUR BUR", prices:{"Kiilo":{c:"SSO", p:18}, "Nus Kiilo":{c:"SSO", p:9}, "Ruwac":{c:"SSO", p:5}, "Haaf":{c:"$", p:14.5}, "Loor":{c:"$", p:29}}},
    {cat:"RASHIIN", name:"SONKOR", prices:{"Kiilo":{c:"$", p:0.75}, "Nus Kiilo":{c:"SSO", p:11}, "Ruwac":{c:"SSO", p:6}, "Tumin":{c:"SSO", p:3}}},
    {cat:"RASHIIN", name:"BAASTO-DHEER", prices:{"Kiilo":{c:"$", p:1}, "Nus Kiilo":{c:"$", p:0.5}, "Ruwac":{c:"$", p:0.25}, "Tumin":{c:"SSO", p:4},"Karton":{c:"$", p:19.5}}},
    {cat:"RASHIIN", name:"BAASTO-MAKRONI", prices:{"Kiilo":{c:"$", p:1}, "Nus Kiilo":{c:"$", p:0.5}, "Ruwac":{c:"$", p:0.25}, "Tumin":{c:"SSO", p:4},"Karton":{c:"$", p:10}}},
    {cat:"RASHIIN", name:"SALIID-CADEEY", prices:{"Liitar":{c:"$", p:1.5},"Nus liitar":{c:"$", p:0.75},"Ruwac":{c:"SSO", p:11},"Tumin":{c:"SSO", p:6},"Tumin haaf":{c:"SSO", p:3},"Caag sadaxle":{c:"$", p:5.5},"Caag shanle":{c:"$", p:8}}},    
    {cat:"RASHIIN", name:"SALIID-MACSARO", prices:{"Liitar":{c:"$", p:4},"Nus liitar":{c:"$", p:2},"Ruwac":{c:"$", p:1},"Tumin":{c:"$", p:0.5},"Tumin haaf":{c:"$", p:0.25}}},
    {cat:"RASHIIN", name:"SALIID-QUMBO", prices:{"Balug yar":{c:"$", p:2}, "Cagar yar":{c:"$", p:2.5}}},
    {cat:"RASHIIN", name:"DIGIR-GADUUD", prices:{"Madaal":{c:"$", p:1.25}, "Mas":{c:"SSO", p:17}, "Butacow":{c:"SSO", p:8}}},
    {cat:"RASHIIN", name:"SALBUKO", prices:{"Madaal":{c:"$", p:1.25}, "Mas":{c:"SSO", p:17}, "Butacow":{c:"SSO", p:8}}},
    {cat:"RASHIIN", name:"MISIR", prices:{"Madaal":{c:"$", p:1.25}, "Mas":{c:"SSO", p:17}, "Butacow":{c:"SSO", p:8}}},
    {cat:"RASHIIN", name:"QAMADI", prices:{"Madaal":{c:"$", p:1}, "Mas":{c:"$", p:0.5}, "Butacow":{c:"$", p:0.25}}},
    {cat:"RASHIIN", name:"SOOR", prices:{"Madaal":{c:"SSO", p:20}, "Mas":{c:"SSO", p:10}, "Butacow":{c:"SSO", p:5}}},
    {cat:"RASHIIN", name:"FUUL", prices:{"Brimo":{c:"$", p:0.75}, "Tomco":{c:"SSO", p:17}}},
    {cat:"RASHIIN", name:"LOOS", prices:{"Loos Yar":{c:"$", p:1.25}, "Loos Weyn":{c:"$", p:1.5}}},
    {cat:"RASHIIN", name:"SHII-SHIID", prices:{"shiishiid":{c:"SSO", p:3}}},
    {cat:"RASHIIN", name:"MALAAY", prices:{"YR":{c:"$", p:0.75}, "WYN":{c:"$", p:1.25}}},
    {cat:"RASHIIN", name:"KAJAB", prices:{"kuleel":{c:"$", p:0.75}, "qawoow":{c:"$", p:0.5}}},
    {cat:"RASHIIN", name:"UKUN", prices:{"1 Mir":{c:"SSO", p:5}}},
    {cat:"RASHIIN", name:"CALEEN", prices:{"Bac yar":{c:"SSO", p:2}, "Bac weyn":{c:"$", p:0.75}}},
    {cat:"RASHIIN", name:"CAANO", prices:{"Bac HILWA":{c:"SSO", p:5}, "Gasac yar HILWA":{c:"$", p:8.5},"Bac QAMAR":{c:"SSO", p:4},"Gasac yar QAMAR":{c:"$", p:7.5},"banlait gasac weyn":{c:"$", p:10},"Cano macan":{c:"$", p:1}}},
    {cat:"RASHIIN", name:"MISHARI-HILWA", prices:{"gasac yar":{c:"$", p:2}}},
    {cat:"RASHIIN", name:"CAWITAAN ", prices:{"Ahsan gasac yar":{c:"$", p:3.5},"orange gasac yar":{c:"$", p:3.5},"orange gasac weyn":{c:"$", p:7.5},"cananas gasac weyn":{c:"$", p:7.5},"mango bac":{c:"SSO", p:4}}},
    {cat:"RASHIIN", name:"BIYO CAAFI", prices:{"One":{c:"$", p:1}, "Two":{c:"$", p:0.5}, "Three":{c:"$", p:0.25}, "Four":{c:"SSO", p:4}}},
    {cat:"RASHIIN", name:"BUSKUD",prices:{"abuwalad buskud":{c:"$", p:0.25},"cremo buskud":{c:"$", p:0.5},"bac yar buskud":{c:"SSO", p:1}}},
    {cat:"RASHIIN", name:"Shishid-cad",prices:{"BAC":{c:"SSO", p:3}}},

    {cat:"NADAFAD", name:"SABUUN ", prices:{"Dove":{c:"$", p:1},"Babay":{c:"$", p:1},"Raaxo":{c:"$", p:0.25},"life boy yar":{c:"$", p:0.25},"life boy weyn":{c:"$", p:0.5}}},
    {cat:"NADAFAD", name:"OOMO", prices:{"baluug":{c:"SSO", p:5}, "gaduud yar":{c:"SSO", p:3},"gaduud weyn":{c:"SSO", p:5}}},
    {cat:"NADAFAD", name:"MARIS", prices:{"omar xabad":{c:"SSO", p:10},"omar jab":{c:"SSO", p:5},"fast xabad":{c:"SSO", p:9},"fast jab":{c:"SSO", p:4.5},"marwo":{c:"$", p:0.5}}},
    {cat:"NADAFAD", name:"SHAMBO-DHAR", prices:{"WYN":{c:"$", p:5.5},"dhexe":{c:"$", p:2.5},"yar":{c:"$", p:1.5},"YAR ZAAID":{c:"$", p:1}}},
    {cat:"NADAFAD", name:"SHAMBO-MADAX", prices:{"weyn":{c:"$", p:2},"yar":{c:"$", p:1},"madow shambo":{c:"$", p:3.5},"bac shambo":{c:"SSO", p:1},"shmbo CO":{c:"$", p:4}}},
    {cat:"NADAFAD", name:"CAFAAYAD", prices:{"N4":{c:"SSO", p:4},"N3":{c:"SSO", p:4},"N2":{c:"SSO", p:4},"CAFAYAD BUUMO":{c:"SSO", p:5}}},
    {cat:"NADAFAD", name:"CARFISO", prices:{"carfiso guri":{c:"$", p:2},"carfiso daah":{c:"$", p:4},"bibaf yar":{c:"$", p:1.5},"bibaf weyn":{c:"$", p:2.5}}},
    {cat:"NADAFAD", name:"ALWAYS", prices:{"cad":{c:"$", p:1}, "B":{c:"$", p:1}}},
    {cat:"NADAFAD", name:"ISKOOBO", prices:{"xaqin":{c:"$", p:2}, "tirtire":{c:"$", p:2}}},
    {cat:"NADAFAD", name:"TEAM 1", prices:{"dove carfiso":{c:"$", p:3.5}, "tiish":{c:"$", p:0.5},"nafaqo":{c:"$", p:3},"face wash":{c:"$", p:2},"kolget yar":{c:"$", p:0.5},"kolget weyn":{c:"$", p:1.5},"catar al lamsa":{c:"$", p:2.5},}},
    {cat:"NADAFAD", name:"TEAM 2 ", prices:{"gacan qawes":{c:"$", p:0.25},"black":{c:"$", p:0.5},"cud sun 1mir":{c:"SSO", p:1},"cud sun bac":{c:"$", p:0.75},"cud caraf bac":{c:"SSO", p:2},"cud caraf karton":{c:"$", p:0.5}}},
    {cat:"NADAFAD", name:"CREAMS", prices:{"vestline":{c:"$", p:0.5}, "denovate":{c:"$", p:2},"ledy white":{c:"$", p:2},"iskarex":{c:"$", p:2},"CN":{c:"SSO", p:8},"rice milk":{c:"$", p:2},"babay yar":{c:"$", p:1.5},"babay weyn":{c:"$", p:2.5},"chamak":{c:"$", p:2.5},"new":{c:"$", p:2}}},

    {cat:"ALABTA", name:"MINDI", prices:{"caag":{c:"$", p:0.75}}},
    {cat:"ALABTA", name:"QAANDO", prices:{"YR":{c:"SSO", p:3}, "WYN":{c:"SSO", p:5}}},
    {cat:"ALABTA", name:"BAAQULI", prices:{"YR":{c:"$", p:0.75}, "WYN":{c:"$", p:1.75}}},
    {cat:"ALABTA", name:"BAKERI", prices:{"rolax 1-mir":{c:"SSO", p:16}, "BOX":{c:"$", p:3.5}}},
    {cat:"ALABTA", name:"CAAG-CANJERO", prices:{"YR":{c:"$", p:1.25}, "WYN":{c:"$", p:2}}},
    {cat:"ALABTA", name:"CAAGAG-CAJIIN", prices:{"YR":{c:"$", p:1.25}, "WYN":{c:"$", p:2}}},
    {cat:"ALABTA", name:"GARAFO-YAR", prices:{"Yariis":{c:"$", p:1.5},"yar hoyo mideeda camal":{c:"$", p:1}}},
    {cat:"ALABTA", name:"GARAFO-WEYN", prices:{"ramadan":{c:"$", p:2},"flower":{c:"SSO", p:2.5},"vip":{c:"SSO", p:6}}},
    {cat:"ALABTA", name:"BAALDI", prices:{"birimo":{c:"$", p:2}}},
    {cat:"ALABTA", name:"BEESHIN", prices:{"birimo":{c:"$", p:1}}},
    {cat:"ALABTA", name:"GALAAS", prices:{"1 xabo":{c:"$", p:0.5}}},
    {cat:"ALABTA", name:"TARMUUS", prices:{"royal best":{c:"$", p:4},"flask 1.0L":{c:"$", p:5.5},"flask 1.20L":{c:"$", p:4},"Termo":{c:"$", p:5.5},"hot cold":{c:"$", p:5.5}}},
    {cat:"ALABTA", name:"TUUNJI", prices:{"caag":{c:"$", p:1}}},
    {cat:"ALABTA", name:"QASHIN-GURE ", prices:{"caag":{c:"$", p:1.75},"bir":{c:"$", p:2}}},
    {cat:"ALABTA", name:"SILIG-ALAAB", prices:{"YR":{c:"SSO", p:3}, "WYN":{c:"$", p:0.5}}},
    {cat:"ALABTA", name:"CAANO-MIIR", prices:{"YR":{c:"SSO", p:4}, "WYN":{c:"$", p:0.5}}}, 
    {cat:"ALABTA", name:"BINKA-DHARKA", prices:{"darsan":{c:"$", p:0.25}}},
    {cat:"ALABTA", name:"BIIN-XIJAAB", prices:{"1 xabo":{c:"SSO", p:1}}},
    {cat:"ALABTA", name:"DHAGO", prices:{"safia":{c:"$", p:2},"MF":{c:"$", p:2}}},
    {cat:"ALABTA", name:"QUFUL", prices:{"guri":{c:"$", p:0.5}}},
    {cat:"ALABTA", name:"QALIN`S", prices:{"biire":{c:"SSO", p:5},"Qori":{c:"SSO", p:2}}},
    {cat:"ALABTA", name:"TOOSH", prices:{"1 xabo":{c:"$", p:0.25}}},
    {cat:"ALABTA", name:"BUUG", prices:{"40 baal somali":{c:"$", p:0.25},"40 baal xisab":{c:"SSO", p:5},"60 baal":{c:"SSO", p:8},"100 baal":{c:"$", p:0.5}}},
    {cat:"ALABTA", name:"BATARI", prices:{"1-mir":{c:"SSO", p:2}}},
    {cat:"ALABTA", name:"QOROTO", prices:{"caag":{c:"SSO", p:1}}},
    {cat:"ALABTA", name:"SHANLO", prices:{"WYN":{c:"SSO", p:4},"YR":{c:"SSO", p:2}}},
    {cat:"ALABTA", name:"MASASAD", prices:{"caag":{c:"$", p:1}}},
    {cat:"ALABTA", name:"CANJAR", prices:{"masasad":{c:"$", p:0.25}}},
    {cat:"ALABTA", name:"JANTO", prices:{"qaraxad":{c:"SSO", p:3}}},
    {cat:"ALABTA", name:"DIGSI", prices:{"yar 1":{c:"$", p:1},"yar 2":{c:"$", p:1.5},"yar 3":{c:"$", p:1.75},"weyn xige":{c:"$", p:2},"weyn":{c:"$", p:2.5}}},

    {cat:"YARYAR", name:"TOON", prices:{"Hal":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"BARAF", prices:{"baraf":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"JALAATO", prices:{"jalaato":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"QORFO iyo HEEL", prices:{"Bac yar":{c:"SSO", p:1},"Bac jalaato":{c:"$", p:0.25}}},
    {cat:"YARYAR", name:"DHAGA-YARE ", prices:{"bac yar":{c:"SSO", p:1},"Bac jalaato":{c:"$", p:0.25},}},
    {cat:"YARYAR", name:"KALORIN", prices:{"bac yar":{c:"SSO", p:1},"Bac jalaato":{c:"$", p:0.25},}},
    {cat:"YARYAR", name:"DANGO ", prices:{"bac jalato":{c:"SSO", p:4},"gasac":{c:"$", p:0.75}}},
    {cat:"YARYAR", name:"XAWAAJI", prices:{"dhuub":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"MACEEYE", prices:{"bac":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"CUSBO", prices:{"caag":{c:"$", p:1},"bac":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"JUMBO", prices:{"jumbo":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"NANAC", prices:{"qori":{c:"SSO", p:1},"kuleel 3 xabo":{c:"SSO", p:1},"coffee 2 xabo":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"XANJO ", prices:{"dhiig":{c:"SSO", p:1},"kuleel 1 xabo":{c:"SSO", p:1},"kuleel box":{c:"SSO", p:5}}},
    {cat:"YARYAR", name:"LEEWATO", prices:{"Lebato":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"SHACFARAN", prices:{"Hal":{c:"SSO", p:1}}},
    {cat:"YARYAR", name:"SAKIIN ", prices:{"1 mir":{c:"SSO", p:1},"box":{c:"SSO", p:5}}},
    {cat:"DHKA", name:"GORGORAD", prices:{"gorgorad":{c:"$", p:1}}},
    {cat:"DHKA", name:"GABISAR-LIISHE", prices:{"Birimo":{c:"$", p:1.5}}},
    {cat:"DHKA", name:"GABISAR iyo DIRAC", prices:{"|Birimo|":{c:"$", p:7}}},
    {cat:"DHKA", name:"DIRAC", prices:{"yardi":{c:"$", p:2}}},
    {cat:"DHKA", name:"TAAKO", prices:{"mida lawada kalar":{c:"$", p:0.5},"mida Liishaha":{c:"SSO", p:5}}},
    {cat:"DHKA", name:"CILAAN", prices:{"Amira":{c:"$", p:0.5},"marwo":{c:"$", p:0.25},"Get":{c:"$", p:0.5}}},
    {cat:"DHKA", name:"SAGSAAN", prices:{"birimo":{c:"$", p:0.5}}},
    {cat:"DHKA", name:"KAWO", prices:{"apple":{c:"$", p:1.5},"maskiin":{c:"$", p:0.75},"buur":{c:"$", p:1},"Caag fashion":{c:"$", p:1.5},"shabeel":{c:"$", p:2.5},"Leisure":{c:"$", p:2},"new fashion":{c:"$", p:2},"HI":{c:"$", p:1.5},"conform":{c:"$", p:2},"ila muran":{c:"$", p:1.5},"kuwa Aabo wato":{c:"$", p:2},"miskin VIP":{c:"$", p:1.5},"Light":{c:"$", p:2},"Smile":{c:"$", p:2}}},
];

let dailySales = JSON.parse(localStorage.getItem("macruuf_daily_sales")) || { orders: 0, usd: 0, sso: 0 };

window.onload = () => {
    const saved = localStorage.getItem("macruuf_user");
    if(saved) { user = JSON.parse(saved); startApp(); }
};
/* --- CHATBOT LOGIC DHAMMAYSTIRAN (SAXAN) --- */
let currentProduct = null;
let chatStep = "welcome";
let errorCount = 0;
// Liiska qoraallada soo dhoweynta (Random Welcome)
const welcomes = [
    "Kaliya si sax igu qor adeega rabto magacisa si qimaha saxda aan kugu shego?",
    "Soo dhawaw macmiil! Maxaan kuu raadiyaa maanta? 😊",
    "Haye! Macruuf Shop ayaa ku soo dhoweynaya, maxaa kuu diyaarinaa?",
    "Maalin wanaagsan! Alaabtee rabaa inaan kuu check-gareeyo?",
    "Macmiil! Maxaa kuu diyaarinaa oo adeeg ah manta?",
    "Haka wal-walin wax kasto wan ku shegi karaa?",
    "Adeega maxaan ka dhignaa manta?",
    "Soo dhawaaw eboow xakula radiyaa bariga ( from AB wye hdalkan 😂?"
];

// 1. AUTOMATIC WELCOME: Marka bogga la furo (Page Load)
window.addEventListener('load', function() {
    setTimeout(() => {
        const win = document.getElementById('chat-window');
        if (win) {
            win.classList.remove('hidden'); 
            const randomWelcome = welcomes[Math.floor(Math.random() * welcomes.length)];
            showTypingPreview(() => {
                sendBotMsg(randomWelcome);
            });
        }
    }, 2000);
});

// Function dhibcaha u muujiya fariin kasta ka hor
function showTypingPreview(callback) {
    const b = document.getElementById('chat-body');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    b.appendChild(typingDiv);
    b.scrollTop = b.scrollHeight;

    setTimeout(() => {
        if(document.getElementById('typing-indicator')) document.getElementById('typing-indicator').remove();
        callback();
    }, 2000);
}

function toggleChat() {
    const win = document.getElementById('chat-window');
    win.classList.toggle('hidden');
}

function clearChat() {
    document.getElementById('chat-body').innerHTML = "";
    currentProduct = null;
    chatStep = "welcome";
    errorCount = 0;
    sendBotMsg("Sheekadii waa la tirtiray. Maxaan hadda kuu raadiyaa?");
}
function toggleChat() {
    var chatWindow = document.getElementById("chat-window");
    if (chatWindow.style.display === "none") {
        chatWindow.style.display = "flex";
    } else {
        chatWindow.style.display = "none";
    }
}
function handleChat() {
    const inputField = document.getElementById('chat-input');
    const msg = inputField.value.trim();
    if(!msg) return;

    document.getElementById('chat-body').innerHTML += `<div class="user-msg">${msg}</div>`;
    inputField.value = "";
    
    showTypingPreview(() => {
        processBot(msg);
    });
}

function processBot(userInput) {
    const text = userInput.toLowerCase().replace(/[-|'’`]/g, ' ').trim();
    
    // 1. SEARCH PRODUCT (Haddii macmiilku magaca alaabta qoro)
    let found = products.find(p => {
        let n = p.name.toLowerCase().replace(/[-|'’`]/g, ' ').trim();
        return n === text || (text.length >= 4 && (n.includes(text) || text.includes(n)));
    });

    if (found) {
        currentProduct = found;
        let sizes = Object.keys(found.prices).join(", ");
        sendBotMsg(`Soo dhawaw macmiil, <span class="prod-name">${found.name.toUpperCase()}</span> Waan haynaa. <br><br> Midkee Rabtaa Macamil: <b>${sizes}</b>?`, true);
        chatStep = "waiting_size";
        errorCount = 0;
        return;
    }

    // 2. MATH & SIZE (Halkan ayaa ah qaybta aad rabtay)
    if (chatStep === "waiting_size" && currentProduct) {
        let sizeFound = null;
        let qty = 1;
        
        // Raadi size-ka ku jira qoraalka (Smart Match)
        let availableSizes = Object.keys(currentProduct.prices).sort((a,b) => b.length - a.length);
        for (let s of availableSizes) {
            if (text.includes(s.toLowerCase())) { 
                sizeFound = s; 
                break; 
            }
        }

        if (sizeFound) {
            // Soo saar lambarka haddii la qoray (2, 3, 10 iwm)
            let numMatch = text.match(/\d+/);
            if (numMatch) {
                qty = parseInt(numMatch[0]);
            } else if (text.includes("labo") || text.includes("lawo")) {
                qty = 2;
            } else if (text.includes("sadax") || text.includes("saddex")) {
                qty = 3;
            }

            let pData = currentProduct.prices[sizeFound];
            let total = pData.p * qty;
            
            // JAWAABTA AAD RABTAY: (Size-ka macmiilku qoray + Inta dalabkaaga)
            sendBotMsg(`Haye macmiil, <span class="prod-name">${currentProduct.name}</span> (Adegan intaa ka dalbate qimahod waa) <b>${total}${pData.c}</b>. <br><br> <br> Soo sheeg Adeega xiga, Mahadsanid.`, true);
            
            errorCount = 0;
            return;
        }
    }

    // 3. ERROR HANDLING
    if (errorCount === 0) {
        sendBotMsg(`Fadlan su'aashaada ama hddalkaga iso weydise fasax uma qawo ina kaga jawab ee fadlan Iweydi adeega macruuf shop haayo ama laxarir wixi su al dherad ah aad qabto numberkaan <br><br> 📞 611207927 mahadsanid.`);
        errorCount++;
    } else {
        sendBotMsg("Walaal, fadlan magaca alaabta si sax ah u qor ama su al kabaxsan suuqa  hdda haysidna laxariir numberkaan wan kaa xalineenaa <br><br> 📞 611207927 mahadsanid.");
    }
}
function sendBotMsg(m, isItem = false) {
    const b = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = isItem ? 'bot-msg item-found' : 'bot-msg';
    div.innerHTML = m;
    b.appendChild(div);
    b.scrollTop = b.scrollHeight;
}

document.getElementById('chat-input').addEventListener("keypress", (e) => { if (e.key === "Enter") handleChat(); });
function registerUser() {
    const n = document.getElementById("name").value, p = document.getElementById("phone").value;
    if(!n || !p) return alert("Fadlan buuxi magaca iyo lambarka!");
    user = {n, p};
    localStorage.setItem("macruuf_user", JSON.stringify(user));
    startApp();
}
const btn = document.querySelector('#start-record');
const status = document.querySelector('#status');
const output = document.querySelector('#output');

// Hubi haddii browser-ku taageerayo Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    status.innerText = "Waan ku dhageysanayaa...";
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    output.innerText = "Waxaad tiri: " + transcript;
    
    processCommand(transcript);
};

function processCommand(command) {
    // 1. Haddii aad qiimo weydiiso
    if (command.includes("qiimaha") || command.includes("waa imisa")) {
        speak("Alaabtan qiimaheedu waa 10 doolar.");
    } 
    
    // 2. Haddii aad dhahdo ii dalab (Cart-ka ku dar)
    else if (command.includes("ii dalab") || command.includes("cart")) {
        addToCart("Bariis", 10); // Tusaale ahaan
        speak("Waa lagu daray dalabkaaga.");
    }
    
    // 3. Haddii aad dhahdo xogta ii save garee
    else if (command.includes("save") || command.includes("kaydi")) {
        saveOrder();
        speak("Xogta Macruuf Shop waa la kaydiyey.");
    }
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

btn.addEventListener('click', () => {
    recognition.start();
});
function saveOrder() {
    const date = new Date();
    const orderData = {
        shop: "Macruuf Shop",
        magaca: "Macaamiil", // Waxaad ka soo qaadi kartaa Input
        saacada: date.getHours() + ":" + date.getMinutes(),
        tariikhda: date.toLocaleDateString(),
        products: "Bariis, Saliid", // Cart-kaaga ka soo qaad
        totalUSD: "$10",
        totalSSO: "260,000 SOS"
    };
    
    console.log("Xogta la kaydiyey:", orderData);
    alert("Xogta waa la kaydiyey! \n" + orderData.shop + "\nSaacadda: " + orderData.saacada);
    
    // Halkan waxaad dhigi kartaa LocalStorage ama Database si maalinta dambe aad u soo wada bixiso
    localStorage.setItem('daily_report', JSON.stringify(orderData));
}
function startApp() {
    document.getElementById("register-page").classList.add("hidden");
    document.getElementById("shop-page").classList.remove("hidden");
    document.getElementById("userInfo").innerHTML = `<span>👤 ${user.n}</span><span>📞 ${user.p}</span>`;
    render();
}
function editUserInfo() {
    if(confirm("Ma rabtaa inaad bedesho magaca iyo lambarka?")) {
        // 1. Tirtir xogta user-ka ee ku keydsan mobile-ka
        localStorage.removeItem("macruuf_user");
        
        // 2. Dib u cusubaysii bogga si uu kuu geeyo diwaangelinta
        location.reload(); 
    }
}
function getXilli() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) return "Subax";
    if (hour >= 9 && hour < 12) return "Barqo";
    if (hour >= 12 && hour < 15) return "Duhur";
    if (hour >= 15 && hour < 18) return "Galab";
    if (hour >= 18 && hour < 21) return "Fiid";
    return "Habeen";
}

function clearCart() {
    if(cart.length === 0) return alert("Dambiishu waa maran tahay!");
    if(confirm("Ma hubtaa inaad keydiso dalabkan?")) {
        cart.forEach(item => {
            let sub = item.qty * item.price.p;
            item.price.c == "$" ? dailySales.usd += sub : dailySales.sso += sub;
        });
        dailySales.orders += 1;
        localStorage.setItem("macruuf_daily_sales", JSON.stringify(dailySales));
        cart = [];
        renderCart();
        alert("Dalabkii waa la keydiyay!");
        backToShop();
    }
}

function showSalesReport() {
    document.getElementById("today-orders").innerText = dailySales.orders + 1;
    document.getElementById("today-usd").innerText = "$" + dailySales.usd.toFixed(2);
    document.getElementById("today-sso").innerText = dailySales.sso.toLocaleString() + " SSO";
    document.getElementById("sales-report-page").classList.remove("hidden");
}

function hideSalesReport() { document.getElementById("sales-report-page").classList.add("hidden"); }

function resetDailySales() {
    if(confirm("Ma hubtaa inaad tirtirto xisaabta maanta?")) {
        dailySales = { orders: 0, usd: 0, sso: 0 };
        localStorage.removeItem("macruuf_daily_sales");
        showSalesReport();
    }
}

function showCat(c, el) {
    currentCat = c;
    document.querySelectorAll('nav span').forEach(s => s.classList.remove('active'));
    if(el) el.classList.add('active');
    render();
}

function globalSearch() {
    const q = document.getElementById("search").value.toLowerCase();
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";
    if(q === "") { render(); return; }
    const filtered = products.filter(p => p.name.toLowerCase().includes(q));
    filtered.forEach(p => {
        let opts = Object.keys(p.prices).map(s => `<option>${s}</option>`).join("");
        grid.innerHTML += `<div class="card"><small style="color:var(--secondary); font-size:8px;">${p.cat}</small><h4>${p.name}</h4><select id="size-${p.name}">${opts}</select><div class="qty-box"><button onclick="changeQty('${p.name}', -1)">−</button><span id="qty-${p.name}">1</span><button onclick="changeQty('${p.name}', 1)">+</button></div><button class="dalbo-btn" onclick="addToCart('${p.name}')">DALBO</button></div>`;
    });
}

function render() {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";
    const list = products.filter(p => p.cat == currentCat);
    list.forEach(p => {
        let opts = Object.keys(p.prices).map(s => `<option>${s}</option>`).join("");
        grid.innerHTML += `<div class="card"><h4>${p.name}</h4><select id="size-${p.name}">${opts}</select><div class="qty-box"><button onclick="changeQty('${p.name}', -1)">−</button><span id="qty-${p.name}">1</span><button onclick="changeQty('${p.name}', 1)">+</button></div><button class="dalbo-btn" onclick="addToCart('${p.name}')">DALBO</button></div>`;
    });
}

function changeQty(id, val) {
    let el = document.getElementById("qty-"+id);
    let cur = parseInt(el.innerText);
    if(cur + val > 0) el.innerText = cur + val;
}

function addToCart(name) {
    const size = document.getElementById("size-"+name).value;
    const qty = parseInt(document.getElementById("qty-"+name).innerText);
    const prod = products.find(p => p.name == name);
    cart.push({ name, size, qty, price: prod.prices[size] });
    alert(name + " waa la daray!");
}

function openCart() {
    document.getElementById("shop-page").classList.add("hidden");
    document.getElementById("cart-page").classList.remove("hidden");
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cart-items-list");
    list.innerHTML = "";
    let usd = 0, sso = 0;
    cart.forEach((item, i) => {
        let sub = item.qty * item.price.p;
        item.price.c == "$" ? usd += sub : sso += sub;
        list.innerHTML += `<div class="cart-item"><button class="del-btn" onclick="removeItem(${i})">×</button><strong>${item.name}</strong> (${item.size})<br>Tirada: ${item.qty} | <span class="${item.price.c == '$' ? 'price-usd' : 'price-sso'}">${sub} ${item.price.c}</span></div>`;
    });
    document.getElementById("finalUsd").innerText = usd.toFixed(2);
    document.getElementById("finalSso").innerText = sso;
}

function removeItem(i) { cart.splice(i,1); renderCart(); }
function backToShop() { document.getElementById("cart-page").classList.add("hidden"); document.getElementById("shop-page").classList.remove("hidden"); }

function sendWhatsApp() {
    if(cart.length == 0) return alert("Dambiishaada waa maran tahay!");
    
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB');
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const xilli = getXilli();
    
    let usd = 0, sso = 0, items = "";
    cart.forEach(c => {
        let sub = c.qty * c.price.p;
        c.price.c == "$" ? usd += sub : sso += sub;
        items += `• ${c.name} (${c.size}) x${c.qty} = ${sub} ${c.price.c}\n`;
    });

    let msg = `*MACRUUF SHOP - DALAB CUSUB*\n`;
    msg += `--------------------------\n`;
    msg += `👤 *Magaca:* ${user.n}\n`;
    msg += `📞 *Lambarka:* ${user.p}\n`;
    msg += `📅 *Taariikh:* ${dateStr}\n`;
    msg += `🕒 *Saacadda:* ${timeStr} (${xilli})\n`;
    msg += `🔢 *Dalabka:* #${dailySales.orders + 1}\n`;
    msg += `--------------------------\n`;
    msg += `${items}\n`;
    msg += `--------------------------\n`;
    msg += `💰 *TOTAL USD: $${usd.toFixed(2)}*\n`;
    msg += `💰 *TOTAL SSO: ${sso}*`;

    window.open(`https://wa.me/252${WHATSAPP_NUM}?text=` + encodeURIComponent(msg));
}
</script>
<footer class="main-footer">
    <h2 class="footer-title">MACRUUF SHOP</h2>
    
    <div class="social-links">
        <a href="https://www.facebook.com/skillbaseacademy" class="icon facebook">
    <i class="fab fa-facebook"></i>
    <span>Facebook</span>
</a>
        <a href="https://www.tiktok.com/@skillbaseacademy" class="icon tiktok">
    <i class="fab fa-tiktok"></i>
    <span>TikTok</span>
</a>
        <a href="https://youtube.com" class="icon youtube">
            <i class="fab fa-youtube"></i>
            <span>YouTube</span>
        </a>
        <a href="https://wa.me/252619271562?text=Asc, MO%20ma%20icawin%20kartaaa%20manta" class="icon whatsapp">
    <i class="fab fa-whatsapp"></i>
    <span>WhatsApp</span>
</a>
    </div>

    <div class="footer-credits">
        <p>© 2026 Macruuf Shop. All Rights Reserved.</p>
        <p class="rainbow-text">Made with ❤️ by <span>Mohamed Abdikariim Abdi</span></p>
    </div>
</footer>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
