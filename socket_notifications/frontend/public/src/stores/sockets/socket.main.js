// socket.main store file
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import { io } from "socket.io-client";

export const useSocketMainStore = defineStore('socket.main', {
    state() {
        return {
            isConnect: false,
            socket: null
        };
    },

    actions: {
        connect() {
            if (!this.isConnect) {
                this.socket = io('/');
                this.isConnect = true;
                this.socket.on('socket.myNameIs', (data) => {
                    toast.success('Connect to:' + data);
                });
                this.socket.on('message', (data) => {
                    console.log('catch message from server', data);
                });
                this.socket.on('ping', (data) => {
                    console.log('Received ping:', data);
                    toast.info(`Ping from user ${data.userId}: \n${new Date(data.timestamp).toLocaleString()}`, {
                        theme: 'colored',
                        position: toast.POSITION.BOTTOM_RIGHT,
                        transition: "zoom",
                        autoClose: 500
                    });
                });

                this.socket.on('disconnect', (data) => { /* ... */ });
            }
        },
        on(eventName, callBack) {
            this.socket.on(eventName, callBack);
        },
        off(eventName, callBack) {
            this.socket.off(eventName, callBack);
        }
    }
});
