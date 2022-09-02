export default async function handler(req, res) {
  const url = "https://panel-api2.voluum.com/profile";
  const token = req.query.accessToken
  console.log("token: ", token)
  if (req.method === "GET") {
    const response = await fetch(url,
      {
        method: 'GET',
        headers: new Headers({
          'cwauth-token': token,
        })
      }
    );
    const data = await response.json();
    res.status(200).json(data)
  }

  else if (req.method === "PUT") {
    const response = await fetch(url,
      {
        method: 'PUT',
        body: req.body,
        headers: new Headers({
          'Content-Type': 'application/json',
          'cwauth-token': token
        }),
      }
    );
    const data = await response.json();
    res.status(200).json(data)
  }
}
