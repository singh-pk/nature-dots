const transformData = responseData =>
  responseData.reduce((accumulator, response) => {
    accumulator[response.id] = {
      name: response.name,
      parameters: response.parameters,
    };
    return accumulator;
  }, {});

export default transformData;
