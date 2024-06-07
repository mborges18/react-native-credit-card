
export const Api = () => {
  const baseUrl = 'https://api-credit-card-792613245.development.catalystserverless.com/server/'

 const Post = async (endPoint: string, data: Object) => {
    return DoRequest(Method.POST, data, endPoint)
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

      var res = await response.json()

      console.log('REQUEST =>')
      console.log('POST => '+baseUrl+endPoint)
      console.log('BODY => '+JSON.stringify(data))
      console.log('\n\n ')
      console.log('RESULT =>')
      console.log('POST =>'+baseUrl+endPoint)
      console.log('CODE => '+response.status)
      console.log('RESPONSE => '+JSON.stringify(res))
      
      return {
        code: response.status,
        body: res
      };
  }

  const DoRequest = async (method: Method, data: Object, endPoint: string) => {
    const response = await fetch(baseUrl+endPoint, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      });

      var res = await response.json()

      console.log('REQUEST =>')
      console.log('POST => '+baseUrl+endPoint)
      console.log('BODY => '+JSON.stringify(data))
      console.log('\n\n ')
      console.log('RESULT =>')
      console.log('POST =>'+baseUrl+endPoint)
      console.log('CODE => '+response.status)
      console.log('RESPONSE => '+JSON.stringify(res))
      
      return {
        code: response.status,
        body: res
      };
  }

  enum Method {
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    GET = 'GET'
  }

  return {
    Post,
    Put
  }
};
