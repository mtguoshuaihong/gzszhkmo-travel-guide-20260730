const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".budget-panel");
const filters = document.querySelectorAll(".filter");
const dayCards = document.querySelectorAll(".day-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.budget;

    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.id === target);
    });
  });
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const city = filter.dataset.cityFilter;

    filters.forEach((item) => {
      item.classList.toggle("is-active", item === filter);
    });

    dayCards.forEach((card) => {
      const shouldShow = city === "all" || card.dataset.city === city;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
