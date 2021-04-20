export default function() {

    const BASE_URI = process.env.NODE_ENV == "development" ? "http://localhost:8000/api" : "https://powerful-wave-69047.herokuapp.com/api";
    const headers = {
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Accept": "application/json"
        }
    };

    const connect = async (args) => {
        const endPoint  = args["endPoint"];
        const body =  args["body"] || null;
        const method = args["method"];
        const token  = args['token'] || '';
        const authorization = token ?  `Bearer ${token}` : '' ;
        headers["headers"]["Authorization"] = authorization;
        const uri = BASE_URI+endPoint; 
        const options = {
            method: method,
            headers: headers["headers"],
            body: JSON.stringify(body)
        }
        const response = await fetch(uri,options)
        if ( !response.ok ) {
            const error = await response.json();
            
            throw new Error(error['response']['message']);
        }

        return await response.json();
    };

    const addGigs =  async (args) => {
        return await connect(args);
    }
    const getAllGigs =  async (args) => {
        const endPoint  = args["endPoint"];
        const uri = BASE_URI+endPoint; 
        const response = await fetch(uri)
        if ( !response.ok ) {
            const error = await response.json();
            
            throw new Error(error['response']);
        }

        return await response.json();
    };

    const removeGig = async (args) => {
        return await connect(args)
    }
    const updateGig = async (args) => {
        return await connect(args)
    }


    return {

        getAllGigs, addGigs, removeGig, updateGig
    }

}