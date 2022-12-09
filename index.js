// primitve
const umur = 20 //int
const name = 'string' //string ""
const isMaried = false // bool

const child = null //null
// const hoby = undefined // undif

// non primitive
const buah = ['apple', 'mangga', true, 20, null] //array

// console.log(buah[0])
// console.log(buah[2])

const bioData = {
    name: 'ebi',
    age: 20000,
    school: {
        name: 'sdn 10',
        yearin: 200
    },
    hoby: ['tidur', 'makan', { name: 'main game', sering: true }]
}

bioData.name = 'ardhi'

// console.log(bioData)
// console.log(bioData.name)
// console.log(bioData.school.name)
// console.log(bioData.hoby[2].name)

let username = null
const password = 'password'

if (username == 'ebiebi') {
    console.log('anda login')
} else if (password == 'password') {
    console.log('password benar')
} else if (false) {
    console.log('masuk sini')
} else {
    console.log('gagal login')
}

if (typeof username == null) {
    console.log('username tidak diisi')
} else {
    console.log('username diisi')
}

const data = '12345'

const buahan = ['apel', 'mangg', 'jambu']

for (let i = 0; i < buahan.length; i++) {
    // console.log(buahan[i])
}

buahan.forEach((value) => {
    // console.log(value)
})

for (const iterator of buahan) {
    // console.log(iterator)
}

const arr2d = [
    ['pius', 'aldi', 'adivigo'],
    ['jambu', 'rambutan', 'durian']
]

arr2d[1][1]

for (let index = 0; index < arr2d.length; index++) {
    for (let idx = 0; idx < arr2d[index].length; idx++) {
        const element = arr2d[index][idx]
        console.log(element)
    }
}

let angka = 0
while (true) {
    if (angka == 10) {
        break
    }

    console.log(angka)
    angka++
}

const isLogin = username == 'ebiebi' ? 'login' : 'gagal login'

const myName = 'ebi'
const tahunLahir = 2010
const umurSaya = 2022 - tahunLahir

const intro = 'nama saya ' + myName + 'saya lahir tahun ' + tahunLahir + 'umur saya sekarang ' + umurSaya

const introduc = `nama saya ${myName} saya lahi tahun ${tahunLahir} umur saya sekarang ${umurSaya}`

const bioDatas = {
    name: 'ebi',
    age: 20000,
    school: {
        name: 'sdn 10',
        yearin: 200
    },
    hoby: ['tidur', 'makan', { name: 'main game', sering: true }]
}

const { hoby, school } = bioDatas //

const dataArr = ['jambu', 'rambutan']

const newName = bioDatas.name

const { school, hoby } = bioDatas //

const [jambu, rambutan] = dataArr
const { name: nameBaru } = bioDatas.school
const bioDataCopy = { ...bioDatas, ...dataArr }

bioDataCopy.name = 'nama baru'

console.log(bioDataCopy)
