var fs = require('fs');


// var a = [
//     '4b4da523a95c0826d9cc2a63a8030d74.mp4',
//     'abbe3c2f3163576912a9d4f60758c2a3.mp4',
//     'a0b8edf21c6c94dd0f484a74626c56c7.mp4',
//     '37a9139601e4a72d952df3e135fda1b8.mp4',
//     'f39c4764981468ae58b7864774f33e8d.mp4',
//     'f5af917dc5a71d3edff5172fb32ca599.mp4',
//     'ae81c44ccf3edb0347e59ac2babdf480.mp4',
//     'cdffee76d73bffd3057df4e1465f36cc.mp4',
//     '6b1476b253ec9fcb0a44764754c623ae.mp4',
//     '5bb50649196247d4dfc48108f8dca36c.mp4',
//     '6c1c46ec140b1bfa466167004c1b546e.mp4',
//     '8412f2faa3baf0538d8cb5ee514aa3af.mp4',
// ];


const dir = '/home/evgenii/Загрузки/';


// a.forEach((item, i) => {
//     fs.rename(dir + `HowIMetYourMother_02_${i}.mp4`, `${dir}renamed/HowIMetYourMother_02_${i + 11}.mp4`, function(err) {
//         if ( err ) console.log('ERROR: ' + err);
//     });
// });

const t = +new Date();
fs.createReadStream(dir + '8412f2faa3baf0538d8cb5ee514aa3af.mp4')
    .pipe(fs.createWriteStream(dir + 'HowIMetYourMother_02_22.mp4'));

console.log(+new Date - t);