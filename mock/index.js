/* jshint esversion: 6 */
/*
 * @Description:
 * @version:
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-03-24 10:08:55
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-03-24 10:21:46
 * @FilePath: \web_admin\mock\index.js
 */

/**
 * 模拟接口
 * 支持method类型 all
 * _index.js 中的内容格式为：
 *    exports.apis = [{path_name: #ajax地址#, path_file: #相对于`/api`之后的json文件路径#},]
 */
const path = require('path')
const fs = require('fs')

const FILE_PATH = path.resolve(__dirname, './api/')
const apisAllArr = []

/**
 * 文件遍历
 * @param file_path 需要遍历的文件路径
 */
function readDirRecur(filePath, callback) {
  const files = fs.readdirSync(filePath)
  files.map((fileName) => {
    const fullPath = path.join(filePath, fileName)
    const stats = fs.lstatSync(fullPath)

    // 是目录时，递归遍历
    if (stats.isDirectory()) {
      return readDirRecur(fullPath, callback)
    }
    // 是文件&文件名为_index.js，读取apis内容
    if (stats.isFile() && fileName === '_index.js') {
      /* eslint-disable */
      const { apis } = require(fullPath)
      callback(apis)
      /* eslint-enable */
    }
  })
}

/**
 * 注册api
 * @param devServer webpack的devServer
 */
function devServerApi(devServer) {
  const BASE_URL = process.env.VUE_APP_BASIC_API ? process.env.VUE_APP_BASIC_API : ''
  devServer.before = (app) => {
    readDirRecur(FILE_PATH, (apis) => {
      apis.map((api) => {
        app.all(`${BASE_URL}${api.path_name}`, (req, res) => {
          res.json(require(path.resolve(__dirname, `./api/${api.file_name}`)))
        })
      })
    })
  }
}

exports.api = devServerApi
