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

var a = [
    'f0ed5dccb42f9f4d75bd266402c08801.mp4',
    '24112102807ac47a1ee4e866eecef9fb.mp4',
    '679e7507a5dab885a24892e3ed864e9e.mp4',
    '4ac014b5e5bf713b0d2d82208ee40309.mp4',
    '50e4f9b609338e4f38702d69ad7f48e6.mp4',
    '6adfb96af970dad6c6c14429a8eb02c1.mp4',
    '2ba7da47632149eefe4b715e22877a32.mp4',
    'e6722df3e81da753b6159c3f8a5dae68.mp4',
    'd373a660280f53a3fa1c1589d5d7940c.mp4',
    '49690e0fe51f9dee5c044ccfea4bbd8b.mp4',
];


// var a = [
//     '111.txt',
// ];


// const dir = '/home/evgenii/Загрузки/';
const dir = 'C:\\Users\\Zinchenko\\Downloads\\';


a.forEach((item, i) => {
    fs.rename(dir + item, dir + `HowIMetYourMother_02_0${i + 1}.mp4`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });

    // fs.createReadStream(dir + item)
    //     .pipe(fs.createWriteStream(dir + `renamed\\HowIMetYourMother_02_0${i + 1}.mp4`));
});


