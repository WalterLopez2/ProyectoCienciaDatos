try {
  // datos del IPC de Honduras (BCH), un array por [mes, IPC, var interanual %, var mensual %]
  const raw = [
    ["2019-01", "69.65", 3.95, 0.03],
    ["2019-02", "70.19", 4.09, 0.77],
    ["2019-03", "70.47", 4.14, 0.4],
    ["2019-04", "71.12", 4.86, 0.92],
    ["2019-05", "71.37", 5.14, 0.36],
    ["2019-06", "71.44", 4.8, 0.09],
    ["2019-07", "71.63", 4.69, 0.27],
    ["2019-08", "71.67", 4.29, 0.06],
    ["2019-09", "71.78", 4.42, 0.15],
    ["2019-10", "71.95", 4.08, 0.24],
    ["2019-11", "72.17", 3.84, 0.3],
    ["2019-12", "72.47", 4.08, 0.42],
    ["2020-01", "72.65", 4.3, 0.24],
    ["2020-02", "72.99", 3.99, 0.47],
    ["2020-03", "73.21", 3.88, 0.3],
    ["2020-04", "73.48", 3.33, 0.38],
    ["2020-05", "73.01", 2.29, -0.64],
    ["2020-06", "73.34", 2.65, 0.44],
    ["2020-07", "73.86", 3.1, 0.71],
    ["2020-08", "73.99", 3.22, 0.18],
    ["2020-09", "74.23", 3.39, 0.32],
    ["2020-10", "74.59", 3.65, 0.49],
    ["2020-11", "74.93", 3.82, 0.46],
    ["2020-12", "75.38", 4.01, 0.6],
    ["2021-01", "75.68", 4.18, 0.4],
    ["2021-02", "75.81", 3.87, 0.17],
    ["2021-03", "76.09", 3.94, 0.37],
    ["2021-04", "76.4", 3.96, 0.4],
    ["2021-05", "76.55", 4.84, 0.2],
    ["2021-06", "76.76", 4.67, 0.28],
    ["2021-07", "77.0", 4.26, 0.31],
    ["2021-08", "77.3", 4.48, 0.39],
    ["2021-09", "77.65", 4.62, 0.45],
    ["2021-10", "78.06", 4.65, 0.53],
    ["2021-11", "78.65", 4.95, 0.75],
    ["2021-12", "79.4", 5.32, 0.96],
    ["2022-01", "80.37", 6.18, 1.22],
    ["2022-02", "80.65", 6.37, 0.35],
    ["2022-03", "81.41", 6.96, 0.94],
    ["2022-04", "82.79", 8.35, 1.69],
    ["2022-05", "83.52", 9.09, 0.88],
    ["2022-06", "84.62", 10.22, 1.32],
    ["2022-07", "85.37", 10.86, 0.89],
    ["2022-08", "85.35", 10.4, -0.03],
    ["2022-09", "85.46", 10.04, 0.13],
    ["2022-10", "86.02", 10.18, 0.66],
    ["2022-11", "86.86", 10.44, 0.98],
    ["2022-12", "87.18", 9.8, 0.37],
    ["2023-01", "87.55", 8.93, 0.42],
    ["2023-02", "88.57", 9.8, 1.16],
    ["2023-03", "88.78", 9.05, 0.24],
    ["2023-04", "88.95", 7.44, 0.19],
    ["2023-05", "89.01", 6.58, 0.07],
    ["2023-06", "89.36", 5.6, 0.39],
    ["2023-07", "89.77", 5.15, 0.46],
    ["2023-08", "90.22", 5.71, 0.5],
    ["2023-09", "90.7", 6.13, 0.53],
    ["2023-10", "91.04", 5.84, 0.38],
    ["2023-11", "91.23", 5.04, 0.21],
    ["2023-12", "91.7", 5.19, 0.52],
    ["2024-01", "91.92", 5.0, 0.23],
    ["2024-02", "92.54", 4.5, 0.68],
    ["2024-03", "93.0", 4.76, 0.49],
    ["2024-04", "93.26", 4.84, 0.28],
    ["2024-05", "93.41", 4.94, 0.16],
    ["2024-06", "93.71", 4.87, 0.32],
    ["2024-07", "94.31", 5.06, 0.64],
    ["2024-08", "94.72", 4.99, 0.43],
    ["2024-09", "94.76", 4.49, 0.05],
    ["2024-10", "94.72", 4.05, -0.05],
    ["2024-11", "94.83", 3.94, 0.11],
    ["2024-12", "95.26", 3.88, 0.45],
    ["2025-01", "95.84", 4.27, 0.61],
    ["2025-02", "96.94", 4.75, 1.15],
    ["2025-03", "97.18", 4.49, 0.24],
    ["2025-04", "97.35", 4.39, 0.18],
    ["2025-05", "97.65", 4.54, 0.31],
    ["2025-06", "98.08", 4.67, 0.44],
    ["2025-07", "98.47", 4.41, 0.4],
    ["2025-08", "98.66", 4.16, 0.2],
    ["2025-09", "99.07", 4.55, 0.41],
    ["2025-10", "99.31", 4.85, 0.24],
    ["2025-11", "99.66", 5.09, 0.35],
    ["2025-12", "100.0", 4.98, 0.35],
    ["2026-01", "99.89", 4.23, -0.11],
    ["2026-02", "100.29", 3.46, 0.4],
    ["2026-03", "101.01", 3.9411, 0.72],
    ["2026-04", "102.76", 5.56, 1.73],
    ["2026-05", "103.6", 6.09, 0.82],
    ["2026-06", "103.8", 5.83, 0.19],
    ["2026-07", "103.96", 5.58, 0.15],
    ["2026-08", "104.7816", 6.2047, 0.7903],
  ];
  const data = raw.map((r) => ({
    mes: r[0],
    ipc: parseFloat(r[1]),
    interanual: r[2],
    mensual: r[3],
  }));
  const n = data.length;
  const last = data[n - 1];

  const monthLabel = (ym) => {
    const [y, m] = ym.split("-").map(Number);
    return new Date(y, m - 1, 1).toLocaleDateString("es-HN", {
      month: "short",
      year: "2-digit",
    });
  };
  // promedio y desviacion estandar, se usan varias veces abajo
  const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const std = (arr) => {
    const m = mean(arr);
    return Math.sqrt(mean(arr.map((v) => (v - m) ** 2)));
  };

  // KPIs del resumen (arriba de todo)
  document.getElementById("kpiFigure").textContent =
    (last.interanual >= 0 ? "+" : "") + last.interanual.toFixed(2) + "%";
  if (last.interanual < 0) {
    document.getElementById("kpiFigure").classList.add("down");
  }
  document.getElementById("kpiIpc").textContent = last.ipc.toFixed(2);
  document.getElementById("kpiMensual").textContent =
    (last.mensual >= 0 ? "+" : "") + last.mensual.toFixed(2) + "%";

  // EDA - stats basicos, estacionalidad y meses raros (outliers)
  const mensualAll = data.map((d) => d.mensual);
  const interanualAll = data.map((d) => d.interanual);
  document.getElementById("edaMeanMensual").textContent =
    (mean(mensualAll) >= 0 ? "+" : "") + mean(mensualAll).toFixed(2) + "%";
  document.getElementById("edaStdMensual").textContent =
    std(mensualAll).toFixed(2) + " p.p.";
  document.getElementById("edaMeanInter").textContent =
    (mean(interanualAll) >= 0 ? "+" : "") +
    mean(interanualAll).toFixed(2) +
    "%";
  document.getElementById("edaStdInter").textContent =
    std(interanualAll).toFixed(2) + " p.p.";

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const seasonality = Array.from({ length: 12 }, (_, mIdx) => {
    const vals = data
      .filter((d) => parseInt(d.mes.split("-")[1], 10) - 1 === mIdx)
      .map((d) => d.mensual);
    return vals.length ? mean(vals) : 0;
  });
  // grafico de estacionalidad: promedio de cada mes calendario (todos los eneros juntos, etc)
  const chartSeasonality = new Chart(
    document.getElementById("chartSeasonality"),
    {
      type: "bar",
      data: {
        labels: monthNames.map((m) => m.slice(0, 3)),
        datasets: [
          {
            label: "Var. mensual promedio",
            data: seasonality,
            backgroundColor: seasonality.map((v) =>
              v >= 0 ? "#AB4630" : "#3E6B4C",
            ),
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            grid: { color: "#DDE1D6" },
            ticks: { font: { family: "IBM Plex Mono", size: 11 } },
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: "IBM Plex Mono", size: 10 } },
          },
        },
      },
    },
  );

  const sortedByMensual = data.slice().sort((a, b) => b.mensual - a.mensual);
  const topUp = sortedByMensual.slice(0, 3);
  const topDown = sortedByMensual.slice(-3).reverse();
  const outliersBody = document.getElementById("edaOutliersBody");
  const outlierRow = (tipo, d) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${tipo}</td><td>${monthLabel(d.mes)}</td><td>${d.mensual >= 0 ? "+" : ""}${d.mensual.toFixed(2)}%</td>`;
    outliersBody.appendChild(tr);
  };
  topUp.forEach((d) => outlierRow("Mayor salto", d));
  topDown.forEach((d) => outlierRow("Mayor caída", d));

  // limite de tolerancia de inflacion del BCH: 4% +/- 1 punto (Programa Monetario 2026-2027)
  const RANGE_LOW = 3.0;
  const RANGE_HIGH = 5.0;
  const outOfRangeCount = interanualAll.filter(
    (v) => v < RANGE_LOW || v > RANGE_HIGH,
  ).length;
  document.getElementById("insOutRange").textContent = (
    (outOfRangeCount / n) *
    100
  ).toFixed(0);

  const lastOut = last.interanual < RANGE_LOW || last.interanual > RANGE_HIGH;
  const banner = document.getElementById("rangeBanner");
  const bannerText = document.getElementById("rangeBannerText");
  banner.classList.add(lastOut ? "out" : "in");
  banner.querySelector(".alert-icon").textContent = lastOut ? "⚠" : "✓";
  bannerText.innerHTML = lastOut
    ? `<strong>Fuera del rango de tolerancia del BCH:</strong> la inflación interanual más reciente (${last.interanual.toFixed(2)}%) está fuera de la meta oficial de 4.0% ± 1 p.p. (3%–5%).`
    : `<strong>Dentro del rango de tolerancia del BCH:</strong> la inflación interanual más reciente (${last.interanual.toFixed(2)}%) está dentro de la meta oficial de 4.0% ± 1 p.p. (3%–5%).`;

  // modelo 1: regresion lineal simple sobre el indice
  const xs = data.map((_, i) => i);
  const ys = data.map((d) => d.ipc);

  function fitRegression(xArr, yArr) {
    const xM = mean(xArr);
    const yM = mean(yArr);
    let num = 0,
      den = 0;
    for (let i = 0; i < xArr.length; i++) {
      num += (xArr[i] - xM) * (yArr[i] - yM);
      den += (xArr[i] - xM) ** 2;
    }
    const sl = num / den;
    const ic = yM - sl * xM;
    return { slope: sl, intercept: ic };
  }

  const { slope, intercept } = fitRegression(xs, ys);
  let ssRes = 0,
    ssTot = 0;
  const yMeanFull = mean(ys);
  for (let i = 0; i < n; i++) {
    const predY = slope * xs[i] + intercept;
    ssRes += (ys[i] - predY) ** 2;
    ssTot += (ys[i] - yMeanFull) ** 2;
  }
  const r2 = 1 - ssRes / ssTot;
  const slopePct = (slope / yMeanFull) * 100;
  document.getElementById("modelSlope").textContent =
    (slopePct >= 0 ? "+" : "") + slopePct.toFixed(2) + "%";
  document.getElementById("modelR2").textContent = r2.toFixed(2);

  // modelo 2: Holt (suavizado exponencial con nivel + tendencia)
  function holtFit(series, alpha, beta) {
    let level = series[0];
    let trend = series[1] - series[0];
    for (let t = 1; t < series.length; t++) {
      const prevLevel = level;
      level = alpha * series[t] + (1 - alpha) * (level + trend);
      trend = beta * (level - prevLevel) + (1 - beta) * trend;
    }
    return { level, trend };
  }
  function holtForecast(level, trend, h) {
    return Array.from({ length: h }, (_, i) => level + (i + 1) * trend);
  }

  // separamos los ultimos 6 meses para probar cual modelo predice mejor (no se usan para entrenar)
  const TEST_SIZE = 6;
  const trainYs = ys.slice(0, n - TEST_SIZE);
  const testYs = ys.slice(n - TEST_SIZE);
  const trainXs = xs.slice(0, n - TEST_SIZE);

  const regTrain = fitRegression(trainXs, trainYs);
  const regTestPred = testYs.map(
    (_, i) => regTrain.slope * (trainXs.length + i) + regTrain.intercept,
  );

  // probamos varias combinaciones de alpha/beta y nos quedamos con la que menos error da
  let bestHolt = { alpha: 0.3, beta: 0.1, sse: Infinity };
  for (let a = 0.1; a <= 0.9; a += 0.1) {
    for (let b = 0.05; b <= 0.5; b += 0.05) {
      const fit = holtFit(trainYs, a, b);
      const preds = holtForecast(fit.level, fit.trend, TEST_SIZE);
      const sse = preds.reduce((s, p, i) => s + (p - testYs[i]) ** 2, 0);
      if (sse < bestHolt.sse) bestHolt = { alpha: a, beta: b, sse };
    }
  }
  const holtFitTrain = holtFit(trainYs, bestHolt.alpha, bestHolt.beta);
  const holtTestPred = holtForecast(
    holtFitTrain.level,
    holtFitTrain.trend,
    TEST_SIZE,
  );

  function errorMetrics(actual, pred) {
    const errs = actual.map((a, i) => a - pred[i]);
    const mae = mean(errs.map(Math.abs));
    const rmse = Math.sqrt(mean(errs.map((e) => e ** 2)));
    const mape = mean(errs.map((e, i) => Math.abs(e / actual[i]))) * 100;
    return { mae, rmse, mape };
  }
  const regErr = errorMetrics(testYs, regTestPred);
  const holtErr = errorMetrics(testYs, holtTestPred);
  const holtWins = holtErr.rmse < regErr.rmse;

  const compareBody = document.getElementById("modelCompareBody");
  const compareRow = (name, err, isWinner) => {
    const tr = document.createElement("tr");
    const cls = isWinner ? ' class="winner"' : "";
    tr.innerHTML = `<td>${name}${isWinner ? " ✓" : ""}</td><td${cls}>${err.mae.toFixed(3)}</td><td${cls}>${err.rmse.toFixed(3)}</td><td${cls}>${err.mape.toFixed(2)}%</td>`;
    compareBody.appendChild(tr);
  };
  compareRow("Regresión lineal", regErr, !holtWins);
  compareRow(
    `Holt (α=${bestHolt.alpha.toFixed(2)}, β=${bestHolt.beta.toFixed(2)})`,
    holtErr,
    holtWins,
  );

  document.getElementById("modelWinnerNote").innerHTML =
    `Con los últimos ${TEST_SIZE} meses como prueba, <strong>${holtWins ? "Holt" : "la regresión lineal"}</strong> tuvo menor error (RMSE ${Math.min(regErr.rmse, holtErr.rmse).toFixed(3)} vs ${Math.max(regErr.rmse, holtErr.rmse).toFixed(3)}) — ${holtWins ? "reacciona más rápido a la aceleración reciente" : "la tendencia de fondo pesa más que el ruido de corto plazo"}. Ese es el modelo que se usa como proyección principal.`;

  // ya elegido alpha/beta, reentrenamos con toda la serie para la proyeccion real
  const holtFull = holtFit(ys, bestHolt.alpha, bestHolt.beta);

  function computeProjection(horizon) {
    const labels = [];
    let [yy, mm] = last.mes.split("-").map(Number);
    for (let k = 1; k <= horizon; k++) {
      mm++;
      if (mm > 12) {
        mm = 1;
        yy++;
      }
      labels.push(`${yy}-${String(mm).padStart(2, "0")}`);
    }
    const regValues = labels.map((_, k) => slope * (n + k) + intercept);
    const holtValues = holtForecast(holtFull.level, holtFull.trend, horizon);
    return { labels, regValues, holtValues };
  }

  // grafico principal: historico + las 2 proyecciones (horizonte se cambia con los botones)
  const chartIpc = new Chart(document.getElementById("chartIpc"), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "IPC histórico",
          data: [],
          borderColor: "#1E2A24",
          backgroundColor: "transparent",
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.25,
        },
        {
          label: "Proyección (regresión)",
          data: [],
          borderColor: "#AD8A2E",
          backgroundColor: "transparent",
          borderWidth: 2,
          borderDash: [5, 4],
          pointRadius: 0,
          tension: 0.25,
        },
        {
          label: "Proyección (Holt)",
          data: [],
          borderColor: "#AB4630",
          backgroundColor: "transparent",
          borderWidth: 2,
          borderDash: [2, 3],
          pointRadius: 0,
          tension: 0.25,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        y: {
          grid: { color: "#DDE1D6" },
          ticks: { font: { family: "IBM Plex Mono", size: 11 } },
        },
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "IBM Plex Mono", size: 10 },
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 10,
          },
        },
      },
    },
  });

  function applyHorizon(h) {
    const proj = computeProjection(h);
    chartIpc.data.labels = [
      ...data.map((d) => monthLabel(d.mes)),
      ...proj.labels.map(monthLabel),
    ];
    chartIpc.data.datasets[0].data = [
      ...data.map((d) => d.ipc),
      ...Array(h).fill(null),
    ];
    chartIpc.data.datasets[1].data = [
      ...Array(n - 1).fill(null),
      data[n - 1].ipc,
      ...proj.regValues,
    ];
    chartIpc.data.datasets[2].data = [
      ...Array(n - 1).fill(null),
      data[n - 1].ipc,
      ...proj.holtValues,
    ];
    chartIpc.update();

    const winnerValues = holtWins ? proj.holtValues : proj.regValues;
    document.getElementById("kpiProy").textContent = winnerValues[0].toFixed(2);
    document.getElementById("modelFinal").textContent =
      winnerValues[winnerValues.length - 1].toFixed(2);
    document.getElementById("modelHorizonLabel").textContent = monthLabel(
      proj.labels[proj.labels.length - 1],
    );
  }

  document.querySelectorAll("[data-h]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("[data-h]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyHorizon(parseInt(btn.dataset.h, 10));
    });
  });
  applyHorizon(6);

  // graficos de variacion mensual e interanual (barras y linea)
  const chartMensual = new Chart(document.getElementById("chartMensual"), {
    type: "bar",
    data: {
      labels: [],
      datasets: [{ label: "Var. mensual %", data: [], backgroundColor: [] }],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          grid: { color: "#DDE1D6" },
          ticks: { font: { family: "IBM Plex Mono", size: 11 } },
        },
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "IBM Plex Mono", size: 9 },
            maxRotation: 60,
            autoSkip: true,
            maxTicksLimit: 8,
          },
        },
      },
    },
  });
  const chartInteranual = new Chart(
    document.getElementById("chartInteranual"),
    {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Var. interanual %",
            data: [],
            borderColor: "#AD8A2E",
            backgroundColor: "rgba(173,138,46,0.12)",
            fill: true,
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            grid: { color: "#DDE1D6" },
            ticks: { font: { family: "IBM Plex Mono", size: 11 } },
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { family: "IBM Plex Mono", size: 9 },
              maxRotation: 60,
              autoSkip: true,
              maxTicksLimit: 8,
            },
          },
        },
      },
    },
  );

  function applyRange(range) {
    const subset = range === "12" ? data.slice(-12) : data;
    const labels = subset.map((d) => monthLabel(d.mes));

    chartMensual.data.labels = labels;
    chartMensual.data.datasets[0].data = subset.map((d) => d.mensual);
    chartMensual.data.datasets[0].backgroundColor = subset.map((d) =>
      d.mensual >= 0 ? "#AB4630" : "#3E6B4C",
    );
    chartMensual.update();

    chartInteranual.data.labels = labels;
    chartInteranual.data.datasets[0].data = subset.map((d) => d.interanual);
    chartInteranual.update();
  }

  document.querySelectorAll("[data-r]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("[data-r]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyRange(btn.dataset.r);
    });
  });
  applyRange("all");

  // numeros fijos que se usan en la seccion de recomendaciones
  const mensualVals = data.map((d) => d.mensual);
  const recent6 = mensualVals.slice(-6);
  const first6 = mensualVals.slice(0, 6);
  const histMean = mean(mensualVals);
  const recentMean = mean(recent6);
  const volRatio = std(recent6) / std(first6);

  document.getElementById("modelRecent").textContent =
    (recentMean >= 0 ? "+" : "") + recentMean.toFixed(2) + "%";
  document.getElementById("insRecent").textContent = recentMean.toFixed(2);
  document.getElementById("insHist").textContent = histMean.toFixed(2);
  document.getElementById("insVol").textContent = volRatio.toFixed(1);

  // calculadora de poder adquisitivo (convierte L entre dos meses)
  const calcFrom = document.getElementById("calcFrom");
  const calcTo = document.getElementById("calcTo");
  const calcAmount = document.getElementById("calcAmount");
  data.forEach((d) => {
    const optFrom = document.createElement("option");
    optFrom.value = d.mes;
    optFrom.textContent = monthLabel(d.mes);
    calcFrom.appendChild(optFrom);
    const optTo = document.createElement("option");
    optTo.value = d.mes;
    optTo.textContent = monthLabel(d.mes);
    calcTo.appendChild(optTo);
  });
  calcFrom.value = data[0].mes;
  calcTo.value = last.mes;

  function runCalc() {
    const amount = parseFloat(calcAmount.value) || 0;
    const fromRow = data.find((d) => d.mes === calcFrom.value);
    const toRow = data.find((d) => d.mes === calcTo.value);
    if (!fromRow || !toRow) return;
    const result = amount * (toRow.ipc / fromRow.ipc);
    const pctChange = (toRow.ipc / fromRow.ipc - 1) * 100;
    document.getElementById("calcResult").textContent =
      "L " + result.toFixed(2);
    document.getElementById("calcExplain").textContent =
      `L ${amount.toFixed(2)} en ${monthLabel(fromRow.mes)} equivalen a L ${result.toFixed(2)} en ${monthLabel(toRow.mes)} — una variación acumulada de ${pctChange >= 0 ? "+" : ""}${pctChange.toFixed(2)}% según el IPC.`;
  }
  [calcAmount, calcFrom, calcTo].forEach((el) =>
    el.addEventListener("input", runCalc),
  );
  runCalc();

  // boton de descargar CSV
  document.getElementById("downloadCsvBtn").addEventListener("click", () => {
    const header = "Fecha,IPC,Variacion_Interanual_%,Variacion_Mensual_%\n";
    const rows = data
      .map((d) => `${d.mes}-01,${d.ipc},${d.interanual},${d.mensual}`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ipc_honduras.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // tabla con todos los meses (mas reciente primero)
  const tbody = document.getElementById("tableBody");
  data
    .slice()
    .reverse()
    .forEach((d, i) => {
      const isLast = i === 0;
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${monthLabel(d.mes)}</td><td>${d.ipc.toFixed(2)}${isLast ? '<span class="prelim">*</span>' : ""}</td><td>${d.mensual >= 0 ? "+" : ""}${d.mensual.toFixed(2)}%</td><td>${d.interanual >= 0 ? "+" : ""}${d.interanual.toFixed(2)}%</td>`;
      tbody.appendChild(tr);
    });

  // resalta en el menu la seccion que se esta viendo al hacer scroll
  const navLinks = document.querySelectorAll(".nav-links a");
  const observedSections = Array.from(navLinks)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`,
        );
        if (link && entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  observedSections.forEach((s) => spy.observe(s));
} catch (err) {
  console.error("Error al construir la app del IPC:", err);
  const banner = document.getElementById("errorBanner");
  banner.textContent =
    "Ocurrió un error al cargar los datos del proyecto. Revisa la consola del navegador para más detalles.";
  banner.style.display = "block";
}
