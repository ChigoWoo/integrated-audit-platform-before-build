import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'

const api = {
  getTodoListPage(params) {
    return ajaxGetData({ url: `/todo/listpage`, params: params })
  },
  getLogListPage(params) {
    return ajaxGetData({ url: `/log/listpage`, params: params })
  },
  getLogDetail(params) {
    return ajaxGetData({ url: `/log/detail`, params: params })
  },
  getHomeInfo() {
    return ajaxGetData({ url: `/home/info`, params: {} })
  }
}

export default api