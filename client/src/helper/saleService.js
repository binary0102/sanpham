
const apiUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3002/api' : 'http://localhost:3002/api';

export function fetchCategory(categoryName) {
  const requestOptions = { 
    method: 'GET',
    credentials: 'include',
  
  };
  return fetch(`${apiUrl}/categories/search/${categoryName}`, requestOptions)
  .then(handleResponse)
  .then(response => ({response}))
  .catch(error => ({error}))
}
export function addOrder(productId, quanlity) {

  const requestOptions = { 
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quanlity })
  };
  return fetch(`${apiUrl}/cart/${productId}`, requestOptions)
  .then(handleResponse)
  .then(function (response) {
  
    return {response}
  }).catch(error => {
     return {error};
  })
}
export function  getSale1(id) {
    const requestOptions = { 
      method: 'GET',
      credentials: 'include'
    };
    return fetch(`${apiUrl}/categories/${id}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.error(error))
}
export function  getSale(id, paramas) {
    const requestOptions = { 
      method: 'GET',
      credentials: 'include'
    };
    var url = new URL(`${apiUrl}/categories/${id}`);
    url.search = new URLSearchParams(paramas);

    return fetch(url).then(response => response.json());
}
export function getProduct(id) {
    const requestOptions = { 
        method: 'GET',
        credentials: 'include'
      };
      var url = new URL(`${apiUrl}/product/${id}`); 

    return fetch(url,requestOptions).then(response => response.json());
}

export function loginUser(email,password,router) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  };
  return fetch(`${apiUrl}/login`, requestOptions)
  .then(handleResponse)
  .then(function (response) {
    router.push('/account');
    return {response}
  }).catch(error => {
     return {error};
  })
}
export function loginUser1(email,password,router) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    };
    return fetch(`${apiUrl}/login`, requestOptions).then(function (response) {
      return response.json();
    })
}
export function handleAuth() {
  const requestOptions = {
    method:"GET",
    credentials: 'include'
  }
  return fetch(`${apiUrl}/auth`, requestOptions).then(handleResponse).then(function (response) {
    return {response}
  }).catch(error => {
    return {error};
 })
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 404) {
                // auto logout if 401 response returned from api
               // return data;
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
  }