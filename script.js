"use strict";
{

    class AddressBook {
        constructor() {
            this.contacts = [];
        }
        add() {
            const addedContact = new Contact(name.value, email.value, phone.value, relation.value);
            this.contacts.push(addedContact);
        }

        display () {
           
            let contact_section = document.getElementById("contact_section");

            
            let div = document.createElement("div");
            let info = document.createElement("p");
            let icon = document.createElement("i");

            
            div.classList.add("contact_container");
            icon.classList.add("material-icons");
            icon.classList.add("delete");

            
            icon.innerText ="delete";
            info.innerText = `Name: ${name.value}
            Email: ${email.value}
            Phone: ${phone.value}
            Relation: ${relation.value}`;

            
            div.appendChild(info);
            div.appendChild(icon);
            contact_section.appendChild(div);

            icon.addEventListener("click", () => {
                div.remove();
            })

        }

        deleteAt(){

        }

    }
    
        class Contact {
        constructor(name, email, phone, relation) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.relation = relation;
        }

    }

    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let phone= document.querySelector(".phone");
    let relation = document.querySelector(".select");
    let button = document.querySelector(".button_add");

    let myAddressBook = new AddressBook;

    button.addEventListener("click", () => {
        myAddressBook.add();
        myAddressBook.display();
        name.value = "";
        email.value = "";
        phone.value = "";
        relation.value = "";
    });


}
