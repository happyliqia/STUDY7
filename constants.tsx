
import { UnitData } from './types';

export const STAR_CHARACTERS = [
  { name: 'Mr. Star', color: 'bg-blue-500', icon: '👨' },
  { name: 'Mrs. Star', color: 'bg-pink-500', icon: '👩' },
  { name: 'Stella', color: 'bg-purple-500', icon: '👧' },
  { name: 'Simon', color: 'bg-green-500', icon: '👦' },
  { name: 'Suzy', color: 'bg-yellow-500', icon: '👶' },
  { name: 'Monty', color: 'bg-orange-500', icon: '🐭' },
  { name: 'Maskman', color: 'bg-red-500', icon: '🦸' },
  { name: 'Marie', color: 'bg-teal-500', icon: '🧚' }
];

export const KIDS_BOX_UNITS: UnitData[] = [
  {
    id: 1,
    title: "Hello!",
    chineseTitle: "你好！",
    theme: "Greetings & Self-introduction",
    character: "Stella",
    vocabulary: [
      { word: "red", translation: "红色" },
      { word: "blue", translation: "蓝色" },
      { word: "green", translation: "绿色" },
      { word: "yellow", translation: "黄色" },
      { word: "pink", translation: "粉色" },
      { word: "purple", translation: "紫色" },
      { word: "one", translation: "一" },
      { word: "ten", translation: "十" }
    ],
    sentences: [
      { english: "Hello, I'm Stella. What's your name?", chinese: "你好，我是斯特拉。你叫什么名字？" },
      { english: "How old are you? I'm seven.", chinese: "你多大了？我七岁。" }
    ],
    quizzes: [
      { question: "What is '红色' in English?", options: ["Blue", "Red", "Green", "Yellow"], correctAnswer: 1 },
      { question: "Complete the sentence: 'How ___ are you?'", options: ["old", "many", "color", "name"], correctAnswer: 0 },
      { question: "How do you say '紫色'?", options: ["Pink", "Orange", "Purple", "White"], correctAnswer: 2 },
      { question: "What is the number '10'?", options: ["Two", "Seven", "Ten", "One"], correctAnswer: 2 },
      { question: "I'm seven. (翻译)", options: ["我是七岁。", "我是八岁。", "你好。", "我叫什么名字？"], correctAnswer: 0 }
    ]
  },
  {
    id: 2,
    title: "My School",
    chineseTitle: "我的学校",
    theme: "School & Stationery",
    character: "Simon",
    vocabulary: [
      { word: "pen", translation: "钢笔" },
      { word: "pencil", translation: "铅笔" },
      { word: "eraser", translation: "橡皮" },
      { word: "ruler", translation: "尺子" },
      { word: "book", translation: "书" },
      { word: "bag", translation: "包" }
    ],
    sentences: [
      { english: "Who's that? It's Monty.", chinese: "那是谁？是蒙蒂。" },
      { english: "Is it a pen? Yes, it is.", chinese: "这是一支钢笔吗？是的。" }
    ],
    quizzes: [
      { question: "Which one is '橡皮'?", options: ["Pen", "Ruler", "Eraser", "Bag"], correctAnswer: 2 },
      { question: "Who's that? ___ Monty.", options: ["It's", "I am", "You are", "They are"], correctAnswer: 0 },
      { question: "Is it a pencil? Yes, it ___.", options: ["isn't", "is", "not", "am"], correctAnswer: 1 },
      { question: "How do you say '尺子'?", options: ["Book", "Bag", "Ruler", "Pen"], correctAnswer: 2 },
      { question: "How are you? I'm ___, thank you.", options: ["five", "fine", "pink", "old"], correctAnswer: 1 }
    ]
  },
  {
    id: 3,
    title: "Favourite Toys",
    chineseTitle: "最爱的玩具",
    theme: "Toys & Prepositions",
    character: "Suzy",
    vocabulary: [
      { word: "kite", translation: "风筝" },
      { word: "doll", translation: "娃娃" },
      { word: "monster", translation: "怪物" },
      { word: "plane", translation: "飞机" },
      { word: "train", translation: "火车" },
      { word: "bike", translation: "自行车" },
      { word: "in", translation: "在...里面" },
      { word: "on", translation: "在...上面" }
    ],
    sentences: [
      { english: "What's your favourite toy?", chinese: "你最喜欢的玩具是什么？" },
      { english: "It's Stella's kite.", chinese: "这是斯特拉的风筝。" }
    ],
    quizzes: [
      { question: "Where is the ball? It's ___ the box.", options: ["in", "at", "to", "with"], correctAnswer: 0 },
      { question: "Is it a plane? ___, it isn't.", options: ["Yes", "No", "Hello", "OK"], correctAnswer: 1 },
      { question: "What is '自行车'?", options: ["Car", "Train", "Bike", "Plane"], correctAnswer: 2 },
      { question: "Where is the doll? It's ___ the chair.", options: ["under", "next", "is", "in"], correctAnswer: 0 },
      { question: "What's your ___ toy?", options: ["old", "fine", "favourite", "who"], correctAnswer: 2 }
    ]
  },
  {
    id: 4,
    title: "My Family",
    chineseTitle: "我的家庭",
    theme: "Family Members",
    character: "Mr. Star",
    vocabulary: [
      { word: "mother", translation: "妈妈" },
      { word: "father", translation: "爸爸" },
      { word: "brother", translation: "兄弟" },
      { word: "sister", translation: "姐妹" },
      { word: "beautiful", translation: "美丽的" },
      { word: "young", translation: "年轻的" }
    ],
    sentences: [
      { english: "This is my mother.", chinese: "这是我妈妈。" },
      { english: "She's beautiful.", chinese: "她很漂亮。" }
    ],
    quizzes: [
      { question: "Who is '爸爸'?", options: ["Mother", "Brother", "Father", "Sister"], correctAnswer: 2 },
      { question: "He is ___. (年轻的)", options: ["old", "young", "ugly", "big"], correctAnswer: 1 },
      { question: "This is my ___ (姐姐/妹妹).", options: ["Brother", "Father", "Sister", "Grandpa"], correctAnswer: 2 },
      { question: "Who's that? That's my ___ (爷爷).", options: ["Grandmother", "Grandfather", "Mother", "Mum"], correctAnswer: 1 },
      { question: "She's beautiful. (翻译)", options: ["他是丑的。", "她是漂亮的。", "他是年轻的。", "她是老的。"], correctAnswer: 1 }
    ]
  },
  {
    id: 5,
    title: "Our Pets",
    chineseTitle: "我们的宠物",
    theme: "Pets & Adjectives",
    character: "Monty",
    vocabulary: [
      { word: "dog", translation: "狗" },
      { word: "cat", translation: "猫" },
      { word: "mouse", translation: "老鼠" },
      { word: "snake", translation: "蛇" },
      { word: "long", translation: "长的" },
      { word: "small", translation: "小的" }
    ],
    sentences: [
      { english: "I've got a dog.", chinese: "我有一只狗。" },
      { english: "It has got a long tail.", chinese: "它有一条长尾巴。" }
    ],
    quizzes: [
      { question: "Which animal is '老鼠'?", options: ["Cat", "Dog", "Mouse", "Bird"], correctAnswer: 2 },
      { question: "We ___ got a pet.", options: ["has", "have", "is", "are"], correctAnswer: 1 },
      { question: "A snake is ___ (长的).", options: ["short", "small", "long", "dirty"], correctAnswer: 2 },
      { question: "She ___ got a small cat.", options: ["have", "has", "is", "are"], correctAnswer: 1 },
      { question: "What animal is '蜘蛛'?", options: ["Fish", "Horse", "Spider", "Snake"], correctAnswer: 2 }
    ]
  },
  {
    id: 6,
    title: "My Face",
    chineseTitle: "我的脸",
    theme: "Face & Body Parts",
    character: "Maskman",
    vocabulary: [
      { word: "eyes", translation: "眼睛" },
      { word: "ears", translation: "耳朵" },
      { word: "nose", translation: "鼻子" },
      { word: "mouth", translation: "嘴巴" },
      { word: "hair", translation: "头发" },
      { word: "teeth", translation: "牙齿" }
    ],
    sentences: [
      { english: "I've got blue eyes.", chinese: "我有一双蓝眼睛。" },
      { english: "Have you got big ears?", chinese: "你有大耳朵吗？" }
    ],
    quizzes: [
      { question: "Choose '耳朵':", options: ["Eyes", "Ears", "Nose", "Hair"], correctAnswer: 1 },
      { question: "Have you got a small nose? Yes, I ___.", options: ["do", "have", "am", "can"], correctAnswer: 1 },
      { question: "What is '牙齿'?", options: ["Teeth", "Mouth", "Nose", "Eyes"], correctAnswer: 0 },
      { question: "I've got brown ___ (头发).", options: ["Head", "Face", "Hair", "Teeth"], correctAnswer: 2 },
      { question: "___ you got blue eyes?", options: ["Has", "Are", "Is", "Have"], correctAnswer: 3 }
    ]
  },
  {
    id: 7,
    title: "Wild Animals",
    chineseTitle: "野生动物",
    theme: "Wild Animals & Body Parts",
    character: "Marie",
    vocabulary: [
      { word: "tiger", translation: "老虎" },
      { word: "monkey", translation: "猴子" },
      { word: "elephant", translation: "大象" },
      { word: "giraffe", translation: "长颈鹿" },
      { word: "tail", translation: "尾巴" },
      { word: "legs", translation: "腿" }
    ],
    sentences: [
      { english: "It's got a long nose.", chinese: "它有一个长鼻子。" },
      { english: "How many legs have they got?", chinese: "它们有几条腿？" }
    ],
    quizzes: [
      { question: "Which one is '大象'?", options: ["Tiger", "Monkey", "Elephant", "Hippo"], correctAnswer: 2 },
      { question: "A snake ___ got legs.", options: ["has", "haven't", "hasn't", "is"], correctAnswer: 2 },
      { question: "What is '老虎'?", options: ["Tiger", "Giraffe", "Crocodile", "Monkey"], correctAnswer: 0 },
      { question: "How many ___ have they got?", options: ["tail", "legs", "ear", "nose"], correctAnswer: 1 },
      { question: "They ___ got long tails.", options: ["is", "has", "have", "are"], correctAnswer: 2 }
    ]
  },
  {
    id: 8,
    title: "My Clothes",
    chineseTitle: "我的衣服",
    theme: "Clothing",
    character: "Mrs. Star",
    vocabulary: [
      { word: "jacket", translation: "夹克" },
      { word: "shoes", translation: "鞋子" },
      { word: "skirt", translation: "裙子" },
      { word: "trousers", translation: "裤子" },
      { word: "t-shirt", translation: "T恤" },
      { word: "hat", translation: "帽子" }
    ],
    sentences: [
      { english: "I've got my jacket on.", chinese: "我穿上了我的夹克。" },
      { english: "He is wearing a blue hat.", chinese: "他戴着一顶蓝帽子。" }
    ],
    quizzes: [
      { question: "What is '裙子'?", options: ["Shirt", "Skirt", "Socks", "Shoes"], correctAnswer: 1 },
      { question: "She ___ wearing a red t-shirt.", options: ["am", "are", "is", "have"], correctAnswer: 2 },
      { question: "I've got my ___ (夹克) on.", options: ["Hat", "Jeans", "Jacket", "Skirt"], correctAnswer: 2 },
      { question: "___ are you wearing?", options: ["Who", "What", "How", "Where"], correctAnswer: 1 },
      { question: "I've got blue ___ (鞋子).", options: ["Socks", "Shoes", "Trousers", "Glasses"], correctAnswer: 1 }
    ]
  },
  {
    id: 9,
    title: "Fun Time!",
    chineseTitle: "欢乐时光",
    theme: "Sports & Ability",
    character: "Simon",
    vocabulary: [
      { word: "swim", translation: "游泳" },
      { word: "run", translation: "跑步" },
      { word: "jump", translation: "跳" },
      { word: "football", translation: "足球" },
      { word: "tennis", translation: "网球" },
      { word: "ride a bike", translation: "骑车" }
    ],
    sentences: [
      { english: "I can swim but I can't fly.", chinese: "我会游泳但我不会飞。" },
      { english: "Can you play tennis? Yes, I can.", chinese: "你会打网球吗？是的，我会。" }
    ],
    quizzes: [
      { question: "What is '游泳'?", options: ["Run", "Jump", "Swim", "Fish"], correctAnswer: 2 },
      { question: "Can you fly a kite? ___, I can't.", options: ["Yes", "No", "Hello", "Maybe"], correctAnswer: 1 },
      { question: "I ___ play football.", options: ["can", "am", "is", "have"], correctAnswer: 0 },
      { question: "Can you ride a bike? Yes, I ___.", options: ["am", "do", "can", "have"], correctAnswer: 2 },
      { question: "What ___ you do?", options: ["are", "can", "have", "is"], correctAnswer: 1 }
    ]
  },
  {
    id: 10,
    title: "At the Funfair",
    chineseTitle: "在游乐场",
    theme: "Transport & Action",
    character: "Stella",
    vocabulary: [
      { word: "boat", translation: "小船" },
      { word: "bus", translation: "公交车" },
      { word: "helicopter", translation: "直升机" },
      { word: "lorry", translation: "货车" },
      { word: "motorbike", translation: "摩托车" },
      { word: "tractor", translation: "拖拉机" }
    ],
    sentences: [
      { english: "I'm driving a car.", chinese: "我正在开车。" },
      { english: "What are you doing? I'm jumping.", chinese: "你在做什么？我正在跳。" }
    ],
    quizzes: [
      { question: "Which one is '公交车'?", options: ["Boat", "Bus", "Van", "Train"], correctAnswer: 1 },
      { question: "I am ___ a bike.", options: ["ride", "rides", "riding", "rideing"], correctAnswer: 2 },
      { question: "He is ___ (驾驶) a car.", options: ["drive", "driving", "drives", "driver"], correctAnswer: 1 },
      { question: "What are you ___?", options: ["do", "does", "doing", "did"], correctAnswer: 2 },
      { question: "A helicopter is in the ___.", options: ["Water", "Road", "Air", "Room"], correctAnswer: 2 }
    ]
  }
];
