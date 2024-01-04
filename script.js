const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
        await delay(150);
        getInputValue();
        removeInput();
        await delay(150);
        new_line();
    }
});

app.addEventListener("click", function (event) {
    const input = document.querySelector("input");
    input.focus();
});

const open_terminal = async () => {
    createText(
        "Microsoft Windows [Version 10.0.22621.2861] <br/> (c) Microsoft Corporation. All rights reserved."
    );
    createBlank();
    await delay(1000);
    createText("--- Welcome to my portfolio website :) ---");
    createBlank();
    createText("If you want to learn about me, use the codes below.");
    createBlank();
    await delay(750);
    createCode("<b>-> all</b>", "See all commands.");
    createBlank();
    createCode("<b>-> about me</b>", "Who am i and what do i do.");
    createBlank();

    await delay(500);
    new_line();
};
//yeni satır
const new_line = () => {
    const p = document.createElement("p");
    const div = document.createElement("div");
    const span = document.createElement("span");
    p.setAttribute("class", "path");
    p.textContent = "";
    span.textContent = " C:\\Users\\user>";
    p.appendChild(span);
    app.append(p);
    div.setAttribute("class", "type");
    const input = document.createElement("input");
    input.style.width = "100%";
    div.appendChild(span);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();
};

const removeInput = () => {
    const div = document.querySelector(".type");
    app.removeChild(div);
};

const getInputValue = async () => {
    const value = document.querySelector("input").value.toLowerCase();
    

    if (value === "all") {
        trueValue(value);
        createBlank();
        createCode("<b>-> all</b>", "See all commands");
        createBlank();
        createCode("<b>-> about me</b>", "Who am i and what do i do");
        createBlank();
        createCode("<b>-> social</b>", "My social media links");
        createBlank();
        createCode("<b>-> projects</b>", "My projects");
        createBlank();
        createCode("<b>-> contact</b>", "Send mail to me");
    } else if (value === "projects") {
        trueValue(value);
        createBlank();
        createText(
            '<a style="color:#fff; text-decoration:underline;" href="https://github.com/mustafazorlu" target="_blank">github.com/mustafazorlu</a>'
        );
    } else if (value === "about me") {
        trueValue(value);
        createBlank();
        createText(
            "Hi I'm Mustafa ৻(  •̀ ᗜ •́  ৻) I graduated from Computer Science. I'm 23 years old. I live in Izmir. I'm improving myself front-end and back-end technologies ( ◡̀_◡́)ᕤ My hobbies are make origami and sketching. I like reading religious books. ⸜(｡˃ ᵕ ˂ )⸝♡"
        );
    } else if (value === "social") {
        trueValue(value);
        createBlank();
        createText(
            "<a style='color:#fff; text-decoration:underline;' href='https://www.instagram.com/rikkagami_ss/' target='_blank'>instagram.com/rikkagami_ss</a>"
        );
        createText(
            "<a style='color:#fff; text-decoration:underline;' href='https://www.linkedin.com/in/mustafa-zorlu/' target='_blank'>linkedin.com/in/mustafa-zorlu/</a>"
        );
    } else if (value === "contact") {
        trueValue(value);
        createBlank();
        createText(
            "<a style='color:#fff; text-decoration:underline;' href='mailto:mzorlu3579@gmail.com' target='_blank'>mzorlu3579@gmail.com</a>"
        );
    } else if (value === "love") {
        createText("H ❤ M");
        createBlank();
    } else {
        falseValue(value);
        createText(
            "is not recognized as an internal or external command, <br/a> operable program or batch file."
        );
    }
    createBlank();
};

const trueValue = (value) => {
    const div = document.createElement("section");
    div.setAttribute("class", "type2");
    const newline = document.createElement("p");
    newline.setAttribute("class", "success");
    newline.textContent = `|${value}|`;
    div.appendChild(newline);
    app.appendChild(div);
};

const falseValue = (value) => {
    const div = document.createElement("section");
    div.setAttribute("class", "type2");
    const newline = document.createElement("span");
    newline.setAttribute("class", "error");
    newline.textContent = `'${value}' `;
    div.appendChild(newline);
    app.appendChild(div);
};

//kod metinleri
const createCode = (code, text) => {
    const p = document.createElement("p");
    p.setAttribute("class", "code");
    p.innerHTML = `${code} <br/> <span class="text">${text}</span>`;
    app.appendChild(p);
};
//yazılar
const createText = (text, classname) => {
    const p = document.createElement("p");
    p.innerHTML = text;
    app.appendChild(p);
};

const createBlank = () => {
    const br = document.createElement("br");
    app.appendChild(br);
};

open_terminal();
