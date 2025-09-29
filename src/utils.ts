export async function getAPIURL(): Promise<string> {
    let apiURL = "";
    await fetch('api.txt')
  .then(response => response.text())
  .then((data) => {
    if( data.startsWith("<!doctype html>") ) {
        apiURL = "Error: Could not load API URL";
    } else {
        apiURL = data;
    }
  })
  return apiURL;
}