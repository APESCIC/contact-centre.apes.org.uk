(function () {
  "use strict";

  if (document.body.dataset.page !== "changelog") {
    return;
  }

  const searchInput = document.getElementById("releaseSearch");
  const expandAllButton = document.getElementById("expandAllReleases");
  const collapseAllButton = document.getElementById("collapseAllReleases");
  const filterStatus = document.getElementById("releaseFilterStatus");
  const emptyState = document.getElementById("releaseEmptyState");
  const filterButtons = Array.from(
    document.querySelectorAll("[data-release-filter]")
  );
  const releaseCards = Array.from(document.querySelectorAll(".release-card"));

  const state = {
    filter: "all",
    search: "",
  };

  function normaliseText(value) {
    return (value || "")
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function setFilterButtonState(activeValue) {
    filterButtons.forEach(function (button) {
      const isActive = button.getAttribute("data-release-filter") === activeValue;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function applyFilters() {
    const activeSearch = normaliseText(state.search);
    let visibleCount = 0;

    releaseCards.forEach(function (card) {
      const tags = (card.dataset.releaseTags || "").split(" ");
      const matchesFilter =
        state.filter === "all" || tags.indexOf(state.filter) !== -1;
      const matchesSearch =
        !activeSearch || normaliseText(card.textContent).indexOf(activeSearch) !== -1;
      const visible = matchesFilter && matchesSearch;

      card.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });

    filterStatus.textContent =
      "Showing " +
      visibleCount.toString() +
      " release record" +
      (visibleCount === 1 ? "" : "s") +
      ".";
    emptyState.classList.toggle("is-hidden", visibleCount > 0);
  }

  searchInput.addEventListener("input", function () {
    state.search = searchInput.value;
    applyFilters();
  });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      state.filter = button.getAttribute("data-release-filter");
      setFilterButtonState(state.filter);
      applyFilters();
    });
  });

  expandAllButton.addEventListener("click", function () {
    releaseCards.forEach(function (card) {
      card.open = true;
    });
  });

  collapseAllButton.addEventListener("click", function () {
    releaseCards.forEach(function (card) {
      card.open = false;
    });
  });

  setFilterButtonState(state.filter);
  applyFilters();
})();
