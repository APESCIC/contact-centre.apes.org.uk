(function () {
  "use strict";

  document.body.classList.add("is-interactive");

  function initialisePopupLinks() {
    const popupLinks = Array.from(document.querySelectorAll("[data-popup-url]"));
    if (!popupLinks.length) {
      return;
    }

    popupLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const url = link.getAttribute("data-popup-url") || link.href;
        const popupName = link.getAttribute("data-popup-name") || "apesDonationPopup";
        const width = Number.parseInt(link.getAttribute("data-popup-width"), 10) || 720;
        const height = Number.parseInt(link.getAttribute("data-popup-height"), 10) || 760;
        const statusId = link.getAttribute("data-popup-status");
        const status = statusId ? document.getElementById(statusId) : null;
        const left = Math.max(0, Math.round((window.screen.width - width) / 2));
        const top = Math.max(0, Math.round((window.screen.height - height) / 2));
        const features = [
          "popup=yes",
          "noopener=yes",
          "noreferrer=yes",
          "resizable=yes",
          "scrollbars=yes",
          "width=" + width,
          "height=" + height,
          "left=" + left,
          "top=" + top,
        ].join(",");

        event.preventDefault();
        const popup = window.open(url, popupName, features);

        if (popup) {
          popup.opener = null;
          popup.focus();
          if (status) {
            status.classList.add("is-hidden");
            status.textContent = "";
          }
          return;
        }

        if (status) {
          status.classList.remove("is-hidden");
          status.textContent =
            "Your browser blocked the donation popup. Use the direct secure donation link below.";
        }
      });
    });
  }

  initialisePopupLinks();

  const data = window.APESContactData;
  if (!data) {
    return;
  }

  function toText(value) {
    return (value || "").toString();
  }

  function normaliseText(value) {
    return toText(value)
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getRoleLabel(roleType) {
    return data.ROLE_LABELS[roleType] || roleType;
  }

  function getRouteSearchBlob(route) {
    return normaliseText(
      [
        route.label,
        route.description,
        route.organisation,
        route.division,
        route.department,
        route.roleType,
        route.enquiryType,
        route.categories.join(" "),
        route.keywords.join(" "),
      ].join(" ")
    );
  }

  function makeTag(label, tone) {
    const item = document.createElement("span");
    item.className = "tag" + (tone ? " " + tone : "");
    item.textContent = label;
    return item;
  }

  function createRouteCard(route) {
    const card = document.createElement("article");
    card.className = "route-card";
    card.setAttribute("role", "listitem");
    card.dataset.id = route.id;
    card.dataset.org = route.organisationSlug;
    card.dataset.role = route.roleType;
    card.dataset.types = route.categories.join(" ");
    card.dataset.search = getRouteSearchBlob(route);

    const body = document.createElement("div");
    body.className = "route-card-body";

    const header = document.createElement("div");
    header.className = "route-card-header";

    const orgPill = makeTag(route.organisation, "org-tag");
    header.appendChild(orgPill);

    const rolePill = makeTag(getRoleLabel(route.roleType), "role-tag");
    header.appendChild(rolePill);

    const title = document.createElement("h3");
    title.className = "route-title";
    title.textContent = route.label;

    const meta = document.createElement("p");
    meta.className = "route-meta";
    meta.textContent = route.description;

    const detail = document.createElement("p");
    detail.className = "route-detail";
    detail.textContent = route.department + " | " + route.enquiryType;

    const tagRow = document.createElement("div");
    tagRow.className = "tag-row";
    route.categories.forEach(function (typeKey) {
      tagRow.appendChild(makeTag(getRoleLabel(typeKey)));
    });

    body.appendChild(header);
    body.appendChild(title);
    body.appendChild(meta);
    body.appendChild(detail);
    body.appendChild(tagRow);

    if (route.isFallback) {
      const fallback = document.createElement("p");
      fallback.className = "fallback-note";
      fallback.textContent =
        "Internally routed: this role currently uses the closest division contact form.";
      body.appendChild(fallback);
    }

    const actionRow = document.createElement("div");
    actionRow.className = "route-actions";

    const action = document.createElement("a");
    action.className = "btn btn-primary";
    action.href = route.url;
    action.target = "_blank";
    action.rel = "noopener noreferrer";
    action.setAttribute(
      "aria-label",
      "Open contact form for " + route.label + " (" + route.department + ")"
    );
    action.textContent = "Open contact form";
    actionRow.appendChild(action);

    card.appendChild(body);
    card.appendChild(actionRow);
    return card;
  }

  function applyLogoBySlug(img, organisationSlug) {
    if (!img || !organisationSlug) {
      return;
    }

    const org = data.ORG_DETAILS[organisationSlug];
    if (!org) {
      return;
    }

    const candidates = Array.isArray(org.logoCandidates)
      ? org.logoCandidates.slice()
      : [];
    let index = 0;

    function useNext() {
      if (index >= candidates.length) {
        img.classList.add("logo-missing");
        img.alt = org.name + " logo not available";
        return;
      }
      img.src = candidates[index];
      img.alt = org.name + " logo";
      index += 1;
    }

    img.addEventListener("error", useNext);
    useNext();
  }

  function sortByRoleOrder(routes) {
    const order = data.ROLE_ORDER;
    return routes.slice().sort(function (a, b) {
      const aIndex = order.indexOf(a.roleType);
      const bIndex = order.indexOf(b.roleType);
      const safeA = aIndex === -1 ? order.length + 1 : aIndex;
      const safeB = bIndex === -1 ? order.length + 1 : bIndex;
      if (safeA !== safeB) {
        return safeA - safeB;
      }
      return a.label.localeCompare(b.label);
    });
  }

  function setActionLinkState(link, isEnabled, href) {
    if (!link) {
      return;
    }

    if (isEnabled && href) {
      link.href = href;
      link.classList.remove("is-disabled");
      link.setAttribute("aria-disabled", "false");
      return;
    }

    link.removeAttribute("href");
    link.classList.add("is-disabled");
    link.setAttribute("aria-disabled", "true");
  }

  window.APESContactUI = Object.freeze({
    normaliseText: normaliseText,
    getRoleLabel: getRoleLabel,
    getRouteSearchBlob: getRouteSearchBlob,
    createRouteCard: createRouteCard,
    applyLogoBySlug: applyLogoBySlug,
    sortByRoleOrder: sortByRoleOrder,
    setActionLinkState: setActionLinkState,
    initialisePopupLinks: initialisePopupLinks,
  });
})();
