const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = true
global.anti_delete = false

// setting
global.ownername ="𝙵𝚒𝚔𝚛𝚒𝚒𝚂𝚔𝚢"
global.ownernumber = "6281233738677"
global.botname = "𝚈𝚞𝚔𝚒𝚗𝚒𝚔𝚘-𝙱𝚘𝚝"
global.thumbnail = fs.readFileSync("./settings/Haruka.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = 'Fiktod' //register lolhuman.xyz klo mau apikey
global.zenzkey = 'fiktod' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
