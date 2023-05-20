const Session = {
  get: (key) => {
    try {
      const value = sessionStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.error(`Error retrieving item from session storage: ${error}`);
      return null;
    }
  },
  set: (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error storing item in session storage: ${error}`);
    }
  },
  remove: (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from session storage: ${error}`);
    }
  },
};

export default Session;
