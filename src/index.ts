import ncu from 'npm-check-updates'

;(async () => {

  const upgrades = await ncu()
  console.log(upgrades)

})()
