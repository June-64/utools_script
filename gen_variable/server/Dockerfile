# 使用官方 Python 3.11.4 镜像作为基础镜像
FROM python:3.11.4

# 设置工作目录
WORKDIR /app

COPY requirements.txt .
# 安装依赖
RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# 将当前目录下的文件复制到容器中
COPY . .

# 暴露端口
EXPOSE 5001

# 运行 main.py
CMD ["python", "app.py"]