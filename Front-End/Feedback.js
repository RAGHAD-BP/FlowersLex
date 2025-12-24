document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedback-form");
  const statusEl = document.getElementById("feedback-status");

  // Helper to show status messages
  function showStatus(type, message) {
    if (!statusEl) return;
    statusEl.className = "status-message " + (type || "");
    statusEl.textContent = message;
  }

  // ===== Feedback form submit handler =====
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      showStatus("info", "Submitting your feedback...");

      // Read values from form
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const rating = document.getElementById("rating").value;
      const message = document.getElementById("message").value.trim();
      const category = document.getElementById("category").value.trim();

      // Basic validation
      if (!name || !email || !rating || !message) {
        showStatus(
          "error",
          "Please fill in name, email, rating, and message."
        );
        return;
      }

      // Data object to send
      const feedbackData = {
        name,
        email,
        rating,
        message,
        category,
      };
      
const SERVER_URL = "https://flowerslex.onrender.com"; 

      try {
        const response = await fetch(`${SERVER_URL}/api/feedback`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          const msg = data.message || "Failed to submit feedback.";
          throw new Error(msg);
        }

        // Success
        showStatus("success", data.message || "Feedback submitted successfully.");
        feedbackForm.reset();
      } catch (err) {
        console.error("Error sending feedback:", err);
        showStatus("error", "Error: " + err.message);
      }
    });
  }

  console.log("Feedback front-end loaded");
});
