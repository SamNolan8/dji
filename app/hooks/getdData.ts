import prisma from "../libs/prismadb"
export const getFilm = async () => {
    return prisma.film.findMany()
}
export const getFilmById = async (ID: string) => {
    return prisma.film.findFirst({
        where: {
            id: ID
        }
    }
    )
}

export const CreateFilm = async () => {
    await prisma.film.createMany({
        data: [
            {
                filmChineseName: '星际穿越',
                filmEnglishName: 'Interstellar',
                releaseDate: '2014-11-12',
                rating: '9.4',
                genre: '科幻',
                language: '英语',
                country: '美国',
                filmAvatar: 'https://img2.doubanio.com/view/photo/l/public/p2206088801.webp',
                filmDescription: '近未来的地球黄沙遍野，小麦、秋葵等基础农作物相继因枯萎病灭绝，人类不再像从前那样仰望星空，放纵想象力和灵感的迸发，而是每日在沙尘暴的肆虐下倒数着所剩不多的光景。在家务农的前NASA宇航员库珀（马修·麦康纳 Matthew McConaughey 饰）接连在女儿墨菲（麦肯吉·弗依 Mackenzie Foy 饰）的书房发现奇怪的重力场现象，随即得知在某个未知区域内前NASA成员仍秘密进行一个拯救人类的计划。多年以前土星附近出现神秘虫洞，NASA借机将数名宇航员派遣到遥远的星系寻找适合居住的星球。在布兰德教授（迈克尔·凯恩 Michael Caine 饰）的劝说下，库珀忍痛告别了女儿，和其他三名专家教授女儿艾米莉亚·布兰德（安妮·海瑟薇 Anne Hathaway 饰）、罗米利（大卫·吉雅西 David Gyasi 饰）、多伊尔（韦斯·本特利 Wes Bentley 饰）搭乘宇宙飞船前往目前已知的最有希望的三颗星球考察。他们穿越遥远的星系银河，感受了一小时七年光阴的沧海桑田，窥见了未知星球和黑洞的壮伟与神秘。在浩瀚宇宙的绝望而孤独角落，总有一份超越了时空的笃定情怀将他们紧紧相连…… ',
                filmLength: '169',
                filmVideo: '/video/xingjichuanyue.mp4'
            },
            {
                filmChineseName: '盗梦空间',
                filmEnglishName: 'Inception',
                releaseDate: '2010-09-01',
                rating: '9.4',
                genre: '科幻',
                language: '英语',
                country: '美国',
                filmAvatar: 'https://img9.doubanio.com/view/photo/l/public/p513344864.webp',
                filmDescription: '道姆·柯布（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）与同事阿瑟（约瑟夫·戈登-莱维特 Joseph Gordon-Levitt 饰）和纳什（卢卡斯·哈斯 Lukas Haas 饰）在一次针对日本能源大亨齐藤（渡边谦 饰）的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司，采取极端措施在其唯一继承人罗伯特·费希尔（希里安·墨菲 Cillian Murphy 饰）的深层潜意识中种下放弃家族公司、自立门户的想法。为了重返美国，柯布偷偷求助于岳父迈尔斯（迈克尔·凯恩 Michael Caine 饰），吸收了年轻的梦境设计师艾里阿德妮（艾伦·佩吉 Ellen Page 饰）、梦境演员艾姆斯（汤姆·哈迪 Tom Hardy 饰）和药剂师约瑟夫（迪利普·劳 Dileep Rao 饰）加入行动。在一层层递进的梦境中，柯布不仅要对付费希尔潜意识的本能反抗，还必须直面已逝妻子梅尔（玛丽昂·歌迪亚 Marion Cotillard 饰）的处处破坏，实际情况远比预想危险得多……',
                filmLength: '148',
                filmVideo: 'https://vt1.doubanio.com/202306031451/5626879e8b77578622bc3cbd67dcf27a/view/movie/M/402640451.mp4'
            },
            {
                filmChineseName: '让子弹飞',
                filmEnglishName: 'Let The Bullets Fly',
                releaseDate: '2010-12-16',
                rating: '9.0',
                genre: '剧情',
                language: '四川话',
                country: '中国',
                filmAvatar: 'https://img1.doubanio.com/view/photo/l/public/p1512562287.webp',
                filmDescription: '民国年间，花钱捐得县长的马邦德（葛优 饰）携妻（刘嘉玲 饰）及随从走马上任。途经南国某地，遭劫匪张麻子（姜文 饰）一伙伏击，随从尽死，只夫妻二人侥幸活命。马为保命，谎称自己是县长的汤 师爷。为汤师爷许下的财富所动，张麻子摇身一变化身县长，带着手下赶赴鹅城上任。有道是天高皇帝远，鹅城地处偏僻，一方霸主黄四郎（周润发 饰）只手遮天，全然不将这个新来的县长放在眼里。张麻子痛打了黄的武教头（姜武 饰），黄则设计害死张的义子小六（张默 饰）。原本只想赚钱的马邦德，怎么也想不到竟会被卷入这场土匪和恶霸的角力之中。鹅城上空愁云密布，血雨腥风在所难免……本片根据马识途的小说《夜谭十记》中的《盗官记》一章改编。',
                filmLength: '132',
                filmVideo: 'https://vt1.doubanio.com/202306031455/d314e943f46683287f586c3d53eb2b49/view/movie/M/301040132.mp4'
            },
            {
                filmChineseName: '鬼子来了',
                filmEnglishName: 'Devils on the Doorstep',
                releaseDate: '2000-05-12',
                rating: '9.3',
                genre: '剧情',
                language: '普通话',
                country: '中国',
                filmAvatar: '/images/guizilaile.png',
                filmDescription: '第二次世界大战期间，中国河北挂甲台村的农民马大三（姜文饰）在日本人的统治下过着平静的生活。一个晚上，游击队绑架了日军陆军士兵花屋小三郎（香川照之饰）和翻译董汉臣，把他们捆绑塞入麻袋放在马大三家里，并吩咐马好好看管，几天后的大年三十来带人。马大三和村民战战兢兢地看守两人，花屋小三郎和董汉臣数次发出求救信号，皆被村民化解。半年过去了，村民们担心事情暴露，却又不敢把花屋等放了。马大三最终被董汉臣说动，把花屋和董送到了日军宪兵队驻地，以换取粮食。日军宪兵军官酒冢猪吉是花屋的同乡。他表面上对马等人客气，但背后指责花屋让皇军蒙耻并殴打了他。宪兵队整队去马的村子里和村民联欢送粮，酒到酣时却乍露杀机。',
                filmLength: '162',
                filmVideo: '/video/guizilaile.mp4'
            },
        ]
    })
}

export const DeleteAllFilms = async () => {
    await prisma.film.deleteMany({})
}