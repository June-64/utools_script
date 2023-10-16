let timer;
const base_url = "http://127.0.0.1:5001/translate";

window.exports = {
  xt: {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "list", // 列表模式
    args: {
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {
        clearTimeout(timer);
        if (searchWord.length !== 0)
          timer = setTimeout(() => {
            callbackSetList([{ title: "翻译中...", description: "请稍等" }]);
            fetch(base_url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: action.code,
                text: searchWord,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                callbackSetList(res);
              })
              .catch(() => {
                callbackSetList([
                  { title: "翻译失败", description: "请重试或联系开发者" },
                ]);
              });
          }, 500);
        else callbackSetList([]);
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        window.utools.hideMainWindow();
        console.log(itemData.title);
        utools.copyText(itemData.title);
        utools.showNotification("已复制到剪贴板");
        window.utools.outPlugin();
      },
      placeholder: "小驼峰变量名翻译",
    },
  },
  dt: {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "list", // 列表模式
    args: {
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {
        clearTimeout(timer);
        if (searchWord.length !== 0)
          timer = setTimeout(() => {
            callbackSetList([{ title: "翻译中...", description: "请稍等" }]);
            fetch(base_url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: action.code,
                text: searchWord,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                callbackSetList(res);
              });
          }, 500);
        else callbackSetList([]);
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        window.utools.hideMainWindow();
        console.log(itemData.title);
        utools.copyText(itemData.title);
        utools.showNotification("已复制到剪贴板");
        // const url = itemData.url;
        // require("electron").shell.openExternal(url);
        window.utools.outPlugin();
      },
      placeholder: "大驼峰变量名翻译",
    },
  },
  hx: {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "list", // 列表模式
    args: {
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {
        clearTimeout(timer);
        searchWord = searchWord.trim();
        if (searchWord.length !== 0)
          timer = setTimeout(() => {
            callbackSetList([{ title: "翻译中...", description: "请稍等" }]);
            fetch(base_url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: action.code,
                text: searchWord,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                callbackSetList(res);
              });
          }, 500);
        else callbackSetList([]);
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        window.utools.hideMainWindow();
        console.log(itemData.title);
        utools.copyText(itemData.title);
        utools.showNotification("已复制到剪贴板");
        // const url = itemData.url;
        // require("electron").shell.openExternal(url);
        window.utools.outPlugin();
      },
      placeholder: "横线变量名翻译",
    },
  },
  xh: {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "list", // 列表模式
    args: {
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {
        clearTimeout(timer);
        if (searchWord.length !== 0)
          timer = setTimeout(() => {
            callbackSetList([{ title: "翻译中...", description: "请稍等" }]);
            fetch(base_url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: action.code,
                text: searchWord,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                callbackSetList(res);
              });
          }, 500);
        else callbackSetList([]);
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        window.utools.hideMainWindow();
        console.log(itemData.title);
        utools.copyText(itemData.title);
        utools.showNotification("已复制到剪贴板");
        // const url = itemData.url;
        // require("electron").shell.openExternal(url);
        window.utools.outPlugin();
      },
      placeholder: "下划线变量名翻译",
    },
  },
  xhd: {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "list", // 列表模式
    args: {
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {
        clearTimeout(timer);
        if (searchWord.length !== 0)
          timer = setTimeout(() => {
            callbackSetList([{ title: "翻译中...", description: "请稍等" }]);
            fetch(base_url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: action.code,
                text: searchWord,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                callbackSetList(res);
              });
          }, 500);
        else callbackSetList([]);
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        window.utools.hideMainWindow();
        console.log(itemData.title);
        utools.copyText(itemData.title);
        utools.showNotification("已复制到剪贴板");
        // const url = itemData.url;
        // require("electron").shell.openExternal(url);
        window.utools.outPlugin();
      },
      placeholder: "下划线全大写变量名翻译",
    },
  },
};
