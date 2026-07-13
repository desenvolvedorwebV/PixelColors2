const cores = {
    1: "#9b2f09",
    2: "#b54a12",
    3: "#6f2408",
    4: "#e00000",
    5: "#ff1010",
    6: "#ff9eb0",
    7: "#f00000",
    8: "#df0000",
    9: "#ff7f91",
    10: "#620000",
    "A1":"#FFF2CA", "A2":"#FFF9D3", "A3":"#FFEB8C", "A4":"#FFD23C", "A5":"#F9CA34", "A6":"#FFAF4B", "A7":"#FF7828","A8":"#DDB42D", "A9":"#F8986D", "A10": "#FF863E", "A11": "#FFBE6E", "A12":"#FFB695", "A13":"#FFAF41", "A14":"#FC5D37", "A15":"#F4F412", "A16":"#FFFD9C", "A17":"#FFDA6F", "A18": "#FFB97C", "A19":"#FD736F", "A20":"#FECE60", "A21":"#FCCD7F", "A22":"#FFE87E", "A23":"#F4D2B1", "A24":"#FFFFC8", "A25":"#FFD88A", "A26": "#FAB53B",
    "B1":"#E3EC2A", "B2":"#77DC45", "B3":"#A6F5A1", "B4":"#71E341","B5":"#46CA52", "B6":"#7EDCBC", "B7":"#068C79", "B8":"#01803D", "B9":"#063C1E", "B10":"#A7E7D8", "B11":"#6E7B36", "B12":"#2B7057", "B13":"#D0EE81", "B14":"#B8E144", "B15":"#3B6041", "B16":"#BFE798", "B17":"#9CB032",  "B18":"#E6E645", "B19":"#2EAE8C", "B20":"#DEF7DA", "B21":"#047C6B", "B22":"#16554C", "B23":"#3A4925", "B24":"#EFFFC1", "B25":"#5F886F", "B26":"#A48C48", "B27":"#D3DDA3", "B28":"#AAEDB7", "B29":"#C7DD4F", "B30":"#EFF8D0", "B31": "#CFEEB6", "B32":"#99A457",
    "C1":"#E9FCF0", "C2":"#B8EAE3", "C3":"#C5E8F9", "C4":"#83CFF0", "C5":"#12A6DC", "C6":"#59A8EC", "C7":"#377AC3", "C8":"#0066CC", "C9":"#234AC0", "C10":"#3BBFD6", "C11":"#2EC0BE", "C12":"#1C3244", "C13":"#D8EFFF", "C14":"#E5F7F7", "C15":"#35C0B3", "C16":"#2F5989", "C17":"#45C9D6", "C18":"#154047", "C19":"#208D9B", "C20":"#2289B9", "C21":"#E0F0FB", "C22":"#6FBBBA", "C23":"#DAF0F1", "C24":"#81C3F5", "C25":"#ABF2D0", "C26":"#61B0CA", "C27":"#F6F5FB", "C28":"#D1DEF7", "C29":"#364598",
    "D1":"#A9BBF6", "D2":"#8C9CD0", "D3":"#133EA2", "D4":"#213F7F", "D5":"#C554B8", "D6":"#BF95F6", "D7":"#7C50B1", "D8":"#E9E0FF", "D9":"#D8C5EE", "D10":"#2A1350", "D11":"#B7C7FE", "D12":"#E095D5", "D13":"#D63DB8", "D14":"#892A98", "D15":"#362392", "D16":"#E6E6FB", "D17":"#C7D5F6", "D18":"#9F63C4", "D19":"#EDD1F5", "D20":"#9A36AF", "D21":"#9E0899", "D22":"#3F4090", "D23":"#EADBF8", "D24":"#8888DD", "D25":"#5453C1", "D26":"#E4C6F2",
    "E1":"#FED7D2", "E2":"#FFD9EB", "E3":"#FC9BCB", "E4":"#F077AC", "E5":"#ED548B", "E6":"#FF3377", "E7":"#AD156D", "E8":"#FFDEDE", "E9":"#FF8BDA", "E10":"#B73B74", "E11":"#FCEBEC", "E12":"#FFADCC", "E13":"#A91185", "E14":"#FDD2C1", "E15":"#FAD3D6", "E16":"#FFF2EA", "E17":"#FBE8F7", "E18":"#FCCFED", "E19":"#FFD2F0", "E20":"#F5E2EB", "E21":"#D4A7AC", "E22":"#C686B1", "E23":"#AA8AA9", "E24":"#FFEBF8",
    "F1":"#FF9685", "F2":"#FF5F58", "F3":"#FF4E53", "F4":"#E02A25", "F5":"#CD3338", "F6":"#982F26", "F7":"#861736", "F8":"#B1082D", "F9":"#E66F83", "F10":"#984E30", "F11":"#642E28", "F12":"#FF435E", "F13":"#CD4931", "F14":"#FFAAAA", "F15":"#C22939", "F16":"#FEE2DC", "F17":"#FFB5A5", "F18":"#E6804D", "F19":"#C2555F", "F20":"#DA958B", "F21":"#FFB8C0", "F22":"#FDCBC9", "F23":"#EE7E6F", "F24":"#FFB3BD", "F25":"#DF5757",
    "G1":"#FFE3C8", "G2":"#FFD4B6", "G3":"#F8D2BE", "G4":"#E3C2A2", "G5":"#F9AE59", "G6":"#FD9B40", "G7":"#8D583B", "G8":"#492B1E", "G9":"#ECBD80", "G10":"#CF8C30", "G11":"#E7D297", "G12":"#DDBA84", "G13":"#DE8553", "G14":"#86644F", "G15":"#F5F5DC", "G16":"#ECDFC9", "G17":"#6B5652", "G18":"#F6E4D4", "G19":"#EBA457", "G20":"#AE633F", "G21":"#CD8F6D",
    "H1":"#F6F4F5", "H2":"#FFFFFF", "H3":"#BCBCBC", "H4":"#878787", "H5":"#635F67", "H6":"#3B373F", "H7":"#000000", "H8":"#F8E7E7", "H9":"#E8E4D8", "H10":"#EBE8F1", "H11":"#CECCCC", "H12":"#FFFCF4", "H13":"#ECE0C7", "H14":"#E3EBEE", "H15":"#A5B7BF", "H16":"#2A2418", "H17":"#FAFAFF", "H18":"#FEFEF4", "H19":"#FFFAED", "H20":"#9AA9B2", "H21":"#FAFAF1", "H22":"#EEEEF1", "H23":"#CED1BA",
    "M1":"#BCC5BA", "M2":"#92B298", "M3":"#748A94", "M4":"#F2E6DB", "M5":"#DFD6B8", "M6":"#D1C298", "M7":"#BFABA6", "M8":"#B3969A", "M9":"#B7967D", "M10":"#C5AFCB", "M11":"#9D809F", "M12":"#6F585C", "M13":"#E4AA9B", "M14":"#CF7064", "M15":"#888888"
};

let niveis = [];
let nivelAtual = null;
let corSelecionada = null;
let restantes = {};
let progressoPorNivel = {};
let pintadasPorNivel = {};
let completionsByLevel = {};
let currentPaintedKeys = new Set();
let totalCells = 0;

const board = document.getElementById("board");
const palette = document.getElementById("palette");
const menuNivel = document.getElementById("menuNivel");
const gameBoard = document.getElementById("gameBoard");
const backButton = document.getElementById("backButton");
const resetButton = document.getElementById("resetButton");
const levelTitle = document.getElementById("levelTitle");

backButton.addEventListener("click", voltarAoMenu);
resetButton.addEventListener("click", resetNivel);

async function carregarNiveis() {
    try {
        const resposta = await fetch("levels/index.json");
        const arquivos = await resposta.json();

        const progressData = JSON.parse(localStorage.getItem("pixelColorProgress") || "{}");
        progressoPorNivel = progressData.percent || {};
        pintadasPorNivel = progressData.painted || {};
        completionsByLevel = progressData.completed || {};
        niveis = [];

        for (const arquivo of arquivos) {
            const res = await fetch(`levels/${arquivo}`);
            const nivel = await res.json();
            niveis.push({ ...nivel, arquivo });
        }

        renderizarMenu();
    } catch (erro) {
        console.error(erro);
        menuNivel.innerHTML = "<p>Não foi possível carregar os níveis.</p>";
    }
}

function renderizarMenu() {
    menuNivel.innerHTML = "";
    menuNivel.classList.remove("hidden");
    menuNivel.classList.add("visible");
    gameBoard.classList.remove("visible");
    gameBoard.classList.add("hidden");

    niveis.forEach((nivel, index) => {
        const card = document.createElement("button");
        card.className = "nivelCard";
        card.type = "button";

        const miniatura = document.createElement("div");
        miniatura.className = "miniatura";
        miniatura.appendChild(criarMiniatura(nivel.pixels));

        const titulo = document.createElement("strong");
        titulo.textContent = nivel.nome || `Nível ${index + 1}`;

        const progressoAtual = progressoPorNivel[nivel.arquivo] || 0;
        const progresso = document.createElement("div");
        progresso.className = "nivelProgress";
        progresso.innerHTML = `
            <div class="progressBar"><div class="progressFill" style="width:${progressoAtual}%"></div></div>
            <small>${progressoAtual}% concluído</small>
        `;

        const completions = completionsByLevel[nivel.arquivo] || 0;
        const badge = document.createElement("div");
        badge.className = "nivelBadge";

        if (completions > 0) {
            card.classList.add("completed");
            badge.textContent = `Concluído ${completions} vez${completions === 1 ? "" : "es"}`;
        } else {
            badge.classList.add("neverCompleted");
            badge.textContent = "Nunca Concluído";
        }

        card.appendChild(miniatura);
        card.appendChild(titulo);
        card.appendChild(progresso);
        card.appendChild(badge);
        card.onclick = () => abrirNivel(index);
        menuNivel.appendChild(card);
    });
}

function criarMiniatura(pixels) {
    const canvas = document.createElement("canvas");
    const tamanho = 96;
    canvas.width = tamanho;
    canvas.height = tamanho;

    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const xs = pixels.map((p) => p.x);
    const ys = pixels.map((p) => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const colunas = maxX - minX + 1;
    const linhas = maxY - minY + 1;
    const tamanhoCelula = Math.max(1, Math.floor(Math.min(tamanho / colunas, tamanho / linhas)));
    const offsetX = Math.floor((tamanho - colunas * tamanhoCelula) / 2);
    const offsetY = Math.floor((tamanho - linhas * tamanhoCelula) / 2);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, tamanho, tamanho);

    const pixelMap = new Map(pixels.map((p) => [`${p.x},${p.y}`, p.cor]));

    for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            const cor = pixelMap.get(`${x},${y}`);
            if (cor === undefined || cor === null) {
                continue;
            }

            const px = offsetX + (x - minX) * tamanhoCelula;
            const py = offsetY + (y - minY) * tamanhoCelula;
            ctx.fillStyle = cores[cor] || "#f2f2f2";
            ctx.fillRect(px, py, tamanhoCelula, tamanhoCelula);
            ctx.strokeStyle = "rgba(0,0,0,.08)";
            ctx.strokeRect(px, py, tamanhoCelula, tamanhoCelula);
        }
    }

    return canvas;
}

function abrirNivel(index) {
    nivelAtual = index;
    carregarNivel(niveis[index]);
    atualizarTituloNivel(niveis[index]);

    menuNivel.classList.remove("visible");
    menuNivel.classList.add("hidden");
    gameBoard.classList.remove("hidden");
    gameBoard.classList.add("visible");
}

function atualizarTituloNivel(nivel) {
    levelTitle.textContent = nivel.nome ? `Nível: ${nivel.nome}` : "Nível selecionado";
}

function voltarAoMenu() {
    renderizarMenu();
}

function resetNivel() {
    if (nivelAtual === null) {
        return;
    }

    const nivel = niveis[nivelAtual];
    pintadasPorNivel[nivel.arquivo] = [];
    currentPaintedKeys.clear();
    progressoPorNivel[nivel.arquivo] = 0;
    saveProgressData();
    carregarNivel(nivel);
}

function salvarProgresso(arquivo, valor) {
    progressoPorNivel[arquivo] = valor;
    saveProgressData();
}

function carregarNivel(nivel) {
    if (!nivel) {
        return;
    }

    board.innerHTML = "";
    palette.innerHTML = "";
    corSelecionada = null;
    restantes = {};

    const xs = nivel.pixels.map((p) => p.x);
    const ys = nivel.pixels.map((p) => p.y);

    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const colunas = maxX - minX + 1;
    const linhas = maxY - minY + 1;

    board.style.gridTemplateColumns = `repeat(${colunas}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${linhas}, 1fr)`;

    if (colunas >= linhas) {
        board.style.width = "min(96vw, 520px)";
        board.style.height = "auto";
        board.style.aspectRatio = `${colunas}/${linhas}`;
    } else {
        board.style.height = "min(70vh, 520px)";
        board.style.width = "auto";
        board.style.aspectRatio = `${colunas}/${linhas}`;
    }

    const pixelMap = new Map();
    const paintedSet = new Set(pintadasPorNivel[nivel.arquivo] || []);
    currentPaintedKeys = new Set(paintedSet);
    totalCells = 0;

    nivel.pixels.forEach((p) => {
        const key = `${p.x},${p.y}`;
        pixelMap.set(key, p.cor);

        if (p.cor !== null && p.cor !== undefined) {
            restantes[p.cor] = (restantes[p.cor] || 0) + 1;
            totalCells++;
        }
    });

    for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            const key = `${x},${y}`;
            const cor = pixelMap.has(key) ? pixelMap.get(key) : null;
            const painted = paintedSet.has(key);

            const cell = document.createElement("div");
            cell.className = "cell";
            cell.dataset.x = x;
            cell.dataset.y = y;

            if (cor === null || cor === undefined) {
                cell.classList.add("blank");
                cell.dataset.valor = "";
            } else {
                cell.dataset.valor = cor;

                if (painted) {
                    cell.classList.add("painted");
                    cell.style.background = cores[cor];
                    restantes[cor]--;
                } else {
                    cell.textContent = cor;
                    cell.addEventListener("click", pintarCelula);
                }
            }

            board.appendChild(cell);
        }
    }

    criarPaleta();
}

function criarPaleta() {
    palette.innerHTML = "";

    const coresDisponiveis = Object.keys(restantes)
        .sort((a, b) => Number(a) - Number(b))
        .filter((numero) => restantes[numero] > 0);

    coresDisponiveis.forEach((numero) => {
        const btn = document.createElement("button");
        btn.className = "colorBtn";
        btn.style.background = cores[numero];
        btn.dataset.cor = numero;

        btn.innerHTML = `
                <span>${numero}</span>
                <small>${restantes[numero]}</small>
            `;

        btn.onclick = () => selecionarCor(numero);

        palette.appendChild(btn);
    });

    const selecionavel = coresDisponiveis.includes(corSelecionada);
    if (!selecionavel && coresDisponiveis.length > 0) {
        selecionarCor(coresDisponiveis[0]);
    }
}

function selecionarCor(numero) {
    corSelecionada = numero;

    document.querySelectorAll(".colorBtn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.cor === numero);
    });

    document.querySelectorAll(".cell").forEach((cell) => {
        cell.classList.remove("hint");

        if (cell.dataset.valor === numero && !cell.classList.contains("painted")) {
            cell.classList.add("hint");
        }
    });
}

function pintarCelula() {
    if (!corSelecionada) {
        return;
    }

    if (this.classList.contains("painted")) {
        return;
    }

    const correto = this.dataset.valor;

    if (correto !== corSelecionada) {
        erroLeve(this);
        return;
    }

    this.style.background = cores[corSelecionada];
    this.classList.remove("hint");
    this.classList.add("painted");

    const key = `${this.dataset.x},${this.dataset.y}`;
    currentPaintedKeys.add(key);
    restantes[corSelecionada]--;

    if (restantes[corSelecionada] <= 0) {
        corSelecionada = null;

        criarPaleta();
    } else {
        criarPaleta();
        selecionarCor(corSelecionada);
    }

    salvarProgressoAtual();
    verificarFim();
}

function erroLeve(cell) {
    cell.classList.remove("wrong");
    void cell.offsetWidth;
    cell.classList.add("wrong");

    if (navigator.vibrate) {
        navigator.vibrate(70);
    }
}

function verificarFim() {
    const terminou = Object.values(restantes).every((v) => v <= 0);

    if (terminou) {
        const nivel = niveis[nivelAtual];
        completionsByLevel[nivel.arquivo] = (completionsByLevel[nivel.arquivo] || 0) + 1;
        salvarProgressoAtual(true);
        setTimeout(() => {
            alert("Desenho concluído!");
        }, 200);
    }
}

function saveProgressData() {
    localStorage.setItem(
        "pixelColorProgress",
        JSON.stringify({
            percent: progressoPorNivel,
            painted: pintadasPorNivel,
            completed: completionsByLevel
        })
    );
}

function salvarProgressoAtual(completo = false) {
    if (nivelAtual === null) {
        return;
    }

    const nivel = niveis[nivelAtual];
    const concluido = completo ? totalCells : currentPaintedKeys.size;
    const porcentagem = totalCells > 0 ? Math.round((concluido / totalCells) * 100) : 0;

    progressoPorNivel[nivel.arquivo] = porcentagem;
    pintadasPorNivel[nivel.arquivo] = Array.from(currentPaintedKeys);
    saveProgressData();
}

carregarNiveis();
