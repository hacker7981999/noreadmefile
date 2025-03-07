async function renDerUser() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        const data = await response.json();
        
        document.getElementById("user-container").innerHTML = ""; 
        data.results.forEach(user => {
            const userCard = document.createElement("div");
            userCard.className = "user-card";

            userCard.innerHTML = `
                <img src="${user.picture.large}" alt="User Picture">
                <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
                <p> <span class="span">Age:</span>   ${user.dob.age} years</p>
                <p><span class="span">Phone:</span>  ${user.phone}</p>
                <p><span class="span">Location:</span>   ${user.location.city}, ${user.location.country}</p>
                <p><span class="span">Email:</span>    <a href="mailto:${user.email}">${user.email}</a></p>
                <button class="change-user-btn">Change User</button>
            `;

            document.getElementById("user-container").appendChild(userCard);
        });

        document.querySelector(".change-user-btn").addEventListener("click", renDerUser);
        
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

renDerUser();
