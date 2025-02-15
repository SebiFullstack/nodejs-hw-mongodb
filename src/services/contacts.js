// src/services/contacts.js
import { ContactsCollection } from '../db/models/contacts.js';

export const getAllcontacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactsId) => {
  const contacts = await ContactsCollection.findById(contactsId);
  return contacts;
};

export const createContact = async (payload) => {
  const contacts = await ContactsCollection.create(payload);
  return contacts;
};

export const deleteContact = async (contactsId) => {
  const contacts = await ContactsCollection.findByIdAndDelete({
    _id: contactsId,
  });
  return contacts;
};

export const updateContact = async (contactsId, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactsId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};