export async function getAllAlbumsAPI() {
  const response = await fetch(`${process.env.REACT_APP_SERVER_PORT}/api/albums`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const { data } = await response.json();
  console.log(data," aaaa");

  return data;
}
