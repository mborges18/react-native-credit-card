
export const Api = () => {
  const baseUrl = 'https://api-credit-card-792613245.development.catalystserverless.com/server/'

 const Post = async (endPoint: string, data: Object) => {
    const response = await fetch(baseUrl + endPoint, {
    method: 'POST',
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
    },
     body: JSON.stringify(data),
   });
   return {
     code:  response.status,
     body: await response.json()
   };
  }

  const Put = async (data: Object, endPoint: string) => {
    const response = await fetch(baseUrl+endPoint, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      });
      
      return {
        code: response.status,
        body: await response.json()
      };
  }

  return {
    Post,
    Put
  }
};
