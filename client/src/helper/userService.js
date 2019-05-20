
const apiUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3002/api' : 'http://localhost:3002/api';


export function login(email,password) {
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
export function fetchCart(productId, quanlity) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {productId,quanlity}
    }
    return fetch(`${apiUrl}/login`, requestOptions).then(function (response) {
      
      return response.json();
    })
}
function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
          }
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      return data;
  });
}

export const userService = {
    login,
    fetchCart,
};
