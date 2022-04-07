export default function queryStringify(data: Record<string, unknown>) {
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
      return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}