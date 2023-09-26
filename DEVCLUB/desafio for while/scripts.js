const paragraph = document.querySelector(".paragraph")
    const input = document.querySelector("input")

    const contacts = [
        { name: "Jean", number: "(47) 95858-5865" },
        { name: "Thalyta", number: "(47) 99585-5212" },
        { name: "Sophia", number: "(47) 99582-5326" },
        { name: "Thayna", number: "(47) 99652-5348" },

    ]
    

    function search() {
        let i = 0

        do {
            if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
                paragraph.innerHTML = `Contato encontrado Nome: ${contacts[i].name}  Tel: ${contacts[i].number}`
                break


            }
            else {
                paragraph.innerHTML = "Contato não encontrado"

            }



            i++;

        } while (i < contacts.length)

    }