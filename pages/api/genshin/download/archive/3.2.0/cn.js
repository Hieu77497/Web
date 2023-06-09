export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.2.0",
                    path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/YuanShen_3.2.0.zip",
                    size: "86983573504",
                    md5: "f171639eddec395bba7b3c92c4db7860",
                    entry: "YuanShen.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/Audio_Chinese_3.2.0.zip",
                            size: "15128770640",
                            md5: "d55b4bdcef7fb27c2cad0c0f25051538",
                            package_size: "7559142440",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/Audio_English(US)_3.2.0.zip",
                            size: "17276254288",
                            md5: "62dab9e438070b3c7f2188d2074e3139",
                            package_size: "8632884264",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/Audio_Japanese_3.2.0.zip",
                            size: "19208989572",
                            md5: "038cdeb6506584f7f30a92bb66e36fda",
                            package_size: "9599251906",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/Audio_Korean_3.2.0.zip",
                            size: "14849597766",
                            md5: "34ec7f390cefe961cc7d24f03de7a169",
                            package_size: "7419556003",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/YuanShen_3.2.0.zip.001",
                            md5: "4e2053d30b7d69c1a7c87f6aac223213",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/YuanShen_3.2.0.zip.002",
                            md5: "93492b227feda1537bc133f4cae64fe0",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/YuanShen_3.2.0.zip.003",
                            md5: "e1122a02dcdc389d9743055af6d93adc",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20221024103540_fp3L3cHoDpo9eNeT/YuanShen_3.2.0.zip.004",
                            md5: "1d35c4375d1819db992e6759938d427e",
                        },
                    ],
                    package_size: "43486543872",
                },
                diffs: [
                    {
                        name: "game_3.1.0_3.2.0_hdiff_jXM0eDiqdLA8oTf3.zip",
                        version: "3.1.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.1.0_3.2.0_hdiff_jXM0eDiqdLA8oTf3.zip",
                        size: "14176334992",
                        md5: "B9A1B0F33CA3EDDEA563149D72A242DC",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.1.0_3.2.0_hdiff_5D4J7cwHRpSbVWsC.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.1.0_3.2.0_hdiff_5D4J7cwHRpSbVWsC.zip",
                                size: "1219939316",
                                md5: "EB9F59B424CD71EEDC7328D298B65364",
                                package_size: "562790324",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.1.0_3.2.0_hdiff_GFskoYScLp96dgXn.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.1.0_3.2.0_hdiff_GFskoYScLp96dgXn.zip",
                                size: "1456968395",
                                md5: "9467EF4B259927013F0C944E4CD42DBD",
                                package_size: "694097365",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.1.0_3.2.0_hdiff_rR6sEOPDk70Wwfgq.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.1.0_3.2.0_hdiff_rR6sEOPDk70Wwfgq.zip",
                                size: "1540343773",
                                md5: "CCF9B8BC090DF6F3D3DA7AC0963BE228",
                                package_size: "683825022",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.1.0_3.2.0_hdiff_irZevnPJlQc82bNw.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.1.0_3.2.0_hdiff_irZevnPJlQc82bNw.zip",
                                size: "1175916809",
                                md5: "49F1F7D398BA3F881A39A6A88DD23718",
                                package_size: "546578918",
                            },
                        ],
                        package_size: "6915681134",
                    },
                    {
                        name: "game_3.0.0_3.2.0_hdiff_VTro0ZXq4dKa6phJ.zip",
                        version: "3.0.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.0.0_3.2.0_hdiff_VTro0ZXq4dKa6phJ.zip",
                        size: "20409290660",
                        md5: "2E3F33112FE95D194CA11F6F50C30FD0",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.0.0_3.2.0_hdiff_BOTxLFcUIoQVgtG0.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.0.0_3.2.0_hdiff_BOTxLFcUIoQVgtG0.zip",
                                size: "2169822499",
                                md5: "856050A962B238BC7222780D1FC72717",
                                package_size: "997555744",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.0.0_3.2.0_hdiff_txH1bUAnoR5MpI3L.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.0.0_3.2.0_hdiff_txH1bUAnoR5MpI3L.zip",
                                size: "2589963216",
                                md5: "846099FC45716618ED6E295AB2F9E587",
                                package_size: "1235488082",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.0.0_3.2.0_hdiff_XnH8s3zGxZYVg9LJ.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.0.0_3.2.0_hdiff_XnH8s3zGxZYVg9LJ.zip",
                                size: "2704945881",
                                md5: "46F2EA749966C393EF7718D344A70217",
                                package_size: "1190569625",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.0.0_3.2.0_hdiff_FCaKwoLkWQpsPjUh.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.0.0_3.2.0_hdiff_FCaKwoLkWQpsPjUh.zip",
                                size: "2143515003",
                                md5: "13D1401CA38DDF2843869B3EF39AC09C",
                                package_size: "992833603",
                            },
                        ],
                        package_size: "10011831399",
                    },
                ],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchcn.yuanshen.com/client_app/plugins/DXSETUP.zip",
                        size: "100647892",
                        md5: "CA2AC3835D7D7DA6CB8624FEFB177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://ys.mihoyo.com/launcher",
            force_update: null,
            pre_download_game: null,
            deprecated_packages: [
                { name: "game_2.8.0_3.1.0_hdiff_oPrDhBNzkmqt1WnV.zip", md5: "B003BD8C864C4D0170EE2B1B53CD5B8D" },
                { name: "zh-cn_2.8.0_3.1.0_hdiff_xCRdgPaZJ5oMw4fA.zip", md5: "A3EC1665ECADC7345345F5C1F424992B" },
                { name: "en-us_2.8.0_3.1.0_hdiff_gyKJUEuLpQGStYmO.zip", md5: "EFCA4EAB77F8A3169E71D1BE10B3F76A" },
                { name: "ja-jp_2.8.0_3.1.0_hdiff_FmbRHyYslrU80GVW.zip", md5: "CE565D26AA09E6F5C6A0FFFC02326C69" },
                { name: "ko-kr_2.8.0_3.1.0_hdiff_3glVNyU1Jck5QGip.zip", md5: "6D89CBD3232A5F286F76FC3860464AE1" },
                { name: "game_3.0.0_3.1.0_hdiff_3dlivNRan0Dq7ykP.zip", md5: "5E644B932C6A2651A52C537DACE82C89" },
                { name: "zh-cn_3.0.0_3.1.0_hdiff_pkNHKFGT9oVOc7IX.zip", md5: "8CEE35511C4690ECC19C666D3176C3EA" },
                { name: "en-us_3.0.0_3.1.0_hdiff_oPK43vBzGi0lRncy.zip", md5: "168D74D5E009A23BC69D73F4A3244AA4" },
                { name: "ja-jp_3.0.0_3.1.0_hdiff_CsobdD1igS0T6jmR.zip", md5: "99AEB44051E41EC19346BBBA608251D5" },
                { name: "ko-kr_3.0.0_3.1.0_hdiff_BTGW6aCo8HVUcsm0.zip", md5: "EAD9F42998C08BACB27C6105260C44A4" },
                { name: "YuanShen_3.1.0.zip", md5: "acfa83a37b0884f6b3c767f19691043c" },
                { name: "Audio_Chinese_3.1.0.zip", md5: "74251ac421d52fcc22ba30c03c05c2ac" },
                { name: "Audio_English(US)_3.1.0.zip", md5: "f55a9306932867e3b6161064e45490d9" },
                { name: "Audio_Japanese_3.1.0.zip", md5: "29a1dfee7fcc730be7b391ff7c1720a4" },
                { name: "Audio_Korean_3.1.0.zip", md5: "57b2ca7132fd5dc67aeb5858a38bbf5e" },
                { name: "game_2.7.0_3.0.0_hdiff_jWBmFtXMu3v17cg8.zip", md5: "4F5BACA67FF47A629D53D149D54E6EE8" },
                { name: "zh-cn_2.7.0_3.0.0_hdiff_U5s7ShiHnT8M0JPq.zip", md5: "3B962D44621B6B1849FA6E561EA7F38D" },
                { name: "en-us_2.7.0_3.0.0_hdiff_1Bevc4h5Js9U0aNy.zip", md5: "3C5C0734111530478E080A6482E70031" },
                { name: "ja-jp_2.7.0_3.0.0_hdiff_sQ3Snd7JCObwVkpK.zip", md5: "89814FBB8BE048AA9A25DB49EBCD3D2B" },
                { name: "ko-kr_2.7.0_3.0.0_hdiff_OEeh67CLowc25ijF.zip", md5: "5193DD9C0CD169BAAC274CBF8C5F03B6" },
                { name: "game_2.8.0_3.0.0_hdiff_6azJoC5lYS1EUycW.zip", md5: "B0D8407E9EC545FEFC9855ACB467893F" },
                { name: "zh-cn_2.8.0_3.0.0_hdiff_0osJAObthKPmDc3r.zip", md5: "7B534E5F6087E0B237027F48E3B95D63" },
                { name: "en-us_2.8.0_3.0.0_hdiff_qHeyaTLsu6IcEb5J.zip", md5: "4B0275D694C20EFE5F87F1EAF5E646E1" },
                { name: "ja-jp_2.8.0_3.0.0_hdiff_15hvOf7Fbrslt3W9.zip", md5: "872FC08C821961DC6B09A056F452CC1D" },
                { name: "ko-kr_2.8.0_3.0.0_hdiff_iNx3dcsKA81TtRUH.zip", md5: "CD970BCE6D415FCFBBF3D12713F27CBF" },
                { name: "YuanShen_3.0.0.zip", md5: "cd1437c10a30127c61dc25da5d6e1d6b" },
                { name: "Audio_Chinese_3.0.0.zip", md5: "c4decdaa35fe28db2e3377d731b61509" },
                { name: "Audio_English(US)_3.0.0.zip", md5: "9301e3ef3d4bd2f9578e9a7c3231044f" },
                { name: "Audio_Japanese_3.0.0.zip", md5: "eec13fe0b7d510e8b2e387ab3b0d1ce9" },
                { name: "Audio_Korean_3.0.0.zip", md5: "df75295aace0ce387f4016873a374b99" },
                { name: "game_2.6.0_2.8.0_hdiff_z8sdMlFY30RawybQ.zip", md5: "FA58393058756638FDCCDC67CFB99737" },
                { name: "zh-cn_2.6.0_2.8.0_hdiff_3XkJ69EusVlhK0ZT.zip", md5: "8432610F18718D86A72C43B7AD0D7183" },
                { name: "en-us_2.6.0_2.8.0_hdiff_76vp3Hn95syWFSTf.zip", md5: "4898E8460BDF15C25CBC8B3D4C962331" },
                { name: "ja-jp_2.6.0_2.8.0_hdiff_eVi6nIOGaAmKxNtp.zip", md5: "C31131ADC8905C66D25820D04F756055" },
                { name: "ko-kr_2.6.0_2.8.0_hdiff_R1Yv6U7ESAfenGgO.zip", md5: "7AFF1464A8640A88B7258A9BAFF4C974" },
                { name: "game_2.7.0_2.8.0_hdiff_9yer4R2xEMmBnLpl.zip", md5: "76CCFA2D7C9E6B57FFF43AB808F9EAF0" },
                { name: "zh-cn_2.7.0_2.8.0_hdiff_RQ423ptsTU0xBlvi.zip", md5: "71F942BADD7BED1B3990CD05B10EF5E2" },
                { name: "en-us_2.7.0_2.8.0_hdiff_bz3cEd7CMIsq8ak9.zip", md5: "9B8C6B2C4C6CC7C19E0A8067DF02A09B" },
                { name: "ja-jp_2.7.0_2.8.0_hdiff_5HizfaeoOwqklumD.zip", md5: "FC1F11C0A03E0B65EA9FE6EFB365CC67" },
                { name: "ko-kr_2.7.0_2.8.0_hdiff_eXNaWnorU52ysCxB.zip", md5: "8AE719F7ABCC33E77720F74C6B8412EB" },
                { name: "YuanShen_2.8.0.zip", md5: "43bbde991356443f9f6fcc33e27f347a" },
                { name: "Audio_Chinese_2.8.0.zip", md5: "0bbc8b11a78b7076888fb9c8e70d56ae" },
                { name: "Audio_English(US)_2.8.0.zip", md5: "c4ae665388e8c75ba5864e5fc580fa55" },
                { name: "Audio_Japanese_2.8.0.zip", md5: "e8de28d3ae2173d114f6717918fdb03e" },
                { name: "Audio_Korean_2.8.0.zip", md5: "d47e5d2cafdfaf634d35788e04cced5f" },
            ],
            sdk: null,
            deprecated_files: [{ name: "YuanShen_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}
