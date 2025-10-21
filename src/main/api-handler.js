// src/main/api-handler.js
import { ipcMain } from "electron";
import axios from "axios";

// 创建 axios 实例
const api = axios.create({
  baseURL: "", // 统一接口前缀
  timeout: 10000,
});

// 可选：添加拦截器
api.interceptors.request.use((config) => {
  // 示例：添加 token
  config.headers.Authorization = global.token || "";
  return config;
});

api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.error("API error:", err.message);
    throw err;
  }
);

// 注册 IPC 处理函数
ipcMain.handle("adsearch:companyCondition", async (_event, options) => {
  const { url, method = "get", data, params } = options;
  return api.request({ url, method, data, params });
});
