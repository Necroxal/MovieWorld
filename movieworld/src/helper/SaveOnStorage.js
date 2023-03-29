 export const saveOnStorage = (key, item) =>{
    //get elements local storahe
    let items = JSON.parse(localStorage.getItem(key));

    //Check if it is an array
    if(Array.isArray(items)){
        items.push(item);
    }else{
      items = [item];
    }
    //Save in the local Storage
    localStorage.setItem(key, JSON.stringify(items));
    //Return an object
    return item;
  }