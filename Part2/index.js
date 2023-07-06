let idInput = document.querySelector(`#idInput`);
let colorInput = document.querySelector(`#colorInput`);

function setCard()
{
    let card = document.getElementById(idInput.value)
    card.color.color = colorInput.value;
}