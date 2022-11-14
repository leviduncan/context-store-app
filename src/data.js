import uuid from 'uuid-random'
import aedle from './assets/aedle-phones.jpg'
import airbudsv1 from './assets/apple-airbuds-v1.jpg'
import harman from './assets/harmon-kardon-speakers.jpg'
import andwatch from './assets/nayris-android watch.jpg'

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
        keywords: 'headphones, brown, silver, on-ear, wired, smartphone, tablet, computer, cord'
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
        keywords: 'bluetooth, apple, wireless, earbuds, charging case, white, noise cancelling, iphone'
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
        keywords: 'speaker, bluetooth, black, harmon kardon, wireless'
    },
    {
        id: uuid(),
        name: 'Smart Watch for Men Women Fitness',
        price: 49.99,
        sale: 6,
        qty: 50,
        color: 'Black',
        stars: 5,
        text: 'Smart Watch for Men Women Fitness: (Make/Answer Call) Bluetooth Smartwatch for Android Phone iPhone Waterproof Run Sport Digital Watches Blood Pressure Heart Rate Monitor Step Counter Sleep Tracker',
        img: andwatch,
        keywords: 'watch, bluetooth, black, android, wireless, sport, digital, waterproof'
    }
]

export default data