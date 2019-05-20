

const apiUrl = process.env.REACT_APP_URL_API 

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

    return fetch(url).then(response => response.json());
}

export function loginUser(email,password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  };
  return fetch(`${apiUrl}/login`, requestOptions)
  .then(handleResponse)
  .then(function (response) {
  
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
    return fetch(`${apiUrl}/login`, requestOptions)
    .then(function (response) {
      return response.json();
    })
}
export function handleAuth() {
  const requestOptions = {
    method:"GET",
    credentials: 'include'
  }
  return fetch(`${apiUrl}/account`, requestOptions).then(handleResponse).then(function (response) {
    return {response}
  }).catch(error => {
    return {error};
 })
}
export function getAllProduct() {
  const requestOptions = {
    method:"GET",
    credentials: 'include'
  }
  return fetch(`${apiUrl}/product/getAll`, requestOptions).then(handleResponse).then(response => ({response})).catch(error => ({error}));
}
export function  patchProduct(productId,body)  {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
    method:"PATCH",
    credentials: 'include',
    body : JSON.stringify({...body})
  }
  return fetch(`${apiUrl}/product/${productId}`, requestOptions)
  .then(handleResponse)
  .then(response => ({response}))
  .catch(error => ({error}));
}
export function getSigleProduct(productId) {
  const requestOptions = {
    method:"GET",
    credentials: 'include'}
  return fetch(`${apiUrl}/product/id/${productId}`, requestOptions)
  .then(handleResponse)
  .then(response => ({response}))
  .catch(error => ({error}));
}
export function uploadFileImage(productId,files) {
  var formData = new FormData();
  
  files.map((file, index) => {
    formData.append("productImage", file,file.name);
  });

    const requestOptions = {

    method:"POST",
    credentials: 'include',
    body: formData,
  }
  return fetch(`${apiUrl}/upload/image/${productId}`, requestOptions)
  .then(handleResponse)
  .then(response => ({response}))
  .catch(error => ({error}));
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

