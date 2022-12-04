const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

const initPage = async () => {
    const response = await fetch(apiUrl)
    if (response.code > 299) {
        throw new Error("can't fetch API data")
    }
    const jsonData = await response.json()
    const tableData = jsonData.data
    const headers = Object.keys(tableData[0])
    const tHead = document.getElementById("population-table-head")
    const headerRow = tHead.insertRow()
    for(const k of headers) {
        const th = document.createElement("th")
        th.innerText = k
        headerRow.appendChild(th)
    }
    const tableBody = document.getElementById("population-table-body")
    for(let row of tableData) {
        const tr = document.createElement("tr")
        for(const dataPoint of Object.values(row)) {
            const td = document.createElement("td")
            td.innerText = dataPoint
            tr.appendChild(td)
        }
        tableBody.appendChild(tr)
    }

}

document.addEventListener("DOMContentLoaded", initPage)
