import { ref } from 'vue'

export const url = ref('localhost:3000')

export const sendKey = async (key) => {
    const res = await fetch(`http://${url.value}/send-key`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `key=${key}`
    })

    return res
}

export const sendText = async (text) => {
    const res = await fetch(`http://${url.value}/send-text`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `text=${text}`
    })

    return res
}
