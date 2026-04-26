import api from "./axiosInstance";

export async function getTasks() {
  const response = await api.get("/tasks");
  return response.data;
}
export async function ubdateTaskState(id, isSelected) {
 const response = await api.put(`/tasks/${id}`, {
    isSelected,
  });

  return response.data;
}

