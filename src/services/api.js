export const fetchWrapper = (url) => {
  return fetch(url);
};

const baseUrl = "https://playground.4geeks.com/todo";
const usersBaseUrl = `${baseUrl}/users`;
const todosBaseUrl = `${baseUrl}/todos`;

export const postUser = (userName) => {
  return fetch(`${usersBaseUrl}/${userName}`, {
    method: "POST",
  });
};

export const getUser = (userName) => {
  /*
      {
        "name": "ScarzoJ",
        "todos": [
          {
            "label": "aaasss",
            "is_done": false,
            "id": 7
          }
        ]
      }
    */
  return fetch(`${usersBaseUrl}/${userName}`, {
    method: "GET",
  });
};

export const getUsers = () => {
  return fetch(`${usersBaseUrl}`, {
    method: "GET",
  });
};

export const deleteUser = (userName) => {
  return fetch(`${usersBaseUrl}/${userName}`, {
    method: "DELETE",
  });
};

export const postTodo = (userName, task) => {
  return fetch(`${todosBaseUrl}/${userName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

export const putTodo = (todoId) => {
  return fetch(`${todosBaseUrl}/${todoId}`, {
    method: "PUT",
  });
};

export const deleteTodo = (todoId) => {
  return fetch(`${todosBaseUrl}/${todoId}`, {
    method: "DELETE",
  });
};
