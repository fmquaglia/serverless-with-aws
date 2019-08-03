module.exports.handler = (event, context, done) => {
  fetch('https://api.weatherbit.io/v2.0/current?city=Buenos Aires&country=AR&key=138240bf460b4371acfa066e1b7f6b5a').then(
    response => {
      if (response.status !== 200) {
        done(new Error(response.status), response)
      } else {
        response.json().then(data => {
          done(null, data)
        })
      }
    }
  ).catch(error => done(error))
};
