function toggleMenu() {
    const navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
}


// certificates
document.addEventListener("DOMContentLoaded", function() {
    const certificates = [
        {
            img: './Images/7.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
        {
            img: './Images/70f0cf65-aa31-44e7-b04a-d37cc70b8aa6.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
         {
            img: './Images/8.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
        {
            img: './Images/807e22f3-f59e-42e8-81b3-94d6d0a7101f.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
         {
            img: './Images/b95e3433-1b31-445a-bfbc-d7cf5b5101fc.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
        {
            img: './Images/a5e03b03-bcd9-4cc4-af16-e8e1dc60e848.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
         {
            img: './Images/two.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
        {
            img: './Images/three.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
         {
            img: './Images/one.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
        {
            img: './Images/be5169d4-f5ef-46a7-ab88-742cca2f09e0.jpeg',
            title: 'عنوان الشهادة ',
            description: 'ن الرؤية الطموحة للمملكة العربية السعودية 2030 تمثل تحدياً تاريخياً لبناء وتطوير القيادات. الرؤية لذلك قدمت أكاديمية تطوير القيادات مجموعة من الحلول والبرامج التطويرية لبناء وتطوير قادة المستقبل. برامج الأكاديمية تتولى نقل خبرات التنمية الشاملة والانتقال بها نحو المستقبل الواعد.',
            link: '#'
        },
    ];

    const gridContainer = document.getElementById('grid-container');

    certificates.forEach(cert => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        gridItem.innerHTML = `
            <img src="${cert.img}" alt="${cert.title}">
            <div class="content">
                <h3>${cert.title}</h3>
                <p>${cert.description}</p>
                <div class="details">
                    <a href="${cert.link}">تعرف علي المزيد</a>
                </div>
            </div>
        `;

        gridContainer.appendChild(gridItem);
    });
});


// stop zoom

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Prevent Ctrl+scroll zoom
window.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });


window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0' || event.key === '=')) {
        event.preventDefault();
    }
});

// Prevent multi-finger zoom
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Prevent pinch-to-zoom
document.addEventListener('touchmove', function(event) {
    if (event.scale !== undefined && event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });