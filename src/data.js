import uuid from 'uuid-random'
import aedle from './assets/aedle-phones.jpg'
import airbudsv1 from './assets/apple-airbuds-v1.jpg'
import harman from './assets/bandura-bluetooth-speakers.jpg'

const data = [
    {
        id: uuid(),
        name: 'Aedle RORSOU R10 On-Ear Headphones',
        price: 11.99,
        sale: 30,
        qty: 50,
        color: 'Brown',
        stars: 4,
        text: 'RORSOU R10 On-Ear Headphones with Microphone, Lightweight Folding Stereo Bass Headphones with 1.5M No-Tangle Cord, Portable Wired Headphones for Smartphone Tablet Computer MP3 / 4',
        img: aedle,
    },
    {
        id: uuid(),
        name: 'Apple AirPods Pro (2nd Generation)',
        price: 230.00,
        sale: 6,
        qty: 50,
        color: 'White',
        stars: 4,
        text: 'Apple AirPods Pro (2nd Generation) Wireless Earbuds with MagSafe Charging Case. Active Noise Cancelling, Personalized Spatial Audio, Customizable Fit, Bluetooth Headphones for iPhone',
        img: airbudsv1,
    },
    {
        id: uuid(),
        name: 'Harman Kardon Onyx Studio',
        price: 134.00,
        sale: 6,
        qty: 50,
        color: 'Black',
        stars: 5,
        text: 'Harman Kardon Onyx Studio 4 Wireless Bluetooth Speaker Black (New Model, 100',
        img: harman,
    }
]

export default data