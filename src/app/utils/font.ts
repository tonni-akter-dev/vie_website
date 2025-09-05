import localFont from "next/font/local";

export const creatoDisplay = localFont({
    src: [
        {
            path: '../../../public/fonts/creato/CreatoDisplay-Black.otf',
            weight: "200",
            style: "normal",
        },
        {
            path: '../../../public/fonts/creato/CreatoDisplay-Light.otf',
            weight: "300",
            style: "normal",
        },
        {
            path: '../../../public/fonts/creato/CreatoDisplay-Regular.otf',
            weight: "400",
            style: "normal",
        },
        {
            path: '../../../public/fonts/creato/CreatoDisplay-Medium.otf',
            weight: "500",
            style: "normal",
        },
        {
            path: '../../../public/fonts/creato/CreatoDisplay-Bold.otf',
            weight: "700",
            style: "normal",
        },
        {
            path: '../../../public/fonts/creato/CreatoDisplay-ExtraBold.otf',
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-creato-display",
    display: "swap",
});

export const metapro = localFont({
    src: [
        {
            path: '../../../public/fonts/meta-pro/FFMetaProLight.ttf',
            weight: "300",
            style: "normal",
        },
        {
            path: '../../../public/fonts/meta-pro/FFMetaProRegular.ttf',
            weight: "400",
            style: "normal",
        },
        {
            path: '../../../public/fonts/meta-pro/FFMetaProMedium.ttf',
            weight: "500",
            style: "normal",
        },
        {
            path: '../../../public/fonts/meta-pro/FFMetaProBold.ttf',
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-meta-pro",
    display: "swap",
});
export const mergeone = localFont({
    src: [
  
        {
            path: '../../../public/fonts/merge-one/MergeOne-Regular.ttf',
            weight: "400",
            style: "normal",
        }
    ],
    variable: "--font-merge-one",
    display: "swap",
});
