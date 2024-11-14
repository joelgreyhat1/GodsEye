const chalk = require("chalk")
const axios = require("axios")
const { Command } = require('commander');
const program = new Command();

program
  .name('GodsEye')
  .description('Trace IPv4 and IPv6 Realtime Location')
  .version('1.0.0');

  program
  .option('-i, --ip [string]', 'Input an IP Address to trace');

program.parse(process.argv);
const options = program.opts();
function banner(){
	console.clear()
	console.log(chalk.green(`
  ####     ####    ####      ####    ######   ##  ##   ######  
 ##  ##   ##  ##   ## ##    ##  ##   ##       ##  ##   ##      
 ##       ##  ##   ##  ##   ##       ##       ##  ##   ##      
 ## ###   ##  ##   ##  ##    ####    ####      ####    ####    
 ##  ##   ##  ##   ##  ##       ##   ##         ##     ##      
 ##  ##   ##  ##   ## ##    ##  ##   ##         ##     ##      
  ####     ####    ####      ####    ######     ##     ######
`));
	console.log(chalk.yellow(`DEVELOPED BY JOEL GREYHAT
 `));
}
banner()

if ( !options.ip ){
	console.log("Uses use ./GodsEye --help or -h ");
	console.log("./ippin -i <ip address>");
} 
else
{
	
	trackIp(options.ip);

}
function trackIp(tIp){
	if (tIp == undefined){
		var url = `http://ip-api.com/json`
		console.log();
	}
	else{
		var url = `http://ip-api.com/json/${tIp}`
		console.log(url);
	}
	axios.get(url)
	.then((res) =>{
	setTimeout(()=>{console.log(chalk.yellow("DETECTED COUNTRY"));},200);
	setTimeout(()=>{
		console.log(chalk.green(`${res.data.country}`));
	},300);
	setTimeout(()=>{console.log(chalk.yellow("DETECTED REGION"));},400);
	setTimeout(()=>{
		console.log(chalk.green(`${res.data.regionName}`));
	},500);
	setTimeout(()=>{
		console.log(chalk.yellow("DETECTED CITY"));
		console.log(chalk.green(`${res.data.city}`));
	},600)
	setTimeout(()=>{
		console.log(chalk.yellow("DETECTED DISTRICT"));
		console.log(chalk.green(`${res.data.distric}`));
	},700)
	setTimeout(()=>{
		console.log(chalk.yellow("DECTECTED TIMEZONE"));
		console.log(chalk.green(`${res.data.timezone}`));
    },800);
	setTimeout(()=>{
		console.log(chalk.yellow("LAT AND LON"));
		console.log(chalk.green(`LATITUDE OF IP: ${res.data.lat}`));
		console.log(chalk.green(`LONGITUDE OF IP : ${res.data.lon}`));
	},1000)
	setTimeout(()=>{
		console.log(chalk.yellow("DETECTED ISP"));
		console.log(chalk.green(`${res.data.isp}`));
	},1200)
	setTimeout(()=>{
		console.log(chalk.yellow("IP ADDRESS"));
		console.log(chalk.green(`${res.data.query}`));
	},1400);
    })
}

