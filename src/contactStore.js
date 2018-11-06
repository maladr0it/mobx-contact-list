import {
  observable, computed, autorun, toJS, decorate
} from 'mobx';
import uuidv4 from 'uuid/v4';

class ContactStore {
  constructor() {
    // generate dummy data if there isn't any contacts list in localStorage
    if (!localStorage.getItem('contacts')) {
      const contacts = [
        {
          id: '1',
          name: 'Sam',
          phone: '124-10998',
          email: 'sam@gmail.com',
          favourited: true
        },
        {
          id: '2',
          name: 'Samantha',
          phone: '133-19859',
          email: 'pink_unicorn@gmail.com',
          favourited: false
        },
        {
          id: '3',
          name: 'Samwise',
          phone: '144-18744',
          favourited: true
        }
      ];
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
    this.nameFilter = '';
    this.favoriteFilter = false;
  }

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
  filteredContacts: computed
});

const store = new ContactStore();

// saves the contacts list to localstorage any time that they change
autorun(() => {
  const contacts = toJS(store.contacts);
  localStorage.setItem('contacts', JSON.stringify(contacts));
});

export default store;
