$(function () {
  const $html = $("html");
  const $btn = $("#tema-toggle");

  function aggiorna() {
    const scuro = $html.attr("data-bs-theme") === "dark";
    $btn.empty().append($("<i>", { class: "bi " + (scuro ? "bi-sun-fill" : "bi-moon-stars-fill"), "aria-hidden": "true" }));
  }

  $btn.on("click", function () {
    const nuovo = $html.attr("data-bs-theme") === "dark" ? "light" : "dark";
    $html.attr("data-bs-theme", nuovo);
    localStorage.setItem("tema", nuovo);
    aggiorna();
  });

  aggiorna();
});
