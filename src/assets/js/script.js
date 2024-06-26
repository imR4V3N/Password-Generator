const mdpBtn = document.getElementById("mdpButton");
var copyBtn = document.getElementById("copyButton");
const output = document.getElementById("mdp");

function generate(){
    const caractere = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm!@.#&";
    const length = 10;
    let code = "";
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * caractere.length);
        code += caractere.charAt(random);
    }
    output.value = code;
}

function copy() {
    output.select();
    document.execCommand("copy");
    alert("Password copied!");
}

mdpBtn.addEventListener('click', () => {
    generate();
});

copyBtn.addEventListener('click', () => {
    copy();
});
