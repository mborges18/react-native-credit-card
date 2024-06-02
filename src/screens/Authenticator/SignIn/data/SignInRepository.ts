
export default function SignInRespository() {

    const signIn = (email: string, password: string) => {
        return new Promise((resolve, reject) => {
      
            const request = new XMLHttpRequest()
            request.open('POST', 'https://api-credit-card-792613245.development.catalystserverless.com/server/signin/');
            request.send({email:email, password: password});
    
            request.onreadystatechange = (e) => {
                if (request.status === 200) {
                    console.log('success XMLHttpRequest ', request.response)
                } else {
                    console.warn('error XMLHttpRequest ', e)
                }
            }
        })
      }

      const login = (email: string, password: string) => {

        return fetch('https://api-credit-card-792613245.development.catalystserverless.com/server/signin/', {
        method: 'POST',
        headers: {
            Accept: 'application/json','Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        });
      }

      return {
        signIn,
        login
      }
}