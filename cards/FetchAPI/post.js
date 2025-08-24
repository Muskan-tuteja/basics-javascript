const form = document.getElementById("postForm");
const resultBox = document.getElementById("result");
const statusEl = document.getElementById("status");
const jsonEl = document.getElementById("json");
const loadingEl = document.getElementById("loading");
const submitBtn = document.getElementById("submitBtn");

// Helper: UI state
function setLoading(isLoading) {
  loadingEl.hidden = !isLoading;
  submitBtn.disabled = isLoading;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  setLoading(true);
  resultBox.hidden = true;

  const payload = {
    title: document.getElementById("title").value.trim(),
    body: document.getElementById("body").value.trim(),
    userId: Number(document.getElementById("userId").value)
  };

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        // Agar API secure ho to yaha token add karna:
        // "Authorization": "Bearer YOUR_TOKEN"
      },
      body: JSON.stringify(payload)
    });

    // Status code dikhाओ
    statusEl.textContent = `${res.status} ${res.statusText}`;

    // 200-299 success
    if (res.ok) {
      const data = await res.json(); // JSON parsing
      jsonEl.textContent = JSON.stringify(data, null, 2);
    } else {
      // Non-2xx ke liye error body read karne ki koshिश
      let errText = "";
      try { errText = await res.text(); } catch {}
      jsonEl.textContent = errText || "Request failed.";
    }

    resultBox.hidden = false;
  } catch (err) {
    statusEl.textContent = "Network/Error";
    jsonEl.textContent = String(err);
    resultBox.hidden = false;
  } finally {
    setLoading(false);
  }
});
