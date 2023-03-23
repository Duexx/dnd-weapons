function toggleTooltip(trigger) {
  const tooltip = trigger.nextElementSibling;
  const tooltipContent = trigger.getAttribute("data-tooltip");
  tooltip.textContent = tooltipContent;
  if (tooltip.style.display === "block") {
    tooltip.style.display = "none";
  } else {
    tooltip.style.display = "block";
  }
}
