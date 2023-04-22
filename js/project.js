$(document).ready(function() {

    $("#show").click(function() {
        showPopup();
    });

    $("#popup").click(function() {
        $(this).hide();
        $("#mask").hide();
    });

    $("#show2").click(function() {
        showPopup2();
    });

    $("#popup2").click(function() {
        $(this).hide();
        $("#mask2").hide();
    });

    $("#show3").click(function() {
        showPopup3();
    });

    $("#popup3").click(function() {
        $(this).hide();
        $("#mask3").hide();
    });
});


function showPopup() {
    // show the mask
    $("#mask").fadeTo(500, 0.25);

    // show the popup
    $("#popup").show();
}

function showPopup2() {
    // show the mask
    $("#mask2").fadeTo(500, 0.25);

    // show the popup
    $("#popup2").show();
}

function showPopup3() {
    // show the mask
    $("#mask3").fadeTo(500, 0.25);

    // show the popup
    $("#popup3").show();
}

const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    wrap: true
})

// make the form shake 
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});


function displayTestimonials() {
    const testimonials = [
    {
        name: "John Doe",
        comment: "Great service! I received my medication on time and the staff was very helpful."
    },
    {
        name: "Jane Smith",
        comment: "I've been a customer for years and I always receive excellent service from this pharmacy."
    },
    {
        name: "Bob Johnson",
        comment: "I was pleasantly surprised by how fast my prescription was filled. Highly recommend!"
    }
    ];
  
    const testimonialsSection = document.getElementById("testimonials-section");
    let testimonialHTML = "";
  
    testimonials.forEach(testimonial => {
        testimonialHTML += `
            <div class="testimonial">
            <p class="comment">${testimonial.comment}</p>
            <p class="name">${testimonial.name}</p>
            </div>`;
    });
    testimonialsSection.innerHTML = testimonialHTML;
}
  
displayTestimonials();
