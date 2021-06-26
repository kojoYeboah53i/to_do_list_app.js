async function store_list(){
    return new Promise(resolve, reject =>{
        setTimeout(() => {
            resolve({data:"attempting to store todo list "})
        }, 3000);
    })
}


const store = await store_list();
     