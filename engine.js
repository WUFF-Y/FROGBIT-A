const runBtn = document.getElementById("runBtn");
const editor = document.getElementById("editor");
const output = document.getElementById("output");

runBtn.addEventListener("click", runFrogCode);

function runFrogCode() {

    output.textContent = "";

    const ponds = {};

    const lines = editor.value.split("\n");

    for (let rawLine of lines) {

        let line = rawLine.trim();

        if (line === "") continue;

        // pond score = 5

        if (line.startsWith("pond ")) {

            const parts = line.split("=");

            if (parts.length >= 2) {

                const left = parts[0]
                    .replace("pond","")
                    .trim();

                const right = parts[1].trim();

                let value;

                if (!isNaN(right)) {
                    value = Number(right);
                }
                else if (right === "true") {
                    value = true;
                }
                else if (right === "false") {
                    value = false;
                }
                else {
                    value = right;
                }

                ponds[left] = value;
            }
        }

        // ribbit score

        else if (line.startsWith("ribbit ")) {

            const name = line
                .replace("ribbit","")
                .trim();

            if (name in ponds) {

                output.textContent +=
                    name +
                    " = " +
                    ponds[name] +
                    "\n";

            } else {

                output.textContent +=
                    "🐸 TOADSTOOL ERROR\n" +
                    "Pond '" +
                    name +
                    "' not found.\n\n";
            }
        }
    }

    if (output.textContent === "") {

        output.textContent =
            "🐸 Nothing happened.\nTry making a pond or ribbit.";
    }
}
