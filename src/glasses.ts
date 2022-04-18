export enum Categories {
    crystal,
    universal,
    red,
    white
}

export const glasses = [
    {
        name: "ISO 杯",
        categories: [Categories.crystal, Categories.universal],
        description: "不偏袒任何种类的葡萄酒，还原经典的葡萄酒杯。",  // TODO
        price: "¥999",
        img: new URL("../resources/iso.jpg?as=webp", import.meta.url),
        link: "https://google.com"
    },
    {
        name: "勃艮第杯",
        categories: [Categories.crystal, Categories.red],
        description: "不偏袒任何种类的葡萄酒，还原经典的葡萄酒杯。",
        price: "¥999",
        img: new URL("../resources/placeholder.png?as=webp", import.meta.url),
        link: "https://google.com"
    },
    {
        name: "怪怪杯",
        categories: [Categories.crystal, Categories.white, Categories.red, Categories.universal],
        description: "怪怪怪超级杯好多好多",
        price: "¥999",
        img: new URL("../resources/placeholder.png?as=webp", import.meta.url),
        link: "https://google.com"
    }
]