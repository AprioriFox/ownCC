export default class CustomApi {
    _baseUrl = "164.92.190.147:8000"

    credentials = JSON.parse(localStorage.getItem('credentials'));

    login = (username, password) => {
        fetch (
            `${this._baseUrl}/auth/jwt/create/`,{
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password``
                })
            }
        ).then(response =>{
            if (response.ok){
                return response.json()
            }else {
                throw new Error('Something went wrong')
            }
        }).then(data =>{
            localStorage.setItem('credentials', JSON.stringify(data))
            window.location.reload()
        }).catch(error =>{
            localStorage.removeItem('credentials')
            window.location.reload()
        })
    }


    getBanners =() =>{
        return fetch(
            `${this._baseUrl}/api/v1/baners/`, {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${this.credentials.access}` 
                }
            }
        ).then(response =>{ return response.json()})
    }




}