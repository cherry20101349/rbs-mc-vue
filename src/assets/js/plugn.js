import { MessageBox } from 'element-ui';
import axios from 'axios';
export default{
    install(Vue){
        const host_url = '/rbs-mc-web';
        // 公共ajax查询,post方法
        const ajaxSubmit = function (actionDo, callback) {
            let url = host_url + actionDo;
            axios.post(url, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res) => {

                if(res.data.errorCode==="PLT0013"){
                    MessageBox('登录超时，请重新登录');
                    this.$router.push('/login');
                }else{
                    let resData;
                    resData = typeof res.data == 'string' ? JSON.parse(res.data) : res.data;
                    callback(resData)
                }
            }, (res) => {
                MessageBox("系统繁忙，请稍后重试");
            })
        };

        // vue全局方法注入
        Vue.prototype.ajaxSubmit    = ajaxSubmit
        // Vue.prototype.formSubmitPost = formSubmitPost
        // Vue.prototype.dateFormat    = dateFormat
        // Vue.prototype.nst           = nst
        // Vue.prototype.rmoney        = rmoney
        // Vue.prototype.daysAgo       = daysAgo
        // Vue.prototype.daysAgoFormat = daysAgoFormat
        // Vue.prototype.accountFormat = accountFormat
        // Vue.prototype.certNoToAge = certNoToAge
        // Vue.prototype.host_url = host_url
        // Vue.prototype.serialize = serialize
        // Vue.prototype.amountReg = amountReg
        // Vue.prototype.mobileReg = mobileReg
    }
}
