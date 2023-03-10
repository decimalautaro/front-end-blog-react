export	const Petition = async(url, method, datesSave)=>{
    
    let loading = true


    
        let options = {
            method: "GET"
        }
        if (method == "GET" || method === "DELETE") {
            options = {
                method: method,
            }
        }

        if (method == "POST" || method == "PUT") {
            options = {
                method: method,
                body: JSON.stringify(datesSave),
                headers:{
                    "Content-Type": "application/json"
                }
            }
        }
        const petition = await fetch(url, options);
        const datos = await petition.json();
    
        loading = false
    
    
    return {
        datos,
        loading
    }

}


