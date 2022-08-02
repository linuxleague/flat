import { flatServices } from "@netless/flat-services";
import type { AgoraRTCElectron } from "@netless/flat-rtc-agora-electron";

export function initFlatServices(): void {
    flatServices.register("videoChat", async () => {
        const { AgoraRTCElectron } = await import("@netless/flat-rtc-agora-electron");

        const agoraRtcSDK$ = (window as any).agoraRtcSDK$;
        if (!agoraRtcSDK$) {
            throw new Error("Missing agora rtc electron sdk global");
        }

        return new Promise(resolve => {
            let instance: AgoraRTCElectron | undefined;
            agoraRtcSDK$.subscribe((rtcEngine: any) => {
                if (rtcEngine) {
                    if (instance) {
                        instance.setRTCEngine(rtcEngine);
                    } else {
                        instance = new AgoraRTCElectron({
                            APP_ID: process.env.AGORA_APP_ID,
                            rtcEngine,
                        });
                        resolve(instance);
                    }
                }
            });
        });
    });
}