import request from "utils/request";

interface ParamsTodo {
  id: string;
  content: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTodoList() {
    return request.request({
      url: "/todos",
      method: "GET",
    });
  },

  addTodo({ content }: { content: string }) {
    return request.request({
      url: "/todo",
      method: "POST",
      data: { content },
    });
  },

  updateTodo({ id, content }: ParamsTodo) {
    return request.request({
      url: `/todo/${id}`,
      method: "PUT",
      data: { content },
    });
  },

  deleteTodo({ id }: { id: string }) {
    return request.request({
      url: `/todo/${id}`,
      method: "DELETE",
    });
  },
};
