export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.2.0",
                    path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/GenshinImpact_3.2.0.zip",
                    size: "86983573504",
                    md5: "affa3679ab20e4893e04088f5f44ecff",
                    entry: "GenshinImpact.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/Audio_Chinese_3.2.0.zip",
                            size: "15128770640",
                            md5: "df20da65a6a95919a3026d33b2ca927d",
                            package_size: "7559142440",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/Audio_English(US)_3.2.0.zip",
                            size: "17276254288",
                            md5: "d253501dcf6a7eee5ce6e3037274ec52",
                            package_size: "8632884264",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/Audio_Japanese_3.2.0.zip",
                            size: "19208989572",
                            md5: "1f347d4799a36ae686fa330e28d871be",
                            package_size: "9599251906",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/Audio_Korean_3.2.0.zip",
                            size: "14849597766",
                            md5: "8baa1f4db3801f9ca83902155bac4b6c",
                            package_size: "7419556003",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/GenshinImpact_3.2.0.zip.001",
                            md5: "7d4125fb2406ba50c2adb10fb702729c",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/GenshinImpact_3.2.0.zip.002",
                            md5: "ac57acfff0465c920bc1daff072f528e",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/GenshinImpact_3.2.0.zip.003",
                            md5: "e81ae36ce71aa018292f37f3daae434b",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/GenshinImpact_3.2.0.zip.004",
                            md5: "041c28681cfb29c1467f80e0ef5c6a86",
                        },
                    ],
                    package_size: "43486543872",
                },
                diffs: [
                    {
                        name: "game_3.1.0_3.2.0_hdiff_3B7InFiY1SDdN8Lv.zip",
                        version: "3.1.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.1.0_3.2.0_hdiff_3B7InFiY1SDdN8Lv.zip",
                        size: "14419602402",
                        md5: "64D9BB5A4D8898287AB63BEF0882BB40",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.1.0_3.2.0_hdiff_R8oNZkyzjwxYFGCQ.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.1.0_3.2.0_hdiff_R8oNZkyzjwxYFGCQ.zip",
                                size: "1219940478",
                                md5: "B898C5E8B3BE55B7E9FF1034269E0630",
                                package_size: "562790711",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.1.0_3.2.0_hdiff_ezXCZESyB4JuGs5g.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.1.0_3.2.0_hdiff_ezXCZESyB4JuGs5g.zip",
                                size: "1456969568",
                                md5: "6B95E032754E65EF60376B1618B31517",
                                package_size: "694097753",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.1.0_3.2.0_hdiff_mHfx98gkNpB36szQ.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.1.0_3.2.0_hdiff_mHfx98gkNpB36szQ.zip",
                                size: "1540344966",
                                md5: "4A03439170A5222BC49E1D18DB0A3E5F",
                                package_size: "683825425",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.1.0_3.2.0_hdiff_dZwqgxaJQusz5e7E.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.1.0_3.2.0_hdiff_dZwqgxaJQusz5e7E.zip",
                                size: "1175918048",
                                md5: "BB1561D6FD801B4BF5464DE70FF773CF",
                                package_size: "546579357",
                            },
                        ],
                        package_size: "6990114659",
                    },
                    {
                        name: "game_3.0.0_3.2.0_hdiff_0XM45IeyvRhgYCLj.zip",
                        version: "3.0.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.0.0_3.2.0_hdiff_0XM45IeyvRhgYCLj.zip",
                        size: "20656452491",
                        md5: "35B9B73256D49E6379F0F52BFE77A5D4",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.0.0_3.2.0_hdiff_1n6f7JSmpBiHOvz8.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.0.0_3.2.0_hdiff_1n6f7JSmpBiHOvz8.zip",
                                size: "2169823672",
                                md5: "51146ADFE424F938E04E324140E1EE6A",
                                package_size: "997556152",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.0.0_3.2.0_hdiff_ZkinY2VSEILsuAwq.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.0.0_3.2.0_hdiff_ZkinY2VSEILsuAwq.zip",
                                size: "2589964399",
                                md5: "A26E05DE9C98847B9F5290E5EF289B82",
                                package_size: "1235488490",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.0.0_3.2.0_hdiff_vchfdp38qJjbgTPz.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.0.0_3.2.0_hdiff_vchfdp38qJjbgTPz.zip",
                                size: "2704947086",
                                md5: "8274BFA0DC3981281675CCC786F0CD8D",
                                package_size: "1190570050",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.0.0_3.2.0_hdiff_WuHL2AB9UVvayFsl.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.0.0_3.2.0_hdiff_WuHL2AB9UVvayFsl.zip",
                                size: "2143516267",
                                md5: "EEE50A5C39521652BA2887CB8F99DA22",
                                package_size: "992834072",
                            },
                        ],
                        package_size: "10088027162",
                    },
                ],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchhk.yuanshen.com/client_app/plugins/DXSETUP.zip",
                        size: "100647892",
                        md5: "CA2AC3835D7D7DA6CB8624FEFB177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://genshin.hoyoverse.com/launcher",
            force_update: null,
            pre_download_game: {
                latest: {
                    name: "",
                    version: "3.3.0",
                    path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/GenshinImpact_3.3.0.zip",
                    size: "91278540800",
                    md5: "bf0d1a9187aa52f5f3e17be26a263d33",
                    entry: "GenshinImpact.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/Audio_Chinese_3.3.0.zip",
                            size: "16095138282",
                            md5: "321e7ca77963d315225483bc42c1599e",
                            package_size: "8042326261",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/Audio_English(US)_3.3.0.zip",
                            size: "18371470950",
                            md5: "a4ecc37ab5d03598b711504c7343e185",
                            package_size: "9180492595",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/Audio_Japanese_3.3.0.zip",
                            size: "20518954598",
                            md5: "b9f1788f7e98bc7f4e23976f3b8acbe8",
                            package_size: "10254234419",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/Audio_Korean_3.3.0.zip",
                            size: "15794490572",
                            md5: "224db40327da5ec9d91042b6a1656934",
                            package_size: "7892002406",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/GenshinImpact_3.3.0.zip.001",
                            md5: "eaf6b1a19266d881cefb72f012a1430a",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/GenshinImpact_3.3.0.zip.002",
                            md5: "6eea9160c01c973ce2846f5832b56fbd",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/GenshinImpact_3.3.0.zip.003",
                            md5: "c64e69f71f703d157fab6051cda132f7",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/GenshinImpact_3.3.0.zip.004",
                            md5: "2dd8e99b31c0c881f5d1267ae3fbc89c",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/GenshinImpact_3.3.0.zip.005",
                            md5: "1cde29e7d59be759be015a4ce215aad9",
                        },
                    ],
                    package_size: "45634027520",
                },
                diffs: [
                    {
                        name: "game_3.2.0_3.3.0_hdiff_fiuTl2cLqp198WVG.zip",
                        version: "3.2.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.2.0_3.3.0_hdiff_fiuTl2cLqp198WVG.zip",
                        size: "13147604630",
                        md5: "AD69815CDE87E9691F89C838E0083D74",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.2.0_3.3.0_hdiff_Y7EPh3tBmMbfwWac.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.2.0_3.3.0_hdiff_Y7EPh3tBmMbfwWac.zip",
                                size: "906775964",
                                md5: "CCC23D1D64FB918BA9C0296F818AC142",
                                package_size: "419724267",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.2.0_3.3.0_hdiff_Mtg67G54pwYTnuEA.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.2.0_3.3.0_hdiff_Mtg67G54pwYTnuEA.zip",
                                size: "1148030129",
                                md5: "F816FADB78015FFC899E874118984DA9",
                                package_size: "545626236",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.2.0_3.3.0_hdiff_DE9YUdTvyOecHkih.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.2.0_3.3.0_hdiff_DE9YUdTvyOecHkih.zip",
                                size: "1093658204",
                                md5: "C799E711292DFE0BF4885E4E8CE13A17",
                                package_size: "493574577",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.2.0_3.3.0_hdiff_jfd7VWceoaE0A4uB.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.2.0_3.3.0_hdiff_jfd7VWceoaE0A4uB.zip",
                                size: "870055250",
                                md5: "9118CF7CFFF526666F5263C0C4515A6B",
                                package_size: "406657414",
                            },
                        ],
                        package_size: "6351578058",
                    },
                    {
                        name: "game_3.1.0_3.3.0_hdiff_IGL1F0SYrChkDmvf.zip",
                        version: "3.1.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.1.0_3.3.0_hdiff_IGL1F0SYrChkDmvf.zip",
                        size: "19436421680",
                        md5: "F0C52ACEA0DC3DAE19ED47485001B651",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.1.0_3.3.0_hdiff_LSgFINh859GtE0fp.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.1.0_3.3.0_hdiff_LSgFINh859GtE0fp.zip",
                                size: "2115147866",
                                md5: "E8D76B2DF8E07CAD171B421CF3A0898A",
                                package_size: "982144726",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.1.0_3.3.0_hdiff_IAkYRNMdX7OrEaHS.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.1.0_3.3.0_hdiff_IAkYRNMdX7OrEaHS.zip",
                                size: "2578173922",
                                md5: "A015FC2AF7018084DE1DFFF711E0EC73",
                                package_size: "1231670216",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.1.0_3.3.0_hdiff_nYG9Lxsc5EUWXyrT.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.1.0_3.3.0_hdiff_nYG9Lxsc5EUWXyrT.zip",
                                size: "2622490687",
                                md5: "BD8E266450FBCB7297814B6F6098D552",
                                package_size: "1176847362",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.1.0_3.3.0_hdiff_zkv4RZ7Y5jfPGauO.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.1.0_3.3.0_hdiff_zkv4RZ7Y5jfPGauO.zip",
                                size: "2035291944",
                                md5: "CBFCEE77FA580EFCF0FC1DB1C6C9C2DD",
                                package_size: "953160799",
                            },
                        ],
                        package_size: "9481273339",
                    },
                ],
            },
            deprecated_packages: [
                { name: "game_2.8.0_3.1.0_hdiff_vQp41GPwdscT3UxV.zip", md5: "9BC92DABF695939D461EF7EB0D3FBC11" },
                { name: "zh-cn_2.8.0_3.1.0_hdiff_xfwy75Z1dKCN6sEu.zip", md5: "058E84352A4395F42D84DA4847C9E8A0" },
                { name: "en-us_2.8.0_3.1.0_hdiff_Potvg1euXns4a5WK.zip", md5: "2F2C660B33A99710213BC20F875AFBEE" },
                { name: "ja-jp_2.8.0_3.1.0_hdiff_SFedYgkphMqGvtWZ.zip", md5: "EC81E420D732E2832C73EDED0D352529" },
                { name: "ko-kr_2.8.0_3.1.0_hdiff_FpEC0r5WxkMgD1cN.zip", md5: "B02ED003F6A9B143E39830F42967C882" },
                { name: "game_3.0.0_3.1.0_hdiff_JajVqm1LS2G5Wd3g.zip", md5: "93B7196C9A61393540449B60C36456B2" },
                { name: "zh-cn_3.0.0_3.1.0_hdiff_MZkPImOajGWFoehp.zip", md5: "FB72A2003D8BD5F4DC28BC05A5A3C4EF" },
                { name: "en-us_3.0.0_3.1.0_hdiff_J254a8oHvQTGMwu3.zip", md5: "529BE7E22E0086C22AD662B2F7D00771" },
                { name: "ja-jp_3.0.0_3.1.0_hdiff_3NZcVbSxzvXgMaq9.zip", md5: "6FB40F6102F9E96B81B68892801D5479" },
                { name: "ko-kr_3.0.0_3.1.0_hdiff_AhytWDJvIYoPU9nZ.zip", md5: "BA5FF66A5BE7ABE8F1D27EA327A519D2" },
                { name: "GenshinImpact_3.1.0.zip", md5: "39e5a6ded5569a5e480d8510b564f790" },
                { name: "Audio_Chinese_3.1.0.zip", md5: "676272909b4d7a3da9e7ed3da671bc68" },
                { name: "Audio_English(US)_3.1.0.zip", md5: "94d3aaa4db35c967f902d4c6a4ebe44a" },
                { name: "Audio_Japanese_3.1.0.zip", md5: "7cd360ef7498f359224fa3aefe153f97" },
                { name: "Audio_Korean_3.1.0.zip", md5: "1d8f1db8da82360abb54cff9e8f33815" },
                { name: "game_2.7.0_3.0.0_hdiff_b1u9GtgJhTUPryIL.zip", md5: "AF4AA6C36388DF4C38EF506620B469F6" },
                { name: "zh-cn_2.7.0_3.0.0_hdiff_0XJTgBrkQN1lsFUW.zip", md5: "7BB0B87EC6F52024D66D56D6EC90FD60" },
                { name: "en-us_2.7.0_3.0.0_hdiff_DIWRaXKtUSpPMQ0z.zip", md5: "5D54478582F649680D196125C07A2F95" },
                { name: "ja-jp_2.7.0_3.0.0_hdiff_6jJPH9SyWtqAC01n.zip", md5: "741461A429A70D3F3F59ECDF4258FFC5" },
                { name: "ko-kr_2.7.0_3.0.0_hdiff_kcoyYRQpLqT61zth.zip", md5: "6ADEB894B15D946FAC36DBC80D918099" },
                { name: "game_2.8.0_3.0.0_hdiff_5eW7vzqQBEwmrVCi.zip", md5: "D2C6C26ED7D9671C851ED41C170054DD" },
                { name: "zh-cn_2.8.0_3.0.0_hdiff_lUMQXapY5jnDKokJ.zip", md5: "B326E234641100D6E72084E420A118F4" },
                { name: "en-us_2.8.0_3.0.0_hdiff_6yWlQX5NphSDHovf.zip", md5: "649399183DD2F112D6A520B9D85AA725" },
                { name: "ja-jp_2.8.0_3.0.0_hdiff_FiYR9adhksO62VcZ.zip", md5: "7B3109BB5CCEAB5CCBD2130014CED2E1" },
                { name: "ko-kr_2.8.0_3.0.0_hdiff_rckI0qyC8V3xBaep.zip", md5: "20C49F955F15C60148ED5E7EC86E0C4E" },
                { name: "GenshinImpact_3.0.0.zip", md5: "e00a6deac8cc82ade301d8dbec730316" },
                { name: "Audio_Chinese_3.0.0.zip", md5: "45fec225973181b9f4400c1066b995f2" },
                { name: "Audio_English(US)_3.0.0.zip", md5: "829cede8c9ad29609a508e7867f2c472" },
                { name: "Audio_Japanese_3.0.0.zip", md5: "fb58c3a98d428fb64f12a0e7f9a1f1cb" },
                { name: "Audio_Korean_3.0.0.zip", md5: "23857469f0244579df191a1ad3ccd2c2" },
            ],
            sdk: null,
            deprecated_files: [{ name: "GenshinImpact_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}
