setInterval(()=>{
const os = require('os');
const {arch, platform, totalmem, freemem} = os;
const TRam = totalmem()/1024/1024;
const FRam = freemem()/1024/1024;
const usage = (FRam / TRam)*100;

const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(TRam)} MB`,
    FreeRAM: `${parseInt(FRam)} MB`,
    Usage: `${usage.toFixed(2)} %`,
};

console.clear();
console.table(stats);
exports.stats = stats;
}, 1000);