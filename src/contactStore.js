import { observable, computed, reaction, decorate } from 'mobx';
import uuidv4 from 'uuid/v4';

class ContactStore {
  constructor() {
    console.log('CREATING_CONTACT_STORE');
    if (!localStorage.getItem('contacts')) {
      console.log('no contacts in localstorage...');
      const contacts = [
        {
          id: '1',
          name: 'Sam',
          phone: '99999999',
          email: 'sam@email.com',
          favourited: true
        },
        {
          id: '2',
          name: 'Tom',
          phone: '88888888',
          email: 'tom@gmail.com',
          favourited: false
        }
      ];
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
  }
  nameFilter = '';
  favoriteFilter = false;
  getContact = id => this.contacts.find(contact => contact.id === id);
  editContact = (id, data) => {
    const index = this.contacts.findIndex(contact => contact.id === id);
    this.contacts[index] = {
      id,
      ...data
    };
  };
  favoriteContactToggle = (id) => {
    const index = this.contacts.findIndex(contact => contact.id === id);
    this.contacts[index].favourited = !this.contacts[index].favourited;
  };
  addContact = (data) => {
    this.contacts.push({
      id: uuidv4(),
      ...data
    });
  };
  updateLocalStorage = (() => this.contacts, contacts => console.log(contacts));
  get filteredContacts() {
    const pattern = new RegExp(`${this.nameFilter}`, 'i');
    return this.contacts
      .slice()
      .filter((contact) => {
        if (this.favoriteFilter === true) {
          return pattern.test(contact.name) && contact.favourited;
        }
        return pattern.test(contact.name);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
decorate(ContactStore, {
  contacts: observable,
  nameFilter: observable,
  favoriteFilter: observable,
  updateLocalStorage: reaction,
  filteredContacts: computed
});

export default new ContactStore();
