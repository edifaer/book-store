export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'Nineteen Minutes',
            author: 'Jodi Picoult',
            price: 11,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51FFa23AzrL._SX322_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: 'The Boy in the Striped Pajamas',
            author: 'John Boyne',
            price: 8.30,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/61OX4OteXZL._SX328_BO1,204,203,200_.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        });
    }
}