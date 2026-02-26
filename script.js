const WHATSAPP_NUM = "611207927";
let user = null, cart = [], currentCat = "RASHIIN";
let currentProduct = null, chatStep = "welcome", errorCount = 0;

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

// Koodhkan wuxuu siinayaa button kasta "Dareen riixid"
document.querySelectorAll('button, .dalbo-btn, .main-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('push-animation');
        setTimeout(() => {
            this.classList.remove('push-animation');
        }, 200);
    });
});

function startApp() {
    document.getElementById("register-page").classList.add("hidden");
    document.getElementById("shop-page").classList.remove("hidden");
    document.getElementById("userInfo").innerHTML = `<span>👤 ${user.n}</span><span>📞 ${user.p}</span>`;
    render();
}

function registerUser() {
    const n = document.getElementById("name").value, p = document.getElementById("phone").value;
    if(!n || !p) return alert("Fadlan buuxi magaca iyo lambarka!");
    user = {n, p};
    localStorage.setItem("macruuf_user", JSON.stringify(user));
    startApp();
}

// --- CHAT FUNCTIONS ---
function toggleChat() {
    const win = document.getElementById('chat-window');
    win.classList.toggle('hidden');
}

function handleChat() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if(!msg) return;
    document.getElementById('chat-body').innerHTML += `<div class="user-msg">${msg}</div>`;
    input.value = "";
    processBot(msg);
}

function processBot(userInput) {
    const text = userInput.toLowerCase();
    let found = products.find(p => p.name.toLowerCase().includes(text));
    if(found) {
        sendBotMsg(`Haye macmiil, ${found.name} waan haynaa. Midkee rabtaa?`);
    } else {
        sendBotMsg("Ma helin alaabtaas, fadlan magaca sax.");
    }
}

function sendBotMsg(m) {
    const b = document.getElementById('chat-body');
    b.innerHTML += `<div class="bot-msg">${m}</div>`;
    b.scrollTop = b.scrollHeight;
}

// --- SHOP FUNCTIONS ---
function render() {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";
    products.filter(p => p.cat == currentCat).forEach(p => {
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
        list.innerHTML += `<div class="cart-item"><strong>${item.name}</strong> - ${sub}${item.price.c}</div>`;
    });
    document.getElementById("finalUsd").innerText = usd;
    document.getElementById("finalSso").innerText = sso;
}

function sendWhatsApp() {
    // Koodhkii hore ee WhatsApp halkan ayuu soo gelayaa
    alert("Dalabkaaga WhatsApp ayaa loo dirayaa...");
}

function backToShop() {
    document.getElementById("cart-page").classList.add("hidden");
    document.getElementById("shop-page").classList.remove("hidden");
}
