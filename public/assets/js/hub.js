(function () {
  "use strict";

  const page = document.body.dataset.page;
  if (page !== "hub") {
    return;
  }

  const data = window.APESContactData;
  const ui = window.APESContactUI;
  if (!data || !ui) {
    return;
  }

  const pageByOrg = {
    "apes-cic": "apes-cic.html",
    "shelter-rescue": "shelter-rescue.html",
    "pet-care-clinic": "pet-care-clinic.html",
    "pet-shop": "pet-shop.html",
  };

  const finderOrg = document.getElementById("finderOrganisation");
  const finderRole = document.getElementById("finderRole");
  const finderEnquiry = document.getElementById("finderEnquiry");
  const finderResult = document.getElementById("finderResult");
  const finderTitle = document.getElementById("finderRouteTitle");
  const finderSummary = document.getElementById("finderRouteSummary");
  const finderDepartment = document.getElementById("finderRouteDepartment");
  const finderFallback = document.getElementById("finderRouteFallback");
  const finderLink = document.getElementById("finderRouteLink");
  const finderGuidance = document.getElementById("finderGuidance");
  const finderPurpose = document.getElementById("finderRoutePurpose");
  const finderSubmitHint = document.getElementById("finderRouteSubmitHint");

  const organisationCards = document.getElementById("organisationCards");
  const routeGrid = document.getElementById("routeDirectory");
  const noResults = document.getElementById("noRouteResults");
  const routeCountStatus = document.getElementById("routeCountStatus");
  const searchInput = document.getElementById("routeSearch");
  const resetFilters = document.getElementById("resetFilters");

  const orgFilterButtons = Array.from(
    document.querySelectorAll("[data-org-filter]")
  );
  const typeFilterButtons = Array.from(
    document.querySelectorAll("[data-type-filter]")
  );

  const state = {
    orgFilter: "all",
    typeFilter: "all",
    search: "",
  };

  const sortedRoutes = ui.sortByRoleOrder(data.ROUTE_CATALOG);

  function resetFinderSummary(message) {
    finderTitle.textContent = "No route selected yet";
    finderSummary.textContent =
      "The route summary will appear here after you complete the three-step selection.";
    finderDepartment.textContent = "Destination team details will appear here.";
    finderPurpose.textContent =
      "Use the selector above to confirm the correct APES route before opening a form.";
    finderSubmitHint.textContent =
      "Share only necessary details, avoid unnecessary sensitive uploads, and call 999 for immediate danger.";
    finderFallback.classList.add("is-hidden");
    finderFallback.textContent = "";
    finderGuidance.textContent =
      message ||
      "Select an organisation, then a role or contact type, then an enquiry route to enable the contact form button.";
    ui.setActionLinkState(finderLink, false);
  }

  function fillFinderOrganisations() {
    Object.keys(data.ORG_DETAILS).forEach(function (slug) {
      const org = data.ORG_DETAILS[slug];
      const option = document.createElement("option");
      option.value = slug;
      option.textContent = org.name;
      finderOrg.appendChild(option);
    });
  }

  function fillFinderRoles(organisationSlug) {
    finderRole.innerHTML = "";
    finderEnquiry.innerHTML = "";
    finderEnquiry.disabled = true;

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select role";
    finderRole.appendChild(placeholder);

    if (!organisationSlug) {
      finderRole.disabled = true;
      return;
    }

    const routes = data.getRoutesForOrganisation(organisationSlug);
    const roleSet = {};
    routes.forEach(function (route) {
      roleSet[route.roleType] = true;
    });

    data.ROLE_ORDER.forEach(function (roleType) {
      if (!roleSet[roleType]) {
        return;
      }
      const option = document.createElement("option");
      option.value = roleType;
      option.textContent = ui.getRoleLabel(roleType);
      finderRole.appendChild(option);
    });

    finderRole.disabled = false;
  }

  function fillFinderEnquiries(organisationSlug, roleType) {
    finderEnquiry.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select enquiry type";
    finderEnquiry.appendChild(placeholder);

    if (!organisationSlug || !roleType) {
      finderEnquiry.disabled = true;
      return;
    }

    const routes = sortedRoutes.filter(function (route) {
      return (
        route.organisationSlug === organisationSlug && route.roleType === roleType
      );
    });

    routes.forEach(function (route) {
      const option = document.createElement("option");
      option.value = route.id;
      option.textContent = route.label + " - " + route.enquiryType;
      finderEnquiry.appendChild(option);
    });

    finderEnquiry.disabled = routes.length === 0;
  }

  function showFinderRoute(routeId) {
    const route = data.ROUTE_CATALOG.find(function (item) {
      return item.id === routeId;
    });

    if (!route) {
      resetFinderSummary(
        "Complete all three steps to enable the contact form button."
      );
      return;
    }

    finderTitle.textContent = route.label;
    finderSummary.textContent = route.description;
    finderDepartment.textContent =
      route.organisation + " | " + route.department + " | " + route.enquiryType;
    finderPurpose.textContent =
      "This route is intended for " +
      route.enquiryType.toLowerCase() +
      " and will be handled by " +
      route.department +
      ".";
    finderSubmitHint.textContent =
      "Submissions go to the named APES team. Include only relevant details and use the privacy policy before sharing personal information.";
    finderGuidance.textContent =
      "Route ready. Review the destination and summary below before opening the contact form.";
    ui.setActionLinkState(finderLink, true, route.url);

    if (route.isFallback) {
      finderFallback.textContent =
        "Internally routed: this role currently uses the closest division contact form.";
      finderFallback.classList.remove("is-hidden");
    } else {
      finderFallback.classList.add("is-hidden");
      finderFallback.textContent = "";
    }

  }

  function setFilterButtonState(buttons, activeValue, attributeName) {
    buttons.forEach(function (button) {
      const isActive = button.getAttribute(attributeName) === activeValue;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function renderOrganisationCards() {
    Object.keys(data.ORG_DETAILS).forEach(function (slug) {
      const org = data.ORG_DETAILS[slug];
      const card = document.createElement("article");
      card.className = "org-card";

      const media = document.createElement("div");
      media.className = "org-card-media";

      const logo = document.createElement("img");
      logo.className = "org-logo";
      ui.applyLogoBySlug(logo, slug);
      media.appendChild(logo);

      const body = document.createElement("div");
      body.className = "org-card-body";

      const title = document.createElement("h3");
      title.textContent = org.name;

      const legal = document.createElement("p");
      legal.className = "org-legal";
      legal.textContent = org.legalName;

      const text = document.createElement("p");
      text.textContent = org.summary;

      const actions = document.createElement("div");
      actions.className = "org-card-actions";

      const pageLink = document.createElement("a");
      pageLink.className = "btn btn-primary";
      pageLink.href = pageByOrg[slug];
      pageLink.textContent = "Open division page";

      const siteLink = document.createElement("a");
      siteLink.className = "btn btn-subtle";
      siteLink.href = org.website;
      siteLink.target = "_blank";
      siteLink.rel = "noopener noreferrer";
      siteLink.textContent = "Visit website";

      actions.appendChild(pageLink);
      actions.appendChild(siteLink);

      body.appendChild(title);
      body.appendChild(legal);
      body.appendChild(text);
      body.appendChild(actions);

      card.appendChild(media);
      card.appendChild(body);
      organisationCards.appendChild(card);
    });
  }

  function renderRouteCards() {
    const fragment = document.createDocumentFragment();
    sortedRoutes.forEach(function (route) {
      fragment.appendChild(ui.createRouteCard(route));
    });
    routeGrid.appendChild(fragment);
  }

  function applyFilters() {
    const cards = Array.from(routeGrid.children);
    const activeSearch = ui.normaliseText(state.search);
    let visibleCount = 0;

    cards.forEach(function (card) {
      const orgMatch =
        state.orgFilter === "all" || card.dataset.org === state.orgFilter;
      const typeValues = card.dataset.types ? card.dataset.types.split(" ") : [];
      const typeMatch =
        state.typeFilter === "all" || typeValues.indexOf(state.typeFilter) !== -1;
      const searchMatch =
        !activeSearch || card.dataset.search.indexOf(activeSearch) !== -1;

      const visible = orgMatch && typeMatch && searchMatch;
      card.classList.toggle("is-hidden", !visible);
      if (visible) {
        visibleCount += 1;
      }
    });

    routeCountStatus.textContent =
      visibleCount.toString() +
      " route option" +
      (visibleCount === 1 ? "" : "s") +
      " shown across APES CIC and all divisions.";
    noResults.classList.toggle("is-hidden", visibleCount > 0);
  }

  function attachEvents() {
    finderOrg.addEventListener("change", function () {
      fillFinderRoles(finderOrg.value);
      resetFinderSummary(
        finderOrg.value
          ? "Choose a role or contact type, then an enquiry route, to continue."
          : undefined
      );
    });

    finderRole.addEventListener("change", function () {
      fillFinderEnquiries(finderOrg.value, finderRole.value);
      resetFinderSummary(
        finderRole.value
          ? "Choose an enquiry route to unlock the contact form button."
          : "Choose a role or contact type, then an enquiry route, to continue."
      );
    });

    finderEnquiry.addEventListener("change", function () {
      showFinderRoute(finderEnquiry.value);
    });

    orgFilterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        state.orgFilter = button.getAttribute("data-org-filter");
        setFilterButtonState(orgFilterButtons, state.orgFilter, "data-org-filter");
        applyFilters();
      });
    });

    typeFilterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        state.typeFilter = button.getAttribute("data-type-filter");
        setFilterButtonState(
          typeFilterButtons,
          state.typeFilter,
          "data-type-filter"
        );
        applyFilters();
      });
    });

    searchInput.addEventListener("input", function () {
      state.search = searchInput.value;
      applyFilters();
    });

    resetFilters.addEventListener("click", function () {
      state.orgFilter = "all";
      state.typeFilter = "all";
      state.search = "";
      searchInput.value = "";
      setFilterButtonState(orgFilterButtons, "all", "data-org-filter");
      setFilterButtonState(typeFilterButtons, "all", "data-type-filter");
      applyFilters();
    });
  }

  function init() {
    fillFinderOrganisations();
    fillFinderRoles("");
    fillFinderEnquiries("", "");
    renderOrganisationCards();
    renderRouteCards();
    attachEvents();
    resetFinderSummary();
    applyFilters();
  }

  init();
})();
