"use strict";
{

    class AddressBook {
        constructor() {
            this.contacts = [{name:'Meghan',email: 'meghan@grandcircus.com',phone:'111-222-3333',relation: 'friend'}, {name:'Julia',email: 'john.smith@gmail.com',phone:'734-505-2244',relation: 'coworker'},{name:'Jon',email: 'jon@grandcircus.com',phone:'111-222-3333',relation: 'coworker'}];
        }
        add() {
            const addedContact = new Contact(name.value, email.value, phone.value, relation.value);
            this.contacts.push(addedContact);
        }

        display () {
            let contact_section = document.getElementById("contact_section");
            contact_section.innerHTML = '';
            for (const item of this.contacts) {

                // Setting up variables for creating elements
                let div = document.createElement("div");
                let info = document.createElement("p");
                let icon = document.createElement("i");
                
                // Adding CSS classes to created elements
                div.classList.add("contact_container");
                icon.classList.add("material-icons");
                icon.classList.add("delete");
                
                //Adding text
                icon.innerText ="delete";
                info.innerText = `Name: ${item.name}
                Email: ${item.email}
                Phone: ${item.phone}
                Relation: ${item.relation}`;
                
                //Appending info to div,and div to contact section
                div.appendChild(info);
                div.appendChild(icon);
                contact_section.appendChild(div);
                
                icon.addEventListener("click", () => {
                    div.remove();
                })
                
            }
        }

        deleteAt(){

        }

    }
    //This allows to add contact info
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
        myAddressBook.add(new Contact(name.value, email.value, phone.value, relation.value));
        myAddressBook.display();
        name.value = "";
        email.value = "";
        phone.value = "";
        relation.value = "";
    });
    
   
  window.addEventListener("load", function() {
     
    myAddressBook.display();
     
  });


}
