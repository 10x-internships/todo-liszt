const parseJSON = (data: string) => {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export default parseJSON;
