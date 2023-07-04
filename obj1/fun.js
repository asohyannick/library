function Book(title, author, pages, read) {
    this.title = new title
    this.author = new author
    this.pages = new pages
    this.info= function() {
        this.read = new read
        console.log(title)
    }
} 

const newTitle = new Book('The Autonomous Programmer');
newTitle.info();
