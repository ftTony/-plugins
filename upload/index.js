export class Uploader {
  //   构造器,new 的时候，合并默认配置
  constructor() {}
  // 根据配置初始化，绑定事件
  _init() {}
  _initInputElement(setting) {}

  // 绑定金子与触发
  on() {}
  _callHook(evt, ...args) {}
  loadFiles(files) {}
  // 上传处理
  upload(file) {}

  // 交互方法
  chooseFile(file) {}
  loadFile(file) {}
  removeFile() {}
  clear() {}
  destroy() {}
  // 核心ajax发起请求
  _post() {}
}
