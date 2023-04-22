export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.5.0",
                    path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/YuanShen_3.5.0.zip",
                    size: "95917105480",
                    md5: "11f9a0d145f5d9b48e16ce6365797fd0",
                    entry: "YuanShen.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/Audio_Chinese_3.5.0.zip",
                            size: "18135247750",
                            md5: "72f11e238fb121676e1d7763fc92f934",
                            package_size: "9062380995",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/Audio_English(US)_3.5.0.zip",
                            size: "20712228128",
                            md5: "846214c62cbfc3d832cfd0f740c45956",
                            package_size: "10350871184",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/Audio_Japanese_3.5.0.zip",
                            size: "23289208506",
                            md5: "0db0c92557bf4601bc93e564a22fa38f",
                            package_size: "11639361373",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/Audio_Korean_3.5.0.zip",
                            size: "17727225856",
                            md5: "a333211d84effc592f34f81335265555",
                            package_size: "8858370048",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/YuanShen_3.5.0.zip.001",
                            md5: "0698a108cc1e2e6499b7332413ef8e4d",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/YuanShen_3.5.0.zip.002",
                            md5: "d57010e12344277390536de067e10caf",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/YuanShen_3.5.0.zip.003",
                            md5: "540e2a579f5fb66ec98a2b98db752065",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/YuanShen_3.5.0.zip.004",
                            md5: "dce694e4057b5857c8f2b0d30c4d8b58",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/YuanShen_3.5.0.zip.005",
                            md5: "d8383a9a7ca41c6ce32dc74fa6e7a13f",
                        },
                    ],
                    package_size: "47953309860",
                },
                diffs: [
                    {
                        name: "game_3.4.0_3.5.0_hdiff_RBj0E9Uo1POz7Yhv.zip",
                        version: "3.4.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.4.0_3.5.0_hdiff_RBj0E9Uo1POz7Yhv.zip",
                        size: "13124101472",
                        md5: "1E83F87C5442A0295B723B7792D6B51B",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.4.0_3.5.0_hdiff_w4jItV7RJfQv3hgk.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.4.0_3.5.0_hdiff_w4jItV7RJfQv3hgk.zip",
                                size: "1040984129",
                                md5: "F412D355608E37AE39FA82C2E559371E",
                                package_size: "476370781",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.4.0_3.5.0_hdiff_nre0EBZXk6h8FLqW.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.4.0_3.5.0_hdiff_nre0EBZXk6h8FLqW.zip",
                                size: "1261138530",
                                md5: "11E12A906C92146D5B42F86B41E2F0F1",
                                package_size: "599265635",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.4.0_3.5.0_hdiff_RlTo2m4S6jdhJNrE.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.4.0_3.5.0_hdiff_RlTo2m4S6jdhJNrE.zip",
                                size: "1284581265",
                                md5: "8859D71F34B2ACDB7D1B68584A297E40",
                                package_size: "569714018",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.4.0_3.5.0_hdiff_7sHCG30hR4VjuplP.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.4.0_3.5.0_hdiff_7sHCG30hR4VjuplP.zip",
                                size: "981816231",
                                md5: "9FC0CEF6828CE2EA9C3A60521C1E107C",
                                package_size: "455769609",
                            },
                        ],
                        package_size: "6384109680",
                    },
                    {
                        name: "game_3.3.0_3.5.0_hdiff_NdjQTeCvMbqKpJPU.zip",
                        version: "3.3.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.3.0_3.5.0_hdiff_NdjQTeCvMbqKpJPU.zip",
                        size: "16820109308",
                        md5: "5542ED38164E623AED5E3DEA246F7544",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.3.0_3.5.0_hdiff_jzV0to5Q8y7E3FSu.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.3.0_3.5.0_hdiff_jzV0to5Q8y7E3FSu.zip",
                                size: "1877353856",
                                md5: "CDB9CC6870B625DFB150A1DE404A7561",
                                package_size: "868771221",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.3.0_3.5.0_hdiff_kGLoDHenSgAJXIMi.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.3.0_3.5.0_hdiff_kGLoDHenSgAJXIMi.zip",
                                size: "2257477254",
                                md5: "1E3C9B22C9B10579EC6C52EB0F67959D",
                                package_size: "1076496468",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.3.0_3.5.0_hdiff_YwCEOIdHamGMU5QL.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.3.0_3.5.0_hdiff_YwCEOIdHamGMU5QL.zip",
                                size: "2305501050",
                                md5: "F170EC24E77EEA5D8F45A2F89A345D0A",
                                package_size: "1042521982",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.3.0_3.5.0_hdiff_IR2VGLNCd5eEpo7K.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.3.0_3.5.0_hdiff_IR2VGLNCd5eEpo7K.zip",
                                size: "1760741382",
                                md5: "99E684C156079F249BFDCAED51F7A322",
                                package_size: "826444759",
                            },
                        ],
                        package_size: "8220600304",
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
                { name: "game_3.2.0_3.4.0_hdiff_tSlT9q25dMCs4iR1.zip", md5: "79F32D1BC496C05584F6A9A455AA2340" },
                { name: "zh-cn_3.2.0_3.4.0_hdiff_8HCnhOvVDjYPZJpX.zip", md5: "26281EB3156F06A8CCE542FA44EE926A" },
                { name: "en-us_3.2.0_3.4.0_hdiff_1IavOL7mSrCybnt4.zip", md5: "FAD6D46EAC3246FA0261C990A708FA8B" },
                { name: "ja-jp_3.2.0_3.4.0_hdiff_p9ZDjlyLHOMsz2XU.zip", md5: "6FEA878B10D70B436935398514C2D2E0" },
                { name: "ko-kr_3.2.0_3.4.0_hdiff_vspbr2FeNV3GIOf6.zip", md5: "325E73B52F698760E2DC39E086AF0CBA" },
                { name: "game_3.3.0_3.4.0_hdiff_DaEKFYMVbz81ef7L.zip", md5: "017E260FF59BDD15B2574E43A0A35584" },
                { name: "zh-cn_3.3.0_3.4.0_hdiff_3thzDy9FfUIjxplW.zip", md5: "FAF43839C1083FFC47164C177A22558E" },
                { name: "en-us_3.3.0_3.4.0_hdiff_D9chslZxCk85QAPN.zip", md5: "7F4095C270EC96D7C0335B79FEB4ACB6" },
                { name: "ja-jp_3.3.0_3.4.0_hdiff_RyhFwbu8xqUVTgcL.zip", md5: "C7903419597C54A67E286D1F50AC24A2" },
                { name: "ko-kr_3.3.0_3.4.0_hdiff_I9asKmLXGcPgNuyq.zip", md5: "BE59F12D59390E23DCF10A56738E765C" },
                { name: "YuanShen_3.4.0.zip", md5: "a04c6e422656a44924bad95f8648cf9e" },
                { name: "YuanShen_3.4.0.zip.001", md5: "c6dffa721b9610a84652258b66402475" },
                { name: "YuanShen_3.4.0.zip.002", md5: "fbd1f0dfac83ca48fda7cf49ccb40052" },
                { name: "YuanShen_3.4.0.zip.003", md5: "157aced7e87c852a5af4fc617fd85f55" },
                { name: "YuanShen_3.4.0.zip.004", md5: "22a2d144a7cc4af59aa401f3c0eff733" },
                { name: "YuanShen_3.4.0.zip.005", md5: "10129a5815eadf8a4571b8652c51c092" },
                { name: "Audio_Chinese_3.4.0.zip", md5: "56dce864d6eb4780fd2f055263b1ca39" },
                { name: "Audio_English(US)_3.4.0.zip", md5: "06ca7f33819fbe54f84a3327a927e92d" },
                { name: "Audio_Japanese_3.4.0.zip", md5: "ebd0a2fbeff04a2a36ad9d219c054a91" },
                { name: "Audio_Korean_3.4.0.zip", md5: "c93a3cd67024cdc061b87a8c4d5636e6" },
                { name: "game_3.1.0_3.3.0_hdiff_4SRgOFaXu2sYxLTM.zip", md5: "A56F9436F7C216E228E59729B0840EFA" },
                { name: "zh-cn_3.1.0_3.3.0_hdiff_iytSdmXrepwgIuz5.zip", md5: "7DBD02F4BA56A2621D368448EDB3CE39" },
                { name: "en-us_3.1.0_3.3.0_hdiff_XMIzAtnefHDUwyQ7.zip", md5: "48C27A5F994BD997C25C604947681F6D" },
                { name: "ja-jp_3.1.0_3.3.0_hdiff_EBRyrLujMcwXnA93.zip", md5: "6A5D95357110A90DEDE9567C655622C1" },
                { name: "ko-kr_3.1.0_3.3.0_hdiff_reO3YkWcUEd0VKGR.zip", md5: "4E70A89B2C34CE9A1DB662F04F3D87EB" },
                { name: "game_3.2.0_3.3.0_hdiff_06STMj1gxyYbPCR5.zip", md5: "1F01DB3917981A34A910C023A196049F" },
                { name: "zh-cn_3.2.0_3.3.0_hdiff_bHVueyUkPpghlWmM.zip", md5: "DF3E25BF5A7B8ECC02A6CDE24E181984" },
                { name: "en-us_3.2.0_3.3.0_hdiff_e8mlB7CHZADjzfNT.zip", md5: "32918BB4020E07E772FEC9E3CC627789" },
                { name: "ja-jp_3.2.0_3.3.0_hdiff_ic3tp260L1nXKJoZ.zip", md5: "102C9EF1C6700DC9C6105A387A3AB8E7" },
                { name: "ko-kr_3.2.0_3.3.0_hdiff_NAc1uE0oY8hwOgpM.zip", md5: "F714095422369914CAE96ED43F0B0503" },
                { name: "YuanShen_3.3.0.zip", md5: "244a119fd0397c40524f70e447706532" },
                { name: "YuanShen_3.3.0.zip.001", md5: "235541bd647a7521860a46632f59f124" },
                { name: "YuanShen_3.3.0.zip.002", md5: "389ced30adb1eee12eae57886027a2e0" },
                { name: "YuanShen_3.3.0.zip.003", md5: "4c105530cbb40c27862c62a73e475dc7" },
                { name: "YuanShen_3.3.0.zip.004", md5: "d09df0bf4f8a139c8ea51b35e27ab2ca" },
                { name: "YuanShen_3.3.0.zip.005", md5: "1f5611aebbd6e7151a10680e9ef92959" },
                { name: "Audio_Chinese_3.3.0.zip", md5: "17d574f54295ed263c9ed1d5c190cecf" },
                { name: "Audio_English(US)_3.3.0.zip", md5: "1b08c6054423efae926838863f15f81c" },
                { name: "Audio_Japanese_3.3.0.zip", md5: "2983486d1e88cac565cee8a7b99f25aa" },
                { name: "Audio_Korean_3.3.0.zip", md5: "afee889cfbd1fe15722780f8ceaebc8d" },
                { name: "game_3.0.0_3.2.0_hdiff_VTro0ZXq4dKa6phJ.zip", md5: "2E3F33112FE95D194CA11F6F50C30FD0" },
                { name: "zh-cn_3.0.0_3.2.0_hdiff_BOTxLFcUIoQVgtG0.zip", md5: "856050A962B238BC7222780D1FC72717" },
                { name: "en-us_3.0.0_3.2.0_hdiff_txH1bUAnoR5MpI3L.zip", md5: "846099FC45716618ED6E295AB2F9E587" },
                { name: "ja-jp_3.0.0_3.2.0_hdiff_XnH8s3zGxZYVg9LJ.zip", md5: "46F2EA749966C393EF7718D344A70217" },
                { name: "ko-kr_3.0.0_3.2.0_hdiff_FCaKwoLkWQpsPjUh.zip", md5: "13D1401CA38DDF2843869B3EF39AC09C" },
                { name: "game_3.1.0_3.2.0_hdiff_jXM0eDiqdLA8oTf3.zip", md5: "B9A1B0F33CA3EDDEA563149D72A242DC" },
                { name: "zh-cn_3.1.0_3.2.0_hdiff_5D4J7cwHRpSbVWsC.zip", md5: "EB9F59B424CD71EEDC7328D298B65364" },
                { name: "en-us_3.1.0_3.2.0_hdiff_GFskoYScLp96dgXn.zip", md5: "9467EF4B259927013F0C944E4CD42DBD" },
                { name: "ja-jp_3.1.0_3.2.0_hdiff_rR6sEOPDk70Wwfgq.zip", md5: "CCF9B8BC090DF6F3D3DA7AC0963BE228" },
                { name: "ko-kr_3.1.0_3.2.0_hdiff_irZevnPJlQc82bNw.zip", md5: "49F1F7D398BA3F881A39A6A88DD23718" },
                { name: "YuanShen_3.2.0.zip", md5: "f171639eddec395bba7b3c92c4db7860" },
                { name: "YuanShen_3.2.0.zip.001", md5: "4e2053d30b7d69c1a7c87f6aac223213" },
                { name: "YuanShen_3.2.0.zip.002", md5: "93492b227feda1537bc133f4cae64fe0" },
                { name: "YuanShen_3.2.0.zip.003", md5: "e1122a02dcdc389d9743055af6d93adc" },
                { name: "YuanShen_3.2.0.zip.004", md5: "1d35c4375d1819db992e6759938d427e" },
                { name: "Audio_Chinese_3.2.0.zip", md5: "d55b4bdcef7fb27c2cad0c0f25051538" },
                { name: "Audio_English(US)_3.2.0.zip", md5: "62dab9e438070b3c7f2188d2074e3139" },
                { name: "Audio_Japanese_3.2.0.zip", md5: "038cdeb6506584f7f30a92bb66e36fda" },
                { name: "Audio_Korean_3.2.0.zip", md5: "34ec7f390cefe961cc7d24f03de7a169" },
            ],
            sdk: null,
            deprecated_files: [
                { name: "mhyprot2.Sys", md5: "" },
                { name: "YuanShen_Data/Plugins/PCGameSDK.dll", md5: "" },
                { name: "YuanShen_Data/Plugins/metakeeper.dll", md5: "" },
                { name: "YuanShen_Data/Plugins/widevinecdmadapter.dll", md5: "" },
                { name: "YuanShen_Data/Plugins/XInputInterface64.dll", md5: "" },
                { name: "YuanShen_Data/Plugins/InControlNative.dll", md5: "" },
                { name: "YuanShen_Data/Plugins/d3dcompiler_43.dll", md5: "" },
                { name: "YuanShen_Data/Plugins/sqlite3.dll", md5: "" },
            ],
        },
    });
}
