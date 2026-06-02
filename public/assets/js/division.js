(function () {
  "use strict";

  if (document.body.dataset.page !== "division") {
    return;
  }

  const data = window.APESContactData;
  const ui = window.APESContactUI;
  if (!data || !ui) {
    return;
  }

  const organisationSlug = document.body.dataset.org;
  const organisation = data.ORG_DETAILS[organisationSlug];
  if (!organisation) {
    return;
  }

  const divisionLogo = document.getElementById("divisionLogo");
  const divisionName = document.getElementById("divisionName");
  const divisionLegalName = document.getElementById("divisionLegalName");
  const divisionSummary = document.getElementById("divisionSummary");
  const divisionWebsiteLink = document.getElementById("divisionWebsiteLink");
  const primaryRouteLink = document.getElementById("primaryRouteLink");
  const governanceNote = document.getElementById("divisionGovernanceNote");

  const quickPicker = document.getElementById("divisionRoutePicker");
  const quickOpen = document.getElementById("divisionRouteOpen");
  const quickDescription = document.getElementById("divisionRouteDescription");
  const quickFallback = document.getElementById("divisionRouteFallback");

  const roleCards = document.getElementById("divisionRoleCards");
  const teamCards = document.getElementById("divisionTeamCards");
  const roleCount = document.getElementById("divisionRoleCount");
  const teamCount = document.getElementById("divisionTeamCount");

  const routes = ui.sortByRoleOrder(data.getRoutesForOrganisation(organisationSlug));

  function updateHero() {
    divisionName.textContent = organisation.name;
    divisionLegalName.textContent = organisation.legalName;
    divisionSummary.textContent = organisation.summary;
    divisionWebsiteLink.href = organisation.website;

    ui.applyLogoBySlug(divisionLogo, organisationSlug);

    const primaryRoute = data.getDivisionPrimaryRoute(organisationSlug);
    if (primaryRoute) {
      primaryRouteLink.href = primaryRoute.url;
    } else {
      primaryRouteLink.removeAttribute("href");
    }

    if (organisationSlug === "apes-cic") {
      governanceNote.textContent =
        "APES CIC provides central governance and oversight for all APES divisions and cross-service teams.";
    } else {
      governanceNote.textContent =
        "This division is governed by APES CIC. Management, reception and team leader requests are available directly or routed internally where needed.";
    }
  }

  function dedupeByRoleType(roleRoutes) {
    const byType = {};
    roleRoutes.forEach(function (route) {
      if (!byType[route.roleType]) {
        byType[route.roleType] = route;
      }
    });
    return Object.keys(byType).map(function (roleType) {
      return byType[roleType];
    });
  }

  function renderRoleCards() {
    const roleRoutes = routes.filter(function (route) {
      return data.DIVISION_ROLE_TYPES.indexOf(route.roleType) !== -1;
    });

    const uniqueRoles = dedupeByRoleType(roleRoutes);
    uniqueRoles.forEach(function (route) {
      roleCards.appendChild(ui.createRouteCard(route));
    });

    roleCount.textContent = uniqueRoles.length.toString();
  }

  function renderTeamCards() {
    const nonRoleRoutes = routes.filter(function (route) {
      return data.DIVISION_ROLE_TYPES.indexOf(route.roleType) === -1;
    });

    nonRoleRoutes.forEach(function (route) {
      teamCards.appendChild(ui.createRouteCard(route));
    });

    teamCount.textContent = nonRoleRoutes.length.toString();
  }

  function renderQuickPicker() {
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select enquiry route";
    quickPicker.appendChild(placeholder);

    routes.forEach(function (route) {
      const option = document.createElement("option");
      option.value = route.id;
      option.textContent = route.label + " - " + route.enquiryType;
      quickPicker.appendChild(option);
    });
  }

  function updateQuickRoute(routeId) {
    if (!routeId) {
      ui.setActionLinkState(quickOpen, false);
      quickDescription.textContent =
        "Choose a route to preview the contact path for this division.";
      quickFallback.classList.add("is-hidden");
      quickFallback.textContent = "";
      return;
    }

    const route = routes.find(function (item) {
      return item.id === routeId;
    });
    if (!route) {
      return;
    }

    ui.setActionLinkState(quickOpen, true, route.url);
    quickDescription.textContent =
      route.description +
      " This route is handled by " +
      route.department +
      ".";
    if (route.isFallback) {
      quickFallback.textContent =
        "Internally routed: this enquiry currently uses the closest division-level form.";
      quickFallback.classList.remove("is-hidden");
    } else {
      quickFallback.classList.add("is-hidden");
      quickFallback.textContent = "";
    }
  }

  function bindEvents() {
    quickPicker.addEventListener("change", function () {
      updateQuickRoute(quickPicker.value);
    });
  }

  function init() {
    updateHero();
    renderRoleCards();
    renderTeamCards();
    renderQuickPicker();
    bindEvents();
    updateQuickRoute("");
  }

  init();
})();
