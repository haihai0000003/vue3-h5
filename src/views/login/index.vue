<template>
    <div class="login">
        <Header />
        <div class="login-main">
            <div class="login-title">
                <div class="title-log">
                    <img class="log" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg">
                </div>
                <div class="title-hint">登录体验更多精彩</div>
            </div>
            <div class="login-input">
                <van-config-provider :theme-vars="telVars">
                    
                    <van-field style="font-size: 18px;" :maxlength="13" v-model="tel" type="tel" placeholder="请输入手机号" label="手机号">
                        <template #label>
                            <div>
                                <span style="marginRight:3px;">+{{ beforeTel }}</span><van-icon  size="16px" name="arrow-down" />
                            </div>
                        </template>
                        <template #input>
                            <input :maxlength="13" ref="inputTel" @input="telInput" @paste.prevent="telPaste" pattern="[0-9]*" v-model="tel" class="van-field__control" type="tel" placeholder="请输入手机号" label="手机号"/>
                        </template>
                    </van-field>
                </van-config-provider>
            </div>
            <div class="login-btn">
                <van-button type="primary" :disabled="disabled" @click="getMessage" block>获取短信验证码</van-button>
            </div>
            <div class="login-agree">
                <van-checkbox @change="changeAgree" shape="square" :class="{'animate__animated animate__headShake': showAni}" class="login-checkbox" icon-size="14px" v-model="checked">
                    <span class="agree-desc">
                        已阅读并同意<span>“用户协议”</span>和<span>“隐私政策”</span>
                    </span>
                </van-checkbox>
            </div>
        </div>
        <div class="login-icon">
            <div class="icon-circle">
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e0ff12435b30910520c9a3aac9b90487.svg" />
            </div>
            
            <div class="icon-circle">
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512.268258 64.433103c-247.183323 0-447.569968 200.380501-447.569968 447.563825 0 247.189467 200.385621 447.570992 447.569968 447.570992s447.569968-200.380501 447.569968-447.569968c0-247.184347-200.386645-447.564849-447.569968-447.564849z m252.85872 584.692787c-18.997168 16.287968-43.668709-53.628042-47.2134-42.875198-8.642616 26.161294-12.695154 43.646184-38.148944 72.127602-1.35972 1.521494 29.43056 12.647032 38.148944 36.396051 8.346713 22.756875 24.596797 58.811973-81.725503 70.125906-62.389428 6.635801-107.471099-33.244533-111.964932-32.85648-8.325212 0.734126-4.618747 0-13.568528 0-7.321804 0-7.807126 0.534468-14.69685 0-1.899307-0.140272-22.632985 32.85648-115.364231 32.85648-71.878798 0-90.48177-45.243445-76.032701-70.125906 14.464428-24.877342 38.579999-32.122354 35.176604-36.06636-16.73643-19.39546-28.287904-40.1404-35.176604-58.882621-1.705793-4.666869-3.135137-9.209848-4.262434-13.574672-2.611931-10.008479-22.627866 58.76385-44.111028 42.875198-21.483162-15.883533-19.567472-56.309597-5.659014-95.003248 14.033372-39.006959 49.37687-76.562049 49.771065-84.854496 1.412962-30.849665-3.044011-35.975235 0-44.078263 6.780169-18.149391 15.034732-11.190043 15.034733-20.609788 0-118.64476 88.172909-214.829571 196.933079-214.829571 108.755051 0 196.928984 96.184811 196.928984 214.829571 0 4.554242 11.815637 0 17.474651 20.609788 1.165181 4.256291 1.968931 20.684531 0.58771 44.078263-0.658358 11.238165 29.954789 24.914202 45.777913 84.854496 15.845649 59.945414 0 88.215912-7.909514 95.003248z" fill="#68A5E1" />
                </svg>
            </div>
            <div class="icon-circle">
                <svg class="icon" viewBox="0 0 1325 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M240.941176 512c0 233.411765 188.235294 421.647059 421.647059 421.647059s421.647059-188.235294 421.647059-421.647059S896 90.352941 662.588235 90.352941 240.941176 278.588235 240.941176 512z" fill="#5A9EF7" /><path d="M751.435294 564.705882s15.058824-21.082353 30.117647-63.247058c16.564706-42.164706 18.070588-66.258824 18.070588-66.258824l-120.470588-1.505882v-40.658824l146.070588-1.505882v-30.117647H677.647059v-66.258824h-72.282353V361.411765H466.823529v30.117647l137.035295-1.505883v45.176471h-108.42353v24.094118h225.882353c-1.505882 15.058824-6.023529 28.611765-10.541176 42.164706-9.035294 22.588235-18.070588 43.670588-18.070589 43.670588s-105.411765-37.647059-162.635294-37.647059c-55.717647 0-123.482353 22.588235-131.011764 87.341176-6.023529 64.752941 31.623529 100.894118 85.835294 112.941177 52.705882 12.047059 102.4 0 146.070588-21.082353 43.670588-21.082353 85.835294-69.270588 85.835294-69.270588l224.376471 109.929411s13.552941-21.082353 24.094117-40.658823c7.529412-13.552941 13.552941-28.611765 19.576471-42.164706l-233.411765-79.811765z m-231.905882 106.917647c-79.811765 0-94.870588-39.152941-94.870588-66.258823 0-27.105882 16.564706-58.729412 84.329411-63.247059 66.258824-4.517647 158.117647 48.188235 158.117647 48.188235s-67.764706 81.317647-147.57647 81.317647z" fill="#FFFFFF" /></svg>
            </div>
            <div class="icon-circle">
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#231F20" /></svg>
            </div>
        </div>
        <teleport v-if="popverShow" to="body">
            <Poppver content="请先勾选同意后再进行登录" :domDistance="domDistance.data" />
        </teleport>
    </div>

</template>
<script setup>
    import Header from '@/Layout/components/Header/index.vue'
    import { ref,reactive,computed,watch, nextTick, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import  debounce  from 'lodash/debounce'
    import Poppver from '@/views/components/Poppver/index.vue'
    const router = useRouter()
    const tel = ref('')
    const checked = ref(false)
    const showAni = ref(false)
    const inputTel = ref()
    const beforeTel = ref('86')
    const popverShow = ref(false)
    const disabled = computed(() => tel.value.toString().length != 13)
    const domDistance = reactive({data: {}})
    onMounted(() => {
        const dom = document.getElementsByClassName('van-checkbox__icon')[0].getBoundingClientRect()
        domDistance.data = dom
        // Object.assign(domDistance,dom)
        console.log(domDistance)
    })

    const telVars = reactive({
        fieldLabelWidth: '3em',
        cellHorizontalPadding: '0'
    })

    
    const telFilter = (value) => {
        return value.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3').trim()

        
    }
    // 粘贴事件,取出粘贴文本中的数字
    const telPaste = (e) => {
        const str = e.clipboardData.getData('text')
        const num = str.slice(0,11)
        const numFilter = strFilter(num)
        nextTick(() => {
            tel.value = telFilter(numFilter)
        })
    }

    // 取出字符串中的数字
    const strFilter = (str) => {  
        let matches = str.match(/\d+/g);  
        if (matches == null) {  
            return "";  
        } else {  
            return matches.join("");  
        }  
    }

    const telInput = (event) => {
        let value = event.target.value
        if(event.inputType == 'insertText') {
            value = value.replace(/\s/g, "")
            let numericRegex = /^\d*$/
            if (!numericRegex.test(value)) {
                value = value.slice(0, value.length - 1); // 删除最后一个非数字字符
            }
            tel.value = telFilter(value)
        } else {
            // 记录光标位置，每次删除后设置记录的光标位置，否则会错乱
            const valueStart = inputTel.value.selectionStart
            tel.value = telFilter(value)
            if(valueStart) {
                nextTick(() => {
                    inputTel.value.focus()
                    inputTel.value.setSelectionRange(valueStart ,valueStart)
                })
            }
        }
    }

    const changeAgree = (e) => {
        if(e) {
            popverShow.value = false
        }
    }

    const useDebounce = debounce(() => {
        popverShow.value = false
    },3000)

    const getMessage = () => {
        if(!checked.value) {
            popverShow.value = true
            showAni.value = true
            setTimeout(() => {
                showAni.value = false
            },1000)
            useDebounce()
            
        } else {
            router.push({path: '/login/message',query: {tel:tel.value.replace(/\s/g, ''),start: beforeTel.value}})
        }
    }
    
    
</script>
<style scoped lang="scss">
    .login {
        height: 100%;
        position: relative;
        .login-icon {
            width:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: 5%;
            .icon-circle {
                width: 24px;
                height: 24px;
                background-color:#f2f3f5;
                margin-right: 15px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    height: 20px;
                    cursor: pointer;
                }
                svg {
                    height: 20px;
                    cursor: pointer;
                }
            }
        }
    }
    .login-main {
        padding: 20px 30px 0;
        height: calc(100% - var(--van-nav-bar-height) - 20px);
        .login-title {
            display: flex;
            align-items: center;
            letter-spacing: 2px;
            margin-bottom: 60px;
            margin-top: 10px;
            .title-hint {
                font-size: 18px;
                font-weight: 500;
            }
            .title-log {
                margin-right: 10px;
                .log {
                    height: 24px;
                    width: 31px;
                }
            }
        }
        .login-btn {
            margin-top: 30px;
        }
        .login-input {
            border-bottom: 1px solid #D7D7D7;
        }
        .login-agree {
            margin-top: 20px;
            .login-checkbox {
                display: flex;
                justify-content: center;
                .agree-desc {
                    font-size: 12px;
                    text-align: center;
                    line-height: 24px;

                }
            }
            
            
        }
        
    }
</style>