import uuid from 'uuid-random'
import aedle from './assets/aedle-phones.jpg'
import airbudsv1 from './assets/apple-airbuds-v1.jpg'
import harman from './assets/harmon-kardon-speakers.jpg'
import andwatch from './assets/nayris-android watch.jpg'
import miranda from './assets/miranda-camera.jpg'
import lumix from './assets/lumix-camera-v1.jpg'
import olympus from './assets/olympus-camera-v2.jpg'
import armin from './assets/armin-buds.jpg'
import ervo4 from './assets/ervo-rocks-headphones-v4.jpg'
import ervo2 from './assets/ervo-rocks-headphones-v2.jpg'
import veebuds from './assets/vee-buds.jpg'
import psp from './assets/playstation.jpg'
import xbox from './assets/xbox-game-controller-v2.jpg'
import xbox1 from './assets/xbox-game-controller-v1.jpg'
import pcmouse from  './assets/nayris-computer-mouse.jpg'
import kody from './assets/kody-headphones-v1.jpg'

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
        keywords: 'headphones, brown, silver, on-ear, wired, smartphone, tablet, computers, cord',
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
        keywords: 'bluetooth, apple, wireless, earbuds, charging case, white, noise cancelling, iphone, sports, play, work',
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
        keywords: 'speaker, speakers, bluetooth, black, harmon kardon, wireless, computers',
    },
    {
        id: uuid(),
        name: 'LORELEI X6 Over-Ear Headphones',
        price: 16.99,
        sale: 30,
        qty: 90,
        color: 'Sky Blue',
        stars: 4,
        text: 'LORELEI X6 Over-Ear Headphones with Microphone, Lightweight Foldable & Portable Stereo Bass Headphones with 1.45M No-Tangle, Wired Headphones for Smartphone Tablet MP3 / 4',
        img: ervo4,
        keywords: 'over, over ear, headphones, lightblue, wired, smartphone, tablet, computers, cord',
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
        keywords: 'watch, bluetooth, black, android, wireless, sport, digital, waterproof',
    },
    {
        id: uuid(),
        name: 'Miranda EE auto sensorex Camera',
        price: 249.99,
        sale: 6,
        qty: 5,
        color: 'Black',
        stars: 5,
        text: 'Miranda EE auto sensorex camera with Auto Miranda E 1:1.4 f=50mm Lens and Auto Miranda E 1:2.8 f=105mm Lens. Custom Iso speed and aperture settings.',
        img: miranda,
        keywords: 'black, silver, waterproof, 50mm, lens, auto, vintage, camera, cameras, film',
    },
    {
        id: uuid(),
        name: 'Armin Wireless Earbuds BT 5.0',
        price: 19.00,
        sale: 6,
        qty: 150,
        color: 'White',
        stars: 3,
        text: 'Armin Wireless Earbuds, Bluetooth 5.0 Earbuds, Earphones Wireless Bluetooth with Charging case, Ear Bud & in-Ear Headphones IPX6 Waterproof, Wireless Ear Buds with Mic Auto Pairing for Android iPhone',
        img: armin,
        keywords: 'bluetooth, android, wireless, earbuds, charging case, white, noise cancelling, iphone, sports, play, work',
    },
    {
        id: uuid(),
        name: 'Panasonic LUMIX FZ300 Camera',
        price: 447.99,
        sale: 6,
        qty: 5,
        color: 'Black',
        stars: 5,
        text: 'Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel, 1/2.3-Inch Sensor, 4K Video, WiFi, Splash & Dustproof Camera Body, LEICA DC 24X F2.8 Zoom Lens - DMC-FZ300K - (Black) USA',
        img: lumix,
        keywords: 'black, waterproof, lens, auto, camera, cameras, dustproof, digital, zoomlens, lumix, panasonic',
    },
    {
        id: uuid(),
        name: 'Olympus OM-G 35mm Film Camera',
        price: 150.99,
        sale: 6,
        qty: 5,
        color: 'Black',
        stars: 5,
        text: 'Olympus OM-G 35mm Film Camera And 50mm f/1.8 Lens',
        img: olympus,
        keywords: 'black, silver, waterproof, lens, auto, vintage, film, camera, cameras, dustproof, zoomlens, lumix, panasonic',
    },
    {
        id: uuid(),
        name: 'Ervo Bluetooth Headphones Over-Ear',
        price: 20.99,
        sale: 30,
        qty: 40,
        color: 'Black',
        stars: 4,
        text: 'Bluetooth 5.0 Headphones Over-Ear, 60 Hours Playtime Foldable Lightweight Wireless Headphones Hi-Fi Stereo with 6 EQ Modes, Bass Adjustable Headset with Built-in HD Mic, FM, SD/TF for PC/Home',
        img: ervo2,
        keywords: 'over, over ear, headphones, black, wireless, bluetooth, smartphone, tablet, computers, cord',
    },
    {
        id: uuid(),
        name: 'Vee Wireless Earbuds Bluetooth Headphones',
        price: 19.00,
        sale: 6,
        qty: 150,
        color: 'White',
        stars: 3,
        text: 'Wireless Earbuds Bluetooth Headphones 5.3 with 4-Mics Clear Call 50H Playback Waterproof Stereo Earphones with Wireless Charging Case LED Power Display in-Ear Headset for Workout/Home/Office',
        img: veebuds,
        keywords: 'bluetooth, android, wireless, earbuds, charging case, white, noise cancelling, iphone, sports, play, work, workout, home, office',
    },
    {
        id: uuid(),
        name: 'Sony Playstation Portable 2000',
        price: 199.00,
        sale: 6,
        qty: 150,
        color: 'Pearl Blue',
        stars: 3,
        text: 'Sony Playstation Portable (PSP) 2000 Series Handheld Gaming Console System (Pearl Baby Blue). The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.',
        img:psp,
        keywords: 'plastation, gaming, games, sony psp, psp, gamepad, sony, wi-fi',
    },
    {
        id: uuid(),
        name: 'XBOX Wireless Controller Black',
        price: 28.00,
        sale: 6,
        qty: 20,
        color: 'Black',
        stars: 3,
        text: 'XBOX Wireless Controller for Xbox 360, 2.4GHz Enhanced Dual Vibration Game Controller with Receiver Remote Gamepad Joypad Joystick for Xbox 360 Slim PS3 and PC Windows 7/8/10',
        img: xbox1,
        keywords: 'blacj, xbox, gaming, games, gamepad, microsoft, wi-fi, game, controller, wireless, joypad, joystick',
    },
    {
        id: uuid(),
        name: 'XBOX Wireless Controller',
        price: 18.00,
        sale: 6,
        qty: 20,
        color: 'White',
        stars: 3,
        text: 'XBOX Wireless Controller for Xbox 360, 2.4GHz Enhanced Dual Vibration Game Controller with Receiver Remote Gamepad Joypad Joystick for Xbox 360 Slim PS3 and PC Windows 7/8/10',
        img: xbox,
        keywords: 'xbox, gaming, games, gamepad, microsoft, wi-fi, game, controller, wireless, joypad, joystick',
    },
    {
        id: uuid(),
        name: 'Kody WH-1000XM5 Wireless Headphones',
        price: 398.00,
        sale: 30,
        qty: 50,
        color: 'Black',
        stars: 5,
        text: 'Kody WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Auto Noise Canceling Optimizer, Crystal Clear Hands-Free Calling, and Alexa Voice Control, Black',
        img: kody,
        keywords: 'headphones, black, on-ear, wired, wireless, smartphone, music, tablet, computers, cord',
    },
    {
        id: uuid(),
        name: 'Logitech Pro 2.4G Wireless Mouse',
        price: 18.00,
        sale: 6,
        qty: 20,
        color: 'Black',
        stars: 3,
        text: 'Wireless Mouse, Logitech Pro 2.4G Ergonomic Wireless Optical Mouse with USB Nano Receiver for Laptop,PC,Computer,Chromebook,Notebook,6 Buttons,24 Months Battery Life, 2600 DPI, 5 Adjustment Levels',
        img: pcmouse,
        keywords: 'mouse, computers, ergonomic, wireless, optical, usb, nano, laptop',
    },
]

export default data