const collections = [
  {
    "name": "Zero-shot cloning",
    "description": "Compare the reference voice with speech synthesized from a new text.",
    "samples": [
      {
        "name": "男耳语",
        "clips": [
          [
            "Reference",
            "media/男耳语-a4cb65af2751.wav"
          ],
          [
            "Synthesis",
            "media/男耳语-adc49ae4622d.wav"
          ]
        ],
        "text": "别紧张，我就在你身边呢。不管待会儿发生什么，你都不用一个人扛，有我在，安心就好。",
        "prompt": "公园里，儿童的嬉笑声犹如天籁，让人感受到生活的美好。",
        "instruction": ""
      },
      {
        "name": "女耳语",
        "clips": [
          [
            "Reference",
            "media/女耳语-87dea2ab0d2a.wav"
          ],
          [
            "Synthesis",
            "media/女耳语-e7f9ae966cbd.wav"
          ]
        ],
        "text": "我其实观察你很久了，你低头抿嘴的样子，认真听人说话的样子，都让我觉得你这个人真好。",
        "prompt": "微风轻拂，树叶沙沙作响，带来了一丝丝宁静。",
        "instruction": ""
      },
      {
        "name": "讲课",
        "clips": [
          [
            "Reference",
            "media/讲课-7070c3e0c7b5.wav"
          ],
          [
            "Synthesis",
            "media/讲课-fada49a16e50.wav"
          ]
        ],
        "text": "同学们看这个句子，它写得特别生动，为什么呢？因为作者用上了表示动作的词。写作文的时候呀，把人物的动作写具体，读者就仿佛能看到画面。所以我们要多留心观察，多积累这些精准又生动的动词，让作文活起来！",
        "prompt": "这两个数它们也叫好朋友数，为什么呢？它们的个位能够凑成整十，只要是个位能凑整十，都叫好朋友数。",
        "instruction": ""
      },
      {
        "name": "女直播",
        "clips": [
          [
            "Reference",
            "media/女直播-b67451099fe5.wav"
          ],
          [
            "Synthesis",
            "media/女直播-0e8f7c250be0.wav"
          ]
        ],
        "text": "直播间的家人们，把‘想要’两个字扣在公屏上！平时你们去专柜买这一套，没有三五百根本下不来，但今天在咱直播间，为了冲销量、拉人气，我直接给你们破价！只要九十九！只有最后五十单，手慢真的就抢不到了，助理准备踢单了，三、二、一，上链接！",
        "prompt": "所以我只能开一分钟不管你有没有抢到我就开一分钟。好那这一分钟里面呢我不限量，我限量不限时，二十三双三十二双十八双二十四双去买好吧，我们九块九有六双，来我们倒计时三二一上车，来一号链接先去拍一分钟的时间呢乘以二去买十二双乘三去买十八双。",
        "instruction": ""
      },
      {
        "name": "儿童诗歌",
        "clips": [
          [
            "Reference",
            "media/儿童诗歌-1b1236ae3bbd.wav"
          ],
          [
            "Synthesis",
            "media/儿童诗歌-7b93fe91c7ea.wav"
          ]
        ],
        "text": "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
        "prompt": "白日依山尽，黄河入海流。",
        "instruction": ""
      },
      {
        "name": "女诗歌",
        "clips": [
          [
            "Reference",
            "media/女诗歌-d99ad490db4d.wav"
          ],
          [
            "Synthesis",
            "media/女诗歌-60e0b8ac612a.wav"
          ]
        ],
        "text": "东临碣石，以观沧海。水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起。日月之行，若出其中；星汉灿烂，若出其里。幸甚至哉，歌以咏志。",
        "prompt": "涉江采芙蓉，兰泽多芳草。",
        "instruction": ""
      },
      {
        "name": "男诗歌",
        "clips": [
          [
            "Reference",
            "media/男诗歌-d14f6f2ab583.wav"
          ],
          [
            "Synthesis",
            "media/男诗歌-0a2d860f22dd.wav"
          ]
        ],
        "text": "君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。",
        "prompt": "明月几时有，把酒问青天。",
        "instruction": ""
      },
      {
        "name": "林黛玉",
        "clips": [
          [
            "Reference",
            "media/林黛玉-6601cb73c82d.wav"
          ],
          [
            "Synthesis",
            "media/林黛玉-2b262a2fe847.wav"
          ]
        ],
        "text": "你也不必拿这些话堵我，我原就是个多心的人，横竖你们心里，哪里真有我的位置。",
        "prompt": "今儿他来，明儿我再来，这样渐错开来着，不至于太冷落，也不至于太热闹。",
        "instruction": ""
      },
      {
        "name": "产品介绍 · 01",
        "clips": [
          [
            "Reference",
            "media/1-7664202722bb.wav"
          ],
          [
            "Synthesis",
            "media/1-d937d336dafe.wav"
          ]
        ],
        "text": "今天这款产品，承载着我们长久的思考。我们始终相信，好的产品不需要过度营销，能够切实解决用户痛点，自然会被大家认可。",
        "prompt": "大家好，今天给大家带来一款重磅产品，性能提升了80%，但是价格只要友商的一半，这不仅仅是一个产品，更是一个精品。让我问问大家，这个价格你们觉得怎么样？Are you okay?",
        "instruction": ""
      },
      {
        "name": "演讲 · 02",
        "clips": [
          [
            "Reference",
            "media/2-5e7661f410a2.wav"
          ],
          [
            "Synthesis",
            "media/2-292b67728970.wav"
          ]
        ],
        "text": "我们很多时候追求自由，其实只是追求放纵。真正的自由，一定带着自律的枷锁，否则那不叫自由，叫被欲望奴役。",
        "prompt": "各位同学大家好，我想给同学们讲一讲读书的问题。其实同学们从小到大呢应该经常听说要读书。那我现在想问问各位，为什么要读书呢？很多人说万般皆下平啊，唯有读书高啊，因为读书能获得知识，读书能找到工作呀，我也不能说这是错的。",
        "instruction": ""
      },
      {
        "name": "音乐访谈 · 03",
        "clips": [
          [
            "Reference",
            "media/3-cfdb35cb7428.wav"
          ],
          [
            "Synthesis",
            "media/3-e03529dd1898.wav"
          ]
        ],
        "text": "舞台对我来说像充电站，只要音乐响起，所有疲惫都会暂时退场，下台之后我只想安安静静待一会儿。",
        "prompt": "大家好，最近一直在练习室准备新歌，每天都在追求更好的表现，感谢粉丝们一直以来的支持，你们的鼓励就是我进步的动力，希望能带给大家更多精彩的舞台表演，一起创造美好的回忆。",
        "instruction": ""
      },
      {
        "name": "故事导读 · 04",
        "clips": [
          [
            "Reference",
            "media/4-3e31ef1a7171.wav"
          ],
          [
            "Synthesis",
            "media/4-a6a0152c5743.wav"
          ]
        ],
        "text": "最动人的故事往往不需要华丽的辞藻，它朴素而真挚，能够跨越山海的阻隔，直抵每一个人的内心深处。接下来，请大家静下心来，一同聆听这份来自心底的真挚心声。",
        "prompt": "其实我是一个比较按部就班，而且希望水到渠成的这样一个人，我不会去强求做什么事情。可能10年前就有人提议，所以你为什么不自己做呢？因为现在很多主持人到了有一定的知名度和能力之后就开始做这个事情了。我始终没有这么做，是因为我觉得我的个性不是很合适。一个呢，因为做主持人，他相对比较安静，他是比较单纯的一项工作，我只要把我自己这摊子的事情做好就行。我其实不是一个特别善于和别人打交道的人。另外一个呢，我是一个比较苛刻的人，我自己做主持人的时候，为了一台节目，我都可以比如说我从六七点钟做下去，我几乎就不离开书房了。",
        "instruction": ""
      },
      {
        "name": "新闻播报 · 05",
        "clips": [
          [
            "Reference",
            "media/5-048f30069de8.wav"
          ],
          [
            "Synthesis",
            "media/5-8af17d58362b.wav"
          ]
        ],
        "text": "今年以来，一系列稳增长、惠民生政策协同发力，市场活力稳步释放，就业物价总体平稳，经济运行保持韧性与后劲。",
        "prompt": "生态环境部负责人介绍了党的十八大以来我国生态文明建设和生态环境保护取得的历史性成就。",
        "instruction": ""
      },
      {
        "name": "派蒙",
        "clips": [
          [
            "Reference",
            "media/派蒙-eae91393e490.wav"
          ],
          [
            "Synthesis",
            "media/派蒙-a188415cb31b.wav"
          ]
        ],
        "text": "旅行者，欢迎来到这片大陆。前方道路危机四伏，建议先找铁匠打造一把趁手的武器。村外的野狼虽然凶猛，但只要掌握闪避时机，便能轻松应对。祝你在此开启一段难忘的冒险。",
        "prompt": "和聪明人作对可真是让人头疼啊，我们继续前进吧。",
        "instruction": ""
      },
      {
        "name": "雷电将军",
        "clips": [
          [
            "Reference",
            "media/雷电将军-ebaa5f232275.wav"
          ],
          [
            "Synthesis",
            "media/雷电将军-13aab8d12af0.wav"
          ]
        ],
        "text": "哼，又一个想要攀附权贵的冒险者？先别急着凑上来。想获得我的赏识，先去城外的古堡清理掉那些烦人的亡灵。等你证明了自己的价值，再来与我对话吧。",
        "prompt": "民间都相信，雷雨天口念「桑原桑原」，便可以无恙。如是因我一念而起的雷暴，必不会加害于你。但是自然天气形成的雷雨就难说了。",
        "instruction": ""
      },
      {
        "name": "空",
        "clips": [
          [
            "Reference",
            "media/空-59541cd8ecb1.wav"
          ],
          [
            "Synthesis",
            "media/空-2568350042d9.wav"
          ]
        ],
        "text": "深渊吞没了我的故土，我拼尽余力筑起屏障，却再也无法踏出这片废墟。曾经号令千军的人，现在只能守着断壁残垣，听风声复述旧日的战歌。",
        "prompt": "就这样，陌生的神灵带走了我的妹妹，我也被神封印，失去了原本的力量。曾经跨越诸多世界的我们受困于此。",
        "instruction": ""
      },
      {
        "name": "荒泷一斗",
        "clips": [
          [
            "Reference",
            "media/荒泷一斗-6897318c082a.wav"
          ],
          [
            "Synthesis",
            "media/荒泷一斗-45165665ca30.wav"
          ]
        ],
        "text": "想跟我比谁更狠？我告诉你，我上回为了抢最后一串烤鱿鱼，跟流浪猫对峙了整整十分钟！",
        "prompt": "派蒙，你在说什么傻话，老大是我啊。天上地下花见坂荒泷派，从来只有我一个老大！",
        "instruction": ""
      },
      {
        "name": "Dumbledore",
        "clips": [
          [
            "Reference",
            "media/Dumbledore-a405276c5af0.wav"
          ],
          [
            "Synthesis",
            "media/Dumbledore-baae77c7abb8.wav"
          ]
        ],
        "text": "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        "prompt": "Oh to be young and to feel love's keen sting.",
        "instruction": ""
      },
      {
        "name": "Smaug",
        "clips": [
          [
            "Reference",
            "media/Smaug-ca140b664472.wav"
          ],
          [
            "Synthesis",
            "media/Smaug-56187eb0ecd4.wav"
          ]
        ],
        "text": "Your ancestors fled at the sound of my wings. Your children will flee at the mention of my name.",
        "prompt": "I laid low your warriors of old. I instilled terror in the hearts of men.",
        "instruction": ""
      },
      {
        "name": "Justin Hammer",
        "clips": [
          [
            "Reference",
            "media/Justin_Hammer-caa97c790c9c.wav"
          ],
          [
            "Synthesis",
            "media/Justin_Hammer-a73ca4ba21b9.wav"
          ]
        ],
        "text": "I don't know if you're aware of this, but I don't do 'waiting around'! I'm a CEO, not a coat rack!",
        "prompt": "I don't know if you know this, but I don't speak Russian!",
        "instruction": ""
      },
      {
        "name": "women whisper",
        "clips": [
          [
            "Reference",
            "media/women_whisper-d1cb6bd3c765.wav"
          ],
          [
            "Synthesis",
            "media/women_whisper-c5e1c1c23558.wav"
          ]
        ],
        "text": "I love this moment. Just you, me, and the soft light. I wish we could pause time right here.",
        "prompt": "The Norsemen considered the rainbow as a bridge over which the gods passed from earth to their home in the sky. Others have tried to explain the phenomenon physically. Aristotle thought that the rainbow was caused by reflection of the sun's rays by the rain.",
        "instruction": ""
      },
      {
        "name": "扎克伯格",
        "clips": [
          [
            "Reference",
            "media/扎克伯格_01-dfc4f5e1186a.wav"
          ],
          [
            "Synthesis",
            "media/扎克伯格-af04f6cc7d13.wav"
          ]
        ],
        "text": "And I said to her, well, wait a minute, when other parents would come over, you'd say how bad they must feel that their kid didn't go to college or something like that.",
        "prompt": "Because I'm pretty sure what they're going to do is they're going to take something like this Ray band Me category that we've kind of created with Ray band and the company that built that of really great AI glasses.",
        "instruction": ""
      }
    ]
  },
  {
    "name": "Languages & dialects",
    "description": "Hear five character voices across languages and regional varieties.",
    "samples": [
      {
        "name": "Sun Wukong · Mandarin",
        "clips": [
          [
            "Reference",
            "media/prompt-c25de6a964e8.wav"
          ],
          [
            "Synthesis",
            "media/speech-33c7c137e9b3.wav"
          ]
        ],
        "text": "你快叫玉帝老儿搬出天宫，把尊位让给我坐！",
        "prompt": "俺乃五百年前大闹天宫的齐天大圣孙悟空。",
        "instruction": "",
        "character": "孙悟空 · Sun Wukong",
        "variant": "Mandarin"
      },
      {
        "name": "Sun Wukong · English",
        "clips": [
          [
            "Reference",
            "media/prompt-c25de6a964e8.wav"
          ],
          [
            "Synthesis",
            "media/speech-858f73ddf8cb.wav"
          ]
        ],
        "text": "You'd better tell that old Jade Emperor to move out of the Heavenly Palace and hand over the throne to me!",
        "prompt": "俺乃五百年前大闹天宫的齐天大圣孙悟空。",
        "instruction": "",
        "character": "孙悟空 · Sun Wukong",
        "variant": "English"
      },
      {
        "name": "Sun Wukong · Japanese",
        "clips": [
          [
            "Reference",
            "media/prompt-c25de6a964e8.wav"
          ],
          [
            "Synthesis",
            "media/speech-0ba52a7c46aa.wav"
          ]
        ],
        "text": "さっさとあの玉帝の爺に天宮から出て行けって言っとけ！その位を俺様に譲れ！俺様が座ってやる！",
        "prompt": "俺乃五百年前大闹天宫的齐天大圣孙悟空。",
        "instruction": "语种：日语",
        "character": "孙悟空 · Sun Wukong",
        "variant": "Japanese"
      },
      {
        "name": "Sun Wukong · Cantonese",
        "clips": [
          [
            "Reference",
            "media/prompt-c25de6a964e8.wav"
          ],
          [
            "Synthesis",
            "media/speech-0266a6a4b784.wav"
          ]
        ],
        "text": "你快啲去同你嗰个玉帝公公讲，即刻由天宫搬出去，将个皇位让畀我，等我上去坐吓。",
        "prompt": "俺乃五百年前大闹天宫的齐天大圣孙悟空。",
        "instruction": "方言：粤语",
        "character": "孙悟空 · Sun Wukong",
        "variant": "Cantonese"
      },
      {
        "name": "Sun Wukong · Sichuanese",
        "clips": [
          [
            "Reference",
            "media/prompt-c25de6a964e8.wav"
          ],
          [
            "Synthesis",
            "media/speech-650c688b88d3.wav"
          ]
        ],
        "text": "快去给你那玉帝老头儿说一声，麻溜儿从天宫搬出去，把那个位子让出来，让老子上去坐一哈。",
        "prompt": "俺乃五百年前大闹天宫的齐天大圣孙悟空。",
        "instruction": "方言：四川话",
        "character": "孙悟空 · Sun Wukong",
        "variant": "Sichuanese"
      },
      {
        "name": "Peppa Pig · Mandarin",
        "clips": [
          [
            "Reference",
            "media/prompt-83e10d0df7e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-f22d9ca4d424.wav"
          ]
        ],
        "text": "我是佩奇。这是我的弟弟乔治。这是猪妈妈。这是猪爸爸。",
        "prompt": "George, if you jump in muddy puddles, you must wear your boots.",
        "instruction": "",
        "character": "小猪佩奇 · Peppa Pig",
        "variant": "Mandarin"
      },
      {
        "name": "Peppa Pig · English",
        "clips": [
          [
            "Reference",
            "media/prompt-83e10d0df7e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-fa8883c39e16.wav"
          ]
        ],
        "text": "I'm Peppa Pig. This is my little brother, George. This is Mummy Pig. And this is Daddy Pig.",
        "prompt": "George, if you jump in muddy puddles, you must wear your boots.",
        "instruction": "",
        "character": "小猪佩奇 · Peppa Pig",
        "variant": "English"
      },
      {
        "name": "Peppa Pig · Japanese",
        "clips": [
          [
            "Reference",
            "media/prompt-83e10d0df7e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-04343748244e.wav"
          ]
        ],
        "text": "私はペッパーです。弟のジョージです。マミーです。そして、パパです。",
        "prompt": "George, if you jump in muddy puddles, you must wear your boots.",
        "instruction": "语种：日语",
        "character": "小猪佩奇 · Peppa Pig",
        "variant": "Japanese"
      },
      {
        "name": "Peppa Pig · Cantonese",
        "clips": [
          [
            "Reference",
            "media/prompt-83e10d0df7e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-d688dcb81552.wav"
          ]
        ],
        "text": "我係佩奇。呢個係我細佬佐治。呢個係豬媽咪。呢個係豬爸爸。",
        "prompt": "George, if you jump in muddy puddles, you must wear your boots.",
        "instruction": "方言：粤语",
        "character": "小猪佩奇 · Peppa Pig",
        "variant": "Cantonese"
      },
      {
        "name": "Peppa Pig · Sichuanese",
        "clips": [
          [
            "Reference",
            "media/prompt-83e10d0df7e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-307106f20219.wav"
          ]
        ],
        "text": "我是佩奇。这是我幺弟乔治。这是我妈。这是我老汉儿。",
        "prompt": "George, if you jump in muddy puddles, you must wear your boots.",
        "instruction": "方言：四川话",
        "character": "小猪佩奇 · Peppa Pig",
        "variant": "Sichuanese"
      },
      {
        "name": "Kakarot · Mandarin",
        "clips": [
          [
            "Reference",
            "media/prompt-e645d2267926.wav"
          ],
          [
            "Synthesis",
            "media/speech-9e7ef1da87ce.wav"
          ]
        ],
        "text": "就算是被瞧不起的下等战士，只要拼命努力，也可能超过精英。",
        "prompt": "やっぱベジータもトランクスもいつ セルの木も感じるから生きてる どうなってんだって！",
        "instruction": "",
        "character": "卡卡罗特 · Kakarot",
        "variant": "Mandarin"
      },
      {
        "name": "Kakarot · English",
        "clips": [
          [
            "Reference",
            "media/prompt-e645d2267926.wav"
          ],
          [
            "Synthesis",
            "media/speech-9791df4e6873.wav"
          ]
        ],
        "text": "Even a low-class warrior can surpass an elite if they work hard enough.",
        "prompt": "やっぱベジータもトランクスもいつ セルの木も感じるから生きてる どうなってんだって！",
        "instruction": "",
        "character": "卡卡罗特 · Kakarot",
        "variant": "English"
      },
      {
        "name": "Kakarot · Japanese",
        "clips": [
          [
            "Reference",
            "media/prompt-e645d2267926.wav"
          ],
          [
            "Synthesis",
            "media/speech-b32e3bcba3d0.wav"
          ]
        ],
        "text": "落ちこぼれだって必死に努力すりゃ、エリートを超えることかもよ",
        "prompt": "やっぱベジータもトランクスもいつ セルの木も感じるから生きてる どうなってんだって！",
        "instruction": "",
        "character": "卡卡罗特 · Kakarot",
        "variant": "Japanese"
      },
      {
        "name": "Kakarot · Cantonese",
        "clips": [
          [
            "Reference",
            "media/prompt-e645d2267926.wav"
          ],
          [
            "Synthesis",
            "media/speech-b042523bf427.wav"
          ]
        ],
        "text": "就算系畀人睇死嘅低等战士，只要搏到尽咁努力，一样可以踩过啲精英。",
        "prompt": "やっぱベジータもトランクスもいつ セルの木も感じるから生きてる どうなってんだって！",
        "instruction": "口音：粤语",
        "character": "卡卡罗特 · Kakarot",
        "variant": "Cantonese"
      },
      {
        "name": "Kakarot · Sichuanese",
        "clips": [
          [
            "Reference",
            "media/prompt-e645d2267926.wav"
          ],
          [
            "Synthesis",
            "media/speech-1f5e5288ac42.wav"
          ]
        ],
        "text": "就算是被别个看不起的下等战士，只要豁出命去搞，也搞得过那些精英。",
        "prompt": "やっぱベジータもトランクスもいつ セルの木も感じるから生きてる どうなってんだって！",
        "instruction": "口音：四川话",
        "character": "卡卡罗特 · Kakarot",
        "variant": "Sichuanese"
      },
      {
        "name": "Bob the Minion · Mandarin",
        "clips": [
          [
            "Reference",
            "media/prompt-a213792a0025.wav"
          ],
          [
            "Synthesis",
            "media/speech-7501376e2b06.wav"
          ]
        ],
        "text": "格鲁，快看，是香蕉，好大的香蕉。",
        "prompt": "",
        "instruction": "",
        "character": "小黄人鲍勃 · Bob the Minion",
        "variant": "Mandarin"
      },
      {
        "name": "Bob the Minion · English",
        "clips": [
          [
            "Reference",
            "media/prompt-a213792a0025.wav"
          ],
          [
            "Synthesis",
            "media/speech-a65bc804707c.wav"
          ]
        ],
        "text": "Look, Glu. A banana. A big banana.",
        "prompt": "",
        "instruction": "",
        "character": "小黄人鲍勃 · Bob the Minion",
        "variant": "English"
      },
      {
        "name": "Bob the Minion · Japanese",
        "clips": [
          [
            "Reference",
            "media/prompt-a213792a0025.wav"
          ],
          [
            "Synthesis",
            "media/speech-691db4de86a8.wav"
          ]
        ],
        "text": "グル、見て！バナナだ！すごく大きいバナナ！",
        "prompt": "",
        "instruction": "语种：日语",
        "character": "小黄人鲍勃 · Bob the Minion",
        "variant": "Japanese"
      },
      {
        "name": "Bob the Minion · Cantonese",
        "clips": [
          [
            "Reference",
            "media/prompt-a213792a0025.wav"
          ],
          [
            "Synthesis",
            "media/speech-92c480fe6d4d.wav"
          ]
        ],
        "text": "格鲁，快啲睇！係香蕉嚟㗎，好大嚿香蕉啊！",
        "prompt": "",
        "instruction": "方言：粤语",
        "character": "小黄人鲍勃 · Bob the Minion",
        "variant": "Cantonese"
      },
      {
        "name": "Bob the Minion · Sichuanese",
        "clips": [
          [
            "Reference",
            "media/prompt-a213792a0025.wav"
          ],
          [
            "Synthesis",
            "media/speech-a77702ca3f68.wav"
          ]
        ],
        "text": "格鲁，快看嘛。香蕉，好大一根哦！",
        "prompt": "",
        "instruction": "方言：四川话",
        "character": "小黄人鲍勃 · Bob the Minion",
        "variant": "Sichuanese"
      },
      {
        "name": "Hornet · Mandarin",
        "clips": [
          [
            "Reference",
            "media/prompt-13233fd7a5e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-a126a5b95e77.wav"
          ]
        ],
        "text": "不要再靠近了，鬼魂。我看到你了，在灌木丛中偷偷摸摸地跟踪我。",
        "prompt": "",
        "instruction": "语言：中文",
        "character": "大黄蜂 · Hornet",
        "variant": "Mandarin"
      },
      {
        "name": "Hornet · English",
        "clips": [
          [
            "Reference",
            "media/prompt-13233fd7a5e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-0ce7641f260b.wav"
          ]
        ],
        "text": "No further, ghost. I see you. Skulking in the undergrowth.",
        "prompt": "",
        "instruction": "语言：英文",
        "character": "大黄蜂 · Hornet",
        "variant": "English"
      },
      {
        "name": "Hornet · Japanese",
        "clips": [
          [
            "Reference",
            "media/prompt-13233fd7a5e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-ce323672296d.wav"
          ]
        ],
        "text": "それ以上近づくな、亡霊。下生えに隠れてうろつく、お前の姿は見えている",
        "prompt": "",
        "instruction": "语言：日语",
        "character": "大黄蜂 · Hornet",
        "variant": "Japanese"
      },
      {
        "name": "Hornet · Cantonese",
        "clips": [
          [
            "Reference",
            "media/prompt-13233fd7a5e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-b397a290e7de.wav"
          ]
        ],
        "text": "唔准再埋嚟喇，鬼魂。我见到你喇，匿喺灌木丛度鬼鬼祟祟跟住我。",
        "prompt": "",
        "instruction": "方言：粤语",
        "character": "大黄蜂 · Hornet",
        "variant": "Cantonese"
      },
      {
        "name": "Hornet · Sichuanese",
        "clips": [
          [
            "Reference",
            "media/prompt-13233fd7a5e4.wav"
          ],
          [
            "Synthesis",
            "media/speech-7403bd388ecf.wav"
          ]
        ],
        "text": "不要再靠近了，鬼魂。我看到你了，在灌木丛中偷偷摸摸地跟踪我。",
        "prompt": "",
        "instruction": "方言：四川话",
        "character": "大黄蜂 · Hornet",
        "variant": "Sichuanese"
      }
    ]
  },
  {
    "name": "Accent control",
    "description": "Compare two accent settings for the same target language and voice.",
    "samples": [
      {
        "name": "English to Mandarin · EN01",
        "clips": [
          [
            "Reference",
            "media/en_01-ref-7297b02b3f5a.wav"
          ],
          [
            "Target-language accent",
            "media/en01-zh-1-native-d3fbafb4190e.wav"
          ],
          [
            "Source-language accent",
            "media/en01-zh-1-nonative-bed87c044c07.wav"
          ]
        ],
        "text": "好的, 已经为您打开客厅的空调, 并调节至舒适的二十六摄氏度。扫地机器人也已经开始在书房进行清扫工作了。还有其他需要我帮忙的吗?",
        "prompt": "if i had never dropped in on that single course in college the mac would have never had multiple typefaces or proportionally spaced fonts",
        "instruction": "",
        "source": "English",
        "target": "Mandarin"
      },
      {
        "name": "English to Mandarin · EN11",
        "clips": [
          [
            "Reference",
            "media/en_11-ref-43c8fd78a4da.wav"
          ],
          [
            "Target-language accent",
            "media/en11-zh-1-native-bab11060a20c.wav"
          ],
          [
            "Source-language accent",
            "media/en11-zh-1-nonative-d04369bf7c74.wav"
          ]
        ],
        "text": "来, 新来的宝贝看一下我手里这款, 是我们家的空气循环扇。三百六十度立体送风, 风力覆盖能到十二米, 最低档只有二十四分贝, 晚上放床边睡觉完全听不见。今天直播间下单, 还赠一个遥控支架。",
        "prompt": "the minnen practice the satisfaction of doing something well and even feeling the accomplishment when achieving the game's goals",
        "instruction": "",
        "source": "English",
        "target": "Mandarin"
      },
      {
        "name": "Mandarin to English · ZH19",
        "clips": [
          [
            "Reference",
            "media/zh_19_prompt-975f05417236.wav"
          ],
          [
            "Target-language accent",
            "media/zh19-en-1-native-cbc0c0df5588.wav"
          ],
          [
            "Source-language accent",
            "media/zh19-en-1-nonative-06996e62f95f.wav"
          ]
        ],
        "text": "Three, two, one go! Gone in one second! The backend numbers are jumping. I see some of you saying you missed out assistant, go request another hundred units right now!",
        "prompt": "我们觉得这个东西是有有不同所以我们产生了相关联的快乐和不快乐",
        "instruction": "",
        "source": "Mandarin",
        "target": "English"
      },
      {
        "name": "Mandarin to English · ZH10",
        "clips": [
          [
            "Reference",
            "media/zh_10_prompt-63f460836ff0.wav"
          ],
          [
            "Target-language accent",
            "media/zh10-en-1-native-9ce4176b9638.wav"
          ],
          [
            "Source-language accent",
            "media/zh10-en-1-nonative-a74057cd1b8b.wav"
          ]
        ],
        "text": "Let me sum up today's three core selling points:first, large capacity; second, ultra quiet;third, a three year nationwide warranty. At this price point, you really won't find a second one.",
        "prompt": "就他们说付老师我学了很多次游泳了我怎么都学不会我就谁都教不会我游泳",
        "instruction": "",
        "source": "Mandarin",
        "target": "English"
      }
    ]
  },
  {
    "name": "Fine-grained control",
    "description": "Hear how pronunciation cues, sighs and laughter shape a line.",
    "samples": [
      {
        "name": "English · IPA",
        "clips": [
          [
            "Reference",
            "media/prompt-9e1a0db3bf86.wav"
          ],
          [
            "Synthesis",
            "media/speech-ba740c5658a6.wav"
          ]
        ],
        "text": "Peppa started to [kɒf] and [ˈkraɪ] when she had to go to the [ˈdɒktə] for her sore throat.",
        "prompt": "George, if you jump in muddy puddles, you must wear your boots.",
        "instruction": ""
      },
      {
        "name": "Mandarin · pinyin",
        "clips": [
          [
            "Reference",
            "media/prompt-76bd5d3dcd13.wav"
          ],
          [
            "Synthesis",
            "media/speech-c2bdde5b73c7.wav"
          ]
        ],
        "text": "这是南京市[cháng]江大桥，不是南京市[zhǎng]江大桥。",
        "prompt": "到那个时候，这一百八十万就是九牛身上的一根毛，您还在吗？",
        "instruction": ""
      },
      {
        "name": "Sigh & laughter",
        "clips": [
          [
            "Reference",
            "media/prompt-c25de6a964e8.wav"
          ],
          [
            "Synthesis",
            "media/speech-46b548a2ca8d.wav"
          ]
        ],
        "text": "孩儿们，[sigh]玉帝老儿竟然封了我个养马的小官。[laughter]那我们就自封为齐天大圣。",
        "prompt": "俺乃五百年前大闹天宫的齐天大圣孙悟空。",
        "instruction": ""
      }
    ]
  },
  {
    "name": "Target-speaker SFT",
    "description": "Listen to two fine-tuned speakers across styles and emotions.",
    "samples": [
      {
        "name": "Speaker 1 · 开心",
        "clips": [
          [
            "Synthesis",
            "media/开心-b842e007dc4b.wav"
          ]
        ],
        "text": "哈哈哈哈，恭喜你呀，只提交了一次就全部通过了，连补件都没让你补，真的太顺利了！",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 1 · 安慰",
        "clips": [
          [
            "Synthesis",
            "media/安慰-065a1bc0cb83.wav"
          ]
        ],
        "text": "嗯，没关系的，这种事谁遇上都会慌。别急，你先深呼吸，然后咱们一件一件来。",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 1 · 不平",
        "clips": [
          [
            "Synthesis",
            "media/不平-055487e08a80.wav"
          ]
        ],
        "text": "不是我说，这个要求提得有点过了吧。本来就不在你负责范围里，凭什么最后压到你头上。",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 1 · 故事",
        "clips": [
          [
            "Synthesis",
            "media/故事-959f0b2f7314.wav"
          ]
        ],
        "text": "已往有一个女人，她非常希望有一个丁点儿小的孩子。但是她不知道从什么地方可以得到。因此她就去请教一位巫婆。她对巫婆说：“我非常想要有一个小小的孩子！你能通知我什么地方可以得到一个吗?” “嗨！这轻易得很！”巫婆说。“你把这颗大麦粒拿去吧。它可不是乡下人的田里长的那种大麦粒，也不是鸡吃的那种大麦粒啦。你把它埋在一个花盆里。不久你就能够看到你所要看的东西了。” “谢谢您，”女人说。她给了巫婆三个银币。于是她就回到家来，种下那颗大麦粒。",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 1 · 文白夹杂",
        "clips": [
          [
            "Synthesis",
            "media/文白夹杂-979db30d0ebd.wav"
          ]
        ],
        "text": "说到《岳阳楼记》，很多人都会以为这是范仲淹站在岳阳楼上写的，其实他一辈子都没去过那儿，是看着朋友寄来的一幅画写成的。你看这一段：「予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯。」",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 1 · 中英混",
        "clips": [
          [
            "Synthesis",
            "media/中英混-fe6939204061.wav"
          ]
        ],
        "text": "OK，那个 PPT 我看了，整体 framework 没问题，就是第5页的 data 有点旧了，你 update 一下。",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 1 · 英文开心",
        "clips": [
          [
            "Synthesis",
            "media/英文开心-fa3ff6a7f21c.wav"
          ]
        ],
        "text": "Oh man, you seriously won't believe this! The project got completely greenlit, so we are totally celebrating tonight!",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 1 · 英文生气",
        "clips": [
          [
            "Synthesis",
            "media/英文生气-485c5f29c9c4.wav"
          ]
        ],
        "text": "Are you kidding me right now? We talked about this exact thing yesterday, and it's getting really hard to stay patient.",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 2 · 开心",
        "clips": [
          [
            "Synthesis",
            "media/开心-fcc55a0da9a7.wav"
          ]
        ],
        "text": "嘿嘿，能和你聊天我真的超开心！不管你想分享趣事还是随便唠唠，我都会认认真真陪着你，随时听你说话～",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 2 · 安慰",
        "clips": [
          [
            "Synthesis",
            "media/安慰-87170d6753df.wav"
          ]
        ],
        "text": "没事没事，真的没事。这次没考好，不代表你不行啊。你先别急着怪自己，难受的话就跟我说说，我陪着你。",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 2 · 厌恶",
        "clips": [
          [
            "Synthesis",
            "media/厌恶-03a242bef9c7.wav"
          ]
        ],
        "text": "噫，这饭都放馊了，你快好好清理下冰箱吧，这味儿，熏死人了！",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 2 · 故事",
        "clips": [
          [
            "Synthesis",
            "media/故事-2ea6867f7a77.wav"
          ]
        ],
        "text": "小栓慢慢的从小屋子里走出，两手按了胸口，不住的咳嗽；走到灶下，盛出一碗冷饭，泡上热水，坐下便吃。华大妈跟着他走，轻轻的问道，“小栓，你好些么?——你仍旧只是肚饿?……” “包好，包好!”康大叔瞥了小栓一眼，仍然回过脸，对众人说，“夏三爷真是乖角儿，要是他不先告官，连他满门抄斩。现在怎样?银子!——这小东西也真不成东西!关在牢里，还要劝劳头造反。” “阿呀，那还了得。”坐在后排的一个二十多岁的人，很现出气愤模样。",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 2 · 文白夹杂",
        "clips": [
          [
            "Synthesis",
            "media/文白夹杂-4efb5c727416.wav"
          ]
        ],
        "text": "读到陶渊明的「久在樊笼里，复得返自然」，你可能会觉得，这不就是忙了很久，终于能松口气的感觉吗？不过，这里的「樊笼」不只是一只真正的笼子，也是在说束缚自己的生活。再看前面的「户庭无尘杂，虚室有余闲」，院子里少了纷扰，屋子里也多了一份清静。你看，诗人没有反复说自己有多轻松，只写了院子、屋子和闲下来的时光，那种自在就已经出来了。",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 2 · 中英混",
        "clips": [
          [
            "Synthesis",
            "media/中英混-85bbfc0caf38.wav"
          ]
        ],
        "text": "OK，今天的agenda我同步一下：上午十点跟PM过一下PRD，下午两点和设计对UI，四点前把demo部署到staging环境，有问题随时ping我。",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 2 · 英文开心",
        "clips": [
          [
            "Synthesis",
            "media/英文开心-202dfd14ee48.wav"
          ]
        ],
        "text": "Oh my god, you actually did it! I knew you would, but wow—seeing the final result just absolutely blew me away! Come on, we are so celebrating tonight!",
        "prompt": "",
        "instruction": ""
      },
      {
        "name": "Speaker 2 · 英文生气",
        "clips": [
          [
            "Synthesis",
            "media/英文生气-2a23a304f53a.wav"
          ]
        ],
        "text": "Wait, so you're telling me you knew about this the entire time and just... chose not to say anything? Wow. Yeah, that... that actually makes perfect sense now.",
        "prompt": "",
        "instruction": ""
      }
    ]
  }
];

const clipDurations = {
  "media/speech-9e7ef1da87ce.wav": 5.16,
  "media/儿童诗歌-7b93fe91c7ea.wav": 12.36,
  "media/speech-a77702ca3f68.wav": 3.84,
  "media/林黛玉-6601cb73c82d.wav": 8.22,
  "media/4-a6a0152c5743.wav": 14.64,
  "media/扎克伯格_01-dfc4f5e1186a.wav": 12.412,
  "media/派蒙-eae91393e490.wav": 5.441,
  "media/Dumbledore-a405276c5af0.wav": 4.392,
  "media/speech-0266a6a4b784.wav": 8.88,
  "media/speech-fa8883c39e16.wav": 7.32,
  "media/speech-46b548a2ca8d.wav": 8.88,
  "media/女耳语-e7f9ae966cbd.wav": 8.16,
  "media/雷电将军-ebaa5f232275.wav": 14.336,
  "media/speech-b042523bf427.wav": 5.76,
  "media/speech-f22d9ca4d424.wav": 5.76,
  "media/中英混-85bbfc0caf38.wav": 12.0,
  "media/speech-0ce7641f260b.wav": 4.2,
  "media/women_whisper-c5e1c1c23558.wav": 7.08,
  "media/女直播-b67451099fe5.wav": 22.759,
  "media/儿童诗歌-1b1236ae3bbd.wav": 7.5,
  "media/Justin_Hammer-a73ca4ba21b9.wav": 6.24,
  "media/空-2568350042d9.wav": 16.56,
  "media/故事-959f0b2f7314.wav": 61.56,
  "media/speech-a126a5b95e77.wav": 5.52,
  "media/2-5e7661f410a2.wav": 24.639,
  "media/speech-a65bc804707c.wav": 3.84,
  "media/Justin_Hammer-caa97c790c9c.wav": 5.256,
  "media/5-8af17d58362b.wav": 10.56,
  "media/不平-055487e08a80.wav": 7.32,
  "media/林黛玉-2b262a2fe847.wav": 8.04,
  "media/Dumbledore-baae77c7abb8.wav": 6.48,
  "media/开心-b842e007dc4b.wav": 7.8,
  "media/厌恶-03a242bef9c7.wav": 6.36,
  "media/扎克伯格-af04f6cc7d13.wav": 6.0,
  "media/女耳语-87dea2ab0d2a.wav": 4.48,
  "media/3-e03529dd1898.wav": 6.96,
  "media/英文生气-2a23a304f53a.wav": 11.64,
  "media/女诗歌-d99ad490db4d.wav": 7.1,
  "media/speech-0ba52a7c46aa.wav": 9.36,
  "media/speech-691db4de86a8.wav": 3.72,
  "media/1-d937d336dafe.wav": 10.56,
  "media/1-7664202722bb.wav": 14.237,
  "media/en11-zh-1-native-bab11060a20c.wav": 14.76,
  "media/开心-fcc55a0da9a7.wav": 9.96,
  "media/prompt-9e1a0db3bf86.wav": 5.15,
  "media/派蒙-a188415cb31b.wav": 14.88,
  "media/男耳语-a4cb65af2751.wav": 7.488,
  "media/speech-33c7c137e9b3.wav": 4.44,
  "media/男诗歌-0a2d860f22dd.wav": 18.0,
  "media/Smaug-ca140b664472.wav": 9.856,
  "media/speech-650c688b88d3.wav": 9.24,
  "media/2-292b67728970.wav": 11.88,
  "media/prompt-a213792a0025.wav": 10.25,
  "media/男诗歌-d14f6f2ab583.wav": 8.0,
  "media/prompt-e645d2267926.wav": 7.2,
  "media/speech-b32e3bcba3d0.wav": 4.92,
  "media/speech-ba740c5658a6.wav": 5.76,
  "media/文白夹杂-979db30d0ebd.wav": 31.56,
  "media/讲课-fada49a16e50.wav": 19.32,
  "media/prompt-c25de6a964e8.wav": 7.419,
  "media/prompt-13233fd7a5e4.wav": 1.268,
  "media/speech-04343748244e.wav": 7.08,
  "media/荒泷一斗-6897318c082a.wav": 7.921,
  "media/speech-7403bd388ecf.wav": 6.48,
  "media/女直播-0e8f7c250be0.wav": 18.36,
  "media/en01-zh-1-nonative-bed87c044c07.wav": 10.08,
  "media/speech-b397a290e7de.wav": 6.72,
  "media/文白夹杂-4efb5c727416.wav": 37.8,
  "media/男耳语-adc49ae4622d.wav": 9.0,
  "media/讲课-7070c3e0c7b5.wav": 10.7,
  "media/speech-ce323672296d.wav": 5.88,
  "media/en01-zh-1-native-d3fbafb4190e.wav": 10.68,
  "media/5-048f30069de8.wav": 8.83,
  "media/4-3e31ef1a7171.wav": 44.777,
  "media/speech-7501376e2b06.wav": 3.24,
  "media/speech-858f73ddf8cb.wav": 6.36,
  "media/speech-307106f20219.wav": 6.48,
  "media/英文开心-202dfd14ee48.wav": 9.96,
  "media/空-59541cd8ecb1.wav": 16.033,
  "media/speech-d688dcb81552.wav": 6.6,
  "media/英文生气-485c5f29c9c4.wav": 6.36,
  "media/Smaug-56187eb0ecd4.wav": 9.6,
  "media/speech-92c480fe6d4d.wav": 5.04,
  "media/prompt-76bd5d3dcd13.wav": 6.0,
  "media/荒泷一斗-45165665ca30.wav": 7.44,
  "media/雷电将军-13aab8d12af0.wav": 15.72,
  "media/安慰-065a1bc0cb83.wav": 10.08,
  "media/women_whisper-d1cb6bd3c765.wav": 18.0,
  "media/speech-c2bdde5b73c7.wav": 3.36,
  "media/3-cfdb35cb7428.wav": 12.8,
  "media/中英混-fe6939204061.wav": 6.96,
  "media/英文开心-fa3ff6a7f21c.wav": 6.48,
  "media/安慰-87170d6753df.wav": 11.04,
  "media/女诗歌-60e0b8ac612a.wav": 30.24,
  "media/speech-1f5e5288ac42.wav": 6.12,
  "media/en11-zh-1-nonative-d04369bf7c74.wav": 15.36,
  "media/speech-9791df4e6873.wav": 4.44,
  "media/prompt-83e10d0df7e4.wav": 5.15,
  "media/en_01-ref-7297b02b3f5a.wav": 7.54,
  "media/en_11-ref-43c8fd78a4da.wav": 7.12,
  "media/故事-2ea6867f7a77.wav": 45.84,
  "media/zh_19_prompt-975f05417236.wav": 7.6,
  "media/zh19-en-1-native-cbc0c0df5588.wav": 8.64,
  "media/zh19-en-1-nonative-06996e62f95f.wav": 8.64,
  "media/zh_10_prompt-63f460836ff0.wav": 5.7,
  "media/zh10-en-1-native-9ce4176b9638.wav": 10.68,
  "media/zh10-en-1-nonative-a74057cd1b8b.wav": 9.84
};
