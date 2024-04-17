export const useLocalStoragee = (key: string) => {
    
    const setItem = (value: unknown) => {
      try {
        const existingItems = getItem() || []; 
        const updatedItems = [...existingItems, value];
        window.localStorage.setItem(key, JSON.stringify(updatedItems));
      } catch (error) {
        console.log(error);
      }
    };
  
    const getItem = () => {
      try {
        const item = window.localStorage.getItem(key);
        const parsedItem = item ? JSON.parse(item) : undefined;
        return Array.isArray(parsedItem) ? parsedItem.join(""): undefined
      } catch (error) {
        console.log(error);
        return undefined;
      }
    };
  
    const removeItem = () => {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.log(error);
      }
    };
  
    return { setItem, getItem, removeItem };
  };
  