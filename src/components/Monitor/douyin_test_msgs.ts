import { Message } from "./types"

// 平台直播消息，第一条
export const firstMsg = {
    "code": 201,
    "msg": "平台直播信息",
    "result": {
        "_location": "/139902822326",
        "app": {
            "initialState": {
                "abStore": {
                    "layoutData": {
                        "BitrateSelector": {
                            "bitrateLower": 200000,
                            "bitrateRange": [
                                200000,
                                2500000
                            ],
                            "bitrateUpper": 2000000,
                            "mode": "buffer-info",
                            "paramBf": 0.3,
                            "paramBp": 0.6,
                            "paramLower": 0.6,
                            "paramUpper": 1.4,
                            "paramUpperBl": 0.5,
                            "paramVl1": 0.75,
                            "paramVl2": 1,
                            "paramVlLower": 0.7,
                            "paramVlUpper": 0.9,
                            "quality_filter": {
                                "adapt_1080_0": {
                                    "lower": 0,
                                    "upper": 1300000
                                },
                                "normal_1080_0": {
                                    "lower": 0,
                                    "upper": 1300000
                                }
                            },
                            "slidingWindowCountThreshold": 30,
                            "slidingWindowExtraction": "weighted_median",
                            "slidingWindowType": "by_weight",
                            "slidingWindowWeight": "size",
                            "slidingWindowWeightThreshold": 20000000,
                            "white_list": [
                                "normal_1080_0",
                                "normal_720_0",
                                "normal_540_0",
                                "adapt_1080_0",
                                "adapt_720_0",
                                "adapt_540_0"
                            ]
                        },
                        "Client265NoSoft": 0,
                        "audienceTestStatus": 0,
                        "bottomWordOpt": 0,
                        "categoryTab": {
                            "categoryData": [
                                {
                                    "partition": {
                                        "id_str": "4609",
                                        "title": "主机游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "633",
                                                "title": "魔兽世界",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2607",
                                                "title": "永劫无间",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "716",
                                                "title": "横版格斗",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "628",
                                                "title": "拳皇系列",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "623",
                                                "title": "我的世界",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1054",
                                                "title": "魔兽争霸3",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "725",
                                                "title": "其他主机游戏",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "583",
                                                "title": "迷你世界",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "591",
                                        "title": "棋牌桌游",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "592",
                                                "title": "斗地主",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "624",
                                                "title": "麻将",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "597",
                                                "title": "象棋",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "729",
                                                "title": "其他棋牌游戏",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "5163",
                                                "title": "网易狼人杀",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "619",
                                                "title": "军棋",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1395",
                                                "title": "三国杀手游",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "3843",
                                                "title": "JJ象棋",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "4627",
                                        "title": "角色扮演",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "1251",
                                                "title": "原神",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1603",
                                                "title": "皇室战争",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1102",
                                                "title": "问道手游",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2078",
                                                "title": "问道端游",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "3635",
                                                "title": "怀旧天龙八部",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "590",
                                                "title": "明日之后",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "3534",
                                                "title": "暗黑破坏神：不朽",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "4594",
                                                "title": "天使之战",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "4630",
                                        "title": "休闲游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "3143",
                                                "title": "蛋仔派对",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "5065",
                                                "title": "美食DIY",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "698",
                                                "title": "球球大作战",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "651",
                                                "title": "植物大战僵尸",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2895",
                                                "title": "最强的大脑",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2348",
                                                "title": "汤姆猫跑酷",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "3447",
                                                "title": "找不同",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "5292",
                                                "title": "羊了个羊",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "4618",
                                        "title": "竞技游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "1270",
                                                "title": "5v5推塔手游",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "655",
                                                "title": "赛车游戏",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "580",
                                                "title": "DOTA2",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "687",
                                                "title": "格斗手游",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1106",
                                                "title": "跑跑卡丁车手游",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "586",
                                                "title": "第五人格",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "579",
                                                "title": "DOTA",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "5618",
                                                "title": "梦三国",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "4606",
                                        "title": "策略游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "1321",
                                                "title": "怀旧FC",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1305",
                                                "title": "坦克世界",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1055",
                                                "title": "帝国时代",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1052",
                                                "title": "恐龙快打",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "3280",
                                                "title": "怀旧掌机",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1458",
                                                "title": "魂斗罗",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "672",
                                                "title": "西游释厄传",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "708",
                                                "title": "战舰世界",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "4603",
                                        "title": "射击游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "648",
                                                "title": "CS:GO",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "613",
                                                "title": "吃鸡手游",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "600",
                                                "title": "射击游戏",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "4472",
                                                "title": "Apex英雄",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "4879",
                                                "title": "暗区突围",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "589",
                                                "title": "香肠派对",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "5746",
                                                "title": "无畏契约",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "659",
                                                "title": "CS 1.6",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "5837",
                                        "title": "卡牌游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "657",
                                                "title": "阴阳师",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "4844",
                                                "title": "山海经异兽录",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "3889",
                                                "title": "炉石传说",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "1591",
                                                "title": "明日方舟",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "4840",
                                                "title": "铁杆三国",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "4183",
                                                "title": "少年三国志2",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "4817",
                                                "title": "崩坏：星穹铁道",
                                                "type": 1
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "10000",
                                        "title": "娱乐天地",
                                        "type": 3
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "2707",
                                                "title": "音乐",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2842",
                                                "title": "语音互动",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2836",
                                                "title": "情感",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2726",
                                                "title": "舞蹈",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2742",
                                                "title": "户外",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2791",
                                                "title": "运动",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2786",
                                                "title": "美食",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2751",
                                                "title": "旅行",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "10001",
                                        "title": "科技文化",
                                        "type": 3
                                    },
                                    "sub_partition": [
                                        {
                                            "partition": {
                                                "id_str": "2800",
                                                "title": "教育",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        },
                                        {
                                            "partition": {
                                                "id_str": "2756",
                                                "title": "人文艺术",
                                                "type": 2
                                            },
                                            "sub_partition": []
                                        }
                                    ]
                                }
                            ],
                            "recommendPartitions": [
                                {
                                    "partition": {
                                        "id_str": "4609",
                                        "title": "主机游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "id_str": "2607",
                                            "title": "永劫无间",
                                            "type": 1
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "4609",
                                        "title": "主机游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "id_str": "633",
                                            "title": "魔兽世界",
                                            "type": 1
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "4627",
                                        "title": "角色扮演",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "id_str": "1251",
                                            "title": "原神",
                                            "type": 1
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "591",
                                        "title": "棋牌桌游",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "id_str": "597",
                                            "title": "象棋",
                                            "type": 1
                                        }
                                    ]
                                },
                                {
                                    "partition": {
                                        "id_str": "4618",
                                        "title": "竞技游戏",
                                        "type": 1
                                    },
                                    "sub_partition": [
                                        {
                                            "id_str": "586",
                                            "title": "第五人格",
                                            "type": 1
                                        }
                                    ]
                                }
                            ]
                        },
                        "checkQrCodeDelayTime": 0,
                        "client_version": "",
                        "collection": 0,
                        "danmaku": {
                            "ai_cover": 1,
                            "ai_cover_opti_v2": 1,
                            "douyin_danmaku": 1,
                            "douyin_danmaku_30s-": 1,
                            "douyin_danmaku_conf": 1,
                            "douyin_danmaku_filter_low_score": false,
                            "douyin_danmuku_conf_region": 5,
                            "ebable_lvideo_old_pack": 1,
                            "enable_ad": true,
                            "enable_baike_pc_general_search_recall": 1,
                            "enable_cooperation_picture": 1,
                            "enable_cooperation_video": 1,
                            "enable_douyin_weitoutiao": 1,
                            "enable_experience_card": 1,
                            "enable_global_lvideo": 1,
                            "enable_new_dy_lvideo_source": 1,
                            "enable_pc_aladdin": 1,
                            "enable_pc_aladdin_douyin_game_gonglue": 1,
                            "enable_pc_aladdin_douyin_game_sports": 1,
                            "enable_pc_aladdin_douyin_songlist": 1,
                            "enable_pc_xigua_to_aweme": 1,
                            "enable_world_cup_recall": 1,
                            "experience_card_min_doc_limit": 10,
                            "music_min_doc_limit": 6,
                            "music_min_doc_post_limit": 10,
                            "music_takedown_group": 1,
                            "new_home_module_with_tab": 2,
                            "pc_web_homepage_title_cut": 1,
                            "sati": {
                                "search": {
                                    "enable_ecpm_receivable": true
                                }
                            },
                            "search": {
                                "enable_aweme_pc_hotsoon": 1,
                                "enable_general_web_live_card": true,
                                "enable_world_cup_recall": 1,
                                "enable_zero_risk_list": 1,
                                "need_tag_ala_src": {
                                    "cartoon_global": [
                                        4
                                    ],
                                    "douyin_experience_card": [
                                        4
                                    ],
                                    "douyin_hotsonglist": [
                                        4
                                    ],
                                    "douyin_playlet_v1": [
                                        4
                                    ],
                                    "douyin_sport": [
                                        4
                                    ],
                                    "douyin_tips": [
                                        4
                                    ],
                                    "douyin_weitoutiao": [
                                        4
                                    ],
                                    "ky_album_info_card": [
                                        4
                                    ]
                                }
                            },
                            "song_list_pack_max_limit": 6
                        },
                        "downloadGuide": 0,
                        "ecomOpt": 0,
                        "edgeDownOptions": {},
                        "enableHoverToDisplay": 1,
                        "errorBoundaryOpt": 1,
                        "fansClubTestStatus": 1,
                        "feedLiveFullPlayer": 0,
                        "fps": 0,
                        "fullMiniWindow": 0,
                        "hasHorizontalHeader": 1,
                        "hdStreamNeedLogin": 1,
                        "imShowActiveStatus": 0,
                        "inPicture": 0,
                        "isClient": false,
                        "landscapeStrategy": 1,
                        "liveHeadWindow": 4,
                        "liveHighClientH265": 0,
                        "liveHighWebH265": 0,
                        "liveLinkPrefetch": 1,
                        "liveMiburiPlugin": 2,
                        "livePush": 1,
                        "liveSpringFeatures": {
                            "appointment": 1,
                            "metro": 1,
                            "programme": 1,
                            "theme": 1
                        },
                        "liveTabOptimize": 0,
                        "loginBgImg": "https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/login-resetpwd-bg.png",
                        "loginOnlyPanel": 0,
                        "loginPanelStyle": 0,
                        "lookEnter": 0,
                        "lookGaussianBlur": 0,
                        "lookInteraction": 0,
                        "lookRelateAllScene": 0,
                        "lowDeviceOptimization": 0,
                        "mixEntrance": 0,
                        "newInteractiveAdapter": 2,
                        "newLookUiAdapter": 1,
                        "newSilent": 0,
                        "newSwiper": 0,
                        "noDisturbV2": 0,
                        "occupyPicture": 0,
                        "onDemandCost": {
                            "frontTime": 420000,
                            "peakEndTime": 82800000,
                            "peakStartTime": 68400000
                        },
                        "os": {
                            "os": "Mac",
                            "version": ""
                        },
                        "pageGrayscaleConf": {
                            "blockList": {
                                "all": [],
                                "part": [
                                    "/fifaworldcup"
                                ]
                            },
                            "mode": ""
                        },
                        "pcClusterGrayscale": 0,
                        "permanentDislikeBtn": 0,
                        "query": {},
                        "recommendLoginGuideFirstInstall": 0,
                        "recommendLoginGuideTextType": 0,
                        "registerTime": 1678185983,
                        "roomEnterUserLogin": 0,
                        "searchBarBottomWord": 0,
                        "searchBarStyleOpt": 3,
                        "searchHorizontal": 1,
                        "searchLayout": 0,
                        "searchPageSSR": 0,
                        "searchScrollAutoplay": 0,
                        "secondTabBtn": 0,
                        "secondWallpaper": 0,
                        "shareFlip": 0,
                        "shortLinkLogin": 0,
                        "showCreatorGuide": 0,
                        "tceCluster": "grayscale",
                        "updateModule": 0,
                        "updateNodeSdk": -1,
                        "use264Adapt": 0,
                        "use265ClientLow": 0,
                        "use265HardParse": 0,
                        "use265Web": 0,
                        "useDashWeb": 0,
                        "videoControlOpt": {
                            "tip_show_time": 15,
                            "type": 2
                        },
                        "videoPreloadConfig": {
                            "preload_min_buffer": 5,
                            "preload_time": 10
                        },
                        "videoPreloadType": 0,
                        "volumeBalance": 0,
                        "vs1080Login": 1,
                        "vsEntryAnimate": 0,
                        "vsLivePush": 1,
                        "vsSpring": 1,
                        "websocketKey": [
                            {
                                "param_name": "live_id",
                                "param_type": "string"
                            },
                            {
                                "param_name": "aid",
                                "param_type": "string"
                            },
                            {
                                "param_name": "version_code",
                                "param_type": "string"
                            },
                            {
                                "param_name": "webcast_sdk_version",
                                "param_type": "string"
                            },
                            {
                                "param_name": "room_id",
                                "param_type": "string"
                            },
                            {
                                "param_name": "sub_room_id",
                                "param_type": "string"
                            },
                            {
                                "param_name": "sub_channel_id",
                                "param_type": "string"
                            },
                            {
                                "param_name": "did_rule",
                                "param_type": "string"
                            },
                            {
                                "param_name": "user_unique_id",
                                "param_type": "string"
                            },
                            {
                                "param_name": "device_platform",
                                "param_type": "string"
                            },
                            {
                                "param_name": "device_type",
                                "param_type": "string"
                            },
                            {
                                "param_name": "ac",
                                "param_type": "string"
                            },
                            {
                                "param_name": "identity",
                                "param_type": "string"
                            }
                        ],
                        "xgvideoOptions": {},
                        "zhuantiSidebar": 1
                    }
                },
                "appStore": {
                    "isOpenLongTask": true,
                    "linkMicHeartConfig": {
                        "disabled": true,
                        "whitleList": [
                            "608192707742",
                            "534000058337"
                        ]
                    },
                    "needInital": false
                },
                "audienceStore": {
                    "audienceAuthStatus": false,
                    "audienceSwitchStatus": true,
                    "audienceTccStatus": false,
                    "audienceTestStatus": false
                },
                "fansClubStore": {
                    "fansClubAuthStatus": false,
                    "fansClubAutoLightStatus": false,
                    "fansClubButtonShowStatus": false,
                    "fansClubData": {},
                    "fansClubJoinStatus": false,
                    "fansClubShowStatus": false,
                    "fansClubTccStatus": false,
                    "fansClubTestStatus": false
                },
                "giftStore": {
                    "balance": 0,
                    "effectList": [],
                    "effectSwitchStatus": true,
                    "giftAuthStatus": false,
                    "giftMessages": [],
                    "giftPages": [],
                    "giftPanelShowFrom": "",
                    "giftPanelSwitchStatus": 0,
                    "giftSwitchStatus": true,
                    "giftTccStatus": false,
                    "hasGiftBar": false,
                    "rechargeTccStatus": false
                },
                "homeStore": {
                    "selectedRoom": null
                },
                "layoutStore": {
                    "disableUnLoginFilter": false,
                    "hardCategoryTab": 0,
                    "hardErrorStyle": 0,
                    "hardFooter": 0,
                    "hardHeader": 0,
                    "hardNavigation": 0,
                    "hardSideBar": 0,
                    "hasRelevantRoom": true,
                    "hidehead": false,
                    "immersive": false,
                    "metro": false,
                    "navigationSelected": "live",
                    "pathname": "/139902822326",
                    "rawThemeConfig": {},
                    "specialBanner": false,
                    "transparentHeader": false
                },
                "linkmicStore": {
                    "applySource": "",
                    "audioPermission": 0,
                    "choosePanelVisible": false,
                    "choosePeopleAll": false,
                    "choosePeopleArr": [],
                    "choosePeopleShowTCC": false,
                    "devicesModalMode": 3,
                    "dressListInfo": {},
                    "floatModal": 0,
                    "functionType2": "",
                    "imLinkMicSeats": {
                        "0": {
                            "idx": 0
                        },
                        "1": {
                            "idx": 1
                        },
                        "2": {
                            "idx": 2
                        },
                        "3": {
                            "idx": 3
                        },
                        "4": {
                            "idx": 4
                        },
                        "5": {
                            "idx": 5
                        },
                        "6": {
                            "idx": 6
                        },
                        "7": {
                            "idx": 7
                        },
                        "8": {
                            "idx": 8
                        }
                    },
                    "isCandidate": false,
                    "isFansGuide": false,
                    "isPlayModeNotSupport": false,
                    "linkMicConfig": {
                        "config": {}
                    },
                    "linkStatus": 0,
                    "playModes": [],
                    "rankListShow": false,
                    "seiLinkMicSeats": {
                        "0": {
                            "idx": 0
                        },
                        "1": {
                            "idx": 1
                        },
                        "2": {
                            "idx": 2
                        },
                        "3": {
                            "idx": 3
                        },
                        "4": {
                            "idx": 4
                        },
                        "5": {
                            "idx": 5
                        },
                        "6": {
                            "idx": 6
                        },
                        "7": {
                            "idx": 7
                        },
                        "8": {
                            "idx": 8
                        }
                    },
                    "selectedLinkMicDevices": {},
                    "videoPermission": 0
                },
                "navigationStore": {
                    "navigationList": [],
                    "recommendNavList": []
                },
                "pkStore": {
                    "pkAppData": {},
                    "pkTccStatus": false
                },
                "roomStore": {
                    "abProgramme": false,
                    "emojiList": [],
                    "emojiReflex": {},
                    "enableProgramme": false,
                    "followInfo": {},
                    "forceEnableH265": false,
                    "hasAppointment": false,
                    "isUgcLive": false,
                    "liveDetailPlayerHasPlay": false,
                    "liveStatus": "normal",
                    "roomInfo": {
                        "anchor": {
                            "avatar_thumb": {
                                "url_list": [
                                    "https://p11.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334",
                                    "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334",
                                    "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334"
                                ]
                            },
                            "follow_info": {
                                "follow_status": 0,
                                "follow_status_str": "0"
                            },
                            "id_str": "85218558949",
                            "nickname": "龙十五",
                            "sec_uid": "MS4wLjABAAAAZ1prSP1MRt76bznEpU_w6XJfo0EWjr5PnyTznzFRI7w"
                        },
                        "enter_mode": 0,
                        "partition_road_map": {},
                        "qrcode_url": "https://p3-pc.douyinpic.com/img/aweme-qrcode/xxRdyc7207751151138228007~c5_720x720.webp?from=746027608",
                        "relevant_rooms": [],
                        "room": {
                            "AnchorABMap": {
                                "ab_admin_comment_on_wall": "0",
                                "ab_friend_chat": "4",
                                "admin_privilege_refine": "2",
                                "allow_shared_to_fans": "false",
                                "audience_linkmic_continue": "2",
                                "big_party_enable_open_camera": "2",
                                "chat_intercommunicate_multi_anchor": "2",
                                "chat_intercommunicate_pk": "2",
                                "cold_start": "1",
                                "ecom_room_disable_gift": "0",
                                "enable_enter_by_sharing": "2",
                                "enable_link_guest_enter": "2",
                                "enter_message_tip_relation": "0",
                                "enter_source_mark": "0",
                                "friend_room_audio_tuning": "1",
                                "friend_room_support_ns_mode": "0",
                                "friend_share_video_feature_type": "3",
                                "game_link_entrance": "1",
                                "gift_hide_tip": "2",
                                "guest_battle_crown_upgrade": "4",
                                "guest_battle_expand": "2",
                                "guest_battle_score_expand": "2",
                                "interact_anchor_guide": "0",
                                "ktv_anchor_enable_add_all": "1",
                                "ktv_atmosphere_video": "2",
                                "ktv_auto_mute_self": "1",
                                "ktv_challenge_minus_gift": "1",
                                "ktv_component_auto_open": "2",
                                "ktv_enable_avatar": "2",
                                "ktv_enable_open_camera": "2",
                                "ktv_fragment_song": "1",
                                "ktv_grab_guide_song": "0",
                                "ktv_guide_song_switch": "0",
                                "ktv_kick_when_linker_full": "1",
                                "ktv_mc_host_show_tag": "2",
                                "ktv_midi_score": "1",
                                "ktv_room_atmosphere": "1",
                                "ktv_singing_hot_rank": "1",
                                "ktv_video_stream_optimize": "0",
                                "ktv_want_listen_enable": "2",
                                "live_anchor_enable_chorus": "false",
                                "live_anchor_enable_custom_position": "1",
                                "live_anchor_hit_new_audience_linkmic": "2",
                                "live_anchor_hit_position_opt": "2",
                                "live_anchor_hit_video_bid_paid": "2",
                                "live_anchor_hit_video_teamfight": "2",
                                "live_answer_on_wall": "1",
                                "live_audio_enable_c_position": "2",
                                "live_chat_streamline": "2",
                                "live_dou_plus_enter": "1",
                                "live_ktv_enable_beat": "0",
                                "live_ktv_group": "2",
                                "live_ktv_show_singer_icon": "1",
                                "live_ktv_singing_challenge": "1",
                                "live_linkmic_battle_optimize": "1",
                                "live_linkmic_ktv_anchor_lyric_mode": "0",
                                "live_linkmic_order_sing_custom_gift": "2",
                                "live_linkmic_order_sing_new": "1",
                                "live_pc_helper_new_layout": "0",
                                "live_room_manage_style": "0",
                                "live_video_enable_c_position": "2",
                                "live_video_enable_self_discipline": "2",
                                "live_video_host_identity_enable": "2",
                                "live_video_on_wall": "1",
                                "live_video_share": "2",
                                "live_video_share_search": "1",
                                "lonely_room_enter_msg_unfold": "0",
                                "merge_ktv_mode_enable": "1",
                                "opt_audience_linkmic": "3",
                                "opt_paid_link_feature_switch": "1",
                                "optran_paid_linkmic": "2",
                                "radio_prepare_apply": "0",
                                "room_double_like": "2",
                                "rtc_anchor_ab_friend_room_support": "{\"label\":\"linkmic_timer_pli_0\",\"vid\":\"5556497\"}",
                                "self_discipline_name": "1",
                                "self_discipline_v2": "1",
                                "self_discipline_v3": "1",
                                "social_share_video_adjust_volume": "2",
                                "support_multiple_add_price": "1",
                                "themed_competition": "1",
                                "traffic_strategy": "3",
                                "video_ktv_challenge": "1",
                                "video_talk_enable_avatar": "2"
                            },
                            "admin_user_ids": [
                                106269953510
                            ],
                            "admin_user_ids_str": [
                                "106269953510"
                            ],
                            "cover": {
                                "url_list": [
                                    "https://p9-webcast-sign.douyinpic.com/image-cut-tos-priv/e2f47e316f595e88d496b3f49b2ff45c~tplv-qz53dukwul-common-resize:0:0.image?x-expires=1680777983&x-signature=MvRWAKByLUWlHcJUW14KdrRQS0k%3D",
                                    "https://p3-webcast-sign.douyinpic.com/image-cut-tos-priv/e2f47e316f595e88d496b3f49b2ff45c~tplv-qz53dukwul-common-resize:0:0.image?x-expires=1680777983&x-signature=2mMm7%2FfYeHGYhyE2Ecr7QGUB4PM%3D"
                                ]
                            },
                            "has_commerce_goods": false,
                            "id_str": "7207750554766920451",
                            "linker_detail": {
                                "accept_audience_pre_apply": false,
                                "big_party_layout_config_version": 0,
                                "enable_audience_linkmic": 0,
                                "enlarge_guest_turn_on_source": 0,
                                "forbid_apply_from_other": false,
                                "function_type": "",
                                "init_source": "",
                                "ktv_exhibit_mode": 0,
                                "ktv_lyric_mode": "",
                                "linker_map_str": {},
                                "linker_play_modes": [],
                                "linker_ui_layout": 0,
                                "playmode_detail": {}
                            },
                            "linker_map": {},
                            "live_room_mode": 0,
                            "mosaic_status": 0,
                            "mosaic_status_str": "0",
                            "others": {
                                "appointment_info": {
                                    "appointment_id": 0,
                                    "is_subscribe": false
                                },
                                "deco_detail": {},
                                "more_panel_info": {
                                    "load_strategy": 3
                                },
                                "programme": {
                                    "enable_programme": false
                                },
                                "web_skin": {
                                    "enable_skin": false
                                }
                            },
                            "owner": {
                                "avatar_thumb": {
                                    "url_list": [
                                        "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334",
                                        "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334",
                                        "https://p6.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334"
                                    ]
                                },
                                "follow_info": {
                                    "follow_status": 0,
                                    "follow_status_str": "0"
                                },
                                "id_str": "85218558949",
                                "nickname": "龙十五",
                                "sec_uid": "MS4wLjABAAAAZ1prSP1MRt76bznEpU_w6XJfo0EWjr5PnyTznzFRI7w"
                            },
                            "room_auth": {
                                "AdminCommentWall": 0,
                                "AnchorMission": 0,
                                "AudioChat": 2,
                                "Banner": 1,
                                "BulletStyle": 0,
                                "CanSellTicket": 0,
                                "CastScreen": 1,
                                "CastScreenExplicit": 2,
                                "Chat": true,
                                "Collect": 0,
                                "CommentWall": 1,
                                "CommerceCard": 1,
                                "CommerceComponent": 1,
                                "Danmaku": false,
                                "DanmakuDefault": 0,
                                "Denounce": 0,
                                "Digg": true,
                                "Dislike": 0,
                                "DonationSticker": 0,
                                "DouPlus": 1,
                                "DouPlusPopularityGem": 0,
                                "DownloadVideo": 0,
                                "EmojiOutside": 0,
                                "EnterEffects": 0,
                                "ExpandScreen": 2,
                                "FansClub": 1,
                                "FansGroup": 2,
                                "FixedChat": 2,
                                "GamePointsPlaying": 2,
                                "Gift": true,
                                "GiftAnchorMt": 0,
                                "Highlights": 2,
                                "HourRank": 0,
                                "IndustryService": 0,
                                "KtvOrderSong": 2,
                                "Landscape": 1,
                                "LandscapeChat": 1,
                                "Like": 0,
                                "LuckMoney": true,
                                "MissionCenter": 0,
                                "MoreAnchor": 1,
                                "MultiplierPlayback": 0,
                                "OnlyTa": 0,
                                "POI": true,
                                "Poster": 2,
                                "Props": true,
                                "PublicScreen": 1,
                                "RecordScreen": 2,
                                "RoomContributor": true,
                                "Seek": 0,
                                "Selection": 0,
                                "SelectionAlbum": 0,
                                "Share": 1,
                                "ShowGamePlugin": 2,
                                "SpecialStyle": {
                                    "Chat": {
                                        "Content": "主播已设置所有人可评论",
                                        "OffType": 0,
                                        "UnableStyle": 0
                                    },
                                    "Like": {
                                        "Content": "",
                                        "OffType": 0,
                                        "UnableStyle": 0
                                    }
                                },
                                "StrokeUpDownGuide": 1,
                                "Teleprompter": 0,
                                "TimedShutdown": 0,
                                "Topic": 2,
                                "TypingCommentState": 1,
                                "UpRightStatsFloatingLayer": 1,
                                "UserCard": true,
                                "UserCorner": 0,
                                "VSGift": 0,
                                "VSRank": 0,
                                "VSTopic": 0,
                                "VerticalRank": 1
                            },
                            "room_cart": {
                                "cart_icon": "",
                                "contain_cart": false,
                                "flash_total": 0,
                                "show_cart": 0,
                                "total": 0
                            },
                            "room_view_stats": {
                                "display_long": "1在线观众",
                                "display_long_anchor": "1在线观众",
                                "display_middle": "1",
                                "display_middle_anchor": "1",
                                "display_short": "1",
                                "display_short_anchor": "1",
                                "display_type": 1,
                                "display_value": 1,
                                "display_version": 1663849727,
                                "incremental": false,
                                "is_hidden": false
                            },
                            "scene_type_info": {
                                "commentary_type": false,
                                "is_desire_room": 2,
                                "is_lasted_goods_room": 2,
                                "is_life": false,
                                "is_protected_room": 0,
                                "is_union_live_room": false
                            },
                            "stats": {
                                "like_count": 0,
                                "total_user_desp": "",
                                "total_user_str": "46",
                                "user_count_str": "1"
                            },
                            "status": 2,
                            "status_str": "2",
                            "stream_url": {
                                "default_resolution": "FULL_HD1",
                                "extra": {
                                    "anchor_interact_profile": 0,
                                    "audience_interact_profile": 0,
                                    "bframe_enable": false,
                                    "bitrate_adapt_strategy": 0,
                                    "bytevc1_enable": false,
                                    "default_bitrate": 0,
                                    "fps": 0,
                                    "gop_sec": 0,
                                    "h265_enable": false,
                                    "hardware_encode": false,
                                    "height": 1280,
                                    "max_bitrate": 0,
                                    "min_bitrate": 0,
                                    "roi": false,
                                    "sw_roi": false,
                                    "video_profile": 0,
                                    "width": 720
                                },
                                "flv_pull_url": {
                                    "FULL_HD1": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_or4.flv?auth_key=1678788983-0-0-ae6221bc812f5e4bf08396c6ba32a661",
                                    "SD1": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_ld.flv?auth_key=1678788983-0-0-9e1a7d26f7d1eaa697e03d63e1baa7c8",
                                    "SD2": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_sd.flv?auth_key=1678788983-0-0-e7ec3ca92ada1214e73cb46763264f6c"
                                },
                                "hls_pull_url": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_or4.m3u8?auth_key=1678788983-0-0-fb3c68547e2ccd6cd5b51f212c6a0757",
                                "hls_pull_url_map": {
                                    "FULL_HD1": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_or4.m3u8?auth_key=1678788983-0-0-fb3c68547e2ccd6cd5b51f212c6a0757",
                                    "SD1": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_ld.m3u8?auth_key=1678788983-0-0-732c1235af6982ed8a3d72f48d2e452a",
                                    "SD2": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_sd.m3u8?auth_key=1678788983-0-0-59415cb4b0749caaf06eb161c8e7bdc1"
                                },
                                "live_core_sdk_data": {
                                    "pull_data": {
                                        "options": {
                                            "default_quality": {
                                                "additional_content": "",
                                                "disable": 0,
                                                "fps": 0,
                                                "level": 3,
                                                "name": "超清",
                                                "resolution": "720x1280",
                                                "sdk_key": "origin",
                                                "v_bit_rate": 0,
                                                "v_codec": "264"
                                            },
                                            "qualities": [
                                                {
                                                    "additional_content": "",
                                                    "disable": 0,
                                                    "fps": 15,
                                                    "level": 1,
                                                    "name": "标清",
                                                    "resolution": "480x853",
                                                    "sdk_key": "ld",
                                                    "v_bit_rate": 1000000,
                                                    "v_codec": "264"
                                                },
                                                {
                                                    "additional_content": "",
                                                    "disable": 0,
                                                    "fps": 15,
                                                    "level": 2,
                                                    "name": "高清",
                                                    "resolution": "540x960",
                                                    "sdk_key": "sd",
                                                    "v_bit_rate": 1600000,
                                                    "v_codec": "264"
                                                },
                                                {
                                                    "additional_content": "",
                                                    "disable": 0,
                                                    "fps": 0,
                                                    "level": 3,
                                                    "name": "超清",
                                                    "resolution": "720x1280",
                                                    "sdk_key": "origin",
                                                    "v_bit_rate": 1242000,
                                                    "v_codec": "264"
                                                }
                                            ]
                                        },
                                        "stream_data": "{\"common\":{\"session_id\":\"037-202303071846232C9D5396DE5A881481C4\",\"rule_ids\":\"{\\\"ab_version_trace\\\":null,\\\"sched\\\":\\\"{\\\\\\\"result\\\\\\\":{\\\\\\\"hit\\\\\\\":\\\\\\\"default\\\\\\\",\\\\\\\"cdn\\\\\\\":100}}\\\"}\",\"app_id\":\"100100\"},\"data\":{\"origin\":{\"main\":{\"flv\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_or4.flv?auth_key=1678788983-0-0-ae6221bc812f5e4bf08396c6ba32a661\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_or4.m3u8?auth_key=1678788983-0-0-fb3c68547e2ccd6cd5b51f212c6a0757\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018_or4.sdp?auth_key=1678788983-0-0-edee4e571b31c0f40349cc5da00eec56\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h264\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"720x1280\\\",\\\"vbitrate\\\":1242000}\"}},\"md\":{\"main\":{\"flv\":\"https://pull-l3-admin.douyincdn.com/stage/stream-400851480528552018_md.flv?auth_key=1678788983-0-0-4c10e33c2c9add7895a8824a3513feee\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_md.m3u8?auth_key=1678788983-0-0-2b3dd6780d1c0bc64673c61ea95a04bf\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018_md.sdp?auth_key=1678788983-0-0-64e7b68f20297b2d9b04fc6687db056a\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h264\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"240x426\\\",\\\"vbitrate\\\":250000}\"}},\"sd\":{\"main\":{\"flv\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_sd.flv?auth_key=1678788983-0-0-e7ec3ca92ada1214e73cb46763264f6c\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_sd.m3u8?auth_key=1678788983-0-0-59415cb4b0749caaf06eb161c8e7bdc1\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018_sd.sdp?auth_key=1678788983-0-0-9a0b13812f6aff147e706f495b5a8b3f\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h264\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"540x960\\\",\\\"vbitrate\\\":1600000}\"}},\"ld\":{\"main\":{\"flv\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_ld.flv?auth_key=1678788983-0-0-9e1a7d26f7d1eaa697e03d63e1baa7c8\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_ld.m3u8?auth_key=1678788983-0-0-732c1235af6982ed8a3d72f48d2e452a\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018_ld.sdp?auth_key=1678788983-0-0-73e6502dcc1ea56c9de9433287378978\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h264\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"480x853\\\",\\\"vbitrate\\\":1000000}\"}},\"ao\":{\"main\":{\"flv\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_or4.flv?auth_key=1678788983-0-0-ae6221bc812f5e4bf08396c6ba32a661\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_or4.m3u8?auth_key=1678788983-0-0-fb3c68547e2ccd6cd5b51f212c6a0757\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018_or4.sdp?auth_key=1678788983-0-0-edee4e571b31c0f40349cc5da00eec56\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h264\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"720x1280\\\",\\\"vbitrate\\\":1242000}\"}}}}"
                                    }
                                },
                                "pull_datas": {},
                                "stream_orientation": 1
                            },
                            "title": "龙十五正在直播",
                            "toolbar_data": {
                                "entrance_list": [
                                    {
                                        "component_type": 24,
                                        "data_status": 1,
                                        "extra": "",
                                        "group_id": 5,
                                        "op_type": 0,
                                        "schema_url": "",
                                        "show_type": 1,
                                        "text": "更多"
                                    },
                                    {
                                        "component_type": 29,
                                        "data_status": 1,
                                        "extra": "{\"id\":463,\"name\":\"小心心\",\"type\":1,\"diamond_count\":1,\"combo\":true,\"image\":{\"url_list\":[\"http://p6-webcast.douyinpic.com/img/webcast/0ea40b8376ef8157791b928a339ed9c9~tplv-obj.image\",\"http://p3-webcast.douyinpic.com/img/webcast/0ea40b8376ef8157791b928a339ed9c9~tplv-obj.image\"],\"uri\":\"webcast/0ea40b8376ef8157791b928a339ed9c9\",\"avg_color\":\"#E0D4BC\"}}",
                                        "group_id": 6,
                                        "icon": {
                                            "avg_color": "#7A6D53",
                                            "flex_setting_list": [],
                                            "height": 0,
                                            "image_type": 0,
                                            "is_animated": false,
                                            "open_web_url": "",
                                            "text_setting_list": [],
                                            "uri": "webcast/0ea40b8376ef8157791b928a339ed9c9",
                                            "url_list": [
                                                "https://p6-webcast.douyinpic.com/img/webcast/0ea40b8376ef8157791b928a339ed9c9~tplv-resize:0:0.image",
                                                "https://p3-webcast.douyinpic.com/img/webcast/0ea40b8376ef8157791b928a339ed9c9~tplv-resize:0:0.image"
                                            ],
                                            "width": 0
                                        },
                                        "op_type": 0,
                                        "schema_url": "",
                                        "show_type": 3,
                                        "text": "快捷送礼"
                                    },
                                    {
                                        "component_type": 28,
                                        "data_status": 1,
                                        "extra": "",
                                        "group_id": 8,
                                        "op_type": 0,
                                        "schema_url": "",
                                        "show_type": 3,
                                        "text": "礼物"
                                    }
                                ],
                                "landscape_up_right": [],
                                "max_entrance_cnt": 4,
                                "more_panel": [
                                    {
                                        "component_type": 20,
                                        "data_status": 1,
                                        "extra": "{\"ShareStory\":1}",
                                        "group_id": 1,
                                        "op_type": 0,
                                        "schema_url": "",
                                        "show_type": 3,
                                        "text": "分享"
                                    },
                                    {
                                        "component_type": 31,
                                        "data_status": 1,
                                        "extra": "",
                                        "group_id": 10,
                                        "op_type": 0,
                                        "schema_url": "",
                                        "show_type": 1,
                                        "text": "聊天频道"
                                    }
                                ],
                                "skin_resource": {}
                            },
                            "user_count_str": "1"
                        },
                        "roomExtra": {
                            "digg_color": "0",
                            "is_official_channel": false,
                            "pay_scores": "0",
                            "signature": ""
                        },
                        "roomId": "7207750554766920451",
                        "web_rid": "139902822326",
                        "web_stream_url": {
                            "default_resolution": "FULL_HD1",
                            "extra": {
                                "anchor_interact_profile": 0,
                                "audience_interact_profile": 0,
                                "bframe_enable": false,
                                "bitrate_adapt_strategy": 0,
                                "bytevc1_enable": false,
                                "default_bitrate": 0,
                                "fps": 0,
                                "gop_sec": 0,
                                "h265_enable": false,
                                "hardware_encode": false,
                                "height": 1280,
                                "max_bitrate": 0,
                                "min_bitrate": 0,
                                "roi": false,
                                "sw_roi": false,
                                "video_profile": 0,
                                "width": 720
                            },
                            "flv_pull_url": {
                                "FULL_HD1": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018.flv?auth_key=1678788983-0-0-6bc17de7f172fe35988cc6068e41e5e6",
                                "SD1": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_ld5.flv?auth_key=1678788983-0-0-cbd7afae95d1db12f6c3aeb713e176a2",
                                "SD2": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_sd5.flv?auth_key=1678788983-0-0-158392fa2f35c8bf2177e8ebcdcf014e"
                            },
                            "hls_pull_url": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018.m3u8?auth_key=1678788983-0-0-473dc1ae2a12be66295b088ae0ae40ba",
                            "hls_pull_url_map": {
                                "FULL_HD1": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018.m3u8?auth_key=1678788983-0-0-473dc1ae2a12be66295b088ae0ae40ba",
                                "SD1": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_ld5.m3u8?auth_key=1678788983-0-0-f1fe82bc0d13ef322d38f3f11639110a",
                                "SD2": "http://pull-l3.douyincdn.com/stage/stream-400851480528552018_sd5.m3u8?auth_key=1678788983-0-0-bdcfd03d55fd2b0f873a727ebf8a20f3"
                            },
                            "live_core_sdk_data": {
                                "pull_data": {
                                    "options": {
                                        "default_quality": {
                                            "additional_content": "",
                                            "disable": 0,
                                            "fps": 0,
                                            "level": 3,
                                            "name": "超清",
                                            "resolution": "720x1280",
                                            "sdk_key": "origin",
                                            "v_bit_rate": 0,
                                            "v_codec": "bytevc1"
                                        },
                                        "qualities": [
                                            {
                                                "additional_content": "",
                                                "disable": 0,
                                                "fps": 15,
                                                "level": 1,
                                                "name": "标清",
                                                "resolution": "480x853",
                                                "sdk_key": "ld",
                                                "v_bit_rate": 1000000,
                                                "v_codec": "bytevc1"
                                            },
                                            {
                                                "additional_content": "",
                                                "disable": 0,
                                                "fps": 15,
                                                "level": 2,
                                                "name": "高清",
                                                "resolution": "540x960",
                                                "sdk_key": "sd",
                                                "v_bit_rate": 1600000,
                                                "v_codec": "bytevc1"
                                            },
                                            {
                                                "additional_content": "",
                                                "disable": 0,
                                                "fps": 25,
                                                "level": 3,
                                                "name": "超清",
                                                "resolution": "720x1280",
                                                "sdk_key": "origin",
                                                "v_bit_rate": 1242000,
                                                "v_codec": "bytevc1"
                                            }
                                        ]
                                    },
                                    "stream_data": "{\"common\":{\"session_id\":\"037-202303071846232C9D5396DE5A881481C4\",\"rule_ids\":\"{\\\"ab_version_trace\\\":null,\\\"sched\\\":\\\"{\\\\\\\"result\\\\\\\":{\\\\\\\"hit\\\\\\\":\\\\\\\"default\\\\\\\",\\\\\\\"cdn\\\\\\\":100}}\\\"}\",\"app_id\":\"100100\"},\"data\":{\"origin\":{\"main\":{\"flv\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018.flv?auth_key=1678788983-0-0-6bc17de7f172fe35988cc6068e41e5e6\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018.m3u8?auth_key=1678788983-0-0-473dc1ae2a12be66295b088ae0ae40ba\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018.sdp?auth_key=1678788983-0-0-970866ef0cc669693a8c18e690316b0a\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h265\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"720x1280\\\",\\\"vbitrate\\\":1242000}\"}},\"md\":{\"main\":{\"flv\":\"https://pull-l3-admin.douyincdn.com/stage/stream-400851480528552018_md.flv?auth_key=1678788983-0-0-4c10e33c2c9add7895a8824a3513feee\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_md.m3u8?auth_key=1678788983-0-0-2b3dd6780d1c0bc64673c61ea95a04bf\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018_md.sdp?auth_key=1678788983-0-0-64e7b68f20297b2d9b04fc6687db056a\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h264\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"240x426\\\",\\\"vbitrate\\\":250000}\"}},\"ao\":{\"main\":{\"flv\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018.flv?auth_key=1678788983-0-0-6bc17de7f172fe35988cc6068e41e5e6\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018.m3u8?auth_key=1678788983-0-0-473dc1ae2a12be66295b088ae0ae40ba\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018.sdp?auth_key=1678788983-0-0-970866ef0cc669693a8c18e690316b0a\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h265\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"720x1280\\\",\\\"vbitrate\\\":1242000}\"}},\"ld\":{\"main\":{\"flv\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_ld5.flv?auth_key=1678788983-0-0-cbd7afae95d1db12f6c3aeb713e176a2\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_ld5.m3u8?auth_key=1678788983-0-0-f1fe82bc0d13ef322d38f3f11639110a\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018_ld5.sdp?auth_key=1678788983-0-0-03762dec04b16659da28a623f0a96190\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h265\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"480x853\\\",\\\"vbitrate\\\":1000000}\"}},\"sd\":{\"main\":{\"flv\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_sd5.flv?auth_key=1678788983-0-0-158392fa2f35c8bf2177e8ebcdcf014e\",\"hls\":\"http://pull-l3.douyincdn.com/stage/stream-400851480528552018_sd5.m3u8?auth_key=1678788983-0-0-bdcfd03d55fd2b0f873a727ebf8a20f3\",\"cmaf\":\"\",\"dash\":\"\",\"lls\":\"http://pull-lls-l3.douyincdn.com/stage/stream-400851480528552018_sd5.sdp?auth_key=1678788983-0-0-536d14aaeedd77af98c4429ec40a453b\",\"tsl\":\"\",\"tile\":\"\",\"sdk_params\":\"{\\\"VCodec\\\":\\\"h265\\\",\\\"drType\\\":\\\"sdr\\\",\\\"gop\\\":4,\\\"resolution\\\":\\\"540x960\\\",\\\"vbitrate\\\":1600000}\"}}}}"
                                }
                            },
                            "pull_datas": {},
                            "stream_orientation": 1
                        }
                    }
                },
                "userStore": {
                    "headerUserInfo": {
                        "info": {}
                    },
                    "odin": {
                        "user_id": "583155380917424",
                        "user_is_auth": 0,
                        "user_is_login": 0,
                        "user_type": 12,
                        "user_unique_id": "7207753809644160552"
                    },
                    "userHandlerPause": false,
                    "userInfo": {}
                }
            },
            "layoutData": {
                "BitrateSelector": {
                    "bitrateLower": 200000,
                    "bitrateRange": [
                        200000,
                        2500000
                    ],
                    "bitrateUpper": 2000000,
                    "mode": "buffer-info",
                    "paramBf": 0.3,
                    "paramBp": 0.6,
                    "paramLower": 0.6,
                    "paramUpper": 1.4,
                    "paramUpperBl": 0.5,
                    "paramVl1": 0.75,
                    "paramVl2": 1,
                    "paramVlLower": 0.7,
                    "paramVlUpper": 0.9,
                    "quality_filter": {
                        "adapt_1080_0": {
                            "lower": 0,
                            "upper": 1300000
                        },
                        "normal_1080_0": {
                            "lower": 0,
                            "upper": 1300000
                        }
                    },
                    "slidingWindowCountThreshold": 30,
                    "slidingWindowExtraction": "weighted_median",
                    "slidingWindowType": "by_weight",
                    "slidingWindowWeight": "size",
                    "slidingWindowWeightThreshold": 20000000,
                    "white_list": [
                        "normal_1080_0",
                        "normal_720_0",
                        "normal_540_0",
                        "adapt_1080_0",
                        "adapt_720_0",
                        "adapt_540_0"
                    ]
                },
                "Client265NoSoft": 0,
                "audienceTestStatus": 0,
                "bottomWordOpt": 0,
                "categoryTab": {
                    "categoryData": [
                        {
                            "partition": {
                                "id_str": "4609",
                                "title": "主机游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "633",
                                        "title": "魔兽世界",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2607",
                                        "title": "永劫无间",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "716",
                                        "title": "横版格斗",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "628",
                                        "title": "拳皇系列",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "623",
                                        "title": "我的世界",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1054",
                                        "title": "魔兽争霸3",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "725",
                                        "title": "其他主机游戏",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "583",
                                        "title": "迷你世界",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "591",
                                "title": "棋牌桌游",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "592",
                                        "title": "斗地主",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "624",
                                        "title": "麻将",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "597",
                                        "title": "象棋",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "729",
                                        "title": "其他棋牌游戏",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "5163",
                                        "title": "网易狼人杀",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "619",
                                        "title": "军棋",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1395",
                                        "title": "三国杀手游",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "3843",
                                        "title": "JJ象棋",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "4627",
                                "title": "角色扮演",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "1251",
                                        "title": "原神",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1603",
                                        "title": "皇室战争",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1102",
                                        "title": "问道手游",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2078",
                                        "title": "问道端游",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "3635",
                                        "title": "怀旧天龙八部",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "590",
                                        "title": "明日之后",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "3534",
                                        "title": "暗黑破坏神：不朽",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "4594",
                                        "title": "天使之战",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "4630",
                                "title": "休闲游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "3143",
                                        "title": "蛋仔派对",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "5065",
                                        "title": "美食DIY",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "698",
                                        "title": "球球大作战",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "651",
                                        "title": "植物大战僵尸",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2895",
                                        "title": "最强的大脑",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2348",
                                        "title": "汤姆猫跑酷",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "3447",
                                        "title": "找不同",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "5292",
                                        "title": "羊了个羊",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "4618",
                                "title": "竞技游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "1270",
                                        "title": "5v5推塔手游",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "655",
                                        "title": "赛车游戏",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "580",
                                        "title": "DOTA2",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "687",
                                        "title": "格斗手游",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1106",
                                        "title": "跑跑卡丁车手游",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "586",
                                        "title": "第五人格",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "579",
                                        "title": "DOTA",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "5618",
                                        "title": "梦三国",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "4606",
                                "title": "策略游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "1321",
                                        "title": "怀旧FC",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1305",
                                        "title": "坦克世界",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1055",
                                        "title": "帝国时代",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1052",
                                        "title": "恐龙快打",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "3280",
                                        "title": "怀旧掌机",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1458",
                                        "title": "魂斗罗",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "672",
                                        "title": "西游释厄传",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "708",
                                        "title": "战舰世界",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "4603",
                                "title": "射击游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "648",
                                        "title": "CS:GO",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "613",
                                        "title": "吃鸡手游",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "600",
                                        "title": "射击游戏",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "4472",
                                        "title": "Apex英雄",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "4879",
                                        "title": "暗区突围",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "589",
                                        "title": "香肠派对",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "5746",
                                        "title": "无畏契约",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "659",
                                        "title": "CS 1.6",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "5837",
                                "title": "卡牌游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "657",
                                        "title": "阴阳师",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "4844",
                                        "title": "山海经异兽录",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "3889",
                                        "title": "炉石传说",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "1591",
                                        "title": "明日方舟",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "4840",
                                        "title": "铁杆三国",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "4183",
                                        "title": "少年三国志2",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "4817",
                                        "title": "崩坏：星穹铁道",
                                        "type": 1
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "10000",
                                "title": "娱乐天地",
                                "type": 3
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "2707",
                                        "title": "音乐",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2842",
                                        "title": "语音互动",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2836",
                                        "title": "情感",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2726",
                                        "title": "舞蹈",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2742",
                                        "title": "户外",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2791",
                                        "title": "运动",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2786",
                                        "title": "美食",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2751",
                                        "title": "旅行",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "10001",
                                "title": "科技文化",
                                "type": 3
                            },
                            "sub_partition": [
                                {
                                    "partition": {
                                        "id_str": "2800",
                                        "title": "教育",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                },
                                {
                                    "partition": {
                                        "id_str": "2756",
                                        "title": "人文艺术",
                                        "type": 2
                                    },
                                    "sub_partition": []
                                }
                            ]
                        }
                    ],
                    "recommendPartitions": [
                        {
                            "partition": {
                                "id_str": "4609",
                                "title": "主机游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "id_str": "2607",
                                    "title": "永劫无间",
                                    "type": 1
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "4609",
                                "title": "主机游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "id_str": "633",
                                    "title": "魔兽世界",
                                    "type": 1
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "4627",
                                "title": "角色扮演",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "id_str": "1251",
                                    "title": "原神",
                                    "type": 1
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "591",
                                "title": "棋牌桌游",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "id_str": "597",
                                    "title": "象棋",
                                    "type": 1
                                }
                            ]
                        },
                        {
                            "partition": {
                                "id_str": "4618",
                                "title": "竞技游戏",
                                "type": 1
                            },
                            "sub_partition": [
                                {
                                    "id_str": "586",
                                    "title": "第五人格",
                                    "type": 1
                                }
                            ]
                        }
                    ]
                },
                "checkQrCodeDelayTime": 0,
                "client_version": "",
                "collection": 0,
                "danmaku": {
                    "ai_cover": 1,
                    "ai_cover_opti_v2": 1,
                    "douyin_danmaku": 1,
                    "douyin_danmaku_30s-": 1,
                    "douyin_danmaku_conf": 1,
                    "douyin_danmaku_filter_low_score": false,
                    "douyin_danmuku_conf_region": 5,
                    "ebable_lvideo_old_pack": 1,
                    "enable_ad": true,
                    "enable_baike_pc_general_search_recall": 1,
                    "enable_cooperation_picture": 1,
                    "enable_cooperation_video": 1,
                    "enable_douyin_weitoutiao": 1,
                    "enable_experience_card": 1,
                    "enable_global_lvideo": 1,
                    "enable_new_dy_lvideo_source": 1,
                    "enable_pc_aladdin": 1,
                    "enable_pc_aladdin_douyin_game_gonglue": 1,
                    "enable_pc_aladdin_douyin_game_sports": 1,
                    "enable_pc_aladdin_douyin_songlist": 1,
                    "enable_pc_xigua_to_aweme": 1,
                    "enable_world_cup_recall": 1,
                    "experience_card_min_doc_limit": 10,
                    "music_min_doc_limit": 6,
                    "music_min_doc_post_limit": 10,
                    "music_takedown_group": 1,
                    "new_home_module_with_tab": 2,
                    "pc_web_homepage_title_cut": 1,
                    "sati": {
                        "search": {
                            "enable_ecpm_receivable": true
                        }
                    },
                    "search": {
                        "enable_aweme_pc_hotsoon": 1,
                        "enable_general_web_live_card": true,
                        "enable_world_cup_recall": 1,
                        "enable_zero_risk_list": 1,
                        "need_tag_ala_src": {
                            "cartoon_global": [
                                4
                            ],
                            "douyin_experience_card": [
                                4
                            ],
                            "douyin_hotsonglist": [
                                4
                            ],
                            "douyin_playlet_v1": [
                                4
                            ],
                            "douyin_sport": [
                                4
                            ],
                            "douyin_tips": [
                                4
                            ],
                            "douyin_weitoutiao": [
                                4
                            ],
                            "ky_album_info_card": [
                                4
                            ]
                        }
                    },
                    "song_list_pack_max_limit": 6
                },
                "downloadGuide": 0,
                "ecomOpt": 0,
                "edgeDownOptions": {},
                "enableHoverToDisplay": 1,
                "errorBoundaryOpt": 1,
                "fansClubTestStatus": 1,
                "feedLiveFullPlayer": 0,
                "fps": 0,
                "fullMiniWindow": 0,
                "hasHorizontalHeader": 1,
                "hdStreamNeedLogin": 1,
                "imShowActiveStatus": 0,
                "inPicture": 0,
                "isClient": false,
                "landscapeStrategy": 1,
                "liveHeadWindow": 4,
                "liveHighClientH265": 0,
                "liveHighWebH265": 0,
                "liveLinkPrefetch": 1,
                "liveMiburiPlugin": 2,
                "livePush": 1,
                "liveSpringFeatures": {
                    "appointment": 1,
                    "metro": 1,
                    "programme": 1,
                    "theme": 1
                },
                "liveTabOptimize": 0,
                "loginBgImg": "https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/login-resetpwd-bg.png",
                "loginOnlyPanel": 0,
                "loginPanelStyle": 0,
                "lookEnter": 0,
                "lookGaussianBlur": 0,
                "lookInteraction": 0,
                "lookRelateAllScene": 0,
                "lowDeviceOptimization": 0,
                "mixEntrance": 0,
                "newInteractiveAdapter": 2,
                "newLookUiAdapter": 1,
                "newSilent": 0,
                "newSwiper": 0,
                "noDisturbV2": 0,
                "occupyPicture": 0,
                "onDemandCost": {
                    "frontTime": 420000,
                    "peakEndTime": 82800000,
                    "peakStartTime": 68400000
                },
                "os": {
                    "os": "Mac",
                    "version": ""
                },
                "pageGrayscaleConf": {
                    "blockList": {
                        "all": [],
                        "part": [
                            "/fifaworldcup"
                        ]
                    },
                    "mode": ""
                },
                "pcClusterGrayscale": 0,
                "permanentDislikeBtn": 0,
                "query": {},
                "recommendLoginGuideFirstInstall": 0,
                "recommendLoginGuideTextType": 0,
                "registerTime": 1678185983,
                "roomEnterUserLogin": 0,
                "searchBarBottomWord": 0,
                "searchBarStyleOpt": 3,
                "searchHorizontal": 1,
                "searchLayout": 0,
                "searchPageSSR": 0,
                "searchScrollAutoplay": 0,
                "secondTabBtn": 0,
                "secondWallpaper": 0,
                "shareFlip": 0,
                "shortLinkLogin": 0,
                "showCreatorGuide": 0,
                "tceCluster": "grayscale",
                "updateModule": 0,
                "updateNodeSdk": -1,
                "use264Adapt": 0,
                "use265ClientLow": 0,
                "use265HardParse": 0,
                "use265Web": 0,
                "useDashWeb": 0,
                "videoControlOpt": {
                    "tip_show_time": 15,
                    "type": 2
                },
                "videoPreloadConfig": {
                    "preload_min_buffer": 5,
                    "preload_time": 10
                },
                "videoPreloadType": 0,
                "volumeBalance": 0,
                "vs1080Login": 1,
                "vsEntryAnimate": 0,
                "vsLivePush": 1,
                "vsSpring": 1,
                "websocketKey": [
                    {
                        "param_name": "live_id",
                        "param_type": "string"
                    },
                    {
                        "param_name": "aid",
                        "param_type": "string"
                    },
                    {
                        "param_name": "version_code",
                        "param_type": "string"
                    },
                    {
                        "param_name": "webcast_sdk_version",
                        "param_type": "string"
                    },
                    {
                        "param_name": "room_id",
                        "param_type": "string"
                    },
                    {
                        "param_name": "sub_room_id",
                        "param_type": "string"
                    },
                    {
                        "param_name": "sub_channel_id",
                        "param_type": "string"
                    },
                    {
                        "param_name": "did_rule",
                        "param_type": "string"
                    },
                    {
                        "param_name": "user_unique_id",
                        "param_type": "string"
                    },
                    {
                        "param_name": "device_platform",
                        "param_type": "string"
                    },
                    {
                        "param_name": "device_type",
                        "param_type": "string"
                    },
                    {
                        "param_name": "ac",
                        "param_type": "string"
                    },
                    {
                        "param_name": "identity",
                        "param_type": "string"
                    }
                ],
                "xgvideoOptions": {},
                "zhuantiSidebar": 1
            },
            "odin": {
                "user_id": "583155380917424",
                "user_is_auth": 0,
                "user_is_login": 0,
                "user_type": 12,
                "user_unique_id": "7207753809644160552"
            },
            "pathname": "/139902822326",
            "routeInitialProps": {
                "isXiguaDomain": false,
                "layoutData": {
                    "BitrateSelector": {
                        "bitrateLower": 200000,
                        "bitrateRange": [
                            200000,
                            2500000
                        ],
                        "bitrateUpper": 2000000,
                        "mode": "buffer-info",
                        "paramBf": 0.3,
                        "paramBp": 0.6,
                        "paramLower": 0.6,
                        "paramUpper": 1.4,
                        "paramUpperBl": 0.5,
                        "paramVl1": 0.75,
                        "paramVl2": 1,
                        "paramVlLower": 0.7,
                        "paramVlUpper": 0.9,
                        "quality_filter": {
                            "adapt_1080_0": {
                                "lower": 0,
                                "upper": 1300000
                            },
                            "normal_1080_0": {
                                "lower": 0,
                                "upper": 1300000
                            }
                        },
                        "slidingWindowCountThreshold": 30,
                        "slidingWindowExtraction": "weighted_median",
                        "slidingWindowType": "by_weight",
                        "slidingWindowWeight": "size",
                        "slidingWindowWeightThreshold": 20000000,
                        "white_list": [
                            "normal_1080_0",
                            "normal_720_0",
                            "normal_540_0",
                            "adapt_1080_0",
                            "adapt_720_0",
                            "adapt_540_0"
                        ]
                    },
                    "Client265NoSoft": 0,
                    "audienceTestStatus": 0,
                    "bottomWordOpt": 0,
                    "categoryTab": {
                        "categoryData": [
                            {
                                "partition": {
                                    "id_str": "4609",
                                    "title": "主机游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "633",
                                            "title": "魔兽世界",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2607",
                                            "title": "永劫无间",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "716",
                                            "title": "横版格斗",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "628",
                                            "title": "拳皇系列",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "623",
                                            "title": "我的世界",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1054",
                                            "title": "魔兽争霸3",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "725",
                                            "title": "其他主机游戏",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "583",
                                            "title": "迷你世界",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "591",
                                    "title": "棋牌桌游",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "592",
                                            "title": "斗地主",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "624",
                                            "title": "麻将",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "597",
                                            "title": "象棋",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "729",
                                            "title": "其他棋牌游戏",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "5163",
                                            "title": "网易狼人杀",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "619",
                                            "title": "军棋",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1395",
                                            "title": "三国杀手游",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "3843",
                                            "title": "JJ象棋",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "4627",
                                    "title": "角色扮演",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "1251",
                                            "title": "原神",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1603",
                                            "title": "皇室战争",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1102",
                                            "title": "问道手游",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2078",
                                            "title": "问道端游",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "3635",
                                            "title": "怀旧天龙八部",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "590",
                                            "title": "明日之后",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "3534",
                                            "title": "暗黑破坏神：不朽",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "4594",
                                            "title": "天使之战",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "4630",
                                    "title": "休闲游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "3143",
                                            "title": "蛋仔派对",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "5065",
                                            "title": "美食DIY",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "698",
                                            "title": "球球大作战",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "651",
                                            "title": "植物大战僵尸",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2895",
                                            "title": "最强的大脑",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2348",
                                            "title": "汤姆猫跑酷",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "3447",
                                            "title": "找不同",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "5292",
                                            "title": "羊了个羊",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "4618",
                                    "title": "竞技游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "1270",
                                            "title": "5v5推塔手游",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "655",
                                            "title": "赛车游戏",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "580",
                                            "title": "DOTA2",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "687",
                                            "title": "格斗手游",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1106",
                                            "title": "跑跑卡丁车手游",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "586",
                                            "title": "第五人格",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "579",
                                            "title": "DOTA",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "5618",
                                            "title": "梦三国",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "4606",
                                    "title": "策略游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "1321",
                                            "title": "怀旧FC",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1305",
                                            "title": "坦克世界",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1055",
                                            "title": "帝国时代",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1052",
                                            "title": "恐龙快打",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "3280",
                                            "title": "怀旧掌机",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1458",
                                            "title": "魂斗罗",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "672",
                                            "title": "西游释厄传",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "708",
                                            "title": "战舰世界",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "4603",
                                    "title": "射击游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "648",
                                            "title": "CS:GO",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "613",
                                            "title": "吃鸡手游",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "600",
                                            "title": "射击游戏",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "4472",
                                            "title": "Apex英雄",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "4879",
                                            "title": "暗区突围",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "589",
                                            "title": "香肠派对",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "5746",
                                            "title": "无畏契约",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "659",
                                            "title": "CS 1.6",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "5837",
                                    "title": "卡牌游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "657",
                                            "title": "阴阳师",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "4844",
                                            "title": "山海经异兽录",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "3889",
                                            "title": "炉石传说",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "1591",
                                            "title": "明日方舟",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "4840",
                                            "title": "铁杆三国",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "4183",
                                            "title": "少年三国志2",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "4817",
                                            "title": "崩坏：星穹铁道",
                                            "type": 1
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "10000",
                                    "title": "娱乐天地",
                                    "type": 3
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "2707",
                                            "title": "音乐",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2842",
                                            "title": "语音互动",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2836",
                                            "title": "情感",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2726",
                                            "title": "舞蹈",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2742",
                                            "title": "户外",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2791",
                                            "title": "运动",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2786",
                                            "title": "美食",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2751",
                                            "title": "旅行",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "10001",
                                    "title": "科技文化",
                                    "type": 3
                                },
                                "sub_partition": [
                                    {
                                        "partition": {
                                            "id_str": "2800",
                                            "title": "教育",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    },
                                    {
                                        "partition": {
                                            "id_str": "2756",
                                            "title": "人文艺术",
                                            "type": 2
                                        },
                                        "sub_partition": []
                                    }
                                ]
                            }
                        ],
                        "recommendPartitions": [
                            {
                                "partition": {
                                    "id_str": "4609",
                                    "title": "主机游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "id_str": "2607",
                                        "title": "永劫无间",
                                        "type": 1
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "4609",
                                    "title": "主机游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "id_str": "633",
                                        "title": "魔兽世界",
                                        "type": 1
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "4627",
                                    "title": "角色扮演",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "id_str": "1251",
                                        "title": "原神",
                                        "type": 1
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "591",
                                    "title": "棋牌桌游",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "id_str": "597",
                                        "title": "象棋",
                                        "type": 1
                                    }
                                ]
                            },
                            {
                                "partition": {
                                    "id_str": "4618",
                                    "title": "竞技游戏",
                                    "type": 1
                                },
                                "sub_partition": [
                                    {
                                        "id_str": "586",
                                        "title": "第五人格",
                                        "type": 1
                                    }
                                ]
                            }
                        ]
                    },
                    "checkQrCodeDelayTime": 0,
                    "client_version": "",
                    "collection": 0,
                    "danmaku": {
                        "ai_cover": 1,
                        "ai_cover_opti_v2": 1,
                        "douyin_danmaku": 1,
                        "douyin_danmaku_30s-": 1,
                        "douyin_danmaku_conf": 1,
                        "douyin_danmaku_filter_low_score": false,
                        "douyin_danmuku_conf_region": 5,
                        "ebable_lvideo_old_pack": 1,
                        "enable_ad": true,
                        "enable_baike_pc_general_search_recall": 1,
                        "enable_cooperation_picture": 1,
                        "enable_cooperation_video": 1,
                        "enable_douyin_weitoutiao": 1,
                        "enable_experience_card": 1,
                        "enable_global_lvideo": 1,
                        "enable_new_dy_lvideo_source": 1,
                        "enable_pc_aladdin": 1,
                        "enable_pc_aladdin_douyin_game_gonglue": 1,
                        "enable_pc_aladdin_douyin_game_sports": 1,
                        "enable_pc_aladdin_douyin_songlist": 1,
                        "enable_pc_xigua_to_aweme": 1,
                        "enable_world_cup_recall": 1,
                        "experience_card_min_doc_limit": 10,
                        "music_min_doc_limit": 6,
                        "music_min_doc_post_limit": 10,
                        "music_takedown_group": 1,
                        "new_home_module_with_tab": 2,
                        "pc_web_homepage_title_cut": 1,
                        "sati": {
                            "search": {
                                "enable_ecpm_receivable": true
                            }
                        },
                        "search": {
                            "enable_aweme_pc_hotsoon": 1,
                            "enable_general_web_live_card": true,
                            "enable_world_cup_recall": 1,
                            "enable_zero_risk_list": 1,
                            "need_tag_ala_src": {
                                "cartoon_global": [
                                    4
                                ],
                                "douyin_experience_card": [
                                    4
                                ],
                                "douyin_hotsonglist": [
                                    4
                                ],
                                "douyin_playlet_v1": [
                                    4
                                ],
                                "douyin_sport": [
                                    4
                                ],
                                "douyin_tips": [
                                    4
                                ],
                                "douyin_weitoutiao": [
                                    4
                                ],
                                "ky_album_info_card": [
                                    4
                                ]
                            }
                        },
                        "song_list_pack_max_limit": 6
                    },
                    "downloadGuide": 0,
                    "ecomOpt": 0,
                    "edgeDownOptions": {},
                    "enableHoverToDisplay": 1,
                    "errorBoundaryOpt": 1,
                    "fansClubTestStatus": 1,
                    "feedLiveFullPlayer": 0,
                    "fps": 0,
                    "fullMiniWindow": 0,
                    "hasHorizontalHeader": 1,
                    "hdStreamNeedLogin": 1,
                    "imShowActiveStatus": 0,
                    "inPicture": 0,
                    "isClient": false,
                    "landscapeStrategy": 1,
                    "liveHeadWindow": 4,
                    "liveHighClientH265": 0,
                    "liveHighWebH265": 0,
                    "liveLinkPrefetch": 1,
                    "liveMiburiPlugin": 2,
                    "livePush": 1,
                    "liveSpringFeatures": {
                        "appointment": 1,
                        "metro": 1,
                        "programme": 1,
                        "theme": 1
                    },
                    "liveTabOptimize": 0,
                    "loginBgImg": "https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/login-resetpwd-bg.png",
                    "loginOnlyPanel": 0,
                    "loginPanelStyle": 0,
                    "lookEnter": 0,
                    "lookGaussianBlur": 0,
                    "lookInteraction": 0,
                    "lookRelateAllScene": 0,
                    "lowDeviceOptimization": 0,
                    "mixEntrance": 0,
                    "newInteractiveAdapter": 2,
                    "newLookUiAdapter": 1,
                    "newSilent": 0,
                    "newSwiper": 0,
                    "noDisturbV2": 0,
                    "occupyPicture": 0,
                    "onDemandCost": {
                        "frontTime": 420000,
                        "peakEndTime": 82800000,
                        "peakStartTime": 68400000
                    },
                    "os": {
                        "os": "Mac",
                        "version": ""
                    },
                    "pageGrayscaleConf": {
                        "blockList": {
                            "all": [],
                            "part": [
                                "/fifaworldcup"
                            ]
                        },
                        "mode": ""
                    },
                    "pcClusterGrayscale": 0,
                    "permanentDislikeBtn": 0,
                    "query": {},
                    "recommendLoginGuideFirstInstall": 0,
                    "recommendLoginGuideTextType": 0,
                    "registerTime": 1678185983,
                    "roomEnterUserLogin": 0,
                    "searchBarBottomWord": 0,
                    "searchBarStyleOpt": 3,
                    "searchHorizontal": 1,
                    "searchLayout": 0,
                    "searchPageSSR": 0,
                    "searchScrollAutoplay": 0,
                    "secondTabBtn": 0,
                    "secondWallpaper": 0,
                    "shareFlip": 0,
                    "shortLinkLogin": 0,
                    "showCreatorGuide": 0,
                    "tceCluster": "grayscale",
                    "updateModule": 0,
                    "updateNodeSdk": -1,
                    "use264Adapt": 0,
                    "use265ClientLow": 0,
                    "use265HardParse": 0,
                    "use265Web": 0,
                    "useDashWeb": 0,
                    "videoControlOpt": {
                        "tip_show_time": 15,
                        "type": 2
                    },
                    "videoPreloadConfig": {
                        "preload_min_buffer": 5,
                        "preload_time": 10
                    },
                    "videoPreloadType": 0,
                    "volumeBalance": 0,
                    "vs1080Login": 1,
                    "vsEntryAnimate": 0,
                    "vsLivePush": 1,
                    "vsSpring": 1,
                    "websocketKey": [
                        {
                            "param_name": "live_id",
                            "param_type": "string"
                        },
                        {
                            "param_name": "aid",
                            "param_type": "string"
                        },
                        {
                            "param_name": "version_code",
                            "param_type": "string"
                        },
                        {
                            "param_name": "webcast_sdk_version",
                            "param_type": "string"
                        },
                        {
                            "param_name": "room_id",
                            "param_type": "string"
                        },
                        {
                            "param_name": "sub_room_id",
                            "param_type": "string"
                        },
                        {
                            "param_name": "sub_channel_id",
                            "param_type": "string"
                        },
                        {
                            "param_name": "did_rule",
                            "param_type": "string"
                        },
                        {
                            "param_name": "user_unique_id",
                            "param_type": "string"
                        },
                        {
                            "param_name": "device_platform",
                            "param_type": "string"
                        },
                        {
                            "param_name": "device_type",
                            "param_type": "string"
                        },
                        {
                            "param_name": "ac",
                            "param_type": "string"
                        },
                        {
                            "param_name": "identity",
                            "param_type": "string"
                        }
                    ],
                    "xgvideoOptions": {},
                    "zhuantiSidebar": 1
                }
            }
        },
        "e0b226782b4c5bc7d1a6f87a8e245e4f": {
            "abTestData": {
                "ecomOpt": 0
            },
            "enterRoomApi": "/webcast/room/web/enter/",
            "errorPrompts": "",
            "logId": "202303071846232C9D5396DE5A881481C4",
            "messageFrom": "live",
            "status_code": "0",
            "streamHosts": [
                "pull-l3.douyincdn.com",
                "pull-l3.douyincdn.com"
            ]
        }
    }
}

// WebcastChatMessage
export const WebcastChatMessage = {
    "common": {
        "method": "WebcastChatMessage",
        "msgId": "7207753232117994536",
        "roomId": "7207750554766920451",
        "isShowMsg": true,
        "priorityScore": "31000"
    },
    "user": {
        "id": "106269953510",
        "shortId": "2843986513",
        "nickName": "无念勿忘",
        "gender": 2,
        "AvatarThumb": {
            "urlListList": [
                "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def.jpeg?from=3067671334"
            ]
        },
        "BadgeImageList": [
            {
                "urlListList": [
                    "http://p3-webcast.douyinpic.com/img/webcast/webcast_admin_badge.png~tplv-obj.image"
                ],
                "height": "16",
                "width": "16",
                "imageType": 3,
                "content": {
                    "alternativeText": "房管勋章"
                }
            },
            {
                "urlListList": [
                    "http://p6-webcast.douyinpic.com/img/webcast/user_grade_level_v5_2.png~tplv-obj.image"
                ],
                "height": "16",
                "width": "32",
                "imageType": 1,
                "content": {
                    "level": "2",
                    "alternativeText": "荣誉等级2级勋章"
                }
            }
        ],
        "FollowInfo": {
            "followingCount": "33",
            "followerCount": "23",
            "followStatus": "2",
            "followerCountStr": "23",
            "followingCountStr": "33"
        },
        "displayId": "dyli3hqddbn1",
        "secUid": "MS4wLjABAAAAf4IlEAHlX2WuFhO4xUcwIMeheAQ6Lkf2hIUVzwFgKIY"
    },
    "content": "有人吗",
    "giftImage": {
        "urlListList": [
            "\nRhttp://p6-webcast.douyinpic.com/img/webcast/userlabel_new_watch.png~tplv-obj.image*\u0007#374C52"
        ]
    },
    "eventTime": "1678185830",
    "individualChatPriority": 80
}

// WebcastLikeMessage
export const WebcastLikeMessage = {
    "common": {
        "method": "WebcastLikeMessage",
        "msgId": "7207753995979950883",
        "roomId": "7207750554766920451",
        "isShowMsg": true,
        "anchorFoldType": "1",
        "anchorFoldTypeV2": "1"
    },
    "count": "5",
    "total": "79",
    "user": {
        "id": "106269953510",
        "shortId": "2843986513",
        "nickName": "无念勿忘",
        "gender": 2,
        "AvatarThumb": {
            "urlListList": [
                "https://p11.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def.jpeg?from=3067671334",
                "https://p6.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def.jpeg?from=3067671334",
                "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def.jpeg?from=3067671334"
            ],
            "uri": "100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def"
        },
        "BadgeImageList": [
            {
                "urlListList": [
                    "http://p6-webcast.douyinpic.com/img/webcast/webcast_admin_badge.png~tplv-obj.image",
                    "http://p3-webcast.douyinpic.com/img/webcast/webcast_admin_badge.png~tplv-obj.image"
                ],
                "uri": "webcast/webcast_admin_badge.png",
                "height": "16",
                "width": "16",
                "imageType": 3,
                "content": {
                    "alternativeText": "房管勋章"
                }
            },
            {
                "urlListList": [
                    "http://p3-webcast.douyinpic.com/img/webcast/user_grade_level_v5_2.png~tplv-obj.image",
                    "http://p6-webcast.douyinpic.com/img/webcast/user_grade_level_v5_2.png~tplv-obj.image"
                ],
                "uri": "webcast/user_grade_level_v5_2.png",
                "height": "16",
                "width": "32",
                "imageType": 1,
                "content": {
                    "level": "2",
                    "alternativeText": "荣誉等级2级勋章"
                }
            }
        ],
        "FollowInfo": {
            "followingCount": "33",
            "followerCount": "23",
            "followStatus": "2",
            "followerCountStr": "23",
            "followingCountStr": "33"
        },
        "displayId": "dyli3hqddbn1",
        "secUid": "MS4wLjABAAAAf4IlEAHlX2WuFhO4xUcwIMeheAQ6Lkf2hIUVzwFgKIY"
    },
    "displayControlInfo": {
        "showText": true,
        "showIcons": true
    }
}

// WebcastMemberMessage
export const WebcastMemberMessage = {
    "common": {
        "method": "WebcastMemberMessage",
        "msgId": "7207754176284216064",
        "roomId": "7207750554766920451",
        "isShowMsg": true,
        "foldType": "1",
        "anchorFoldType": "1",
        "priorityScore": "42000",
        "anchorFoldTypeV2": "3"
    },
    "user": {
        "id": "88216924984",
        "shortId": "271400955",
        "nickName": "云上星辰",
        "gender": 2,
        "Level": 1,
        "AvatarThumb": {
            "urlListList": [
                "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_7cfe142be93e4d40b5cfd5dabbc7350e.jpeg?from=3067671334"
            ]
        },
        "BadgeImageList": [
            {
                "urlListList": [
                    "http://p3-webcast.douyinpic.com/img/webcast/user_grade_level_v5_19.png~tplv-obj.image"
                ],
                "height": "16",
                "width": "32",
                "imageType": 1,
                "content": {
                    "level": "19",
                    "alternativeText": "荣誉等级19级勋章"
                }
            }
        ],
        "FollowInfo": {
            "followingCount": "2354",
            "followerCount": "968",
            "followerCountStr": "968",
            "followingCountStr": "2354"
        },
        "displayId": "271400955",
        "secUid": "MS4wLjABAAAAp6PQxhRCMcFQh4jxhPsZA0yHcs5b6DlWzww0Nx2QtrQ"
    },
    "memberCount": "1",
    "action": "1",
    "anchorDisplayText": {
        "key": "live_room_enter_toast",
        "defaultPatter": "{0:user} 来了{1:string}",
        "defaultFormat": {
            "color": "#b8ffffff",
            "weight": 400
        },
        "piecesList": [
            {
                "type": true,
                "format": {
                    "color": "#8CE7FF",
                    "weight": 400
                }
            }
        ]
    }
}

// WebcastGiftMessage, 小心心
export const WebcastGiftMessagexxx = {
    "common": {
        "method": "WebcastGiftMessage",
        "msgId": "7207754680351347747",
        "roomId": "7207750554766920451",
        "createTime": "1678186170514",
        "isShowMsg": true,
        "describe": "无念勿忘:送给主播 1个小心心",
        "priorityScore": "31000"
    },
    "giftId": "463",
    "groupCount": "1",
    "repeatCount": "1",
    "comboCount": "1",
    "user": {
        "id": "106269953510",
        "shortId": "2843986513",
        "nickName": "无念勿忘",
        "gender": 2,
        "AvatarThumb": {
            "urlListList": [
                "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def.jpeg?from=3067671334",
                "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def.jpeg?from=3067671334",
                "https://p11.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def.jpeg?from=3067671334"
            ],
            "uri": "100x100/aweme-avatar/mosaic-legacy_2dcef0002b6878d511def"
        },
        "BadgeImageList": [
            {
                "urlListList": [
                    "http://p6-webcast.douyinpic.com/img/webcast/webcast_admin_badge.png~tplv-obj.image",
                    "http://p3-webcast.douyinpic.com/img/webcast/webcast_admin_badge.png~tplv-obj.image"
                ],
                "uri": "webcast/webcast_admin_badge.png",
                "height": "16",
                "width": "16",
                "imageType": 3,
                "content": {
                    "alternativeText": "房管勋章"
                }
            },
            {
                "urlListList": [
                    "http://p6-webcast.douyinpic.com/img/webcast/user_grade_level_v5_2.png~tplv-obj.image",
                    "http://p3-webcast.douyinpic.com/img/webcast/user_grade_level_v5_2.png~tplv-obj.image"
                ],
                "uri": "webcast/user_grade_level_v5_2.png",
                "height": "16",
                "width": "32",
                "imageType": 1,
                "content": {
                    "level": "2",
                    "alternativeText": "荣誉等级2级勋章"
                }
            }
        ],
        "FollowInfo": {
            "followingCount": "33",
            "followerCount": "23",
            "followerCountStr": "23",
            "followingCountStr": "33"
        },
        "displayId": "dyli3hqddbn1",
        "secUid": "MS4wLjABAAAAf4IlEAHlX2WuFhO4xUcwIMeheAQ6Lkf2hIUVzwFgKIY"
    },
    "repeatEnd": 1,
    "groupId": "1678186167",
    "gift": {
        "image": {
            "urlListList": [
                "http://p3-webcast.douyinpic.com/img/webcast/0ea40b8376ef8157791b928a339ed9c9~tplv-obj.png",
                "http://p6-webcast.douyinpic.com/img/webcast/0ea40b8376ef8157791b928a339ed9c9~tplv-obj.png"
            ],
            "uri": "webcast/0ea40b8376ef8157791b928a339ed9c9",
            "avgColor": "#BCD9E0"
        },
        "describe": "送出小心心",
        "id": "463",
        "forLinkmic": true,
        "combo": true,
        "type": 1,
        "diamondCount": 1,
        "isDisplayedOnPanel": true,
        "name": "小心心",
        "icon": {
            "urlListList": [
                "http://p3-webcast.douyinpic.com/img/webcast/0ea40b8376ef8157791b928a339ed9c9~tplv-obj.png",
                "http://p6-webcast.douyinpic.com/img/webcast/0ea40b8376ef8157791b928a339ed9c9~tplv-obj.png"
            ],
            "uri": "webcast/0ea40b8376ef8157791b928a339ed9c9",
            "avgColor": "#CCB1A3"
        }
    },
    "sendType": "4",
    "publicAreaCommon": {
        "userLabel": {
            "urlListList": [
                "http://p6-webcast.douyinpic.com/img/webcast/userlabel_new_chat.png~tplv-obj.image",
                "http://p3-webcast.douyinpic.com/img/webcast/userlabel_new_chat.png~tplv-obj.image"
            ],
            "uri": "webcast/userlabel_new_chat.png",
            "avgColor": "#607A53"
        },
        "userConsumeInRoom": "100"
    },
    "trayDisplayText": {
        "key": "webcast_aweme_tray_message_to_anchor",
        "defaultPatter": "送{0}",
        "defaultFormat": {
            "color": "#B3FFFFFF",
            "weight": 400,
            "useRemoteClor": true
        },
        "piecesList": [
            {
                "type": true,
                "format": {
                    "color": "#B3FFFFFF",
                    "weight": 400,
                    "useRemoteClor": true
                }
            }
        ]
    },
    "clientGiftSource": 1
}

// WebcastUpdateFanTicketMessage
export const WebcastUpdateFanTicketMessage = {
    "common": {
        "method": "WebcastUpdateFanTicketMessage",
        "msgId": "7207756045819641889",
        "roomId": "7207750554766920451",
        "isShowMsg": true
    },
    "roomFanTicketCountText": "1",
    "roomFanTicketCount": "1",
    "forceUpdate": true
}

// WebcastGiftMessage, 棒棒糖
export const WebcastGiftMessagebbt = {
    "common": {
        "method": "WebcastGiftMessage",
        "msgId": "7207757117326382112",
        "roomId": "7207750554766920451",
        "createTime": "1678186754393",
        "isShowMsg": true,
        "describe": "灵境:送给主播 1个棒棒糖",
        "priorityScore": "31000"
    },
    "giftId": "165",
    "groupCount": "1",
    "repeatCount": "1",
    "comboCount": "1",
    "user": {
        "id": "67555080526",
        "shortId": "1238899346",
        "nickName": "灵境",
        "gender": 1,
        "Level": 1,
        "AvatarThumb": {
            "urlListList": [
                "https://p11.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_7fc746f98f1912895859b09b6927b597.jpeg?from=3067671334",
                "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_7fc746f98f1912895859b09b6927b597.jpeg?from=3067671334",
                "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_7fc746f98f1912895859b09b6927b597.jpeg?from=3067671334"
            ],
            "uri": "100x100/aweme-avatar/tos-cn-avt-0015_7fc746f98f1912895859b09b6927b597"
        },
        "BadgeImageList": [
            {
                "urlListList": [
                    "http://p6-webcast.douyinpic.com/img/webcast/user_grade_level_v5_10.png~tplv-obj.image",
                    "http://p3-webcast.douyinpic.com/img/webcast/user_grade_level_v5_10.png~tplv-obj.image"
                ],
                "uri": "webcast/user_grade_level_v5_10.png",
                "height": "16",
                "width": "32",
                "imageType": 1,
                "content": {
                    "level": "10",
                    "alternativeText": "荣誉等级10级勋章"
                }
            }
        ],
        "FollowInfo": {
            "followingCount": "1372",
            "followerCount": "326",
            "followerCountStr": "326",
            "followingCountStr": "1372"
        },
        "displayId": "1238899346",
        "secUid": "MS4wLjABAAAAAT58k7zwxqs1cFMS7BdLmYNx-F0WBO68OxTo8zZ10gA"
    },
    "groupId": "1678186754",
    "gift": {
        "image": {
            "urlListList": [
                "http://p6-webcast.douyinpic.com/img/webcast/cadd229a47b7fad58ba021c7d4638516~tplv-obj.png",
                "http://p3-webcast.douyinpic.com/img/webcast/cadd229a47b7fad58ba021c7d4638516~tplv-obj.png"
            ],
            "uri": "webcast/cadd229a47b7fad58ba021c7d4638516",
            "avgColor": "#EBE1CE"
        },
        "describe": "送出棒棒糖",
        "id": "165",
        "forLinkmic": true,
        "combo": true,
        "type": 1,
        "diamondCount": 9,
        "isDisplayedOnPanel": true,
        "name": "棒棒糖",
        "icon": {
            "urlListList": [
                "http://p3-webcast.douyinpic.com/img/webcast/cadd229a47b7fad58ba021c7d4638516~tplv-obj.png",
                "http://p6-webcast.douyinpic.com/img/webcast/cadd229a47b7fad58ba021c7d4638516~tplv-obj.png"
            ],
            "uri": "webcast/cadd229a47b7fad58ba021c7d4638516",
            "avgColor": "#CCA3BE"
        }
    },
    "sendType": "4",
    "publicAreaCommon": {
        "userLabel": {
            "urlListList": [
                "http://p3-webcast.douyinpic.com/img/webcast/userlabel_new_watch.png~tplv-obj.image",
                "http://p6-webcast.douyinpic.com/img/webcast/userlabel_new_watch.png~tplv-obj.image"
            ],
            "uri": "webcast/userlabel_new_watch.png",
            "avgColor": "#CECEEB"
        },
        "userConsumeInRoom": "100"
    },
    "trayDisplayText": {
        "key": "webcast_aweme_tray_message_to_anchor",
        "defaultPatter": "送{0}",
        "defaultFormat": {
            "color": "#B3FFFFFF",
            "weight": 400,
            "useRemoteClor": true
        },
        "piecesList": [
            {
                "type": true,
                "format": {
                    "color": "#B3FFFFFF",
                    "weight": 400,
                    "useRemoteClor": true
                }
            }
        ]
    },
    "totalCount": "1",
    "clientGiftSource": 1,
    "sendTime": "1678186753589",
    "traceId": "675550805261678186753527142"
}

// WebcastGiftMessage, 大啤酒
export const WebcastGifgMessageddj = {
    "common": {
        "method": "WebcastGiftMessage",
        "msgId": "7207795208917095457",
        "roomId": "7207786341818583843",
        "createTime": "1678195605216",
        "isShowMsg": true,
        "describe": "龙十五:送给主播 1个大啤酒",
        "priorityScore": "31000"
    },
    "giftId": "2002",
    "groupCount": "1",
    "repeatCount": "1",
    "comboCount": "1",
    "user": {
        "id": "85218558949",
        "shortId": "193121384",
        "nickName": "龙十五",
        "Level": 1,
        "AvatarThumb": {
            "urlListList": [
                "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334",
                "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334",
                "https://p6.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d.jpeg?from=3067671334"
            ],
            "uri": "100x100/aweme-avatar/mosaic-legacy_18b4800018511dd66770d"
        },
        "BadgeImageList": [
            {
                "urlListList": [
                    "http://p6-webcast.douyinpic.com/img/webcast/user_grade_level_v5_8.png~tplv-obj.image",
                    "http://p3-webcast.douyinpic.com/img/webcast/user_grade_level_v5_8.png~tplv-obj.image"
                ],
                "uri": "webcast/user_grade_level_v5_8.png",
                "height": "16",
                "width": "32",
                "imageType": 1,
                "content": {
                    "level": "8",
                    "alternativeText": "荣誉等级8级勋章"
                }
            }
        ],
        "FollowInfo": {
            "followingCount": "188",
            "followerCount": "54",
            "followerCountStr": "54",
            "followingCountStr": "188"
        },
        "displayId": "193121384",
        "secUid": "MS4wLjABAAAAZ1prSP1MRt76bznEpU_w6XJfo0EWjr5PnyTznzFRI7w"
    },
    "repeatEnd": 1,
    "groupId": "1678195602",
    "gift": {
        "image": {
            "urlListList": [
                "http://p3-webcast.douyinpic.com/img/webcast/a24b3cc863742fd4bc3de0f53dac4487.png~tplv-obj.png",
                "http://p6-webcast.douyinpic.com/img/webcast/a24b3cc863742fd4bc3de0f53dac4487.png~tplv-obj.png"
            ],
            "uri": "webcast/a24b3cc863742fd4bc3de0f53dac4487.png",
            "avgColor": "#B1CCA3"
        },
        "describe": "送了一杯大啤酒",
        "id": "2002",
        "forLinkmic": true,
        "combo": true,
        "type": 1,
        "diamondCount": 2,
        "isDisplayedOnPanel": true,
        "name": "大啤酒",
        "icon": {
            "urlListList": [
                "http://p3-webcast.douyinpic.com/img/webcast/a24b3cc863742fd4bc3de0f53dac4487.png~tplv-obj.png",
                "http://p6-webcast.douyinpic.com/img/webcast/a24b3cc863742fd4bc3de0f53dac4487.png~tplv-obj.png"
            ],
            "uri": "webcast/a24b3cc863742fd4bc3de0f53dac4487.png",
            "avgColor": "#A3897C"
        }
    },
    "sendType": "4",
    "publicAreaCommon": {
        "userLabel": {
            "urlListList": [
                "http://p3-webcast.douyinpic.com/img/webcast/userlabel_new_chat.png~tplv-obj.image",
                "http://p6-webcast.douyinpic.com/img/webcast/userlabel_new_chat.png~tplv-obj.image"
            ],
            "uri": "webcast/userlabel_new_chat.png",
            "avgColor": "#CCBEA3"
        },
        "userConsumeInRoom": "300"
    },
    "trayDisplayText": {
        "key": "webcast_aweme_tray_message_to_anchor",
        "defaultPatter": "送{0}",
        "defaultFormat": {
            "color": "#B3FFFFFF",
            "weight": 400,
            "useRemoteClor": true
        },
        "piecesList": [
            {
                "type": true,
                "format": {
                    "color": "#B3FFFFFF",
                    "weight": 400,
                    "useRemoteClor": true
                }
            }
        ]
    },
    "clientGiftSource": 1
};

export const TestMsgs = [
    // firstMsg,
    WebcastGifgMessageddj,
    WebcastChatMessage,
    WebcastLikeMessage,
    WebcastMemberMessage,
    WebcastGiftMessagexxx,
    WebcastUpdateFanTicketMessage,
    WebcastGiftMessagebbt,
    WebcastGifgMessageddj,
] as Message[];

export default TestMsgs;