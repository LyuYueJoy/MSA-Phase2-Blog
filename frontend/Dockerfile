# 使用 Node.js 官方镜像
FROM node:18 AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制其他文件
COPY . .

# 构建项目
RUN npm run build

# 使用一个轻量级的 HTTP 服务器来托管构建好的应用
FROM nginx:alpine

# 复制构建好的文件到 Nginx 服务器目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
