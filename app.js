// ---------------------------------------------------------------------------
// AgriLink — Company Dashboard
//
// Everything here reads from API_CONFIG (config.js). No mock data is baked
// in — if the backend isn't reachable yet, each panel shows a clear
// "couldn't load" state instead of silently faking numbers, so it's obvious
// during a demo whether the integration is actually working.
// ---------------------------------------------------------------------------

const { BASE_URL, ENDPOINTS, AUTH_TOKEN_KEY } = API_CONFIG;

// ---- fetch helpers ---------------------------------------------------------

async function apiFetch(path, options = {}) {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const res = await fetch(BASE_URL + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${res.status} ${res.statusText} — ${text || path}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

const apiGet = (path) => apiFetch(path, { method: "GET" });
const apiPost = (path, body) =>
  apiFetch(path, { method: "POST", body: JSON.stringify(body) });

// ---- formatting -------------------------------------------------------------

const fmtMoney = (n) =>
  n == null ? "—" : `₹${Number(n).toLocaleString("en-IN")}`;
const fmtPerKg = (n) => (n == null ? "—" : `₹${Number(n).toLocaleString("en-IN")}/kg`);
const fmtKg = (n) => (n == null ? "—" : `${Number(n).toLocaleString("en-IN")} kg`);

function statusClass(status) {
  if (!status) return "pending";
  return String(status).toLowerCase().replace(/\s+/g, "");
}

function chip(status) {
  if (!status) return "";
  return `<span class="chip ${statusClass(status)}">${status}</span>`;
}

function showStatus(message, type = "error") {
  const el = document.getElementById("statusBanner");
  el.textContent = message;
  el.className = `status-banner ${type}`;
}
function clearStatus() {
  const el = document.getElementById("statusBanner");
  el.className = "status-banner hidden";
}

function emptyRow(colspan, message) {
  return `<tr class="empty-row"><td colspan="${colspan}">${message}</td></tr>`;
}

// ---- overview stats ----------------------------------------------------------
// Expected response shape from GET /company/overview:
// {
//   companyName, companyType,
//   availableCrops, availableCropsNewThisWeek,
//   offersSent, offersPendingResponse,
//   purchasedCrops, purchasedThisMonth,
//   inventoryStockKg, inventoryCropCount,
//   notificationCount
// }
async function loadOverview() {
  try {
    const data = await apiGet(ENDPOINTS.OVERVIEW);

    document.getElementById("companyName").textContent = data.companyName || "Your Company";
    document.getElementById("companyRole").textContent = data.companyType || "Company";
    document.getElementById("topCompanyName").textContent = data.companyName || "Your Company";
    document.getElementById("welcomeHeading").textContent = `Welcome back, ${data.companyName || "there"}!`;

    const initials = (data.companyName || "?").trim().slice(0, 1).toUpperCase();
    document.getElementById("companyAvatar").textContent = initials;
    document.getElementById("topAvatar").textContent = initials;

    document.getElementById("statAvailableCrops").textContent = data.availableCrops ?? "—";
    document.getElementById("statAvailableCropsSub").textContent =
      data.availableCropsNewThisWeek != null ? `+ ${data.availableCropsNewThisWeek} new this week` : "";

    document.getElementById("statOffersSent").textContent = data.offersSent ?? "—";
    document.getElementById("statOffersSentSub").textContent =
      data.offersPendingResponse != null ? `${data.offersPendingResponse} pending response` : "";

    document.getElementById("statPurchased").textContent = data.purchasedCrops ?? "—";
    document.getElementById("statPurchasedSub").textContent =
      data.purchasedThisMonth != null ? `+ ${data.purchasedThisMonth} this month` : "";

    document.getElementById("statInventory").textContent = fmtKg(data.inventoryStockKg);
    document.getElementById("statInventorySub").textContent =
      data.inventoryCropCount != null ? `Across ${data.inventoryCropCount} crops` : "";

    const notifCount = data.notificationCount ?? 0;
    const badge = document.getElementById("notifCount");
    badge.textContent = notifCount;
    badge.classList.toggle("zero", notifCount === 0);
  } catch (err) {
    console.error("Overview load failed:", err);
    document.getElementById("companyName").textContent = "Couldn't load company";
    showStatus(`Couldn't reach the backend for dashboard stats (${err.message}).`, "error");
  }
}

// ---- available crops + make offer -------------------------------------------
// Expected response shape from GET /crops/available: array of
// { cropId, cropName, farmerName, location, quantityKg, expectedPricePerKg, photoUrl }
async function loadCrops() {
  const body = document.getElementById("cropsTableBody");
  try {
    const crops = await apiGet(ENDPOINTS.CROPS_AVAILABLE);
    if (!crops || crops.length === 0) {
      body.innerHTML = emptyRow(6, "No crops listed by farmers right now.");
      return;
    }
    body.innerHTML = crops
      .map(
        (c) => `
      <tr>
        <td>${c.cropName}</td>
        <td>${c.farmerName}</td>
        <td>${c.location}</td>
        <td>${fmtKg(c.quantityKg)}</td>
        <td>${fmtPerKg(c.expectedPricePerKg)}</td>
        <td>
          <button class="btn-sm secondary" data-view-crop="${c.cropId}">View</button>
          <button class="btn-sm" data-offer-crop='${JSON.stringify(c).replace(/'/g, "&#39;")}'>Make Offer</button>
        </td>
      </tr>`
      )
      .join("");

    body.querySelectorAll("[data-offer-crop]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const crop = JSON.parse(btn.getAttribute("data-offer-crop"));
        openOfferForm(crop);
      });
    });
  } catch (err) {
    console.error("Crops load failed:", err);
    body.innerHTML = emptyRow(6, "Couldn't load available crops.");
  }
}

function openOfferForm(crop) {
  const container = document.getElementById("offerFormContainer");
  container.className = "";
  container.innerHTML = `
    <form class="offer-form" id="offerForm">
      <div class="offer-crop-row">
        <div class="offer-crop-thumb"></div>
        <div>
          <div class="offer-crop-name">${crop.cropName}</div>
          <div class="offer-crop-meta">Farmer: ${crop.farmerName} · ${fmtKg(crop.quantityKg)}</div>
          <div class="offer-crop-meta">Expected: ${fmtPerKg(crop.expectedPricePerKg)}</div>
        </div>
      </div>
      <div class="offer-field">
        <label for="offerPrice">Your Offer Price (₹ / kg)</label>
        <input type="number" id="offerPrice" min="1" step="0.5" required>
      </div>
      <button type="submit" class="offer-submit">Submit Offer</button>
      <div class="offer-workflow">
        <span>Submit Offer</span><span class="arrow">→</span>
        <span>Offer Saved</span><span class="arrow">→</span>
        <span>Farmer Notified</span>
      </div>
      <div id="offerFormStatus" style="font-size:0.76rem;"></div>
    </form>
  `;

  document.getElementById("offerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const price = document.getElementById("offerPrice").value;
    const submitBtn = e.target.querySelector(".offer-submit");
    const statusEl = document.getElementById("offerFormStatus");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting…";
    try {
      await apiPost(ENDPOINTS.OFFERS, { cropId: crop.cropId, offerPricePerKg: Number(price) });
      statusEl.textContent = "Offer sent — farmer has been notified.";
      statusEl.style.color = "var(--green-700)";
      loadOffers(); // refresh My Offers panel
      loadOverview();
    } catch (err) {
      statusEl.textContent = `Couldn't submit offer (${err.message}).`;
      statusEl.style.color = "var(--red-700)";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Offer";
    }
  });
}

// ---- my offers -----------------------------------------------------------
// Expected: array of { cropName, offerPricePerKg, farmerName, date, status }
async function loadOffers() {
  const body = document.getElementById("offersTableBody");
  try {
    const offers = await apiGet(ENDPOINTS.OFFERS);
    if (!offers || offers.length === 0) {
      body.innerHTML = emptyRow(5, "No offers sent yet.");
      return;
    }
    body.innerHTML = offers
      .map(
        (o) => `
      <tr>
        <td>${o.cropName}</td>
        <td>${fmtPerKg(o.offerPricePerKg)}</td>
        <td>${o.farmerName}</td>
        <td>${o.date || "—"}</td>
        <td>${chip(o.status)}</td>
      </tr>`
      )
      .join("");
  } catch (err) {
    console.error("Offers load failed:", err);
    body.innerHTML = emptyRow(5, "Couldn't load offers.");
  }
}

// ---- accepted purchases ----------------------------------------------------
// Expected: array of { cropName, quantityKg, purchasePricePerKg, verificationStatus }
async function loadPurchases() {
  const body = document.getElementById("purchasesTableBody");
  try {
    const rows = await apiGet(ENDPOINTS.PURCHASES);
    if (!rows || rows.length === 0) {
      body.innerHTML = emptyRow(4, "No accepted purchases yet.");
      return;
    }
    body.innerHTML = rows
      .map(
        (p) => `
      <tr>
        <td>${p.cropName}</td>
        <td>${fmtKg(p.quantityKg)}</td>
        <td>${fmtPerKg(p.purchasePricePerKg)}</td>
        <td>${chip(p.verificationStatus)}</td>
      </tr>`
      )
      .join("");
  } catch (err) {
    console.error("Purchases load failed:", err);
    body.innerHTML = emptyRow(4, "Couldn't load purchases.");
  }
}

// ---- inventory --------------------------------------------------------------
// Expected: array of { cropName, totalPurchasedKg, availableStockKg, purchasePricePerKg }
async function loadInventory() {
  const body = document.getElementById("inventoryTableBody");
  try {
    const rows = await apiGet(ENDPOINTS.INVENTORY);
    if (!rows || rows.length === 0) {
      body.innerHTML = emptyRow(4, "Inventory is empty.");
      return;
    }
    body.innerHTML = rows
      .map(
        (i) => `
      <tr>
        <td>${i.cropName}</td>
        <td>${fmtKg(i.totalPurchasedKg)}</td>
        <td>${fmtKg(i.availableStockKg)}</td>
        <td>${fmtPerKg(i.purchasePricePerKg)}</td>
      </tr>`
      )
      .join("");
  } catch (err) {
    console.error("Inventory load failed:", err);
    body.innerHTML = emptyRow(4, "Couldn't load inventory.");
  }
}

// ---- sell to buyers -----------------------------------------------------
// Expected: array of { listingId, cropName, availableStockKg, sellingPricePerKg, hasListing }
async function loadSellListings() {
  const body = document.getElementById("sellTableBody");
  try {
    const rows = await apiGet(ENDPOINTS.SELL_LISTINGS);
    if (!rows || rows.length === 0) {
      body.innerHTML = emptyRow(4, "No inventory available to list yet.");
      return;
    }
    body.innerHTML = rows
      .map(
        (s) => `
      <tr>
        <td>${s.cropName}</td>
        <td>${fmtKg(s.availableStockKg)}</td>
        <td>${s.sellingPricePerKg ? fmtPerKg(s.sellingPricePerKg) : "—"}</td>
        <td>
          <button class="btn-sm" data-create-listing="${s.cropId || s.listingId || ""}">
            ${s.hasListing ? "Update Listing" : "Create Listing"}
          </button>
        </td>
      </tr>`
      )
      .join("");
  } catch (err) {
    console.error("Sell listings load failed:", err);
    body.innerHTML = emptyRow(4, "Couldn't load sell listings.");
  }
}

// ---- transactions -------------------------------------------------------
// Expected: array of { transactionId, type ("Purchase"|"Sale"), cropName, amount, status }
async function loadTransactions() {
  const body = document.getElementById("transactionsTableBody");
  try {
    const rows = await apiGet(ENDPOINTS.TRANSACTIONS);
    if (!rows || rows.length === 0) {
      body.innerHTML = emptyRow(5, "No transactions yet.");
      return;
    }
    body.innerHTML = rows
      .map(
        (t) => `
      <tr>
        <td>${t.transactionId}</td>
        <td>${t.type}</td>
        <td>${t.cropName}</td>
        <td>${fmtMoney(t.amount)}</td>
        <td>${chip(t.status)}</td>
      </tr>`
      )
      .join("");
  } catch (err) {
    console.error("Transactions load failed:", err);
    body.innerHTML = emptyRow(5, "Couldn't load transactions.");
  }
}

// ---- complaints -----------------------------------------------------------
// Expected: array of { complaintId, type, status }
async function loadComplaints() {
  const body = document.getElementById("complaintsTableBody");
  try {
    const rows = await apiGet(ENDPOINTS.COMPLAINTS);
    if (!rows || rows.length === 0) {
      body.innerHTML = emptyRow(3, "No complaints raised.");
      return;
    }
    body.innerHTML = rows
      .map(
        (c) => `
      <tr>
        <td>${c.complaintId}</td>
        <td>${c.type}</td>
        <td>${chip(c.status)}</td>
      </tr>`
      )
      .join("");
  } catch (err) {
    console.error("Complaints load failed:", err);
    body.innerHTML = emptyRow(3, "Couldn't load complaints.");
  }
}

// ---- quick actions / modals ------------------------------------------------

function openModal(kind) {
  const backdrop = document.getElementById("modalBackdrop");
  const body = document.getElementById("modalBody");

  if (kind === "pickup") {
    body.innerHTML = `
      <h3>Request Pickup</h3>
      <label for="pickupCrop">Crop</label>
      <input type="text" id="pickupCrop" placeholder="e.g. Tomato">
      <label for="pickupQty">Quantity (kg)</label>
      <input type="number" id="pickupQty" min="1">
      <label for="pickupAddr">Pickup Address</label>
      <textarea id="pickupAddr" rows="2"></textarea>
      <div class="modal-actions">
        <button id="modalCancel">Cancel</button>
        <button class="primary" id="modalSubmit">Request Pickup</button>
      </div>
    `;
    document.getElementById("modalSubmit").addEventListener("click", async () => {
      try {
        await apiPost(ENDPOINTS.LOGISTICS_REQUESTS, {
          cropName: document.getElementById("pickupCrop").value,
          quantityKg: Number(document.getElementById("pickupQty").value),
          pickupAddress: document.getElementById("pickupAddr").value,
        });
        closeModal();
        showStatus("Pickup requested.", "info");
      } catch (err) {
        showStatus(`Couldn't request pickup (${err.message}).`, "error");
      }
    });
  } else if (kind === "complaint") {
    body.innerHTML = `
      <h3>Raise Complaint</h3>
      <label for="complaintType">Type</label>
      <select id="complaintType">
        <option>Payment Delay</option>
        <option>Quality Issue</option>
        <option>Delivery Issue</option>
      </select>
      <label for="complaintDesc">Description</label>
      <textarea id="complaintDesc" rows="3"></textarea>
      <div class="modal-actions">
        <button id="modalCancel">Cancel</button>
        <button class="primary" id="modalSubmit">Submit Complaint</button>
      </div>
    `;
    document.getElementById("modalSubmit").addEventListener("click", async () => {
      try {
        await apiPost(ENDPOINTS.COMPLAINTS, {
          type: document.getElementById("complaintType").value,
          description: document.getElementById("complaintDesc").value,
        });
        closeModal();
        showStatus("Complaint submitted.", "info");
        loadComplaints();
      } catch (err) {
        showStatus(`Couldn't submit complaint (${err.message}).`, "error");
      }
    });
  }

  document.getElementById("modalCancel").addEventListener("click", closeModal);
  backdrop.classList.remove("hidden");
}
function closeModal() {
  document.getElementById("modalBackdrop").classList.add("hidden");
}

document.querySelectorAll(".quick-action").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.getAttribute("data-action");
    if (action === "pickup") openModal("pickup");
    else if (action === "complaint") openModal("complaint");
    else if (action === "inventory") document.getElementById("inventory").scrollIntoView({ behavior: "smooth" });
    else if (action === "sell") document.getElementById("sell-to-buyers").scrollIntoView({ behavior: "smooth" });
  });
});
document.getElementById("modalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "modalBackdrop") closeModal();
});

// ---- nav + mobile menu ------------------------------------------------------

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    document.getElementById("sidebar").classList.remove("open");
  });
});
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// ---- init ---------------------------------------------------------------

document.getElementById("todayDate").textContent = new Date().toLocaleDateString("en-IN", {
  weekday: "short", day: "2-digit", month: "short", year: "numeric",
});

function init() {
  clearStatus();
  loadOverview();
  loadCrops();
  loadOffers();
  loadPurchases();
  loadInventory();
  loadSellListings();
  loadTransactions();
  loadComplaints();
}

init();
