
const apiUrl = process.env.REACT_APP_URL_API 
export function requestFindPart(productId) {
    const requestOptions = {
        method:"GET",
        credentials: 'include',
     
      } 
    return fetch(`${apiUrl}/part/${productId}`, requestOptions)
    .then(handleResponse)
    .then(response => {response})
    .then(error => {error});
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

