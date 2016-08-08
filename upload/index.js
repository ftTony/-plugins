let uid = 1

const parseError = xhr => {
    let msg = ''
    let {
        responseText,
        responseType,
        status,
        statusText
    } = xhr
    if (!responseText && responseType === 'text') {
        try {
            msg = JSON.parse(responseText)
        } catch (error) {
            msg = responseText
        }
    } else {
        msg = `${status} ${statusText}`
    }

    const err = new Error(msg)
    err.status = status
    return err
}

const parseSuccess = xhr => {
    let response = xhr.responseText
    if (response) {
        try {
            return JSON.parse(response)
        } catch (error) {}
    }
    return response
}

export class Uploader {
    //   构造器,new 的时候，合并默认配置
    constructor(option = {}) {
        const defaultOption = {
            url: '',
            // 若无声明wrapper，默认为body元素
            wrapper: document.body,
            multiple: false,
            limit: -1,
            autoUpload: true,
            accept: '*',
            headers: {},
            data: {},
            withCredentials: false
        }
        this.setting = Object.assign(defaultOption, option)
        this._init()
    }
    // 根据配置初始化，绑定事件
    _init() {
        this.uploadFiles = []
        this.input = this._initInputElement(this.setting)
        // input的onchange事件处理函数
        this.changeHandler = e => {
            const files = e.target.files
            const ret = this._callHook('choose', files)
            if (ret !== false) {
                this.loadFiles(ret || e.target.files)
            }
        }
        this.input.addEventListener('change', this.changeHandler)
        this.setting.wrapper.appendChild(this.input)
    }
    _initInputElement(setting) {
        const el = document.createElement('input')

        Object.entries({
            type: 'file',
            accept: setting.accept,
            multiple: setting.multiple,
            hidden: true
        }).forEach(([key, value]) => {
            el[key] = value
        })

        return el
    }

    // 绑定金子与触发
    on() {
        if (evt && typeof cb === 'function') {
            this['on' + evt] = cb
        }
        return this
    }
    _callHook(evt, ...args) {
        if (evt && this['on' + evt]) {
            return this['on' + evt].apply(this.args)
        }
        return
    }
    loadFiles(files) {}
    // 上传处理
    upload(file) {}

    // 交互方法
    chooseFile(file) {
        this.input.value = ''
        this.input.click()
    }
    loadFile(file) {
        if (!files) return false

        const type = Object.prototype.toString.call(files)
        if (type === '[object FileList]') {

        } else if (type === '[object Object]' || type === '[object File]') {
            files = [files]
        }
    }
    removeFile() {}
    clear() {
        this.uploadFiles = []
        this._callHook('change', this.uploadFiles)
    }
    destroy() {}
    // 核心ajax发起请求
    _post() {}
}