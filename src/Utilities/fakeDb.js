// data sotorage in local storage when clicked each country


const fakeDb = id =>{
    const item= localStorage.getItem(id)
    if(item){
        const newItem = parseInt(item) + 1;
        localStorage.setItem(id, newItem);

    }
    else{
        localStorage.setItem(id, 1);
    }
}

export {fakeDb}