const getRequestType = (type: string) => (status: string) => `${type}_${status}`;
export default getRequestType;
