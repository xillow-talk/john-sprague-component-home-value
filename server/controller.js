module.exports= {
  get: (req, res) => {
    model.get((err, data) => {
      if (err) {
        console.log('error from the controller');
        return;
      }
      res.send(data);
    });
  }
}