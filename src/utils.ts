export async function getAPIURL(): Promise<string> {
    let apiURL = "";
    await fetch('api.txt')
  .then(response => response.text())
  .then((data) => {
    if( data.startsWith("<!doctype html>") ) {
        apiURL = "http://sample-task-container-alb-1495630646.ap-southeast-2.elb.amazonaws.com";
    } else {
        apiURL = data;
    }
  })
  return apiURL;
}

export function getDataFromAPI(apiURL: string, endpoint: string): Promise<any> {
    return fetch(apiURL + endpoint)
    .then(response => response.text())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
    });
}