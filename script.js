// دالة للاشتراك في خدمة معينة
function subscribe(facility) {
    // عرض رسالة تأكيد الاشتراك
    alert("تم الاشتراك بنجاح في خدمة: " + facility);
}



document.addEventListener("DOMContentLoaded", function() {
    // تعديل دالة إرسال نموذج الاتصال
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // عرض رسالة شكر
        alert(`شكرًا لك، ${name}! سنقوم بالرد على رسالتك قريبًا.`);
        this.reset(); // إعادة تعيين النموذج
    });

    // إضافة حدث لزر مشاهدة الفيديو
    const showVideoButton = document.getElementById('showVideoButton');
    if (showVideoButton) {
        showVideoButton.addEventListener('click', function() {
            document.getElementById('videoSection').style.display = 'block'; // إظهار قسم الفيديو
            this.style.display = 'none'; // إخفاء زر مشاهدة الفيديو
        });
    }
});


function showPackageDetails() {
    const packageSelect = document.getElementById("packageSelect");
    const detailsText = document.getElementById("detailsText");
    const packageDetails = document.getElementById("packageDetails");
    const bookButton = document.getElementById("bookButton");

    switch (packageSelect.value) {
        case "خمس جولات":
            detailsText.innerHTML = `
                <strong>تفاصيل الحزمة:</strong><br>
                - إقامة كاملة لمدة خمس ليال في جناح فاخر.<br>
                - خمس جولات - 18 حفرة.<br>
                - جولة واحدة مضمونة في ملعب "سي فيو" الشهير.<br>
                - جلسة تدريب رقمية مجانية.
            `;
            bookButton.style.display = "block";
            packageDetails.style.display = "block";
            break;
        case "الجولة الثلاثية":
            detailsText.innerHTML = `
                <strong>تفاصيل الحزمة:</strong><br>
                - إقامة لمدة ليلتين في غرفة مزدوجة مع وجبة الإفطار.<br>
                - ثلاث جولات - 18 حفرة، تشمل خوض جولة واحدة في ملعب "سي فيو" الشهير (إن وجدت).<br>
                - تأجير مجاني للعربات.<br>
                - خصم 2% لمتجر المحترفين.
            `;
            bookButton.style.display = "block";
            packageDetails.style.display = "block";
            break;
        case "استراحة استجمام":
            detailsText.innerHTML = `
                <strong>تفاصيل الحزمة:</strong><br>
                - إقامة لليلة واحدة مع وجبة إفطار كاملة.<br>
                - تناول العشاء في أي من مطاعم المنتجع.<br>
                - الوصول إلى الملاعب (تطبق الرسوم ويستبعد ملعب "سي فيو").<br>
                - تأجير نادي مجاني.
            `;
            bookButton.style.display = "block";
            packageDetails.style.display = "block";
            break;
        case "الحزم المخصصة":
            detailsText.innerHTML = `
                <strong>تفاصيل الحزمة:</strong><br>
                - تتوفر الحزم المخصصة للفعاليات المؤسسية والإقامات الطويلة.<br>
                - يجب على العملاء الاتصال بالشركة لترتيب أي حزم مخصصة.
            `;
            bookButton.style.display = "none"; // لا حاجة لزر الحجز هنا
            packageDetails.style.display = "block";
            break;
        default:
            detailsText.innerHTML = "";
            bookButton.style.display = "none";
            packageDetails.style.display = "none";
            break;
    }
}

function bookPackage() {
    alert("تم حجز الحزمة بنجاح!");
}