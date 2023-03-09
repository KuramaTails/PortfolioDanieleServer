module.exports = function (req, res) {
  let parameters = req.body;
  if (!parameters) res.status(203).send('Failed')
  if (parameters.username === "A" && parameters.password === "A") {
    res.status(200).send('Success')
  } else {
    if (parameters.username !== "A") {
        res.status(201).send('Error : username and password')
    } else {
        res.status(202).send('Error : password')
    }    
  }
};
