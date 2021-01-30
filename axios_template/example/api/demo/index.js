import request from './request';
// 遍历mockapi
/** 获取业务工单列表 */
function qyw_merchant_workorder_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/workorder/list',
    data: data
  });
}

/** 添加业务工单 */
function qyw_merchant_workorder_add_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/workorder/add',
    data: data
  });
}

/** 获取业务工单详情 */
function qyw_merchant_workorder_get_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/workorder/get',
    data: data
  });
}

/** 查询是否已开通业务 */
function qyw_merchant_workorder_is_opened_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/workorder/is-opened',
    data: data
  });
}

/** 卡BIN查询 */
function qyw_merchant_widget_query_card_bin_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/widget/query-card-bin',
    data: data
  });
}

/** 添加投诉建议 */
function qyw_merchant_widget_suggestions_add_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/widget/suggestions/add',
    data: data
  });
}

/** 获取投诉建议详情 */
function qyw_merchant_widget_suggestions_get_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/widget/suggestions/get',
    data: data
  });
}

/** 获取投诉建议列表 */
function qyw_merchant_widget_suggestions_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/widget/suggestions/list',
    data: data
  });
}

/** 送纸任务查询 */
function qyw_merchant_widget_deliver_paper_query_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/widget/deliver-paper-query',
    data: data
  });
}

/** 送纸任务详情 */
function qyw_merchant_widget_deliver_paper_query_id_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/widget/deliver-paper-query-id',
    data: data
  });
}

/** 验证邀请码 */
function qyw_merchant_user_verify_invite_code_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/verify_invite_code',
    data: data
  });
}

/** 微信接口签名 */
function qyw_merchant_user_wechat_js_sign_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/user/wechat/js/sign',
    params: data
  });
}

/** 送纸 */
function qyw_merchant_widget_deliver_paper_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/widget/deliver-paper',
    data: data
  });
}

/** 用户账号密码登录 */
function qyw_merchant_user_uNameLogin_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/uNameLogin',
    data: data
  });
}

/** 回调 */
function qyw_merchant_user_upload_image_sign_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/user/upload-image-sign',
    params: data
  });
}

/** 验证当前手机号 */
function qyw_merchant_user_verifCurrMobile_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/verifCurrMobile',
    data: data
  });
}

/** 修改密码 */
function qyw_merchant_user_verifyPass_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/verifyPass',
    data: data
  });
}

/** PC端用户手机号登录 */
function qyw_merchant_user_pcMobileLogin_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/pcMobileLogin',
    data: data
  });
}

/** 回调 */
function qyw_merchant_user_redirect_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/user/redirect',
    params: data
  });
}

/** 回调 */
function qyw_merchant_user_redirect_method_param_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/user/redirect/{method}/{param}',
    params: data
  });
}

/** 刷新token */
function qyw_merchant_user_refreshToken_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/refreshToken',
    data: data
  });
}

/** 用户注册 */
function qyw_merchant_user_register_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/register',
    data: data
  });
}

/** 用户注册并且绑定 */
function qyw_merchant_user_register_and_bind_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/register-and-bind',
    data: data
  });
}

/** 发送手机验证码 */
function qyw_merchant_user_sendVerifCode_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/sendVerifCode',
    data: data
  });
}

/** 微信openId登录 */
function qyw_merchant_user_login_openId_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/user/login-openId',
    params: data
  });
}

/** 用户手机号登录 */
function qyw_merchant_user_mobileLogin_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/mobileLogin',
    data: data
  });
}

/** 修改手机号 */
function qyw_merchant_user_modifyMobile_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/modifyMobile',
    data: data
  });
}

/** 修改商户绑定密码，如绑定时返回的标志是新商户则必须修改 */
function qyw_merchant_user_modifyPass_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/modifyPass',
    data: data
  });
}

/** 微信网页获取code回调 */
function qyw_merchant_user_oauth_code_openid_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/user/oauth/code/openid',
    params: data
  });
}

/** 微信网页获取code回调 */
function qyw_merchant_user_oauth_wx_code_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/user/oauth/wx/code',
    params: data
  });
}

/** 更改对账功能白名单 */
function qyw_merchant_statement_updatePermission_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/statement/updatePermission',
    params: data
  });
}

/** 联系我们 */
function qyw_merchant_user_contactUs_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/user/contactUs',
    params: data
  });
}

/** 获取用户信息 */
function qyw_merchant_user_getUserInfoByToken_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/getUserInfoByToken',
    data: data
  });
}

/** 商户号登录 */
function qyw_merchant_user_jftMerchantLogin_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/user/jftMerchantLogin',
    data: data
  });
}

/** 获取下载记录列表(多商户) */
function qyw_merchant_statement_getMultiDownloadList_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/getMultiDownloadList',
    data: data
  });
}

/** 判断是否有权限查看对账功能 */
function qyw_merchant_statement_permissionIsEnable_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/permissionIsEnable',
    data: data
  });
}

/** 对账单邮箱设置 */
function qyw_merchant_statement_setStatementEmail_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/setStatementEmail',
    data: data
  });
}

/** 定时删除对帐单文件  */
function qyw_merchant_statement_statementFileDelete_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/statementFileDelete',
    data: data
  });
}

/** 定时微信推送账单  */
function qyw_merchant_statement_statementWxpush_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/statementWxpush',
    data: data
  });
}

/** 定时发送对账邮箱 */
function qyw_merchant_statement_taskSendEmail_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/taskSendEmail',
    data: data
  });
}

/** 获取下载记录列表(单个商户) */
function qyw_merchant_statement_getDownloadList_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/getDownloadList',
    data: data
  });
}

/** 获取商户创建时间 */
function qyw_merchant_statement_getMerchantCreateDate_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/getMerchantCreateDate',
    data: data
  });
}

/** 查一个月的统计数据-统计商户交易（月按状态） */
function qyw_merchant_statement_getCountMchMonth_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/getCountMchMonth',
    data: data
  });
}

/** 机构获取下载记录列表(汇总表) */
function qyw_merchant_statement_getCountOrderList_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/getCountOrderList',
    data: data
  });
}

/** 查月份生成日历表-统计商户交易（月按日） */
function qyw_merchant_statement_getCountMchDate_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/getCountMchDate',
    data: data
  });
}

/** 日历表的日交易详情-统计商户交易（按交易类型） */
function qyw_merchant_statement_getCountMchDateInfo_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/getCountMchDateInfo',
    data: data
  });
}

/** 获取对账单邮箱 */
function qyw_merchant_statement_getBindStatementEmail_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/getBindStatementEmail',
    data: data
  });
}

/** 删除下载记录 */
function qyw_merchant_statement_deleteExportRecord_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/deleteExportRecord',
    data: data
  });
}

/** 导出日数据(多商户) */
function qyw_merchant_statement_exportDataMultiMerchant_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/exportDataMultiMerchant',
    data: data
  });
}

/** 导出日数据(单个商户) */
function qyw_merchant_statement_exportDataSingleMerchant_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/exportDataSingleMerchant',
    data: data
  });
}

/** 查询商户下所有门店 */
function qyw_merchant_shop_v3_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/v3/list',
    data: data
  });
}

/** 验证当前手机号 */
function qyw_merchant_sms_verify_sms_code_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/sms/verify-sms-code',
    data: data
  });
}

/** 机构汇总表---数据导出(20200601) */
function qyw_merchant_statement_countQywBaseOrder_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/statement/countQywBaseOrder',
    data: data
  });
}

/** 获取门店机具列表(只展示4条) */
function qyw_merchant_shop_machines_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/machines/list',
    data: data
  });
}

/** 搜索指定商户门店列表 */
function qyw_merchant_shop_search_by_merchant_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/search-by-merchant',
    data: data
  });
}

/** 更新门店信息 */
function qyw_merchant_shop_update_shop_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/update-shop',
    data: data
  });
}

/** 查询商户下所有门店 */
function qyw_merchant_shop_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/list',
    data: data
  });
}

/** 查询商户下所有门店H5 */
function qyw_merchant_shop_list_by_merchant_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/list-by-merchant',
    data: data
  });
}

/** 查询商户下门店列表，用于选择框列表展示 */
function qyw_merchant_shop_list_simple_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/list-simple',
    data: data
  });
}

/** 删除门店 */
function qyw_merchant_shop_del_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/del',
    data: data
  });
}

/** 门店是否已经有店长 */
function qyw_merchant_shop_exists_manager_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/shop/exists-manager',
    params: data
  });
}

/** 根据当前用户查询门店列表 */
function qyw_merchant_shop_get_shop_by_current_user_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/get-shop-by-current-user',
    data: data
  });
}

/** 查询指定门店 */
function qyw_merchant_shop_get_shop_info_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/get-shop-info',
    data: data
  });
}

/** 获取POS机列表 */
function qyw_merchant_pos_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/pos/list',
    data: data
  });
}

/** 解绑POS机到门店 */
function qyw_merchant_pos_unbind_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/pos/unbind',
    data: data
  });
}

/** 添加门店 */
function qyw_merchant_shop_add_shop_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/shop/add-shop',
    data: data
  });
}

/** 获取商户POS机开通渠道 */
function qyw_merchant_pos_channel_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/pos/channel',
    data: data
  });
}

/** 获取POS机详情 */
function qyw_merchant_pos_get_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/pos/get',
    data: data
  });
}

/** 修改模版 */
function qyw_merchant_payment_template_modify_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/payment-template/modify',
    data: data
  });
}

/** 上传填写的模版 */
function qyw_merchant_payment_template_upload_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/payment-template/upload',
    data: data
  });
}

/** 绑定POS机到门店 */
function qyw_merchant_pos_bind_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/pos/bind',
    data: data
  });
}

/** POS机更换门店 */
function qyw_merchant_pos_change_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/pos/change',
    data: data
  });
}

/** 按照商户信息获取模版 */
function qyw_merchant_payment_template_get_by_merchant_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/payment-template/get-by-merchant',
    data: data
  });
}

/** 按照名字获取模版 */
function qyw_merchant_payment_template_get_by_name_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/payment-template/get-by-name',
    data: data
  });
}

/** 查询模版列表 */
function qyw_merchant_payment_template_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/payment-template/list',
    data: data
  });
}

/** 按照ID获取模版 */
function qyw_merchant_payment_template_get_by_id_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/payment-template/get-by-id',
    params: data
  });
}

/** 下载模版 */
function qyw_merchant_payment_template_download_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/payment-template/download',
    params: data
  });
}

/** 根据ID查询门店名称 */
function qyw_merchant_order_shop_info_by_id_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/order/shop-info-by-id',
    params: data
  });
}

/** 新增模版 */
function qyw_merchant_payment_template_add_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/payment-template/add',
    data: data
  });
}

/** 修改模版 */
function qyw_merchant_payment_template_del_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/payment-template/del',
    params: data
  });
}

/** 店员订单列表,增加显示总金额 */
function qyw_merchant_order_list_amount_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/order/list-amount',
    params: data
  });
}

/** 根据当前用户查询店员订单列表 */
function qyw_merchant_order_list_by_current_user_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/order/list-by-current-user',
    data: data
  });
}

/** 订单核准 */
function qyw_merchant_order_orderConfirm_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/order/orderConfirm',
    params: data
  });
}

/** 根据聚合码查询门店名称 */
function qyw_merchant_order_shop_info_by_code_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/order/shop-info-by-code',
    params: data
  });
}

/** 店员订单详情 */
function qyw_merchant_order_detail_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/order/detail',
    params: data
  });
}

/** 聚合码订单列表导出 */
function qyw_merchant_order_jhmOrderlist_export_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/order/jhmOrderlist-export',
    data: data
  });
}

/** 店员订单列表 */
function qyw_merchant_order_list_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/order/list',
    params: data
  });
}

/** 验证商户密码是否正确并返回是否新商户标志 */
function qyw_merchant_merchant_verify_merchant_pwd_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/verify-merchant-pwd',
    data: data
  });
}

/** 查询商户LOGO */
function qyw_merchant_merchant_getMerchantLogo_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/merchant/getMerchantLogo',
    params: data
  });
}

/** 修改商户绑定密码，如绑定时返回的标志是新商户则必须修改，如旧密码为默认密码则说明需要做绑定操作，修改密码后自动绑定 */
function qyw_merchant_merchant_modify_merchant_pwd_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/modify-merchant-pwd',
    data: data
  });
}

/** 修改商户绑定密码，如绑定时返回的标志是新商户则必须修改，如旧密码为默认密码则说明需要做绑定操作，修改密码后自动绑定 */
function qyw_merchant_merchant_modify_merchantpwd_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/modify-merchantpwd',
    data: data
  });
}

/** 更新用户最近一次操作的商户 */
function qyw_merchant_merchant_update_merchant_nearest_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/update-merchant-nearest',
    data: data
  });
}

/** 上传商户图片 */
function qyw_merchant_merchant_upload_merchant_image_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/upload-merchant-image',
    data: data
  });
}

/** 管理员查询商户列表 */
function qyw_merchant_merchant_get_merchant_list_by_manager_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-merchant-list-by-manager',
    data: data
  });
}

/** 根据用户查询最近一次使用的商户 */
function qyw_merchant_merchant_get_merchant_nearest_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-merchant-nearest',
    data: data
  });
}

/** 查询当前商户状态 */
function qyw_merchant_merchant_get_merchant_status_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-merchant-status',
    data: data
  });
}

/** 查询当前商户状态，如审核通过则更新最近操作商户 */
function qyw_merchant_merchant_get_merchant_status_update_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-merchant-status-update',
    data: data
  });
}

/** 查询大商户的子商户列表 */
function qyw_merchant_merchant_get_merchant_children_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-merchant-children',
    data: data
  });
}

/** 从缓存拿图片 */
function qyw_merchant_merchant_get_merchant_image_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/merchant/get-merchant-image',
    params: data
  });
}

/** 查询当前商户信息 */
function qyw_merchant_merchant_get_merchant_info_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-merchant-info',
    data: data
  });
}

/** 查询用户已绑定商户列表 */
function qyw_merchant_merchant_get_merchant_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-merchant-list',
    data: data
  });
}

/** 根据机构号，查找下一层的机构和订单汇总数据 */
function qyw_merchant_merchant_get_children_byOrgId_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-children-byOrgId',
    data: data
  });
}

/** erpOrg收单机构树形列表 */
function qyw_merchant_merchant_get_erpOrg_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-erpOrg-list',
    data: data
  });
}

/** 根据机构号，查找所有能交易的商户 */
function qyw_merchant_merchant_get_erpOrg_tradeMerchant_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/merchant/get-erpOrg-tradeMerchant',
    params: data
  });
}

/** 查询商户 */
function qyw_merchant_merchant_get_merchant_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/get-merchant',
    data: data
  });
}

/** 查询聚后和收单商户下所有门店(新) */
function qyw_merchant_jftShop_queryQywStore_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftShop/queryQywStore',
    data: data
  });
}

/** 绑定商户和用户 */
function qyw_merchant_merchant_add_bind_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/add-bind',
    data: data
  });
}

/** 添加商户 */
function qyw_merchant_merchant_add_merchant_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/merchant/add-merchant',
    data: data
  });
}

/** 通过商户id获取appId */
function qyw_merchant_merchant_get_appId_by_merchantId_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/merchant/get-appId-by-merchantId',
    params: data
  });
}

/** 订单汇总---数据列表(新) */
function qyw_merchant_jftData_queryQywBaseOrder_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/queryQywBaseOrder',
    data: data
  });
}

/** 订单汇总---数据导出(新) */
function qyw_merchant_jftData_queryQywBaseOrderExcel_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/queryQywBaseOrderExcel',
    data: data
  });
}

/** 帐单下载--对账单导出(新) */
function qyw_merchant_jftData_statementExcel_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/statementExcel',
    data: data
  });
}

/** 查询商户当日交易 */
function qyw_merchant_jftData_today_type_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/today-type',
    data: data
  });
}

/** 查询商交易汇总导出 */
function qyw_merchant_jftData_today_type_export_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/today-type-export',
    data: data
  });
}

/** 查询商户下所有门店 */
function qyw_merchant_jftShop_getByIdOrName_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftShop/getByIdOrName',
    data: data
  });
}

/** 订单核准 */
function qyw_merchant_jftData_orderConfirm_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/jftData/orderConfirm',
    params: data
  });
}

/** 交易类型,交易状态,支付方式选择(新) */
function qyw_merchant_jftData_queryDataDictionary_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/queryDataDictionary',
    data: data
  });
}

/** 查询商户订单列表 */
function qyw_merchant_jftData_order_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/order/list',
    data: data
  });
}

/** 订单汇总---汇总信息(新) */
function qyw_merchant_jftData_countQywBaseOrder_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/countQywBaseOrder',
    data: data
  });
}

/** 根据id删除导出记录 */
function qyw_merchant_jftData_deletExportRecordById_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/jftData/deletExportRecordById',
    params: data
  });
}

/** 查询导出记录 */
function qyw_merchant_jftData_getJftOrderExportRecords_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/getJftOrderExportRecords',
    data: data
  });
}

/** 订单列表导出 */
function qyw_merchant_jftData_list_export_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/list-export',
    data: data
  });
}

/** 订单流水导出(新) */
function qyw_merchant_jftData_listExcel_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/listExcel',
    data: data
  });
}

/** invoke */
function qyw_merchant_health_delete(data) {
  return request({
    method: 'delete',
    url:'/qyw-merchant/health',
    data: data
  });
}

/** invoke */
function qyw_merchant_health_options(data) {
  return request({
    method: 'options',
    url:'/qyw-merchant/health',
    data: data
  });
}

/** invoke */
function qyw_merchant_health_patch(data) {
  return request({
    method: 'patch',
    url:'/qyw-merchant/health',
    data: data
  });
}

/** 对账单导出 */
function qyw_merchant_jftData_account_statement_export_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/jftData/account-statement-export',
    data: data
  });
}

/** 获取行业数据 */
function qyw_merchant_dict_test_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/dict/test',
    params: data
  });
}

/** invoke */
function qyw_merchant_health_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/health',
    params: data
  });
}

/** invoke */
function qyw_merchant_health_head(data) {
  return request({
    method: 'head',
    url:'/qyw-merchant/health',
    data: data
  });
}

/** invoke */
function qyw_merchant_health_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/health',
    data: data
  });
}

/** invoke */
function qyw_merchant_health_put(data) {
  return request({
    method: 'put',
    url:'/qyw-merchant/health',
    data: data
  });
}

/** 银行编号字典分页查询 */
function qyw_merchant_dict_bank_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/dict/bank',
    params: data
  });
}

/** 获取行业数据 */
function qyw_merchant_dict_industry_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/dict/industry',
    params: data
  });
}

/** 数据字典分页查询 */
function qyw_merchant_dict_list_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/dict/list',
    params: data
  });
}

/** 获取省市区 */
function qyw_merchant_dict_location_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/dict/location',
    params: data
  });
}

/** 获取地区信息 */
function qyw_merchant_dict_location_get_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/dict/location-get',
    params: data
  });
}

/** 获取腾讯云对象存储上传签名 */
function qyw_merchant_cos_getUploadSign_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/cos/getUploadSign',
    params: data
  });
}

/** 查询订单详情 */
function qyw_merchant_data_order_detail_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/data/order/detail',
    data: data
  });
}

/** 查询商户订单列表 */
function qyw_merchant_data_order_list_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/data/order/list',
    data: data
  });
}

/** 查询商户订单列表,根据订单号查询 */
function qyw_merchant_data_order_list_no_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/data/order/list-no',
    data: data
  });
}

/** 查询商户昨日交易汇总 */
function qyw_merchant_data_today_type_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/data/today-type',
    data: data
  });
}

/** 注册码信息 */
function qyw_merchant_assistant_register_code_info_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/register-code-info',
    params: data
  });
}

/** 删除店员 */
function qyw_merchant_assistant_remove_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/remove',
    data: data
  });
}

/** 解除绑定 */
function qyw_merchant_assistant_remove_binding_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/remove-binding',
    data: data
  });
}

/** 判断用户的微信openId是否在用户表中注册 */
function qyw_merchant_assistant_subscribe_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/subscribe',
    params: data
  });
}

/** 查询所有卡券 */
function qyw_merchant_cardTicket_selectAll_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/cardTicket/selectAll',
    params: data
  });
}

/** 店员详情 */
function qyw_merchant_assistant_order_overview_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/order-overview',
    params: data
  });
}

/** 升为店长 */
function qyw_merchant_assistant_promote_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/promote',
    data: data
  });
}

/** 店员注册 */
function qyw_merchant_assistant_register_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/register',
    data: data
  });
}

/** 注册码 */
function qyw_merchant_assistant_register_code_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/register-code',
    data: data
  });
}

/** 判断手机号是否注册过 */
function qyw_merchant_assistant_mobile_exists_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/mobile/exists',
    params: data
  });
}

/** 修改店员名字 */
function qyw_merchant_assistant_modify_name_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/modify-name',
    data: data
  });
}

/** 判断用户的微信openId是否在用户表中注册 */
function qyw_merchant_assistant_open_id_exists_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/open-id/exists',
    params: data
  });
}

/** 店员订单列表 */
function qyw_merchant_assistant_order_list_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/order-list',
    params: data
  });
}

/** 店员详情 */
function qyw_merchant_assistant_detail_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/detail',
    params: data
  });
}

/** 店员详情 */
function qyw_merchant_assistant_detail_openId_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/detail-openId',
    data: data
  });
}

/** 根据商户ID和门店ID查询店员列表 */
function qyw_merchant_assistant_list_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/list',
    params: data
  });
}

/** 根据商户ID和门店ID查询店员列表 */
function qyw_merchant_assistant_list_by_Mer_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/list-by-Mer',
    data: data
  });
}

/** 根据当前用户，根据商户ID和门店ID查询店员列表 */
function qyw_merchant_assistant_list_by_current_user_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/list-by-current-user',
    params: data
  });
}

/** 商户提交聚合码停用申请 */
function qyw_merchant_aggcode_stopping_request_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/aggcode/stopping-request',
    data: data
  });
}

/** 店员详情 */
function qyw_merchant_assistant_after_login_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/assistant/after-login',
    params: data
  });
}

/** 店员上班打卡 */
function qyw_merchant_assistant_clock_in_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/clock-in',
    data: data
  });
}

/** 店员下班打卡 */
function qyw_merchant_assistant_clock_out_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/clock-out',
    data: data
  });
}

/** 降为店员 */
function qyw_merchant_assistant_demotion_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/assistant/demotion',
    data: data
  });
}

/** 聚合码绑定门店 */
function qyw_merchant_aggcode_bind_to_shop_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/aggcode/bind-to-shop',
    data: data
  });
}

/** 查询商户下所有聚合码 */
function qyw_merchant_aggcode_list_by_merchant_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/aggcode/list-by-merchant',
    data: data
  });
}

/** 解除绑定 */
function qyw_merchant_aggcode_remove_bind_post(data) {
  return request({
    method: 'post',
    url:'/qyw-merchant/aggcode/remove-bind',
    data: data
  });
}

/** 此方法空实现，供运维健康检测使用 */
function qyw_merchant_actuator_health_get(data) {
  return request({
    method: 'get',
    url:'/qyw-merchant/actuator/health',
    params: data
  });
}

/** 支持接口代理的 mock，试试在 url 上加 ?s={数字} */
function proxy_get(data) {
  return request({
    method: 'get',
    url:'/proxy',
    params: data
  });
}

/** 带随机数据的 mock */
function mock_get(data) {
  return request({
    method: 'get',
    url:'/mock',
    params: data
  });
}

/** 自定义响应的 mock */
function _get(data) {
  return request({
    method: 'get',
    url:'/',
    params: data
  });
}

/** 这只是一个响应 post 接口返回随机数据的例子 */
function upload_post(data) {
  return request({
    method: 'post',
    url:'/upload',
    data: data
  });
}

/** 根据请求参数返回指定数据，试试在 url 上加 ?name={任意值} */
function query_get(data) {
  return request({
    method: 'get',
    url:'/query',
    params: data
  });
}

/** 支持 restful 的 mock，替换 id 试试 */
function restful_id_list_get(data) {
  return request({
    method: 'get',
    url:'/restful/:id/list',
    params: data
  });
}

export {
  qyw_merchant_workorder_list_post,
  qyw_merchant_workorder_add_post,
  qyw_merchant_workorder_get_post,
  qyw_merchant_workorder_is_opened_post,
  qyw_merchant_widget_query_card_bin_post,
  qyw_merchant_widget_suggestions_add_post,
  qyw_merchant_widget_suggestions_get_post,
  qyw_merchant_widget_suggestions_list_post,
  qyw_merchant_widget_deliver_paper_query_post,
  qyw_merchant_widget_deliver_paper_query_id_post,
  qyw_merchant_user_verify_invite_code_post,
  qyw_merchant_user_wechat_js_sign_get,
  qyw_merchant_widget_deliver_paper_post,
  qyw_merchant_user_uNameLogin_post,
  qyw_merchant_user_upload_image_sign_get,
  qyw_merchant_user_verifCurrMobile_post,
  qyw_merchant_user_verifyPass_post,
  qyw_merchant_user_pcMobileLogin_post,
  qyw_merchant_user_redirect_get,
  qyw_merchant_user_redirect_method_param_get,
  qyw_merchant_user_refreshToken_post,
  qyw_merchant_user_register_post,
  qyw_merchant_user_register_and_bind_post,
  qyw_merchant_user_sendVerifCode_post,
  qyw_merchant_user_login_openId_get,
  qyw_merchant_user_mobileLogin_post,
  qyw_merchant_user_modifyMobile_post,
  qyw_merchant_user_modifyPass_post,
  qyw_merchant_user_oauth_code_openid_get,
  qyw_merchant_user_oauth_wx_code_get,
  qyw_merchant_statement_updatePermission_get,
  qyw_merchant_user_contactUs_get,
  qyw_merchant_user_getUserInfoByToken_post,
  qyw_merchant_user_jftMerchantLogin_post,
  qyw_merchant_statement_getMultiDownloadList_post,
  qyw_merchant_statement_permissionIsEnable_post,
  qyw_merchant_statement_setStatementEmail_post,
  qyw_merchant_statement_statementFileDelete_post,
  qyw_merchant_statement_statementWxpush_post,
  qyw_merchant_statement_taskSendEmail_post,
  qyw_merchant_statement_getDownloadList_post,
  qyw_merchant_statement_getMerchantCreateDate_post,
  qyw_merchant_statement_getCountMchMonth_post,
  qyw_merchant_statement_getCountOrderList_post,
  qyw_merchant_statement_getCountMchDate_post,
  qyw_merchant_statement_getCountMchDateInfo_post,
  qyw_merchant_statement_getBindStatementEmail_post,
  qyw_merchant_statement_deleteExportRecord_post,
  qyw_merchant_statement_exportDataMultiMerchant_post,
  qyw_merchant_statement_exportDataSingleMerchant_post,
  qyw_merchant_shop_v3_list_post,
  qyw_merchant_sms_verify_sms_code_post,
  qyw_merchant_statement_countQywBaseOrder_post,
  qyw_merchant_shop_machines_list_post,
  qyw_merchant_shop_search_by_merchant_post,
  qyw_merchant_shop_update_shop_post,
  qyw_merchant_shop_list_post,
  qyw_merchant_shop_list_by_merchant_post,
  qyw_merchant_shop_list_simple_post,
  qyw_merchant_shop_del_post,
  qyw_merchant_shop_exists_manager_get,
  qyw_merchant_shop_get_shop_by_current_user_post,
  qyw_merchant_shop_get_shop_info_post,
  qyw_merchant_pos_list_post,
  qyw_merchant_pos_unbind_post,
  qyw_merchant_shop_add_shop_post,
  qyw_merchant_pos_channel_post,
  qyw_merchant_pos_get_post,
  qyw_merchant_payment_template_modify_post,
  qyw_merchant_payment_template_upload_post,
  qyw_merchant_pos_bind_post,
  qyw_merchant_pos_change_post,
  qyw_merchant_payment_template_get_by_merchant_post,
  qyw_merchant_payment_template_get_by_name_post,
  qyw_merchant_payment_template_list_post,
  qyw_merchant_payment_template_get_by_id_get,
  qyw_merchant_payment_template_download_get,
  qyw_merchant_order_shop_info_by_id_get,
  qyw_merchant_payment_template_add_post,
  qyw_merchant_payment_template_del_get,
  qyw_merchant_order_list_amount_get,
  qyw_merchant_order_list_by_current_user_post,
  qyw_merchant_order_orderConfirm_get,
  qyw_merchant_order_shop_info_by_code_get,
  qyw_merchant_order_detail_get,
  qyw_merchant_order_jhmOrderlist_export_post,
  qyw_merchant_order_list_get,
  qyw_merchant_merchant_verify_merchant_pwd_post,
  qyw_merchant_merchant_getMerchantLogo_get,
  qyw_merchant_merchant_modify_merchant_pwd_post,
  qyw_merchant_merchant_modify_merchantpwd_post,
  qyw_merchant_merchant_update_merchant_nearest_post,
  qyw_merchant_merchant_upload_merchant_image_post,
  qyw_merchant_merchant_get_merchant_list_by_manager_post,
  qyw_merchant_merchant_get_merchant_nearest_post,
  qyw_merchant_merchant_get_merchant_status_post,
  qyw_merchant_merchant_get_merchant_status_update_post,
  qyw_merchant_merchant_get_merchant_children_post,
  qyw_merchant_merchant_get_merchant_image_get,
  qyw_merchant_merchant_get_merchant_info_post,
  qyw_merchant_merchant_get_merchant_list_post,
  qyw_merchant_merchant_get_children_byOrgId_post,
  qyw_merchant_merchant_get_erpOrg_list_post,
  qyw_merchant_merchant_get_erpOrg_tradeMerchant_get,
  qyw_merchant_merchant_get_merchant_post,
  qyw_merchant_jftShop_queryQywStore_post,
  qyw_merchant_merchant_add_bind_post,
  qyw_merchant_merchant_add_merchant_post,
  qyw_merchant_merchant_get_appId_by_merchantId_get,
  qyw_merchant_jftData_queryQywBaseOrder_post,
  qyw_merchant_jftData_queryQywBaseOrderExcel_post,
  qyw_merchant_jftData_statementExcel_post,
  qyw_merchant_jftData_today_type_post,
  qyw_merchant_jftData_today_type_export_post,
  qyw_merchant_jftShop_getByIdOrName_post,
  qyw_merchant_jftData_orderConfirm_get,
  qyw_merchant_jftData_queryDataDictionary_post,
  qyw_merchant_jftData_order_list_post,
  qyw_merchant_jftData_countQywBaseOrder_post,
  qyw_merchant_jftData_deletExportRecordById_get,
  qyw_merchant_jftData_getJftOrderExportRecords_post,
  qyw_merchant_jftData_list_export_post,
  qyw_merchant_jftData_listExcel_post,
  qyw_merchant_health_delete,
  qyw_merchant_health_options,
  qyw_merchant_health_patch,
  qyw_merchant_jftData_account_statement_export_post,
  qyw_merchant_dict_test_get,
  qyw_merchant_health_get,
  qyw_merchant_health_head,
  qyw_merchant_health_post,
  qyw_merchant_health_put,
  qyw_merchant_dict_bank_get,
  qyw_merchant_dict_industry_get,
  qyw_merchant_dict_list_get,
  qyw_merchant_dict_location_get,
  qyw_merchant_dict_location_get_get,
  qyw_merchant_cos_getUploadSign_get,
  qyw_merchant_data_order_detail_post,
  qyw_merchant_data_order_list_post,
  qyw_merchant_data_order_list_no_post,
  qyw_merchant_data_today_type_post,
  qyw_merchant_assistant_register_code_info_get,
  qyw_merchant_assistant_remove_post,
  qyw_merchant_assistant_remove_binding_post,
  qyw_merchant_assistant_subscribe_get,
  qyw_merchant_cardTicket_selectAll_get,
  qyw_merchant_assistant_order_overview_get,
  qyw_merchant_assistant_promote_post,
  qyw_merchant_assistant_register_post,
  qyw_merchant_assistant_register_code_post,
  qyw_merchant_assistant_mobile_exists_get,
  qyw_merchant_assistant_modify_name_post,
  qyw_merchant_assistant_open_id_exists_get,
  qyw_merchant_assistant_order_list_get,
  qyw_merchant_assistant_detail_get,
  qyw_merchant_assistant_detail_openId_post,
  qyw_merchant_assistant_list_get,
  qyw_merchant_assistant_list_by_Mer_post,
  qyw_merchant_assistant_list_by_current_user_get,
  qyw_merchant_aggcode_stopping_request_post,
  qyw_merchant_assistant_after_login_get,
  qyw_merchant_assistant_clock_in_post,
  qyw_merchant_assistant_clock_out_post,
  qyw_merchant_assistant_demotion_post,
  qyw_merchant_aggcode_bind_to_shop_post,
  qyw_merchant_aggcode_list_by_merchant_post,
  qyw_merchant_aggcode_remove_bind_post,
  qyw_merchant_actuator_health_get,
  proxy_get,
  mock_get,
  _get,
  upload_post,
  query_get,
  restful_id_list_get
};
