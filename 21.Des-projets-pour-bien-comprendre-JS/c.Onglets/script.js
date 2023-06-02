const onglets = Array.from(document.querySelectorAll('.onglets'));
const contenus = Array.from(document.querySelectorAll('.contenus'));

onglets.forEach((onglet) => {
    onglet.addEventListener('click', (e) => {
        for (let i = 0; i < onglets.length; i++) {
            const currentOnglet = onglets[i];
            if(currentOnglet === e.target) {
                currentOnglet.classList.add('active-onglets');
            } else {
                currentOnglet.classList.remove('active-onglets');
            }
        }

        console.log(onglets.indexOf(e.target));
        
        for (let i = 0; i < contenus.length; i++) {
            const currentContenu = contenus[i];
            if(i === onglets.indexOf(e.target)) {
                currentContenu.classList.add('active-contenu');
            } else {
                currentContenu.classList.remove('active-contenu');
            }
        }

    });
});