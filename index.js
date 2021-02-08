const myCanvas = document.getElementsByTagName("canvas")[0];
const ctx = myCanvas.getContext("2d");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

ctx.fillStyle = "#000"
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)


/**
 * 用于产生一个烟花
 * @param {number} x 水平坐标
 * @param {number} y 垂直坐标
 */
function getfire(x, y) {
    const fireR = 3;//表示每个烟花得半径
    const disR = 20;//表示烟花距离点击点的半径
    const angle = Math.PI / 3;//表示六十度
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    //A: (r, 0) => (x + r, y)
    everyCircle(x + disR, y, fireR);
    //B: (r * cos, r * sin) => (x + r * cos, y + r * sin)
    everyCircle(x + disR * cos, y + disR * sin, fireR);
    //C: (-r * cos, r * sin) = > (x - r * cos, y + r * sin)
    everyCircle(x - disR * cos, y + disR * sin, fireR);
    //D: (-r, 0) => (x - r, y)
    everyCircle(x - disR, y, fireR);
    //E: (-r * cos, -r * sin) => (x - r * cos, y - r * sin)
    everyCircle(x - disR * cos, y - disR * sin, fireR);
    //F: (r * cos, -r * sin) => (x + r * cos, y - r * sin)
    everyCircle(x + disR * cos, y - disR * sin, fireR);
}
//绘制每一个小圆的位置
function everyCircle(x, y, r) {
    console.log("我画了")
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillStyle = "#fff";
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
/**
 * 用于记录烟花得发射点
 * 产生一个随机坐标
 */
function getRandomPosition() {

}

myCanvas.onclick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    getfire(x, y);//
}

