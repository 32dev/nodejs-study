function solution(picture, k) {
    return picture.map(rows=>Array(k).fill(rows.split('').map(s=>s.repeat(k)).join(''))).flat();
 }