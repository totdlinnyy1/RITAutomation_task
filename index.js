const block = document.getElementsByClassName('block')[0]
const dashedBlock = document.getElementsByClassName('dashed-block')[0]
let col

document.addEventListener('click', (e) => {
  if (col) {
    col.classList.remove('table__col-active')
  }
  try {
    const place = e.target.parentElement.getAttribute('data-place')
    col = document.querySelector(`[data-place="${place}"]`)
    col.classList.add('table__col-active')
    block.innerHTML = `<p>${e.target.innerText}</p>`
  } catch (e) {
    block.innerHTML = ''
  }
})

const obj={
  a0:{aa:[3,9], bb:2, cc:{aaa:4,bbb:-5}},
  a1:{aa:[0,8], bb:-7, cc:{aaa:8,bbb:7}},
  a2:{aa:[9,-4], bb:1, cc:{aaa:-1,bbb:8}},
  a3:{aa:[8,-1], bb:7, cc:{aaa:3,bbb:0}},
  a4:{aa:[-4,-2], bb:-2, cc:{aaa:8,bbb:9}}
}

let max = obj.a0.aa[0]
let min = obj.a0.aa[0]
for (const key in obj) {
  if (!obj.hasOwnProperty(key)) continue;

  const ob = obj[key];
  for (const prop in ob) {
    if (!ob.hasOwnProperty(prop)) continue;

    if (prop === 'aa') {
      const aaMax = Math.max(...ob[prop])
      if (aaMax > max) max = aaMax
      if (aaMax < min) min = aaMax
    }
    if (prop === 'bb') {
      if (ob[prop] > max) max = ob[prop]
      if (ob[prop] < min) min = ob[prop]
    }
    if (prop === 'cc') {
      if (ob[prop].aaa > max) max = ob[prop].aaa
      if (ob[prop].aaa < min) min = ob[prop].aaa
      if (ob[prop].bbb > max) max = ob[prop].bbb
      if (ob[prop].bbb < min) min = ob[prop].bbb
    }
  }
}

dashedBlock.innerHTML += `<p>Максимально значение ${max} и минимальное занчение ${min}.</p>`

