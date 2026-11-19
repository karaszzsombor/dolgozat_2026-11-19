const tbody = document.getElementById("tbody");
const maintanence = document.getElementById("maintanence");



async function adatok(){
    
    const response = await fetch('/patrons.json');
    const data = await response.json();
    
    for(const patron of data){
        const tr = document.createElement("tr");
        const tdSubscriber = document.createElement("td");
        const tdPremium = document.createElement("td");
        const tdTotalPaid = document.createElement("td");

        tdSubscriber.innerText = patron.subscriber;


        if(patron.premium == true){
            tdPremium.innerText = "✅";
        }
        else{
            tdPremium.innerText = "❌";      
        }

        tdPremium.addEventListener("click", () => {
            maintanence.classList.remove("d-none");
            const timeout = setTimeout(()=>{
                maintanence.classList.add("d-none")
            },5000)
        });


        tdTotalPaid.innerText = patron.paid_total;
        if(patron.paid_total > 800.0){
            tr.classList.add("table-warning")
        }

        tr.appendChild(tdSubscriber);
        tr.appendChild(tdPremium);
        tr.appendChild(tdTotalPaid);

        tbody.appendChild(tr);
    }
}

adatok();