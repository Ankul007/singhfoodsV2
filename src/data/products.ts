export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  volume: string;
  image: string;
  category: 'premium syrup' | 'seasonal syrup' | 'jams' | 'chocolate syrup' | 'fruit juices' | 'pickles';
}

export const products: Product[] = [
  {
    id: 'safforn',
    name: 'safforn',
    description: 'Luxurious mocktail with aromatic saffron, adding a rich, floral flavor',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196025/saffron_mocktail.jpg_zlb9wr.jpg',
    category: 'premium syrup'
  },
  {
    id: 'pina_colada',
    name: 'pina colada',
    description: 'Tropical mocktail blending creamy coconut and sweet pineapple for a refreshing escape.',
    price: '1400',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734200289/pina-colada_wksn7z.jpg',
    category: 'premium syrup'
  },{
    id: 'sugar_syrup',
    name: 'sugar syrup',
    description: 'Simple sweetener made from dissolved sugar, ideal for cocktails and mocktails.',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734201250/sugar_syrup_pwwrqa.jpg',
    category: 'premium syrup'
  },
  {
    id: 'lime_juice',
    name: 'Lime Juice',
    description: 'Tangy lime juice, adding a refreshing citrus twist to cocktails and mocktails',
    price: '800',
    volume: '250ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196024/lime_juice_1_ukfume.jpg',
    category: 'fruit juices'
  },
  {
    id: 'green_mint',
    name: 'green mint',
    description: 'Refreshing syrup with a cool minty flavor, ideal for vibrant mocktails',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734200649/gren_mint_g12ug9.jpg',
    category: 'premium syrup'
  },
  {
    id: 'hazelnut',
    name: 'hazelnut',
    description: 'Rich and nutty hazelnut syrup, adding warmth to coffee and desserts.',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734200791/hazelnut_ufejer.jpg',
    category: 'premium syrup'
  },
  {
    id: 'bubble_gum',
    name: 'Bubble Gum',
    description: 'Playful mocktail bursting with sweet, nostalgic bubble gum flavor',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196022/bubble_gum_uelalu.jpg',
    category: 'premium syrup'
  },
  {
    id: 'mix_fruit_jam',
    name: 'Mix Fruit Jam',
    description: 'Sweet and tangy mix fruit jam made with a blend of fresh fruits',
    price: '1200',
    volume: '500ml/1Kg',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196023/jam_1_mbnz29.jpg',
    category: 'jams'
  },
  {
    id: 'chocolate_syrup',
    name: 'Choclate syrup',
    description: 'Rich and smooth chocolate syrup, perfect for drizzling over desserts and drinks',
    price: '1200',
    volume: '500ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196023/chocolate_syrup_1.jpg_oapuqg.jpg',
    category: 'chocolate syrup'
  },
  {
    id: 'grenadine',
    name: 'Grenadine',
    description: 'Sweet and tangy mocktail with bold grenadine and fruity undertones',
    price: '1200',
    volume: '500ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196023/grenadine_wvq6yy.jpg',
    category: 'premium syrup'
  },
  {
    id: 'green_apple',
    name: 'Green Apple',
    description: 'Crisp mocktail blending tart green apple with a refreshing twist',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196024/green_apple_wgvprm.jpg',
    category: 'premium syrup'
  },
  {
    id: 'passion-fruit',
    name: 'Passion Fruit',
    description: 'Tropical passion fruit with a perfect balance of sweet and tart',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196024/rose_1_ymaqsr.jpg',
    category: 'seasonal syrup'
  },
  {
    id: 'mojito_mint',
    name: 'Mojito Mint',
    description: 'Vibrant mocktail with fresh mint, lime, and a refreshing soda base',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196024/mojito_mint_utzaxi.jpg',
    category: 'premium syrup'
  },
  {
    id: 'aam_panna',
    name: 'aam panna',
    description: 'Refreshing raw mango with tangy, sweet, and spicy flavors',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196021/aam_panna_aqtv4a.jpg',
    category: 'seasonal syrup'
  },
  {
    id: 'blue_curacao',
    name: 'blue curacao',
    description: 'Vibrant blue mocktail syrup with tangy orange flavor, perfect for tropical drinks.',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734200544/blue_curacao_y2wyfr.jpg',
    category: 'premium syrup'
  },
  {
    id: 'water_melon',
    name: 'water melon',
    description: 'Refreshing watermelon syrup with sweet, fruity notes, perfect for summer drinks.',
    price: '1200',
    volume: '750ml',
    image: 'https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734201098/watermelon_hwnoet.jpg',
    category: 'premium syrup'
  },
  {
    id: 'mango_pickle',
    name: 'Mango Pickle',
    description: 'Raw Mongo pickle',
    price: '1400',
    volume: '500g/1Kg',
    image: 'https://drive.google.com/file/d/18GQqKFo7AlICpVgxuyDfYCaLwJgYxRKz/view',
    category: 'pickles'
  }
  
];
