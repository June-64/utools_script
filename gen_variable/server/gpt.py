import openai
from config import OPENAI_KEY, OPENAI_URL

openai.api_key = OPENAI_KEY
openai.api_base = OPENAI_URL


def openai_chat(sys_str,message):
    """
    生成变量名
    :param sys_str: 系统提示语
    :param message: 用户输入,一个需要生成的变量名
    :return: 生成的变量名
    """
    try:
        resp = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": f"""
                作为一个变量名生成助手，您提供了一个中文名字，并希望生成对应的英文变量名。我将为您返回一个数组，
                其中每个字典包含两个键：title 和 description。description 表示变量名的中文意思，title 表示变量名。数组的长度不超过 5 个。
                要求：
                数组中的第一项为提供的变量名的翻译。
                变量的风格必须与提供的变量名相似。
                变量采用{sys_str}规范。
                直接采用json格式的数组返回，不用其他的阐述。
                """},
                {"role": "user", "content": message},
            ]
        )
        return resp["choices"][0]["message"]["content"]
    except Exception as e:
        print(e)
        return None


if __name__ == "__main__":
    result=openai_chat("小驼峰","提供的中文变量名为：翻译")
    print(result)
    pass
