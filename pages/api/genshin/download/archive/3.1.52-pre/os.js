export default function handler(req, res) {
    // Requires a key from beta account, if you have one please contact me (me@yuuki.me) to help backup/mirror files from our server.
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.1.51",
                    path: "https://osbetadownload.yuanshen.com/client_app/download/beta_pc/20220927134823_kEQbFJShHBdJLxNz/GenshinImpact_3.0.51.1_beta.zip",
                    size: "83762348032",
                    md5: "f5e39eeb0542a0500223771dae8d5eaf",
                    entry: "GenshinImpact.exe",
                    voice_packs: [],
                    decompressed_path: "",
                    segments: [
                        {
                            path: "https://osbetadownload.yuanshen.com/client_app/download/beta_pc/20220927134823_kEQbFJShHBdJLxNz/GenshinImpact_3.0.51.1_beta.zip.001",
                            md5: "89b77042c952d5ff80df942032a2a6d2",
                        },
                        {
                            path: "https://osbetadownload.yuanshen.com/client_app/download/beta_pc/20220927134823_kEQbFJShHBdJLxNz/GenshinImpact_3.0.51.1_beta.zip.002",
                            md5: "a128f15e965459a1ee9ae3fa34b221fd",
                        },
                        {
                            path: "https://osbetadownload.yuanshen.com/client_app/download/beta_pc/20220927134823_kEQbFJShHBdJLxNz/GenshinImpact_3.0.51.1_beta.zip.003",
                            md5: "c4a7ec7f25389b351d24d583a6b959ed",
                        },
                        {
                            path: "https://osbetadownload.yuanshen.com/client_app/download/beta_pc/20220927134823_kEQbFJShHBdJLxNz/GenshinImpact_3.0.51.1_beta.zip.004",
                            md5: "3c75c25ceeb076df0fcdb44a863d42d6",
                        },
                    ],
                    package_size: "41875931136",
                },
                diffs: [
                    {
                        name: "game_3.1.50_3.1.51_hdiff_XqDe8kzx7S0mnJL5.zip",
                        version: "3.1.50",
                        path: "https://osbetadownload.yuanshen.com/client_app/beta_update/private/hk4e_global/36/game_3.1.50_3.1.51_hdiff_XqDe8kzx7S0mnJL5.zip",
                        size: "970079993",
                        md5: "0B15498269E47D4E19525395A787F205",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "324905367",
                    },
                ],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchhkbeta.yuanshen.com/client_app/plugins/DXSETUP.zip",
                        size: "100647892",
                        md5: "CA2AC3835D7D7DA6CB8624FEFB177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://betalauncher-os.hoyoverse.com/genshin",
            force_update: null,
            pre_download_game: {
                latest: {
                    name: "",
                    version: "3.1.52",
                    path: "https://osbetadownload.yuanshen.com/client_app/download/beta_pc/20220930115455_RqieAl1LEJPkePL5/GenshinImpact_3.1.52_beta.zip",
                    size: "83762348032",
                    md5: "5ef7bd0b55e32af4764261db91ffda06",
                    entry: "GenshinImpact.exe",
                    voice_packs: [],
                    decompressed_path: "",
                    segments: [],
                    package_size: "41875931136",
                },
                diffs: [
                    {
                        name: "game_3.1.51_3.1.52_hdiff_tcRkLIu75JfKmQMj.zip",
                        version: "3.1.51",
                        path: "https://osbetadownload.yuanshen.com/client_app/beta_update/private/hk4e_global/36/game_3.1.51_3.1.52_hdiff_tcRkLIu75JfKmQMj.zip",
                        size: "6405749977",
                        md5: "63F483E96D0AB6192BF33DC9F9CCF5C8",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "2996345651",
                    },
                ],
            },
            deprecated_packages: [
                { name: "GenshinImpact_3.1.50_beta.zip", md5: "4d43a7d18f433e88da11ac5a33208793" },
                { name: "GenshinImpact_3.1.50_beta.zip.001", md5: "94180181ee61c483e84a3bf397bd2681" },
                { name: "GenshinImpact_3.1.50_beta.zip.002", md5: "7f12c46322bb36cc4198fe95b54aa334" },
                { name: "GenshinImpact_3.1.50_beta.zip.003", md5: "8bdf7232e2b3c980c4e1034da22d5aa1" },
                { name: "GenshinImpact_3.1.50_beta.zip.004", md5: "1bf67fd57bab227df130863b30a538e8" },
                { name: "ostest.zip", md5: "d67048c984c0602745d762cbb9ebe315" },
                { name: "ostest.zip.001", md5: "6f6549ebebe90a36dd65655a7bb134c7" },
                { name: "ostest.zip.002", md5: "68bfb0b0f560dd633076a63c02d66db1" },
                { name: "ostest.zip.003", md5: "70d68ca4a6b216013a3e79732a2e1610" },
                { name: "ostest.zip.004", md5: "d4e103e394b628ce5d0c7ca0b0c2f5c9" },
                { name: "game_2.7.0_2.8.0_hdiff_l2uWt8YPk9cynpSd.zip", md5: "BD1C7A8B06A4F49D8741C7DC30CD24B8" },
                { name: "zh-cn_2.7.0_2.8.0_hdiff_pEoY8LB7um03cCI5.zip", md5: "9CAB2D064134C29EC0456A7FAD475BC4" },
                { name: "en-us_2.7.0_2.8.0_hdiff_TbxdugC1jOnQvzVa.zip", md5: "E6B8865F85390EB272E622ECA7F76C1F" },
                { name: "ja-jp_2.7.0_2.8.0_hdiff_W406QV9FAh1CkDBc.zip", md5: "EC3B60F72BEE4D349A735AA990BB5B4F" },
                { name: "ko-kr_2.7.0_2.8.0_hdiff_WAovCKihIBqTwpYD.zip", md5: "9C2383FA2FAED36336C07ECA82D82AB8" },
                { name: "GenshinImpact_2.8.0.zip", md5: "50f2ff4ce073e253a7b1ddfb83c8481d" },
                { name: "Audio_Chinese_2.8.0.zip", md5: "345bca685ea04fd97e13d5776b20867e" },
                { name: "Audio_English(US)_2.8.0.zip", md5: "dd399d2f41a5d6974f0a637435e7c72d" },
                { name: "Audio_Japanese_2.8.0.zip", md5: "ec87f73b60faa085c99826a3b060a220" },
                { name: "Audio_Korean_2.8.0.zip", md5: "1120199e603376fe4f18f89d268db0c3" },
                { name: "GenshinImpact_2.7.0.zip", md5: "17393ab15abde52b558569ff8f23f6fb" },
                { name: "Audio_Chinese_2.7.0.zip", md5: "a8eb4a8592708cf15ba936df4cc2f6da" },
                { name: "Audio_English(US)_2.7.0.zip", md5: "0428506078bab75030905b8fe9523e50" },
                { name: "Audio_Japanese_2.7.0.zip", md5: "13a596406adf91fbe229116bf572b366" },
                { name: "Audio_Korean_2.7.0.zip", md5: "e9c56a3ce4f848e717c6b98fa46b5109" },
            ],
            sdk: null,
            deprecated_files: [{ name: "GenshinImpact_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}
