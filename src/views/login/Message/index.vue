<template>
    <div class="login-message">
        <Header />
        <div class="message-main">
            <div class="message-hint">
                输入验证码
            </div>
            <div class="message-tel">
                验证码已发送至+<span class="tel">{{route.query.tel}}</span>
            </div>
            <div class="message-input">
                <input class="input" v-model="inputNumber1" maxlength="1" type="number" />
                <input class="input" v-model="inputNumber2" maxlength="1" type="number" />
                <input class="input" v-model="inputNumber3" maxlength="1" type="number"/>
                <input class="input" v-model="inputNumber4" maxlength="1" type="number" />
            </div>
            <div>
                倒计时
            </div>
        </div>
    </div>
   
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import { ref } from 'vue'
    import Header from '@/Layout/components/Header/index.vue'
    const route = useRoute()
    const inputNumber1 = ref()
    const inputNumber2 = ref()
    const inputNumber3 = ref()
    const inputNumber4 = ref()

</script>

<style lang="scss" scoped>
    .login-message {
        .message-main {
            padding: 20px 30px 0;
            .message-hint {
                letter-spacing: 2px;
                font-size: 20px;
                font-weight: 500;
            }
            .message-tel {
                letter-spacing: 0.5px;
                margin-top: 10px;
                color: #969696;
                .tel {
                    letter-spacing: 0;
                }
            }
            .message-input {
                margin-top: 50px;
                display: flex;
                align-items: center;
                height: 48px;
                width: 100%;
                justify-content:space-between;
                .input {
                    height: 100%;
                    width: 50px;
                    border: none;
                    border-bottom: 1px solid #D8D8D8;
                    outline: none;
                    padding: 0;
                    appearance: none;
                    text-align: center;
                    caret-color: #92B9FC;
                    font-size: 20px;
                }   
            }
        }
    }
</style>