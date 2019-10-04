const db = firebase.firestore()
// console.log(db)

document.querySelector(`#add-train`).addEventListener(`click`, e => {
    e.preventDefault()
    let trainInfo = {
        train: document.querySelector(`#train-name`).value,
        destination: document.querySelector(`#destination`).value,
        firstTime: document.querySelector(`#first-time`).value,
        frequency: document.querySelector(`#frequency`).value,
    }
    console.log(trainInfo)
    db.collection(`trains`).add(trainInfo)
    })
db
    .collection(`trains`)
    .onSnapshot(({ docs }) => {
        docs.forEach(doc => {
            let { train, frequency, firstTime, destination } = doc.data()
            let list = document.createElement(`ul`) 
            list.innerHTML = `
            <div class="row">
                
            </div>`
        })
    })