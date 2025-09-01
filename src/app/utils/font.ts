import localFont from "next/font/local";
// import '../../../public/fonts/CreatoDisplay-Thin.otf'

export const clashDisplay = localFont({
    src: [
        {
            path: '../../../public/fonts/CreatoDisplay-Black.otf',
            weight: "200",
            style: "normal",
        },
        {
            path: '../../../public/fonts/CreatoDisplay-Light.otf',
            weight: "300",
            style: "normal",
        },
        {
            path: '../../../public/fonts/CreatoDisplay-Regular.otf',
            weight: "400",
            style: "normal",
        },
        {
            path: '../../../public/fonts/CreatoDisplay-Medium.otf',
            weight: "500",
            style: "normal",
        },
        {
            path: '../../../public/fonts/CreatoDisplay-Bold.otf',
            weight: "700",
            style: "normal",
        },
        {
            path: '../../../public/fonts/CreatoDisplay-ExtraBold.otf',
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-clash-display",
    display: "swap",
});
