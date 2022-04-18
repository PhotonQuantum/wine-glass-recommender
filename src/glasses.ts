export enum Categories {
    crystal,
    universal,
    red,
    white,
    sparkling
}

export const glasses = [
    {
        name: "ISO Wine Tasting Glasses",
        categories: [Categories.crystal, Categories.universal],
        description: "ISO 酒杯不凸显酒的特色，而是直接展现其原始的风味，更适合公正地评定一款酒的优缺点，适合饮用各类葡萄酒。使用无铅水晶玻璃，清澈透明。",
        price: "¥18",
        img: new URL("../resources/iso.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B00CISXFCC",
        keywords: ["iso"]
    },
    // {
    //     name: "Riedel Heart Cabernet Sauvignon Glass",
    //     categories: [Categories.crystal, Categories.red],
    //     description: "赤霞珠杯修长的杯身有利于控制酒液在舌头的中部达到单宁、果味以及酸度的平衡，较为平缓的杯身弧度可放缓酒液的流动速度，使酸度获得提升，淡化单宁的苦涩感。无铅水晶玻璃更好地反映酒色，薄内壁使口感更佳。",
    //     price: "¥126.08",
    //     img: new URL("../resources/h2h_cabernet.jpg?as=webp", import.meta.url),
    //     link: "https://www.amazon.com/dp/B0062N2NLI",
    //     keywords: ["red", "tanin"]
    // },
    {
        name: "Riedel Extreme Cabernet Sauvignon Glass",
        categories: [Categories.red],
        description: "赤霞珠杯修长的杯身有利于控制酒液在舌头的中部达到单宁、果味以及酸度的平衡，较为平缓的杯身弧度可放缓酒液的流动速度，使酸度获得提升，淡化单宁的苦涩感。",
        price: "¥100.67",
        img: new URL("../resources/x_cabernet.png?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B079HQBJ1J",
        keywords: ["red", "tanin"]
    },
    {
        name: "Schott Zwiesel Forte Claret Burgundy Glass",
        categories: [Categories.crystal, Categories.red],
        description: "勃艮第杯的大杯身使得酒液的流速更慢，酒会最先触及舌尖的甜味敏感区，这种甜感柔化了单宁，矿物质及酸度。另外，酒的液面与更多氧气接触，可以柔化单宁。使用独家专利的 Tritan 水晶玻璃。",
        price: "¥63.67",
        img: new URL("../resources/burgundy.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B001Q91QZC",
        keywords: ["red", "tanin"]
    },
    {
        name: "Riedel Vinum Syrah Glass",
        categories: [Categories.red],
        description: "西拉葡萄酒杯，比一般的红葡萄酒杯要小。它的杯口快速向内收缩，能让葡萄酒的果香先散发出来聚集在杯口，平衡单宁与果香的风味。",
        price: "¥206.94",
        img: new URL("../resources/syrah.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B000NAXZ9A",
        keywords: ["red", "tanin", "flavor"]
    },
    {
        name: "Riedel Heart Pinot Noir Glass",
        categories: [Categories.crystal, Categories.red],
        description: "黑皮诺杯的杯身较大，向内收口的黑皮诺酒杯，能让葡萄酒呼吸以散发更多香气，杯口小以凝聚香气，并且可以让酒液在口里缓慢铺开以欣赏其精致和韵味。无铅水晶玻璃更好地反映酒色，薄内壁使口感更佳",
        price: "¥120.09",
        img: new URL("../resources/h2h_pinot_noir.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B0062N2NLI",
        keywords: ["red", "flavor"]
    },
    // {
    //     name: "Riedel Extreme Pinot Noir Glass",
    //     categories: [Categories.red],
    //     description: "黑皮诺杯的杯身较大，向内收口的黑皮诺酒杯，能让葡萄酒呼吸以散发更多香气，杯口小以凝聚香气，并且可以让酒液在口里缓慢铺开以欣赏其精致和韵味。",
    //     price: "¥93.60",
    //     img: new URL("../resources/x_pinot_noir.jpg?as=webp", import.meta.url),
    //     link: "https://www.amazon.com/dp/B079HQBJ1J",
    //     keywords: ["red", "flavor"]
    // },
    {
        name: "Riedel Vinum Bordeaux Glass",
        categories: [Categories.crystal, Categories.red],
        description: "波尔多杯的窄杯身接近一朵含苞待放的郁金香，晃动酒液时，可以避免溢出。漏斗状杯型既能聚集酒的香气，同时入口最先抵达舌头的中部，然后才是舌前部和两侧，酒液入口感更加动人。",
        price: "¥171.22",
        img: new URL("../resources/bordeaux.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B00HPR9QKG",
        keywords: ["red", "flavor"]
    },
    {
        name: "Riedel Heart Riesling Glass",
        categories: [Categories.crystal, Categories.white],
        description: "雷司令杯的杯肚与杯沿都较窄，而杯身较高。杯口向上微收，可以将将酒中的水果香味集中在酒杯的上半部分。入口时引导酒液先接触到舌尖的甜味区域，缓和酒本身的酸涩感。无铅水晶玻璃更好地反映酒色，薄内壁使口感更佳。",
        price: "¥127.30",
        img: new URL("../resources/riesling.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B0062N2NLI",
        keywords: ["white", "sour", "flavor"]
    },
    {
        name: "Riedel Heart Chardonnay Glass",
        categories: [Categories.crystal, Categories.white],
        description: "霞多丽杯的杯体较宽，杯口只稍微收小。杯子的设计可以让酒先流向舌尖和舌头中部，可以先品尝到酒的甜味，然后再扩散开。无铅水晶玻璃更好地反映酒色，薄内壁使口感更佳。",
        price: "¥155.94",
        img: new URL("../resources/chardonnay.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B0062N2NLI",
        keywords: ["white", "sour"]
    },
    {
        name: "Riedel Vinum Sauvignon Blanc Glass",
        categories: [Categories.white],
        description: "长相思杯的杯颈比较长，杯体窄，整体看起来细长，这种杯型能够聚集香气，并防止过多空气混入酒中。",
        price: "¥155.94",
        img: new URL("../resources/sauvignon_blanc.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B0062N2NLI",
        keywords: ["white", "flavor"]
    },
    {
        name: "Viski Champagne Flutes",
        categories: [Categories.crystal, Categories.sparkling],
        description: "笛型酒杯使酒液表面积大大减少，有助于保持气泡，另外修长的外型也便于观赏晶莹剔透的气泡自杯底至液面完整而欢快的升腾过程，强化品尝的愉悦感。",
        price: "¥45.32",
        img: new URL("../resources/flute.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B09F7ZKDJ8",
        keywords: ["sparkling"]
    },
    {
        name: "Luigi Bormioli Champagne Tulip",
        categories: [Categories.crystal, Categories.sparkling],
        description: "郁金香型酒杯的杯型既能有助于保持气泡，又有着更大更有气质的敞口，有利于闻香和饮用。",
        price: "¥88.34",
        img: new URL("../resources/tulip.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B008OYP2A2",
        keywords: ["sparkling"]
    },
    {
        name: "Mikasa Vintage",
        categories: [Categories.sparkling],
        description: "蝶形酒杯结构比较稳定，常用于在典礼场合做香槟塔。但其有杯口过大，气泡极易消散，酒杯过浅容易洒出且无法让香气凝聚等缺点。",
        price: "¥65.56",
        img: new URL("../resources/vintage.jpg?as=webp", import.meta.url),
        link: "https://www.amazon.com/dp/B008OYP2A2",
        keywords: ["sparkling"]
    },
]