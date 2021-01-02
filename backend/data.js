/*import bcrypt from 'bcryptjs';
const data = {
    users: [{
            _id: ''
            name: "Mai Huynh Loc",
            email: "admin@gmail.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: "Mai Loc",
            email: "user@gmail.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    projects: [{
            name: 'Pac Man',
            image: '/images/pacman.jpg',
            rating: 4.5,
            numReviews: 10,
            description: 'Thử build game Pac-man là cách học nhanh nhất để hiểu rõ tường tận một game được build như thế nào. Bạn có thể build trên framework của JavaScript ví dụ như React hoặc Vue.Những điều bạn có thể học được: Chuyển động của các nhân vật. Detect các key nào được nhấn Detect các va chạm. Bạn có thể nâng cấp bằng cách add thêm vào các chuyển động điều khiển cho các con ma trong game.',
            process: 50
        },
        {
            name: 'Weather Forecast',
            image: '/images/weather.png',
            rating: 4.0,
            numReviews: 10,
            description: 'Nếu bạn muốn bắt đầu build một app thì tạo app thời tiết sẽ là một điểm bắt đầu lý tưởng. Bạn có thể tạo bằng Swift.Ngoài việc tích lũy được chút kinh nghiệm build app, bạn chắc chắn sẽ học hỏi thêm được: Cách tương tác với một API Cách sử dụng chức năng định vị địa lý Bạn có thể khiến app của bạn trở nên sống động hơn bằng add thêm phần nhập text để người dùng nhập vị trí để xác định thời tiết tại vị trí của mình. Cách sử dụng chức năng định vị địa lý',
            process: 100
        },
        {
            name: 'Chat Box',
            image: '/images/chatbot.jpg',
            rating: 5.0,
            numReviews: 17,
            description: 'Build một Chat Box là cách hay để tìm hiểu về socket. Bạn sẽ có nhiều lựa chọn về tech stalk để tiến hành. Node.js có thể là một lựa chọn tốt để bạn bắt đầu đấy. Điều lớn nhất mà bạn học được từ dự án này đó là bạn sẽ biết được cách các socket hoạt động và cách ứng dụng chúng.',
            process: 100
        },
        {
            name: 'GitLab Cl',
            image: '/images/gitlab.png',
            rating: 4.0,
            numReviews: 14,
            description: 'Nếu bạn là một ma mới với CI (Continuous Intergration), bạn nên thử tìm tòi thêm về GitLab CI. Hãy thử lập ra nhiều môi trường và chạy thử trên đường truyền của bạn. Đây không phải là một chương trình quá “nặng”, nhưng tôi chắc là bạn sẽ học được nhiều thứ. Hiện nay nhiều team dev cũng sử dụng CI, và đây là công cụ tốt bạn nên trang bị cho bản thân.',
            process: 70
        },
        {
            name: 'Website Analysis',
            image: '/images/seo1.png',
            rating: 4.0,
            numReviews: 10,
            description: 'Bạn có thể thử tạo một scraper giúp phân tích cách vận hành của website và tạo một ranking cho chúng. Lấy ví dụ, bạn có thể kiểm tra được những alt tag bị mất trên các hình và những meta tag của SEO có còn hiện trên trang không. Bạn thậm chí còn có thể áp dụng scraper mà không cần tạo 1 UI.',
            process: 100
        },
        {
            name: 'Todo App',
            image: '/images/todo.png',
            rating: 4.5,
            numReviews: 15,
            description: 'Svelte còn khá mới so với React, Vue và Angular. Nhưng dù sao thì nó vẫn khá phổ biến cho năm 2020. To-do app không hẳn còn phổ biến cho tới hiện tại, nhưng nó thực sự sẽ giúp bạn mài giũa kỹ năng Svelte cho bản thân.',
            process: 50
        },
    ],
};
export default data;
*/
const data = {
    projects: [{
            _id: '1',
            name: 'Pac Man',
            image: '/images/pacman.jpg',
            rating: 4.5,
            numReviews: 10,
            description: 'Thử build game Pac-man là cách học nhanh nhất để hiểu rõ tường tận một game được build như thế nào. Bạn có thể build trên framework của JavaScript ví dụ như React hoặc Vue.Những điều bạn có thể học được: Chuyển động của các nhân vật. Detect các key nào được nhấn Detect các va chạm. Bạn có thể nâng cấp bằng cách add thêm vào các chuyển động điều khiển cho các con ma trong game.',
            process: 50
        },
        {
            _id: '2',
            name: 'Weather Forecast',
            image: '/images/weather.png',
            rating: 4.0,
            numReviews: 10,
            description: 'Nếu bạn muốn bắt đầu build một app thì tạo app thời tiết sẽ là một điểm bắt đầu lý tưởng. Bạn có thể tạo bằng Swift.Ngoài việc tích lũy được chút kinh nghiệm build app, bạn chắc chắn sẽ học hỏi thêm được: Cách tương tác với một API Cách sử dụng chức năng định vị địa lý Bạn có thể khiến app của bạn trở nên sống động hơn bằng add thêm phần nhập text để người dùng nhập vị trí để xác định thời tiết tại vị trí của mình. Cách sử dụng chức năng định vị địa lý',
            process: 100
        },
        {
            _id: '3',
            name: 'Chat Box',
            image: '/images/chatbot.jpg',
            rating: 5.0,
            numReviews: 17,
            description: 'Build một Chat Box là cách hay để tìm hiểu về socket. Bạn sẽ có nhiều lựa chọn về tech stalk để tiến hành. Node.js có thể là một lựa chọn tốt để bạn bắt đầu đấy. Điều lớn nhất mà bạn học được từ dự án này đó là bạn sẽ biết được cách các socket hoạt động và cách ứng dụng chúng.',
            process: 100
        },
        {
            _id: '4',
            name: 'GitLab Cl',
            image: '/images/gitlab.png',
            rating: 4.0,
            numReviews: 14,
            description: 'Nếu bạn là một ma mới với CI (Continuous Intergration), bạn nên thử tìm tòi thêm về GitLab CI. Hãy thử lập ra nhiều môi trường và chạy thử trên đường truyền của bạn. Đây không phải là một chương trình quá “nặng”, nhưng tôi chắc là bạn sẽ học được nhiều thứ. Hiện nay nhiều team dev cũng sử dụng CI, và đây là công cụ tốt bạn nên trang bị cho bản thân.',
            process: 70
        },
        {
            _id: '5',
            name: 'Website Analysis',
            image: '/images/seo1.png',
            rating: 4.0,
            numReviews: 10,
            description: 'Bạn có thể thử tạo một scraper giúp phân tích cách vận hành của website và tạo một ranking cho chúng. Lấy ví dụ, bạn có thể kiểm tra được những alt tag bị mất trên các hình và những meta tag của SEO có còn hiện trên trang không. Bạn thậm chí còn có thể áp dụng scraper mà không cần tạo 1 UI.',
            process: 100
        },
        {
            _id: '6',
            name: 'Todo App',
            image: '/images/todo.png',
            rating: 4.5,
            numReviews: 15,
            description: 'Svelte còn khá mới so với React, Vue và Angular. Nhưng dù sao thì nó vẫn khá phổ biến cho năm 2020. To-do app không hẳn còn phổ biến cho tới hiện tại, nhưng nó thực sự sẽ giúp bạn mài giũa kỹ năng Svelte cho bản thân.',
            process: 50
        },
    ],
};
export default data;