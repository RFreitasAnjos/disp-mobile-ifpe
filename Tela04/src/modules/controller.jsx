import connection from "./connection";

class ContactController {
    static instance;

    getInstance() {
        if(!ContactController.instance){
            ContactController.instance = new ContactController();
        }
        return ContactController.instance;
    }

    async getContacts(){
        const getContacts = new Promise((resolve,reject) => {
            connection
                .get("/contacts")
                .then((response)=> {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
            });
        });
        return getContacts;
    }
    async createContact(contact){
        const create = new Promise((resolve,reject) => {
            connection
                .get("/contacts", contact)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
            });
        });
        return create;
    }

    async updateContact(contact) {
        const id = contact.id;
        const update = new Promise((resolve, reject) => {
            connection
                .get(`/contacts/${id}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
            });
        });
        return update;
    }
    async deleteContact(contact){
        const id = contact.id;
        return new Promise((resolve, reject) => {
            connection
                .get(`/contacts/${id}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
            });
        });
    }
}

const ContactController = new ContactController().getInstance();

export default ContactController;