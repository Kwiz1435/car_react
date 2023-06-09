export const server_calls ={
    get: async () => {
        const response = await fetch('https://sassy-lucky-ellipse.glitch.me/api/drinks',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 502fa1b0457fa657e76361e75ed668490df152911bc233e4'



            },

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }


        return await response.json()


    },

    create: async (data: any = {}) => {
        const response = await fetch('https://sassy-lucky-ellipse.glitch.me/api/drinks',
        {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 502fa1b0457fa657e76361e75ed668490df152911bc233e4'

            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the  server')
        }

        return await response.json()

    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch (`https://sassy-lucky-ellipse.glitch.me/api/drinks/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 502fa1b0457fa657e76361e75ed668490df152911bc233e4'
            },
        

             body: JSON.stringify(data)
        })     
    

    
       if (!response.ok){
        throw new Error('Failed to update data on server')
       
        return await response.json()
       }
    },
  
    delete: async (id: string) => {
            const response = await fetch(`https://sassy-lucky-ellipse.glitch.me/api/drinks/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': 'bearer 502fa1b0457fa657e76361e75ed668490df152911bc233e4'
                    }
                })





            if (!response.ok){
                throw new Error('Failed to delete pdate data on server');

               }

               return;

    },
}   