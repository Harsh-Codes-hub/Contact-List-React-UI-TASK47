const USER_KEY = "contact_app_user";
const CONTACT_APP_KEY = "all_contacts";

export const getUser = () => {
  const user = localStorage.getItem(USER_KEY);

  return user ? JSON.parse(user) : null;
};

export const saveUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getContacts = () => {
  const allContacts = localStorage.getItem(CONTACT_APP_KEY);

  return allContacts ? JSON.parse(allContacts) : [];
};

export const saveContacts = (allContacts) => {
  localStorage.setItem(CONTACT_APP_KEY, JSON.stringify(allContacts));
};
