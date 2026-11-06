$(function () {
  const $contenitore = $("#cards");
  const $nav = $("#nav-categorie");

  function slug(testo) {
    return testo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function icona(el) {
    if (el.icona) return $("<i>", { class: "bi bi-" + el.icona, "aria-hidden": "true" });
    if (el.emoji) return document.createTextNode(el.emoji);
    return null;
  }

  function creaCard(s, cat) {
    const colore = s.colore || cat.colore || "primary";
    const ic = icona(s) || icona(cat) || document.createTextNode((s.materia || "?").charAt(0));

    const $media = s.immagine
      ? $("<img>", { src: s.immagine, alt: "Anteprima di " + s.titolo, loading: "lazy" })
      : $("<div>", { class: "placeholder-img bg-" + colore, "aria-hidden": "true" }).append(ic);

    const wip = !!s.inLavorazione;

    const $badges = $("<div>", { class: "mb-2" })
      .append($("<span>", { class: "badge rounded-pill me-1 text-bg-" + colore }).text(s.materia))
      .append($("<span>", { class: "badge rounded-pill bg-body-secondary text-body border me-1" }).text(s.classe))
      .append(
        wip
          ? $("<span>", { class: "badge rounded-pill text-bg-warning" })
              .append($("<i>", { class: "bi bi-cone-striped me-1", "aria-hidden": "true" }))
              .append(document.createTextNode("In lavorazione"))
          : null
      );

    const $azione = wip
      ? $("<button>", {
          type: "button",
          class: "btn btn-secondary rounded-pill mt-auto disabled",
          "aria-disabled": "true",
          tabindex: "-1"
        }).text("Prossimamente")
      : $("<a>", {
          href: s.link,
          target: "_blank",
          rel: "noopener",
          class: "btn btn-" + colore + " rounded-pill mt-auto stretched-link"
        }).text("Vai alla dispensa ").append($("<i>", { class: "bi bi-box-arrow-up-right ms-1", "aria-hidden": "true" }));

    const $body = $("<div>", { class: "card-body d-flex flex-column" })
      .append($badges)
      .append($("<h3>", { class: "h5 card-title" }).text(s.titolo))
      .append($("<p>", { class: "card-text text-muted" }).text(s.descrizione))
      .append(
        s.autore
          ? $("<p>", { class: "small text-muted fst-italic mb-3" }).text("A cura del " + s.autore)
          : null
      )
      .append($azione);

    const $card = $("<div>", { class: "card card-sito h-100 border-" + colore + (wip ? " card-wip" : "") })
      .css("border-bottom-color", "var(--bs-" + colore + ")")
      .append($media)
      .append($body);

    return $("<div>", { class: "col" }).append($card);
  }

  const categorie = CATEGORIE.filter(function (c) { return c.siti && c.siti.length; });

  categorie.forEach(function (cat) {
    const id = slug(cat.nome);
    const colore = cat.colore || "primary";

    const $riga = $("<div>", { class: "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" });
    cat.siti.forEach(function (s) { $riga.append(creaCard(s, cat)); });

    function conIcona($el) {
      const ic = icona(cat);
      if (ic) $el.append(ic, " ");
      return $el.append(document.createTextNode(cat.nome));
    }

    const $intestazione = $("<div>", { class: "mb-3" })
      .append(conIcona($("<h2>", { class: "h3 fw-bold mb-1 text-" + colore + "-emphasis" })));
    if (cat.sottotitolo) {
      $intestazione.append($("<p>", { class: "text-body-secondary mb-0" }).text(cat.sottotitolo));
    }

    $("<section>", { id: id, class: "categoria mb-5" })
      .append($intestazione)
      .append($riga)
      .appendTo($contenitore);

    $nav.append(conIcona($("<a>", { href: "#" + id, class: "btn btn-sm rounded-pill btn-" + colore })));
  });

  if (categorie.length < 3) $nav.addClass("d-none");

  $("#anno").text(new Date().getFullYear());
});
