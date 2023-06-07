export const server_calls ={
    get: async () => {
        const response = await fetch('https://kiys-car-dealership.onrender.com/api/cars',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 9ebd3d71e2e1b0da27b886e40f68c9844517f6465ae8899f'



            },

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }


        return await response.json()


    },

    create: async (data: any = {}) => {
        const response = await fetch('https://kiys-car-dealership.onrender.com/api/cars',
        {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 9ebd3d71e2e1b0da27b886e40f68c9844517f6465ae8899f'

            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the  server')
        }

        return await response.json()

    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch (`https://kiys-car-dealership.onrender.com/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 9ebd3d71e2e1b0da27b886e40f68c9844517f6465ae8899f'
            },
        

             body: JSON.stringify(data)
        })     
    

    
       if (!response.ok){
        throw new Error('Failed to update data on server')
       
        return await response.json()
       }
    },
  
    delete: async (id: string) => {
            const response = await fetch(`https://kiys-car-dealership.onrender.com/api/cars/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': 'bearer 9ebd3d71e2e1b0da27b886e40f68c9844517f6465ae8899f'
                    }
                })





            if (!response.ok){
                throw new Error('Failed to delete pdate data on server');

               }

               return;

    },
}   