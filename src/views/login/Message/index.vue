<template>
    <div class="login-message">
        <Header />
        <div class="message-main">
            <div class="message-hint">
                输入验证码
            </div>
            <div class="message-tel">
                验证码已发送至+<span>{{ route.query.start }}</span><span class="tel">{{route.query.tel}}</span>
            </div>
            <div class="message-input">
                <div class="inputDiv" @click="inputDivClick" v-for="(item,index) in 4" :key="index">{{ inputValue.toString()[index] }}</div>
                <!-- <input class="input" ref="input1" v-model="inputNumber1" autofocus maxlength="1" type="tel" />
                <input class="input" v-model="inputNumber2" maxlength="1" type="tel" />
                <input class="input" v-model="inputNumber3" maxlength="1" type="tel"/>
                <input class="input" v-model="inputNumber4" maxlength="1" type="tel" /> -->
            </div>
            <input  v-model="inputValue" ref="input" type="number" pattern="[0-9]*" @input="inputFunc" class="input" />
            <van-count-down :time="time" ref="countDown">
                <template #default="timeData">
                    <span class="seconds" v-if="timeData.seconds != 0">{{ timeData.seconds }}后重新获取</span>
                    <span class="seconds" v-else @click="getMessage">重新获取</span>
                </template>
            </van-count-down>
        </div>
    </div>
   
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import { ref, onMounted, watch } from 'vue'
    import Header from '@/Layout/components/Header/index.vue'
    const route = useRoute()
    // const msgValue = ref([])
    const input = ref()
    const inputValue = ref('')
    const time = ref(60 * 1000)
    const countDown = ref()
    const inputFunc = (e) => {
        let value = e.target.value
        if(value.length > 4) {
            inputValue.value = value.slice(0,4)
        }
    }
    const inputDivClick = () => {
        input.value.focus()
    }
    onMounted(() => {
        input.value.focus()
    })

    watch(inputValue,(newValue,oldValue) => {
        if(newValue.toString().length >= 4) {
            console.log(inputValue.value)
        }
    })

    const getMessage = () => {
        countDown.value.reset()
        console.log(countDown.value)
    }
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
                .inputDiv {
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
                    // 解决ios下边框有圆角的问题
                    border-radius: 0;
                }   
            }
            .input {
                opacity: 0;
                z-index: -999;
            }
            .seconds {
                letter-spacing: 0.5px;
                color: #969696;
            }
        }
    }
</style>