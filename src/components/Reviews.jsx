import React from 'react'

const Reviews = () => {
    const reviews = [
      
        {
            img: "https://static.vecteezy.com/system/resources/thumbnails/048/926/084/small_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg",
            name: "Rohit Kumar",
            review: "The invisible grills are fantastic! They provide safety without blocking the view. Installation was quick and professional."
        },
        {
            img: "https://static.vecteezy.com/system/resources/thumbnails/048/926/084/small_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg",
            name: "Anusha",
            review: "I love how sleek and modern the invisible grills look. They are sturdy and give me peace of mind for my kids"
        },
        {
            img: "https://static.vecteezy.com/system/resources/thumbnails/048/926/084/small_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg",
            name: "Mukesh Reddy",
            review: "Great quality and service! The grills are strong yet almost invisible, making my balcony feel open and secure."
        }
    ]
    return (
        <div className='reviews'>
            <div className="reviews-header">
                <h2>People Say The Nicest Things</h2>
                <p>Hear from our happy customers who trust our <b>invisible grills</b>  for safety and style. Their experiences highlight the strength, elegance, and security our grills provide without compromising the view.</p>
            </div>

            <div className="reviews-wrapper">
                {
                    reviews.map((r, i) => (
                        <div key={i} className='review'>
                            <img src={r.img} alt={r.name} />
                            <h3>{r.name}</h3>
                            <p>{r.review}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews