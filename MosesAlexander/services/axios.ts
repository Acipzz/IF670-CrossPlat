import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data; // Pastikan data diterima dalam format yang diharapkan
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const updatePost = async (id, title, body) => {
  try {
    const response = await axios.put(`${API_URL}/posts/${id}`, {
      title,
      body,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};
