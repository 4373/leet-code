function test(num) {
  let h = 0
  let res = []

  while (h <= num) {
    const harr = []
    const marr = []
    for (let i = 0; i < 12; i++) {
      let rh = i.toString(2).padStart(4, '0')
      let c = 0
      for (let j = 0; j < rh.length; j++) {
        if (rh[j] === '1') c++
      }
      if (h === c) harr.push(i)
    }
    for (let i = 0; i < 60; i++) {
      let rm = i.toString(2).padStart(6, '0')
      let c = 0
      for (let j = 0; j < rm.length; j++) {
        if (rm[j] === '1') c++
      }
      if (num - h === c) {
        if (i >= 10) marr.push(i)
        else marr.push('0' + i)
      }
    }
    harr.forEach(item => {
      marr.forEach(i => {
        res.push(item + ':' + i)
      })
    })
    h++
  }

  return res
}
console.log(JSON.stringify(test(1)))
