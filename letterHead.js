class Company {
    constructor(imageLink, companyName, ABN, value) {
        this.letterHead = document.querySelector("#letterHead");
        this.select = document.querySelector("#selectLetterHead");
        this.imageLink = imageLink;
        this.companyName = companyName;
        this.ABN = ABN;
        this.value = value;
    }
    addCompany() {
        const option = document.createElement("option");
        option.setAttribute("value", this.value);
        option.setAttribute("id", this.value);
        this.select.appendChild(option);
        option.innerText = this.companyName;
    }
    removeCompany() {
        const option = document.querySelector(`#${this.value}`);
        option.remove();
    }
    getLogo() {
        const logo = document.createElement("img");
        logo.setAttribute("src", this.imageLink);
        logo.setAttribute("class", "top");
        logo.setAttribute("id", "logo");
        this.letterHead.appendChild(logo);
    } 
    getABN() {
        const div = document.createElement("div");
        this.letterHead.appendChild(div);
        div.setAttribute("class", "top");
        div.setAttribute("id", "ABN");
        div.innerHTML = `<p>${this.companyName}</p><p>ABN ${this.ABN}</p>`;
    }
    getOfficeAddress() {
        const div = document.createElement("div");
        this.letterHead.appendChild(div);
        this.letterHead.appendChild(div);
        div.setAttribute("class", "top");
        div.setAttribute("id", "officeAddress");
        div.innerHTML = `   <p>Level 12</p>
                            <p>680 George Street</p>
                            <p>Sydney NSW 2000</p>
                            <p>Australia</p>`;
    }
    getLetterHead() {
        const form = this.letterHead.querySelector("form");
        this.select.addEventListener("change", (event) => {
            if (event.target.value === this.value) {
                this.getLogo();
                this.getABN();
                this.getOfficeAddress();
                form.remove();
            }
        }, false);
    }
}

const linkMarketServices = new Company("./images/LMS.png", "Link Market Services", "54 083 214 537", "option1");
const orientCapital = new Company("./images/OC.gif", "Orient Capital", "80 010 142 453", "option2");