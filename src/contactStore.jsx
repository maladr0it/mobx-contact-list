import { observable, computed, decorate } from 'mobx';
import uuidv4 from 'uuid/v4';

class ContactStore {
  contacts = [
    {
      id: '1489015',
      name: 'Sam',
      phone: '99999999',
      email: 'sam@email.com'
    },
    {
      id: '1901580',
      name: 'Tom',
      phone: '88888888',
      email: 'tom@gmail.com'
    }
  ];
  addContact = (contact) => {
    this.contacts.push({
      id: uuidv4(),
      ...contact
    });
  };
  get numContacts() {
    return this.contacts.length;
  }
}
decorate(ContactStore, {
  contacts: observable,
  numContacts: computed
});

export default new ContactStore();
