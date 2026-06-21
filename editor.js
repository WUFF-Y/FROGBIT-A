const dictionaryButtons =
document.querySelectorAll(".insert");

dictionaryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const code =
        button.dataset.code;

        editor.value += "\n" + code + "\n";

        editor.focus();

    });

});
