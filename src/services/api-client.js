export const taskFetch = async () => {
  const url = `${import.meta.env.VITE_BASE_URL}/tasks`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
