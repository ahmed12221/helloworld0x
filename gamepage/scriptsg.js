document.addEventListener('DOMContentLoaded', function () {
    // انتظار تحميل جميع الصور
    const images = document.querySelectorAll('.game-circle img');
    const totalImages = images.length;
    let loadedImages = 0;

    images.forEach((img) => {
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                console.log('تم تحميل جميع الصور بنجاح.');
                // الآن يمكنك تفعيل أي أزرار أو روابط إذا لزم الأمر
            }
        };
    });

    var gameModal = document.getElementById('gameModal');
    var closeModal = document.querySelector('.modal .close');
    var gameTitle = document.getElementById('gameTitle');
    var gameReview = document.getElementById('gameReview');
    var gameRating = document.getElementById('gameRating');

    var games = [
        { title: "SEKIRO", review: 'لعبة ممتازة رجعت لي الشغف للالعاب ', rating: 5, background: 'url(gamespic/S-background-2.jpg)'},
        { title: "ELDEN RING", review: "يجي منها ", rating: 4.5 ,background: 'url(gamespic/e-background.png)'},
        { title: "OVERWATCH", review: "ختفو على لعبة الشواذ هذي" , rating: 1, background: 'url(gamespic/o-background.png)' },
        { title: "VALORANT", review: "لعبة ممتازة مجتمعها يفتقر للحنان ومازوخيين  ", rating: 3.5, background: 'url(gamespic/v-background.png)'},
        { title: "PARAGON: THE OVERPRIME", review: "افضل لعبة لعبتها منذ ولادتي ادمنت عليها وتدهورت حياتي واضطريت اعيش 3 اسابيع في الشارع بسبب اني فقدت وظيفتي وزوجتي طلقتني وتراكمت علي الديون لكن اللعبة تستاهل صراحة تجربة ممتعة عيال الكلب المطورين قفلوا السيرفرات بعد ما شالو فلوس الناس وسحبو عليهم لكن ما قد شحنت فيها عوافي ككل اللعبة رائعة واذا نزلت ثاني بلعبها ", rating: 5,background: 'url(gamespic/p-background.png)'},
        { title: "FORTNITE", review: "لعبة اسطورية على وقتها جت بفكرة جديدة ودعست على كل الالعاب الثانية لانها كانت فكرة بنت كلب ومجانية بعد ", rating: 5,background: 'url(gamespic/f-background.jpg)' },
        { title: "BRAWLHALLA", review: "لعبة زبالة وترفع الضغط", rating: 2,background: 'url(gamespic/b-background.jpg)' }
        // Add more games here...
    ];

    var gameCircles = document.querySelectorAll('.game-circle');
    gameCircles.forEach(function (circle) {
        circle.addEventListener('click', function () {
            var gameIndex = circle.getAttribute('data-game') - 1;
            var game = games[gameIndex];

            gameTitle.innerText = game.title;
            gameReview.innerText = game.review;
            gameRating.innerHTML = getStars(game.rating);
            var modalContent = document.querySelector('.modal-content');
            modalContent.style.backgroundImage = game.background;

            gameModal.style.display = 'flex';
        });
    });

    // إغلاق النافذة عند النقر خارج حدودها
    window.addEventListener('click', function (event) {
        if (event.target == gameModal) {
            gameModal.style.display = 'none';
        }
    });

    closeModal.addEventListener('click', function () {
        gameModal.style.display = 'none';
    });

    function getStars(rating) {
        let fullStar = '<span class="star">&#9733;</span>';
        let halfStar = '<span class="star">&#9734;</span>';
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += fullStar;
            } else if (i - rating < 1) {
                stars += halfStar;
            } else {
                stars += halfStar;
            }
        }
        return stars;
    }
});
