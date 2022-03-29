class Signature {
    constructor(name, title, company, landline, mobile, email, value) {
        this.signature = document.querySelector("#signature");
        this.select = document.querySelector("#selectSignature");
        this.name = name;
        this.title = title;
        this.company = company;
        this.landline = landline;
        this.mobile = mobile;
        this.email = email;
        this.value = value;
    }
    addSignature() {
        const option = document.createElement("option");
        option.setAttribute("value", this.value);
        option.setAttribute("id", this.value);
        this.select.appendChild(option);
        option.innerText = `${this.name} from ${this.company}`;
    }
    removeSignature() {
        const option = document.querySelector(`#${this.value}`);
        option.remove();
    }
    createSignature() {
        const {name, title, company, landline, mobile, email} = this;
        const div = document.createElement("div");
        this.signature.appendChild(div);
        div.innerHTML = `   <p>${name}</p>
                            <p>${title}</p>
                            <p>${company}</p>
                            <p>Ph. ${landline}</p>
                            <p>Mob. ${mobile}</p>
                            <p>Em. ${email}</p>`;
    }
    getSignature() {
        const form = this.signature.querySelector("form");
        this.select.addEventListener("change", (event) => {
            if (event.target.value === this.value) {
                this.createSignature();
                form.remove();
            }
        }, false);
    }
}

// Fictional details
const person1 = new Signature("Amy O'Brien", "General Manager", "Link Market Services", "+61 (0)2 8005 1222", "+61 (0)451 333 881", "amyobrien@lms.com", "option1");
const person2 = new Signature("Timothy McCloud", "Client Relations Manager", "Orient Capital", "+61 (0)3 8810 5914", "+61 (0)412 124 999", "timmccloud@lms.com", "option2");
