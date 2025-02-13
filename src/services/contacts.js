import { ContactsCollection } from '../db/models/contact.js';

export const getAllcontacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactsId) => {
  const contacts = await ContactsCollection.findById(contactsId);
  return contacts;
}; 