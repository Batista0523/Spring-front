const URL = import.meta.env.VITE_API_URL;

const getAllItems = () => {
  return fetch(`${URL}/events`)
    .then((res) => res.json())
    .then((json) => {
      if (json.success && json.data && json.data.payload) {
        return json.data.payload;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => console.error(err));
};

const getItem = (id) => {
  return fetch(`${URL}/${id}`)
    .then((res) => res.json())
    .then((json) => {
      if (json.id) {
        return json;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => console.error(err));
};
const addItem = (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  };

  return fetch(URL, options)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const updateItem = (id, data) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${URL}/${id}`, options)
    .then((res) => res.json())
    .then((json) => {
      if (json.id) {
        return json;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const deleteItem = (id) => {
  const options = {
    method: "DELETE",
  };

  return fetch(`${URL}/${id}`, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to delete item");
      }
      return res.json();
    })
    .then((json) => {
      if (json.success) {
        return true;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export { getAllItems, getItem, deleteItem, updateItem, addItem };