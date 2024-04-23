import { reactive } from "vue";
import { RouteRecordRaw } from "vue-router";

export const PCPage =
    {
        path: "/pcvideo",
        name: "pcvideo",
        meta: reactive({
            hiddenSide: true,
            hiddenHeader: true,
            title: '电脑视频页面'
        }),
        component: () =>
            import(/* webpackChunkName: "pcvideo" */ "@/views/video/PCPage/pages/pcvideo.vue"),
        children: [
        ]
    } as RouteRecordRaw
