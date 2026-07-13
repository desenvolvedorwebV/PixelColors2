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
