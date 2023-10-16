from flask import Flask, request
from flask_cors import CORS

from gpt import openai_chat

app = Flask(__name__)
CORS(app, origins="*", supports_credentials=True)


@app.route('/translate', methods=['post'])
def hello_world():  # put application's code here
    action = request.json.get("action")
    text = request.json.get("text")
    action_dict = {
        'xt': '小驼峰',
        'dt': '大驼峰',
        'xh': '下划线',
        'hx': '横线',
        'xhd': '下划线全大写',
    }
    result = openai_chat(action_dict[action], "变量名：{}".format(text))
    print(result)
    return result


if __name__ == '__main__':
    app.run(port=5001, host="0.0.0.0")
