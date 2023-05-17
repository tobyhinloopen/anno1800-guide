document.body.addEventListener("input", (event) => {
  const input = event.target;
  if (input instanceof HTMLInputElement && input.id && input.type == "checkbox") {
    if (input.checked) {
      localStorage.setItem(input.id, "");
    } else {
      localStorage.removeItem(input.id);
    }
  }
});

{
  const len = localStorage.length;
  for (let i = 0; i < len; i++) {
    const checkbox = document.querySelector(`input[type=checkbox][id="${localStorage.key(i)}"]`);
    if (checkbox) checkbox.checked = true;
  }
}
