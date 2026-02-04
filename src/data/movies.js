// Mock data for demonstration
export const movies = [
    {
        id: 1,
        title: 'Romance in Paradise',
        description: 'เรื่องราวความรักที่เร่าร้อน',
        category: 'โรแมนติก',
        thumbnail: 'https://via.placeholder.com/400x250/ff0000/ffffff?text=Movie+1',
        duration: '45:30',
        rating: '4.8',
        views: '125K'
    },
    {
        id: 2,
        title: 'Midnight Desires',
        description: 'ความปรารถนาในยามค่ำคืน',
        category: 'ดราม่า',
        thumbnail: 'https://via.placeholder.com/400x250/d30000/ffffff?text=Movie+2',
        duration: '52:15',
        rating: '4.6',
        views: '98K'
    },
    {
        id: 3,
        title: 'Passion Unleashed',
        description: 'ปลดปล่อยความหลงใหล',
        category: 'แอ็คชั่น',
        thumbnail: 'https://via.placeholder.com/400x250/ff3333/ffffff?text=Movie+3',
        duration: '38:45',
        rating: '4.9',
        views: '156K'
    },
    {
        id: 4,
        title: 'Secret Affairs',
        description: 'ความลับที่ไม่อาจเปิดเผย',
        category: 'ระทึกขวัญ',
        thumbnail: 'https://via.placeholder.com/400x250/cc0000/ffffff?text=Movie+4',
        duration: '41:20',
        rating: '4.7',
        views: '112K'
    },
    {
        id: 5,
        title: 'Forbidden Love',
        description: 'ความรักที่ต้องห้าม',
        category: 'โรแมนติก',
        thumbnail: 'https://via.placeholder.com/400x250/ff0000/ffffff?text=Movie+5',
        duration: '48:10',
        rating: '4.5',
        views: '89K'
    },
    {
        id: 6,
        title: 'Temptation Island',
        description: 'เกาะแห่งการล่อลวง',
        category: 'ผจญภัย',
        thumbnail: 'https://via.placeholder.com/400x250/d30000/ffffff?text=Movie+6',
        duration: '55:30',
        rating: '4.8',
        views: '142K'
    }
]

export const categories = [
    { id: 1, name: 'โรแมนติก', icon: '💕', count: 245 },
    { id: 2, name: 'ดราม่า', icon: '🎭', count: 189 },
    { id: 3, name: 'แอ็คชั่น', icon: '⚡', count: 156 },
    { id: 4, name: 'ระทึกขวัญ', icon: '🔥', count: 134 },
    { id: 5, name: 'ผจญภัย', icon: '🌴', count: 98 },
    { id: 6, name: 'คอมเมดี้', icon: '😄', count: 76 }
]

export const reviews = [
    {
        id: 1,
        movieTitle: 'Romance in Paradise',
        reviewer: 'User123',
        rating: 5,
        comment: 'เนื้อหาดีมาก คุณภาพสูง แนะนำเลยครับ',
        date: '2026-02-01'
    },
    {
        id: 2,
        movieTitle: 'Midnight Desires',
        reviewer: 'MovieFan88',
        rating: 4,
        comment: 'ชอบมากค่ะ บรรยากาศดี นักแสดงสวย',
        date: '2026-02-02'
    },
    {
        id: 3,
        movieTitle: 'Passion Unleashed',
        reviewer: 'CinemaLover',
        rating: 5,
        comment: 'ยอดเยี่ยมมาก ดูแล้วประทับใจ',
        date: '2026-02-03'
    }
]

export const stars = [
    {
        id: 1,
        name: 'Sophia Rose',
        photo: 'https://via.placeholder.com/300x400/ff0000/ffffff?text=Star+1',
        movies: 45,
        rating: '4.9',
        bio: 'ดาราชื่อดังระดับโลก'
    },
    {
        id: 2,
        name: 'Emma Diamond',
        photo: 'https://via.placeholder.com/300x400/d30000/ffffff?text=Star+2',
        movies: 38,
        rating: '4.8',
        bio: 'นักแสดงมากความสามารถ'
    },
    {
        id: 3,
        name: 'Luna Star',
        photo: 'https://via.placeholder.com/300x400/ff3333/ffffff?text=Star+3',
        movies: 52,
        rating: '4.9',
        bio: 'ดาราที่ได้รับความนิยมสูงสุด'
    },
    {
        id: 4,
        name: 'Aria Sky',
        photo: 'https://via.placeholder.com/300x400/cc0000/ffffff?text=Star+4',
        movies: 41,
        rating: '4.7',
        bio: 'นักแสดงรุ่นใหม่ที่กำลังมาแรง'
    }
]
