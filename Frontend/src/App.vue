<script setup>
import { ref } from 'vue'
import { url, sendKey, sendText } from './api.js'

const text = ref('')
const customKey = ref('')
</script>

<template>
    <div
        class="w-screen min-h-screen bg-slate-900 text-slate-200 flex justify-center items-center"
    >
        <div class="rounded-xl bg-gradient-to-br from-indigo-500 to-green-500">
            <div class="rounded-xl bg-black m-[1px] p-10 space-y-5">
                <div>
                    <h1 class="text-3xl font-semibold">InputSender</h1>
                    <p class="text-lg">send inputs to your friend's machine</p>
                </div>
                <div>
                    <label class="block text-sm"
                        >Host
                        <a :href="`https://${url}`" class="underline" v-if="url"
                            >({{ url }})</a
                        ></label
                    >
                    <input
                        class="x-input"
                        v-model="url"
                        placeholder="localhost:3000"
                    />
                </div>

                <div class="space-x-2">
                    <button class="x-btn" @click="sendKey('w')">W</button>
                    <button class="x-btn" @click="sendKey('a')">A</button>
                    <button class="x-btn" @click="sendKey('s')">S</button>
                    <button class="x-btn" @click="sendKey('d')">D</button>
                    <button class="x-btn" @click="sendKey('space')">
                        SPACE
                    </button>
                </div>

                <div>
                    <label class="text-sm">Send text</label>
                    <div class="flex">
                        <input class="x-input" v-model="text" />
                        <button class="x-btn" @click="sendText(text)">></button>
                    </div>
                </div>

                <div>
                    <label class="text-sm">Send custom key</label>
                    <div class="flex">
                        <input class="x-input" v-model="customKey" />
                        <button class="x-btn" @click="sendKey(customKey)">
                            >
                        </button>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    </div>
</template>
