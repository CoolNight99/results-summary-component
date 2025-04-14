import data from "../data.json" with { type: "json" };

const summaryCards = document.querySelector(".summary-cards");
const bgColors = ["hsla(0, 100%, 67%, 10%)", "hsla(39, 100%, 56%, 10%)", "hsla(166, 100%, 37%, 10%)", "hsla(234, 85%, 45%, 10%)"]
const textColors = ["hsl(0, 100%, 67%)", "hsl(39, 100%, 56%)", "hsl(166, 100%, 37%)", "hsl(234, 85%, 45%)"]

for (let i = 0; i < data.length; i++) {
    summaryCards.innerHTML += `
                                <div class="summary-card my-2 d-flex justify-content-between align-items-center px-2 py-3" style="background-color:${bgColors[i]}">
                                    <div class="category d-flex align-items-center gap-2">
                                        <img src="${data[i].icon}" alt="icon">
                                        <p class="category-title m-0" style="color:${textColors[i]}">${data[i].category}</p>
                                    </div>
                                    <p class="score m-0"><span class="score-value">${data[i].score}</span> / 100</p>
                                </div>

                            `
}