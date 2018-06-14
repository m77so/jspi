document.getElementById("btn").addEventListener("click",()=>{
  const d = +document.getElementById("d").value
  Decimal.config({ precision: d*3 })
  let a= new Decimal(1)
  let b = new Decimal(1).dividedBy(new Decimal(2).sqrt())
  let t = new Decimal("0.25")
  let p = new Decimal(1)
  let a1,b1,t1,p1,tmp1
  let answers = []
  for(let i=1;i<=d;i*=2){
    a1 = a.add(b).dividedBy(2)
    b1 = a.times(b).sqrt()
    tmp1 = a.minus(a1)
    tmp1 = tmp1.times(tmp1)
    t1 = t.minus(p.times(tmp1))
    p1 = p.times(2)
    a=a1
    b=b1
    t=t1
    p=p1
    tmp1 = a.add(b)
    tmp1 = tmp1.times(tmp1)
    answers.push(tmp1.dividedBy(t.times(4)).toString())
    const len = answers.length
    if (len>=2 && answers[len-1].substr(0,d+3) ==  answers[len-2].substr(0,d+3) ){
      break
    }
  }
  const len = answers.length
  document.getElementById("r").value = answers[len-1].substr(0,d+2)
})