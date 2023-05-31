const container = document.querySelector('.container');
const bookList = document.querySelector(".book-list");
const bookForm = document.querySelector(".book-form");


class Book {

    constructor(titre, auteur, annee) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }

    addBookToList(book) {
     
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.titre}</td>
        <td>${book.auteur}</td>
        <td>${book.annee}</td>
        <td><button class="delete">X</button></td>`;

        bookList.appendChild(row);
        
    }

    // Faire un clear des champs 
    clearFields() {
        document.getElementById('titre').value = "";    
        document.getElementById('auteur').value = "";    
        document.getElementById('annee').value = "";    
    }

    // Création d'une DIV d'alerte
    showAlert(message, className) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${className}`;
        alertDiv.appendChild(document.createTextNode(message));
        container.insertBefore(alertDiv, bookForm);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2500);
    }
}

class Interface {

    deleteBook(target) {
        console.log(target);
        if (target.className === 'delete') {
            // Suppression du TR représentant le livre
            target.parentElement.parentElement.remove();
        }
    }
}

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
    const titre = document.getElementById("titre").value;
    const auteur = document.getElementById("auteur").value;
    const annee = document.getElementById("annee").value;

    const book = new Book(titre, auteur, annee);

    if (titre === "" || auteur === "" || annee === "") {
        book.showAlert('Remplissez les champs!', 'error');
    
    } else {

        book.addBookToList(book);
        book.clearFields();
        book.showAlert('Livre ajouté.', 'success');
    }

})

bookList.addEventListener('click', (e) => {
    const ui = new Interface();
    ui.deleteBook(e.target);
});