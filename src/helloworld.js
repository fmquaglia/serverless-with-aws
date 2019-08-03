module.exports.handler = (event, context, done) => {
  console.log(context);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello',
      input: event
    })
  };

  done(null, response);
};
