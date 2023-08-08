const app = document.getElementById('app') as HTMLDivElement
const baseUrl = ("https://api.nasa.gov/planetary/apod?api_key=mqVamIA0fgZPI589hRYAO1u3BtNcKvy6D3PUgT7N")

const requestFromNasa = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    renderFunction(data)
}

requestFromNasa(baseUrl)

const renderFunction = (data: any) => {
    const {title, date, url, explanation} = data
    app.innerHTML = 
    `
    <input type="date" id="datepicker" value=${date}>
    <h1>${title}</h1>
    <p>${date}</p>
    <img src="${url}">
    <p>${explanation}</p>
    `
    const input = document.getElementById('datepicker') as HTMLInputElement

    input.addEventListener('change', () => {
        console.log(input.value)
        let archiveUrl = `https://api.nasa.gov/planetary/apod?date=${input.value}&api_key=mqVamIA0fgZPI589hRYAO1u3BtNcKvy6D3PUgT7N`
        requestFromNasa(archiveUrl)
    })
}